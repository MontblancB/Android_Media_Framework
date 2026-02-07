# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

**Android Media Framework Visualization Project**는 Android Open Source Project(AOSP)의 미디어 프레임워크 아키텍처를 시각화하여 문서화한 정적 웹사이트 프로젝트입니다.

- **목적**: LGE Android Media Framework 학습 및 참조 자료
- **타입**: 정적 웹사이트 (Static HTML Documentation)
- **주요 대상**: Android 미디어 프레임워크 개발자, AAOS 엔지니어
- **언어**: 한국어 (기본), 영어 (번역 지원)
- **배포**: Vercel (main 브랜치 push 시 자동 배포)
- **라이브 URL**: Vercel 자동 생성 도메인
- **Git 커밋**: 176개+ (단일 main 브랜치)

## 프로젝트 현황 요약

| 항목 | 수치 | 비고 |
|------|------|------|
| 한국어 페이지 | 43개 | index + 35 메인 + 4 서브 + 2 추가 + old_main_page |
| 영문 페이지 | 42개 | en/ 디렉토리 (old_main_page 제외) |
| CSS 패턴 | 통합 완료 | 모든 파일이 design-system.css 사용 |
| 다이어그램 노드 | 527개 | 한국어 + 영문 (100% 번역 완료) |
| design-system.css | 3,048줄 | 다크/라이트 테마, 100+ 컴포넌트 클래스 |
| diagram-data.js | 21,479줄 | 노드 데이터 + 매핑 (523 ID + 527 노드) |
| scripts/ 파일 | 14개 | JS 11개 + Python 3개 |
| 기술 정확도 | 96.5% | 29/43 페이지 검증 완료 (2025-02) |

## 프로젝트 구조

