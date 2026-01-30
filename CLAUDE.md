# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 📋 프로젝트 개요

**Android Media Framework Visualization Project**는 Android Open Source Project(AOSP)의 미디어 프레임워크 아키텍처를 시각화하여 문서화한 정적 웹사이트 프로젝트입니다.

- **목적**: LGE Android Media Framework 학습 및 참조 자료
- **타입**: 정적 웹사이트 (Static HTML Documentation)
- **주요 대상**: Android 미디어 프레임워크 개발자, AAOS 엔지니어
- **언어**: 한국어 (기본), 영어 (번역 지원)
- **배포**: Vercel (main 브랜치 push 시 자동 배포)
- **라이브 URL**: Vercel 자동 생성 도메인

## 📊 프로젝트 현황 요약

| 항목 | 수치 | 비고 |
|------|------|------|
| 한국어 페이지 | 38개 | index + old_main_page + 35개 컨텐츠 + 1개 레거시 |
| 영문 페이지 | 40개 | en/ 디렉토리 |
| 다이어그램 노드 | 527개 | 한국어 + 영문 (100% 번역 완료) |
| Scripts 파일 | 16개 | JS 13개 + Python 3개 |
| diagram-data.js | 21,479줄 | 노드 데이터 + 매핑 |

## 🏗️ 프로젝트 구조

```
Android_Media_Framework/
│
├── index.html                      # 메인 랜딩 페이지 (35개 토픽 네비게이션)
├── README.md                       # 사용자용 프로젝트 설명서
├── CLAUDE.md                       # 개발자용 프로젝트 상세 문서 (이 파일)
├── NAVIGATION_FEATURES.md          # 네비게이션 기능 가이드 (코드 복사, TOC 등)
├── vercel.json                     # Vercel 배포 설정 (cleanUrls, trailingSlash)
│
├── .git/                           # Git 저장소
├── .gitignore                      # Git 제외 파일 목록
├── .claude/                        # Claude 설정
├── .vercel/                        # Vercel 배포 캐시
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
│   └── audio-framework.html        # AudioFlinger/PolicyService 파이프라인
│
├── [04. 차량용 시스템 (AAOS)]
│   ├── carmedia.html               # Car Media Service
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
│   └── design-system.css           # 공통 디자인 시스템 (CSS 변수, 컴포넌트)
│
├── scripts/                        # JavaScript & Python 스크립트 (16개)
│   ├── [다크모드 & 테마]
│   │   ├── theme-toggle.js         # 라이트/다크 모드 토글 (FOIT 방지 포함)
│   │   └── mermaid-theme.js        # Mermaid 다이어그램 테마 동적 변경
│   │
│   ├── [인터랙티브 다이어그램]
│   │   ├── diagram-data.js         # 노드 데이터 (21,479줄, 527개 노드, 한/영 100%)
│   │   ├── diagram-data-en-partial.js # 영문 노드 데이터 (레거시, 사용 안 함)
│   │   └── diagram-interactive.js  # 노드 클릭 핸들러 & 상세 패널
│   │
│   ├── [다국어 지원]
│   │   └── lang-switch.js          # 한/영 언어 전환 (URL 기반)
│   │
│   ├── [검색 기능]
│   │   ├── search-index.js         # 페이지 메타데이터 인덱스
│   │   └── search-ui.js            # 검색 UI 컴포넌트 (다국어 지원)
│   │
│   ├── [페이지 네비게이션]
│   │   ├── copy-code.js            # 코드 블록 복사 버튼
│   │   ├── toc-generator.js        # 목차(TOC) 자동 생성 & 스크롤 스파이
│   │   └── page-navigation.js      # 이전/다음 페이지 버튼
│   │
│   └── [번역 도구] (Python)
│       ├── translate_ko_to_en.py   # HTML 페이지 한→영 번역
│       ├── translate_diagram_data.py # 다이어그램 데이터 번역
│       └── generate_english_translation.py # 일괄 영문 페이지 생성
│
├── en/                             # 영문 번역 페이지 (40개)
│   ├── index.html                  # 영문 메인 페이지
│   ├── aosp.html ~ glossary.html   # 35개 메인 + 4개 서브 영문 페이지
│   └── ...
│
├── docs/
│   └── plans/                      # 개발 계획 및 설계 문서
│       └── 2025-01-28-new-topics-design.md
│
├── [레거시/서브 페이지] (index.html에서 직접 링크되지 않음)
│   ├── mediasession-api.html       # MediaSession API 플로우 (레거시, mediasession.html에서 링크)
│   ├── dolby-ddp-porting.html      # Dolby Digital Plus 포팅 가이드 (dolby-codecs.html에서 링크)
│   ├── dolby-vision-porting.html   # Dolby Vision 포팅 가이드 (dolby-codecs.html에서 링크)
│   └── cdd.html                    # CDD 정책 문서 (cts.html과 멀티링크 카드)
│
└── [레거시 파일]
    └── old_main_page.html          # 이전 메인 페이지 백업
```

