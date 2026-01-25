# CLAUDE.md - Android Media Framework Visualization Project

## 📋 프로젝트 개요

**Android Media Framework Visualization Project**는 Android Open Source Project(AOSP)의 미디어 프레임워크 아키텍처를 시각화하여 문서화한 정적 웹사이트 프로젝트입니다.

- **목적**: LGE Android Media Framework 학습 및 참조 자료
- **타입**: 정적 웹사이트 (Static HTML Documentation)
- **주요 대상**: Android 미디어 프레임워크 개발자, AAOS 엔지니어
- **언어**: 한국어

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

## 🚀 개발 가이드

### 로컬 실행
```bash
# Python 내장 서버 (권장)
python3 -m http.server 8001

# 또는 Node.js live-server
npx live-server --port=8001
```

브라우저에서 `http://localhost:8001` 접속

### 파일 수정 시 주의사항
1. **CSS 일관성**: 모든 페이지가 유사한 스타일을 공유하므로 공통 CSS 변수 수정 시 전체 영향 고려
2. **Mermaid.js 버전**: CDN 버전 고정 필요 (현재 각 페이지마다 다를 수 있음)
3. **한국어 인코딩**: UTF-8 유지 (`<meta charset="UTF-8">`)
4. **반응형**: 최소 320px 너비 지원

### 새 페이지 추가 방법
1. 기존 HTML 파일을 템플릿으로 복사
2. `<title>`, `<h1>` 수정
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

## ☁️ 배포

### Vercel 배포
```bash
# 최초 배포
npx vercel

# 프로덕션 배포
npx vercel --prod
```

### vercel.json 설정
```json
{
  "cleanUrls": true,      # .html 확장자 제거
  "trailingSlash": false  # URL 끝 슬래시 제거
}
```

## 📝 Git 워크플로우

### ⚠️ 브랜치 전략 (중요)

**이 프로젝트는 단일 브랜치 전략을 사용합니다:**

- **메인 브랜치**: `main` (유일한 브랜치)
- **푸시 정책**: 모든 수정 사항은 **항상 main 브랜치에 직접 push**합니다
- **Feature 브랜치 사용 안 함**: 별도의 개발 브랜치나 feature 브랜치를 생성하지 않습니다
- **Pull Request 불필요**: 코드 수정 후 바로 main에 커밋하고 push합니다

> 💡 **참고**: 이 프로젝트는 정적 웹사이트 문서화 프로젝트로, 단독 작업 환경에서 운영됩니다. 따라서 복잡한 Git 브랜치 전략 대신 단순하고 직관적인 main 브랜치 직접 push 방식을 채택했습니다.

### 현재 상태
- **브랜치**: `main`
- **최근 커밋**: `954ba0a` - "Initial commit: Android Media Framework visualization project"
- **Untracked 파일**: `.DS_Store`, `.gitignore`

### 추천 Git 명령어
```bash
# Untracked 파일 추가
git add .gitignore

# .DS_Store 제외 (.gitignore에 추가)
echo ".DS_Store" >> .gitignore
echo ".vercel" >> .gitignore

# 커밋
git commit -m "Add .gitignore for macOS and Vercel files"

# 원격 저장소에 푸시
git push origin main
```

### 코드 수정 후 커밋 및 푸시 프로세스

**⚠️ 중요 원칙: 모든 수정 사항은 main 브랜치에 직접 커밋하고 push합니다.**

코드 수정 및 개선 작업이 완료되면 다음 프로세스를 따라 변경사항을 커밋하고 **반드시 main 브랜치에** 푸시합니다.
별도의 feature 브랜치를 생성하거나 Pull Request를 만들 필요가 없습니다.

#### 1️⃣ 변경사항 확인
```bash
# 현재 작업 디렉토리 상태 확인
git status

# 변경된 파일의 상세 내용 확인
git diff

# 스테이징된 파일 확인 (add 후)
git diff --staged
```

#### 2️⃣ 파일 스테이징
```bash
# 특정 파일만 스테이징 (권장)
git add index.html
git add codec2.html
git add CLAUDE.md

# 특정 디렉토리 내 모든 변경사항 스테이징
git add *.html

# 모든 변경사항 스테이징 (주의: 불필요한 파일 포함 가능)
git add .

# 일부 변경사항만 선택적으로 스테이징 (인터랙티브 모드)
git add -p
```

#### 3️⃣ 커밋 메시지 작성

