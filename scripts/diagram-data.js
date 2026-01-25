/**
 * Diagram Node Data - 다이어그램 노드별 상세 정보
 * 인터렉티브 다이어그램에서 클릭/호버 시 표시할 정보를 정의합니다.
 */

// Mermaid 노드 ID → 사람이 읽을 수 있는 이름 매핑
const NODE_ID_MAPPING = {
    // aosp.html - AOSP 아키텍처
    'APP': 'System Apps',
    'FW': 'Framework',
    'SERVICES': 'System Server',
    'ART': 'Android Runtime',
    'NATIVE': 'Native Libraries',
    'HAL': 'Hardware Abstraction Layer',
    'KERNEL': 'Linux Kernel',

    // aosp.html - 미디어 프레임워크
    'MEDIA_API': 'Media APIs',
    'MEDIA_SESSION': 'MediaSession',
    'MEDIA_ROUTER': 'MediaRouter',
    'STAGEFRIGHT': 'Media Framework',
    'CODEC_SERVICE': 'MediaCodecService',
    'AUDIO_FLINGER': 'AudioFlinger',
    'CAMERA_SERVICE': 'CameraService',
    'CODEC_HAL': 'Codec HAL',
    'AUDIO_HAL': 'Audio HAL',
    'CAMERA_HAL': 'Camera HAL',
    'SURFACE_FLINGER': 'SurfaceFlinger',

    // 그래픽 스택
    'APP_VIEW': 'View System',
    'SURFACE': 'Surface',
    'BUFFER_QUEUE': 'BufferQueue',
    'HWC': 'Hardware Composer',
    'DISPLAY': 'Display Driver',

    // 부팅 프로세스
    'BOOTROM': 'Boot ROM',
    'BOOTLOADER': 'Bootloader',
    'INIT': 'Init Process',
    'DAEMONS': 'Native Daemons',
    'ZYGOTE': 'Zygote',
    'SYSSERVER': 'System Server',
    'LAUNCHER': 'Launcher',

    // Binder IPC
    'BINDER': 'Binder Driver',
    'SERVICE_MGR': 'Service Manager',
    'PROXY': 'Binder Proxy',
    'STUB': 'Binder Stub',
    'SERVICE': 'System Service',

    // Project Treble
    'FRAMEWORK': 'Android Framework',
    'VNDK': 'Vendor NDK',
    'VENDOR_IMPL': 'Vendor Implementation',
    'VENDOR_LIBS': 'Vendor Libraries',
    'HIDL': 'HIDL Interface',
    'STABLE_AIDL': 'Stable AIDL',

    // Codec2 (codec2.html)
    'MEDIA_APP': 'Media App',
    'MEDIACODEC': 'MediaCodec',
    'CCODEC': 'CCodec',
    'BUFFER_CH': 'CCodecBufferChannel',
    'C2_CLIENT': 'Codec2Client',
    'LISTENER': 'ClientListener',
    'HIDL_AIDL': 'HIDL/AIDL IPC',
    'COMP_STORE': 'C2ComponentStore',
    'C2_COMP': 'C2Component',
    'C2_INTF': 'C2Component Interface',
    'C2_ALLOC': 'C2Allocator',
    'C2_POOL': 'C2BlockPool',
    'HW_CODEC': 'Hardware Codec',
    'ION': 'ION Allocator',
    'GRALLOC': 'Gralloc',
    'COMP_INTF': 'Component Interface',
    'COMP_IMPL': 'Component Implementation',
    'PARAMS': 'C2Param',
    'QUERY': 'Query',

    // Media Framework Core (media-framework-core.html)
    'APP': 'Media Apps',
    'ME': 'MediaExtractor',
    'NP': 'NuPlayer',
    'CC': 'CCodec',
    'AC': 'ACodec',
    'LM': 'libmedia',
    'LS': 'libstagefright',
    'MC': 'MediaCodec API',
    'CC_MAIN': 'CCodec Entry',
    'CC_BUFFER': 'CCodecBufferChannel',
    'CC_CLIENT': 'Codec2Client',
    'C2_STORE': 'C2ComponentStore',
    'C2_PARAM': 'C2Params'
};

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

    'Framework': {
        title: 'Java API Framework',
        layer: 'Framework Layer',
        description: 'Android 앱 개발에 사용되는 Java/Kotlin API 프레임워크입니다. View System, Activity Manager, Package Manager 등을 포함합니다.',
        components: [
            'View System - UI 렌더링',
            'Activity Manager - 액티비티 생명주기',
            'Package Manager - 앱 설치/관리',
            'Window Manager - 창 관리',
            'Notification Manager - 알림',
            'Content Providers - 데이터 공유'
        ],
        path: 'frameworks/base/core/java/android/',
        doc: 'https://developer.android.com/reference',
        codeExample: `
// Activity 생성
class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }
}
        `.trim()
    },

    'Android Runtime': {
        title: 'Android Runtime (ART)',
        layer: 'Runtime',
        description: 'Android 앱을 실행하는 런타임 환경입니다. AOT 컴파일, 가비지 컬렉션, JIT 컴파일을 담당합니다.',
        components: [
            'AOT (Ahead-of-Time) Compilation',
            'JIT (Just-in-Time) Compilation',
            'Garbage Collection (GC)',
            'Core Libraries',
            'DEX Bytecode 실행'
        ],
        path: 'art/',
        doc: 'https://source.android.com/docs/core/runtime',
        codeExample: `
# ART 정보 확인
adb shell getprop dalvik.vm.heapsize
adb shell dumpsys meminfo com.example.app

# 컴파일 모드 확인
adb shell cmd package compile -m speed -f com.example.app
        `.trim()
    },

    'Native Libraries': {
        title: 'Native C/C++ Libraries',
        layer: 'Native Layer',
        description: 'Android 시스템의 핵심 기능을 제공하는 C/C++ 네이티브 라이브러리입니다. Media, Graphics, Audio 등을 포함합니다.',
        components: [
            'Media Framework (libstagefright)',
            'SurfaceFlinger - 화면 합성',
            'AudioFlinger - 오디오 믹싱',
            'libc (Bionic) - C 표준 라이브러리',
            'WebView (Chromium)',
            'SSL/Crypto 라이브러리'
        ],
        path: 'frameworks/native/',
        doc: 'https://source.android.com/docs/core',
        codeExample: `
// JNI로 네이티브 라이브러리 호출
class NativeLib {
    external fun processAudio(): Int

    companion object {
        init {
            System.loadLibrary("native-lib")
        }
    }
}
        `.trim()
    },

    'Hardware Abstraction Layer': {
        title: 'Hardware Abstraction Layer (HAL)',
        layer: 'HAL',
        description: '하드웨어를 추상화하는 계층입니다. HIDL/AIDL 인터페이스로 표준화되어 있습니다.',
        components: [
            'Audio HAL - 오디오 하드웨어',
            'Camera HAL - 카메라 센서',
            'Codec HAL - 하드웨어 코덱',
            'Graphics HAL - GPU',
            'Sensor HAL - 센서',
            'Vehicle HAL - 차량 제어 (AAOS)'
        ],
        path: 'hardware/interfaces/',
        doc: 'https://source.android.com/docs/core/architecture/hal',
        codeExample: `
// HAL 서비스 확인
adb shell lshal

# 특정 HAL 정보
adb shell dumpsys android.hardware.audio@7.0::IDevicesFactory/default
        `.trim()
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
    },

    // ========================================
    // 추가 미디어 프레임워크 노드
    // ========================================

    'Media APIs': {
        title: 'Media APIs',
        layer: 'Application Framework',
        description: 'Android 앱에서 사용하는 미디어 관련 API 모음입니다.',
        components: [
            'MediaPlayer - 기본 재생',
            'ExoPlayer - 고급 재생',
            'MediaRecorder - 녹음',
            'Camera2 API - 카메라',
            'AudioTrack - 오디오 출력',
            'AudioRecord - 오디오 입력'
        ],
        path: 'frameworks/base/media/java/android/media/',
        doc: 'https://developer.android.com/guide/topics/media'
    },

    'MediaSession': {
        title: 'MediaSession',
        layer: 'Framework',
        description: '미디어 재생 세션을 관리하고, 미디어 컨트롤을 표준화합니다.',
        components: [
            'MediaSession - 세션 생성',
            'MediaController - 원격 제어',
            'PlaybackState - 재생 상태',
            'Metadata - 미디어 정보'
        ],
        path: 'frameworks/base/media/java/android/media/session/',
        doc: 'https://developer.android.com/guide/topics/media-apps/working-with-a-media-session'
    },

    'MediaRouter': {
        title: 'MediaRouter',
        layer: 'Framework',
        description: '오디오/비디오 출력 장치를 선택하고 라우팅합니다.',
        components: [
            'Route Discovery',
            'Output Device Selection',
            'Chromecast 지원',
            'Bluetooth Audio'
        ],
        path: 'frameworks/base/media/java/android/media/',
        doc: 'https://developer.android.com/guide/topics/media/mediarouteProvider'
    },

    'Media Framework': {
        title: 'Media Framework (libstagefright)',
        layer: 'Native',
        description: 'Android의 네이티브 미디어 파이프라인 구현입니다.',
        components: [
            'Container Parsing',
            'Codec Pipeline',
            'Buffer Management',
            'Sync 처리'
        ],
        path: 'frameworks/av/media/libstagefright/',
        doc: 'https://source.android.com/docs/core/media'
    },

    'CameraService': {
        title: 'CameraService',
        layer: 'Native',
        description: '카메라 하드웨어를 관리하는 시스템 서비스입니다.',
        components: [
            'Camera Device 관리',
            'Capture Session',
            'Stream Configuration',
            'Metadata 처리'
        ],
        path: 'frameworks/av/services/camera/',
        doc: 'https://source.android.com/docs/core/camera'
    },

    // ========================================
    // 그래픽 스택 노드
    // ========================================

    'Surface': {
        title: 'Surface',
        layer: 'Framework',
        description: 'BufferQueue의 프로듀서 역할을 하는 화면 버퍼입니다.',
        components: [
            'Buffer Producer',
            'Canvas Drawing',
            'Hardware Acceleration',
            'Fence Synchronization'
        ],
        path: 'frameworks/native/libs/gui/',
        doc: 'https://source.android.com/docs/core/graphics/arch-sv'
    },

    'Hardware Composer': {
        title: 'Hardware Composer (HWC)',
        layer: 'HAL',
        description: '하드웨어 레벨 화면 합성을 담당하는 HAL입니다.',
        components: [
            'Layer Composition',
            'Display Configuration',
            'VSync 관리',
            'Overlay Plane 제어'
        ],
        path: 'hardware/interfaces/graphics/composer/',
        doc: 'https://source.android.com/docs/core/graphics/implement-hwc'
    },

    'Display Driver': {
        title: 'Display Driver',
        layer: 'Kernel',
        description: '디스플레이 하드웨어를 제어하는 커널 드라이버입니다.',
        components: [
            'Frame Buffer 관리',
            'Panel 초기화',
            'Backlight 제어',
            'HDMI/DP 출력'
        ],
        path: 'kernel/drivers/video/',
        doc: 'https://source.android.com/docs/core/graphics'
    },

    // ========================================
    // 부팅 프로세스 노드
    // ========================================

    'Boot ROM': {
        title: 'Boot ROM',
        layer: 'Hardware',
        description: 'SoC에 내장된 읽기 전용 부트 코드입니다. 전원이 켜지면 가장 먼저 실행됩니다.',
        components: [
            'Hardware 초기화',
            'Bootloader 검증',
            'Secure Boot',
            'Recovery Mode 감지'
        ],
        doc: 'https://source.android.com/docs/core/architecture/bootloader'
    },

    'Bootloader': {
        title: 'Bootloader',
        layer: 'Firmware',
        description: '커널을 메모리에 로드하고 실행하는 부트로더입니다.',
        components: [
            'U-Boot/Fastboot',
            'Kernel 로딩',
            'Device Tree 전달',
            'Fastboot Mode'
        ],
        doc: 'https://source.android.com/docs/core/architecture/bootloader',
        codeExample: `
# Fastboot 모드 진입
adb reboot bootloader

# 부팅 이미지 플래시
fastboot flash boot boot.img
        `.trim()
    },

    'Init Process': {
        title: 'Init Process (PID 1)',
        layer: 'System',
        description: 'Linux 커널 부팅 후 첫 번째로 실행되는 프로세스입니다.',
        components: [
            'init.rc 파싱',
            'Property Service',
            '서비스 시작',
            'SELinux 설정'
        ],
        path: 'system/core/init/',
        doc: 'https://source.android.com/docs/core/architecture/configuration/add-system-properties',
        codeExample: `
# Init 로그 확인
adb shell dmesg | grep init

# Property 확인
adb shell getprop ro.build.version.release
        `.trim()
    },

    'Native Daemons': {
        title: 'Native Daemons',
        layer: 'System',
        description: '시스템 레벨에서 실행되는 네이티브 데몬 프로세스들입니다.',
        components: [
            'servicemanager - Binder 레지스트리',
            'vold - 볼륨 관리',
            'netd - 네트워크 관리',
            'logd - 로그 수집'
        ],
        path: 'system/core/',
        doc: 'https://source.android.com/docs/core/architecture'
    },

    'Launcher': {
        title: 'Launcher (Home Screen)',
        layer: 'Application',
        description: 'Android의 홈 화면 앱입니다. 부팅 완료의 최종 단계입니다.',
        components: [
            'App Grid',
            'Widgets',
            'Wallpaper',
            'App Shortcuts'
        ],
        path: 'packages/apps/Launcher3/',
        doc: 'https://source.android.com/docs/core'
    },

    // ========================================
    // Binder IPC 노드
    // ========================================

    'Binder Proxy': {
        title: 'Binder Proxy',
        layer: 'Framework',
        description: 'AIDL에서 자동 생성되는 클라이언트 측 프록시입니다.',
        components: [
            'Remote Method Call',
            'Parameter Marshalling',
            'Transaction 생성',
            'Death Recipient'
        ],
        path: 'frameworks/base/core/java/android/os/',
        doc: 'https://source.android.com/docs/core/architecture/aidl'
    },

    'Binder Stub': {
        title: 'Binder Stub',
        layer: 'Framework',
        description: 'AIDL에서 자동 생성되는 서버 측 스텁입니다.',
        components: [
            'Transaction 수신',
            'Parameter Unmarshalling',
            'Method Dispatch',
            'Result 반환'
        ],
        path: 'frameworks/base/core/java/android/os/',
        doc: 'https://source.android.com/docs/core/architecture/aidl'
    },

    'System Service': {
        title: 'System Service',
        layer: 'Framework',
        description: 'System Server에서 실행되는 시스템 서비스입니다.',
        components: [
            'AIDL 인터페이스 구현',
            'Binder 등록',
            'Permission 체크',
            'Callback 관리'
        ],
        path: 'frameworks/base/services/',
        doc: 'https://source.android.com/docs/core/architecture'
    },

    // ========================================
    // Project Treble 노드
    // ========================================

    'Android Framework': {
        title: 'Android Framework (Treble)',
        layer: 'System Partition',
        description: 'Google이 관리하는 System Partition의 프레임워크입니다.',
        components: [
            'Framework Services',
            'VNDK Libraries',
            'System Apps',
            'Updatable via OTA'
        ],
        path: 'frameworks/',
        doc: 'https://source.android.com/docs/core/architecture/treble'
    },

    'Vendor NDK': {
        title: 'VNDK (Vendor NDK)',
        layer: 'System',
        description: '벤더가 사용할 수 있는 안정화된 NDK 라이브러리 집합입니다.',
        components: [
            'Stable ABI',
            'libc, libm 등',
            'Vendor 접근 허용',
            'Version 관리'
        ],
        path: 'frameworks/native/vndk/',
        doc: 'https://source.android.com/docs/core/architecture/vndk'
    },

    'Vendor Implementation': {
        title: 'Vendor Implementation',
        layer: 'Vendor Partition',
        description: 'OEM/벤더가 구현하는 HAL 및 드라이버입니다.',
        components: [
            'HAL Implementation',
            'Kernel Modules',
            'Vendor Libraries',
            'Device-specific Code'
        ],
        path: 'vendor/',
        doc: 'https://source.android.com/docs/core/architecture/treble'
    },

    'Vendor Libraries': {
        title: 'Vendor Libraries',
        layer: 'Vendor',
        description: '벤더 전용 네이티브 라이브러리입니다.',
        components: [
            'Camera ISP Library',
            'Audio DSP Library',
            'Codec Library',
            'GPU Driver'
        ],
        path: 'vendor/lib/',
        doc: 'https://source.android.com/docs/core/architecture/treble'
    },

    'HIDL Interface': {
        title: 'HIDL (Hardware Interface Definition Language)',
        layer: 'HAL',
        description: 'Android 8.0~10에서 사용된 HAL 인터페이스 정의 언어입니다.',
        components: [
            'HAL Interface 정의',
            'Binder-based IPC',
            'Versioned Interface',
            'Code Generation'
        ],
        path: 'hardware/interfaces/',
        doc: 'https://source.android.com/docs/core/architecture/hidl',
        codeExample: `
# HIDL 서비스 확인
adb shell lshal

# 특정 HAL 정보
adb shell lshal | grep audio
        `.trim()
    },

    'Stable AIDL': {
        title: 'Stable AIDL',
        layer: 'HAL',
        description: 'Android 11+에서 사용되는 안정화된 AIDL HAL 인터페이스입니다.',
        components: [
            'Stable ABI',
            'Backward Compatibility',
            'Binder IPC',
            'Versioning'
        ],
        path: 'hardware/interfaces/aidl/',
        doc: 'https://source.android.com/docs/core/architecture/aidl/stable-aidl',
        codeExample: `
# AIDL 서비스 확인
adb shell dumpsys -l | grep aidl

# AIDL HAL 버전
adb shell service list | grep android.hardware
        `.trim()
    },

    // ========================================
    // Codec2 노드 (codec2.html)
    // ========================================

    'Media App': {
        title: 'Media Application',
        layer: 'Application',
        description: '미디어 코덱을 사용하는 애플리케이션입니다. MediaCodec API를 통해 인코딩/디코딩을 수행합니다.',
        components: [
            'Video Player',
            'Camera App',
            'Video Editor',
            'Streaming App'
        ],
        doc: 'https://developer.android.com/guide/topics/media/mediacodec'
    },

    'CCodec': {
        title: 'CCodec',
        layer: 'Framework',
        description: 'Codec 2.0의 프레임워크 레벨 진입점입니다. MediaCodec API를 Codec2 HAL로 연결합니다.',
        components: [
            'Entry Point',
            'Buffer Management',
            'State Machine',
            'Error Handling'
        ],
        path: 'frameworks/av/media/codec2/sfplugin/',
        doc: 'https://source.android.com/docs/core/media/codec'
    },

    'CCodecBufferChannel': {
        title: 'CCodecBufferChannel',
        layer: 'Framework',
        description: 'Zero-copy 버퍼 전달을 담당합니다. 앱과 코덱 사이의 버퍼를 효율적으로 관리합니다.',
        components: [
            'Zero-Copy Buffer',
            'Input Queue',
            'Output Queue',
            'Buffer Synchronization'
        ],
        path: 'frameworks/av/media/codec2/sfplugin/',
        doc: 'https://source.android.com/docs/core/media/codec'
    },

    'Codec2Client': {
        title: 'Codec2Client',
        layer: 'Native',
        description: 'Codec2 HAL과 통신하는 클라이언트입니다. HIDL/AIDL IPC를 사용합니다.',
        components: [
            'HAL Communication',
            'Component Discovery',
            'Service Connection',
            'IPC Management'
        ],
        path: 'frameworks/av/media/codec2/core/',
        doc: 'https://source.android.com/docs/core/media/codec'
    },

    'C2ComponentStore': {
        title: 'C2ComponentStore',
        layer: 'HAL',
        description: 'Codec2 컴포넌트를 생성하고 관리하는 팩토리입니다.',
        components: [
            'Component Factory',
            'Library Loading',
            'Capability Query',
            'Parameter Support'
        ],
        path: 'hardware/interfaces/media/c2/',
        doc: 'https://source.android.com/docs/core/media/codec'
    },

    'C2Component': {
        title: 'C2Component',
        layer: 'HAL',
        description: '실제 인코딩/디코딩을 수행하는 코덱 컴포넌트입니다.',
        components: [
            'Encoder/Decoder Logic',
            'Buffer Processing',
            'Configuration',
            'State Management'
        ],
        path: 'hardware/google/av/codec2/',
        doc: 'https://source.android.com/docs/core/media/codec',
        codeExample: `
// MediaCodec 사용 예제
val codec = MediaCodec.createDecoderByType("video/avc")
val format = MediaFormat.createVideoFormat("video/avc", 1920, 1080)
codec.configure(format, surface, null, 0)
codec.start()
        `.trim()
    },

    'C2Component Interface': {
        title: 'C2Component Interface',
        layer: 'HAL',
        description: '코덱 파라미터를 설정하고 조회하는 인터페이스입니다.',
        components: [
            'Parameter Setting',
            'Capability Query',
            'Configuration',
            'Supported Formats'
        ],
        path: 'frameworks/av/media/codec2/vndk/',
        doc: 'https://source.android.com/docs/core/media/codec'
    },

    'C2Allocator': {
        title: 'C2Allocator',
        layer: 'HAL',
        description: '코덱 버퍼를 위한 메모리를 할당합니다.',
        components: [
            'ION Memory',
            'Gralloc Buffer',
            'Linear Buffer',
            'Graphic Buffer'
        ],
        path: 'frameworks/av/media/codec2/vndk/',
        doc: 'https://source.android.com/docs/core/media/codec'
    },

    'C2BlockPool': {
        title: 'C2BlockPool',
        layer: 'HAL',
        description: '재사용 가능한 버퍼 풀을 관리합니다.',
        components: [
            'Buffer Pool',
            'Memory Reuse',
            'Allocation Cache',
            'Pool Management'
        ],
        path: 'frameworks/av/media/codec2/vndk/',
        doc: 'https://source.android.com/docs/core/media/codec'
    },

    'Hardware Codec': {
        title: 'Hardware Codec (DSP/GPU)',
        layer: 'Hardware',
        description: '하드웨어 가속 코덱입니다. DSP나 GPU를 사용하여 인코딩/디코딩을 수행합니다.',
        components: [
            'Hardware Decoder',
            'Hardware Encoder',
            'DSP Acceleration',
            'GPU Processing'
        ],
        doc: 'https://source.android.com/docs/core/media/codec'
    },

    'ION Allocator': {
        title: 'ION Memory Allocator',
        layer: 'Kernel',
        description: '멀티미디어용 공유 메모리를 할당하는 커널 드라이버입니다.',
        components: [
            'Shared Memory',
            'DMA Buffer',
            'Heap Management',
            'Zero-Copy'
        ],
        path: 'kernel/drivers/staging/android/ion/',
        doc: 'https://source.android.com/docs/core/architecture/hidl/memoryblock'
    },

    'Gralloc': {
        title: 'Gralloc (Graphics Allocator)',
        layer: 'HAL',
        description: '그래픽 버퍼를 할당하는 HAL입니다.',
        components: [
            'Graphics Buffer',
            'Hardware Buffer',
            'Buffer Metadata',
            'Lock/Unlock'
        ],
        path: 'hardware/interfaces/graphics/allocator/',
        doc: 'https://source.android.com/docs/core/graphics/arch-bq-gralloc'
    },

    // ========================================
    // Media Framework Core 노드
    // ========================================

    'Media Apps': {
        title: 'Media Applications',
        layer: 'Application',
        description: '미디어를 재생, 녹화, 스트리밍하는 앱입니다.',
        components: [
            'YouTube - 동영상 스트리밍',
            'Spotify - 음악 재생',
            'Camera - 사진/동영상 촬영',
            'Video Player - 로컬 재생'
        ],
        doc: 'https://developer.android.com/guide/topics/media'
    },

    'MediaExtractor': {
        title: 'MediaExtractor (Demuxer)',
        layer: 'Framework',
        description: '미디어 컨테이너를 파싱하고 오디오/비디오 트랙을 추출합니다.',
        components: [
            'Container Parsing (MP4, MKV, WebM)',
            'Track Extraction',
            'Seek Support',
            'Metadata Reading'
        ],
        path: 'frameworks/av/media/libstagefright/',
        doc: 'https://developer.android.com/reference/android/media/MediaExtractor',
        codeExample: `
val extractor = MediaExtractor()
extractor.setDataSource(filePath)
val trackCount = extractor.trackCount

for (i in 0 until trackCount) {
    val format = extractor.getTrackFormat(i)
    val mime = format.getString(MediaFormat.KEY_MIME)
    if (mime.startsWith("video/")) {
        extractor.selectTrack(i)
        break
    }
}
        `.trim()
    },

    'NuPlayer': {
        title: 'NuPlayer',
        layer: 'Native',
        description: 'Android의 기본 미디어 재생 엔진입니다. MediaPlayer의 백엔드 구현체입니다.',
        components: [
            'Playback State Machine',
            'Source Management',
            'Decoder Management',
            'Renderer Pipeline'
        ],
        path: 'frameworks/av/media/libmediaplayerservice/nuplayer/',
        doc: 'https://source.android.com/docs/core/media'
    },

    'ACodec': {
        title: 'ACodec (OpenMAX)',
        layer: 'Framework',
        description: '레거시 OpenMAX IL 코덱을 위한 어댑터입니다. (Android 10 이하)',
        components: [
            'OpenMAX IL Adapter',
            'Legacy Codec Support',
            'Buffer Management',
            'State Machine'
        ],
        path: 'frameworks/av/media/libstagefright/',
        doc: 'https://source.android.com/docs/core/media'
    },

    'libmedia': {
        title: 'libmedia',
        layer: 'Native',
        description: '프레임워크와 네이티브 서비스를 연결하는 IPC 클라이언트 라이브러리입니다.',
        components: [
            'Binder IPC',
            'MediaPlayer Client',
            'MediaRecorder Client',
            'AudioTrack/AudioRecord'
        ],
        path: 'frameworks/av/media/libmedia/',
        doc: 'https://source.android.com/docs/core/media'
    },

    'libstagefright': {
        title: 'libstagefright',
        layer: 'Native',
        description: 'Android 미디어 프레임워크의 핵심 로직 라이브러리입니다.',
        components: [
            'Codec Pipeline',
            'Container Parsing',
            'Buffer Management',
            'Sync/Timing'
        ],
        path: 'frameworks/av/media/libstagefright/',
        doc: 'https://source.android.com/docs/core/media'
    },

    'C2Params': {
        title: 'C2Params',
        layer: 'HAL',
        description: 'Codec2 파라미터 설정 및 조회 시스템입니다.',
        components: [
            'Configuration Parameters',
            'Query Parameters',
            'Tuning Parameters',
            'Info Parameters'
        ],
        path: 'frameworks/av/media/codec2/vndk/',
        doc: 'https://source.android.com/docs/core/media/codec'
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