## 🎨 기술 스택

### Frontend
- **HTML5**: 시맨틱 마크업
- **CSS3**: 모던 다크 테마, CSS Grid, Flexbox
- **JavaScript**: Vanilla JS (최소한의 인터랙션)
- **Mermaid.js**: 다이어그램 시각화 라이브러리

### Fonts & Design

**Index 페이지 (index.html)**:
- **Google Fonts**: Noto Sans KR (본문), JetBrains Mono (코드/숫자)
- **컬러 팔레트**:
  - Primary Background: `#0a0e1a`
  - Card Background: `#1a1f35`
  - Accent Blue: `#3b82f6`
  - Gradient: Blue → Purple → Pink

**컨텐츠 페이지 (design-system.css 기반)**:
- **Google Fonts**:
  - Archivo (Body) - 본문 텍스트
  - IBM Plex Mono (Code) - 코드 블록, 기술 용어
  - Playfair Display (Headings) - 제목
- **컬러 팔레트** (CSS 변수):
  - `--color-bg-primary`: `#0F172A` (slate-900)
  - `--color-surface`: `#1E293B` (slate-800)
  - `--color-accent`: `#00d4ff` (cyan)
  - `--color-text-primary`: `#F1F5F9` (slate-100)
  - `--color-text-muted`: `#94A3B8` (slate-400)

### Deployment
- **Vercel**: 정적 사이트 호스팅
- **Git**: 버전 관리

## 🎨 UI/UX 디자인 가이드라인

**UI/UX 개선 작업 시 반드시 다음 리소스를 참조하세요:**

- **UI/UX Pro Max Skill**: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
  - 67개 디자인 스타일, 96개 컬러 팔레트, 56개 폰트 페어링
  - 다크 테마 최적화 및 반응형 디자인 패턴
  - Glassmorphism, Neumorphism, Brutalism 등 모던 스타일
  - 접근성 및 사용성 모범 사례

**적용 원칙**:
- UI/UX 개선, 디자인 시스템 변경, 새 페이지 추가 시 위 가이드라인 준수
- 기존 다크 테마와 일관성 유지
- 모바일 반응형 우선 (최소 320px 너비)
- 접근성 표준 준수 (WCAG 2.1)

## 📊 주요 페이지 분석

### index.html (메인 랜딩 페이지)
- **라인 수**: ~1068줄
- **구조**:
  - Header: 그라디언트 배경 + 애니메이션 (`pulse` 키프레임)
  - Grid: 39개 카드 (CSS Grid, `minmax(320px, 1fr)`)
  - 카테고리 컬러 코딩: 상단 4px 보더
  - 검색바: 헤더에 임베드 (search-ui.js 연동)
  - 다국어 토글: EN/KO 전환 버튼
- **인터랙션**: 카드 전체 클릭 가능 (`onclick="location.href='...'`)
- **상태 표시**:
  - Ready: 녹색 점 (`.status-ready`)
  - Preparation: 빨간색 점 (`.status-preparation`)
- **카테고리**:
  - `cat-architecture`: 아키텍처 (파란색)
  - `cat-media`: 미디어 (보라색)
  - `cat-automotive`: 차량 (청록색)
  - `cat-audio`: 오디오 (주황색)
  - `cat-drm`: DRM/코덱 (핑크색)
  - `cat-testing`: 테스팅 (초록색)
  - `cat-reference`: 레퍼런스 (노란색)

### 컨텐츠 페이지

**두 가지 스타일 패턴 존재:**

#### 패턴 A: 인라인 스타일 (Card 1-20)
- 예: aosp.html, codec2.html, media-framework-core.html
- 각 파일에 `<style>` 태그로 스타일 포함
- CSS 변수 사용으로 일관성 유지

#### 패턴 B: design-system.css 기반 (Card 21-25)
- 예: glossary.html, common-media-issues.html, debugging-tools.html
- `<link rel="stylesheet" href="styles/design-system.css">` 사용
- 페이지별 커스텀 스타일을 `<style>` 태그에 추가

