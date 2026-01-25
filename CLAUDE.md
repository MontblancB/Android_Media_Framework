# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 📋 프로젝트 개요

**Android Media Framework Visualization Project**는 Android Open Source Project(AOSP)의 미디어 프레임워크 아키텍처를 시각화하여 문서화한 정적 웹사이트 프로젝트입니다.

- **목적**: LGE Android Media Framework 학습 및 참조 자료
- **타입**: 정적 웹사이트 (Static HTML Documentation)
- **주요 대상**: Android 미디어 프레임워크 개발자, AAOS 엔지니어
- **언어**: 한국어
- **배포**: Vercel (main 브랜치 push 시 자동 배포)

## 🏗️ 프로젝트 구조

```
Android_Media_Framework/
│
├── index.html                      # 메인 랜딩 페이지 (25개 토픽 네비게이션)
├── README.md                       # 사용자용 프로젝트 설명서
├── CLAUDE.md                       # 개발자용 프로젝트 상세 문서 (이 파일)
├── vercel.json                     # Vercel 배포 설정
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
│   ├── mediasession-api.html       # MediaSession API 플로우 (구버전)
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
│   ├── dolby-codecs.html           # Dolby Atmos/AC-4/Vision 사양
│   ├── dolby-ddp-porting.html      # Dolby Digital Plus 포팅
│   └── dolby-vision-porting.html   # Dolby Vision 포팅
│
├── [06. DRM & 코덱]
│   ├── widevine.html               # Widevine DRM (L1/L2/L3)
│   ├── dolby-codecs.html           # Dolby Atmos/AC-4/Vision 사양
│   ├── dolby-ddp-porting.html      # Dolby Digital Plus 포팅
│   └── dolby-vision-porting.html   # Dolby Vision 포팅
│
├── [07. 테스팅 & 호환성]
│   ├── cts.html                    # CTS/VTS/GTS 테스트
│   └── cdd.html                    # CDD 정책 문서
│
├── [08. 레퍼런스 & 가이드]
│   ├── common-media-issues.html    # 미디어 문제 해결 가이드 (16+ 이슈)
│   ├── debugging-tools.html        # 디버깅 도구 (logcat, dumpsys, perfetto)
│   ├── api-quick-reference.html    # API 레퍼런스 (MediaPlayer, ExoPlayer, Codec)
│   ├── migration-guides.html       # 마이그레이션 가이드 (MP→ExoPlayer, ExoPlayer→Media3)
│   └── glossary.html               # Android Media 용어집 (50+ 용어, A-Z)
│
├── styles/
│   └── design-system.css           # 공통 디자인 시스템 (CSS 변수, 컴포넌트)
│
├── scripts/
│   └── theme-toggle.js             # 라이트/다크 모드 토글
│
└── [레거시 파일]
    ├── old_main_page.html          # 이전 메인 페이지 백업
    └── aosp.html.old               # AOSP 페이지 구버전
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
- **라인 수**: ~650줄
- **구조**:
  - Header: 그라디언트 배경 + 애니메이션 (`pulse` 키프레임)
  - Grid: 25개 카드 (CSS Grid, `minmax(320px, 1fr)`)
  - 카테고리 컬러 코딩: 상단 4px 보더
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

## 🎯 25개 토픽 목록

| # | 카테고리 | 페이지 | 설명 |
|---|----------|--------|------|
| 01 | 아키텍처 | aosp.html | AOSP 전체 시스템 아키텍처 |
| 02 | 아키텍처 | android-version-history.html | Android 버전별 진화 |
| 03 | 차량 | aaos.html | Android Automotive OS |
| 04 | 미디어 | media-framework-core.html | 프레임워크 코어 |
| 05 | 미디어 | codec2.html | Codec 2.0 & HAL |
| 06 | 미디어 | dolby-codecs.html | Dolby 코덱 사양 |
| 07 | 미디어 | media-playback.html | 미디어 파이프라인 |
| 08 | 미디어 | media-extractor.html | 컨테이너 파싱 |
| 09 | 미디어 | mediasession.html | MediaSession 프레임워크 |
| 10 | 미디어 | mediaprovider.html | 스토리지 접근 |
| 11 | 오디오 | audio-framework.html | Audio 프레임워크 |
| 12 | 차량 | carmedia.html | Car Media Service |
| 13 | 차량 | aaos-key-events.html | 키 이벤트 처리 |
| 14 | 차량 | aaos-last-media.html | Last Media & Autoplay |
| 15 | 차량 | power-policy-suspend.html | Power Policy |
| 16 | DRM | widevine.html | Widevine DRM |
| 17 | 차량 | gas.html | Google Automotive Services |
| 18 | 아키텍처 | carma.html | Car Ready Mobile Apps |
| 19 | 미디어 | media-app-layer.html | 앱 레이어 API |
| 20 | 테스트 | cts.html / cdd.html | CTS/VTS/GTS, CDD |
| 21 | 레퍼런스 | common-media-issues.html | 미디어 문제 해결 가이드 (16+ 이슈) |
| 22 | 레퍼런스 | debugging-tools.html | 디버깅 도구 (logcat, dumpsys, perfetto) |
| 23 | 레퍼런스 | api-quick-reference.html | API 치트시트 (MediaPlayer, ExoPlayer, Codec) |
| 24 | 레퍼런스 | migration-guides.html | 마이그레이션 가이드 (MP→ExoPlayer→Media3) |
| 25 | 레퍼런스 | glossary.html | Android Media 용어집 (50+ 용어, A-Z) |

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

- **Grid 레이아웃**: 25개 카드 (`minmax(320px, 1fr)`)
- **카테고리 컬러 코딩**: 상단 4px 보더로 구분
  - `cat-architecture`: `#3b82f6` (파란색)
  - `cat-media`: `#8b5cf6` (보라색)
  - `cat-automotive`: `#06b6d4` (청록색)
  - `cat-audio`: `#f97316` (주황색)
  - `cat-drm`: `#ec4899` (핑크색)
  - `cat-testing`: `#10b981` (초록색)
  - `cat-reference`: `#eab308` (노란색)
- **상태 표시**: `.status-ready` (녹색), `.status-preparation` (빨간색)
- **클릭 이벤트**: `onclick="location.href='...'"` 인라인 핸들러 (카드 전체 클릭 가능)

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

## 💡 향후 개선 사항 (선택사항)

- **Card 1-20 마이그레이션**: 인라인 스타일 → design-system.css로 통합
- 검색 기능 추가 (Fuse.js)
- 다크/라이트 모드 토글 확장 (Card 1-20에도 적용)
- SEO 및 Open Graph 메타 태그 최적화
- 코드 하이라이팅 개선 (Prism.js)
- 반응형 네비게이션 메뉴 추가

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