```
Android_Media_Framework/
│
├── index.html                      # 메인 랜딩 페이지 (1,094줄, 35+ 카드)
├── README.md                       # 사용자용 프로젝트 설명서
├── CLAUDE.md                       # 개발자용 프로젝트 상세 문서 (이 파일)
├── NAVIGATION_FEATURES.md          # 네비게이션 기능 가이드
├── vercel.json                     # Vercel 배포 설정 (보안 헤더, 캐시)
├── apple-touch-icon.png            # PWA/모바일 아이콘
│
├── .gitignore                      # .vercel, .DS_Store, .claude/
├── .claude/                        # Claude 설정 (Git 추적 안 함)
├── .vercel/                        # Vercel 배포 캐시 (Git 추적 안 함)
│
├── [01. 아키텍처 문서]
│   ├── aosp.html                   # AOSP 전체 시스템 아키텍처 (App~Kernel)
│   ├── aaos.html                   # Android Automotive OS 개요
│   ├── android-version-history.html # 버전별 미디어 프레임워크 진화
│   └── carma.html                  # Car Ready Mobile Apps (CarMa)
│
├── [02. 미디어 프레임워크 코어]
│   ├── media-framework-core.html   # Framework-Native 상호작용
│   ├── codec2.html                 # Codec 2.0 & Media HAL
│   ├── media-playback.html         # 미디어 파이프라인 & 데이터 플로우
│   ├── media-extractor.html        # 컨테이너 파싱 & 디먹싱
│   ├── mediasession.html           # MediaSession 프레임워크
│   ├── media-app-layer.html        # MediaPlayer/ExoPlayer/Media3 API
│   └── mediaprovider.html          # 스토리지 접근 & 인덱싱
│
├── [03. 오디오 프레임워크]
│   ├── audio-framework.html        # AudioFlinger/PolicyService 파이프라인
│   └── audio-codecs.html           # AOSP Audio Codecs 사양
│
├── [04. 차량용 시스템 (AAOS)]
│   ├── carmedia.html               # Car Media Service
│   ├── car-services.html           # Car Services 아키텍처
│   ├── aaos-key-events.html        # 키 이벤트 처리 (CarService/Input)
│   ├── aaos-last-media.html        # Last Media Source & Autoplay
│   ├── power-policy-suspend.html   # Deep Sleep & Suspend-to-RAM
│   └── gas.html                    # Google Automotive Services
│
├── [05. DRM & 코덱]
│   ├── widevine.html               # Widevine DRM (L1/L2/L3)
│   └── dolby-codecs.html           # Dolby Atmos/AC-4/Vision 사양
│
├── [06. 차량용 시스템 심화 (AAOS Advanced)]
│   ├── multi-display-entertainment.html # 멀티 디스플레이 엔터테인먼트
│   ├── multi-zone-audio.html       # 멀티존 오디오 심화
│   ├── oem-customization.html      # OEM 커스터마이징 가이드
│   ├── vehicle-hal-media.html      # Vehicle HAL 미디어 연동
│   └── aaos-boot-optimization.html # AAOS 부팅 & 미디어 최적화
│
├── [07. 테스팅 & 호환성]
│   ├── cts.html                    # CTS/VTS/GTS 테스트 (CDD 포함)
│   └── media-porting-checklist.html # 미디어 스택 포팅 체크리스트
│
├── [08. 레퍼런스 & 가이드]
│   ├── common-media-issues.html    # 미디어 문제 해결 가이드 (16+ 이슈)
│   ├── debugging-tools.html        # 디버깅 도구 (logcat, dumpsys, perfetto)
│   ├── production-debugging.html   # 프로덕션 디버깅 심화
│   ├── api-quick-reference.html    # API 레퍼런스 (MediaPlayer, ExoPlayer, Codec)
│   ├── migration-guides.html       # 마이그레이션 가이드 (MP→ExoPlayer→Media3)
│   └── glossary.html               # Android Media 용어집 (50+ 용어, A-Z)
│
├── [09. 성능 & 보안]
│   ├── performance-optimization.html # 성능 최적화 가이드
│   ├── media-security.html         # 미디어 보안 가이드
│   └── vendor-extension.html       # Vendor Extension 개발 가이드
│
├── styles/
│   └── design-system.css           # 공통 디자인 시스템 (3,048줄)
│
├── scripts/                        # JavaScript & Python 스크립트 (14개)
│   ├── [다크모드 & 테마]
│   │   ├── theme-toggle.js         # 라이트/다크 모드 토글 (163줄)
│   │   └── mermaid-theme.js        # Mermaid 다이어그램 테마 동적 변경 (179줄)
│   │
│   ├── [인터랙티브 다이어그램]
│   │   ├── diagram-data.js         # 노드 데이터 (21,479줄, 527개 노드, 한/영)
│   │   ├── diagram-data-en-partial.js # 영문 노드 데이터 (488줄, 레거시)
│   │   └── diagram-interactive.js  # 노드 클릭 핸들러 & 상세 패널 (683줄)
│   │
│   ├── [다국어 지원]
│   │   └── lang-switch.js          # 한/영 언어 전환 (130줄)
│   │
│   ├── [검색 기능]
│   │   ├── search-index.js         # 페이지/이슈/용어 인덱스 (123줄)
│   │   └── search-ui.js            # Fuse.js 기반 검색 UI (402줄)
│   │
│   ├── [페이지 네비게이션]
│   │   ├── copy-code.js            # 코드 블록 복사 버튼 (206줄)
│   │   ├── toc-generator.js        # 목차(TOC) 자동 생성 & 스크롤 스파이 (184줄)
│   │   └── page-navigation.js      # 이전/다음 페이지 버튼 (163줄)
│   │
│   └── [번역 도구] (Python)
│       ├── translate_ko_to_en.py   # HTML 페이지 한→영 번역 (201줄)
│       ├── translate_diagram_data.py # 다이어그램 데이터 번역 (147줄)
│       └── generate_english_translation.py # 일괄 영문 페이지 생성 (48줄)
│
├── en/                             # 영문 번역 페이지 (42개)
│   ├── index.html                  # 영문 메인 페이지 (<base href="/en/">)
│   └── *.html                      # 41개 컨텐츠 영문 페이지
│
├── docs/
│   ├── technical-accuracy-review-2025-02.md  # 기술 정확성 검토 (579줄)
│   └── plans/                      # 개발 계획 및 설계 문서
│       ├── 2025-01-28-new-topics-design.md
│       ├── 2025-01-28-i18n-design.md
│       └── 2025-01-28-code-reference-enhancement-design.md
│
├── [서브 페이지] (상위 페이지에서 링크)
│   ├── mediasession-api.html       # MediaSession API 플로우 (← mediasession.html)
│   ├── dolby-ddp-porting.html      # Dolby Digital Plus 포팅 (← dolby-codecs.html)
│   ├── dolby-vision-porting.html   # Dolby Vision 포팅 (← dolby-codecs.html)
│   └── cdd.html                    # CDD 정책 문서 (← cts.html)
│
├── [레거시/유틸리티 파일]
│   ├── old_main_page.html          # 이전 메인 페이지 백업
│   ├── aosp.html.old               # aosp.html 이전 버전 백업
│   ├── add-interactive-diagrams.sh # 다이어그램 스크립트 일괄 주입 (57줄)
│   ├── add-navigation-scripts.sh   # 네비게이션 스크립트 일괄 주입 (47줄)
│   ├── add_theme_toggle.py         # 테마 토글 일괄 추가 (57줄)
│   └── update_design.py            # design-system.css 일괄 마이그레이션 (81줄)
│
└── [Git 통계]
    ├── 총 커밋: 176개+
    └── 브랜치: main (단일)
```

## 기술 스택

### Frontend
- **HTML5**: 시맨틱 마크업 (`<nav>`, `<section>`, `<header>`)
- **CSS3**: 다크/라이트 듀얼 테마, CSS Grid, Flexbox, CSS 변수
- **JavaScript**: Vanilla JS (프레임워크 없음)
- **Mermaid.js v10**: 다이어그램 시각화 (CDN)
- **Fuse.js v7**: 퍼지 검색 (CDN)

### Fonts (전체 페이지 통일)
- **Archivo** (Body) - 본문 텍스트, `300;400;600;700;900`
- **IBM Plex Mono** (Code) - 코드 블록, 기술 용어, `400;500;600`
- **Playfair Display** (Headings) - 제목, `700;900`

### CSS 컬러 팔레트 (design-system.css)

**다크 테마 (기본)**:
| 변수 | 값 | 용도 |
|------|------|------|
| `--color-bg-primary` | `#1a1d2e` | 주 배경 |
| `--color-bg-secondary` | `#1f2333` | 보조 배경 |
| `--color-surface` | `#2a2f42` | 카드/패널 배경 |
| `--color-surface-elevated` | `#323749` | 호버 시 상승 표면 |
| `--color-text-primary` | `#e8eaed` | 주 텍스트 |
| `--color-text-secondary` | `#9aa0a6` | 보조 텍스트 |
| `--color-accent` | `#00d4ff` | 강조 (cyan) |
| `--color-glow` | `rgba(0, 212, 255, 0.15)` | 글로우 효과 |