**커밋 메시지 컨벤션**:
- **명확하고 간결하게**: 무엇을 왜 변경했는지 명시
- **한글 사용**: 프로젝트 언어에 맞춰 한글로 작성
- **타입 접두사 사용** (선택사항):
  - `feat:` - 새로운 기능 추가
  - `fix:` - 버그 수정
  - `docs:` - 문서 수정
  - `style:` - 코드 스타일 변경 (CSS, 포맷팅)
  - `refactor:` - 코드 리팩토링
  - `perf:` - 성능 개선
  - `test:` - 테스트 추가/수정
  - `chore:` - 빌드, 설정 파일 수정

**커밋 명령어**:
```bash
# 단일 라인 커밋 메시지
git commit -m "feat: 검색 기능 추가 - Fuse.js 기반 실시간 검색"

# 멀티라인 커밋 메시지 (상세 설명 포함)
git commit -m "fix: Mermaid 다이어그램 렌더링 오류 수정" \
           -m "- CDN 버전을 10.6.1로 고정" \
           -m "- 초기화 코드에 theme 설정 추가" \
           -m "- 모바일 환경에서 다이어그램 잘림 현상 해결"

# 에디터로 커밋 메시지 작성 (긴 설명 필요 시)
git commit
```

#### 4️⃣ 커밋 예시

**기능 추가**:
```bash
git add index.html search.js
git commit -m "feat: 메인 페이지에 검색 기능 구현

- Fuse.js 라이브러리를 활용한 퍼지 검색 적용
- 토픽 제목, 설명, 카테고리 기반 실시간 필터링
- 검색 결과 하이라이트 표시
- 모바일 반응형 디자인 적용"
```

**버그 수정**:
```bash
git add codec2.html audio-framework.html
git commit -m "fix: 모바일 환경에서 Mermaid 다이어그램 잘림 현상 수정

- SVG viewBox 속성 추가로 반응형 처리
- 최소 너비 제약 조건 완화 (320px → 280px)
- 가로 스크롤 대신 다이어그램 축소 표시"
```

**스타일 개선**:
```bash
git add styles.css index.html
git commit -m "style: 공통 CSS 파일 분리 및 다크 테마 개선

- styles.css 파일 생성으로 CSS 중복 제거
- CSS 변수명 통일 및 일관성 개선
- 카드 호버 효과 애니메이션 부드럽게 조정
- 컬러 팔레트 명도 조정으로 가독성 향상"
```

**문서 업데이트**:
```bash
git add README.md CLAUDE.md
git commit -m "docs: 개발 가이드 및 커밋 프로세스 문서화

- CLAUDE.md에 Git 워크플로우 상세 가이드 추가
- README.md에 로컬 개발 환경 설정 섹션 보강
- 트러블슈팅 FAQ 5개 항목 추가"
```

**리팩토링**:
```bash
git add *.html
git commit -m "refactor: Mermaid.js CDN 버전 통일 및 초기화 코드 표준화

- 모든 HTML 파일의 Mermaid 버전을 10.6.1로 통일
- 초기화 설정 객체 공통화 (theme, fontFamily 등)
- 불필요한 인라인 스타일 제거"
```

#### 5️⃣ main 브랜치에 푸시 (필수)

**⚠️ 중요: 모든 수정 사항은 반드시 main 브랜치에 push합니다.**

```bash
# 원격 저장소 확인
git remote -v

# main 브랜치에 푸시 (항상 이 명령어 사용)
git push origin main

# 강제 푸시 (비상 상황에서만 사용)
# git push origin main --force
```

**push 완료 후 자동 배포:**
- Vercel은 main 브랜치의 push를 감지하여 자동으로 프로덕션 배포를 시작합니다
- 배포 상태는 Vercel 대시보드에서 확인할 수 있습니다
- 배포 완료까지 약 30초~1분 소요됩니다

#### 6️⃣ 푸시 후 확인

```bash
# 원격 저장소와 로컬 저장소 동기화 상태 확인
git status

# 최근 커밋 히스토리 확인
git log --oneline -5

# 그래프 형태로 브랜치 확인
git log --graph --oneline --all -10
```

#### 7️⃣ 문제 발생 시 대처

**커밋 메시지 수정 (푸시 전)**:
```bash
# 가장 최근 커밋 메시지 수정
git commit --amend -m "새로운 커밋 메시지"

# 에디터로 수정
git commit --amend
```

**잘못된 파일 스테이징 취소**:
```bash
# 특정 파일 스테이징 취소
git reset HEAD index.html

# 모든 스테이징 취소
git reset HEAD
```

**로컬 변경사항 되돌리기**:
```bash
# 특정 파일의 변경사항 취소 (주의: 복구 불가)
git checkout -- index.html

# 모든 변경사항 취소 (주의: 복구 불가)
git reset --hard HEAD
```

