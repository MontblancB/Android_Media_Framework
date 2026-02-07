# Android Media Framework — Technical Documentation Hub

Android Open Source Project(AOSP) 미디어 프레임워크의 아키텍처와 데이터 흐름을 시각화하여 문서화한 정적 웹사이트입니다.

## Overview

| 항목 | 수치 |
|------|------|
| 한국어 페이지 | 43개 |
| 영문 페이지 | 42개 |
| 인터랙티브 다이어그램 노드 | 527개 (한/영 100% 번역) |
| 검색 가능 항목 | 페이지 + 용어집 50+ + 트러블슈팅 16+ |

## Topics

### Architecture
- **AOSP Architecture** — Android 전체 시스템 아키텍처 (App ~ Kernel)
- **Android Version History** — 버전별 미디어 프레임워크 변화
- **Car Ready Mobile Apps (CarMa)** — 차량 호환 앱 요구사항

### Media Framework
- **Media Framework Core** — Framework-Native 상호작용
- **Media App Layer** — MediaPlayer / ExoPlayer / Media3 API
- **Codec 2.0 & Media HAL** — Codec 2.0 아키텍처
- **Media Pipeline & Data Flow** — 재생 파이프라인
- **MediaExtractor** — 컨테이너 파싱 & 디먹싱
- **MediaSession Framework** — 미디어 세션 관리
- **MediaProvider** — 스토리지 접근 & 인덱싱
- **Dolby Codecs** — Dolby Atmos / AC-4 / Vision
- **Performance Optimization** — 성능 최적화 가이드
- **Vendor Extension** — HAL Extension & Codec2 플러그인

### Audio
- **Audio Framework** — AudioFlinger / AudioPolicyService
- **Audio Codecs** — 오디오 코덱 사양

### DRM & Security
- **Widevine DRM** — L1 / L2 / L3 보안 레벨
- **Media Security** — Secure Buffer, TEE, DRM 보안

### Automotive (AAOS)
- **Android Automotive OS** — AAOS 아키텍처 개요
- **Car Media Service** — 차량 미디어 서비스
- **Key Event Handling** — CarService / Input 키 이벤트
- **Last Media & Autoplay** — 마지막 미디어 소스 복원
- **Power Policy & Suspend** — Deep Sleep & Suspend-to-RAM
- **Google Automotive Services** — GAS 컴포넌트
- **Multi-Display Entertainment** — 멀티 디스플레이
- **Multi-Zone Audio** — 오디오 존 분리 & 라우팅
- **OEM Customization** — OEM 커스터마이징 가이드
- **Vehicle HAL Media** — VHAL 미디어 연동
- **Boot Optimization** — 부팅 & 미디어 초기화 최적화
- **Car Services** — CarService 아키텍처

### Testing & Compatibility
- **CTS / VTS / GTS / CDD** — 호환성 테스트 & 정책 문서
- **Media Porting Checklist** — SoC 미디어 스택 포팅

### Reference & Dev Tools
- **Common Media Issues** — 16+ 미디어 문제 해결 가이드
- **Debugging Tools** — logcat, dumpsys, perfetto
- **Production Debugging** — 필드 이슈 원격 진단
- **API Quick Reference** — MediaPlayer, ExoPlayer, Codec API
- **Migration Guides** — MediaPlayer → ExoPlayer → Media3
- **Glossary** — Android Media 용어집 (50+ 용어)

## Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — design-system.css 기반 다크/라이트 테마
- **JavaScript** — Vanilla JS (프레임워크 없음)
- **Mermaid.js v10** — 아키텍처 다이어그램 시각화
- **Fuse.js v7** — 클라이언트 사이드 퍼지 검색
- **Fonts** — Archivo (본문), IBM Plex Mono (코드), Playfair Display (제목)
- **Deployment** — Vercel (main 브랜치 자동 배포)

## Features

- **다크/라이트 모드** — 시스템 설정 연동 + 수동 토글
- **다국어 지원** — 한국어 (기본) / 영어 (URL 기반 전환)
- **전역 검색** — Ctrl+K 또는 `/` 키로 페이지, 용어, 트러블슈팅 검색
- **인터랙티브 다이어그램** — 노드 클릭 시 상세 정보 패널 (527개 노드)
- **코드 복사** — 코드 블록 원클릭 복사
- **자동 목차** — 페이지 헤딩 기반 TOC + 스크롤 스파이
- **페이지 네비게이션** — 이전/다음 페이지 버튼 + Breadcrumb

## Local Development

```bash
# Python 내장 서버
python3 -m http.server 8001

# 브라우저에서 접속
open http://localhost:8001
```

## Deployment

```bash
# main 브랜치에 push하면 Vercel 자동 배포
git push origin main
```

## License

이 프로젝트는 LGE 내부 학습 및 참조 자료 목적으로 제작되었습니다.
