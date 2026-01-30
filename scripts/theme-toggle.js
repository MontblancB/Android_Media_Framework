/**
 * Theme Toggle System
 * Handles dark/light mode switching with localStorage persistence
 */

(function() {
    'use strict';

    const THEME_KEY = 'android-media-framework-theme';
    const THEMES = {
        DARK: 'dark',
        LIGHT: 'light'
    };

    /**
     * Get current theme from localStorage or system preference
     */
    function getCurrentTheme() {
        const savedTheme = localStorage.getItem(THEME_KEY);

        if (savedTheme) {
            return savedTheme;
        }

        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            return THEMES.LIGHT;
        }

        return THEMES.DARK;
    }

    /**
     * Apply theme to document
     */
    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(THEME_KEY, theme);

        // Update meta theme-color for mobile browsers
        updateMetaThemeColor(theme);
    }

    /**
     * Update meta theme-color for mobile browsers
     */
    function updateMetaThemeColor(theme) {
        let metaThemeColor = document.querySelector('meta[name="theme-color"]');

        if (!metaThemeColor) {
            metaThemeColor = document.createElement('meta');
            metaThemeColor.name = 'theme-color';
            document.head.appendChild(metaThemeColor);
        }

        const color = theme === THEMES.DARK ? '#0a0e1a' : '#fafaf9';
        metaThemeColor.content = color;
    }

    /**
     * Toggle between themes
     */
    function toggleTheme() {
        const currentTheme = getCurrentTheme();
        const newTheme = currentTheme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
        applyTheme(newTheme);
    }

    /**
     * Initialize theme on page load
     */
    function initTheme() {
        const currentTheme = getCurrentTheme();
        applyTheme(currentTheme);
    }

    /**
     * Check if current page is main page (index.html)
     */
    function isMainPage() {
        const path = window.location.pathname;
        // Main page patterns: /, /index.html, /en/, /en/index.html
        return path === '/' ||
               path.endsWith('/index.html') ||
               path.endsWith('/index') ||
               path === '/en/' ||
               path === '/en';
    }

    /**
     * Create and inject theme toggle button (only on main page)
     */
    function createThemeToggle() {
        // Only create theme toggle button on main page
        if (!isMainPage()) {
            return;
        }

        const themeToggleHTML = `
            <div class="theme-toggle">
                <button class="theme-toggle-btn" aria-label="Toggle theme" title="Toggle dark/light mode">
                    <span class="theme-icon moon-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </span>
                    <span class="theme-icon sun-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="5"></circle>
                            <line x1="12" y1="1" x2="12" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="23"></line>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                            <line x1="1" y1="12" x2="3" y2="12"></line>
                            <line x1="21" y1="12" x2="23" y2="12"></line>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                        </svg>
                    </span>
                </button>
            </div>
        `;

        // Try to insert into navigation first
        const nav = document.querySelector('nav');
        const navLinks = nav ? nav.querySelector('.nav-links') : null;

        if (navLinks) {
            // Main page: add to nav-links
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = themeToggleHTML;
            const themeToggle = tempDiv.firstElementChild;
            navLinks.appendChild(themeToggle);
        }

        // Add event listener
        const toggleBtn = document.querySelector('.theme-toggle-btn');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', toggleTheme);
        }
    }

    /**
     * Listen for system theme changes
     */
    function watchSystemTheme() {
        if (window.matchMedia) {
            const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

            darkModeQuery.addEventListener('change', (e) => {
                // Only auto-switch if user hasn't manually set a preference
                if (!localStorage.getItem(THEME_KEY)) {
                    const newTheme = e.matches ? THEMES.DARK : THEMES.LIGHT;
                    applyTheme(newTheme);
                }
            });
        }
    }

    /**
     * Initialize theme system when DOM is ready
     */
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            initTheme();
            createThemeToggle();
            watchSystemTheme();
        });
    } else {
        initTheme();
        createThemeToggle();
        watchSystemTheme();
    }

    // Expose toggle function globally for manual triggering
    window.toggleTheme = toggleTheme;

})();
