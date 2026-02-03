/**
 * Code Copy Button - 코드 블록 복사 기능
 * 모든 <pre><code> 블록에 복사 버튼을 자동으로 추가합니다.
 * 다국어 지원: 한국어(ko) / 영어(en)
 */

// 현재 페이지 언어 감지 (URL 기반)
function getCurrentLang() {
    return window.location.pathname.startsWith('/en/') ? 'en' : 'ko';
}

// 다국어 텍스트
const i18n = {
    ko: {
        copy: '복사',
        copied: '복사됨!',
        failed: '실패',
        ariaLabel: '코드 복사'
    },
    en: {
        copy: 'Copy',
        copied: 'Copied!',
        failed: 'Failed',
        ariaLabel: 'Copy code'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    addCopyButtonsToCodeBlocks();
});

function addCopyButtonsToCodeBlocks() {
    // 현재 언어 가져오기
    const lang = getCurrentLang();
    const texts = i18n[lang];

    // 이미 래퍼가 있는 코드 블록은 제외
    const codeBlocks = document.querySelectorAll('pre:not(.code-block-wrapper pre)');

    codeBlocks.forEach((pre, index) => {
        const code = pre.querySelector('code');
        if (!code) return;

        // 고유 ID 생성
        const codeId = `code-block-${index}`;
        code.id = codeId;

        // 언어 감지 (클래스명에서)
        let language = 'Code';
        if (code.className) {
            const langMatch = code.className.match(/language-(\w+)/);
            if (langMatch) {
                language = langMatch[1].charAt(0).toUpperCase() + langMatch[1].slice(1);
            }
        }

        // 코드 내용에서 언어 추측 (클래스가 없는 경우)
        if (language === 'Code') {
            const codeText = code.textContent.trim();
            if (codeText.includes('val ') || codeText.includes('fun ')) {
                language = 'Kotlin';
            } else if (codeText.includes('const ') || codeText.includes('let ') || codeText.includes('function')) {
                language = 'JavaScript';
            } else if (codeText.includes('class ') && codeText.includes('public')) {
                language = 'Java';
            } else if (codeText.includes('def ') || codeText.includes('import ')) {
                language = 'Python';
            } else if (codeText.startsWith('<?xml') || codeText.includes('<urlset')) {
                language = 'XML';
            } else if (codeText.includes('adb ') || codeText.includes('dumpsys')) {
                language = 'Shell';
            }
        }

        // 래퍼 생성
        const wrapper = document.createElement('div');
        wrapper.className = 'code-block-wrapper';

        // 헤더 생성 (다국어 텍스트 적용)
        const header = document.createElement('div');
        header.className = 'code-header';
        header.innerHTML = `
            <span class="code-lang">${language}</span>
            <button class="copy-btn" data-code-id="${codeId}" data-tooltip="${texts.copy}" aria-label="${texts.ariaLabel}">
                <svg class="copy-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                </svg>
            </button>
        `;

        // DOM 구조 변경
        pre.parentNode.insertBefore(wrapper, pre);
        wrapper.appendChild(header);
        wrapper.appendChild(pre);

        // 복사 버튼 이벤트
        const copyBtn = header.querySelector('.copy-btn');
        copyBtn.addEventListener('click', () => {
            copyCodeToClipboard(codeId, copyBtn);
        });
    });
}

function copyCodeToClipboard(codeId, button) {
    const codeElement = document.getElementById(codeId);
    if (!codeElement) return;

    const codeText = codeElement.textContent;

    // Clipboard API 사용 (모던 브라우저)
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(codeText).then(() => {
            showCopySuccess(button);
        }).catch(err => {
            console.error('Clipboard API 실패:', err);
            fallbackCopyToClipboard(codeText, button);
        });
    } else {
        // 폴백: 구식 방법
        fallbackCopyToClipboard(codeText, button);
    }
}

// 폴백 복사 함수 (오래된 브라우저용)
function fallbackCopyToClipboard(text, button) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.top = '-9999px';
    textArea.style.left = '-9999px';
    textArea.style.opacity = '0';

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showCopySuccess(button);
        } else {
            showCopyError(button);
        }
    } catch (err) {
        console.error('복사 실패:', err);
        showCopyError(button);
    }

    document.body.removeChild(textArea);
}

// 성공 피드백
function showCopySuccess(button) {
    const lang = getCurrentLang();
    const texts = i18n[lang];
    const icon = button.querySelector('.copy-icon');

    // 원래 SVG 저장
    const originalSVG = icon.outerHTML;
    const originalTooltip = button.getAttribute('data-tooltip');

    // 성공 표시 (체크 아이콘)
    icon.outerHTML = `
        <svg class="copy-icon check-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
    `;
    button.setAttribute('data-tooltip', texts.copied);
    button.classList.add('copied');
    button.disabled = true;

    // 2초 후 원래대로
    setTimeout(() => {
        const currentIcon = button.querySelector('.copy-icon');
        currentIcon.outerHTML = originalSVG;
        button.setAttribute('data-tooltip', originalTooltip);
        button.classList.remove('copied');
        button.disabled = false;
    }, 2000);
}

// 에러 피드백
function showCopyError(button) {
    const lang = getCurrentLang();
    const texts = i18n[lang];
    const icon = button.querySelector('.copy-icon');

    const originalSVG = icon.outerHTML;
    const originalTooltip = button.getAttribute('data-tooltip');

    // 에러 표시 (X 아이콘)
    icon.outerHTML = `
        <svg class="copy-icon error-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
    `;
    button.setAttribute('data-tooltip', texts.failed);
    button.classList.add('error');

    setTimeout(() => {
        const currentIcon = button.querySelector('.copy-icon');
        currentIcon.outerHTML = originalSVG;
        button.setAttribute('data-tooltip', originalTooltip);
        button.classList.remove('error');
    }, 2000);
}