**라이트 테마**:
| 변수 | 값 | 용도 |
|------|------|------|
| `--color-bg-primary` | `#fafaf9` | 주 배경 (stone-50) |
| `--color-bg-secondary` | `#f5f5f4` | 보조 배경 |
| `--color-surface` | `#ffffff` | 카드/패널 배경 |
| `--color-text-primary` | `#292524` | 주 텍스트 (stone-800) |
| `--color-accent` | `#0369a1` | 강조 (sky-700) |

**카테고리 컬러** (다크/라이트 공통 변수):
| 변수 | 다크 | 라이트 | 카테고리 |
|------|------|--------|---------|
| `--color-arch` | `#4a9eff` | `#1d4ed8` | 아키텍처 |
| `--color-media` | `#ff9f43` | `#dc2626` | 미디어 |
| `--color-audio` | `#ee5a6f` | `#be123c` | 오디오 |
| `--color-drm` | `#26de81` | `#047857` | DRM |
| `--color-car` | `#a55eea` | `#6d28d9` | 차량 |
| `--color-test` | `#fc5c65` | `#be123c` | 테스팅 |
| `--color-reference` | `#ffd93d` | `#ca8a04` | 레퍼런스 |

### Deployment
- **Vercel**: 정적 사이트 호스팅 (자동 배포)
- **Git**: 단일 main 브랜치 전략

## HTML 페이지 통합 구조

> **중요**: 2025-02 기준으로 모든 HTML 파일이 design-system.css 기반으로 통합 완료되었습니다.
> 이전의 "패턴 A (인라인 스타일)" / "패턴 B (design-system.css)"  구분은 더 이상 유효하지 않습니다.

### 공통 HTML 구조 (모든 컨텐츠 페이지)

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- FOIT 방지: DOM 로드 전 테마 즉시 적용 -->
    <script>
    (function(){var t=localStorage.getItem('android-media-framework-theme');
    if(t)document.documentElement.setAttribute('data-theme',t);
    else if(window.matchMedia&&window.matchMedia('(prefers-color-scheme:light)').matches)
    document.documentElement.setAttribute('data-theme','light');})();
    </script>
    <title>페이지 제목 - Android Media Framework</title>
    <script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;600;700;900&family=IBM+Plex+Mono:wght@400;500;600&family=Playfair+Display:wght@700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles/design-system.css">
    <style>/* 페이지별 커스텀 스타일 */</style>
</head>
<body>
    <nav class="nav">
        <a href="index.html" class="nav-button">← Android Media Framework</a>
    </nav>
    <div class="container">
        <header>
            <h1 class="page-title">페이지 제목</h1>
            <p class="page-subtitle">설명</p>
        </header>
        <section class="content-section section">
            <h2 class="section-title">
                <span class="section-number">01</span> 섹션 제목
            </h2>
            <div class="mermaid"><!-- Mermaid 다이어그램 --></div>
            <!-- 컨텐츠 -->
        </section>
    </div>

    <!-- Mermaid 테마 -->
    <script src="scripts/mermaid-theme.js"></script>

    <!-- 인터랙티브 다이어그램 -->
    <script src="scripts/diagram-data.js"></script>
    <script src="scripts/diagram-interactive.js"></script>

    <!-- 네비게이션 & 복사 -->
    <script src="scripts/copy-code.js"></script>
    <script src="scripts/toc-generator.js"></script>
    <script src="scripts/page-navigation.js"></script>

    <!-- 테마 & 언어 -->
    <script src="scripts/theme-toggle.js?v=2"></script>
    <script src="scripts/lang-switch.js"></script>
