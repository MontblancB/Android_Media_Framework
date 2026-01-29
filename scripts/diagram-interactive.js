/**
 * Diagram Interactive - Mermaid 다이어그램 인터랙티브 기능
 * 노드 클릭 시 상세 정보 모달 표시 및 호버 툴팁 기능 제공
 */

/**
 * 현재 언어 감지
 */
function getCurrentLanguage() {
    const path = window.location.pathname;
    return path.startsWith('/en/') || path === '/en' ? 'en' : 'ko';
}

/**
 * 언어별 fallback 메시지
 */
const FALLBACK_MESSAGES = {
    ko: {
        noData: '이 노드에 대한 상세 정보가 아직 준비되지 않았습니다.',
        title: '정보 없음',
        description: '상세 정보를 준비 중입니다.'
    },
    en: {
        noData: 'Detailed information for this node is not yet available.',
        title: 'No Information',
        description: 'Detailed information is being prepared.'
    }
};

// 전역 변수
let activeModal = null;
let activeTooltip = null;
const currentLang = getCurrentLanguage();

// DOM 로드 완료 후 초기화
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 diagram-interactive.js 로드됨!');
    console.log('📦 DIAGRAM_NODE_DATA 정의 여부:', typeof DIAGRAM_NODE_DATA !== 'undefined');

    // Mermaid 렌더링 완료 대기 (1초)
    setTimeout(() => {
        console.log('⏰ 1초 대기 완료, 초기화 시작...');
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

        // 모든 노드에 인터랙티브 적용 (데이터가 없으면 자동 생성)
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
                handleNodeLeave(node);
            });
        }

        // 데이터 유무 표시
        const hasData = !!DIAGRAM_NODE_DATA[nodeId];
        console.log(`    ✓ 노드 "${nodeId}" 인터랙티브 활성화 (${isTouchDevice ? '터치' : '마우스'} 모드, 데이터: ${hasData ? '있음' : '자동생성'})`);
    });
}

/**
 * Mermaid 노드에서 ID와 텍스트 추출
 */
function extractNodeId(node) {
    // Mermaid의 노드 ID는 여러 방식으로 저장될 수 있음
    // 1. id 속성 (가장 확실함)
    // 2. class 속성
    // 3. data-id 속성

    let rawId = null;

    // 1. id 속성 시도 (예: "flowchart-APP-123")
    if (node.id) {
        rawId = node.id;
        console.log(`      [ID 추출] id 속성: "${rawId}"`);
    }

    // 2. class에서 추출 시도
    if (!rawId && node.classList) {
        const classList = Array.from(node.classList);
        const nodeClass = classList.find(c => c !== 'node' && c !== 'default');
        if (nodeClass) {
            rawId = nodeClass;
            console.log(`      [ID 추출] class 속성: "${rawId}"`);
        }
    }

    // 3. data-id 시도
    if (!rawId && node.dataset && node.dataset.id) {
        rawId = node.dataset.id;
        console.log(`      [ID 추출] data-id 속성: "${rawId}"`);
    }

    if (!rawId) {
        console.warn('      [ID 추출 실패] 노드 ID를 찾을 수 없음');
        return null;
    }

    // ID 정리
    const cleanedId = cleanNodeId(rawId);
    console.log(`      [ID 정리] "${rawId}" → "${cleanedId}"`);

    // 매핑 테이블에서 사람이 읽을 수 있는 이름으로 변환
    if (typeof NODE_ID_MAPPING !== 'undefined' && NODE_ID_MAPPING[cleanedId]) {
        const mappedId = NODE_ID_MAPPING[cleanedId];
        console.log(`      [ID 매핑] "${cleanedId}" → "${mappedId}"`);
        return mappedId;
    }

    // 매핑이 없으면 정리된 ID 그대로 반환
    return cleanedId;
}

/**
 * 노드에서 텍스트 추출 (fallback 데이터 생성용)
 */
