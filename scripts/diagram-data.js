/**
 * Diagram Node Data - 다이어그램 노드별 상세 정보
 * 인터렉티브 다이어그램에서 클릭/호버 시 표시할 정보를 정의합니다.
 */

const DIAGRAM_NODE_DATA = {
    // ========================================
    // AOSP 레이어별 노드
    // ========================================

    'System Apps': {
        title: 'System Apps',
        layer: 'Application Layer',
        description: 'Android 시스템에 기본 탑재된 애플리케이션들입니다. Phone, Contacts, Settings, Email, Camera 등이 포함됩니다.',
        components: [
            'Phone (통화 앱)',
            'Contacts (연락처)',
            'Settings (설정)',
            'Email (이메일)',
            'Camera (카메라)',
            'Browser (브라우저)'
        ],
        path: 'packages/apps/',
        doc: 'https://source.android.com/docs/core/architecture',
        relatedSections: ['section-1', 'section-2']
    },

    'View System': {
        title: 'View System',
        layer: 'Framework Layer',
        description: 'Android UI 렌더링의 핵심 시스템입니다. View, ViewGroup, Window를 관리합니다.',
        components: [
            'View - UI 컴포넌트 기본 클래스',
            'ViewGroup - 레이아웃 컨테이너',
            'WindowManager - 창 관리',
            'Canvas/Paint - 그리기 API'
        ],
        path: 'frameworks/base/core/java/android/view/',
        doc: 'https://developer.android.com/reference/android/view/View',
        codeExample: `
// View 생성 및 렌더링
class MyView(context: Context) : View(context) {
    override fun onDraw(canvas: Canvas) {
        super.onDraw(canvas)
        canvas.drawText("Hello", 50f, 50f, paint)
    }
}
        `.trim()
    },

    'Activity Manager': {
        title: 'Activity Manager',
        layer: 'Framework Layer',
        description: '액티비티 생명주기, 백스택, 태스크를 관리하는 핵심 시스템 서비스입니다.',
        components: [
            'ActivityManagerService (AMS)',
            'Activity Stack 관리',
            'Task 관리',
            'Process 생명주기'
        ],
        path: 'frameworks/base/services/core/java/com/android/server/am/',
        doc: 'https://developer.android.com/guide/components/activities',
        codeExample: `
// Activity 시작
val intent = Intent(this, DetailActivity::class.java)
startActivity(intent)
        `.trim()
    },

    // ========================================
    // 미디어 프레임워크 노드
    // ========================================

    'MediaPlayer': {
        title: 'MediaPlayer',
        layer: 'Framework API',
        description: 'Android SDK의 기본 미디어 재생 API입니다. 오디오, 비디오 파일을 재생할 수 있습니다.',
        components: [
            'setDataSource() - 미디어 소스 설정',
            'prepare() - 재생 준비',
            'start() / pause() / stop()',
            'seekTo() - 탐색',
            'release() - 리소스 해제'
        ],
        path: 'frameworks/base/media/java/android/media/MediaPlayer.java',
        doc: 'https://developer.android.com/reference/android/media/MediaPlayer',
        codeExample: `
val mediaPlayer = MediaPlayer().apply {
    setDataSource("https://example.com/music.mp3")
    prepare()
    start()
}
        `.trim()
    },

    'ExoPlayer': {
        title: 'ExoPlayer (Media3)',
        layer: 'Framework API',
        description: 'Google의 고급 미디어 재생 라이브러리입니다. DASH, HLS 등 어댑티브 스트리밍을 지원합니다.',
        components: [
            'Player - 재생 컨트롤',
            'MediaSource - 미디어 소스 추상화',
            'Renderer - 렌더링 파이프라인',
            'TrackSelector - 트랙 선택'
        ],
        path: 'androidx.media3',
        doc: 'https://developer.android.com/guide/topics/media/media3/exoplayer',
        codeExample: `
val player = ExoPlayer.Builder(context).build()
val mediaItem = MediaItem.fromUri(videoUri)
player.setMediaItem(mediaItem)
player.prepare()
player.play()
        `.trim()
    },

    'MediaCodec': {
        title: 'MediaCodec',
        layer: 'Framework API',
        description: '하드웨어/소프트웨어 코덱에 대한 저수준 API입니다. 인코딩/디코딩을 직접 제어할 수 있습니다.',
        components: [
            'configure() - 코덱 설정',
            'dequeueInputBuffer() - 입력 버퍼',
            'queueInputBuffer() - 데이터 전송',
            'dequeueOutputBuffer() - 디코딩 결과'
        ],
        path: 'frameworks/base/media/java/android/media/MediaCodec.java',
        doc: 'https://developer.android.com/reference/android/media/MediaCodec',
        codeExample: `
val codec = MediaCodec.createDecoderByType("video/avc")
codec.configure(format, surface, null, 0)
codec.start()
        `.trim()
    },

    'MediaCodecService': {
        title: 'MediaCodecService',
        layer: 'Native Layer',
        description: 'MediaCodec의 Native 구현체입니다. Codec 2.0 HAL과 통신합니다.',
        components: [
            'IMediaCodecService',
            'MediaCodec 인스턴스 관리',
            'Codec 2.0 HAL 인터페이스',
            'Buffer 관리'
        ],
        path: 'frameworks/av/media/libmediaplayerservice/',
        doc: 'https://source.android.com/docs/core/media/codec',
        relatedSections: ['section-4']
    },

    'AudioFlinger': {
        title: 'AudioFlinger',
        layer: 'Native Layer',
        description: 'Android의 오디오 믹싱 및 출력 엔진입니다. 모든 오디오 스트림을 믹싱하여 HAL로 전달합니다.',
        components: [
            'AudioMixer - 다중 스트림 믹싱',
            'PlaybackThread - 재생 스레드',
            'AudioTrack 관리',
            'Audio Policy 적용'
        ],
        path: 'frameworks/av/services/audioflinger/',
        doc: 'https://source.android.com/docs/core/audio/audioflinger',
        codeExample: `
// AudioTrack으로 PCM 데이터 재생
val audioTrack = AudioTrack(...)
audioTrack.write(pcmData, 0, pcmData.size)
audioTrack.play()
        `.trim()
    },

    'Camera HAL': {
        title: 'Camera HAL',
        layer: 'HAL Layer',
        description: '카메라 하드웨어 추상화 계층입니다. 카메라 센서와 Framework를 연결합니다.',
        components: [
            'Camera3Device',
            'Capture Request/Result',
            'Stream Configuration',
            'Metadata 처리'
        ],
        path: 'hardware/interfaces/camera/',
        doc: 'https://source.android.com/docs/core/camera/camera3',
        relatedSections: ['section-3']
    },

    'Audio HAL': {
        title: 'Audio HAL',
        layer: 'HAL Layer',
        description: '오디오 하드웨어 추상화 계층입니다. 오디오 드라이버와 AudioFlinger를 연결합니다.',
        components: [
            'IDevice - 오디오 장치 인터페이스',
            'IStream - 오디오 스트림',
            'StreamOut/StreamIn',
            'Audio Effects HAL'
        ],
        path: 'hardware/interfaces/audio/',
        doc: 'https://source.android.com/docs/core/audio/implement',
        relatedSections: ['section-4']
    },

    'Linux Kernel': {
        title: 'Linux Kernel',
        layer: 'Kernel Layer',
        description: 'Android의 기반이 되는 Linux 커널입니다. 디바이스 드라이버, 메모리 관리, 프로세스 스케줄링을 담당합니다.',
        components: [
            'Process Scheduler',
            'Memory Management (Low Memory Killer)',
            'Binder Driver',
            'Device Drivers (Display, Audio, Camera)',
            'Power Management'
        ],
        path: 'kernel/',
        doc: 'https://source.android.com/docs/core/architecture/kernel',
        codeExample: `
# Kernel 로그 확인
adb shell dmesg

# Binder 통계
adb shell cat /proc/binder/stats
        `.trim()
    },

    // ========================================
    // Binder IPC
    // ========================================

    'Binder Driver': {
        title: 'Binder Driver',
        layer: 'Kernel',
        description: 'Android의 프로세스 간 통신(IPC) 메커니즘입니다. /dev/binder 디바이스로 구현됩니다.',
        components: [
            'Transaction 관리',
            'Reference Counting',
            'Death Notification',
            'Memory Mapping (mmap)'
        ],
        path: 'kernel/drivers/android/binder.c',
        doc: 'https://source.android.com/docs/core/architecture/hidl/binder-ipc',
        codeExample: `
# Binder 정보 확인
adb shell cat /sys/kernel/debug/binder/stats
adb shell dumpsys activity services
        `.trim()
    },

    'Service Manager': {
        title: 'Service Manager',
        layer: 'Native',
        description: 'Binder 서비스 레지스트리입니다. 모든 시스템 서비스가 등록되는 중앙 디렉토리입니다.',
        components: [
            'Service 등록/조회',
            'Service 생명주기 관리',
            'Context Manager'
        ],
        path: 'frameworks/native/cmds/servicemanager/',
        doc: 'https://source.android.com/docs/core/architecture/aidl/service-manager',
        codeExample: `
# 등록된 서비스 목록 확인
adb shell service list

# 특정 서비스 정보
adb shell dumpsys media.player
        `.trim()
    },

    // ========================================
    // SurfaceFlinger & Graphics
    // ========================================

    'SurfaceFlinger': {
        title: 'SurfaceFlinger',
        layer: 'Native',
        description: '화면에 표시되는 모든 Surface를 합성하는 Compositor입니다.',
        components: [
            'Layer 관리',
            'BufferQueue 소비',
            'Vsync 동기화',
            'Hardware Composer (HWC) 연동'
        ],
        path: 'frameworks/native/services/surfaceflinger/',
        doc: 'https://source.android.com/docs/core/graphics/surfaceflinger-windowmanager',
        codeExample: `
# SurfaceFlinger 정보 확인
adb shell dumpsys SurfaceFlinger

# Layer 정보
adb shell dumpsys SurfaceFlinger --list
        `.trim()
    },

    'BufferQueue': {
        title: 'BufferQueue',
        layer: 'Native',
        description: 'Producer-Consumer 패턴의 버퍼 큐입니다. Triple Buffering을 지원합니다.',
        components: [
            'BufferQueueProducer - 버퍼 생성',
            'BufferQueueConsumer - 버퍼 소비',
            'Triple Buffering',
            'Fence 동기화'
        ],
        path: 'frameworks/native/libs/gui/',
        doc: 'https://source.android.com/docs/core/graphics/arch-bq-gralloc'
    },

    // ========================================
    // 기타 시스템 컴포넌트
    // ========================================

    'Zygote': {
        title: 'Zygote',
        layer: 'Runtime',
        description: '모든 Android 앱 프로세스의 부모 프로세스입니다. 사전 로드된 클래스와 리소스를 fork하여 앱을 빠르게 시작합니다.',
        components: [
            'Preload Classes/Resources',
            'Fork App Process',
            'JNI 라이브러리 로드',
            'SELinux Context 설정'
        ],
        path: 'frameworks/base/core/java/com/android/internal/os/ZygoteInit.java',
        doc: 'https://source.android.com/docs/core/runtime/zygote',
        codeExample: `
# Zygote 프로세스 확인
adb shell ps | grep zygote

# 64bit/32bit Zygote
zygote64
zygote
        `.trim()
    },

    'System Server': {
        title: 'System Server',
        layer: 'Framework',
        description: 'Android의 핵심 시스템 서비스들을 호스팅하는 프로세스입니다. 60개 이상의 서비스가 실행됩니다.',
        components: [
            'ActivityManagerService',
            'PackageManagerService',
            'WindowManagerService',
            'PowerManagerService',
            'MediaSessionService',
            '기타 60+ 서비스'
        ],
        path: 'frameworks/base/services/java/com/android/server/SystemServer.java',
        doc: 'https://source.android.com/docs/core/architecture',
        codeExample: `
# System Server 정보
adb shell ps | grep system_server

# 서비스 목록
adb shell service list
        `.trim()
    }
};

// 노드 간 관계 정의 (Phase 4에서 사용)
const DIAGRAM_NODE_RELATIONSHIPS = {
    'MediaPlayer': {
        downstream: ['MediaCodec', 'MediaCodecService', 'AudioFlinger'],
        upstream: ['System Apps']
    },
    'MediaCodec': {
        downstream: ['MediaCodecService', 'Codec 2.0 HAL'],
        upstream: ['MediaPlayer', 'ExoPlayer']
    },
    'AudioFlinger': {
        downstream: ['Audio HAL', 'Linux Kernel'],
        upstream: ['MediaPlayer', 'AudioTrack']
    }
    // ... 추가 관계 정의
};