**공통 구조**:
1. **Navigation**: 뒤로가기 버튼 (`<nav class="nav">`)
2. **Header**: 페이지 제목 및 설명
3. **Mermaid Diagrams**: 아키텍처 시각화
4. **Content Sections**: 레이어별/컴포넌트별 상세 설명
5. **Code Examples**: 관련 API 사용법 (해당 시)
6. **References**: AOSP 소스코드 링크 등

## 🎯 35개 토픽 목록 (index.html 카드)

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
| 28 | 테스트 | cts.html | CTS/VTS/GTS/CDD 테스트 (멀티링크) |
| 29 | 테스트 | media-porting-checklist.html | 미디어 스택 포팅 체크리스트 |
| 30 | 레퍼런스 | common-media-issues.html | 미디어 문제 해결 가이드 (16+ 이슈) |
| 31 | 레퍼런스 | debugging-tools.html | 디버깅 도구 (logcat, dumpsys, perfetto) |
| 32 | 레퍼런스 | production-debugging.html | 프로덕션 디버깅 심화 |
| 33 | 레퍼런스 | api-quick-reference.html | API 치트시트 (MediaPlayer, ExoPlayer, Codec) |
| 34 | 레퍼런스 | migration-guides.html | 마이그레이션 가이드 (MP→ExoPlayer→Media3) |
| 35 | 레퍼런스 | glossary.html | Android Media 용어집 (50+ 용어, A-Z) |

### 서브/레거시 페이지 (index.html에서 직접 링크되지 않음)

| 페이지 | 설명 | 링크 위치 |
|--------|------|-----------|
| mediasession-api.html | MediaSession API 플로우 (레거시) | mediasession.html |
| dolby-ddp-porting.html | Dolby Digital Plus 포팅 가이드 | dolby-codecs.html |
| dolby-vision-porting.html | Dolby Vision 포팅 가이드 | dolby-codecs.html |
| cdd.html | CDD 정책 문서 | cts.html (멀티링크 카드) |

## 🚀 개발 명령어

### 로컬 개발 서버 실행
```bash
# Python 내장 서버 (권장)
python3 -m http.server 8001

# 또는 Node.js live-server
npx live-server --port=8001
```
브라우저: `http://localhost:8001`

### Vercel 배포
```bash
# 최초 배포 (대화형 설정)
npx vercel

# 프로덕션 배포
npx vercel --prod
```

**중요**: main 브랜치에 push하면 Vercel이 자동으로 프로덕션 배포를 시작합니다 (약 30초~1분 소요).

### Git 워크플로우
```bash
# 변경사항 확인
git status
git diff

# 스테이징 및 커밋 (한글 커밋 메시지 사용)
git add <파일명>
git commit -m "타입: 간결한 변경 요약"

# main 브랜치에 직접 푸시 (단일 브랜치 전략)
git push origin main
```

**커밋 타입**: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`

## 🏗️ 프로젝트 아키텍처

### HTML 페이지 공통 구조

#### 패턴 A: 인라인 스타일 (Card 1-20)

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>페이지 제목 - Android Media Framework</title>
    <!-- Google Fonts: Noto Sans KR, JetBrains Mono -->
    <!-- Mermaid.js CDN -->
    <style>
        /* CSS 변수 기반 다크 테마 */
        :root {
            --bg-primary: #0a0e1a;
            --bg-secondary: #1a1f35;
            --accent-blue: #3b82f6;
            /* ... */
        }
    </style>
</head>
<body>
    <header><!-- 페이지 제목 및 설명 --></header>
    <main>
        <section class="diagram">
            <!-- Mermaid 다이어그램 -->
        </section>
        <section class="description">
            <!-- 레이어/컴포넌트별 상세 설명 -->
        </section>
    </main>
    <script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>
    <script>mermaid.initialize({...});</script>
</body>
</html>
```

#### 패턴 B: design-system.css 기반 (Card 21-25)

```html
<!DOCTYPE html>
<html lang="ko" data-theme="dark">
<head>
    <meta charset="UTF-8">
    <title>페이지 제목 - Android Media Framework</title>
    <!-- Google Fonts: Archivo, IBM Plex Mono, Playfair Display -->
    <link rel="stylesheet" href="styles/design-system.css">
    <style>
        /* 페이지별 커스텀 스타일 (design-system.css 변수 활용) */
        .custom-component {
            background: var(--color-surface);
            color: var(--color-text-primary);
            /* ... */
        }
    </style>
</head>
<body>
    <nav class="nav">
        <a href="index.html" class="back-button">← Back to Home</a>
    </nav>
    <div class="container">
        <header>
            <h1 class="page-title">페이지 제목</h1>
            <p class="page-subtitle">설명</p>
        </header>
        <section class="content-section section">
            <h2 class="section-title">
                <span class="section-number">01</span>
                섹션 제목
            </h2>
            <!-- 컨텐츠 -->
        </section>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>
    <script>
        mermaid.initialize({
            startOnLoad: true,
            theme: "dark",
            themeVariables: {
                primaryColor: "#00d4ff",
                primaryTextColor: "#e8eaed",
                /* ... */
            }
        });
    </script>
    <script src="scripts/theme-toggle.js"></script>
</body>
</html>
```

