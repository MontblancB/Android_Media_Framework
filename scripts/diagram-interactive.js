/**
 * Diagram Interactive - Mermaid 다이어그램 인터랙티브 기능
 * 노드 클릭 시 상세 정보 모달 표시 및 호버 툴팁 기능 제공
 */

// 전역 변수
let activeModal = null;
let activeTooltip = null;

// DOM 로드 완료 후 초기화
document.addEventListener('DOMContentLoaded', () => {
    // Mermaid 렌더링 완료 대기 (1초)
    setTimeout(() => {
        initializeDiagramInteractivity();
    }, 1000);
});

/**
 * 다이어그램 인터랙티브 기능 초기화
 */
function initializeDiagramInteractivity() {
    const mermaidContainers = document.querySelectorAll('.mermaid');

    if (mermaidContainers.length === 0) {
        console.log('📊 인터랙티브 다이어그램: Mermaid 다이어그램을 찾을 수 없습니다.');
        return;
    }

    console.log(`📊 인터랙티브 다이어그램: ${mermaidContainers.length}개의 다이어그램 발견`);

    mermaidContainers.forEach((container, index) => {
        attachInteractiveHandlers(container, index);
    });

    console.log('✅ 인터랙티브 다이어그램 초기화 완료');
}

/**
 * 다이어그램에 클릭/호버 이벤트 추가
 */
function attachInteractiveHandlers(container, diagramIndex) {
    const svg = container.querySelector('svg');

    if (!svg) {
        console.warn(`⚠️ SVG를 찾을 수 없습니다 (다이어그램 ${diagramIndex})`);
        return;
    }

    // Mermaid가 생성한 모든 노드 찾기
    const nodes = svg.querySelectorAll('.node');

    console.log(`  다이어그램 ${diagramIndex}: ${nodes.length}개 노드 발견`);

    nodes.forEach((node, nodeIndex) => {
        const nodeId = extractNodeId(node);

        if (!nodeId) {
            return;
        }

        // 데이터가 있는 노드에만 인터랙티브 적용
        if (DIAGRAM_NODE_DATA[nodeId]) {
            // 커서 변경
            node.style.cursor = 'pointer';
            node.style.transition = 'opacity 0.2s ease, transform 0.2s ease';

            // 터치 디바이스 감지
            const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

            // 클릭 이벤트 (마우스)
            node.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                handleNodeClick(nodeId, node);
            });

            // 터치 이벤트 (모바일/태블릿)
            if (isTouchDevice) {
                let touchStartTime = 0;

                node.addEventListener('touchstart', (e) => {
                    touchStartTime = Date.now();
                    // 터치 시작 시 시각적 피드백
                    node.style.transform = 'scale(1.05)';
                    node.style.opacity = '0.8';
                });

                node.addEventListener('touchend', (e) => {
                    e.preventDefault();
                    e.stopPropagation();

                    // 터치 시간이 500ms 이하면 탭으로 간주
                    const touchDuration = Date.now() - touchStartTime;
                    if (touchDuration < 500) {
                        handleNodeClick(nodeId, node);
                    }

                    // 시각적 피드백 복원
                    setTimeout(() => {
                        node.style.transform = '';
                        node.style.opacity = '';
                    }, 100);
                });

                node.addEventListener('touchcancel', () => {
                    node.style.transform = '';
                    node.style.opacity = '';
                });
            }

            // 호버 이벤트 (데스크톱만)
            if (!isTouchDevice) {
                node.addEventListener('mouseenter', (e) => {
                    handleNodeHover(e, nodeId, node);
                });

                node.addEventListener('mouseleave', () => {
                    handleNodeLeave();
                });
            }

            console.log(`    ✓ 노드 "${nodeId}" 인터랙티브 활성화 (${isTouchDevice ? '터치' : '마우스'} 모드)`);
        }
    });
}

/**
 * Mermaid 노드에서 ID 추출
 */
function extractNodeId(node) {
    // Mermaid의 노드 ID는 여러 방식으로 저장될 수 있음
    // 1. data-id 속성
    // 2. id 속성
    // 3. 텍스트 내용

    // 1. data-id 시도
    if (node.dataset && node.dataset.id) {
        return cleanNodeId(node.dataset.id);
    }

    // 2. id 속성 시도
    if (node.id) {
        return cleanNodeId(node.id);
    }

    // 3. 텍스트 추출 (Mermaid는 레이블을 <tspan>에 저장)
    const textElement = node.querySelector('text');
    if (textElement) {
        const text = textElement.textContent.trim();
        // 줄바꿈 제거하고 첫 줄만 사용
        const firstLine = text.split('\n')[0].trim();
        return cleanNodeId(firstLine);
    }

    return null;
}

/**
 * 노드 ID 정리 (Mermaid가 추가하는 접두사 제거)
 */
function cleanNodeId(id) {
    // Mermaid는 "flowchart-XXX-" 같은 접두사를 붙임
    // 예: "flowchart-MediaPlayer-123" -> "MediaPlayer"

    // 숫자로 끝나는 부분 제거
    let cleaned = id.replace(/-\d+$/, '');

    // flowchart- 같은 접두사 제거
    cleaned = cleaned.replace(/^(flowchart|graph)-/i, '');

    // HTML 엔티티 디코딩 (&lt; -> <)
    const textarea = document.createElement('textarea');
    textarea.innerHTML = cleaned;
    cleaned = textarea.value;

    return cleaned;
}

/**
 * 노드 클릭 핸들러
 */
