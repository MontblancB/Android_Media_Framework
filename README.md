# AOSP Media Framework Visualization Project

Android Open Source Project (AOSP) 미디어 프레임워크의 복잡한 아키텍처와 데이터 흐름을 이해하기 쉽게 시각화한 웹 프로젝트입니다.

## 🚀 배포된 페이지

이 프로젝트는 다음 6개의 상세 시각화 페이지로 구성되어 있습니다:

1.  **[AOSP Media Framework (Main)](index.html)**
    *   Android 미디어 프레임워크의 전체적인 구조와 데이터 흐름 시각화
    *   Application, Framework, Native, HAL, Kernel 레이어 분석
    *   Codec2 및 OMX 아키텍처 비교

2.  **[Android AOSP Architecture](aosp.html)**
    *   AOSP 전체 시스템 아키텍처 (App ~ Kernel)
    *   Automotive AOSP (AAOS)와의 차이점 및 차량용 HAL 구조

3.  **[MediaSession Framework](mediasession.html)**
    *   미디어 재생 제어의 핵심인 MediaSession 구조 시각화
    *   Client-Server 아키텍처 및 Notification/Auto/Wear 통합

4.  **[MediaSession API Flows](mediasession-api.html)**
    *   Audio Focus, Volume Control, Media Button 등 주요 API 케이스별 상세 플로우
    *   개발자를 위한 시퀀스 다이어그램 및 에러 처리 로직

5.  **[Widevine DRM Architecture](widevine.html)**
    *   Google Widevine DRM 보안 레벨 (L1/L2/L3) 및 아키텍처
    *   라이선스 획득 및 암호화 해독 과정 시각화

6.  **[Google Automotive Services (GAS)](gas.html)**
    *   Android Automotive OS 기반의 Google 서비스 생태계 (Maps, Assistant, Play)
    *   OEM 통합 프로세스 및 아키텍처

## 🛠 기술 스택

*   **Core**: HTML5, CSS3 (Modern Dark Theme), Vanilla JavaScript
*   **Visualization**: [Mermaid.js](https://mermaid.js.org/) (Diagrams & Charts)
*   **Fonts**: Google Fonts (Noto Sans KR, JetBrains Mono)
*   **Icons**: CSS-based & Unicode Icons

## 📦 로컬 실행 방법

이 프로젝트는 정적 웹사이트이므로 별도의 빌드 과정이 필요 없습니다.

```bash
# Python 내장 서버 실행 (포트 8001)
python3 -m http.server 8001
```

브라우저에서 `http://localhost:8001`로 접속하세요.

## ☁️ 배포 방법 (Vercel)

Vercel을 사용하여 무료로 쉽게 배포할 수 있습니다.

1.  Node.js가 설치되어 있는지 확인합니다.
2.  프로젝트 루트에서 다음 명령어를 실행합니다:

```bash
npx vercel
```

3.  프롬프트에 따라 설정을 완료하면 배포 URL이 생성됩니다.

---
Created by Antigravity (Google Deepmind)