### 주요 설계 원칙

1. **하이브리드 CSS 전략**:
   - **Card 1-20**: 인라인 `<style>` 태그로 스타일 포함
   - **Card 21-25**: `styles/design-system.css` + 페이지별 커스텀 스타일
   - 향후 통합 가능 (공통 CSS 파일로 마이그레이션 선택사항)

2. **CSS 변수 활용**: 컬러 팔레트 및 스타일 일관성 유지
   - Card 1-20: 개별 CSS 변수 정의
   - Card 21-25: design-system.css 변수 사용 (`--color-accent`, `--spacing-lg` 등)

3. **Mermaid.js**: 모든 아키텍처 다이어그램 시각화
   - Card 1-20: 기본 또는 커스텀 테마
   - Card 21-25: 다크 테마 통일 (`primaryColor: "#00d4ff"`)

4. **반응형 디자인**: 최소 320px 너비 지원, CSS Grid/Flexbox 활용

5. **최소한의 JavaScript**: Vanilla JS만 사용 (외부 프레임워크 없음)
   - `theme-toggle.js`: 라이트/다크 모드 전환 (Card 21-25)

6. **시맨틱 HTML**: `<nav>`, `<section>`, `<header>` 등 시맨틱 태그 사용

### index.html 특이사항

- **Grid 레이아웃**: 35개 카드 (`minmax(320px, 1fr)`)
- **카테고리 컬러 코딩**: 상단 4px 보더로 구분
  - `cat-arch`: 아키텍처 (파란색)
  - `cat-media`: 미디어 (보라색)
  - `cat-automotive`: 차량 (청록색)
  - `cat-audio`: 오디오 (주황색)
  - `cat-drm`: DRM/코덱 (핑크색)
  - `cat-testing`: 테스팅 (초록색)
  - `cat-reference`: 레퍼런스 (노란색)
- **상태 표시**: 카드 번호 옆에 작은 점으로 표시 (모든 카드 Ready 상태)
- **클릭 이벤트**: `onclick="location.href='...'"` 인라인 핸들러 (카드 전체 클릭 가능)
- **다국어 지원**: 네비게이션에 EN/KO 토글 버튼 포함 (lang-switch.js)
- **검색 기능**: 헤더에 검색바 포함 (search-ui.js 연동, 다국어 플레이스홀더)

## 📝 새 페이지 추가 방법

### 방법 1: 인라인 스타일 패턴 (Card 1-20 스타일)

1. 기존 HTML 파일(예: aosp.html)을 템플릿으로 복사
2. `<title>`, `<h1>`, 메타 설명 수정
3. CSS 변수 및 스타일 커스터마이징
4. Mermaid 다이어그램 작성
5. `index.html`에 카드 추가

### 방법 2: design-system.css 패턴 (Card 21-25 스타일, 권장)

1. **기존 파일 복사 (템플릿)**:
   ```bash
   cp glossary.html new-page.html
   ```

2. **HTML 수정**:
   - `<title>`: 페이지 제목 변경
   - `<h1 class="page-title">`: 메인 제목
   - `<p class="page-subtitle">`: 설명

3. **페이지별 커스텀 스타일 추가**:
   ```html
   <style>
       /* design-system.css 변수 활용 */
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
       <div class="card-number">26 <span class="card-status status-ready">Ready</span></div>
       <h3 class="card-title">새 토픽 제목</h3>
       <p class="card-desc">설명</p>
       <a href="new-page.html" class="card-link">Explore →</a>
   </div>
   ```

### UI/UX Pro Max Skill 활용 (권장)

새 페이지 디자인 시 **ui-ux-pro-max-skill** 사용:

```bash
# 디자인 시스템 생성
python3 skills/ui-ux-pro-max/scripts/search.py "키워드" --design-system -p "프로젝트명"

# 도메인별 상세 검색
python3 skills/ui-ux-pro-max/scripts/search.py "키워드" --domain ux
```

## 🔧 파일 수정 시 주의사항