</body>
</html>
```

### en/ 영문 페이지 차이점
- `<html lang="en">` (ko 대신)
- CSS/JS 경로: `../styles/`, `../scripts/` (상위 디렉토리 참조)
- `diagram-data-en-partial.js` 추가 로드
- `en/index.html`에만 `<base href="/en/">` 태그 사용

### index.html 특이사항
- **라인 수**: 1,094줄
- **Grid 레이아웃**: 35+ 카드 (`minmax(320px, 1fr)`)
- **카테고리 컬러 코딩**: 상단 4px 보더로 구분
- **검색**: Fuse.js 기반 (`search-index.js` + `search-ui.js`)
- **추가 스크립트**: `fuse.js@7.0.0` CDN, `search-index.js`, `search-ui.js`
- **다이어그램 관련 스크립트 없음** (랜딩 페이지이므로)
- **TOC/페이지 네비게이션 없음** (랜딩 페이지이므로)

## 35개 메인 토픽 목록

| # | 카테고리 | 페이지 | 설명 |
|---|----------|--------|------|
| 01 | 아키텍처 | aosp.html | AOSP 전체 시스템 아키텍처 |
| 02 | 아키텍처 | android-version-history.html | Android 버전별 진화 |
| 03 | 아키텍처 | carma.html | Car Ready Mobile Apps |
| 04 | 미디어 | media-framework-core.html | 프레임워크 코어 |
| 05 | 미디어 | media-app-layer.html | MediaPlayer/ExoPlayer/Media3 API |
| 06 | 미디어 | codec2.html | Codec 2.0 & HAL |
| 07 | 미디어 | media-playback.html | 미디어 파이프라인 |
| 08 | 미디어 | media-extractor.html | 컨테이너 파싱 |
| 09 | 미디어 | mediasession.html | MediaSession 프레임워크 |
| 10 | 미디어 | mediaprovider.html | 스토리지 접근 |
| 11 | 성능 | performance-optimization.html | 성능 최적화 가이드 |
| 12 | 성능 | vendor-extension.html | Vendor Extension 개발 가이드 |
| 13 | 오디오 | audio-framework.html | Audio 프레임워크 |
| 14 | DRM | widevine.html | Widevine DRM (L1/L2/L3) |
| 15 | DRM | dolby-codecs.html | Dolby Atmos/AC-4/Vision 사양 |
| 16 | 보안 | media-security.html | 미디어 보안 가이드 |
| 17 | 차량 | aaos.html | Android Automotive OS |
| 18 | 차량 | carmedia.html | Car Media Service |
| 19 | 차량 | aaos-key-events.html | 키 이벤트 처리 |
| 20 | 차량 | aaos-last-media.html | Last Media & Autoplay |
| 21 | 차량 | power-policy-suspend.html | Power Policy |
| 22 | 차량 | gas.html | Google Automotive Services |
| 23 | 차량 | multi-display-entertainment.html | 멀티 디스플레이 엔터테인먼트 |
| 24 | 차량 | multi-zone-audio.html | 멀티존 오디오 심화 |
| 25 | 차량 | oem-customization.html | OEM 커스터마이징 가이드 |
| 26 | 차량 | vehicle-hal-media.html | Vehicle HAL 미디어 연동 |
| 27 | 차량 | aaos-boot-optimization.html | AAOS 부팅 & 미디어 최적화 |
| 28 | 테스트 | cts.html | CTS/VTS/GTS/CDD 테스트 |
| 29 | 테스트 | media-porting-checklist.html | 미디어 스택 포팅 체크리스트 |
| 30 | 레퍼런스 | common-media-issues.html | 미디어 문제 해결 가이드 (16+ 이슈) |
| 31 | 레퍼런스 | debugging-tools.html | 디버깅 도구 |
| 32 | 레퍼런스 | production-debugging.html | 프로덕션 디버깅 심화 |
| 33 | 레퍼런스 | api-quick-reference.html | API 치트시트 |
| 34 | 레퍼런스 | migration-guides.html | 마이그레이션 가이드 |
| 35 | 레퍼런스 | glossary.html | Android Media 용어집 (50+ 용어) |

### 추가/서브 페이지 (index.html 카드에 포함되지 않음)

| 페이지 | 설명 | 링크 위치 |
|--------|------|-----------|
| audio-codecs.html | AOSP Audio Codecs 사양 | page-navigation.js |
| car-services.html | Car Services 아키텍처 | page-navigation.js |
| mediasession-api.html | MediaSession API 플로우 | mediasession.html |
| dolby-ddp-porting.html | Dolby Digital Plus 포팅 | dolby-codecs.html |
| dolby-vision-porting.html | Dolby Vision 포팅 | dolby-codecs.html |
| cdd.html | CDD 정책 문서 | cts.html |
| old_main_page.html | 이전 메인 페이지 백업 | 미사용 |

## JavaScript 스크립트 상세

### 스크립트 로드 순서 (컨텐츠 페이지)

```
1. mermaid-theme.js        → Mermaid 초기화 + 테마 설정
2. diagram-data.js         → 노드 데이터 제공
3. diagram-interactive.js  → Mermaid 렌더링 대기 후 클릭 핸들러 등록
4. copy-code.js            → <pre><code> 자동 감지, 복사 버튼 추가
5. toc-generator.js        → .content-section 헤딩 파싱, TOC 사이드바 생성
6. page-navigation.js      → 이전/다음/홈 버튼 + 브레드크럼 생성
7. theme-toggle.js         → .nav-links에 토글 버튼 주입
8. lang-switch.js          → .nav-controls에 KO/EN 버튼 주입
```

### 스크립트별 상세

| 파일 | 줄 수 | 주요 함수 | 글로벌 변수 |
|------|-------|-----------|-------------|
| theme-toggle.js | 163 | `getCurrentTheme()`, `applyTheme()`, `toggleTheme()`, `createThemeToggle()` | `window.toggleTheme` |
| mermaid-theme.js | 179 | `getMermaidConfig()`, `initMermaid()`, `watchThemeChanges()` | - |
| diagram-data.js | 21,479 | - | `NODE_ID_MAPPING` (523), `DIAGRAM_NODE_DATA` (527), `DIAGRAM_NODE_DATA_EN`, `DIAGRAM_NODE_RELATIONSHIPS` |
| diagram-data-en-partial.js | 488 | - | `DIAGRAM_NODE_DATA_EN` (레거시 보조) |
| diagram-interactive.js | 683 | `getCurrentLanguage()`, `getDiagramData()`, `waitForMermaidRender()` | - |
| copy-code.js | 206 | `getCurrentLang()`, `addCopyButtonsToCodeBlocks()`, `copyCodeToClipboard()` | - |
| toc-generator.js | 184 | `generateTOC()`, `setupScrollSpy()`, `updateActiveTOCLink()` | - |
| page-navigation.js | 163 | `addPageNavigation()`, `addBreadcrumb()` | `PAGE_ORDER` (26개 페이지) |
| lang-switch.js | 130 | `getCurrentLang()`, `getOtherLangUrl()`, `createLangSwitch()` | - |
| search-index.js | 123 | - | `window.SEARCH_INDEX` (pages 35 + issues 16 + glossary 26), `window.FUSE_OPTIONS` |
| search-ui.js | 402 | `initFuse()`, `openSearch()`, `closeSearch()`, `handleSearch()` | `window.openSearch`, `window.closeSearch` |

### localStorage 키

| 키 | 용도 | 기본값 |
|----|------|--------|
| `android-media-framework-theme` | 테마 설정 (dark/light) | 시스템 설정 따름 |
| `tocCollapsed` | TOC 사이드바 접힘 상태 | false |

### 키보드 단축키

| 단축키 | 기능 | 스크립트 |
|--------|------|----------|
| `Ctrl+K` / `Cmd+K` | 검색 모달 열기 | search-ui.js |
| `/` | 검색 모달 열기 (입력 필드 외) | search-ui.js |
| `↑` `↓` | 검색 결과 탐색 | search-ui.js |
| `Enter` | 선택된 결과로 이동 | search-ui.js |
| `ESC` | 검색 모달 닫기 | search-ui.js |

## design-system.css 구조 (3,048줄)

### 섹션 구성

| 라인 범위 | 섹션 | 내용 |
|-----------|------|------|
| 1-58 | CSS 변수 (다크) | 색상, 간격, 타이포그래피 변수 |
| 60-89 | CSS 변수 (라이트) | `[data-theme="light"]` 오버라이드 |
| 90-200 | 레이아웃 | .container (max-width: 1400px), .nav |
| 200-400 | 네비게이션 | .nav-button, .theme-toggle, .lang-switch |
| 400-600 | 타이포그래피 | .page-title, .section-title, .section-number |
| 600-800 | 컴포넌트 | .card-panel, .highlight-box, .mermaid-container |
| 795-827 | 반응형 | @media (max-width: 768px) 브레이크포인트 |
| 833-849 | 스크롤바 | 커스텀 스크롤바 스타일링 |
| 850-878 | 유틸리티 | .text-accent, .text-muted, .mt-lg 등 |
| 879-1437 | 라이트 테마 | 전체 컴포넌트 라이트 모드 오버라이드 |
| 1437+ | 페이지별 컴포넌트 | 용어집, 이슈 카드, API 카드, 마이그레이션 등 |

### 주요 컴포넌트 클래스

**레이아웃**: `.container`, `.nav`, `.nav-button`, `.nav-controls`, `.nav-links`
**타이포그래피**: `.page-title`, `.page-subtitle`, `.section-title`, `.section-number`
**카드**: `.card-panel`, `.card-title`, `.card-content`, `.content-grid`
**Mermaid**: `.mermaid-container`, `.mermaid`
**코드**: `.code-block-wrapper`, `.code-header`, `.code-lang`, `.copy-btn`
**TOC**: `.toc-sidebar`, `.toc-header`, `.toc-nav`, `.toc-link`
**네비게이션**: `.page-navigation`, `.page-nav-btn`, `.page-nav-prev`, `.page-nav-next`
**검색**: `.search-modal`, `.search-input`, `.search-results`, `.search-result-item`
**용어집**: `.alphabet-nav`, `.term-card`, `.term-title`, `.tag`
**이슈**: `.issue-card`, `.severity-badge`, `.severity-critical`
**API**: `.api-card`, `.api-signature`, `.param-list`
**마이그레이션**: `.code-comparison`, `.badge-deprecated`, `.badge-new`

### 애니메이션

| 이름 | 용도 | 효과 |
|------|------|------|
| `fadeInUp` | 섹션 진입 | translateY(30px) → 0, 0.8s |
| `slideDown` | 컨텐츠 로드 | translateY(-20px) → 0, 0.6s |
| `iconPop` | 테마 전환 | rotate + scale |
| `iconSuccess` | 복사 성공 | scale 바운스, 0.6s |
| `iconError` | 복사 실패 | 좌우 흔들림, 0.5s |

## Vercel 배포 설정 (vercel.json)

```json
{
  "cleanUrls": true,        // .html 확장자 제거 (/aosp.html → /aosp)
  "trailingSlash": false,    // 후행 슬래시 제거 (/aosp/ → /aosp)
  "headers": [
    {
      "source": "/(.*)",     // 모든 경로: 보안 헤더
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    },
    {
      "source": "/styles/(.*)",  // CSS: 1년 불변 캐시
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    },
    {
      "source": "/scripts/(.*)", // JS: 1년 불변 캐시
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    },
    {
      "source": "/(.*).html",    // HTML: 항상 최신 (캐시 없음)
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=0, must-revalidate" }
      ]
    }
  ]
}
```

## 개발 명령어

### 로컬 개발 서버
```bash
python3 -m http.server 8001
# 브라우저: http://localhost:8001
```

### Vercel 배포
```bash
npx vercel          # 프리뷰 배포
npx vercel --prod   # 프로덕션 배포
```

> main 브랜치 push 시 자동 프로덕션 배포 (30초~1분)

### Git 워크플로우
```bash
git add <파일명>
git commit -m "타입: 간결한 변경 요약"
git push origin main
```

**커밋 타입**: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`
**브랜치 전략**: 단일 main 브랜치 직접 push (Feature 브랜치/PR 없음)

