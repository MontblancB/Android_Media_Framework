/**
 * Code Copy Button - 코드 블록 복사 기능
 * 모든 <pre><code> 블록에 복사 버튼을 자동으로 추가합니다.
 */

document.addEventListener('DOMContentLoaded', () => {
    addCopyButtonsToCodeBlocks();
});

function addCopyButtonsToCodeBlocks() {
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

        // 헤더 생성
        const header = document.createElement('div');
        header.className = 'code-header';
        header.innerHTML = `
            <span class="code-lang">${language}</span>
            <button class="copy-btn" data-code-id="${codeId}" aria-label="코드 복사">
                <span class="copy-icon">📋</span>
                <span class="copy-text">복사</span>
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
    const icon = button.querySelector('.copy-icon');
    const text = button.querySelector('.copy-text');

    // 원래 내용 저장
    const originalIcon = icon.textContent;
    const originalText = text.textContent;

    // 성공 표시
    icon.textContent = '✅';
    text.textContent = '복사됨!';
    button.classList.add('copied');
    button.disabled = true;

    // 2초 후 원래대로
    setTimeout(() => {
        icon.textContent = originalIcon;
        text.textContent = originalText;
        button.classList.remove('copied');
        button.disabled = false;
    }, 2000);
}

// 에러 피드백
function showCopyError(button) {
    const icon = button.querySelector('.copy-icon');
    const text = button.querySelector('.copy-text');

    const originalIcon = icon.textContent;
    const originalText = text.textContent;

    icon.textContent = '❌';
    text.textContent = '실패';
    button.classList.add('error');

    setTimeout(() => {
        icon.textContent = originalIcon;
        text.textContent = originalText;
        button.classList.remove('error');
    }, 2000);
}
