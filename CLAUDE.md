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
├── index.html                      # 메인 랜딩 페이지 (20개 토픽 네비게이션)
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
├── [06. 테스팅 & 호환성]
│   ├── cts.html                    # CTS/VTS/GTS 테스트
│   └── cdd.html                    # CDD 정책 문서
│
└── [레거시 파일]
    ├── old_main_page.html          # 이전 메인 페이지 백업
    ├── aosp.html.backup            # AOSP 페이지 백업
    └── aosp.html.old               # AOSP 페이지 구버전
```

## 🎨 기술 스택

### Frontend
- **HTML5**: 시맨틱 마크업
- **CSS3**: 모던 다크 테마, CSS Grid, Flexbox
- **JavaScript**: Vanilla JS (최소한의 인터랙션)
- **Mermaid.js**: 다이어그램 시각화 라이브러리

### Fonts & Design
- **Google Fonts**: Noto Sans KR (본문), JetBrains Mono (코드/숫자)
- **컬러 팔레트**:
  - Primary Background: `#0a0e1a`
  - Card Background: `#1a1f35`
  - Accent Blue: `#3b82f6`
  - Gradient: Blue → Purple → Pink

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
- **라인 수**: 578줄
- **구조**:
  - Header: 그라디언트 배경 + 애니메이션 (`pulse` 키프레임)
  - Grid: 20개 카드 (CSS Grid, `minmax(320px, 1fr)`)
  - 카테고리 컬러 코딩: 상단 4px 보더
- **인터랙션**: 클릭 시 해당 HTML 페이지로 이동
- **상태 표시**:
  - Ready: 녹색 점 (`.status-ready`)
  - Preparation: 빨간색 점 (`.status-preparation`)

### 컨텐츠 페이지 (예: aosp.html, codec2.html 등)
각 페이지는 다음 구조를 따릅니다:
1. **Header**: 페이지 제목 및 설명
2. **Mermaid Diagrams**: 아키텍처 시각화
3. **설명 섹션**: 레이어별/컴포넌트별 상세 설명
4. **코드 예시**: 관련 API 사용법 (해당 시)
5. **참조 링크**: AOSP 소스코드 링크 등

## 🎯 20개 토픽 목록

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

모든 컨텐츠 페이지(aosp.html, codec2.html 등)는 다음 패턴을 따릅니다:

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
        <section class="code-examples">
            <!-- API 사용 예시 (해당 시) -->
        </section>
    </main>
    <script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>
    <script>mermaid.initialize({...});</script>
</body>
</html>
```

### 주요 설계 원칙

1. **CSS 인라인 스타일**: 각 HTML 파일에 `<style>` 태그로 스타일 포함 (공통 CSS 파일 없음)
2. **CSS 변수 사용**: 컬러 팔레트 및 스타일 일관성 유지
3. **Mermaid.js**: 모든 아키텍처 다이어그램 시각화
4. **반응형 디자인**: 최소 320px 너비 지원, CSS Grid/Flexbox 활용
5. **최소한의 JavaScript**: Vanilla JS만 사용 (외부 프레임워크 없음)

### index.html 특이사항

- **Grid 레이아웃**: 20개 카드 (`minmax(320px, 1fr)`)
- **카테고리 컬러 코딩**: 상단 4px 보더로 구분
- **상태 표시**: `.status-ready` (녹색), `.status-preparation` (빨간색)
- **클릭 이벤트**: `onclick="location.href='...'"` 인라인 핸들러

## 📝 새 페이지 추가 방법

1. 기존 HTML 파일을 템플릿으로 복사
2. `<title>`, `<h1>`, 메타 설명 수정
3. Mermaid 다이어그램 작성
4. `index.html`에 카드 추가:
   ```html
   <div class="card active cat-XXX" onclick="location.href='new-page.html'">
       <div class="card-number">21 <span class="card-status status-ready">Ready</span></div>
       <h3 class="card-title">새 토픽 제목</h3>
       <p class="card-desc">설명</p>
       <a href="new-page.html" class="card-link">Explore →</a>
   </div>
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

## 💡 향후 개선 사항 (선택사항)

- 공통 `styles.css` 파일 분리로 CSS 중복 제거
- 검색 기능 추가 (Fuse.js)
- 다크/라이트 모드 토글
- SEO 및 Open Graph 메타 태그 최적화
- 코드 하이라이팅 개선 (Prism.js)

## 🛠️ 트러블슈팅

**Mermaid 다이어그램 미렌더링**: CDN 로딩 및 `mermaid.initialize()` 호출 확인
**한글 폰트 깨짐**: UTF-8 인코딩 및 Google Fonts CDN 연결 확인
**Vercel 404 에러**: `vercel.json`의 `cleanUrls: true` 설정 확인
**모바일 레이아웃 깨짐**: `@media (max-width: 768px)` 미디어 쿼리 확인

## 📚 참고 자료

- [AOSP Media Framework](https://source.android.com/docs/core/media)
- [Android Automotive OS](https://source.android.com/docs/automotive)
- [Mermaid.js 문서](https://mermaid.js.org/)
- [Vercel 문서](https://vercel.com/docs)