**푸시 후 커밋 되돌리기** (협업 시 주의):
```bash
# 이전 커밋으로 되돌리기 (새 커밋 생성)
git revert HEAD

# 특정 커밋으로 되돌리기
git revert <commit-hash>
```

#### 💡 Best Practices

1. **항상 main 브랜치에 push**: 이 프로젝트는 단일 브랜치 전략을 사용하므로, 모든 수정 사항은 main 브랜치에 직접 push합니다
2. **작은 단위로 자주 커밋**: 한 번에 여러 기능을 수정하지 말고, 논리적 단위로 분리
3. **의미 있는 커밋 메시지**: "수정", "업데이트" 같은 모호한 메시지 지양
4. **푸시 전 검토**: `git diff`, `git status`로 변경사항 확인
5. **테스트 후 커밋**: 로컬에서 정상 동작 확인 후 커밋 (브라우저에서 페이지 렌더링 확인)
6. **커밋 후 즉시 push**: 커밋을 완료하면 바로 `git push origin main`으로 원격 저장소에 반영
7. **민감 정보 제외**: API 키, 비밀번호 등은 절대 커밋하지 않음 (.gitignore 활용)

## 🔍 코드 품질 분석

### 강점
✅ 일관된 디자인 시스템 (CSS 변수 사용)
✅ 깨끗한 HTML5 시맨틱 구조
✅ 반응형 디자인 (모바일 대응)
✅ 접근성 고려 (한국어 lang 속성)
✅ 최적화된 폰트 로딩 (preconnect)

### 개선 영역
⚠️ **CSS 중복**: 각 HTML 파일에 인라인 스타일 (공통 CSS 파일 분리 필요)
⚠️ **JavaScript 부재**: 검색 기능, 필터링 등 인터랙션 부족
⚠️ **SEO**: 메타 태그, Open Graph 최적화 필요
⚠️ **이미지**: 현재 CSS 기반, 실제 스크린샷 추가 고려
⚠️ **다국어**: 영어 버전 지원 시 i18n 구조 필요

## 💡 향후 개선 사항

### 단기 (1-2주)
- [ ] 공통 `styles.css` 파일 분리
- [ ] `.gitignore` 파일 정리 및 추가
- [ ] 검색 기능 추가 (Fuse.js 활용)
- [ ] 다크/라이트 모드 토글

### 중기 (1개월)
- [ ] PDF 내보내기 기능 (각 페이지)
- [ ] 인터랙티브 다이어그램 (클릭 시 확대)
- [ ] 코드 하이라이팅 개선 (Prism.js)
- [ ] 모바일 네비게이션 개선

### 장기 (3개월+)
- [ ] SSG 프레임워크 전환 (Astro, Eleventy)
- [ ] 영어 버전 추가
- [ ] 사용자 피드백 시스템
- [ ] 버전 관리 (문서 업데이트 이력)

## 🛠️ 트러블슈팅

### 자주 발생하는 문제

**Q: Mermaid 다이어그램이 렌더링되지 않음**
A: CDN 로딩 확인, `mermaid.initialize()` 호출 확인

**Q: 한글 폰트가 깨짐**
A: UTF-8 인코딩 확인, Google Fonts CDN 연결 확인

**Q: Vercel 배포 후 404 에러**
A: `vercel.json`의 `cleanUrls` 설정 확인

**Q: 모바일에서 레이아웃 깨짐**
A: `@media (max-width: 768px)` 미디어 쿼리 확인

## 📚 참고 자료

### Android 공식 문서
- [AOSP Media Framework](https://source.android.com/docs/core/media)
- [Android Automotive OS](https://source.android.com/docs/automotive)
- [Codec 2.0](https://source.android.com/docs/core/media/codec2)

### 개발 도구
- [Mermaid.js 공식 문서](https://mermaid.js.org/)
- [Vercel 문서](https://vercel.com/docs)
- [CSS Grid 가이드](https://css-tricks.com/snippets/css/complete-guide-grid/)

## 👥 프로젝트 정보

- **조직**: LGE (LG전자)
- **부서**: 98_LGE/02_Android_Media_Framework
- **작성자**: se-hyunbaek
- **생성일**: 2024년 11월 27일
- **최종 수정**: 2024년 12월 4일
- **생성 도구**: Google Deepmind Antigravity

---

**Note**: 이 문서는 AI 어시스턴트(Claude)가 프로젝트를 빠르게 이해하고 작업할 수 있도록 작성된 개발자 참조 문서입니다.