### 유틸리티 스크립트 (일괄 작업용)

| 스크립트 | 용도 | 사용 시점 |
|----------|------|-----------|
| `add-interactive-diagrams.sh` | 모든 HTML에 diagram-data.js + diagram-interactive.js 주입 | 새 페이지 대량 추가 시 |
| `add-navigation-scripts.sh` | 모든 HTML에 copy-code.js + toc-generator.js + page-navigation.js 주입 | 새 페이지 대량 추가 시 |
| `add_theme_toggle.py` | 모든 HTML에 theme-toggle.js 추가 | 테마 토글 일괄 적용 시 |
| `update_design.py` | 인라인 스타일 → design-system.css 마이그레이션 | CSS 통합 작업 시 (완료됨) |

## 새 페이지 추가 방법

1. **기존 파일 복사**:
   ```bash
   cp glossary.html new-page.html
   ```

2. **HTML 수정**:
   - `<title>`: 페이지 제목 변경
   - `<h1 class="page-title">`: 메인 제목
   - `<p class="page-subtitle">`: 설명
   - 컨텐츠 작성 (`<section class="content-section section">`)

3. **페이지별 커스텀 스타일 추가** (필요 시):
   ```html
   <style>
       .custom-card {
           background: var(--color-surface);
           border-left: 4px solid var(--color-accent);
           padding: var(--spacing-lg);
       }
   </style>
   ```

