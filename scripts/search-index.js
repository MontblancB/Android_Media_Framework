/**
 * Search Index - 전역 검색을 위한 인덱스 데이터
 *
 * 검색 대상:
 * - 페이지 목록 (제목, 설명)
 * - 다이어그램 노드 (DIAGRAM_NODE_DATA)
 * - 용어집 (glossary.html)
 * - 트러블슈팅 (common-media-issues.html)
 */

const SEARCH_INDEX = {
    // 페이지 목록
    pages: [
        { id: 'aosp', title: 'Android AOSP Architecture', description: 'Android 전체 시스템 아키텍처 및 미디어 프레임워크의 위치', url: 'aosp.html', category: 'Architecture' },
        { id: 'android-version', title: 'Android Version History', description: 'Android 버전별 미디어 프레임워크 변화', url: 'android-version-history.html', category: 'Architecture' },
        { id: 'aaos', title: 'Android Automotive OS', description: 'AAOS 아키텍처 및 미디어 시스템', url: 'aaos.html', category: 'Automotive' },
        { id: 'media-framework', title: 'Media Framework Core', description: 'Framework-Native 상호작용 및 미디어 파이프라인', url: 'media-framework-core.html', category: 'Media' },
        { id: 'codec2', title: 'Codec 2.0 & Media HAL', description: 'Codec 2.0 아키텍처 및 HAL 인터페이스', url: 'codec2.html', category: 'Media' },
        { id: 'dolby-codecs', title: 'Dolby Codecs', description: 'Dolby Atmos, AC-4, Dolby Vision 사양', url: 'dolby-codecs.html', category: 'DRM' },
        { id: 'media-playback', title: 'Media Playback Pipeline', description: '미디어 재생 파이프라인 및 데이터 플로우', url: 'media-playback.html', category: 'Media' },
        { id: 'media-extractor', title: 'Media Extractor', description: '컨테이너 파싱 및 디먹싱', url: 'media-extractor.html', category: 'Media' },
        { id: 'mediasession', title: 'MediaSession Framework', description: 'MediaSession 프레임워크 및 미디어 컨트롤', url: 'mediasession.html', category: 'Media' },
        { id: 'mediaprovider', title: 'MediaProvider', description: '스토리지 접근 및 미디어 인덱싱', url: 'mediaprovider.html', category: 'Media' },
        { id: 'audio-framework', title: 'Audio Framework', description: 'AudioFlinger, AudioPolicyService 파이프라인', url: 'audio-framework.html', category: 'Audio' },
        { id: 'carmedia', title: 'Car Media Service', description: '차량용 미디어 서비스 및 소스 관리', url: 'carmedia.html', category: 'Automotive' },
        { id: 'aaos-key-events', title: 'AAOS Key Events', description: '차량 키 이벤트 처리 (CarService/Input)', url: 'aaos-key-events.html', category: 'Automotive' },
        { id: 'aaos-last-media', title: 'Last Media Source', description: 'Last Media Source 및 Autoplay', url: 'aaos-last-media.html', category: 'Automotive' },
        { id: 'power-policy', title: 'Power Policy & Suspend', description: 'Deep Sleep 및 Suspend-to-RAM', url: 'power-policy-suspend.html', category: 'Automotive' },
        { id: 'widevine', title: 'Widevine DRM', description: 'Widevine L1/L2/L3 및 DRM 파이프라인', url: 'widevine.html', category: 'DRM' },
        { id: 'gas', title: 'Google Automotive Services', description: 'GAS 컴포넌트 및 서비스', url: 'gas.html', category: 'Automotive' },
        { id: 'carma', title: 'Car Ready Mobile Apps', description: 'CarMa 호환성 및 앱 요구사항', url: 'carma.html', category: 'Architecture' },
        { id: 'media-app-layer', title: 'Media App Layer', description: 'MediaPlayer, ExoPlayer, Media3 API', url: 'media-app-layer.html', category: 'Media' },
        { id: 'cts', title: 'CTS/VTS/GTS Testing', description: 'Android 호환성 테스트', url: 'cts.html', category: 'Testing' },
        { id: 'cdd', title: 'CDD Requirements', description: 'Compatibility Definition Document', url: 'cdd.html', category: 'Testing' },
        { id: 'common-issues', title: 'Common Media Issues', description: '미디어 문제 해결 가이드 (16+ 이슈)', url: 'common-media-issues.html', category: 'Reference' },
        { id: 'debugging', title: 'Debugging Tools', description: 'logcat, dumpsys, perfetto 사용법', url: 'debugging-tools.html', category: 'Reference' },
        { id: 'api-reference', title: 'API Quick Reference', description: 'MediaPlayer, ExoPlayer, Codec API 레퍼런스', url: 'api-quick-reference.html', category: 'Reference' },
        { id: 'glossary', title: 'Glossary', description: 'Android Media 용어집 (50+ 용어)', url: 'glossary.html', category: 'Reference' }
    ],

    // 트러블슈팅 이슈
    issues: [
        { id: 'issue-buffering', title: '비디오가 계속 버퍼링됨', description: '네트워크 대역폭, 버퍼 크기, ABR 설정 문제', url: 'common-media-issues.html#issue-buffering', severity: 'high' },
        { id: 'issue-av-sync', title: '오디오-비디오 싱크 어긋남', description: 'A/V Sync, Lip Sync 문제 해결', url: 'common-media-issues.html#issue-av-sync', severity: 'critical' },
        { id: 'issue-seek-slow', title: 'Seek 동작이 느림', description: 'GOP 구조, 키프레임 간격 문제', url: 'common-media-issues.html#issue-seek-slow', severity: 'medium' },
        { id: 'issue-cold-start', title: '재생 시작이 느림', description: 'Cold Start, 초기화 지연 문제', url: 'common-media-issues.html#issue-cold-start', severity: 'medium' },
        { id: 'issue-codec-configure', title: 'MediaCodec.configure() 실패', description: '코덱 초기화 실패, 포맷 미지원', url: 'common-media-issues.html#issue-codec-configure', severity: 'critical' },
        { id: 'issue-dequeue-timeout', title: 'dequeueOutputBuffer() 타임아웃', description: '코덱 출력 버퍼 타임아웃', url: 'common-media-issues.html#issue-dequeue-timeout', severity: 'high' },
        { id: 'issue-resolution-unsupported', title: '해상도/프레임레이트 미지원', description: '하드웨어 코덱 제한', url: 'common-media-issues.html#issue-resolution-unsupported', severity: 'medium' },
        { id: 'issue-drm-license', title: 'Widevine 라이선스 획득 실패', description: 'DRM 라이선스 서버 통신 문제', url: 'common-media-issues.html#issue-drm-license', severity: 'critical' },
        { id: 'issue-hdcp', title: 'HDCP 연결 실패', description: '외부 디스플레이 HDCP 인증 문제', url: 'common-media-issues.html#issue-hdcp', severity: 'high' },
        { id: 'issue-audio-focus', title: 'Audio Focus를 얻지 못함', description: '오디오 포커스 경합 문제', url: 'common-media-issues.html#issue-audio-focus', severity: 'high' },
        { id: 'issue-audio-routing', title: '오디오가 잘못된 스피커로 출력됨', description: '차량 오디오 라우팅 문제', url: 'common-media-issues.html#issue-audio-routing', severity: 'critical' },
        { id: 'issue-audio-latency', title: '오디오 레이턴시가 너무 높음', description: '100ms 이상 오디오 지연', url: 'common-media-issues.html#issue-audio-latency', severity: 'medium' },
        { id: 'issue-ux-restrictions', title: 'UX Restrictions 위반', description: '주행 중 비디오 재생 문제', url: 'common-media-issues.html#issue-ux-restrictions', severity: 'critical' },
        { id: 'issue-car-media', title: '차량 미디어 컨트롤에서 앱이 안보임', description: 'CarMediaService 연동 문제', url: 'common-media-issues.html#issue-car-media', severity: 'high' },
        { id: 'issue-frame-drop', title: '비디오 프레임 드롭 발생', description: '디코딩/렌더링 성능 문제', url: 'common-media-issues.html#issue-frame-drop', severity: 'high' },
        { id: 'issue-oom', title: 'OutOfMemoryError 발생', description: '메모리 부족, 리소스 누수', url: 'common-media-issues.html#issue-oom', severity: 'critical' }
    ],

    // 용어집
    glossary: [
        { term: 'MediaPlayer', definition: 'Android SDK의 기본 미디어 재생 API', url: 'glossary.html#mediaplayer' },
        { term: 'ExoPlayer', definition: 'Google의 고급 미디어 재생 라이브러리 (Media3)', url: 'glossary.html#exoplayer' },
        { term: 'MediaCodec', definition: '저수준 코덱 API (인코딩/디코딩)', url: 'glossary.html#mediacodec' },
        { term: 'MediaSession', definition: '미디어 재생 세션 관리 및 컨트롤 표준화', url: 'glossary.html#mediasession' },
        { term: 'AudioFlinger', definition: 'Android 오디오 믹싱 및 출력 엔진', url: 'glossary.html#audioflinger' },
        { term: 'AudioPolicyService', definition: '오디오 라우팅 정책 관리 서비스', url: 'glossary.html#audiopolicyservice' },
        { term: 'Codec2', definition: 'Android 10+ 코덱 HAL 인터페이스', url: 'glossary.html#codec2' },
        { term: 'VHAL', definition: 'Vehicle HAL - 차량 하드웨어 추상화', url: 'glossary.html#vhal' },
        { term: 'CarAudioService', definition: '차량용 오디오 라우팅/볼륨 관리', url: 'glossary.html#caraudioservice' },
        { term: 'CarMediaService', definition: '차량용 미디어 재생 관리 서비스', url: 'glossary.html#carmediaservice' },
        { term: 'Widevine', definition: 'Google DRM 솔루션 (L1/L2/L3)', url: 'glossary.html#widevine' },
        { term: 'HDCP', definition: 'High-bandwidth Digital Content Protection', url: 'glossary.html#hdcp' },
        { term: 'TEE', definition: 'Trusted Execution Environment', url: 'glossary.html#tee' },
        { term: 'ABR', definition: 'Adaptive Bitrate Streaming', url: 'glossary.html#abr' },
        { term: 'DASH', definition: 'Dynamic Adaptive Streaming over HTTP', url: 'glossary.html#dash' },
        { term: 'HLS', definition: 'HTTP Live Streaming', url: 'glossary.html#hls' },
        { term: 'CTS', definition: 'Compatibility Test Suite', url: 'glossary.html#cts' },
        { term: 'VTS', definition: 'Vendor Test Suite', url: 'glossary.html#vts' },
        { term: 'CDD', definition: 'Compatibility Definition Document', url: 'glossary.html#cdd' },
        { term: 'HAL', definition: 'Hardware Abstraction Layer', url: 'glossary.html#hal' },
        { term: 'AIDL', definition: 'Android Interface Definition Language', url: 'glossary.html#aidl' },
        { term: 'HIDL', definition: 'HAL Interface Definition Language', url: 'glossary.html#hidl' },
        { term: 'Binder', definition: 'Android IPC 메커니즘', url: 'glossary.html#binder' },
        { term: 'SurfaceFlinger', definition: '화면 합성 서비스', url: 'glossary.html#surfaceflinger' },
        { term: 'BufferQueue', definition: '그래픽 버퍼 전달 메커니즘', url: 'glossary.html#bufferqueue' }
    ]
};

// Fuse.js 검색 옵션
const FUSE_OPTIONS = {
    includeScore: true,
    includeMatches: true,
    threshold: 0.4,
    minMatchCharLength: 2,
    keys: [
        { name: 'title', weight: 0.4 },
        { name: 'description', weight: 0.3 },
        { name: 'term', weight: 0.4 },
        { name: 'definition', weight: 0.3 },
        { name: 'category', weight: 0.1 }
    ]
};

// Export for use in search-ui.js
if (typeof window !== 'undefined') {
    window.SEARCH_INDEX = SEARCH_INDEX;
    window.FUSE_OPTIONS = FUSE_OPTIONS;
}