1. **CSS 일관성**: CSS 변수 수정 시 모든 페이지에 영향 → 일관성 유지 필수
2. **Mermaid.js 버전**: CDN 버전 통일 권장 (현재 페이지마다 다를 수 있음)
3. **UTF-8 인코딩**: 한글 깨짐 방지를 위해 `<meta charset="UTF-8">` 필수
4. **테스트**: 로컬 서버에서 브라우저 렌더링 확인 후 커밋

## 🔄 Git 브랜치 전략

**단일 브랜치 전략 사용**:
- 모든 수정 사항은 **main 브랜치에 직접 push**
- Feature 브랜치 생성 안 함
- Pull Request 불필요
- main 브랜치 push 시 Vercel 자동 배포

> 단독 작업 환경의 정적 웹사이트 프로젝트이므로 단순한 워크플로우를 채택했습니다.

## 📜 최근 작업 히스토리

### 2025-01-30: 다국어 UI/UX 개선 및 영문 번역 완료

**다국어 UI 개선**

| 항목 | 개선 내용 |
|------|-----------|
| FOIT 수정 | 라이트모드 페이지 전환 시 다크모드 플래시 현상 해결 |
| 한/영 버튼 | 컨텐츠 페이지에서 다크모드 버튼 옆으로 정렬 |
| 검색 UI | 다국어 플레이스홀더 지원 (한국어/영어) |
| 다이어그램 | 인터랙티브 다이어그램 다국어 지원 (527개 노드, 100% 번역) |

**영문 번역 완료**:
- Widevine DRM 페이지 (한→영)
- CTS/CDD 페이지 (한→영)
- Dolby 포팅 가이드 2개 (dolby-ddp-porting, dolby-vision-porting)

**관련 커밋**:
- `2738e3f` - fix: 컨텐츠 페이지 한/영 버튼 오른쪽 정렬
- `b078fb1` - fix: 라이트모드 페이지 전환 시 다크모드 플래시 현상 수정 (FOIT)
- `e6c4947` - feat: 검색 UI 다국어 지원 추가
- `fbb87a3` - feat: 인터랙티브 다이어그램 영문 번역 완료 (527개 노드)

---

### 2025-01-30 (초): 프로젝트 문서화 대폭 개선

**CLAUDE.md 보완 (25개 → 39개 토픽)**

| 항목 | 이전 | 이후 |
|------|------|------|
| 토픽 수 | 25개 | 39개 |
| index.html 라인 수 | ~650줄 | ~1068줄 |
| scripts/ 파일 수 | 2개 | 16개 |
| 다국어 지원 | 미문서화 | 완전 문서화 |

**추가된 섹션**:
1. **🌐 다국어 지원 (i18n)**: en/ 디렉토리, 번역 워크플로우, 언어 전환
2. **🔍 검색 기능**: search-index.js, search-ui.js, 검색 알고리즘
3. **🛠️ 추가 인터랙티브 기능**: 코드 복사, 목차 생성, 페이지 네비게이션, Mermaid 테마 등

**추가된 토픽 문서화**:
- Performance Optimization Guide
- Vendor Extension 개발 가이드
- 미디어 보안 가이드
- Multi-Display Entertainment
- Multi-Zone Audio 심화
- OEM 커스터마이징 가이드
- Vehicle HAL 미디어 연동
- AAOS 부팅 & 미디어 최적화
- 미디어 스택 포팅 체크리스트
- 프로덕션 디버깅 심화
- Dolby DDP/Vision 포팅 가이드 (2개)
- mediasession-api.html (레거시)

**프로젝트 구조 업데이트**:
- en/ 디렉토리 및 40개 영문 페이지 추가
- docs/plans/ 디렉토리 추가
- scripts/ 디렉토리 16개 파일 추가

---

### 2025-01-28: 인터랙티브 다이어그램 데이터 완성

**DIAGRAM_NODE_DATA 전체 보완 (커버리지 10% → 100%)**

| 항목 | 이전 | 이후 | 현재 (2025-01-30) |
|------|------|------|-------------------|
| 데이터 키 수 | 58개 | 527개 | 527개 |
| 누락 항목 | 466개 | 0개 | 0개 |
| 커버리지 | 10% | 100% | 100% |
| 파일 라인 수 | 8,993줄 | 12,485줄 | 21,479줄 |
| 영문 번역 | - | - | 527개 (100%) |

**추가된 노드 카테고리**:
1. **AOSP 아키텍처**: Codec HAL, System Services, HAL Layer, Proxy/Stub, ServiceManager 등
2. **Media Framework Core**: NuPlayer, CCodec Entry, Codec2 Core, MediaSession Service 등
3. **Widevine DRM**: CDM, OEMCrypto, TEE, L1/L2/L3 레벨, License Server 등
4. **AAOS**: CarMediaService, Vehicle HAL, Audio Zones, Car Services 등
5. **Codec2**: C2Param, C2Buffer, C2Work, Block Pool, Buffer Flow 관련 등
6. **Audio Framework**: Audio Routing, Volume Control, Bluetooth Audio 등
7. **CDD/CTS**: Device Types, Media Codecs, Performance Class 등

