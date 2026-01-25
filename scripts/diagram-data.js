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
    'C2_PARAM': 'C2Params',

    // Audio Framework (audio-framework.html)
    'AAUDIO': 'AAudio',
    'AF': 'AudioFlinger',
    'ALSA': 'ALSA Driver',
    'AM': 'AudioManager',
    'APS': 'AudioPolicyService',
    'AR': 'AudioRecord',
    'AT': 'AudioTrack',
    'MIXER': 'AudioMixer',
    'FAST': 'FastMixer',
    'EFFECTS': 'Audio Effects',
    'ROUTE': 'Audio Routing',
    'VOL': 'Volume Control',
    'CAS': 'Car Audio Service',
    'BT': 'Bluetooth Audio',
    'USB_DAC': 'USB DAC',

    // Widevine DRM (widevine.html)
    'CDM': 'Content Decryption Module',
    'MEDIADRM': 'MediaDRM API',
    'MEDIACRYPTO': 'MediaCrypto',
    'LIBMEDIADRM': 'libmediadrm',
    'DRMHAL': 'DRM HAL',
    'CRYPTOHAL': 'Crypto HAL',
    'CDM_LIB': 'CDM Library',
    'CDM_CORE': 'CDM Core',
    'CDM_SESSION': 'CDM Session',
    'OEMCRYPTO': 'OEMCrypto',
    'OEMCRYPTO_LIB': 'OEMCrypto Library',
    'TEE': 'Trusted Execution Environment',
    'TEE_OS': 'TEE OS',
    'TRUSTLET': 'Trustlet',
    'L1_TEE': 'Widevine L1 TEE',
    'L2_TEE': 'Widevine L2 TEE',
    'L3_SW': 'Widevine L3 Software',
    'LICENSE_SRV': 'License Server',
    'KEY_STORE': 'Key Storage',

    // Car Media Service (carmedia.html)
    'CMS': 'CarMediaService',
    'CAR_AUDIO': 'CarAudioService',
    'CAR_DISPLAY': 'CarDisplayService',
    'CAR_OS': 'Car OS',
    'VEHICLE_HAL': 'Vehicle HAL',
    'MATRIX': 'Audio Matrix',
    'ZONES': 'Audio Zones',
    'GROUPS': 'Audio Groups',
    'SPK_MAIN': 'Main Speaker',
    'SPK_NAV': 'Navigation Speaker',
    'SPK_REAR': 'Rear Speaker',

    // MediaSession (mediasession.html)
    'SESSION': 'MediaSession',
    'PLAYER': 'Media Player',
    'NOTIF': 'Notification',
    'AUTO': 'Android Auto',
    'WEAR': 'Wear OS',
    'ASSISTANT': 'Google Assistant',
    'BUTTON': 'Media Button',
    'EXTERNAL': 'External Device',

    // AAOS (aaos.html)
    'VHAL': 'Vehicle HAL',
    'CAR_SERVICE': 'Car Service',
    'CAR_API': 'Car API',
    'CAR_SVC': 'Car Service',
    'ECU': 'Electronic Control Unit',
    'CAN': 'CAN Bus',
    'CAR_AUDIO': 'Car Audio Service',
    'CAR_CONTROLS': 'Car Controls',
    'CAR_DISPLAY': 'Car Display',
    'AAOS_OS': 'AAOS Operating System',
    'AA_APP': 'Android Auto App',
    'VHAL_IF': 'VHAL Interface',
    'CPM': 'Car Property Manager',
    'PROPS': 'Vehicle Properties',

    // Media Playback (media-playback.html)
    'PLAYER_API': 'Player API',
    'V_DEC': 'Video Decoder',
    'A_DEC': 'Audio Decoder',
    'V_RENDER': 'Video Renderer',
    'A_RENDER': 'Audio Renderer',
    'DEMUX': 'Demuxer',
    'DECRYPT': 'Decryptor',

    // MediaProvider (mediaprovider.html)
    'MP': 'MediaProvider',
    'MS_API': 'MediaStore API',
    'SCANNER': 'Media Scanner',
    'DB': 'Media Database',
    'CR': 'ContentResolver',
    'GALLERY': 'Gallery App',
    'CAMERA': 'Camera App',
    'MUSIC': 'Music App',

    // MediaExtractor (media-extractor.html)
    'EXTRACTOR': 'MediaExtractor',
    'PARSER': 'Container Parser',
    'SOURCE': 'Data Source',

    // Android Version History (android-version-history.html)
    'CAM1': 'Camera API 1',
    'CAM2': 'Camera API 2',
    'CAMX': 'CameraX',
    'OPENSL': 'OpenSL ES',

    // GAS (gas.html)
    'GAS': 'Google Automotive Services',
    'GEARHEAD': 'Android Auto (Gearhead)',
    'GMAPS': 'Google Maps',
    'GASSISTANT': 'Google Assistant',

    // Power Policy (power-policy-suspend.html)
    'VMCU': 'Vehicle MCU',
    'POWER_POLICY': 'Power Policy',
    'SUSPEND': 'Suspend Manager',

    // CTS/CDD (cts.html, cdd.html)
    'CTS': 'Compatibility Test Suite',
    'VTS': 'Vendor Test Suite',
    'GTS': 'GMS Test Suite',
    'CDD': 'Compatibility Definition Document',
    'CDD_MEDIA': 'CDD Media Requirements'
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
    },

    // ========================================
    // Audio Framework 노드 (audio-framework.html)
    // ========================================

    'AAudio': {
        title: 'AAudio',
        layer: 'Framework API',
        description: 'Android의 고성능 오디오 API입니다. 저지연 오디오 재생과 녹음을 지원합니다.',
        components: [
            'Low Latency Audio',
            'Shared Mode',
            'Exclusive Mode',
            'MMAP (Memory Mapped) Buffer'
        ],
        path: 'frameworks/av/media/libaaudio/',
        doc: 'https://developer.android.com/ndk/guides/audio/aaudio/aaudio',
        codeExample: `
// AAudio 스트림 생성
AAudioStreamBuilder *builder;
AAudioStream *stream;

AAudio_createStreamBuilder(&builder);
AAudioStreamBuilder_setDirection(builder, AAUDIO_DIRECTION_OUTPUT);
AAudioStreamBuilder_setSampleRate(builder, 48000);
AAudioStreamBuilder_openStream(builder, &stream);
AAudioStream_requestStart(stream);
        `.trim()
    },

    'AudioTrack': {
        title: 'AudioTrack',
        layer: 'Framework API',
        description: 'PCM 오디오 데이터를 재생하는 Android API입니다.',
        components: [
            'PCM Playback',
            'Stream Mode',
            'Static Mode',
            'Audio Attributes',
            'Session ID'
        ],
        path: 'frameworks/base/media/java/android/media/AudioTrack.java',
        doc: 'https://developer.android.com/reference/android/media/AudioTrack',
        codeExample: `
val audioTrack = AudioTrack(
    AudioAttributes.Builder()
        .setUsage(AudioAttributes.USAGE_MEDIA)
        .setContentType(AudioAttributes.CONTENT_TYPE_MUSIC)
        .build(),
    AudioFormat.Builder()
        .setSampleRate(44100)
        .setEncoding(AudioFormat.ENCODING_PCM_16BIT)
        .setChannelMask(AudioFormat.CHANNEL_OUT_STEREO)
        .build(),
    bufferSize,
    AudioTrack.MODE_STREAM,
    AudioManager.AUDIO_SESSION_ID_GENERATE
)
audioTrack.play()
        `.trim()
    },

    'AudioRecord': {
        title: 'AudioRecord',
        layer: 'Framework API',
        description: 'PCM 오디오 데이터를 녹음하는 Android API입니다.',
        components: [
            'PCM Recording',
            'Audio Source Selection',
            'Buffer Management',
            'Sample Rate Control'
        ],
        path: 'frameworks/base/media/java/android/media/AudioRecord.java',
        doc: 'https://developer.android.com/reference/android/media/AudioRecord'
    },

    'AudioManager': {
        title: 'AudioManager',
        layer: 'Framework Service',
        description: '오디오 볼륨, 라우팅, 오디오 포커스를 관리하는 시스템 서비스입니다.',
        components: [
            'Volume Control',
            'Audio Focus',
            'Audio Routing',
            'Audio Mode (Call, Normal, etc.)',
            'Device Management'
        ],
        path: 'frameworks/base/media/java/android/media/AudioManager.java',
        doc: 'https://developer.android.com/reference/android/media/AudioManager'
    },

    'AudioPolicyService': {
        title: 'AudioPolicyService',
        layer: 'Native Service',
        description: '오디오 라우팅 정책을 결정하고 관리합니다.',
        components: [
            'Device Selection',
            'Stream Routing',
            'Volume Curves',
            'Audio Policy Configuration'
        ],
        path: 'frameworks/av/services/audiopolicy/',
        doc: 'https://source.android.com/docs/core/audio/implement-policy'
    },

    'AudioMixer': {
        title: 'AudioMixer',
        layer: 'Native',
        description: '여러 오디오 스트림을 믹싱합니다.',
        components: [
            'Multi-track Mixing',
            'Resampling',
            'Volume Ramping',
            'Effects Processing'
        ],
        path: 'frameworks/av/services/audioflinger/',
        doc: 'https://source.android.com/docs/core/audio/audioflinger'
    },

    'FastMixer': {
        title: 'FastMixer Thread',
        layer: 'Native',
        description: '저지연 오디오 믹싱을 담당하는 고우선순위 스레드입니다.',
        components: [
            'Low Latency Mixing',
            'Real-time Priority',
            'SCHED_FIFO Scheduling',
            'MMAP Buffer'
        ],
        path: 'frameworks/av/services/audioflinger/',
        doc: 'https://source.android.com/docs/core/audio/latency/design'
    },

    'Audio Effects': {
        title: 'Audio Effects',
        layer: 'Native',
        description: '이퀄라이저, 리버브 등 오디오 효과를 처리합니다.',
        components: [
            'Equalizer',
            'Reverb',
            'Bass Boost',
            'Virtualizer',
            'Loudness Enhancer'
        ],
        path: 'frameworks/av/media/libeffects/',
        doc: 'https://developer.android.com/guide/topics/media/audio-effects'
    },

    'ALSA Driver': {
        title: 'ALSA (Advanced Linux Sound Architecture)',
        layer: 'Kernel',
        description: 'Linux 오디오 드라이버 프레임워크입니다.',
        components: [
            'PCM Interface',
            'Control Interface',
            'Hardware Parameters',
            'DMA Buffer'
        ],
        path: 'kernel/sound/core/',
        doc: 'https://www.kernel.org/doc/html/latest/sound/'
    },

    // ========================================
    // Widevine DRM 노드 (widevine.html)
    // ========================================

    'MediaDRM API': {
        title: 'MediaDRM',
        layer: 'Framework API',
        description: 'Android의 DRM 프레임워크 API입니다. Widevine, PlayReady 등을 지원합니다.',
        components: [
            'Session Management',
            'Key Request',
            'License Processing',
            'Provisioning'
        ],
        path: 'frameworks/base/media/java/android/media/MediaDrm.java',
        doc: 'https://developer.android.com/reference/android/media/MediaDrm',
        codeExample: `
val widevineUUID = UUID(0xEDEF8BA979D64ACEL, 0xA3C827DCD51D21EDL)
val mediaDrm = MediaDrm(widevineUUID)

val session = mediaDrm.openSession()
val request = mediaDrm.getKeyRequest(session, initData, mimeType,
                                     MediaDrm.KEY_TYPE_STREAMING, null)

// 라이선스 서버에서 응답 받은 후
mediaDrm.provideKeyResponse(session, response)
        `.trim()
    },

    'MediaCrypto': {
        title: 'MediaCrypto',
        layer: 'Framework API',
        description: 'MediaCodec과 함께 사용되어 암호화된 미디어를 디코딩합니다.',
        components: [
            'Secure Decoding',
            'Session Binding',
            'Crypto Plugin Interface'
        ],
        path: 'frameworks/base/media/java/android/media/MediaCrypto.java',
        doc: 'https://developer.android.com/reference/android/media/MediaCrypto',
        codeExample: `
val mediaCrypto = MediaCrypto(widevineUUID, sessionId)
val decoder = MediaCodec.createDecoderByType("video/avc")
decoder.configure(format, surface, mediaCrypto, 0)
        `.trim()
    },

    'Content Decryption Module': {
        title: 'CDM (Content Decryption Module)',
        layer: 'Native',
        description: 'Widevine DRM의 핵심 복호화 모듈입니다.',
        components: [
            'License Parsing',
            'Key Management',
            'Decryption Engine',
            'Usage Tracking'
        ],
        doc: 'https://www.widevine.com/'
    },

    'OEMCrypto': {
        title: 'OEMCrypto',
        layer: 'HAL',
        description: 'OEM이 구현하는 하드웨어 암호화 API입니다. Widevine의 핵심 보안 계층입니다.',
        components: [
            'Hardware Key Storage',
            'Secure Decryption',
            'HDCP Enforcement',
            'Device Provisioning'
        ],
        doc: 'https://www.widevine.com/product',
        codeExample: `
// OEMCrypto API (C/C++)
OEMCrypto_Initialize();
OEMCryptoResult result = OEMCrypto_LoadKeys(session, message, signature);
OEMCrypto_DecryptCTR(session, encryptedData, iv, outputBuffer);
        `.trim()
    },

    'Trusted Execution Environment': {
        title: 'TEE (Trusted Execution Environment)',
        layer: 'Hardware',
        description: '하드웨어 기반 보안 실행 환경입니다. ARM TrustZone 등을 사용합니다.',
        components: [
            'Secure World',
            'Trustlet Execution',
            'Hardware Key Storage',
            'Secure Boot'
        ],
        doc: 'https://source.android.com/docs/security/features/trusty'
    },

    'License Server': {
        title: 'License Server',
        layer: 'External',
        description: 'DRM 라이선스를 발급하는 서버입니다.',
        components: [
            'License Generation',
            'Key Encryption',
            'Usage Rules',
            'Device Authentication'
        ],
        doc: 'https://www.widevine.com/'
    },

    // ========================================
    // Car Media Service 노드 (carmedia.html)
    // ========================================

    'CarMediaService': {
        title: 'CarMediaService',
        layer: 'Car Framework',
        description: '차량용 미디어 재생을 관리하는 서비스입니다. MediaSession과 통합됩니다.',
        components: [
            'Media Source Management',
            'Playback State Tracking',
            'Source Switching',
            'Last Media Persistence'
        ],
        path: 'packages/services/Car/service/src/com/android/car/media/',
        doc: 'https://source.android.com/docs/automotive/start/car-service'
    },

    'CarAudioService': {
        title: 'CarAudioService',
        layer: 'Car Framework',
        description: '차량용 오디오 라우팅과 볼륨을 관리합니다. 다중 존(Zone) 오디오를 지원합니다.',
        components: [
            'Audio Zones (Driver, Passenger, Rear)',
            'Audio Focus (per Zone)',
            'Volume Groups',
            'Ducking & Mixing',
            'External Audio Sources'
        ],
        path: 'packages/services/Car/service/src/com/android/car/audio/',
        doc: 'https://source.android.com/docs/automotive/audio',
        codeExample: `
// CarAudioManager 사용
val carAudioManager = car.getCarManager(Car.AUDIO_SERVICE) as CarAudioManager
val primaryZoneId = carAudioManager.primaryAudioZone
val volumeGroupCount = carAudioManager.getVolumeGroupCount(primaryZoneId)
        `.trim()
    },

    'Audio Matrix': {
        title: 'Audio Matrix',
        layer: 'Car Audio',
        description: '오디오 소스와 출력 장치를 매핑하는 매트릭스입니다.',
        components: [
            'Source to Device Mapping',
            'Dynamic Routing',
            'Priority Management',
            'Concurrent Playback'
        ],
        path: 'packages/services/Car/service/res/xml/car_audio_configuration.xml',
        doc: 'https://source.android.com/docs/automotive/audio/audio-routing'
    },

    'Audio Zones': {
        title: 'Audio Zones',
        layer: 'Car Audio',
        description: '차량 내 독립적인 오디오 영역입니다. (예: 운전석, 뒷좌석)',
        components: [
            'Zone 0 (Primary) - Driver',
            'Zone 1 - Rear Seat',
            'Independent Volume',
            'Independent Audio Focus'
        ],
        doc: 'https://source.android.com/docs/automotive/audio/audio-routing'
    },

    // ========================================
    // MediaSession 노드 (mediasession.html)
    // ========================================

    'MediaSession': {
        title: 'MediaSession',
        layer: 'Framework',
        description: '미디어 재생을 표준화하고 원격 제어를 가능하게 합니다.',
        components: [
            'Playback State',
            'Metadata (Title, Artist, Album)',
            'Transport Controls',
            'Queue Management',
            'Session Token'
        ],
        path: 'frameworks/base/media/java/android/media/session/',
        doc: 'https://developer.android.com/guide/topics/media-apps/working-with-a-media-session',
        codeExample: `
val session = MediaSession(context, "MyMusicPlayer")
session.setCallback(object : MediaSession.Callback() {
    override fun onPlay() {
        player.play()
        session.setPlaybackState(
            PlaybackState.Builder()
                .setState(PlaybackState.STATE_PLAYING, position, 1.0f)
                .build()
        )
    }
})
session.isActive = true
        `.trim()
    },

    'Media Player': {
        title: 'Media Player',
        layer: 'Application',
        description: '실제 미디어를 재생하는 플레이어 구현체입니다.',
        components: [
            'ExoPlayer',
            'MediaPlayer',
            'Custom Player',
            'Playback Engine'
        ],
        doc: 'https://developer.android.com/guide/topics/media/media3'
    },

    'Notification': {
        title: 'Media Notification',
        layer: 'Framework',
        description: '재생 중인 미디어 정보를 알림으로 표시합니다.',
        components: [
            'Media Style Notification',
            'Transport Controls',
            'Artwork Display',
            'Compact View'
        ],
        doc: 'https://developer.android.com/guide/topics/media-apps/mediabuttons'
    },

    'Android Auto': {
        title: 'Android Auto',
        layer: 'Platform',
        description: '차량 디스플레이에 미디어 앱을 표시합니다.',
        components: [
            'Media Browser Service',
            'Automotive App Library',
            'Voice Control',
            'Safety Guidelines'
        ],
        doc: 'https://developer.android.com/training/cars/media'
    },

    'Wear OS': {
        title: 'Wear OS',
        layer: 'Platform',
        description: '웨어러블 디바이스에서 미디어를 제어합니다.',
        components: [
            'Media Controls',
            'Complications',
            'Voice Commands',
            'Offline Playback'
        ],
        doc: 'https://developer.android.com/training/wearables/media'
    },

    'Google Assistant': {
        title: 'Google Assistant',
        layer: 'Platform',
        description: '음성 명령으로 미디어를 제어합니다.',
        components: [
            'Voice Commands',
            'App Actions',
            'Media Controls',
            'Content Deep Links'
        ],
        doc: 'https://developers.google.com/assistant/app/media'
    },

    // ========================================
    // AAOS 노드 (aaos.html) - Card 3
    // ========================================

    'Vehicle HAL': {
        title: 'Vehicle HAL (VHAL)',
        layer: 'HAL',
        description: '차량의 하드웨어를 추상화하는 HAL입니다. ECU와 Android 간의 인터페이스 역할을 합니다.',
        components: [
            'Vehicle Properties (속도, RPM, 기어 등)',
            'CAN Bus Communication',
            'Property Get/Set/Subscribe',
            'Area 기반 Property (Zone별)',
            'Property Change Event'
        ],
        path: 'hardware/interfaces/automotive/vehicle/',
        doc: 'https://source.android.com/docs/automotive/vhal',
        codeExample: `
// Vehicle Property 조회
val carPropertyManager = car.getCarManager(Car.PROPERTY_SERVICE) as CarPropertyManager

// 차량 속도 읽기
val speed = carPropertyManager.getFloatProperty(
    VehiclePropertyIds.PERF_VEHICLE_SPEED,
    VehicleAreaType.VEHICLE_AREA_TYPE_GLOBAL
)

// Property 변경 리스너
carPropertyManager.registerCallback(callback,
    VehiclePropertyIds.PERF_VEHICLE_SPEED,
    CarPropertyManager.SENSOR_RATE_NORMAL)
        `.trim()
    },

    'Car Service': {
        title: 'Car Service',
        layer: 'Framework',
        description: 'AAOS의 핵심 시스템 서비스입니다. 차량 특화 기능을 제공합니다.',
        components: [
            'CarAudioService - 오디오 관리',
            'CarPowerManagementService - 전원 관리',
            'CarUserService - 사용자 전환',
            'CarInputService - 입력 이벤트',
            'CarPropertyService - Vehicle Property',
            'CarDrivingStateService - 주행 상태'
        ],
        path: 'packages/services/Car/service/',
        doc: 'https://source.android.com/docs/automotive/start/car-service',
        codeExample: `
// Car API 초기화
val car = Car.createCar(context)

// Car Service 접근
val carAudioManager = car.getCarManager(Car.AUDIO_SERVICE) as CarAudioManager
val carPropertyManager = car.getCarManager(Car.PROPERTY_SERVICE) as CarPropertyManager
        `.trim()
    },

    'Car API': {
        title: 'Car API',
        layer: 'Framework API',
        description: '앱 개발자가 사용하는 차량용 Android API입니다.',
        components: [
            'CarAudioManager',
            'CarPropertyManager',
            'CarAppFocusManager',
            'CarNavigationManager',
            'CarSensorManager'
        ],
        path: 'packages/services/Car/car-lib/',
        doc: 'https://developer.android.com/reference/android/car/package-summary',
        codeExample: `
// build.gradle
dependencies {
    implementation 'androidx.car.app:app:1.3.0'
}

// Car API 사용
class MyCarActivity : Activity() {
    private lateinit var car: Car

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        car = Car.createCar(this)
    }
}
        `.trim()
    },

    'Electronic Control Unit': {
        title: 'ECU (Electronic Control Unit)',
        layer: 'Hardware',
        description: '차량의 전자 제어 장치입니다. 엔진, 변속기, 브레이크 등을 제어합니다.',
        components: [
            'Engine Control Module (ECM)',
            'Transmission Control Unit (TCU)',
            'Body Control Module (BCM)',
            'CAN Bus Protocol',
            'LIN Bus Protocol'
        ],
        doc: 'https://source.android.com/docs/automotive/vhal'
    },

    'CAN Bus': {
        title: 'CAN Bus',
        layer: 'Hardware',
        description: 'Controller Area Network. 차량 내 ECU 간 통신을 위한 네트워크 버스입니다.',
        components: [
            'CAN High/Low 신호',
            'Message ID 기반 우선순위',
            'CAN 2.0A/B 프로토콜',
            '최대 1Mbps 전송 속도',
            'Multi-master 통신'
        ],
        doc: 'https://en.wikipedia.org/wiki/CAN_bus'
    },

    'AAOS Operating System': {
        title: 'Android Automotive OS',
        layer: 'OS',
        description: '차량 인포테인먼트 시스템을 위한 Android OS입니다.',
        components: [
            'AOSP Base + Car Extensions',
            'Multi-user Support',
            'Boot Animation',
            'System UI (Car Launcher)',
            'Google Automotive Services (선택사항)'
        ],
        path: 'platform/packages/services/Car/',
        doc: 'https://source.android.com/docs/automotive'
    },

    'Android Auto App': {
        title: 'Android Auto Projection',
        layer: 'Application',
        description: '스마트폰의 Android Auto 앱을 차량 디스플레이에 투사합니다.',
        components: [
            'Phone Projection',
            'Media Browsing',
            'Navigation',
            'Voice Control',
            'Messaging (제한적)'
        ],
        doc: 'https://www.android.com/auto/'
    },

    'Car Property Manager': {
        title: 'CarPropertyManager',
        layer: 'Framework',
        description: 'Vehicle Property를 조회하고 변경하는 매니저입니다.',
        components: [
            'Property Get/Set',
            'Subscribe to Changes',
            'Area-based Access',
            'Permission Check'
        ],
        path: 'packages/services/Car/car-lib/src/android/car/hardware/property/',
        doc: 'https://developer.android.com/reference/android/car/hardware/property/CarPropertyManager'
    },

    'Vehicle Properties': {
        title: 'Vehicle Properties',
        layer: 'Data',
        description: '차량의 상태와 설정을 나타내는 속성들입니다.',
        components: [
            'PERF_VEHICLE_SPEED - 속도',
            'ENGINE_RPM - 엔진 RPM',
            'GEAR_SELECTION - 기어',
            'NIGHT_MODE - 야간 모드',
            'HVAC_TEMPERATURE - 온도',
            '400+ Properties 정의'
        ],
        path: 'hardware/interfaces/automotive/vehicle/aidl/',
        doc: 'https://source.android.com/docs/automotive/vhal/property-configuration'
    },

    // ========================================
    // Media Playback 노드 (media-playback.html) - Card 7
    // ========================================

    'Player API': {
        title: 'Media Player API',
        layer: 'Framework API',
        description: '미디어 재생을 위한 상위 레벨 API입니다.',
        components: [
            'MediaPlayer',
            'ExoPlayer',
            'Media3 Player',
            'MediaSession Integration'
        ],
        doc: 'https://developer.android.com/guide/topics/media/media3'
    },

    'Video Decoder': {
        title: 'Video Decoder',
        layer: 'Codec',
        description: '압축된 비디오를 디코딩합니다.',
        components: [
            'H.264/AVC Decoder',
            'H.265/HEVC Decoder',
            'VP9 Decoder',
            'AV1 Decoder',
            'Hardware/Software Decoder'
        ],
        path: 'frameworks/av/media/codec2/',
        doc: 'https://source.android.com/docs/core/media/codec'
    },

    'Audio Decoder': {
        title: 'Audio Decoder',
        layer: 'Codec',
        description: '압축된 오디오를 디코딩합니다.',
        components: [
            'AAC Decoder',
            'MP3 Decoder',
            'Opus Decoder',
            'Vorbis Decoder',
            'PCM Output'
        ],
        path: 'frameworks/av/media/codec2/',
        doc: 'https://source.android.com/docs/core/media/codec'
    },

    'Video Renderer': {
        title: 'Video Renderer',
        layer: 'Renderer',
        description: '디코딩된 비디오 프레임을 화면에 렌더링합니다.',
        components: [
            'Surface Rendering',
            'SurfaceView',
            'TextureView',
            'MediaCodec Output',
            'A/V Sync'
        ],
        doc: 'https://developer.android.com/guide/topics/media/media3/exoplayer'
    },

    'Audio Renderer': {
        title: 'Audio Renderer',
        layer: 'Renderer',
        description: '디코딩된 오디오를 출력합니다.',
        components: [
            'AudioTrack Output',
            'AAudio Output',
            'Resampling',
            'A/V Sync',
            'Volume Control'
        ],
        doc: 'https://developer.android.com/guide/topics/media/media3/exoplayer'
    },

    'Demuxer': {
        title: 'Demuxer',
        layer: 'Parser',
        description: '컨테이너에서 오디오/비디오 트랙을 분리합니다.',
        components: [
            'MP4 Demuxer',
            'MKV Demuxer',
            'WebM Demuxer',
            'TS Demuxer',
            'Track Selection'
        ],
        path: 'frameworks/av/media/libstagefright/',
        doc: 'https://source.android.com/docs/core/media'
    },

    'Decryptor': {
        title: 'Content Decryptor',
        layer: 'Security',
        description: 'DRM으로 보호된 콘텐츠를 복호화합니다.',
        components: [
            'MediaDrm Integration',
            'Key Management',
            'Sample Decryption',
            'Widevine/PlayReady Support'
        ],
        doc: 'https://developer.android.com/guide/topics/media/media3/getting-started/migration-guide#drm_and_decryption'
    },

    // ========================================
    // MediaProvider 노드 (mediaprovider.html) - Card 10
    // ========================================

    'MediaProvider': {
        title: 'MediaProvider',
        layer: 'Content Provider',
        description: '미디어 파일의 메타데이터를 관리하는 Content Provider입니다.',
        components: [
            'Media Database (SQLite)',
            'File Scanning',
            'Thumbnail Generation',
            'MediaStore API',
            'Storage Access Framework'
        ],
        path: 'packages/providers/MediaProvider/',
        doc: 'https://source.android.com/docs/core/storage/mediaprovider',
        codeExample: `
// MediaStore 쿼리
val projection = arrayOf(
    MediaStore.Audio.Media._ID,
    MediaStore.Audio.Media.DISPLAY_NAME,
    MediaStore.Audio.Media.DURATION
)

val cursor = contentResolver.query(
    MediaStore.Audio.Media.EXTERNAL_CONTENT_URI,
    projection,
    null,
    null,
    "\${MediaStore.Audio.Media.DISPLAY_NAME} ASC"
)
        `.trim()
    },

    'MediaStore API': {
        title: 'MediaStore',
        layer: 'Framework API',
        description: '미디어 파일에 접근하는 Android API입니다.',
        components: [
            'MediaStore.Images',
            'MediaStore.Audio',
            'MediaStore.Video',
            'MediaStore.Files',
            'Scoped Storage (Android 10+)'
        ],
        path: 'frameworks/base/core/java/android/provider/MediaStore.java',
        doc: 'https://developer.android.com/reference/android/provider/MediaStore'
    },

    'Media Scanner': {
        title: 'MediaScanner',
        layer: 'Service',
        description: '파일 시스템을 스캔하여 미디어 파일을 찾고 데이터베이스에 추가합니다.',
        components: [
            'File Discovery',
            'Metadata Extraction',
            'Database Update',
            'Thumbnail Generation',
            'Broadcast on Complete'
        ],
        path: 'packages/providers/MediaProvider/src/com/android/providers/media/',
        doc: 'https://source.android.com/docs/core/storage/mediaprovider'
    },

    'Media Database': {
        title: 'Media Database',
        layer: 'Storage',
        description: '미디어 파일의 메타데이터를 저장하는 SQLite 데이터베이스입니다.',
        components: [
            'files 테이블 (모든 파일)',
            'audio_meta 테이블 (오디오)',
            'video 테이블 (비디오)',
            'images 테이블 (이미지)',
            'Indexed Columns (빠른 검색)'
        ],
        path: 'packages/providers/MediaProvider/src/com/android/providers/media/MediaProvider.java',
        doc: 'https://source.android.com/docs/core/storage/mediaprovider'
    },

    'ContentResolver': {
        title: 'ContentResolver',
        layer: 'Framework',
        description: 'Content Provider에 접근하는 클라이언트 API입니다.',
        components: [
            'query() - 데이터 조회',
            'insert() - 데이터 삽입',
            'update() - 데이터 수정',
            'delete() - 데이터 삭제',
            'registerContentObserver() - 변경 감지'
        ],
        path: 'frameworks/base/core/java/android/content/ContentResolver.java',
        doc: 'https://developer.android.com/reference/android/content/ContentResolver'
    },

    // ========================================
    // Camera API 노드 (android-version-history.html) - Card 2
    // ========================================

    'Camera API 1': {
        title: 'Camera API 1 (Deprecated)',
        layer: 'Framework API',
        description: 'Android 초기 카메라 API입니다. (Android 5.0에서 deprecated)',
        components: [
            'Camera.open()',
            'Camera.Parameters',
            'Preview Callback',
            'Auto Focus',
            'Simple API'
        ],
        path: 'frameworks/base/core/java/android/hardware/Camera.java',
        doc: 'https://developer.android.com/reference/android/hardware/Camera'
    },

    'Camera API 2': {
        title: 'Camera2 API',
        layer: 'Framework API',
        description: 'Android 5.0에서 도입된 고급 카메라 API입니다.',
        components: [
            'CameraManager',
            'CameraDevice',
            'CaptureRequest',
            'CaptureResult',
            'Manual Control (ISO, 노출 등)',
            'RAW 촬영 지원'
        ],
        path: 'frameworks/base/core/java/android/hardware/camera2/',
        doc: 'https://developer.android.com/training/camera2',
        codeExample: `
val cameraManager = getSystemService(Context.CAMERA_SERVICE) as CameraManager
val cameraId = cameraManager.cameraIdList[0]

cameraManager.openCamera(cameraId, object : CameraDevice.StateCallback() {
    override fun onOpened(camera: CameraDevice) {
        // 카메라 사용 가능
    }
    override fun onDisconnected(camera: CameraDevice) {}
    override fun onError(camera: CameraDevice, error: Int) {}
}, handler)
        `.trim()
    },

    'CameraX': {
        title: 'CameraX',
        layer: 'Jetpack Library',
        description: 'Camera2의 복잡성을 감춘 고수준 Jetpack 라이브러리입니다.',
        components: [
            'Preview - 미리보기',
            'ImageCapture - 사진 촬영',
            'ImageAnalysis - 이미지 분석',
            'VideoCapture - 동영상 촬영',
            'Lifecycle-aware',
            'Device 호환성 자동 처리'
        ],
        doc: 'https://developer.android.com/training/camerax',
        codeExample: `
val preview = Preview.Builder().build()
val imageCapture = ImageCapture.Builder().build()

val cameraProvider = ProcessCameraProvider.getInstance(context).get()
cameraProvider.bindToLifecycle(
    lifecycleOwner,
    CameraSelector.DEFAULT_BACK_CAMERA,
    preview,
    imageCapture
)
        `.trim()
    },

    'OpenSL ES': {
        title: 'OpenSL ES',
        layer: 'NDK Audio API',
        description: 'Android NDK의 오디오 API입니다. C/C++에서 저수준 오디오 제어가 가능합니다.',
        components: [
            'Audio Playback',
            'Audio Recording',
            'Buffer Queue',
            'Effects',
            'Low Latency (Fast Track)'
        ],
        path: 'frameworks/wilhelm/',
        doc: 'https://developer.android.com/ndk/guides/audio/opensl',
        codeExample: `
// C++ OpenSL ES 오디오 재생
SLObjectItf engineObject;
slCreateEngine(&engineObject, 0, NULL, 0, NULL, NULL);
(*engineObject)->Realize(engineObject, SL_BOOLEAN_FALSE);

SLEngineItf engine;
(*engineObject)->GetInterface(engineObject, SL_IID_ENGINE, &engine);
        `.trim()
    },

    // ========================================
    // CTS/CDD 노드 (cts.html, cdd.html) - Card 20
    // ========================================

    'Compatibility Test Suite': {
        title: 'CTS (Compatibility Test Suite)',
        layer: 'Testing',
        description: 'Android 호환성을 검증하는 자동화 테스트 스위트입니다.',
        components: [
            'API Tests',
            'Media Tests',
            'Audio Tests',
            'Camera Tests',
            'Performance Tests',
            '10,000+ Test Cases'
        ],
        doc: 'https://source.android.com/docs/compatibility/cts',
        codeExample: `
# CTS 실행
./cts-tradefed run cts

# 특정 모듈만 실행
./cts-tradefed run cts -m CtsMediaTestCases

# 실패한 테스트 재실행
./cts-tradefed run retry --retry <session_id>
        `.trim()
    },

    'Vendor Test Suite': {
        title: 'VTS (Vendor Test Suite)',
        layer: 'Testing',
        description: 'HAL 구현을 검증하는 테스트 스위트입니다.',
        components: [
            'HAL Interface Tests',
            'Kernel Tests',
            'Performance Tests',
            'Security Tests'
        ],
        doc: 'https://source.android.com/docs/compatibility/vts'
    },

    'GMS Test Suite': {
        title: 'GTS (GMS Test Suite)',
        layer: 'Testing',
        description: 'Google Mobile Services 호환성을 테스트합니다.',
        components: [
            'Google Play Services Tests',
            'Google Apps Tests',
            'GMS Core Tests'
        ],
        doc: 'https://source.android.com/docs/compatibility'
    },

    'Compatibility Definition Document': {
        title: 'CDD (Compatibility Definition Document)',
        layer: 'Policy',
        description: 'Android 호환 기기가 충족해야 하는 요구사항을 정의합니다.',
        components: [
            'Hardware Requirements',
            'Software Requirements',
            'Performance Requirements',
            'Security Requirements',
            'Media Codec Requirements'
        ],
        doc: 'https://source.android.com/docs/compatibility/cdd',
        codeExample: `
# CDD 주요 요구사항 예시

[7.5/H-1-1] 최소 1개의 H.264 디코더 지원 필수
[7.5/H-1-2] AAC 디코더 지원 필수
[5.1/C-1-1] 최소 44.1kHz 샘플 레이트 지원
[5.4/H-1-1] 오디오 지연시간 < 100ms (Pro Audio)
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
