/**
 * Search UI - 전역 검색 UI 컴포넌트
 *
 * 기능:
 * - Ctrl+K 또는 / 키로 검색 모달 열기
 * - Fuse.js를 사용한 퍼지 검색
 * - 페이지, 다이어그램 노드, 용어집, 트러블슈팅 검색
 */

(function() {
    'use strict';

    let searchModal = null;
    let searchInput = null;
    let searchResults = null;
    let fuse = null;
    let selectedIndex = -1;

    /**
     * Fuse.js 인스턴스 초기화
     */
    function initFuse() {
        if (typeof Fuse === 'undefined') {
            console.warn('Fuse.js not loaded');
            return;
        }

        // 모든 검색 데이터 통합
        const allItems = [
            ...SEARCH_INDEX.pages.map(item => ({ ...item, type: 'page' })),
            ...SEARCH_INDEX.issues.map(item => ({ ...item, type: 'issue', title: item.title })),
            ...SEARCH_INDEX.glossary.map(item => ({ ...item, type: 'glossary', title: item.term }))
        ];

        fuse = new Fuse(allItems, FUSE_OPTIONS);
    }

    /**
     * 검색 모달 HTML 생성
     */
    function createSearchModal() {
        const modal = document.createElement('div');
        modal.className = 'search-modal';
        modal.innerHTML = `
            <div class="search-modal-overlay"></div>
            <div class="search-modal-content">
                <div class="search-input-wrapper">
                    <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <input type="text" class="search-input" placeholder="페이지, 용어, 트러블슈팅 검색..." autocomplete="off" />
                    <kbd class="search-shortcut">ESC</kbd>
                </div>
                <div class="search-results"></div>
                <div class="search-footer">
                    <span><kbd>↑</kbd><kbd>↓</kbd> 이동</span>
                    <span><kbd>Enter</kbd> 선택</span>
                    <span><kbd>ESC</kbd> 닫기</span>
                </div>
            </div>
        `;
        return modal;
    }

    /**
     * 검색 모달 열기
     */
    function openSearch() {
        if (!searchModal) {
            searchModal = createSearchModal();
            document.body.appendChild(searchModal);
            searchInput = searchModal.querySelector('.search-input');
            searchResults = searchModal.querySelector('.search-results');

            // 이벤트 리스너
            searchInput.addEventListener('input', handleSearch);
            searchInput.addEventListener('keydown', handleKeydown);
            searchModal.querySelector('.search-modal-overlay').addEventListener('click', closeSearch);
        }

        searchModal.classList.add('show');
        searchInput.value = '';
        searchResults.innerHTML = renderEmptyState();
        selectedIndex = -1;

        // 포커스
        requestAnimationFrame(() => {
            searchInput.focus();
        });
    }

    /**
     * 검색 모달 닫기
     */
    function closeSearch() {
        if (searchModal) {
            searchModal.classList.remove('show');
        }
    }

    /**
     * 검색 처리
     */
    function handleSearch(e) {
        const query = e.target.value.trim();
        selectedIndex = -1;

        if (!query) {
            searchResults.innerHTML = renderEmptyState();
            return;
        }

        if (!fuse) {
            initFuse();
        }

        const results = fuse.search(query, { limit: 10 });
        searchResults.innerHTML = renderResults(results);
    }

    /**
     * 키보드 네비게이션
     */
    function handleKeydown(e) {
        const items = searchResults.querySelectorAll('.search-result-item');

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            selectedIndex = Math.min(selectedIndex + 1, items.length - 1);
            updateSelection(items);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            selectedIndex = Math.max(selectedIndex - 1, 0);
            updateSelection(items);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (selectedIndex >= 0 && items[selectedIndex]) {
                const url = items[selectedIndex].dataset.url;
                if (url) {
                    window.location.href = url;
                }
            }
        } else if (e.key === 'Escape') {
            closeSearch();
        }
    }

    /**
     * 선택 상태 업데이트
     */
    function updateSelection(items) {
        items.forEach((item, index) => {
            item.classList.toggle('selected', index === selectedIndex);
        });

        if (selectedIndex >= 0 && items[selectedIndex]) {
            items[selectedIndex].scrollIntoView({ block: 'nearest' });
        }
    }

    /**
     * 빈 상태 렌더링
     */
    function renderEmptyState() {
        return `
            <div class="search-empty">
                <p>검색어를 입력하세요</p>
                <div class="search-hints">
                    <span class="search-hint">MediaPlayer</span>
                    <span class="search-hint">버퍼링</span>
                    <span class="search-hint">Codec2</span>
                    <span class="search-hint">Widevine</span>
                </div>
            </div>
        `;
    }

    /**
     * 검색 결과 렌더링
     */
    function renderResults(results) {
        if (results.length === 0) {
            return `
                <div class="search-empty">
                    <p>검색 결과가 없습니다</p>
                </div>
            `;
        }

        // 타입별 그룹화
        const grouped = {
            page: [],
            issue: [],
            glossary: []
        };

        results.forEach(result => {
            const item = result.item;
            if (grouped[item.type]) {
                grouped[item.type].push(result);
            }
        });

        let html = '';

        // 페이지 결과
        if (grouped.page.length > 0) {
            html += `<div class="search-group">
                <div class="search-group-title">페이지</div>
                ${grouped.page.map(r => renderResultItem(r, 'page')).join('')}
            </div>`;
        }

        // 트러블슈팅 결과
        if (grouped.issue.length > 0) {
            html += `<div class="search-group">
                <div class="search-group-title">트러블슈팅</div>
                ${grouped.issue.map(r => renderResultItem(r, 'issue')).join('')}
            </div>`;
        }

        // 용어집 결과
        if (grouped.glossary.length > 0) {
            html += `<div class="search-group">
                <div class="search-group-title">용어집</div>
                ${grouped.glossary.map(r => renderResultItem(r, 'glossary')).join('')}
            </div>`;
        }

        return html;
    }

    /**
     * 개별 결과 항목 렌더링
     */
    function renderResultItem(result, type) {
        const item = result.item;
        const icons = {
            page: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>`,
            issue: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" /></svg>`,
            glossary: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></svg>`
        };

        const title = item.title || item.term;
        const description = item.description || item.definition;
        const badge = type === 'issue' ? `<span class="search-badge severity-${item.severity}">${item.severity}</span>` :
                      type === 'page' && item.category ? `<span class="search-badge">${item.category}</span>` : '';

        return `
            <a href="${item.url}" class="search-result-item" data-type="${type}" data-url="${item.url}">
                <span class="search-result-icon">${icons[type]}</span>
                <div class="search-result-content">
                    <div class="search-result-title">
                        ${title}
                        ${badge}
                    </div>
                    <div class="search-result-description">${description}</div>
                </div>
            </a>
        `;
    }

    /**
     * 전역 키보드 단축키
     */
    function handleGlobalKeydown(e) {
        // Ctrl+K 또는 Cmd+K
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            openSearch();
            return;
        }

        // / 키 (입력 필드에 포커스가 없을 때)
        if (e.key === '/' && !isInputFocused()) {
            e.preventDefault();
            openSearch();
            return;
        }
    }

    /**
     * 입력 필드에 포커스가 있는지 확인
     */
    function isInputFocused() {
        const active = document.activeElement;
        return active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA' || active.isContentEditable);
    }

    /**
     * 검색 버튼 생성
     */
    function createSearchButton() {
        const button = document.createElement('button');
        button.className = 'search-trigger-btn';
        button.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <span>검색</span>
            <kbd>⌘K</kbd>
        `;
        button.addEventListener('click', openSearch);
        return button;
    }

    /**
     * 초기화
     */
    function init() {
        // Fuse.js 초기화
        if (typeof Fuse !== 'undefined' && typeof SEARCH_INDEX !== 'undefined') {
            initFuse();
        }

        // 전역 키보드 이벤트
        document.addEventListener('keydown', handleGlobalKeydown);

        // 검색 버튼 추가 (nav-links에)
        const navLinks = document.querySelector('.nav-links');
        if (navLinks) {
            const searchBtn = createSearchButton();
            navLinks.insertBefore(searchBtn, navLinks.firstChild);
        }

        console.log('Search UI initialized');
    }

    // DOM 로드 후 초기화
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // 전역 함수 노출
    window.openSearch = openSearch;
    window.closeSearch = closeSearch;
})();
