/**
 * Mermaid Theme Configuration
 * Handles dark/light mode theme switching for Mermaid diagrams
 */

(function() {
    'use strict';

    /**
     * Get Mermaid theme configuration based on current theme
     */
    function getMermaidConfig() {
        const isDark = document.documentElement.getAttribute('data-theme') !== 'light';

        if (isDark) {
            // Dark theme configuration
            return {
                startOnLoad: true,
                theme: 'base',
                themeVariables: {
                    darkMode: true,
                    background: '#1a2030',
                    primaryColor: '#8b5cf6',
                    primaryTextColor: '#e8eaed',
                    primaryBorderColor: '#8b5cf6',

                    secondaryColor: '#ec4899',
                    secondaryTextColor: '#e8eaed',
                    secondaryBorderColor: '#ec4899',

                    tertiaryColor: '#3b82f6',
                    tertiaryTextColor: '#e8eaed',
                    tertiaryBorderColor: '#3b82f6',

                    lineColor: '#4b5563',
                    textColor: '#e8eaed',
                    mainBkg: '#1a2030',
                    nodeBorder: '#8b5cf6',
                    clusterBkg: '#1a2030',
                    clusterBorder: '#4b5563',
                    defaultLinkColor: '#4b5563',
                    titleColor: '#e8eaed',
                    edgeLabelBackground: '#1a2030',
                    nodeTextColor: '#e8eaed',

                    // Activity diagram
                    actorBorder: '#8b5cf6',
                    actorBkg: '#1a2030',
                    actorTextColor: '#e8eaed',
                    actorLineColor: '#4b5563',
                    signalColor: '#e8eaed',
                    signalTextColor: '#e8eaed',
                    labelBoxBkgColor: '#1a2030',
                    labelBoxBorderColor: '#4b5563',
                    labelTextColor: '#e8eaed',
                    loopTextColor: '#e8eaed',
                    activationBorderColor: '#8b5cf6',
                    activationBkgColor: '#1a2030',
                    sequenceNumberColor: '#e8eaed',

                    // Flowchart
                    fillType0: '#8b5cf6',
                    fillType1: '#ec4899',
                    fillType2: '#3b82f6',
                    fillType3: '#10b981',
                    fillType4: '#f59e0b',
                    fillType5: '#6366f1',
                    fillType6: '#f43f5e',
                    fillType7: '#06b6d4'
                }
            };
        } else {
            // Light theme configuration
            return {
                startOnLoad: true,
                theme: 'base',
                themeVariables: {
                    darkMode: false,
                    background: '#fafaf9',
                    primaryColor: '#dbeafe',
                    primaryTextColor: '#292524',
                    primaryBorderColor: '#0369a1',

                    secondaryColor: '#fee2e2',
                    secondaryTextColor: '#292524',
                    secondaryBorderColor: '#dc2626',

                    tertiaryColor: '#e0e7ff',
                    tertiaryTextColor: '#292524',
                    tertiaryBorderColor: '#1d4ed8',

                    lineColor: '#a8a29e',
                    textColor: '#292524',
                    mainBkg: '#fafaf9',
                    nodeBorder: '#0369a1',
                    clusterBkg: '#f5f5f4',
                    clusterBorder: '#a8a29e',
                    defaultLinkColor: '#a8a29e',
                    titleColor: '#292524',
                    edgeLabelBackground: '#fafaf9',
                    nodeTextColor: '#292524',

                    // Activity diagram
                    actorBorder: '#0369a1',
                    actorBkg: '#fafaf9',
                    actorTextColor: '#292524',
                    actorLineColor: '#a8a29e',
                    signalColor: '#292524',
                    signalTextColor: '#292524',
                    labelBoxBkgColor: '#fafaf9',
                    labelBoxBorderColor: '#a8a29e',
                    labelTextColor: '#292524',
                    loopTextColor: '#292524',
                    activationBorderColor: '#0369a1',
                    activationBkgColor: '#e0f2fe',
                    sequenceNumberColor: '#292524',

                    // Flowchart
                    fillType0: '#dbeafe',
                    fillType1: '#fee2e2',
                    fillType2: '#e0e7ff',
                    fillType3: '#d1fae5',
                    fillType4: '#fed7aa',
                    fillType5: '#e0e7ff',
                    fillType6: '#fecdd3',
                    fillType7: '#cffafe'
                }
            };
        }
    }

    /**
     * Initialize Mermaid with current theme
     */
    function initMermaid() {
        const config = getMermaidConfig();

        if (typeof mermaid !== 'undefined') {
            mermaid.initialize(config);

            // Re-render existing diagrams if page already loaded
            if (document.readyState === 'complete') {
                mermaid.contentLoaded();
            }
        }
    }

    /**
     * Watch for theme changes and reinitialize Mermaid
     */
    function watchThemeChanges() {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'data-theme') {
                    initMermaid();
                }
            });
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme']
        });
    }

    /**
     * Initialize on page load
     */
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            initMermaid();
            watchThemeChanges();
        });
    } else {
        initMermaid();
        watchThemeChanges();
    }

})();