**파일 구조** (`scripts/diagram-data.js`):
```javascript
// Mermaid 노드 ID → 사람이 읽을 수 있는 이름 매핑
const NODE_ID_MAPPING = {
    'APP': 'System Apps',
    'FW': 'Framework',
    // ... 523개 매핑
};

// 노드별 상세 정보
const DIAGRAM_NODE_DATA = {
    'System Apps': {
        title: '표시 제목',
        layer: '계층 (Application/Framework/HAL/Kernel 등)',
        description: '상세 설명 (2-3문장)',
        components: ['컴포넌트1', '컴포넌트2', ...],
        path: 'AOSP 소스 경로 (선택)',
        doc: '공식 문서 URL (선택)'
    },
    // ... 527개 항목
};
```

**기능 설명**:
- 다이어그램 노드 클릭 시 상세 정보 패널 표시
- 각 노드의 역할, 구성요소, 소스 경로, 문서 링크 제공
- 이전의 "자동 생성 메시지" 대신 실제 상세 정보 표시

**커밋**: `5d8934b` - "feat: DIAGRAM_NODE_DATA 누락 항목 전체 보완 (커버리지 10% → 100%)"

---

### 2025-01-25: Card 21-25 추가 및 UI/UX 개선

**추가된 페이지 (5개)**:
- **Card 21**: common-media-issues.html - 미디어 문제 해결 가이드
- **Card 22**: debugging-tools.html - 디버깅 도구 가이드
- **Card 23**: api-quick-reference.html - API 치트시트
- **Card 24**: migration-guides.html - 마이그레이션 가이드
- **Card 25**: glossary.html - Android Media 용어집

