# 신규 토픽 설계 문서

**작성일**: 2025-01-28
**상태**: 구현 중

## 개요

Android 미디어 프레임워크 개발자를 위한 10개 신규 토픽 추가

## 토픽 목록

### C. 실전 개발 가이드 (Dev Tools / DRM)

| # | 파일명 | 제목 | 카테고리 |
|---|--------|------|----------|
| C1 | `performance-optimization.html` | Performance Optimization Guide | Dev Tools |
| C2 | `vendor-extension.html` | Vendor Extension 개발 가이드 | Dev Tools |
| C3 | `media-porting-checklist.html` | 미디어 스택 포팅 체크리스트 | Dev Tools |
| C4 | `production-debugging.html` | 프로덕션 디버깅 심화 | Dev Tools |
| C5 | `media-security.html` | 미디어 보안 가이드 | DRM |

### D. AAOS 심화 (Automotive)

| # | 파일명 | 제목 | 카테고리 |
|---|--------|------|----------|
| D1 | `multi-display-entertainment.html` | Multi-Display Entertainment | Automotive |
| D2 | `multi-zone-audio.html` | Multi-Zone Audio 심화 | Automotive |
| D3 | `oem-customization.html` | OEM 커스터마이징 가이드 | Automotive |
| D4 | `vehicle-hal-media.html` | Vehicle HAL 미디어 연동 | Automotive |
| D5 | `aaos-boot-optimization.html` | AAOS 부팅 & 미디어 최적화 | Automotive |

---

## C1: Performance Optimization Guide

### 목표
미디어 재생 성능 최적화를 위한 실전 가이드

### 섹션 구조
1. **개요** - 성능 병목 지점 개요
2. **병목 식별** - Perfetto, Systrace 활용법
3. **코덱 최적화** - HW vs SW 선택, 해상도별 전략
4. **버퍼 관리** - Input/Output 버퍼 튜닝
5. **메모리 최적화** - ION/DMA-BUF, Zero-copy
6. **배터리 효율** - Wake Lock, Background 제한
7. **케이스 스터디** - 실전 최적화 사례

### 다이어그램
- 성능 분석 워크플로우
- 버퍼 파이프라인 시각화
- 메모리 할당 흐름

---

## C2: Vendor Extension 개발 가이드

### 목표
OEM/SoC 벤더의 미디어 스택 확장 방법

### 섹션 구조
1. **개요** - Vendor Extension 필요성
2. **HAL 확장** - HIDL/AIDL 인터페이스 확장
3. **Codec2 플러그인** - 커스텀 코덱 등록
4. **커스텀 Extractor** - 독자 포맷 지원
5. **Vendor Partition** - 파티션 구조 및 배치
6. **테스트** - VTS 통과 전략
7. **사례** - 실제 확장 예시

---

## C3: 미디어 스택 포팅 체크리스트

### 목표
새 SoC/플랫폼으로 미디어 스택 포팅 시 체크리스트

### 섹션 구조
1. **사전 준비** - 요구사항 확인
2. **코덱 통합** - HW 코덱 등록 단계
3. **DRM 포팅** - Widevine/PlayReady 인증
4. **오디오 HAL** - Audio HAL 구현
5. **테스트 전략** - CTS/VTS/GTS 통과
6. **인증** - GMS 인증 프로세스
7. **체크리스트** - 항목별 체크리스트

---

## C4: 프로덕션 디버깅 심화

### 목표
필드에서 발생하는 미디어 이슈 분석 방법

### 섹션 구조
1. **개요** - 프로덕션 환경 특수성
2. **로그 수집** - 자동화된 로그 수집
3. **Bugreport 분석** - 심층 분석 방법
4. **재현 불가 버그** - 추적 전략
5. **원격 디버깅** - 현장 지원 방법
6. **사후 분석** - 크래시 덤프 분석
7. **도구** - 유용한 스크립트/도구

---

## C5: 미디어 보안 가이드

### 목표
미디어 관련 보안 모델 및 DRM 통합