4. **index.html에 카드 추가**:
   ```html
   <div class="card active cat-reference" onclick="location.href='new-page.html'">
       <div class="card-number">36 <span class="card-status status-ready">Ready</span></div>
       <h3 class="card-title">새 토픽 제목</h3>
       <p class="card-desc">설명</p>
       <a href="new-page.html" class="card-link">Explore →</a>
   </div>
   ```

5. **연관 데이터 업데이트**:
   - `scripts/search-index.js`: SEARCH_INDEX에 페이지 추가
   - `scripts/page-navigation.js`: PAGE_ORDER 배열에 추가
   - `scripts/diagram-data.js`: 다이어그램 노드 데이터 추가 (해당 시)
   - `en/new-page.html`: 영문 버전 생성

6. **검증**:
   ```bash
   python3 -m http.server 8001
   # 한국어: http://localhost:8001/new-page.html
   # 영문: http://localhost:8001/en/new-page.html
   node --check scripts/diagram-data.js  # 구문 검증
   ```

## 인터랙티브 다이어그램 시스템

### 구성
- **diagram-data.js** (21,479줄): `NODE_ID_MAPPING` (523개 Mermaid ID→이름), `DIAGRAM_NODE_DATA` (527개 노드 상세), `DIAGRAM_NODE_DATA_EN` (영문)
- **diagram-interactive.js** (683줄): 노드 클릭 → 모달 표시, Mermaid SVG 렌더링 대기 (1.5초)
- **diagram-data-en-partial.js** (488줄): 영문 데이터 보조 (레거시, en/ 페이지에서만 로드)

### 노드 데이터 구조
```javascript
'노드명': {
    title: '표시 제목',                    // 필수
    layer: 'Application/Framework/HAL/Kernel',  // 필수
    description: '상세 설명 (2-3문장)',    // 필수
    components: ['컴포넌트1', '컴포넌트2'], // 필수
    path: 'frameworks/av/media/',          // 선택 (AOSP 소스 경로)
    doc: 'https://source.android.com/...'  // 선택 (공식 문서 URL)
}
```

### 계층(layer) 분류
| Layer | 설명 | 예시 |
|-------|------|------|
| Application | 앱 레이어 | Media Apps, Gallery, Music |
| Framework | Java/Kotlin 프레임워크 | MediaSession, AudioManager |
| Native | C/C++ 네이티브 | NuPlayer, AudioFlinger |
| HAL | 하드웨어 추상화 | Codec HAL, Audio HAL |
| Kernel | 리눅스 커널 | Driver, Binder |
| DRM | DRM 관련 | Widevine, OEMCrypto |
| TEE | 보안 실행 환경 | Trustlet, Secure Decoder |

### 커버리지 확인
```bash
node -e "
const fs = require('fs');
const content = fs.readFileSync('scripts/diagram-data.js', 'utf8');
const mappingLines = content.split('\\n').filter(l => l.match(/^\\s+'[^']+': '[^']+'/));
const mappingValues = [...new Set(mappingLines.map(l => l.match(/: '([^']+)'/)[1]))];
const dataLines = content.split('\\n').filter(l => l.match(/^    '[^']+': \\{/));
const dataKeys = dataLines.map(l => l.match(/'([^']+)'/)[1]);
const missing = mappingValues.filter(v => !dataKeys.includes(v));
console.log('매핑:', mappingValues.length, '데이터:', dataKeys.length, '누락:', missing.length);
"
```

## 다국어 지원 (i18n)

### 구조
- **한국어** (루트, 43개): `/<page>.html` → `<html lang="ko">`
- **영어** (en/, 42개): `/en/<page>.html` → `<html lang="en">`
- old_main_page.html만 영문 미제공 (레거시)

### 지원 범위

| 기능 | 한국어 | 영어 | 비고 |
|------|--------|------|------|
| HTML 페이지 | 43개 | 42개 | old_main_page 제외 |
| 다이어그램 노드 | 527개 | 527개 | 100% 번역 |
| 검색 UI | ✅ | ✅ | 플레이스홀더/힌트 다국어 |
| 코드 복사 버튼 | ✅ | ✅ | '복사'/'Copy' 다국어 |
| TOC/네비게이션 | ✅ | ✅ | 라벨 다국어 |