function extractNodeText(node) {
    const textElement = node.querySelector('text');
    if (textElement) {
        return textElement.textContent.trim();
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
    console.log(`\n🖱️ 노드 클릭 이벤트 발생!`);
    console.log(`   노드 ID: "${nodeId}"`);
    console.log(`   노드 요소:`, node);

    let nodeData = DIAGRAM_NODE_DATA[nodeId];

    // 데이터가 없으면 노드 텍스트에서 자동 생성
    if (!nodeData) {
        console.warn(`⚠️ 노드 데이터 없음. 기본 정보 자동 생성...`);
        nodeData = generateFallbackNodeData(nodeId, node);
        console.log(`✅ 자동 생성된 데이터:`, nodeData);
    } else {
        console.log(`✅ 노드 데이터 발견:`, nodeData);
    }

    // 기존 모달 닫기
    if (activeModal) {
        console.log(`   기존 모달 제거`);
        activeModal.remove();
    }

    // 노드 하이라이트 효과
    highlightNode(node);

    // 모달 표시
    console.log(`   모달 생성 시작...`);
    showNodeModal(nodeData);
}

/**
 * 데이터가 없는 노드를 위한 기본 정보 생성
 */
function generateFallbackNodeData(nodeId, node) {
    // 노드 텍스트 추출
    const nodeText = extractNodeText(node);
    const lines = nodeText ? nodeText.split('\n').map(l => l.trim()).filter(l => l) : [];

    // 첫 번째 줄을 제목으로 사용
    const title = lines[0] || nodeId;

    // 나머지 줄을 설명으로 사용
    const fallbackMsg = FALLBACK_MESSAGES[currentLang];
    const description = lines.slice(1).join(' • ') || fallbackMsg.description;

    // 레이어 자동 판단 (노드 ID 또는 텍스트 기반)
    let layer = 'Component';
    if (nodeId.includes('APP') || title.includes('App')) {
        layer = 'Application Layer';
    } else if (nodeId.includes('FW') || nodeId.includes('FRAMEWORK') || title.includes('Framework')) {
        layer = 'Framework Layer';
    } else if (nodeId.includes('HAL') || title.includes('HAL')) {
        layer = 'HAL Layer';
    } else if (nodeId.includes('KERNEL') || nodeId.includes('DRIVER') || title.includes('Kernel') || title.includes('Driver')) {
        layer = 'Kernel Layer';
    } else if (nodeId.includes('SERVICE') || title.includes('Service')) {
        layer = 'System Service';
    } else if (nodeId.includes('NATIVE') || nodeId.includes('LIB') || title.includes('Native')) {
        layer = 'Native Layer';
    }

    return {
        title: title,
        layer: layer,
        description: description,
        components: lines.slice(1).length > 0 ? lines.slice(1) : [fallbackMsg.noData],
        autoGenerated: true
    };
}

/**
 * 노드 호버 핸들러
 */
function handleNodeHover(event, nodeId, node) {
    const nodeData = DIAGRAM_NODE_DATA[nodeId];

    if (!nodeData) {
        return;
    }

    // 노드 효과 (스케일 대신 opacity와 shadow 사용하여 떨림 방지)
    node.style.opacity = '0.8';
    node.style.filter = 'drop-shadow(0 0 6px rgba(59, 130, 246, 0.6))';

    // 툴팁 표시
    showTooltip(event, nodeData);
}

/**
 * 노드 떠날 때 핸들러
 */
function handleNodeLeave(node) {
    // 해당 노드만 효과 초기화 (떨림 방지)
    if (node) {
        node.style.transform = '';
        node.style.opacity = '';
        node.style.filter = '';
    }

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
                ${nodeData.autoGenerated ? '<span class="diagram-auto-badge">자동 생성</span>' : ''}
            </div>

            <div class="diagram-modal-body">
                ${nodeData.autoGenerated ? '<div class="diagram-info-box">ℹ️ 이 정보는 다이어그램에서 자동으로 추출되었습니다. 더 상세한 정보가 곧 추가될 예정입니다.</div>' : ''}
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

                ${nodeData.relatedIssues && nodeData.relatedIssues.length > 0 ? `
                    <div class="diagram-modal-section">
                        <h3>관련 트러블슈팅</h3>
                        <ul class="diagram-related-issues">
                            ${nodeData.relatedIssues.map(issue => `
                                <li>
                                    <a href="common-media-issues.html#${issue.id}" target="_blank" rel="noopener noreferrer">
                                        ${issue.title}
                                    </a>
                                </li>
                            `).join('')}
                        </ul>
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
                    <a href="https://cs.android.com/android/platform/superproject/main/+/main:${nodeData.path}" target="_blank" rel="noopener noreferrer" class="diagram-btn diagram-btn-secondary">
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

    // 디버깅: 모달 생성 알림 (테스트용)
    console.warn(`🚨 모달 생성! 제목: ${nodeData.title}`);
    console.log(`   ✅ 모달이 DOM에 추가됨`);
    console.log(`   모달 요소:`, modal);
    console.log(`   모달 위치:`, modal.getBoundingClientRect());
    console.log(`   모달 z-index:`, window.getComputedStyle(modal).zIndex);

    // 애니메이션 시작
    requestAnimationFrame(() => {
        modal.classList.add('show');
        console.log(`   ✅ 'show' 클래스 추가 (애니메이션 시작)`);
        console.log(`   모달 opacity:`, window.getComputedStyle(modal).opacity);
        console.log(`   모달 display:`, window.getComputedStyle(modal).display);
    });

    // 닫기 이벤트
    const closeBtn = modal.querySelector('.diagram-modal-close');
    const overlay = modal.querySelector('.diagram-modal-overlay');

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
        console.log(`   ✅ 닫기 버튼 이벤트 연결`);
    }

    if (overlay) {
        overlay.addEventListener('click', closeModal);
        console.log(`   ✅ 오버레이 이벤트 연결`);
    }

    // ESC 키로 닫기
    document.addEventListener('keydown', handleEscKey);
    console.log(`   ✅ ESC 키 이벤트 연결`);
    console.log(`\n모달 표시 완료! 🎉\n`);
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