### 섹션 구조
1. **개요** - 미디어 보안 개요
2. **권한 모델** - 미디어 관련 권한
3. **Secure Buffer** - 보안 버퍼 처리
4. **TEE 연동** - TrustZone 활용
5. **DRM 레벨** - L1/L2/L3 보안 요구사항
6. **취약점 방어** - 일반적인 취약점과 대응
7. **감사 체크리스트** - 보안 감사 항목

---

## D1: Multi-Display Entertainment

### 목표
다중 디스플레이 환경의 미디어 아키텍처

### 섹션 구조
1. **개요** - 멀티 디스플레이 개념
2. **RSE 아키텍처** - 후석 엔터테인먼트
3. **디스플레이 라우팅** - 출력 대상 지정
4. **독립 세션** - 디스플레이별 MediaSession
5. **오디오 라우팅** - 디스플레이-오디오 매핑
6. **구현 가이드** - 단계별 구현
7. **테스트** - 멀티 디스플레이 테스트

---

## D2: Multi-Zone Audio 심화

### 목표
차량 내 오디오 존 설계 및 구현

### 섹션 구조
1. **개요** - Audio Zone 개념
2. **CarAudioService** - 서비스 구조
3. **Zone 설정** - car_audio_configuration.xml
4. **라우팅 정책** - 존별 라우팅 규칙
5. **볼륨 관리** - 볼륨 그룹 및 Duck
6. **존 간 공유** - 크로스존 시나리오
7. **테스트** - 검증 방법

---

## D3: OEM 커스터마이징 가이드

### 목표
차량 OEM의 미디어 시스템 커스터마이징

### 섹션 구조
1. **개요** - 커스터마이징 영역
2. **CarService 확장** - 서비스 오버레이
3. **미디어 소스** - 커스텀 소스 등록
4. **UI 커스터마이징** - 테마 및 레이아웃
5. **시스템 앱** - Privileged 앱 개발
6. **설정 오버레이** - RRO 활용
7. **인증 고려사항** - GAS 호환성

---

## D4: Vehicle HAL 미디어 연동

### 목표
차량 시스템과 미디어 프레임워크 통합

### 섹션 구조
1. **개요** - Vehicle HAL 개요
2. **CAN Bus 이벤트** - 차량 이벤트 수신
3. **미디어 제어** - 차량 상태 기반 제어
4. **스티어링 휠** - HW 버튼 매핑
5. **Cluster 연동** - 계기판 미디어 정보
6. **차량 모드** - 주행/주차 모드 처리
7. **구현 예시** - 통합 코드 예시

---

## D5: AAOS 부팅 & 미디어 최적화

### 목표
차량 환경의 부팅 및 미디어 성능 최적화

### 섹션 구조
1. **개요** - 차량 부팅 요구사항
2. **Cold Start 오디오** - 빠른 오디오 재생
3. **부팅 시간 단축** - 미디어 서비스 최적화
4. **Resume 최적화** - Suspend 복귀 최적화
5. **메모리 관리** - 제한된 환경 최적화
6. **프로파일링** - 부팅 성능 측정
7. **체크리스트** - 최적화 항목

---

## index.html 카드 배치

### Card 26-30 (C1-C5)
- 26: Performance Optimization (Dev Tools)
- 27: Vendor Extension (Dev Tools)
- 28: Media Porting Checklist (Dev Tools)
- 29: Production Debugging (Dev Tools)
- 30: Media Security (DRM)

### Card 31-35 (D1-D5)
- 31: Multi-Display Entertainment (Automotive)
- 32: Multi-Zone Audio (Automotive)
- 33: OEM Customization (Automotive)
- 34: Vehicle HAL Media (Automotive)
- 35: AAOS Boot Optimization (Automotive)

---

## 구현 순서

1. ✅ 설계 문서 작성
2. ⬜ C1: performance-optimization.html
3. ⬜ C2: vendor-extension.html
4. ⬜ C3: media-porting-checklist.html
5. ⬜ C4: production-debugging.html
6. ⬜ C5: media-security.html
7. ⬜ D1: multi-display-entertainment.html
8. ⬜ D2: multi-zone-audio.html
9. ⬜ D3: oem-customization.html
10. ⬜ D4: vehicle-hal-media.html
11. ⬜ D5: aaos-boot-optimization.html
12. ⬜ index.html 카드 추가