**주요 개선사항**:
1. **design-system.css 도입**:
   - 공통 CSS 변수 및 컴포넌트 스타일
   - Archivo/IBM Plex Mono/Playfair Display 폰트 스택
   - 다크 테마 최적화 (#0F172A 배경, #00d4ff 액센트)

2. **페이지별 커스텀 컴포넌트**:
   - glossary.html: `alphabet-nav`, `term-card`, `tag`
   - common-media-issues.html: `issue-card`, `severity-badge`, `symptom/solution-box`
   - debugging-tools.html: `tool-card`, `badge`, `command-table`
   - api-quick-reference.html: `api-card`, `api-signature`, `param-list`
   - migration-guides.html: `code-comparison`, `before/after-block`

3. **인터랙션 개선**:
   - index.html Card 21-25에 `onclick` 속성 추가 (카드 전체 클릭 가능)
   - Mermaid.js 다크 테마 통일
   - theme-toggle.js 추가 (라이트/다크 모드 전환)

4. **파일 정리**:
   - aosp.html.backup 삭제
   - 레거시 백업 파일 제거

**커밋**: `9f6ac9d` - "style: Card 21-25 HTML 페이지에 design-system.css 적용 및 커스텀 스타일 추가"

## 🖱️ 인터랙티브 다이어그램 시스템

### 개요
Mermaid.js 다이어그램의 노드를 클릭하면 해당 컴포넌트의 상세 정보가 표시되는 인터랙티브 기능입니다. 한국어와 영어 다국어를 지원합니다.

### 파일 구조
```
scripts/
├── diagram-data.js          # 한국어 노드 데이터 (21,479줄)
│   ├── NODE_ID_MAPPING      # Mermaid ID → 표시 이름 (523개)
│   ├── DIAGRAM_NODE_DATA    # 노드별 상세 정보 (527개)
│   └── DIAGRAM_NODE_RELATIONSHIPS  # 노드 간 관계
│
├── diagram-data-en-partial.js # 영문 노드 데이터 (레거시, diagram-data.js에 통합됨)
│   └── DIAGRAM_NODE_DATA_EN  # 영문 상세 정보
│
└── diagram-interactive.js   # 노드 클릭 핸들러 & 다국어 로직
```

### DIAGRAM_NODE_DATA 항목 구조
```javascript
'노드명': {
    title: '표시 제목',                    // 필수
    layer: 'Application/Framework/HAL/Kernel',  // 필수
    description: '상세 설명 (2-3문장)',    // 필수
    components: ['컴포넌트1', '컴포넌트2'], // 필수
    path: 'frameworks/av/media/',          // 선택 (AOSP 경로)
    doc: 'https://source.android.com/...'  // 선택 (공식 문서)
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

### 새 노드 추가 방법
1. `NODE_ID_MAPPING`에 Mermaid ID와 표시 이름 추가
2. `DIAGRAM_NODE_DATA`에 상세 정보 추가
3. 구문 검증: `node --check scripts/diagram-data.js`

### 커버리지 확인 스크립트
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

## 🌐 다국어 지원 (i18n)

### 개요
프로젝트는 한국어(기본)와 영어를 지원하는 다국어 정적 웹사이트입니다.

### 디렉토리 구조
```
/                    # 한국어 페이지 (루트, 41개)
├── index.html
├── aosp.html
└── ...

/en/                 # 영문 페이지 (서브디렉토리, 40개)
├── index.html
├── aosp.html
└── ...
```

### 다국어 지원 범위

| 기능 | 한국어 | 영어 | 비고 |
|------|--------|------|------|
| HTML 페이지 | 41개 | 40개 | 100% 완료 |
| 다이어그램 노드 | 527개 | 527개 | 100% 번역 |
| 검색 UI | ✅ | ✅ | 플레이스홀더 다국어 |
| 코드 복사 버튼 | ✅ | ✅ | 텍스트 다국어 |

### 언어 전환
- **lang-switch.js**: 페이지 URL을 `/` ↔ `/en/` 간 변환
- **네비게이션 토글**: 모든 페이지 헤더에 EN/KO 토글 버튼 포함
- **현재 언어 표시**: URL 기반 자동 감지 (`window.location.pathname`)
- **버튼 위치**: 다크모드 토글 버튼 옆 (우측 정렬)

### FOIT (Flash of Incorrect Theme) 방지
라이트모드에서 페이지 전환 시 다크모드가 잠시 표시되는 문제 해결:
- `theme-toggle.js`에서 페이지 로드 전 테마 적용
- `<html>` 태그에 인라인 스크립트로 초기 테마 설정

### 번역 워크플로우
```bash
# 1. 한국어 페이지 작성 (루트)
vi aosp.html

# 2. 영문 페이지 생성
python3 scripts/translate_ko_to_en.py aosp.html

# 3. 다이어그램 데이터 번역 (수동)
# scripts/diagram-data-en-partial.js 편집

# 4. 검증
open en/aosp.html
```

### 번역 스크립트
- **translate_ko_to_en.py**: HTML 페이지 한→영 번역 (AI 기반)
- **translate_diagram_data.py**: diagram-data.js 번역
- **generate_english_translation.py**: 일괄 영문 페이지 생성

### 번역 상태
- **HTML 페이지**: 100% 완료 (한국어 41개, 영문 40개)
- **다이어그램 데이터**: 100% 완료 (527/527 노드 번역)
- **검색 UI**: 100% 다국어 지원

## 🔍 검색 기능

### 개요
전체 페이지 컨텐츠를 대상으로 하는 클라이언트 사이드 검색 기능입니다.

### 구성 요소
1. **search-index.js**: 페이지 메타데이터 및 키워드 인덱스
2. **search-ui.js**: 검색 UI 컴포넌트 및 인터랙션
3. **index.html**: 헤더 검색바 임베드

### 검색 인덱스 구조
```javascript
const SEARCH_INDEX = [
    {
        id: 'aosp',
        title: 'Android AOSP Architecture',
        description: 'Android 전체 시스템 아키텍처...',
        category: 'Architecture',
        keywords: ['AOSP', 'HAL', 'Framework', ...],
        url: 'aosp.html'
    },
    // ... 35개 페이지
];
```

### 검색 알고리즘
- **제목 매칭**: 가중치 3.0
- **설명 매칭**: 가중치 2.0
- **키워드 매칭**: 가중치 1.5
- **카테고리 매칭**: 가중치 1.0
- **한영 대소문자 무시**: `toLowerCase()` 정규화

### 사용법
1. 헤더 검색바에 키워드 입력 (예: "codec", "drm")
2. 실시간 필터링 (debounce 300ms)
3. 결과 클릭 시 해당 페이지로 이동

## 🛠️ 추가 인터랙티브 기능

### 1. 코드 블록 복사 (copy-code.js)
- **기능**: 코드 블록 우측 상단에 "Copy" 버튼 표시
- **트리거**: `<pre><code>` 요소 자동 감지
- **피드백**: 클릭 시 "Copied!" 툴팁 (2초)

### 2. 목차 자동 생성 (toc-generator.js)
- **기능**: 페이지 헤딩(`<h2>`, `<h3>`)을 파싱하여 목차 생성
- **위치**: 사이드바 또는 페이지 상단
- **스크롤 스파이**: 현재 섹션 하이라이트

### 3. 페이지 네비게이션 (page-navigation.js)
- **기능**: 이전/다음 페이지 버튼 (35개 카드 순서 기반)
- **위치**: 페이지 하단
- **키보드 단축키**: `←` (이전), `→` (다음)

### 4. Mermaid 테마 커스터마이징 (mermaid-theme.js)
- **기능**: 다크/라이트 모드에 따른 Mermaid 테마 동적 변경
- **연동**: theme-toggle.js와 연동
- **커스텀 변수**: 프로젝트 컬러 팔레트 적용

### 5. 인터랙티브 다이어그램 핸들러 (diagram-interactive.js)
- **기능**: Mermaid 노드 클릭 시 상세 정보 패널 표시
- **데이터 소스**: diagram-data.js (527개 노드)
- **UI**: 오버레이 모달 + 닫기 버튼

## 💡 향후 개선 사항 (선택사항)

### 완료된 항목 ✅
- ~~검색 기능 추가~~ ✅ (완료)
- ~~인터랙티브 다이어그램 노드 데이터 완성~~ ✅ (2025-01-28 완료)
- ~~다국어 UI 지원 (검색, 버튼)~~ ✅ (2025-01-30 완료)
- ~~FOIT 수정~~ ✅ (2025-01-30 완료)
- ~~인터랙티브 다이어그램 다국어 지원~~ ✅ (527/527 노드 번역, 100% 완료)

### 진행 예정 항목
- **Card 1-20 마이그레이션**: 인라인 스타일 → design-system.css로 통합
- SEO 및 Open Graph 메타 태그 최적화
- 코드 하이라이팅 개선 (Prism.js 도입)
- **PDF 내보내기**: 개별 페이지 PDF 생성 기능
- PWA 변환: 오프라인 접근 지원
- 사이트맵 자동 생성: SEO 최적화

## 🛠️ 트러블슈팅

### 일반 이슈

**Mermaid 다이어그램 미렌더링**:
- CDN 로딩 확인: `<script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>`
- `mermaid.initialize()` 호출 확인
- 다크 테마 설정 확인 (Card 21-25)

**한글 폰트 깨짐**:
- UTF-8 인코딩 확인: `<meta charset="UTF-8">`
- Google Fonts CDN 연결 확인

**Vercel 404 에러**:
- `vercel.json`의 `cleanUrls: true` 설정 확인
- 파일명 대소문자 일치 확인

**모바일 레이아웃 깨짐**:
- `@media (max-width: 768px)` 미디어 쿼리 확인
- 최소 너비 320px 지원 확인

### 다국어 관련 이슈

**FOIT (Flash of Incorrect Theme)**:
- **증상**: 라이트모드에서 페이지 전환 시 다크모드가 잠시 표시
- **원인**: 테마 스크립트가 DOM 로드 후 실행
- **해결**: `theme-toggle.js`에서 `<html>` 태그에 인라인 스크립트로 초기 테마 설정
- **커밋**: `b078fb1`

**언어 전환 시 404**:
- `lang-switch.js`의 URL 변환 로직 확인
- `/en/` 경로에 해당 파일 존재 여부 확인
- `vercel.json`의 `trailingSlash: false` 설정 확인

**다이어그램 노드 영문 미표시**:
- `diagram-data-en-partial.js` 로딩 확인
- 해당 노드가 `DIAGRAM_NODE_DATA_EN`에 존재하는지 확인

### design-system.css 관련 이슈

**CSS 파일 로딩 실패** (Card 21-25):
- 경로 확인: `href="styles/design-system.css"` (절대 경로 아님)
- 파일 존재 여부 확인: `ls styles/design-system.css`

**CSS 변수 미적용**:
- `data-theme="dark"` 속성 확인: `<html lang="ko" data-theme="dark">`
- CSS 변수 이름 확인: `var(--color-accent)`, `var(--spacing-lg)` 등

**스타일 충돌**:
- 페이지별 커스텀 스타일이 design-system.css를 덮어쓰는지 확인
- `!important` 사용 최소화
- CSS 로딩 순서 확인: design-system.css → 페이지별 `<style>` 태그

## 📚 참고 자료

- [AOSP Media Framework](https://source.android.com/docs/core/media)
- [Android Automotive OS](https://source.android.com/docs/automotive)
- [Mermaid.js 문서](https://mermaid.js.org/)
- [Vercel 문서](https://vercel.com/docs)