### 언어 전환 메커니즘
- `lang-switch.js`가 URL 경로 기반 감지 (`/en/` 여부)
- KO/EN 토글 버튼을 .nav-controls에 동적 삽입
- 전환 시 URL 경로만 변경 (`/aosp` ↔ `/en/aosp`)

### 번역 워크플로우
```bash
# 1. 한국어 페이지 작성 (루트)
vi new-page.html

# 2. 영문 페이지 생성
python3 scripts/translate_ko_to_en.py new-page.html

# 3. 다이어그램 데이터 번역 (diagram-data.js에 영문 추가)
vi scripts/diagram-data.js

# 4. 검증
open en/new-page.html
```

## 검색 기능

### 구성
- **Fuse.js v7** (CDN): 퍼지 검색 엔진
- **search-index.js**: 3종 인덱스 (pages 35개, issues 16개, glossary 26개)
- **search-ui.js**: 모달 UI, 키보드 네비게이션, 다국어

### 검색 설정 (Fuse.js)
```javascript
FUSE_OPTIONS = {
    threshold: 0.4,           // 매칭 허용 범위 (0=정확, 1=모두)
    minMatchCharLength: 2,    // 최소 입력 길이
    keys: [
        { name: 'title', weight: 0.4 },
        { name: 'description', weight: 0.3 },
        { name: 'term', weight: 0.4 },
        { name: 'definition', weight: 0.3 },
        { name: 'category', weight: 0.1 }
    ]
}
```

### 검색 결과 아이콘
- **페이지**: 문서 아이콘
- **이슈**: 경고 삼각형 아이콘 (severity: critical/high/medium)
- **용어집**: 책 아이콘

## 기술 정확성 검토 (2025-02)

`docs/technical-accuracy-review-2025-02.md` (579줄)

### 검토 결과 요약

| 항목 | 결과 |
|------|------|
| 검토 페이지 수 | 29/43 (67%) |
| 정확한 페이지 | 28/29 (96.5%) |
| 크리티컬 오류 | 1건 (vehicle-hal-media.html VHAL Property ID) |
| 전체 정확도 점수 | 95.4/100 |

### 주요 발견

**크리티컬 오류 (HIGH)**:
- vehicle-hal-media.html의 VHAL Property ID `HW_ROTARY_INPUT` 값 오류
- 잘못된 값: `0x0A000405` → 올바른 값: `0x11410A20`

**개선 권장 (MEDIUM)**:
- media-security.html: 2023-2024 최신 CVE 데이터 보강

**개선 권장 (LOW)**:
- audio-framework.html: LE Audio (Bluetooth Low Energy) 추가
- aosp.html/codec2.html: Android 버전별 기능 매트릭스 추가

## 설계 문서 (docs/plans/)

| 문서 | 상태 | 내용 |
|------|------|------|
| 2025-01-28-new-topics-design.md | ✅ 구현 완료 | Card 26-35 (10개 신규 토픽) 설계 |
| 2025-01-28-i18n-design.md | ✅ 구현 완료 | 다국어(영문) 지원 설계 |
| 2025-01-28-code-reference-enhancement-design.md | 참조 문서 | 코드 레퍼런스 개선 설계 |

## 최근 작업 히스토리

### 2025-02: 기술 정확성 검토 및 다이어그램 개선

**기술 문서 정확성 개선**:
- 9개 페이지 한국어/영문 기술 정확성 동기화
- VHAL Property ID 등 크리티컬 오류 수정
- AOSP 소스코드 크로스체크 기반 검증

**다이어그램 개선**:
- Widevine 다이어그램: 하드코딩 스타일 제거, 테마 시스템에 위임
- Widevine 라이트모드 텍스트 가독성 개선
- media-playback: flowchart 문법으로 변경 + 다이어그램 단순화
- Mermaid 라이트/다크 모드 테마 통합 적용

**주요 커밋**:
- `a9c5d58` - fix: Widevine 다이어그램 하드코딩 스타일 제거, 테마 시스템에 위임
- `cdb27b3` - fix: 기술 문서 정확성 개선 (9개 페이지, 한글/영문)
- `5a0e543` - fix: media-playback 다이어그램을 flowchart 문법으로 변경
- `854aaa3` - fix: 영문 페이지 기술 문서 정확성 동기화 (7개 파일)

---

### 2025-01-31: 신규 페이지 추가 및 영문화

**추가 작업**:
- 신규 페이지 추가 및 영문화 완료
- Dolby DDP/Vision 포팅 가이드 영문화 완료
- MediaSession Section 13 영문화 완료
- AAOS Boot Timeline 다이어그램 개선 (Gantt → Timeline → Flowchart)

**주요 커밋**:
- `b33f626` - feat: 신규 페이지 추가 및 영문화 완료
- `7ce02bc` - feat: Dolby DDP/Vision 포팅 가이드 영문화 완료
- `374f1b8` - feat: MediaSession Section 13 영문화 완료
- `f546ee3` - fix: Mermaid 다이어그램 라이트/다크 모드 테마 적용

---

### 2025-01-30: 다국어 UI/UX 개선 및 CSS 마이그레이션 완료

**CSS 통합 마이그레이션 완료**:
- 모든 HTML 파일(Card 1-20 포함)이 design-system.css로 마이그레이션
- 인라인 스타일 패턴(패턴 A) 완전 제거
- Archivo/IBM Plex Mono/Playfair Display 폰트 통일

