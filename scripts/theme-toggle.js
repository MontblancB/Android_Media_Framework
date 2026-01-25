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

        const color = theme === THEMES.DARK ? '#0a0e1a' : '#ffffff';
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
     * Create and inject theme toggle button
     */
    function createThemeToggle() {
        const themeToggleHTML = `
            <div class="theme-toggle">
                <button class="theme-toggle-btn" aria-label="Toggle theme" title="Toggle dark/light mode">
                    <span class="theme-icon moon-icon">🌙</span>
                    <span class="theme-icon sun-icon">☀️</span>
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
        } else if (nav && nav.classList.contains('nav')) {
            // Document page: add after nav-button
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = themeToggleHTML;
            const themeToggle = tempDiv.firstElementChild;
            nav.appendChild(themeToggle);
        } else {
            // Fallback: insert at body start
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = themeToggleHTML;
            const themeToggle = tempDiv.firstElementChild;
            document.body.insertBefore(themeToggle, document.body.firstChild);
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
