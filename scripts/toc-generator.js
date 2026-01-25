/**
 * Table of Contents Generator - 페이지 내 목차 자동 생성
 * .content-section의 제목을 읽어 사이드바 목차를 생성합니다.
 */

document.addEventListener('DOMContentLoaded', () => {
    generateTOC();
    setupScrollSpy();
});

function generateTOC() {
    // TOC 사이드바가 있는지 확인
    let tocSidebar = document.getElementById('tocSidebar');

    // 없으면 생성
    if (!tocSidebar) {
        tocSidebar = document.createElement('aside');
        tocSidebar.id = 'tocSidebar';
        tocSidebar.className = 'toc-sidebar';
        tocSidebar.innerHTML = `
            <div class="toc-header">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="toc-icon">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
                </svg>
                <span>목차</span>
                <button class="toc-toggle-btn" id="tocToggleBtn" aria-label="목차 접기/펼치기">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </button>
            </div>
            <nav class="toc-nav" id="tocNav"></nav>
        `;

        // container 다음에 추가
        const container = document.querySelector('.container');
        if (container && container.parentNode) {
            container.parentNode.insertBefore(tocSidebar, container.nextSibling);
        } else {
            document.body.appendChild(tocSidebar);
        }
    }

    const tocNav = document.getElementById('tocNav');
    const sections = document.querySelectorAll('.content-section');

    // 섹션이 없으면 TOC 숨김
    if (sections.length === 0) {
        tocSidebar.style.display = 'none';
        return;
    }

    let tocHTML = '<ul class="toc-list">';

    sections.forEach((section, index) => {
        const title = section.querySelector('.section-title');
        if (!title) return;

        const sectionId = section.id || `section-${index + 1}`;

        // ID 자동 생성
        if (!section.id) {
            section.id = sectionId;
        }

        const titleText = title.textContent.trim();
        const sectionNumber = title.querySelector('.section-number')?.textContent || '';
        const cleanTitle = titleText.replace(sectionNumber, '').trim();

        tocHTML += `
            <li class="toc-item">
                <a href="#${sectionId}" class="toc-link" data-section="${sectionId}">
                    <span class="toc-number">${sectionNumber}</span>
                    <span class="toc-text">${cleanTitle}</span>
                </a>
            </li>
        `;
    });

    tocHTML += '</ul>';
    tocNav.innerHTML = tocHTML;

    // 스무스 스크롤 이벤트
    document.querySelectorAll('.toc-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').slice(1);
            const target = document.getElementById(targetId);

            if (target) {
                const offsetTop = target.offsetTop - 100; // 헤더 공간 확보
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                // 활성 상태 업데이트
                document.querySelectorAll('.toc-link').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });

    // 토글 버튼 기능
    setupTOCToggle();
}

// TOC 접기/펼치기 기능
function setupTOCToggle() {
    const tocToggleBtn = document.getElementById('tocToggleBtn');
    const tocSidebar = document.getElementById('tocSidebar');

    if (!tocToggleBtn || !tocSidebar) return;

    // 로컬 스토리지에서 상태 복원
    const isCollapsed = localStorage.getItem('tocCollapsed') === 'true';
    if (isCollapsed) {
        tocSidebar.classList.add('collapsed');
    }

    tocToggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        tocSidebar.classList.toggle('collapsed');

        // 상태 저장
        const collapsed = tocSidebar.classList.contains('collapsed');
        localStorage.setItem('tocCollapsed', collapsed);
    });
}

// Scroll Spy - 스크롤 시 현재 섹션 하이라이트 및 TOC 표시
function setupScrollSpy() {
    let ticking = false;
    let scrollTimeout = null;
    const tocSidebar = document.getElementById('tocSidebar');

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateActiveTOCLink();

                // 스크롤 중일 때 TOC 표시
                if (tocSidebar) {
                    tocSidebar.classList.add('scrolling');

                    // 스크롤 멈춘 후 2초 뒤 다시 투명하게
                    clearTimeout(scrollTimeout);
                    scrollTimeout = setTimeout(() => {
                        tocSidebar.classList.remove('scrolling');
                    }, 2000);
                }

                ticking = false;
            });
            ticking = true;
        }
    });
}

function updateActiveTOCLink() {
    const sections = document.querySelectorAll('.content-section');
    const scrollPosition = window.scrollY + 150; // 오프셋

    let activeSection = null;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.id;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            activeSection = sectionId;
        }
    });

    if (activeSection) {
        document.querySelectorAll('.toc-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === activeSection) {
                link.classList.add('active');
            }
        });
    }
}
