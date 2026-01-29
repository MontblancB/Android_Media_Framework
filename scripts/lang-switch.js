/**
 * Language Switch System
 * Handles Korean/English language switching with URL-based routing
 */

(function() {
    'use strict';

    const LANGS = {
        KO: 'ko',
        EN: 'en'
    };

    /**
     * Get current language from URL path
     * /en/* -> English, otherwise -> Korean
     */
    function getCurrentLang() {
        const path = window.location.pathname;
        return path.startsWith('/en/') || path === '/en' ? LANGS.EN : LANGS.KO;
    }

    /**
     * Get the URL for the other language version
     */
    function getOtherLangUrl() {
        const currentLang = getCurrentLang();
        const path = window.location.pathname;

        if (currentLang === LANGS.KO) {
            // Korean -> English: add /en/ prefix
            if (path === '/' || path === '/index.html') {
                return '/en/index.html';
            }
            return '/en' + path;
        } else {
            // English -> Korean: remove /en/ prefix
            const koPath = path.replace(/^\/en\/?/, '/');
            return koPath === '' ? '/' : koPath;
        }
    }

    /**
     * Create and inject language switch button
     */
    function createLangSwitch() {
        const currentLang = getCurrentLang();
        const isKorean = currentLang === LANGS.KO;

        const langSwitchHTML = `
            <div class="lang-switch">
                <button class="lang-btn ${isKorean ? 'active' : ''}" data-lang="ko" ${isKorean ? 'disabled' : ''}>
                    KO
                </button>
                <button class="lang-btn ${!isKorean ? 'active' : ''}" data-lang="en" ${!isKorean ? 'disabled' : ''}>
                    EN
                </button>
            </div>
        `;

        // Try to insert into navigation
        const nav = document.querySelector('nav');
        const navLinks = nav ? nav.querySelector('.nav-links') : null;

        if (navLinks) {
            // Main page: add to nav-links (before theme toggle)
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = langSwitchHTML;
            const langSwitch = tempDiv.firstElementChild;

            const themeToggle = navLinks.querySelector('.theme-toggle');
            if (themeToggle) {
                navLinks.insertBefore(langSwitch, themeToggle);
            } else {
                navLinks.appendChild(langSwitch);
            }
        } else if (nav && nav.classList.contains('nav')) {
            // Document page: add before theme toggle
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = langSwitchHTML;
            const langSwitch = tempDiv.firstElementChild;

            const themeToggle = nav.querySelector('.theme-toggle');
            if (themeToggle) {
                nav.insertBefore(langSwitch, themeToggle);
            } else {
                nav.appendChild(langSwitch);
            }
        }

        // Add event listeners
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const targetLang = e.target.dataset.lang;
                if (targetLang !== currentLang) {
                    window.location.href = getOtherLangUrl();
                }
            });
        });
    }

    /**
     * Initialize language switch when DOM is ready
     */
    function init() {
        // Wait a bit for theme-toggle to be created first
        setTimeout(createLangSwitch, 10);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