function handleNodeClick(nodeId, node) {
    const nodeData = DIAGRAM_NODE_DATA[nodeId];

    if (!nodeData) {
        console.warn(`⚠️ 노드 "${nodeId}"의 데이터를 찾을 수 없습니다.`);
        return;
    }

    console.log(`🖱️ 노드 클릭: ${nodeId}`);

    // 기존 모달 닫기
    if (activeModal) {
        activeModal.remove();
    }

    // 노드 하이라이트 효과
    highlightNode(node);

    // 모달 표시
    showNodeModal(nodeData);
}

/**
 * 노드 호버 핸들러
 */
function handleNodeHover(event, nodeId, node) {
    const nodeData = DIAGRAM_NODE_DATA[nodeId];

    if (!nodeData) {
        return;
    }

    // 노드 스케일 효과
    node.style.transform = 'scale(1.05)';

    // 툴팁 표시
    showTooltip(event, nodeData);
}

/**
 * 노드 떠날 때 핸들러
 */
function handleNodeLeave() {
    // 모든 노드의 transform 초기화
    document.querySelectorAll('.mermaid svg .node').forEach(n => {
        n.style.transform = '';
    });

    // 툴팁 숨기기
    hideTooltip();
}

/**
 * 노드 하이라이트 (클릭 시)
 */
function highlightNode(node) {
    // 모든 노드 반투명
    document.querySelectorAll('.mermaid svg .node').forEach(n => {
        n.style.opacity = '0.3';
    });

    // 클릭한 노드만 강조
    node.style.opacity = '1';
    node.style.filter = 'drop-shadow(0 0 8px rgba(0, 212, 255, 0.8))';

    // 3초 후 원래대로
    setTimeout(() => {
        document.querySelectorAll('.mermaid svg .node').forEach(n => {
            n.style.opacity = '1';
            n.style.filter = '';
        });
    }, 3000);
}

/**
 * 모달 표시
 */
function showNodeModal(nodeData) {
    // 모달 컨테이너 생성
    const modal = document.createElement('div');
    modal.className = 'diagram-modal';
    modal.id = 'diagramModal';

    // 모달 내용 생성
    modal.innerHTML = `
        <div class="diagram-modal-overlay"></div>
        <div class="diagram-modal-content">
            <button class="diagram-modal-close" aria-label="닫기">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>

            <div class="diagram-modal-header">
                <h2 class="diagram-modal-title">${nodeData.title}</h2>
                <span class="diagram-layer-badge">${nodeData.layer}</span>
            </div>

            <div class="diagram-modal-body">
                <p class="diagram-modal-description">${nodeData.description}</p>

                ${nodeData.components ? `
                    <div class="diagram-modal-section">
                        <h3>주요 컴포넌트</h3>
                        <ul class="diagram-component-list">
                            ${nodeData.components.map(comp => `<li>${comp}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}

                ${nodeData.codeExample ? `
                    <div class="diagram-modal-section">
                        <h3>코드 예제</h3>
                        <pre class="diagram-code-block"><code>${escapeHtml(nodeData.codeExample)}</code></pre>
                    </div>
                ` : ''}

                ${nodeData.path ? `
                    <div class="diagram-modal-section">
                        <h3>AOSP 경로</h3>
                        <code class="diagram-path">${nodeData.path}</code>
                    </div>
                ` : ''}
            </div>

            <div class="diagram-modal-footer">
                ${nodeData.doc ? `
                    <a href="${nodeData.doc}" target="_blank" rel="noopener noreferrer" class="diagram-btn diagram-btn-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                        </svg>
                        문서 보기
                    </a>
                ` : ''}
                ${nodeData.path ? `
                    <a href="https://cs.android.com/${nodeData.path}" target="_blank" rel="noopener noreferrer" class="diagram-btn diagram-btn-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                        </svg>
                        AOSP 소스
                    </a>
                ` : ''}
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    activeModal = modal;

    // 애니메이션 시작
    requestAnimationFrame(() => {
        modal.classList.add('show');
    });

    // 닫기 이벤트
    const closeBtn = modal.querySelector('.diagram-modal-close');
    const overlay = modal.querySelector('.diagram-modal-overlay');

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    // ESC 키로 닫기
    document.addEventListener('keydown', handleEscKey);
}

/**
 * 모달 닫기
 */
function closeModal() {
    if (!activeModal) return;

    activeModal.classList.remove('show');

    setTimeout(() => {
        if (activeModal) {
            activeModal.remove();
            activeModal = null;
        }
    }, 300);

    document.removeEventListener('keydown', handleEscKey);

    // 하이라이트 해제
    document.querySelectorAll('.mermaid svg .node').forEach(n => {
        n.style.opacity = '1';
        n.style.filter = '';
    });
}

/**
 * ESC 키 핸들러
 */
function handleEscKey(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
}

/**
 * 툴팁 표시
 */
function showTooltip(event, nodeData) {
    // 기존 툴팁 제거
    hideTooltip();

    const tooltip = document.createElement('div');
    tooltip.className = 'diagram-tooltip';
    tooltip.innerHTML = `
        <strong>${nodeData.title}</strong>
        <span>${nodeData.layer}</span>
        <p>클릭하여 상세 정보 보기 →</p>
    `;

    // 위치 계산
    tooltip.style.left = event.pageX + 15 + 'px';
    tooltip.style.top = event.pageY - 10 + 'px';

    document.body.appendChild(tooltip);
    activeTooltip = tooltip;

    // 애니메이션
    requestAnimationFrame(() => {
        tooltip.classList.add('show');
    });
}

/**
 * 툴팁 숨기기
 */
function hideTooltip() {
    if (activeTooltip) {
        activeTooltip.classList.remove('show');
        setTimeout(() => {
            if (activeTooltip) {
                activeTooltip.remove();
                activeTooltip = null;
            }
        }, 200);
    }
}

/**
 * HTML 이스케이프
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
