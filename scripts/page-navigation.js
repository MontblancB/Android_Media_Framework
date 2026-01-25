/**
 * Page Navigation - 이전/다음 페이지 네비게이션
 * 각 페이지의 순서에 따라 이전/다음 버튼을 자동 생성합니다.
 */

// 페이지 순서 정의 (index.html의 카드 순서와 동일)
const PAGE_ORDER = [
    { url: 'aosp.html', title: 'Android AOSP Architecture', category: 'Architecture' },
    { url: 'android-version-history.html', title: 'Android Version History', category: 'Architecture' },
    { url: 'aaos.html', title: 'Android Automotive OS', category: 'Automotive' },
    { url: 'media-framework-core.html', title: 'Media Framework Core', category: 'Media' },
    { url: 'codec2.html', title: 'Codec 2.0 & Media HAL', category: 'Media' },
    { url: 'dolby-codecs.html', title: 'Dolby Codecs & AOSP', category: 'Media' },
    { url: 'media-playback.html', title: 'Media Pipeline & Data Flow', category: 'Media' },
    { url: 'media-extractor.html', title: 'MediaExtractor & Container', category: 'Media' },
    { url: 'mediasession.html', title: 'MediaSession Framework', category: 'Media' },
    { url: 'mediaprovider.html', title: 'MediaProvider & Storage Access', category: 'Media' },
    { url: 'audio-framework.html', title: 'Audio Framework', category: 'Audio' },
    { url: 'carmedia.html', title: 'Car Media Service', category: 'Automotive' },
    { url: 'aaos-key-events.html', title: 'AAOS Key Event Handling', category: 'Automotive' },
    { url: 'aaos-last-media.html', title: 'AAOS Last Media & Autoplay', category: 'Automotive' },
    { url: 'power-policy-suspend.html', title: 'Power Policy & Suspend', category: 'Automotive' },
    { url: 'widevine.html', title: 'DRM & Widevine Architecture', category: 'DRM' },
    { url: 'gas.html', title: 'Google Automotive Services', category: 'Automotive' },
    { url: 'carma.html', title: 'Car Ready Mobile Apps', category: 'Architecture' },
    { url: 'media-app-layer.html', title: 'Media App Layer & APIs', category: 'Media' },
    { url: 'cts.html', title: 'CTS / VTS / GTS', category: 'Testing' },
    { url: 'cdd.html', title: 'CDD Policy', category: 'Testing' },
    { url: 'common-media-issues.html', title: 'Common Media Issues & Solutions', category: 'Reference' },
    { url: 'debugging-tools.html', title: 'Debugging & Profiling Tools', category: 'Dev Tools' },
    { url: 'api-quick-reference.html', title: 'API Quick Reference', category: 'Reference' },
    { url: 'migration-guides.html', title: 'Migration Guides', category: 'Dev Tools' },
    { url: 'glossary.html', title: 'Android Media Glossary', category: 'Reference' }
];

document.addEventListener('DOMContentLoaded', () => {
    addPageNavigation();
    addBreadcrumb();
});

function addPageNavigation() {
    // 현재 페이지 URL 가져오기
    const currentPage = window.location.pathname.split('/').pop();

    // index.html이면 네비게이션 불필요
    if (currentPage === 'index.html' || currentPage === '') {
        return;
    }

    // 현재 페이지 인덱스 찾기
    const currentIndex = PAGE_ORDER.findIndex(page => page.url === currentPage);

    if (currentIndex === -1) {
        return; // 페이지를 찾지 못함
    }

    const prevPage = currentIndex > 0 ? PAGE_ORDER[currentIndex - 1] : null;
    const nextPage = currentIndex < PAGE_ORDER.length - 1 ? PAGE_ORDER[currentIndex + 1] : null;

    // 네비게이션 HTML 생성
    let navHTML = '<div class="page-navigation">';

    // 이전 페이지 버튼
    if (prevPage) {
        navHTML += `
            <a href="${prevPage.url}" class="page-nav-btn page-nav-prev">
                <span class="nav-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </span>
                <div class="nav-content">
                    <span class="nav-label">이전 페이지</span>
                    <span class="nav-title">${prevPage.title}</span>
                </div>
            </a>
        `;
    } else {
        navHTML += '<div class="page-nav-placeholder"></div>';
    }

    // 홈 버튼
    navHTML += `
        <a href="index.html" class="page-nav-btn page-nav-home">
            <span class="nav-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
            </span>
            <span class="nav-label">메인으로</span>
        </a>
    `;

    // 다음 페이지 버튼
    if (nextPage) {
        navHTML += `
            <a href="${nextPage.url}" class="page-nav-btn page-nav-next">
                <div class="nav-content">
                    <span class="nav-label">다음 페이지</span>
                    <span class="nav-title">${nextPage.title}</span>
                </div>
                <span class="nav-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </span>
            </a>
        `;
    } else {
        navHTML += '<div class="page-nav-placeholder"></div>';
    }

    navHTML += '</div>';

    // Footer에 추가
    const footer = document.querySelector('footer');
    if (footer) {
        // footer 내용 앞에 네비게이션 삽입
        footer.insertAdjacentHTML('afterbegin', navHTML);
    }
}

function addBreadcrumb() {
    const currentPage = window.location.pathname.split('/').pop();

    // index.html이면 breadcrumb 불필요
    if (currentPage === 'index.html' || currentPage === '') {
        return;
    }

    // 현재 페이지 정보 찾기
    const pageInfo = PAGE_ORDER.find(page => page.url === currentPage);

    if (!pageInfo) {
        return;
    }

    // 기존 nav 찾기
    const nav = document.querySelector('.nav');
    if (!nav) {
        return;
    }

    // nav-button을 breadcrumb으로 교체
    const navButton = nav.querySelector('.nav-button');
    if (navButton) {
        const breadcrumbHTML = `
            <div class="breadcrumb">
                <a href="index.html" class="breadcrumb-home">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    <span>Home</span>
                </a>
                <span class="separator">/</span>
                <span class="category">${pageInfo.category}</span>
                <span class="separator">/</span>
                <span class="current">${pageInfo.title}</span>
            </div>
        `;
        navButton.outerHTML = breadcrumbHTML;
    }
}