**다국어 UI 개선**:
- FOIT(Flash of Incorrect Theme) 수정
- 컨텐츠 페이지 한/영 버튼 정렬 개선
- 검색 UI 다국어 지원 추가
- 인터랙티브 다이어그램 영문 번역 완료 (527개 노드)

**주요 커밋**:
- `d840ebc` - fix: 코드 복사 버튼 다국어 지원 추가 및 영문 네비게이션 링크 통일
- `f663318` - fix: 테마 전환 버튼 메인 페이지 판별 로직 개선
- `b078fb1` - fix: 라이트모드 페이지 전환 시 다크모드 플래시 현상 수정 (FOIT)
- `fbb87a3` - feat: 인터랙티브 다이어그램 영문 번역 완료 (527개 노드)

---

### 2025-01-28: 인터랙티브 다이어그램 데이터 완성

- DIAGRAM_NODE_DATA 커버리지 10% → 100% (527개 노드)
- NODE_ID_MAPPING 523개 매핑 완성
- 커밋: `5d8934b`

---

### 2025-01-25: Card 21-25 추가 및 design-system.css 도입

- common-media-issues, debugging-tools, api-quick-reference, migration-guides, glossary 추가
- design-system.css 도입 (공통 CSS 변수 + 컴포넌트)
- theme-toggle.js 라이트/다크 모드 전환 추가
- 커밋: `9f6ac9d`

## 파일 수정 시 주의사항

1. **CSS 변수 수정 시**: design-system.css 변수 변경은 전체 85개 페이지에 영향
2. **Mermaid.js 버전**: 모든 페이지에서 v10 CDN 통일됨
3. **UTF-8 인코딩**: `<meta charset="UTF-8">` 필수
4. **FOIT 방지 스크립트**: 모든 페이지 `<head>`에 인라인 테마 감지 스크립트 필수
5. **en/ 경로**: 영문 페이지는 `../styles/`, `../scripts/` 상대 경로 사용
6. **theme-toggle.js 캐시**: `?v=2` 쿼리 파라미터로 캐시 무효화 중
7. **검색 인덱스 수동 업데이트**: 페이지 추가/삭제 시 `search-index.js` 수동 업데이트 필요
8. **PAGE_ORDER 수동 업데이트**: 페이지 추가 시 `page-navigation.js`의 배열 수동 업데이트 필요
9. **테스트**: 로컬 서버에서 다크/라이트 모드 모두 확인 후 커밋

## 향후 개선 사항 (선택사항)

### 완료된 항목 ✅
- ~~검색 기능 추가~~ ✅ (Fuse.js 기반)
- ~~인터랙티브 다이어그램 노드 데이터 완성~~ ✅ (527/527)
- ~~다국어 UI 지원~~ ✅ (한국어 43 + 영문 42)
- ~~FOIT 수정~~ ✅
- ~~Card 1-20 CSS 마이그레이션~~ ✅ (design-system.css 통합 완료)
- ~~기술 정확성 검토~~ ✅ (96.5%, 2025-02)

### 진행 예정 항목
- SEO 및 Open Graph 메타 태그 최적화
- 사이트맵 자동 생성
- 코드 하이라이팅 개선 (Prism.js 도입)
- PDF 내보내기 기능
- PWA 변환 (오프라인 접근 지원)
- media-security.html 최신 CVE 보강
- audio-framework.html LE Audio 추가

## 트러블슈팅

### Mermaid 다이어그램 미렌더링
- CDN 확인: `<script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js">`
- `mermaid-theme.js` 로드 확인
- 다크/라이트 테마 전환 시 재렌더링: `watchThemeChanges()` MutationObserver 동작 확인

### FOIT (Flash of Incorrect Theme)
- **증상**: 페이지 전환 시 다크모드 플래시
- **확인**: `<head>` 내 인라인 FOIT 방지 스크립트 존재 여부
- **해결**: localStorage `android-media-framework-theme` 키로 즉시 테마 적용

### Vercel 404 에러
- `vercel.json`의 `cleanUrls: true` 설정 확인
- 파일명 대소문자 정확히 일치 확인
- en/ 디렉토리 내 파일 존재 여부 확인

### 언어 전환 시 404
- `lang-switch.js`의 URL 변환 로직: `/` ↔ `/en/` 접두사 전환
- 해당 영문 파일이 en/ 디렉토리에 존재하는지 확인
- en/index.html의 `<base href="/en/">` 태그 영향 확인

### CSS 변수 미적용
- `data-theme` 속성 확인 (FOIT 스크립트가 자동 설정)
- design-system.css 로딩 경로 확인 (루트: `styles/`, en/: `../styles/`)
- CSS 로딩 순서: design-system.css → 페이지별 `<style>` 태그

### 인터랙티브 다이어그램 미작동
- diagram-data.js + diagram-interactive.js 로드 순서 확인
- Mermaid SVG 렌더링 완료 후 클릭 핸들러 등록됨 (1.5초 대기)
- localhost 환경에서만 디버그 로그 활성화

## 참고 자료

- [AOSP Media Framework](https://source.android.com/docs/core/media)
- [Android Automotive OS](https://source.android.com/docs/automotive)
- [Mermaid.js 문서](https://mermaid.js.org/)
- [Fuse.js 문서](https://www.fusejs.io/)
- [Vercel 문서](https://vercel.com/docs)
- [VHAL Interface](https://source.android.com/docs/automotive/vhal/vhal-interface)
