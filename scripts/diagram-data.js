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
    'TUNING': 'Tuning',
    'INPUT_Q': 'Input Queue',
    'OUTPUT_Q': 'Output Queue',
    'WORK_PROC': 'Work Processor',
    'WORK_DONE': 'onWorkDone',
    'TRIGGERED': 'onTriggered',
    'ERROR': 'onError',
    // codec2.html - Buffer Management Flow
    'START': 'Flow Start',
    'C2BUFFER': 'C2Buffer',
    'C2WORK': 'C2Work',
    'POOL': 'Block Pool',
    'TYPE': 'Buffer Type',
    'ION_ALLOC': 'ION Allocation',
    'GRALLOC_ALLOC': 'Gralloc Allocation',
    'QUEUE': 'Queue to Component',
    'PROCESS': 'Processing',
    'ZEROCOPY': 'Zero-Copy Check',
    'DIRECT': 'Direct Access',
    'COPY': 'Copy Operation',
    'OUTPUT': 'Output Buffer',
    'RETURN': 'Return to App',
    'RECYCLE': 'Recycle Buffer',
    'END': 'Flow End',
    'ALLOC': 'Allocation Decision',
    // codec2.html - Vendor Implementation
    'BP': 'Android.bp',
    'XML': 'media_codecs.xml',
    'MANIFEST': 'manifest.xml',
    'HWSERVICE': 'hwservicemanager',
    'STORE_IMPL': 'Store Implementation',

    // dolby-codecs.html - Dolby Audio & Video
    'APM': 'AudioPolicyManager',
    'PostProc': 'Post Processing',
    'Driver': 'ALSA Driver',
    // Dolby Vision Metadata
    'BL': 'Base Layer',
    'EL': 'Enhancement Layer',
    'RPU': 'Reference Processing Unit',
    'COMPOSER': 'DV Composer',
    'DM': 'Display Manager',
    'SCREEN': 'HDR Screen',
    // Dolby Certification Process
    'DEV': 'Development Kit',
    'IMPL': 'AOSP Integration',
    'SELF': 'Self-Test',
    'DOLBY_TEST': 'Dolby Certification Test',
    'AUDIO': 'Audio Test',
    'VIDEO': 'Video Test',
    'AUDIO_PASS': 'Audio Test Pass',
    'VIDEO_PASS': 'Video Test Pass',
    'CERT': 'Certificate',
    'LOGO': 'Dolby Logo',
    'PROD': 'Product Launch',

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

    // media-playback.html - Media Playback Pipeline
    // ExoPlayer/Media3 Components
    'AUDIO_DEC': 'Audio Decoder',
    'AUDIO_REN': 'Audio Renderer',
    'AUDIO_RENDERER': 'Audio Renderer',
    'VIDEO_DEC': 'Video Decoder',
    'VIDEO_REN': 'Video Renderer',
    'VIDEO_RENDERER': 'Video Renderer',
    'GENERIC_SRC': 'Generic Media Source',
    'HTTP_SRC': 'HTTP Media Source',
    'RTSP_SRC': 'RTSP Media Source',
    'MEDIA_SOURCE': 'Media Source',
    'TRACK_SELECTOR': 'Track Selector',
    'LOAD_CONTROL': 'Load Control',
    'TEXT_RENDERER': 'Text Renderer',
    // NuPlayer Components
    'NUPLAYER_MAIN': 'NuPlayer Main',
    'PLAYBACK_THREAD': 'Playback Thread',
    'PLAYER_API': 'Player API',
    'AUDIOSINK': 'Audio Sink',
    'A_PTS': 'Audio PTS',
    'A_REN': 'Audio Renderer',
    'A_RENDER': 'Audio Render',
    'V_PTS': 'Video PTS',
    'V_REN': 'Video Renderer',
    'V_RENDER': 'Video Render',
    // MediaSync
    'MEDIASYNC': 'MediaSync',
    'COMPARE': 'Compare PTS',
    'DROP': 'Drop Frame',
    'DUPLICATE': 'Duplicate Frame',
    'NORMAL': 'Normal Playback',
    // Misc
    'L_APP': 'Legacy App',
    'P_APP': 'Platform App',

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

    // media-extractor.html - MediaExtractor & Container Parsing
    'DATA_SRC': 'Data Source',
    'EXTRACTOR_FACTORY': 'Extractor Factory',
    'FD': 'File Descriptor',
    'META_DATA': 'Metadata',
    'ME_API': 'MediaExtractor API',
    'ME_IMPL': 'MediaExtractor Implementation',
    'MKV_PARSER': 'MKV Parser',
    'MP4_PARSER': 'MP4 Parser',
    'OTHER_PARSER': 'Other Parser',
    'SAMPLE_READER': 'Sample Reader',
    'STREAM': 'Stream Source',
    'WEBM_PARSER': 'WebM Parser',

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
    'CAR_AUDIO': 'Car Audio Service',
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
    'AUTO_SYS': 'Android Auto System',
    'AUTO_UI': 'Android Auto UI',
    'WEAR_SYS': 'Wear OS System',
    'WEAR_UI': 'Wear OS UI',

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
    'AAOS_FULL': 'AAOS Full Stack',
    'AA_APP': 'Android Auto App',
    'AA': 'Android Auto App',
    'VHAL_IF': 'VHAL Interface',
    'CPM': 'Car Property Manager',
    'PROPS': 'Vehicle Properties',
    'CAR_APP_LIB': 'Car App Library',
    'CAR_APP': 'Car App',
    'CAR_AA': 'Car Android Auto',
    'CAR_HW': 'Car Hardware',
    'PHONE': 'Phone',
    'PHONE_HW': 'Phone Hardware',
    'SENSORS': 'Sensors',
    'USER1': 'User 1',
    'USER2': 'User 2',
    'ECU1': 'ECU 1',
    'ECU2': 'ECU 2',
    'AUDIO1': 'Audio Zone 1',
    'AUDIO2': 'Audio Zone 2',
    'HAL_STD': 'Standard HAL',
    'SYSTEM_APP': 'System Apps',
    'MEDIA_APP': 'Media App',
    'MEDIA3': 'Media3 Library',
    'APP': 'Vehicle App',
    'APP1': 'Navigation App',
    'APP2': 'Media App',
    'AppTypes': 'AAOS App Types',
    'Layer1': 'Layer 1',
    'Layer2': 'Layer 2',
    'Layer3': 'Layer 3',
    'Layer7': 'Layer 7',
    'Car_Services': 'Car Services',
    'VHAL_Layer': 'VHAL Layer',
    'Vehicle': 'Vehicle',
    'Hardware': 'Hardware',
    'Framework': 'Framework',
    'Zone1': 'Audio Zone 1',
    'Zone2': 'Audio Zone 2',

    // Media Framework Core (media-framework-core.html)
    'APP_LAYER': 'Application Layer',
    'HAL_LAYER': 'HAL Layer',
    'B1': 'Binder IPC',
    'M3': 'Media3',
    'M3_EXO': 'ExoPlayer',
    'M3_SESSION': 'Media3 Session',
    'M3_UI': 'Media3 UI',
    'EXO1': 'ExoPlayer',
    'MC1': 'MediaCodec 1',
    'MC2': 'MediaCodec 2',
    'MC3': 'MediaCodec 3',
    'MD': 'MediaDrm',
    'MDSERVICE': 'MediaDrm Service',
    'KM': 'KeyMaster',
    'WV': 'Widevine',
    'SD': 'Secure Decoder',
    'MSS': 'MediaSession Service',
    'MS_FW': 'MediaSession Framework',
    'COMPONENTS': 'Components',
    'HAL_INTF': 'Codec HAL Interface',
    'C2_CORE': 'Codec2 Core',
    'C2_COMP': 'Codec2 Component',
    'C2_PARAM': 'Codec2 Parameter',
    'C2_HW': 'Codec2 Hardware',
    'C2_SW': 'Codec2 Software',
    'C2_STORE': 'Codec2 Store',
    'C2_IMPL': 'Codec2 Implementation',
    'C2_HAL': 'Codec2 API',
    'GALLERY': 'Gallery App',
    'MUSIC': 'Music App',
    'FILES': 'Media Files',
    'DB': 'Media Database',
    'SCANNER': 'Media Scanner',
    'PLAYER': 'Media Player',
    'AUDIO': 'Audio',

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
    'EXT_STORAGE': 'External Storage',
    'INT_STORAGE': 'Internal Storage',
    'KERNEL_FUSE': 'FUSE Daemon',
    'L_FS': 'Legacy File System',
    'L_PERM': 'Legacy Permissions',
    'S_APP': 'Scoped Storage App',
    'S_MEDIA': 'Scoped Media Access',
    'S_OWN': 'Scoped Own Files',
    'S_SAF': 'Storage Access Framework',

    // MediaExtractor (media-extractor.html)
    'EXTRACTOR': 'MediaExtractor',
    'PARSER': 'Container Parser',
    'SOURCE': 'Data Source',

    // Android Version History (android-version-history.html)
    'CAM1': 'Camera API 1',
    'CAM2': 'Camera API 2',
    'CAMX': 'CameraX',
    'OPENSL': 'OpenSL ES',
    'AAUDIO': 'AAudio',
    'AR': 'AudioRecord',
    'AT': 'AudioTrack',
    'OMX': 'OMX IL',
    'L1': 'Lollipop',
    'M1': 'Marshmallow',
    'M2': 'Marshmallow',
    'F1': 'Features - Lollipop',
    'F2': 'Features - Marshmallow',
    'FEAT_AAUDIO': 'Features - AAudio',
    'FEAT_AT': 'Features - AudioTrack',
    'FEAT_OPENSL': 'Features - OpenSL ES',
    'CAM1_FEAT': 'Camera1 Features',
    'CAM2_FEAT': 'Camera2 Features',
    'CAMX_FEAT': 'CameraX Features',
    'App1': 'App1',
    'App2': 'App2',
    'MediaCodec1': 'MediaCodec1',
    'MediaCodec2': 'MediaCodec2',
    'VendorLib': 'Vendor Codec Library',
    'Codec2': 'Codec2 API',
    'Codec2Impl': 'Codec2 Implementation',
    'Legacy': 'Legacy',
    'Modern': 'Modern',
    'Gen1': 'Gen1',
    'Gen2': 'Gen2',
    'Gen3': 'Gen3',
    'Java': 'Java',
    'Native1': 'Native1',
    'Native2': 'Native2',
    'Features': 'Features',
    'Future': 'Future',

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
    'CDD_MEDIA': 'CDD Media Requirements',

    // AOSP 아키텍처 (aosp.html)
    'SERVICES': 'System Services',
    'APP_LAYER': 'Application Layer',
    'HAL_LAYER': 'HAL Layer',
    'SURFACE_FLINGER': 'SurfaceFlinger',
    'AUDIO_FLINGER': 'AudioFlinger',
    'BINDER': 'Binder IPC',
    'PROXY': 'Proxy',
    'STUB': 'Stub',
    'SERVICE_MGR': 'ServiceManager',
    'HIDL': 'HIDL',
    'STABLE_AIDL': 'Stable AIDL',
    'CAMERA_SERVICE': 'Camera Service',
    'CODEC_SERVICE': 'Codec Service',
    'VNDK': 'VNDK',
    'VENDOR_IMPL': 'Vendor Implementation',
    'VENDOR_LIBS': 'Vendor Libraries',
    'SYSTEM': 'System Partition',
    'VENDOR': 'Vendor Partition',
    'BOOTROM': 'Boot ROM',
    'BOOTLOADER': 'Bootloader',
    'INIT': 'Init Process',
    'ZYGOTE': 'Zygote',
    'SYSSERVER': 'System Server',
    'LAUNCHER': 'Launcher',
    'DAEMONS': 'Daemons',
    'SURFACE': 'Surface',
    'BUFFER_QUEUE': 'BufferQueue',
    'HWC': 'Hardware Composer',
    'DISPLAY': 'Display',
    'MEDIA_ROUTER': 'Media Router',
    'MEDIA_API': 'Media API',
    'STAGEFRIGHT': 'Stagefright',
    'CLIENT': 'Client',
    'SERVER': 'Server',
    'HAL_INTERFACE': 'HAL Interface',
    'APP_VIEW': 'App View',
    'AUDIO_HAL': 'Audio HAL',
    'CAMERA_HAL': 'Camera HAL',
    'CODEC_HAL': 'Codec HAL'
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

    'HIDL/AIDL IPC': {
        title: 'HIDL/AIDL IPC Layer',
        layer: 'HAL Interface',
        description: 'Framework와 Vendor 간 프로세스 간 통신(IPC)을 담당하는 HAL 인터페이스입니다.',
        components: [
            'HIDL (Hardware Interface Definition Language)',
            'AIDL (Android Interface Definition Language)',
            'Binder IPC',
            'Data Serialization'
        ],
        path: 'hardware/interfaces/media/c2/',
        doc: 'https://source.android.com/docs/core/architecture/hidl',
        codeExample: `
// HIDL 서비스 등록 (vendor)
using android::hardware::media::c2::V1_0::IComponentStore;
sp<IComponentStore> store = new MyComponentStore();
status_t status = store->registerAsService("default");

// AIDL 서비스 등록 (vendor)
using aidl::android::hardware::media::c2::IComponentStore;
std::shared_ptr<IComponentStore> store = ndk::SharedRefBase::make<MyComponentStore>();
const std::string name = IComponentStore::descriptor + "/default";
binder_status_t status = AServiceManager_addService(store->asBinder().get(), name.c_str());
        `.trim()
    },

    'ClientListener': {
        title: 'Client Listener (mClientListener)',
        layer: 'Framework',
        description: 'Codec2Client에서 컴포넌트의 콜백을 수신하는 리스너입니다.',
        components: [
            'onWorkDone() 콜백',
            'onTriggered() 콜백',
            'onError() 콜백',
            'onFramesRendered() 콜백'
        ],
        path: 'frameworks/av/media/codec2/vndk/',
        doc: 'https://source.android.com/docs/core/media/codec'
    },

    'Component Implementation': {
        title: 'C2Component Implementation',
        layer: 'Vendor',
        description: '실제 인코딩/디코딩 로직을 구현하는 벤더 코드입니다.',
        components: [
            'Hardware Codec Driver',
            'DSP/GPU Integration',
            'Buffer Processing',
            'Error Handling'
        ],
        path: 'vendor/<company>/codec2/',
        doc: 'https://source.android.com/docs/core/media/codec',
        codeExample: `
// 벤더 코덱 구현 예제
class MyAvcDecoder : public SimpleC2Component {
    void process(
        const std::unique_ptr<C2Work>& work,
        const std::shared_ptr<C2BlockPool>& pool) override {

        // 입력 버퍼에서 압축 데이터 추출
        C2ReadView rView = work->input.buffers[0]->data()
            .linearBlocks().front().map().get();

        // 하드웨어 디코더 호출
        mHwDecoder->decode(rView.data(), rView.capacity());

        // 출력 버퍼 생성 및 반환
        std::shared_ptr<C2GraphicBlock> block;
        pool->fetchGraphicBlock(mWidth, mHeight, format, usage, &block);
        work->worklets.front()->output.buffers.push_back(
            createGraphicBuffer(block)
        );
    }
};
        `.trim()
    },

    'C2Param': {
        title: 'C2Param (Configuration Parameters)',
        layer: 'HAL',
        description: '코덱의 설정 파라미터를 정의하는 타입입니다.',
        components: [
            'Bitrate Parameters',
            'Resolution Parameters',
            'Frame Rate Parameters',
            'Profile/Level Parameters',
            'Color Format Parameters'
        ],
        path: 'frameworks/av/media/codec2/vndk/include/C2Param.h',
        doc: 'https://source.android.com/docs/core/media/codec',
        codeExample: `
// C2Param 설정 예제
std::vector<std::unique_ptr<C2Param>> params;

// 비트레이트 설정
params.push_back(std::make_unique<C2StreamBitrateInfo::output>(
    0u, 6000000  // 6 Mbps
));

// 프레임레이트 설정
params.push_back(std::make_unique<C2StreamFrameRateInfo::output>(
    0u, 30.0  // 30 fps
));

// 해상도 설정
params.push_back(std::make_unique<C2StreamPictureSizeInfo::input>(
    0u, 1920, 1080
));

c2_status_t err = component->config(params, C2_MAY_BLOCK, &failures);
        `.trim()
    },

    'Query': {
        title: 'Query (Capability Query)',
        layer: 'HAL',
        description: '컴포넌트의 지원 능력 및 파라미터 범위를 조회하는 인터페이스입니다.',
        components: [
            'Supported Parameters',
            'Value Ranges',
            'Profile/Level Support',
            'Color Format Support'
        ],
        path: 'frameworks/av/media/codec2/vndk/',
        doc: 'https://source.android.com/docs/core/media/codec',
        codeExample: `
// 지원 파라미터 조회
std::vector<std::shared_ptr<C2ParamDescriptor>> params;
c2_status_t err = component->querySupportedParams(&params);

for (auto& param : params) {
    ALOGD("Supported param: %s", param->name().c_str());
}

// 지원 값 범위 조회
C2FieldSupportedValuesQuery query = C2FieldSupportedValuesQuery::Current(
    C2ParamField(&C2StreamBitrateInfo::output::value)
);
std::vector<C2FieldSupportedValuesQuery> queries = { query };
err = component->querySupportedValues(queries, C2_MAY_BLOCK);

ALOGD("Bitrate range: %d - %d",
    queries[0].values.range.min.u32,
    queries[0].values.range.max.u32);
        `.trim()
    },

    'Tuning': {
        title: 'Tuning (Dynamic Adjustment)',
        layer: 'HAL',
        description: '런타임 시 코덱 파라미터를 동적으로 조정하는 기능입니다.',
        components: [
            'Bitrate Adaptation',
            'Frame Rate Adjustment',
            'Quality Tuning',
            'Performance Optimization'
        ],
        path: 'frameworks/av/media/codec2/vndk/',
        doc: 'https://source.android.com/docs/core/media/codec',
        codeExample: `
// 런타임 비트레이트 조정
std::vector<std::unique_ptr<C2Param>> params;
params.push_back(std::make_unique<C2StreamBitrateInfo::output>(
    0u, 4000000  // 6 Mbps → 4 Mbps로 감소
));

std::vector<std::unique_ptr<C2SettingResult>> failures;
c2_status_t err = component->config(params, C2_MAY_BLOCK, &failures);

if (err == C2_OK) {
    ALOGD("Bitrate adjusted successfully");
}
        `.trim()
    },

    'Input Queue': {
        title: 'Input Queue',
        layer: 'HAL',
        description: '인코더/디코더로 전달될 압축 데이터를 대기시키는 큐입니다.',
        components: [
            'Work Queue',
            'Priority Handling',
            'Queue Management',
            'Buffer Ordering'
        ],
        path: 'frameworks/av/media/codec2/components/base/',
        doc: 'https://source.android.com/docs/core/media/codec'
    },

    'Output Queue': {
        title: 'Output Queue',
        layer: 'HAL',
        description: '인코딩/디코딩된 데이터를 반환하기 전 대기시키는 큐입니다.',
        components: [
            'Output Buffer Queue',
            'Frame Ordering',
            'Timestamp Management',
            'Buffer Release'
        ],
        path: 'frameworks/av/media/codec2/components/base/',
        doc: 'https://source.android.com/docs/core/media/codec'
    },

    'Work Processor': {
        title: 'Work Processor',
        layer: 'HAL',
        description: 'C2Work를 처리하는 실제 워커 스레드입니다.',
        components: [
            'Work Thread',
            'Processing Loop',
            'Codec Operation',
            'Buffer Handling'
        ],
        path: 'frameworks/av/media/codec2/components/base/',
        doc: 'https://source.android.com/docs/core/media/codec',
        codeExample: `
// SimpleC2Component의 워커 스레드
void SimpleC2Component::processLoop() {
    while (mRunning) {
        std::unique_ptr<C2Work> work;
        {
            std::unique_lock<std::mutex> lock(mQueueLock);
            if (mQueue.empty()) {
                mQueueCondition.wait(lock);
                continue;
            }
            work = std::move(mQueue.front());
            mQueue.pop_front();
        }

        // 실제 인코딩/디코딩 처리
        process(work, mBlockPool);

        // 완료 콜백
        mListener->onWorkDone_nb(shared_from_this(), work);
    }
}
        `.trim()
    },

    'onWorkDone': {
        title: 'onWorkDone Callback',
        layer: 'Framework',
        description: 'C2Work 처리가 완료되었을 때 호출되는 콜백입니다.',
        components: [
            'Completion Notification',
            'Output Buffer Delivery',
            'Error Reporting',
            'Timestamp Info'
        ],
        path: 'frameworks/av/media/codec2/vndk/',
        doc: 'https://source.android.com/docs/core/media/codec',
        codeExample: `
// onWorkDone 콜백 구현
void MyCodec2Listener::onWorkDone_nb(
    const std::weak_ptr<C2Component>& comp,
    std::list<std::unique_ptr<C2Work>>& workItems) {

    for (auto& work : workItems) {
        if (work->result == C2_OK) {
            // 출력 버퍼를 앱으로 전달
            deliverOutputBuffer(work->worklets.front()->output.buffers[0]);
        } else {
            ALOGE("Work failed: %d", work->result);
        }
    }
}
        `.trim()
    },

    'onTriggered': {
        title: 'onTriggered Callback',
        layer: 'Framework',
        description: '특정 이벤트가 발생했을 때 호출되는 콜백입니다.',
        components: [
            'Event Notification',
            'Configuration Change',
            'Stream Event',
            'Component State'
        ],
        path: 'frameworks/av/media/codec2/vndk/',
        doc: 'https://source.android.com/docs/core/media/codec',
        codeExample: `
// onTriggered 콜백 구현
void MyCodec2Listener::onTriggered_nb(
    const std::weak_ptr<C2Component>& comp,
    const std::vector<std::shared_ptr<C2Param>>& params) {

    for (auto& param : params) {
        switch (param->coreIndex().coreIndex()) {
            case C2StreamPictureSizeInfo::CORE_INDEX:
                // 해상도 변경 이벤트
                handleResolutionChange(param);
                break;
            case C2StreamFrameRateInfo::CORE_INDEX:
                // 프레임레이트 변경 이벤트
                handleFrameRateChange(param);
                break;
        }
    }
}
        `.trim()
    },

    'onError': {
        title: 'onError Callback',
        layer: 'Framework',
        description: '코덱에서 에러가 발생했을 때 호출되는 콜백입니다.',
        components: [
            'Error Code',
            'Error Recovery',
            'Component Reset',
            'Failure Notification'
        ],
        path: 'frameworks/av/media/codec2/vndk/',
        doc: 'https://source.android.com/docs/core/media/codec',
        codeExample: `
// onError 콜백 구현
void MyCodec2Listener::onError_nb(
    const std::weak_ptr<C2Component>& comp,
    uint32_t errorCode) {

    ALOGE("Codec error: 0x%x", errorCode);

    switch (errorCode) {
        case C2_CORRUPTED:
            ALOGE("Corrupted data detected");
            break;
        case C2_NO_MEMORY:
            ALOGE("Out of memory");
            break;
        case C2_BAD_VALUE:
            ALOGE("Invalid parameter");
            break;
        default:
            ALOGE("Unknown error");
            break;
    }

    // 에러 복구 시도 또는 컴포넌트 리셋
    handleCodecError(errorCode);
}
        `.trim()
    },

    // Buffer Management Flow 노드들

    'Flow Start': {
        title: 'Buffer Flow Start',
        layer: 'Framework',
        description: '앱에서 인코딩/디코딩 요청을 시작하는 시점입니다.',
        components: [
            'queueInputBuffer()',
            'Buffer Request',
            'Flow Initiation'
        ]
    },

    'C2Buffer': {
        title: 'C2Buffer',
        layer: 'HAL',
        description: '미디어 데이터를 담는 Codec 2.0 버퍼 컨테이너입니다.',
        components: [
            'Linear Buffer (Audio/Compressed)',
            'Graphic Buffer (Video/YUV)',
            'Buffer Metadata',
            'Data Blocks'
        ],
        path: 'frameworks/av/media/codec2/vndk/include/C2Buffer.h',
        doc: 'https://source.android.com/docs/core/media/codec',
        codeExample: `
// C2Buffer 생성 예제
std::shared_ptr<C2LinearBlock> block;
c2_status_t err = pool->fetchLinearBlock(size, usage, &block);

std::shared_ptr<C2Buffer> buffer = C2Buffer::CreateLinearBuffer(
    block->share(0, size, C2Fence())
);

// C2Work에 첨부
work->input.buffers.clear();
work->input.buffers.push_back(buffer);
        `.trim()
    },

    'C2Work': {
        title: 'C2Work',
        layer: 'HAL',
        description: '코덱에 전달되는 작업 단위입니다. 입력/출력 버퍼와 메타데이터를 포함합니다.',
        components: [
            'Input Buffers',
            'Output Buffers',
            'Worklets',
            'Timestamp & Flags'
        ],
        path: 'frameworks/av/media/codec2/vndk/include/C2Work.h',
        doc: 'https://source.android.com/docs/core/media/codec',
        codeExample: `
// C2Work 생성 및 큐잉
std::unique_ptr<C2Work> work = std::make_unique<C2Work>();
work->input.ordinal.frameIndex = frameIndex;
work->input.ordinal.timestamp = timestampUs;
work->input.buffers.push_back(inputBuffer);
work->input.flags = (C2FrameData::flags_t)0;

std::list<std::unique_ptr<C2Work>> workList;
workList.push_back(std::move(work));

c2_status_t err = component->queue_nb(&workList);
        `.trim()
    },

    'Block Pool': {
        title: 'C2BlockPool',
        layer: 'HAL',
        description: '버퍼 블록을 풀링하여 재사용하는 메모리 관리자입니다.',
        components: [
            'Buffer Allocation Pool',
            'Memory Recycling',
            'Fast Allocation',
            'Pool Management'
        ],
        path: 'frameworks/av/media/codec2/vndk/C2BlockPool.cpp'
    },

    'Buffer Type': {
        title: 'Buffer Type Decision',
        layer: 'HAL',
        description: '버퍼 타입(Linear 또는 Graphic)을 결정하는 분기점입니다.',
        components: [
            'Linear Buffer (Audio, Compressed Video)',
            'Graphic Buffer (Raw YUV, RGB)'
        ]
    },

    'ION Allocation': {
        title: 'ION Memory Allocation',
        layer: 'Kernel',
        description: 'ION 드라이버를 통해 연속 메모리를 할당합니다.',
        components: [
            'ION Heap Selection',
            'DMA-BUF Allocation',
            'Shared Memory',
            'File Descriptor'
        ],
        path: 'kernel/drivers/staging/android/ion/',
        doc: 'https://source.android.com/docs/core/architecture/hidl/memoryblock'
    },

    'Gralloc Allocation': {
        title: 'Gralloc Buffer Allocation',
        layer: 'HAL',
        description: 'Gralloc HAL을 통해 그래픽 버퍼를 할당합니다.',
        components: [
            'Graphics Buffer Allocation',
            'Format Negotiation',
            'Hardware Buffer',
            'Usage Flags'
        ],
        path: 'hardware/interfaces/graphics/allocator/',
        doc: 'https://source.android.com/docs/core/graphics/arch-bq-gralloc'
    },

    'Queue to Component': {
        title: 'Queue Work to Component',
        layer: 'HAL',
        description: 'C2Work를 컴포넌트의 입력 큐에 전달합니다.',
        components: [
            'queue_nb() Call',
            'Work Submission',
            'Input Queue'
        ]
    },

    'Processing': {
        title: 'Codec Processing',
        layer: 'HAL/Hardware',
        description: '실제 인코딩 또는 디코딩을 수행하는 단계입니다.',
        components: [
            'Hardware Codec Processing',
            'Software Codec Processing',
            'Data Transform',
            'Buffer Management'
        ]
    },

    'Zero-Copy Check': {
        title: 'Zero-Copy Possible?',
        layer: 'HAL',
        description: 'Zero-Copy로 버퍼를 전달할 수 있는지 확인하는 분기점입니다.',
        components: [
            'Memory Mapping Check',
            'Buffer Compatibility',
            'Direct Access Possibility'
        ]
    },

    'Direct Access': {
        title: 'Direct Memory Access',
        layer: 'HAL',
        description: '버퍼를 복사하지 않고 직접 접근합니다 (Zero-Copy).',
        components: [
            'Pointer Sharing',
            'No Data Copy',
            'Memory Mapping',
            'Performance Optimization'
        ]
    },

    'Copy Operation': {
        title: 'Buffer Copy',
        layer: 'HAL',
        description: 'Zero-Copy가 불가능한 경우 버퍼를 복사합니다.',
        components: [
            'Memory Copy',
            'Format Conversion',
            'Data Transfer'
        ]
    },

    'Output Buffer': {
        title: 'Output Buffer Creation',
        layer: 'HAL',
        description: '처리된 데이터를 담을 출력 버퍼를 생성합니다.',
        components: [
            'C2Buffer Creation',
            'Output Queue',
            'Buffer Metadata'
        ]
    },

    'Return to App': {
        title: 'Return Buffer to Application',
        layer: 'Framework',
        description: '처리된 버퍼를 앱으로 반환합니다.',
        components: [
            'dequeueOutputBuffer()',
            'Callback Notification',
            'Buffer Delivery'
        ]
    },

    'Recycle Buffer': {
        title: 'Recycle Buffer to Pool',
        layer: 'HAL',
        description: '사용이 끝난 버퍼를 풀로 반환하여 재사용합니다.',
        components: [
            'Buffer Release',
            'Pool Return',
            'Memory Reuse'
        ]
    },

    'Flow End': {
        title: 'Buffer Flow End',
        layer: 'Framework',
        description: '버퍼 처리 플로우가 완료되는 시점입니다.',
        components: [
            'Flow Completion',
            'Resource Cleanup'
        ]
    },

    'Allocation Decision': {
        title: 'Buffer Allocation Decision',
        layer: 'HAL',
        description: '새로운 버퍼 할당이 필요한지 판단하는 분기점입니다.',
        components: [
            'Pool Check',
            'Allocation Need',
            'Buffer Reuse Check'
        ]
    },

    // Vendor Implementation 노드들

    'Android.bp': {
        title: 'Android.bp Build File',
        layer: 'Build System',
        description: '벤더 코덱을 빌드하기 위한 Soong 빌드 파일입니다.',
        components: [
            'cc_library_shared',
            'Shared Libraries',
            'Source Files',
            'Compiler Flags'
        ],
        path: 'vendor/<company>/codec2/Android.bp',
        doc: 'https://source.android.com/docs/setup/build',
        codeExample: `
// Android.bp 예제
cc_library_shared {
    name: "libcodec2_vendor_mycompany",
    vendor: true,

    srcs: [
        "MyAvcDecoder.cpp",
        "MyComponentStore.cpp",
    ],

    shared_libs: [
        "libcodec2",
        "libcodec2_vndk",
        "libcodec2_soft_common",
        "liblog",
        "libutils",
    ],

    cflags: [
        "-Wall",
        "-Werror",
        "-DLOG_TAG=\\"MyCodec\\"",
    ],
}
        `.trim()
    },

    'media_codecs.xml': {
        title: 'media_codecs.xml Configuration',
        layer: 'HAL Configuration',
        description: '코덱의 능력과 지원 형식을 선언하는 XML 파일입니다.',
        components: [
            'Codec Declaration',
            'Supported MIME Types',
            'Resolution Limits',
            'Feature Support'
        ],
        path: 'device/<company>/<device>/media_codecs.xml',
        doc: 'https://source.android.com/docs/core/media/codec',
        codeExample: `
<!-- media_codecs.xml 예제 -->
<MediaCodecs>
    <Decoders>
        <MediaCodec name="c2.vendor.avc.decoder" type="video/avc">
            <Limit name="size" min="64x64" max="3840x2160"/>
            <Limit name="alignment" value="2x2"/>
            <Limit name="block-size" value="16x16"/>
            <Limit name="frame-rate" range="1-60"/>
            <Limit name="bitrate" range="1-120000000"/>
            <Feature name="adaptive-playback"/>
            <Feature name="secure-playback"/>
        </MediaCodec>
    </Decoders>
</MediaCodecs>
        `.trim()
    },

    'manifest.xml': {
        title: 'HAL Manifest',
        layer: 'HAL Configuration',
        description: 'HAL 서비스를 시스템에 등록하는 매니페스트 파일입니다.',
        components: [
            'HAL Service Declaration',
            'Interface Version',
            'Service Name',
            'Transport Type'
        ],
        path: 'device/<company>/<device>/manifest.xml',
        doc: 'https://source.android.com/docs/core/architecture/vintf/objects',
        codeExample: `
<!-- manifest.xml 예제 -->
<hal format="hidl">
    <name>android.hardware.media.c2</name>
    <transport>hwbinder</transport>
    <version>1.0</version>
    <interface>
        <name>IComponentStore</name>
        <instance>vendor</instance>
    </interface>
</hal>

<!-- AIDL 버전 -->
<hal format="aidl">
    <name>android.hardware.media.c2</name>
    <fqname>IComponentStore/vendor</fqname>
</hal>
        `.trim()
    },

    'hwservicemanager': {
        title: 'HW Service Manager',
        layer: 'System Service',
        description: 'HAL 서비스를 등록하고 발견하는 시스템 서비스입니다.',
        components: [
            'Service Registry',
            'Service Discovery',
            'Binder Communication',
            'Service Lookup'
        ],
        path: 'system/hwservicemanager/',
        doc: 'https://source.android.com/docs/core/architecture/hidl/services',
        codeExample: `
// HAL 서비스 등록 확인
adb shell lshal | grep android.hardware.media.c2

// 출력 예:
// FC android.hardware.media.c2@1.0::IComponentStore/vendor
// FC android.hardware.media.c2@1.0::IComponentStore/software

// 서비스 상태 확인
adb shell dumpsys -l | grep hwservicemanager
        `.trim()
    },

    'Store Implementation': {
        title: 'C2ComponentStore Implementation',
        layer: 'Vendor',
        description: '벤더가 구현하는 C2ComponentStore 팩토리 클래스입니다.',
        components: [
            'Component Factory',
            'createComponent()',
            'listComponents()',
            'Parameter Support'
        ],
        path: 'vendor/<company>/codec2/',
        doc: 'https://source.android.com/docs/core/media/codec',
        codeExample: `
// C2ComponentStore 구현 예제
class MyComponentStore : public C2ComponentStore {
public:
    MyComponentStore()
        : mReflector(std::make_shared<C2ReflectorHelper>()) {}

    c2_status_t createComponent(
        c2_node_id_t id,
        std::shared_ptr<C2Component>* component,
        ComponentDeleter* deleter) override {

        *deleter = [](C2Component* p) { delete p; };

        if (name == "c2.vendor.avc.decoder") {
            *component = std::make_shared<MyAvcDecoder>(
                name, id, std::make_shared<IntfImpl>()
            );
            return C2_OK;
        }
        return C2_NOT_FOUND;
    }

    std::vector<std::shared_ptr<const C2Component::Traits>>
    listComponents() override {
        return {
            std::make_shared<MyAvcDecoder::Traits>(),
            std::make_shared<MyHevcDecoder::Traits>()
        };
    }
};
        `.trim()
    },

    // ========================================
    // Dolby Codecs 노드 (dolby-codecs.html)
    // ========================================

    'AudioPolicyManager': {
        title: 'AudioPolicyManager (APM)',
        layer: 'Framework',
        description: '오디오 라우팅 정책을 관리하고 Dolby 포맷에 대한 Direct Output을 설정합니다.',
        components: [
            'Audio Routing Policy',
            'Direct Output Flag',
            'Device Selection',
            'Stream Management'
        ],
        path: 'frameworks/av/services/audiopolicy/',
        doc: 'https://source.android.com/docs/core/audio',
        codeExample: `
// AudioPolicyManager.cpp에서 Dolby 포맷 처리
if (format == AUDIO_FORMAT_AC3 ||
    format == AUDIO_FORMAT_E_AC3 ||
    format == AUDIO_FORMAT_AC4) {

    // Direct Output 플래그 설정 (디코딩 없이 HDMI로 Passthrough)
    flags = (audio_output_flags_t)(
        AUDIO_OUTPUT_FLAG_DIRECT |
        AUDIO_OUTPUT_FLAG_COMPRESS_OFFLOAD
    );
}

// Dolby Atmos JOC 메타데이터 확인
if (hasAtmosMetadata(metadata)) {
    applyAtmosRouting(output, device);
}
        `.trim()
    },

    'Post Processing': {
        title: 'Dolby Audio Post Processing',
        layer: 'HAL',
        description: 'Dolby MS12 엔진을 사용한 오디오 후처리입니다.',
        components: [
            'Virtualizer (Headphone Atmos)',
            'Volume Leveler (Loudness)',
            'Dialogue Enhancement',
            'Bass Enhancement',
            'Surround Decoder'
        ],
        path: 'vendor/<company>/audio/dolby/',
        doc: 'https://professional.dolby.com/product/dolby-ms12/',
        codeExample: `
// Dolby MS12 후처리 파라미터 설정
dolby_ms12_config_t config = {
    .dap_virtualizer_enable = true,    // 헤드폰 Atmos
    .dap_mi_ieq_enable = true,         // 지능형 EQ
    .dap_dialogue_enhancer = 5,        // 대사 강화 (0-16)
    .dap_bass_enhancer = 6,            // 저음 강화 (0-10)
    .dap_volume_leveler_enable = true  // 볼륨 평준화
};

dolby_ms12_set_params(mDolbyHandle, &config);
dolby_ms12_process(mDolbyHandle, inputPCM, outputPCM, frameCount);
        `.trim()
    },

    'ALSA Driver': {
        title: 'ALSA Driver',
        layer: 'Kernel',
        description: 'Advanced Linux Sound Architecture 오디오 커널 드라이버입니다.',
        components: [
            'PCM Playback',
            'Hardware Buffer',
            'DMA Transfer',
            'Audio Device Interface'
        ],
        path: 'kernel/sound/soc/',
        doc: 'https://www.alsa-project.org/'
    },

    // Dolby Vision 메타데이터 구조

    'Base Layer': {
        title: 'Dolby Vision Base Layer (BL)',
        layer: 'Video Stream',
        description: 'SDR/HDR10 호환 베이스 비디오 레이어입니다. 8/10-bit HEVC로 인코딩됩니다.',
        components: [
            'HEVC Video Stream',
            'SDR Compatibility',
            'HDR10 Fallback',
            '8-bit or 10-bit'
        ],
        doc: 'https://professional.dolby.com/tv/dolby-vision/'
    },

    'Enhancement Layer': {
        title: 'Dolby Vision Enhancement Layer (EL)',
        layer: 'Video Stream',
        description: '추가 색상 정보를 담은 강화 레이어입니다. Profile 5/7에서 사용됩니다.',
        components: [
            'Additional Color Info',
            'Residual Data',
            'Profile 5/7 Only',
            'Optional Layer'
        ],
        doc: 'https://professional.dolby.com/tv/dolby-vision/'
    },

    'Reference Processing Unit': {
        title: 'RPU (Reference Processing Unit)',
        layer: 'Metadata',
        description: 'Dolby Vision의 동적 메타데이터로, Scene/Frame별 톤 매핑 정보를 포함합니다.',
        components: [
            'Dynamic Metadata',
            'Scene-by-Scene',
            'Frame-by-Frame',
            'Tone Mapping Parameters',
            'Color Volume',
            'Brightness Levels'
        ],
        doc: 'https://professional.dolby.com/tv/dolby-vision/',
        codeExample: `
// RPU 메타데이터 구조 (간략화)
typedef struct {
    uint8_t rpu_type;                    // 0: Frame-level, 1: Scene-level
    uint16_t target_max_luminance;       // nits (최대 밝기)
    uint16_t target_min_luminance;       // nits (최소 밝기)
    uint16_t source_max_luminance;       // Content Mastering
    uint16_t source_min_luminance;

    // Tone Mapping Curve
    uint8_t num_pivots;
    uint16_t pivots[9];
    uint16_t mapping[9];

    // Color Volume Transform
    int16_t color_matrix[3][3];

} dolby_vision_rpu_t;
        `.trim()
    },

    'DV Composer': {
        title: 'Dolby Vision Composer',
        layer: 'Decoder',
        description: 'Base Layer와 Enhancement Layer를 합성하는 컴포저입니다.',
        components: [
            'BL + EL Composition',
            'Residual Processing',
            '12-bit Internal Pipeline',
            'Color Space Conversion'
        ],
        path: 'vendor/<company>/codec2/dolby-vision/',
        doc: 'https://professional.dolby.com/tv/dolby-vision/'
    },

    'Display Manager': {
        title: 'Dolby Vision Display Manager',
        layer: 'HAL',
        description: 'RPU 메타데이터를 기반으로 디스플레이에 맞게 Tone Mapping을 수행합니다.',
        components: [
            'RPU Metadata Parsing',
            'Tone Mapping',
            'Color Volume Mapping',
            'Target Display Adaptation',
            'Brightness/Contrast Adjustment'
        ],
        path: 'vendor/<company>/display/dolby/',
        doc: 'https://professional.dolby.com/tv/dolby-vision/',
        codeExample: `
// Display Manager Tone Mapping
void DolbyVisionDisplayManager::applyToneMapping(
    const dolby_vision_rpu_t* rpu,
    const display_panel_info_t* panel,
    uint16_t* yuv_p010_frame) {

    // 타겟 디스플레이 능력
    uint16_t target_max = panel->peak_luminance;  // 예: 800 nits
    uint16_t target_min = panel->black_level;     // 예: 0.05 nits

    // RPU의 톤 매핑 커브 적용
    for (int i = 0; i < rpu->num_pivots; i++) {
        applyPivot(rpu->pivots[i], rpu->mapping[i]);
    }

    // 색역 변환 (BT.2020 → Display Native)
    transformColorVolume(rpu->color_matrix, yuv_p010_frame);

    // HDR10+ ST.2094 메타데이터 생성 (필요시)
    generateHDR10PlusMetadata(rpu, metadata);
}
        `.trim()
    },

    'HDR Screen': {
        title: 'HDR Display Panel',
        layer: 'Hardware',
        description: '10-bit 또는 12-bit HDR 디스플레이 패널입니다.',
        components: [
            '10/12-bit Panel',
            'Wide Color Gamut (P3/BT.2020)',
            'High Peak Luminance (400-1000+ nits)',
            'Local Dimming Support'
        ],
        doc: 'https://en.wikipedia.org/wiki/High-dynamic-range_video'
    },

    // Dolby 인증 프로세스 노드들

    'Development Kit': {
        title: 'Dolby Development Kit',
        layer: 'Development',
        description: 'Dolby로부터 제공받는 개발 키트 및 라이브러리입니다.',
        components: [
            'libdolbyms12.so (Audio Engine)',
            'Dolby Vision Decoder Library',
            'Sample Code & Documentation',
            'Test Streams',
            'Certification Tools'
        ],
        doc: 'https://professional.dolby.com/'
    },

    'AOSP Integration': {
        title: 'AOSP Integration Implementation',
        layer: 'Development',
        description: 'Dolby 라이브러리를 AOSP에 통합하는 구현 단계입니다.',
        components: [
            'Audio HAL Integration',
            'Codec2 DV Decoder',
            'AudioPolicyManager 수정',
            'media_codecs.xml 설정',
            'Build System (Android.bp)'
        ],
        path: 'vendor/<company>/dolby/'
    },

    'Self-Test': {
        title: 'Vendor Self-Test',
        layer: 'Testing',
        description: '벤더가 자체적으로 수행하는 테스트 단계입니다.',
        components: [
            'CTS MediaCodec Tests',
            'Dolby Sample Content Playback',
            'HDMI Passthrough Verification',
            'Dolby Vision 10-bit Output Check',
            'Performance Profiling'
        ]
    },

    'Dolby Certification Test': {
        title: 'Dolby Official Certification',
        layer: 'Testing',
        description: 'Dolby 공식 인증 테스트 프로세스입니다.',
        components: [
            'Audio Quality Test',
            'Video Quality Test',
            'Performance Test',
            'Compliance Test'
        ],
        doc: 'https://professional.dolby.com/certification/'
    },

    'Audio Test': {
        title: 'Dolby Audio Certification Test',
        layer: 'Testing',
        description: 'Dolby 오디오 코덱 및 처리 품질 테스트입니다.',
        components: [
            'AC-3/E-AC-3/AC-4 Decoding',
            'Atmos Rendering Accuracy',
            'Channel Mapping Verification',
            'Synchronization Test',
            'Dialogue Enhancement Test'
        ]
    },

    'Video Test': {
        title: 'Dolby Vision Certification Test',
        layer: 'Testing',
        description: 'Dolby Vision 비디오 품질 및 톤 매핑 테스트입니다.',
        components: [
            'Profile 5/8.1 Decoding',
            'RPU Processing Verification',
            'Tone Mapping Accuracy',
            'Color Reproduction Test',
            'Peak Luminance Validation'
        ]
    },

    'Audio Test Pass': {
        title: 'Audio Test Passed',
        layer: 'Testing',
        description: 'Dolby 오디오 인증 테스트 통과 상태입니다.',
        components: [
            'Passthrough Verified',
            'DAP Processing Verified',
            'Atmos Rendering Verified'
        ]
    },

    'Video Test Pass': {
        title: 'Video Test Passed',
        layer: 'Testing',
        description: 'Dolby Vision 인증 테스트 통과 상태입니다.',
        components: [
            'Profile Support Verified',
            'RPU Processing Verified',
            'Tone Mapping Verified'
        ]
    },

    'Certificate': {
        title: 'Dolby Certification Certificate',
        layer: 'Certification',
        description: 'Dolby로부터 발급받는 공식 인증서입니다.',
        components: [
            'Dolby Atmos Certification',
            'Dolby Vision Certification',
            'Device Model Approval',
            'Firmware Version Approval'
        ]
    },

    'Dolby Logo': {
        title: 'Dolby Logo Usage Approval',
        layer: 'Marketing',
        description: 'Dolby 로고를 제품에 사용할 수 있는 승인입니다.',
        components: [
            'Dolby Atmos Logo',
            'Dolby Vision Logo',
            'Marketing Material Guidelines',
            'Logo Placement Rules'
        ]
    },

    'Product Launch': {
        title: 'Product Launch with Dolby',
        layer: 'Production',
        description: 'Dolby 인증을 받은 제품의 시장 출시입니다.',
        components: [
            'Mass Production',
            'Retail Distribution',
            'Marketing Campaign',
            'Dolby Branding'
        ]
    },

    // ========================================
    // Media Playback Pipeline 노드 (media-playback.html)
    // ========================================

    // ExoPlayer/Media3 Components

    'Audio Decoder': {
        title: 'Audio Decoder (ExoPlayer)',
        layer: 'Application',
        description: 'ExoPlayer/Media3의 오디오 디코더 컴포넌트입니다.',
        components: [
            'MediaCodec Decoder',
            'Format Support',
            'Buffer Management',
            'Decoder Output'
        ],
        path: 'androidx.media3.exoplayer.audio',
        doc: 'https://developer.android.com/media/media3/exoplayer',
        codeExample: `
// Media3 ExoPlayer 오디오 디코더
val audioRenderer = MediaCodecAudioRenderer(
    context,
    MediaCodecSelector.DEFAULT,
    eventHandler,
    audioSink
)

// ExoPlayer에 렌더러 추가
val player = ExoPlayer.Builder(context)
    .setRenderersFactory(DefaultRenderersFactory(context))
    .build()
        `.trim()
    },

    'Audio Renderer': {
        title: 'Audio Renderer (ExoPlayer)',
        layer: 'Application',
        description: 'ExoPlayer의 오디오 렌더러로, 디코딩된 오디오를 AudioTrack으로 전달합니다.',
        components: [
            'AudioTrack Integration',
            'Audio Sink',
            'Volume Control',
            'Playback Speed'
        ],
        path: 'androidx.media3.exoplayer.audio',
        doc: 'https://developer.android.com/media/media3/exoplayer'
    },

    'Video Decoder': {
        title: 'Video Decoder (ExoPlayer)',
        layer: 'Application',
        description: 'ExoPlayer/Media3의 비디오 디코더 컴포넌트입니다.',
        components: [
            'MediaCodec Decoder',
            'Surface Rendering',
            'Codec Configuration',
            'DRM Support'
        ],
        path: 'androidx.media3.exoplayer.video',
        doc: 'https://developer.android.com/media/media3/exoplayer',
        codeExample: `
// Media3 ExoPlayer 비디오 디코더
val videoRenderer = MediaCodecVideoRenderer(
    context,
    MediaCodecSelector.DEFAULT,
    allowedVideoJoiningTimeMs,
    eventHandler,
    videoSink,
    maxDroppedFramesToNotify
)

// Surface 설정
player.setVideoSurface(surface)
        `.trim()
    },

    'Video Renderer': {
        title: 'Video Renderer (ExoPlayer)',
        layer: 'Application',
        description: 'ExoPlayer의 비디오 렌더러로, 디코딩된 프레임을 Surface로 렌더링합니다.',
        components: [
            'Surface Rendering',
            'Frame Drop Logic',
            'Video Scaling',
            'Color Space Handling'
        ],
        path: 'androidx.media3.exoplayer.video',
        doc: 'https://developer.android.com/media/media3/exoplayer'
    },

    'Generic Media Source': {
        title: 'Generic Media Source (ExoPlayer)',
        layer: 'Application',
        description: 'ExoPlayer의 일반 미디어 소스로, 파일 또는 ContentProvider URI를 재생합니다.',
        components: [
            'Local File Support',
            'ContentResolver URI',
            'Asset Loading',
            'File Descriptor'
        ],
        path: 'androidx.media3.exoplayer.source',
        doc: 'https://developer.android.com/media/media3/exoplayer',
        codeExample: `
// 로컬 파일 미디어 소스
val mediaItem = MediaItem.fromUri(uri)
val mediaSource = DefaultMediaSourceFactory(context)
    .createMediaSource(mediaItem)

player.setMediaSource(mediaSource)
player.prepare()
        `.trim()
    },

    'HTTP Media Source': {
        title: 'HTTP Media Source (ExoPlayer)',
        layer: 'Application',
        description: 'ExoPlayer의 HTTP/HTTPS 스트리밍 미디어 소스입니다.',
        components: [
            'HTTP Client',
            'Progressive Download',
            'HLS Support',
            'DASH Support',
            'Caching'
        ],
        path: 'androidx.media3.datasource.okhttp',
        doc: 'https://developer.android.com/media/media3/exoplayer',
        codeExample: `
// HTTP 미디어 소스
val dataSourceFactory = DefaultHttpDataSource.Factory()
    .setUserAgent("MyApp/1.0")
    .setConnectTimeoutMs(30000)

val mediaSource = ProgressiveMediaSource.Factory(dataSourceFactory)
    .createMediaSource(MediaItem.fromUri(httpUri))

player.setMediaSource(mediaSource)
player.prepare()
        `.trim()
    },

    'RTSP Media Source': {
        title: 'RTSP Media Source (ExoPlayer)',
        layer: 'Application',
        description: 'ExoPlayer의 RTSP 프로토콜 미디어 소스입니다.',
        components: [
            'RTSP Protocol',
            'RTP/RTCP',
            'Live Streaming',
            'IP Camera Support'
        ],
        path: 'androidx.media3.exoplayer.rtsp',
        doc: 'https://developer.android.com/media/media3/exoplayer',
        codeExample: `
// RTSP 미디어 소스
val rtspUri = Uri.parse("rtsp://example.com/stream")
val mediaItem = MediaItem.fromUri(rtspUri)
val mediaSource = RtspMediaSource.Factory()
    .createMediaSource(mediaItem)

player.setMediaSource(mediaSource)
player.prepare()
        `.trim()
    },

    'Media Source': {
        title: 'Media Source Base (ExoPlayer)',
        layer: 'Application',
        description: 'ExoPlayer의 미디어 소스 기본 인터페이스입니다.',
        components: [
            'Media Period',
            'Timeline',
            'Load Events',
            'Source Preparation'
        ],
        path: 'androidx.media3.exoplayer.source',
        doc: 'https://developer.android.com/media/media3/exoplayer'
    },

    'Track Selector': {
        title: 'Track Selector (ExoPlayer)',
        layer: 'Application',
        description: 'ExoPlayer의 트랙 선택기로, 오디오/비디오/자막 트랙을 선택합니다.',
        components: [
            'Adaptive Track Selection',
            'Bandwidth Estimation',
            'Quality Selection',
            'Language Preferences'
        ],
        path: 'androidx.media3.exoplayer.trackselection',
        doc: 'https://developer.android.com/media/media3/exoplayer',
        codeExample: `
// 트랙 선택기 설정
val trackSelector = DefaultTrackSelector(context).apply {
    parameters = buildUponParameters()
        .setMaxVideoSizeSd()  // SD 해상도로 제한
        .setPreferredAudioLanguage("ko")  // 한국어 오디오 선호
        .setPreferredTextLanguage("ko")  // 한국어 자막 선호
        .build()
}

val player = ExoPlayer.Builder(context)
    .setTrackSelector(trackSelector)
    .build()
        `.trim()
    },

    'Load Control': {
        title: 'Load Control (ExoPlayer)',
        layer: 'Application',
        description: 'ExoPlayer의 로드 제어로, 버퍼링 정책을 관리합니다.',
        components: [
            'Buffer Management',
            'Min/Max Buffer Duration',
            'Playback Start Threshold',
            'Rebuffer Detection'
        ],
        path: 'androidx.media3.exoplayer',
        doc: 'https://developer.android.com/media/media3/exoplayer',
        codeExample: `
// 로드 컨트롤 설정
val loadControl = DefaultLoadControl.Builder()
    .setBufferDurationsMs(
        15000,  // minBufferMs
        50000,  // maxBufferMs
        2500,   // bufferForPlaybackMs
        5000    // bufferForPlaybackAfterRebufferMs
    )
    .build()

val player = ExoPlayer.Builder(context)
    .setLoadControl(loadControl)
    .build()
        `.trim()
    },

    'Text Renderer': {
        title: 'Text Renderer (ExoPlayer)',
        layer: 'Application',
        description: 'ExoPlayer의 자막 렌더러입니다.',
        components: [
            'SubRip (SRT)',
            'WebVTT',
            'TTML',
            'Closed Captions',
            'Subtitle Overlay'
        ],
        path: 'androidx.media3.exoplayer.text',
        doc: 'https://developer.android.com/media/media3/exoplayer'
    },

    // NuPlayer Components

    'NuPlayer Main': {
        title: 'NuPlayer Main Engine',
        layer: 'Native',
        description: 'AOSP의 기본 미디어 플레이어 엔진입니다. MediaPlayer API의 백엔드 구현체입니다.',
        components: [
            'State Machine',
            'Source Management',
            'Renderer Management',
            'Decoder Management',
            'A/V Sync'
        ],
        path: 'frameworks/av/media/libmediaplayerservice/nuplayer/',
        doc: 'https://source.android.com/docs/core/media',
        codeExample: `
// NuPlayer 초기화 (internal)
sp<NuPlayer> player = new NuPlayer(audioSink);
player->setDriver(driver);

// 데이터 소스 설정
sp<IMediaHTTPService> httpService = ...;
sp<IDataSource> dataSource = ...;
player->setDataSourceAsync(httpService, url, headers);

// 재생 시작
player->start();
        `.trim()
    },

    'Playback Thread': {
        title: 'NuPlayer Playback Thread',
        layer: 'Native',
        description: 'NuPlayer의 메인 재생 스레드로, 디코더와 렌더러를 조율합니다.',
        components: [
            'Message Loop',
            'Event Handling',
            'Decoder Coordination',
            'Renderer Coordination',
            'Seek Handling'
        ],
        path: 'frameworks/av/media/libmediaplayerservice/nuplayer/',
        doc: 'https://source.android.com/docs/core/media'
    },

    'Player API': {
        title: 'MediaPlayer API',
        layer: 'Framework',
        description: 'Android MediaPlayer의 Java/Kotlin API 레이어입니다.',
        components: [
            'setDataSource()',
            'prepare() / prepareAsync()',
            'start() / pause() / stop()',
            'seekTo()',
            'Listener Callbacks'
        ],
        path: 'frameworks/base/media/java/android/media/MediaPlayer.java',
        doc: 'https://developer.android.com/reference/android/media/MediaPlayer',
        codeExample: `
// MediaPlayer 사용 예제
val mediaPlayer = MediaPlayer().apply {
    setDataSource(context, uri)
    setOnPreparedListener {
        start()
    }
    setOnCompletionListener {
        release()
    }
    setOnErrorListener { mp, what, extra ->
        Log.e(TAG, "Error: what=$what, extra=$extra")
        true
    }
    prepareAsync()
}
        `.trim()
    },

    'Audio Sink': {
        title: 'Audio Sink',
        layer: 'Native',
        description: 'NuPlayer의 오디오 출력 싱크로, AudioTrack으로 PCM 데이터를 전달합니다.',
        components: [
            'AudioTrack Management',
            'PCM Buffer',
            'Volume Control',
            'Audio Effects'
        ],
        path: 'frameworks/av/media/libmediaplayerservice/nuplayer/',
        doc: 'https://source.android.com/docs/core/media'
    },

    'Audio PTS': {
        title: 'Audio Presentation Timestamp',
        layer: 'Native',
        description: '오디오 프레임의 재생 타임스탬프입니다.',
        components: [
            'Timestamp Calculation',
            'Audio Clock',
            'Sample Rate',
            'Frame Count'
        ]
    },

    'Audio Render': {
        title: 'Audio Renderer (NuPlayer)',
        layer: 'Native',
        description: 'NuPlayer의 오디오 렌더러로, 디코딩된 PCM을 AudioSink로 전달합니다.',
        components: [
            'Audio Decoder Output',
            'AudioSink Integration',
            'A/V Sync',
            'Audio Delay'
        ],
        path: 'frameworks/av/media/libmediaplayerservice/nuplayer/NuPlayerRenderer.cpp',
        doc: 'https://source.android.com/docs/core/media'
    },

    'Video PTS': {
        title: 'Video Presentation Timestamp',
        layer: 'Native',
        description: '비디오 프레임의 재생 타임스탬프입니다.',
        components: [
            'Timestamp Calculation',
            'Frame Rate',
            'Display Time',
            'Vsync Sync'
        ]
    },

    'Video Render': {
        title: 'Video Renderer (NuPlayer)',
        layer: 'Native',
        description: 'NuPlayer의 비디오 렌더러로, 디코딩된 프레임을 Surface로 렌더링합니다.',
        components: [
            'Video Decoder Output',
            'Surface Rendering',
            'Frame Drop/Duplicate',
            'A/V Sync'
        ],
        path: 'frameworks/av/media/libmediaplayerservice/nuplayer/NuPlayerRenderer.cpp',
        doc: 'https://source.android.com/docs/core/media'
    },

    // MediaSync Components

    'MediaSync': {
        title: 'MediaSync (A/V Synchronization)',
        layer: 'Native',
        description: '오디오와 비디오의 동기화를 담당하는 컴포넌트입니다.',
        components: [
            'Audio Master Clock',
            'Video Slave Clock',
            'PTS Comparison',
            'Frame Drop/Duplicate Logic',
            'Playback Rate Control'
        ],
        path: 'frameworks/av/media/libstagefright/',
        doc: 'https://source.android.com/docs/core/media',
        codeExample: `
// MediaSync 사용 (internal)
sp<MediaSync> sync = new MediaSync();

// 오디오 트랙 설정 (마스터 클럭)
sync->setAudioTrack(audioTrack);

// 비디오 프레임 큐잉
sync->queueBuffer(buffer, pts);

// 동기화 상태 확인
MediaSync::SyncMode mode;
sync->getSyncMode(&mode);
        `.trim()
    },

    'Compare PTS': {
        title: 'Compare Presentation Timestamps',
        layer: 'Native',
        description: '오디오와 비디오 PTS를 비교하여 동기화 오차를 계산합니다.',
        components: [
            'Audio PTS',
            'Video PTS',
            'Sync Threshold',
            'Drift Detection'
        ]
    },

    'Drop Frame': {
        title: 'Drop Video Frame',
        layer: 'Native',
        description: '비디오가 오디오보다 늦을 때 프레임을 드롭합니다.',
        components: [
            'Late Frame Detection',
            'Drop Decision',
            'Statistics Tracking'
        ]
    },

    'Duplicate Frame': {
        title: 'Duplicate Video Frame',
        layer: 'Native',
        description: '비디오가 오디오보다 빠를 때 프레임을 복제하여 지연시킵니다.',
        components: [
            'Early Frame Detection',
            'Duplicate Decision',
            'Frame Hold'
        ]
    },

    'Normal Playback': {
        title: 'Normal Playback Mode',
        layer: 'Native',
        description: '오디오와 비디오가 정상적으로 동기화된 재생 모드입니다.',
        components: [
            'Sync Within Threshold',
            'Normal Rendering',
            'No Adjustment'
        ]
    },

    // Misc Components

    'Legacy App': {
        title: 'Legacy Application',
        layer: 'Application',
        description: 'Android 10 이전의 레거시 스토리지 접근 방식을 사용하는 앱입니다.',
        components: [
            'Direct File Path',
            'READ_EXTERNAL_STORAGE',
            'WRITE_EXTERNAL_STORAGE',
            'Legacy Storage Flag'
        ]
    },

    'Platform App': {
        title: 'Platform Application',
        layer: 'Application',
        description: 'Scoped Storage를 사용하는 최신 Android 앱입니다.',
        components: [
            'MediaStore API',
            'ContentResolver',
            'Scoped Storage',
            'File Access via URI'
        ]
    },

    // ========================================
    // MediaExtractor & Container Parsing 노드 (media-extractor.html)
    // ========================================

    'Data Source': {
        title: 'Data Source',
        layer: 'Framework',
        description: '미디어 데이터를 읽어오는 소스 추상화 레이어입니다.',
        components: [
            'File Descriptor',
            'Content URI',
            'HTTP/HTTPS Stream',
            'RTSP Stream',
            'Asset File'
        ],
        path: 'frameworks/av/media/libstagefright/',
        doc: 'https://source.android.com/docs/core/media',
        codeExample: `
// MediaExtractor에 데이터 소스 설정
val extractor = MediaExtractor()

// 방법 1: 파일 경로
extractor.setDataSource(filePath)

// 방법 2: Content URI
extractor.setDataSource(context, uri, null)

// 방법 3: File Descriptor
val pfd = contentResolver.openFileDescriptor(uri, "r")
extractor.setDataSource(pfd!!.fileDescriptor)

// 방법 4: HTTP URL
extractor.setDataSource(httpUrl, headers)
        `.trim()
    },

    'Extractor Factory': {
        title: 'MediaExtractor Factory',
        layer: 'Framework',
        description: '컨테이너 형식에 맞는 적절한 파서를 선택하는 팩토리입니다.',
        components: [
            'Format Detection',
            'Parser Selection',
            'Plugin Loading',
            'Extractor Creation'
        ],
        path: 'frameworks/av/media/libstagefright/MediaExtractorFactory.cpp',
        doc: 'https://source.android.com/docs/core/media',
        codeExample: `
// MediaExtractorFactory 내부 동작 (C++)
sp<IMediaExtractor> MediaExtractorFactory::Create(
    const sp<IDataSource>& dataSource) {

    // 컨테이너 형식 탐지
    float confidence = 0;
    sp<IMediaExtractor> ret;

    // 등록된 모든 extractor 플러그인 시도
    for (auto& plugin : mExtractorPlugins) {
        float thisConfidence = plugin->sniff(dataSource);
        if (thisConfidence > confidence) {
            confidence = thisConfidence;
            ret = plugin->create(dataSource);
        }
    }

    return ret;  // 가장 높은 confidence의 extractor 반환
}
        `.trim()
    },

    'File Descriptor': {
        title: 'File Descriptor',
        layer: 'OS',
        description: '파일 시스템에서 미디어 파일을 가리키는 파일 디스크립터입니다.',
        components: [
            'FD Number',
            'Offset & Length',
            'Seekable',
            'Parcelable'
        ],
        doc: 'https://developer.android.com/reference/android/os/ParcelFileDescriptor',
        codeExample: `
// ParcelFileDescriptor로 미디어 파일 열기
val contentUri = MediaStore.Audio.Media.EXTERNAL_CONTENT_URI
val cursor = contentResolver.query(contentUri, null, null, null, null)
cursor?.use {
    if (it.moveToFirst()) {
        val id = it.getLong(it.getColumnIndexOrThrow(MediaStore.Audio.Media._ID))
        val uri = ContentUris.withAppendedId(contentUri, id)

        val pfd = contentResolver.openFileDescriptor(uri, "r")
        val fd = pfd!!.fileDescriptor

        mediaPlayer.setDataSource(fd)
        pfd.close()
    }
}
        `.trim()
    },

    'Metadata': {
        title: 'Media Metadata',
        layer: 'Framework',
        description: '미디어 파일의 메타데이터 정보입니다.',
        components: [
            'Duration',
            'Track Count',
            'MIME Type',
            'Bitrate',
            'Frame Rate',
            'Sample Rate',
            'Album Art'
        ],
        path: 'frameworks/av/media/libstagefright/',
        doc: 'https://developer.android.com/reference/android/media/MediaMetadataRetriever',
        codeExample: `
// MediaMetadataRetriever로 메타데이터 추출
val retriever = MediaMetadataRetriever()
retriever.setDataSource(context, uri)

val duration = retriever.extractMetadata(MediaMetadataRetriever.METADATA_KEY_DURATION)
val title = retriever.extractMetadata(MediaMetadataRetriever.METADATA_KEY_TITLE)
val artist = retriever.extractMetadata(MediaMetadataRetriever.METADATA_KEY_ARTIST)
val album = retriever.extractMetadata(MediaMetadataRetriever.METADATA_KEY_ALBUM)
val albumArt = retriever.embeddedPicture  // Bitmap

retriever.release()
        `.trim()
    },

    'MediaExtractor API': {
        title: 'MediaExtractor API',
        layer: 'Framework',
        description: 'Android의 MediaExtractor Java/Kotlin API입니다.',
        components: [
            'setDataSource()',
            'getTrackCount()',
            'getTrackFormat()',
            'selectTrack()',
            'readSampleData()',
            'getSampleTime()',
            'seekTo()'
        ],
        path: 'frameworks/base/media/java/android/media/MediaExtractor.java',
        doc: 'https://developer.android.com/reference/android/media/MediaExtractor',
        codeExample: `
// MediaExtractor 사용 예제
val extractor = MediaExtractor()
extractor.setDataSource(context, uri, null)

// 트랙 선택
for (i in 0 until extractor.trackCount) {
    val format = extractor.getTrackFormat(i)
    val mime = format.getString(MediaFormat.KEY_MIME) ?: continue

    if (mime.startsWith("video/")) {
        extractor.selectTrack(i)
        break
    }
}

// 샘플 읽기
val buffer = ByteBuffer.allocate(1024 * 1024)
while (true) {
    val sampleSize = extractor.readSampleData(buffer, 0)
    if (sampleSize < 0) break

    val presentationTimeUs = extractor.sampleTime
    val flags = extractor.sampleFlags

    // 샘플 처리...

    extractor.advance()
}

extractor.release()
        `.trim()
    },

    'MediaExtractor Implementation': {
        title: 'MediaExtractor Native Implementation',
        layer: 'Native',
        description: 'MediaExtractor의 네이티브 C++ 구현체입니다.',
        components: [
            'NuMediaExtractor',
            'MPEG4Extractor',
            'MatroskaExtractor',
            'WebMExtractor',
            'Track Management',
            'Sample Buffer'
        ],
        path: 'frameworks/av/media/libstagefright/',
        doc: 'https://source.android.com/docs/core/media'
    },

    'MKV Parser': {
        title: 'Matroska (MKV) Parser',
        layer: 'Native',
        description: 'Matroska/MKV 컨테이너 파서입니다.',
        components: [
            'EBML Parser',
            'Cluster Reading',
            'Track Parsing',
            'Segment Info',
            'Cue Points (Seek)',
            'Subtitle Support'
        ],
        path: 'frameworks/av/media/libstagefright/matroska/',
        doc: 'https://www.matroska.org/technical/specs/index.html',
        codeExample: `
// MKV 컨테이너 구조
/*
EBML Header
  - DocType: "matroska"
  - DocTypeVersion: 4

Segment
  - SeekHead (인덱스)
  - Info (duration, timescale)
  - Tracks
    - TrackEntry (video)
      - CodecID: "V_MPEG4/ISO/AVC"
    - TrackEntry (audio)
      - CodecID: "A_AAC"
  - Cluster
    - SimpleBlock (video frames)
    - SimpleBlock (audio frames)
  - Cues (seek points)
*/
        `.trim()
    },

    'MP4 Parser': {
        title: 'MP4 (ISO BMFF) Parser',
        layer: 'Native',
        description: 'MPEG-4 Part 14 (MP4) 컨테이너 파서입니다.',
        components: [
            'Box (Atom) Parser',
            'ftyp (File Type)',
            'moov (Movie Header)',
            'mdat (Media Data)',
            'trak (Track)',
            'stbl (Sample Table)',
            'Fast Start Support'
        ],
        path: 'frameworks/av/media/libstagefright/MPEG4Extractor.cpp',
        doc: 'https://www.iso.org/standard/68960.html',
        codeExample: `
// MP4 Box 구조 (ISO BMFF)
/*
ftyp: File Type Box
  - major_brand: "isom"
  - compatible_brands: ["isom", "iso2", "avc1", "mp41"]

moov: Movie Box
  - mvhd: Movie Header (duration, timescale)
  - trak: Track Box (video)
    - tkhd: Track Header
    - mdia: Media Box
      - mdhd: Media Header
      - hdlr: Handler (vide)
      - minf: Media Info
        - stbl: Sample Table
          - stsd: Sample Description (avc1)
          - stts: Time-to-Sample
          - stss: Sync Sample (I-frames)
          - stsc: Sample-to-Chunk
          - stsz: Sample Size
          - stco: Chunk Offset
  - trak: Track Box (audio)
    - ... (similar structure)

mdat: Media Data Box
  - Raw audio/video samples
*/
        `.trim()
    },

    'WebM Parser': {
        title: 'WebM Parser',
        layer: 'Native',
        description: 'WebM 컨테이너 파서입니다 (MKV 기반).',
        components: [
            'EBML Parser',
            'VP8/VP9 Video',
            'Vorbis/Opus Audio',
            'Web Optimized',
            'Streaming Support'
        ],
        path: 'frameworks/av/media/libstagefright/webm/',
        doc: 'https://www.webmproject.org/docs/container/',
        codeExample: `
// WebM은 Matroska의 서브셋
/*
제약 사항:
- DocType: "webm"
- Video Codec: VP8, VP9, AV1만 허용
- Audio Codec: Vorbis, Opus만 허용
- 스트리밍 최적화 (Cues 필수)
- 단순화된 구조
*/

// Android에서 WebM 지원
val format = MediaFormat()
format.setString(MediaFormat.KEY_MIME, "video/x-vnd.on2.vp9")
format.setInteger(MediaFormat.KEY_WIDTH, 1920)
format.setInteger(MediaFormat.KEY_HEIGHT, 1080)
        `.trim()
    },

    'Other Parser': {
        title: 'Other Container Parsers',
        layer: 'Native',
        description: '기타 컨테이너 포맷 파서입니다.',
        components: [
            '3GP Parser',
            'FLV Parser',
            'OGG Parser',
            'TS Parser (MPEG-TS)',
            'FLAC Parser',
            'WAV Parser'
        ],
        path: 'frameworks/av/media/libstagefright/',
        doc: 'https://source.android.com/docs/core/media'
    },

    'Sample Reader': {
        title: 'Sample Reader',
        layer: 'Native',
        description: '컨테이너에서 오디오/비디오 샘플을 읽어오는 컴포넌트입니다.',
        components: [
            'Sample Extraction',
            'Buffer Management',
            'Timestamp Calculation',
            'Flag Processing (Sync, EOS)',
            'Seek Support'
        ],
        path: 'frameworks/av/media/libstagefright/',
        doc: 'https://source.android.com/docs/core/media',
        codeExample: `
// Sample 읽기 흐름 (내부 구현)
class SampleReader {
    MediaBufferBase* buffer;
    int64_t timeUs;
    uint32_t flags;

    status_t readSample() {
        // 1. 다음 샘플의 위치 계산 (Sample Table 참조)
        off64_t offset = getSampleOffset(mCurrentSample);
        size_t size = getSampleSize(mCurrentSample);

        // 2. mdat box에서 샘플 데이터 읽기
        mDataSource->readAt(offset, buffer->data(), size);

        // 3. 타임스탬프 계산
        timeUs = getSampleTime(mCurrentSample);

        // 4. 플래그 설정 (Sync Sample 여부)
        flags = isSyncSample(mCurrentSample) ?
                MediaExtractor::SAMPLE_FLAG_SYNC : 0;

        mCurrentSample++;
        return OK;
    }
};
        `.trim()
    },

    'Stream Source': {
        title: 'Stream Source',
        layer: 'Network',
        description: 'HTTP/RTSP 등 스트리밍 소스에서 데이터를 가져옵니다.',
        components: [
            'HTTP Client',
            'Progressive Download',
            'Adaptive Streaming (DASH/HLS)',
            'Buffer Caching',
            'Range Requests'
        ],
        path: 'frameworks/av/media/libstagefright/httplive/',
        doc: 'https://source.android.com/docs/core/media',
        codeExample: `
// HTTP 스트리밍 DataSource 설정
val httpDataSource = DefaultHttpDataSource.Factory()
    .setUserAgent("MyApp/1.0")
    .setConnectTimeoutMs(30000)
    .setReadTimeoutMs(30000)
    .setAllowCrossProtocolRedirects(true)
    .createDataSource()

// Progressive Download
val uri = Uri.parse("https://example.com/video.mp4")
val dataSpec = DataSpec(uri)
httpDataSource.open(dataSpec)

val buffer = ByteArray(1024 * 1024)
var bytesRead = httpDataSource.read(buffer, 0, buffer.size)
        `.trim()
    },

    // ========================================
    // MediaSession 노드 (mediasession.html)
    // ========================================

    'Android Auto System': {
        title: 'Android Auto System Service',
        layer: 'System',
        description: 'Android Auto의 시스템 서비스로, MediaSession을 관리합니다.',
        components: [
            'Session Discovery',
            'Priority Management',
            'Projection Service',
            'Display Integration'
        ],
        path: 'packages/apps/Car/',
        doc: 'https://developer.android.com/training/cars/media'
    },

    'Android Auto UI': {
        title: 'Android Auto UI',
        layer: 'Application',
        description: 'Android Auto의 미디어 UI로, MediaSession 정보를 표시합니다.',
        components: [
            'Media Browser',
            'Playback Controls',
            'Queue Display',
            'Album Art',
            'Voice Commands'
        ],
        doc: 'https://developer.android.com/training/cars/media',
        codeExample: `
// Android Auto MediaBrowserService 구현
class MyMusicService : MediaBrowserServiceCompat() {

    override fun onGetRoot(
        clientPackageName: String,
        clientUid: Int,
        rootHints: Bundle?
    ): BrowserRoot? {

        // Android Auto 클라이언트 인증
        if (clientPackageName == "com.google.android.projection.gearhead") {
            return BrowserRoot(MEDIA_ROOT_ID, null)
        }
        return null
    }

    override fun onLoadChildren(
        parentId: String,
        result: Result<MutableList<MediaBrowserCompat.MediaItem>>
    ) {
        // 미디어 아이템 목록 반환
        result.sendResult(mediaItems)
    }
}
        `.trim()
    },

    'Wear OS System': {
        title: 'Wear OS System Service',
        layer: 'System',
        description: 'Wear OS의 시스템 서비스로, MediaSession을 관리합니다.',
        components: [
            'Session Discovery',
            'Notification Sync',
            'Companion App Link',
            'Bluetooth Control'
        ],
        path: 'frameworks/base/services/core/',
        doc: 'https://developer.android.com/training/wearables/apps/media'
    },

    'Wear OS UI': {
        title: 'Wear OS UI',
        layer: 'Application',
        description: 'Wear OS의 미디어 UI로, MediaSession 정보를 표시합니다.',
        components: [
            'Media Controls',
            'Notification Card',
            'Volume Control',
            'Complication (Watch Face)'
        ],
        doc: 'https://developer.android.com/training/wearables/apps/media',
        codeExample: `
// Wear OS MediaSession 컨트롤
class WearMediaActivity : ComponentActivity() {
    private lateinit var mediaController: MediaControllerCompat

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // MediaSession 연결
        val mediaBrowser = MediaBrowserCompat(
            this,
            ComponentName(this, MyMusicService::class.java),
            object : MediaBrowserCompat.ConnectionCallback() {
                override fun onConnected() {
                    val sessionToken = mediaBrowser.sessionToken
                    mediaController = MediaControllerCompat(
                        this@WearMediaActivity, sessionToken
                    )

                    MediaControllerCompat.setMediaController(
                        this@WearMediaActivity, mediaController
                    )
                }
            },
            null
        )
        mediaBrowser.connect()

        setContent {
            MediaControlScreen(mediaController)
        }
    }
}
        `.trim()
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

    'External Storage': {
        title: 'External Storage',
        layer: 'Storage',
        description: 'SD 카드 또는 내장 공유 저장소입니다. Android 10+에서는 Scoped Storage로 접근이 제한됩니다.',
        components: [
            '/storage/emulated/0/ (Primary)',
            '/storage/[UUID]/ (Secondary)',
            'DCIM/, Pictures/, Music/, Movies/ 등',
            'Scoped Storage (Android 10+)',
            'MANAGE_EXTERNAL_STORAGE (Android 11+)'
        ],
        doc: 'https://developer.android.com/training/data-storage',
        codeExample: `
// Android 10+ Scoped Storage
val contentValues = ContentValues().apply {
    put(MediaStore.MediaColumns.DISPLAY_NAME, "photo.jpg")
    put(MediaStore.MediaColumns.MIME_TYPE, "image/jpeg")
    put(MediaStore.MediaColumns.RELATIVE_PATH, Environment.DIRECTORY_DCIM)
}

val uri = contentResolver.insert(
    MediaStore.Images.Media.EXTERNAL_CONTENT_URI,
    contentValues
)

uri?.let {
    contentResolver.openOutputStream(it)?.use { outputStream ->
        // 파일 쓰기
    }
}
        `.trim()
    },

    'Internal Storage': {
        title: 'Internal Storage',
        layer: 'Storage',
        description: '앱 전용 내부 저장소입니다. 다른 앱이나 사용자가 직접 접근할 수 없습니다.',
        components: [
            '/data/data/[package_name]/',
            'files/ - getFilesDir()',
            'cache/ - getCacheDir()',
            'databases/ - SQLite',
            'shared_prefs/ - SharedPreferences',
            'Private (uninstall 시 삭제)'
        ],
        path: 'frameworks/base/core/java/android/app/ContextImpl.java',
        doc: 'https://developer.android.com/training/data-storage/app-specific',
        codeExample: `
// Internal Storage 파일 쓰기
val file = File(context.filesDir, "myfile.txt")
file.writeText("Hello, World!")

// Internal Storage 파일 읽기
val text = file.readText()

// 캐시 파일 (시스템이 자동 정리 가능)
val cacheFile = File(context.cacheDir, "temp.dat")
        `.trim()
    },

    'FUSE Daemon': {
        title: 'FUSE Daemon (File System in Userspace)',
        layer: 'Native Daemon',
        description: 'Android 11+에서 MediaProvider가 저장소 접근을 제어하는 FUSE 기반 파일시스템입니다.',
        components: [
            'Scoped Storage 강제 적용',
            'File Redaction (위치 정보 제거)',
            'Permission Check',
            'MediaProvider 통합',
            '/storage/emulated mount'
        ],
        path: 'packages/providers/MediaProvider/jni/FuseDaemon.cpp',
        doc: 'https://source.android.com/docs/core/storage/scoped',
        codeExample: `
// FUSE가 파일 접근을 가로챔
/*
앱이 /storage/emulated/0/DCIM/photo.jpg 접근 시:
1. FUSE Daemon이 요청 가로챔
2. MediaProvider에 권한 확인
3. 권한 있으면 실제 파일 반환
4. 권한 없으면 EACCES 에러
*/

// READ_MEDIA_IMAGES 권한 없이 접근 시
val file = File("/storage/emulated/0/DCIM/photo.jpg")
file.exists() // false (FUSE가 숨김)
        `.trim()
    },

    'Legacy File System': {
        title: 'Legacy File System Access',
        layer: 'Storage Access',
        description: 'Android 9 이하에서 사용하던 직접 파일 접근 방식입니다.',
        components: [
            'File() 직접 접근',
            'java.io.FileInputStream',
            'java.io.FileOutputStream',
            'WRITE_EXTERNAL_STORAGE 권한',
            'READ_EXTERNAL_STORAGE 권한',
            'Android 10+에서 deprecated'
        ],
        doc: 'https://developer.android.com/about/versions/10/privacy/changes#scoped-storage',
        codeExample: `
// Legacy 방식 (Android 9 이하)
// Manifest에 권한 선언:
// <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>

val file = File(Environment.getExternalStorageDirectory(), "DCIM/photo.jpg")
if (file.exists()) {
    val inputStream = FileInputStream(file)
    // 직접 파일 읽기
}

// Android 10+에서는 MediaStore API 사용 필요
// Legacy 방식은 requestLegacyExternalStorage="true"로만 가능
        `.trim()
    },

    'Legacy Permissions': {
        title: 'Legacy Storage Permissions',
        layer: 'Permissions',
        description: 'Android 9 이하에서 사용하던 저장소 권한 시스템입니다.',
        components: [
            'READ_EXTERNAL_STORAGE',
            'WRITE_EXTERNAL_STORAGE',
            'Runtime Permission (Android 6+)',
            'Full Storage Access',
            'Android 10+에서 제한적'
        ],
        doc: 'https://developer.android.com/training/permissions/requesting',
        codeExample: `
// Android 9 이하 권한 요청
if (ContextCompat.checkSelfPermission(this,
        Manifest.permission.WRITE_EXTERNAL_STORAGE)
    != PackageManager.PERMISSION_GRANTED) {

    ActivityCompat.requestPermissions(this,
        arrayOf(Manifest.permission.WRITE_EXTERNAL_STORAGE),
        REQUEST_CODE)
}

// Android 10+에서는 Scoped Storage 사용
// 또는 MANAGE_EXTERNAL_STORAGE (특수 권한)
        `.trim()
    },

    'Scoped Storage App': {
        title: 'Scoped Storage App Access',
        layer: 'Storage Access',
        description: 'Android 10+에서 앱이 저장소에 접근하는 제한된 방식입니다.',
        components: [
            'MediaStore API 사용',
            '앱별 디렉토리 직접 접근',
            'SAF (Storage Access Framework)',
            'Photo Picker (Android 13+)',
            'No Full Storage Access'
        ],
        doc: 'https://developer.android.com/training/data-storage#scoped-storage',
        codeExample: `
// Scoped Storage - MediaStore로 이미지 로드
val projection = arrayOf(MediaStore.Images.Media._ID, MediaStore.Images.Media.DISPLAY_NAME)
val cursor = contentResolver.query(
    MediaStore.Images.Media.EXTERNAL_CONTENT_URI,
    projection,
    null,
    null,
    null
)

cursor?.use {
    while (it.moveToNext()) {
        val id = it.getLong(it.getColumnIndexOrThrow(MediaStore.Images.Media._ID))
        val uri = ContentUris.withAppendedId(
            MediaStore.Images.Media.EXTERNAL_CONTENT_URI, id
        )
        // URI로 이미지 접근
    }
}
        `.trim()
    },

    'Scoped Media Access': {
        title: 'Scoped Media Access',
        layer: 'Permissions',
        description: 'Android 13+에서 도입된 세분화된 미디어 권한입니다.',
        components: [
            'READ_MEDIA_IMAGES',
            'READ_MEDIA_VIDEO',
            'READ_MEDIA_AUDIO',
            'READ_MEDIA_VISUAL_USER_SELECTED (Android 14+)',
            '미디어 타입별 권한'
        ],
        doc: 'https://developer.android.com/about/versions/13/behavior-changes-13#granular-media-permissions',
        codeExample: `
// Android 13+ 세분화된 권한
val permissions = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
    arrayOf(
        Manifest.permission.READ_MEDIA_IMAGES,
        Manifest.permission.READ_MEDIA_VIDEO,
        Manifest.permission.READ_MEDIA_AUDIO
    )
} else {
    arrayOf(Manifest.permission.READ_EXTERNAL_STORAGE)
}

ActivityCompat.requestPermissions(this, permissions, REQUEST_CODE)

// Android 14+ Partial Access (일부 사진만 선택)
if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.UPSIDE_DOWN_CAKE) {
    // READ_MEDIA_VISUAL_USER_SELECTED 사용
}
        `.trim()
    },

    'Scoped Own Files': {
        title: 'Scoped Own Files Access',
        layer: 'Storage Access',
        description: '앱이 자신이 생성한 파일에 대한 직접 접근 권한입니다.',
        components: [
            'App-Created Files',
            'No Permission Required',
            'MediaStore.IS_PENDING',
            'Automatic Access',
            'Delete/Modify 가능'
        ],
        doc: 'https://developer.android.com/training/data-storage/shared/media#own-files',
        codeExample: `
// 앱이 생성한 파일은 권한 없이 접근 가능
val contentValues = ContentValues().apply {
    put(MediaStore.MediaColumns.DISPLAY_NAME, "my_photo.jpg")
    put(MediaStore.MediaColumns.MIME_TYPE, "image/jpeg")
    put(MediaStore.MediaColumns.IS_PENDING, 1) // 작성 중
}

val uri = contentResolver.insert(
    MediaStore.Images.Media.EXTERNAL_CONTENT_URI,
    contentValues
)

uri?.let {
    contentResolver.openOutputStream(it)?.use { stream ->
        // 파일 쓰기
    }

    // 작성 완료 표시
    contentValues.clear()
    contentValues.put(MediaStore.MediaColumns.IS_PENDING, 0)
    contentResolver.update(it, contentValues, null, null)
}

// 이후 이 파일은 권한 없이 수정/삭제 가능
        `.trim()
    },

    'Storage Access Framework': {
        title: 'Storage Access Framework (SAF)',
        layer: 'Framework',
        description: '사용자가 파일을 선택하는 시스템 UI를 통한 저장소 접근 방식입니다.',
        components: [
            'ACTION_OPEN_DOCUMENT',
            'ACTION_CREATE_DOCUMENT',
            'ACTION_OPEN_DOCUMENT_TREE',
            'Document Provider',
            'User-Granted Access',
            'No Permission Required'
        ],
        path: 'frameworks/base/core/java/android/provider/DocumentsContract.java',
        doc: 'https://developer.android.com/guide/topics/providers/document-provider',
        codeExample: `
// SAF로 파일 선택 (권한 불필요)
val intent = Intent(Intent.ACTION_OPEN_DOCUMENT).apply {
    addCategory(Intent.CATEGORY_OPENABLE)
    type = "image/*"
}
startActivityForResult(intent, REQUEST_CODE)

// Result 처리
override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
    if (requestCode == REQUEST_CODE && resultCode == RESULT_OK) {
        data?.data?.let { uri ->
            // URI로 파일 접근 (권한 자동 부여)
            contentResolver.openInputStream(uri)?.use { stream ->
                // 파일 읽기
            }
        }
    }
}

// 폴더 전체 접근 (Android 5.0+)
val treeIntent = Intent(Intent.ACTION_OPEN_DOCUMENT_TREE)
startActivityForResult(treeIntent, TREE_REQUEST_CODE)
        `.trim()
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
    },

    // ========================================
    // AOSP 추가 노드 (aosp.html) - Card 1
    // ========================================

    'System Services': {
        title: 'System Services',
        layer: 'Framework',
        description: 'system_server 프로세스에서 실행되는 핵심 시스템 서비스들입니다.',
        components: [
            'ActivityManagerService (AMS)',
            'WindowManagerService (WMS)',
            'PackageManagerService (PMS)',
            'NotificationManagerService',
            'PowerManagerService',
            'LocationManagerService'
        ],
        path: 'frameworks/base/services/core/java/com/android/server/',
        doc: 'https://source.android.com/docs/core/architecture/services'
    },

    'Application Layer': {
        title: 'Application Layer',
        layer: 'Application',
        description: 'Android 앱이 실행되는 최상위 레이어입니다.',
        components: [
            'System Apps',
            'Third-party Apps',
            'Activity',
            'Service',
            'Broadcast Receiver',
            'Content Provider'
        ],
        doc: 'https://developer.android.com/guide/components/fundamentals'
    },

    'HAL Layer': {
        title: 'HAL Layer',
        layer: 'HAL',
        description: '하드웨어 추상화 레이어로, 벤더별 하드웨어 구현을 추상화합니다.',
        components: [
            'Audio HAL',
            'Camera HAL',
            'Sensors HAL',
            'Graphics HAL',
            'Codec HAL',
            'Vehicle HAL (AAOS)'
        ],
        path: 'hardware/interfaces/',
        doc: 'https://source.android.com/docs/core/architecture/hal'
    },

    'SurfaceFlinger': {
        title: 'SurfaceFlinger',
        layer: 'Native Service',
        description: '모든 화면 레이어를 합성하여 최종 화면을 생성하는 시스템 서비스입니다.',
        components: [
            'Layer Composition',
            'VSync Handling',
            'Buffer Management',
            'HWC Integration',
            'Display Management'
        ],
        path: 'frameworks/native/services/surfaceflinger/',
        doc: 'https://source.android.com/docs/core/graphics/surfaceflinger-windowmanager',
        codeExample: `
// Surface 생성 및 사용
val surfaceView = SurfaceView(context)
val holder = surfaceView.holder

holder.addCallback(object : SurfaceHolder.Callback {
    override fun surfaceCreated(holder: SurfaceHolder) {
        val canvas = holder.lockCanvas()
        // 그리기 작업
        holder.unlockCanvasAndPost(canvas)
    }
})
        `.trim()
    },

    'AudioFlinger': {
        title: 'AudioFlinger',
        layer: 'Native Service',
        description: '모든 오디오 스트림을 믹싱하고 오디오 HAL로 전달하는 핵심 서비스입니다.',
        components: [
            'Audio Mixing',
            'Playback Threads',
            'Recording Threads',
            'Effects Processing',
            'Volume Control'
        ],
        path: 'frameworks/av/services/audioflinger/',
        doc: 'https://source.android.com/docs/core/audio/audioflinger'
    },

    'Binder IPC': {
        title: 'Binder IPC',
        layer: 'IPC Mechanism',
        description: 'Android의 프로세스 간 통신(IPC) 메커니즘입니다.',
        components: [
            'Binder Driver (Kernel)',
            'Proxy (Client)',
            'Stub (Server)',
            'ServiceManager',
            'Parcelable'
        ],
        path: 'frameworks/native/libs/binder/',
        doc: 'https://source.android.com/docs/core/architecture/aidl/binder-ipc',
        codeExample: `
// Binder Service 등록
val myService = object : IMyService.Stub() {
    override fun doSomething(): String {
        return "Hello from Binder"
    }
}

ServiceManager.addService("my_service", myService)

// Client에서 사용
val service = ServiceManager.getService("my_service") as IMyService
val result = service.doSomething()
        `.trim()
    },

    'Proxy': {
        title: 'Binder Proxy',
        layer: 'IPC',
        description: 'Binder IPC의 클라이언트 측 프록시 객체입니다.',
        components: [
            'Method Call Forwarding',
            'Parcel Serialization',
            'Transaction',
            'Death Recipient'
        ],
        doc: 'https://source.android.com/docs/core/architecture/aidl/binder-ipc'
    },

    'Stub': {
        title: 'Binder Stub',
        layer: 'IPC',
        description: 'Binder IPC의 서버 측 스텁 객체입니다.',
        components: [
            'Method Implementation',
            'Parcel Deserialization',
            'onTransact()',
            'Thread Pool'
        ],
        doc: 'https://source.android.com/docs/core/architecture/aidl/binder-ipc'
    },

    'ServiceManager': {
        title: 'Service Manager',
        layer: 'System Service',
        description: 'Binder 서비스를 등록하고 조회하는 중앙 레지스트리입니다.',
        components: [
            'Service Registration',
            'Service Lookup',
            'Binder Context Manager',
            'Access Control (SELinux)'
        ],
        path: 'frameworks/native/cmds/servicemanager/',
        doc: 'https://source.android.com/docs/core/architecture/aidl/binder-ipc'
    },

    'HIDL': {
        title: 'HIDL (HAL Interface Definition Language)',
        layer: 'HAL Interface',
        description: 'Android 8.0에서 도입된 HAL 인터페이스 정의 언어입니다.',
        components: [
            'HAL Interface Definition',
            'Binderized HAL',
            'Passthrough HAL',
            'hwservicemanager',
            'Code Generation'
        ],
        path: 'system/libhidl/',
        doc: 'https://source.android.com/docs/core/architecture/hidl'
    },

    'Stable AIDL': {
        title: 'Stable AIDL',
        layer: 'HAL Interface',
        description: 'Android 11+에서 HIDL을 대체하는 안정적인 AIDL 인터페이스입니다.',
        components: [
            'Versioned Interfaces',
            'Backward Compatibility',
            'Binder IPC',
            'Code Generation (.aidl)'
        ],
        path: 'system/hardware/interfaces/',
        doc: 'https://source.android.com/docs/core/architecture/aidl/stable-aidl'
    },

    'Camera Service': {
        title: 'Camera Service',
        layer: 'Native Service',
        description: '카메라 장치를 관리하고 앱에 카메라 접근을 제공하는 시스템 서비스입니다.',
        components: [
            'Camera Device Management',
            'Camera Session',
            'Preview Stream',
            'Capture Request',
            'Camera Metadata'
        ],
        path: 'frameworks/av/services/camera/',
        doc: 'https://source.android.com/docs/core/camera'
    },

    'Codec Service': {
        title: 'Codec Service',
        layer: 'Native Service',
        description: 'MediaCodec을 위한 코덱 서비스입니다.',
        components: [
            'Codec Resource Management',
            'Codec Component Store',
            'Buffer Management',
            'Codec2 Support'
        ],
        path: 'frameworks/av/services/mediacodec/',
        doc: 'https://source.android.com/docs/core/media/codec'
    },

    'VNDK': {
        title: 'Vendor Native Development Kit',
        layer: 'System-Vendor Interface',
        description: '시스템과 벤더 파티션 간의 안정적인 Native 라이브러리 인터페이스입니다.',
        components: [
            'VNDK-core (LL-NDK)',
            'VNDK-SP (Same-Process)',
            'Vendor Libraries',
            'ABI Stability'
        ],
        doc: 'https://source.android.com/docs/core/architecture/vndk'
    },

    'Vendor Implementation': {
        title: 'Vendor Implementation',
        layer: 'Vendor',
        description: '벤더별 HAL 및 하드웨어 구현입니다.',
        components: [
            'HAL Implementation',
            'Hardware Drivers',
            'Vendor Libraries',
            'Device-specific Code'
        ],
        doc: 'https://source.android.com/docs/core/architecture/hal'
    },

    'Vendor Libraries': {
        title: 'Vendor Libraries',
        layer: 'Vendor',
        description: '벤더가 제공하는 Native 라이브러리입니다.',
        components: [
            'Hardware-specific Libraries',
            'Codec Libraries',
            'GPU Libraries',
            'Camera ISP Libraries'
        ]
    },

    'System Partition': {
        title: 'System Partition',
        layer: 'System',
        description: 'AOSP 코드가 포함된 읽기 전용 파티션입니다.',
        components: [
            'Framework',
            'System Apps',
            'Native Libraries',
            'System Services'
        ],
        doc: 'https://source.android.com/docs/core/architecture'
    },

    'Vendor Partition': {
        title: 'Vendor Partition',
        layer: 'Vendor',
        description: '벤더별 HAL 구현이 포함된 파티션입니다.',
        components: [
            'HAL Implementations',
            'Vendor Libraries',
            'Firmware',
            'Device Config'
        ],
        doc: 'https://source.android.com/docs/core/architecture'
    },

    'Boot ROM': {
        title: 'Boot ROM',
        layer: 'Hardware',
        description: 'SoC에 내장된 읽기 전용 메모리로, 부팅 프로세스를 시작합니다.',
        components: [
            'Primary Boot Loader',
            'Security Check',
            'Bootloader Loading',
            'Hardware Initialization'
        ],
        doc: 'https://source.android.com/docs/core/architecture/bootloader'
    },

    'Bootloader': {
        title: 'Bootloader',
        layer: 'Boot',
        description: 'Linux 커널을 로드하고 실행하는 부트로더입니다.',
        components: [
            'U-Boot / LK',
            'Fastboot Mode',
            'Kernel Loading',
            'Device Tree',
            'Verified Boot'
        ],
        doc: 'https://source.android.com/docs/core/architecture/bootloader'
    },

    'Init Process': {
        title: 'Init Process',
        layer: 'System',
        description: 'Linux 커널 부팅 후 첫 번째로 실행되는 프로세스입니다. (PID 1)',
        components: [
            'init.rc Parsing',
            'Service Management',
            'Property Service',
            'SELinux Enforcement',
            'Zygote Startup'
        ],
        path: 'system/core/init/',
        doc: 'https://source.android.com/docs/core/architecture/bootloader/init'
    },

    'Zygote': {
        title: 'Zygote Process',
        layer: 'Runtime',
        description: '모든 Android 앱 프로세스의 부모 프로세스입니다.',
        components: [
            'ART Preloading',
            'Class Preloading',
            'Fork App Processes',
            'Socket Listener',
            'Copy-on-Write Optimization'
        ],
        path: 'frameworks/base/core/java/com/android/internal/os/Zygote.java',
        doc: 'https://source.android.com/docs/core/runtime/zygote',
        codeExample: `
// Zygote에서 앱 프로세스 생성
Process.start(
    "android.app.ActivityThread",
    niceName,
    uid,
    gid,
    gids,
    runtimeFlags,
    targetSdkVersion,
    seInfo,
    abi,
    instructionSet,
    appDataDir,
    invokeWith,
    packageName,
    zygoteArgs
)
        `.trim()
    },

    'System Server': {
        title: 'System Server',
        layer: 'System Service',
        description: 'Android의 핵심 시스템 서비스들을 호스팅하는 프로세스입니다.',
        components: [
            'ActivityManagerService',
            'WindowManagerService',
            'PackageManagerService',
            'PowerManagerService',
            '60+ System Services'
        ],
        path: 'frameworks/base/services/java/com/android/server/SystemServer.java',
        doc: 'https://source.android.com/docs/core/architecture/services'
    },

    'Launcher': {
        title: 'Launcher (Home Screen)',
        layer: 'Application',
        description: 'Android 홈 화면 앱입니다.',
        components: [
            'App Grid',
            'Widgets',
            'App Shortcuts',
            'Wallpaper',
            'Recent Apps'
        ],
        doc: 'https://developer.android.com/guide/components/activities/index.html'
    },

    'Daemons': {
        title: 'Native Daemons',
        layer: 'Native Service',
        description: 'C/C++로 작성된 백그라운드 데몬 프로세스들입니다.',
        components: [
            'vold (Volume Daemon)',
            'netd (Network Daemon)',
            'installd (Install Daemon)',
            'logd (Log Daemon)',
            'adbd (ADB Daemon)'
        ],
        path: 'system/core/',
        doc: 'https://source.android.com/docs/core/architecture'
    },

    'Surface': {
        title: 'Surface',
        layer: 'Graphics',
        description: '화면에 그릴 수 있는 버퍼를 나타내는 객체입니다.',
        components: [
            'Canvas Drawing',
            'OpenGL Rendering',
            'Vulkan Rendering',
            'BufferQueue Producer'
        ],
        path: 'frameworks/native/libs/gui/',
        doc: 'https://source.android.com/docs/core/graphics'
    },

    'BufferQueue': {
        title: 'BufferQueue',
        layer: 'Graphics',
        description: 'Producer와 Consumer 간의 버퍼 교환을 관리합니다.',
        components: [
            'Buffer Allocation',
            'Queue/Dequeue',
            'Triple Buffering',
            'VSync Synchronization'
        ],
        path: 'frameworks/native/libs/gui/BufferQueue.cpp',
        doc: 'https://source.android.com/docs/core/graphics/arch-bq-gralloc'
    },

    'Hardware Composer': {
        title: 'HWC (Hardware Composer)',
        layer: 'HAL',
        description: '하드웨어 가속 화면 합성을 담당하는 HAL입니다.',
        components: [
            'Layer Composition',
            'Display Configuration',
            'VSync Events',
            'HWC 2.x / 3.x API'
        ],
        path: 'hardware/interfaces/graphics/composer/',
        doc: 'https://source.android.com/docs/core/graphics/hwc'
    },

    'Display': {
        title: 'Display Driver',
        layer: 'Kernel Driver',
        description: '디스플레이 하드웨어를 제어하는 커널 드라이버입니다.',
        components: [
            'Display Controller',
            'DRM/KMS',
            'Framebuffer',
            'HDMI/DP/MIPI'
        ],
        doc: 'https://source.android.com/docs/core/graphics'
    },

    'Media Router': {
        title: 'Media Router',
        layer: 'Framework',
        description: '미디어를 여러 출력 장치로 라우팅하는 프레임워크입니다.',
        components: [
            'Route Discovery',
            'Chromecast Support',
            'Audio Output Selection',
            'Video Output Selection'
        ],
        path: 'frameworks/base/media/java/android/media/',
        doc: 'https://developer.android.com/guide/topics/media/routing'
    },

    'Media API': {
        title: 'Media API',
        layer: 'Framework',
        description: 'Android의 미디어 재생/녹음 API입니다.',
        components: [
            'MediaPlayer',
            'MediaRecorder',
            'MediaCodec',
            'AudioTrack',
            'AudioRecord'
        ],
        path: 'frameworks/base/media/java/android/media/',
        doc: 'https://developer.android.com/guide/topics/media'
    },

    'Stagefright': {
        title: 'Stagefright',
        layer: 'Native Library',
        description: 'Android의 Native 미디어 프레임워크입니다.',
        components: [
            'MediaExtractor',
            'MediaMuxer',
            'OMX IL',
            'Codec2 Wrapper',
            'Container Parsing'
        ],
        path: 'frameworks/av/media/libstagefright/',
        doc: 'https://source.android.com/docs/core/media'
    },

    'Client': {
        title: 'Binder Client',
        layer: 'IPC',
        description: 'Binder IPC를 통해 서비스를 호출하는 클라이언트입니다.',
        components: [
            'Proxy Object',
            'Method Invocation',
            'IPC Transaction'
        ]
    },

    'Server': {
        title: 'Binder Server',
        layer: 'IPC',
        description: 'Binder IPC를 통해 서비스를 제공하는 서버입니다.',
        components: [
            'Stub Object',
            'Method Implementation',
            'Thread Pool'
        ]
    },

    'HAL Interface': {
        title: 'HAL Interface',
        layer: 'HAL',
        description: 'HIDL 또는 AIDL로 정의된 HAL 인터페이스입니다.',
        components: [
            'Interface Definition',
            'Generated Code',
            'Version Management'
        ]
    },

    'App View': {
        title: 'App View/Canvas',
        layer: 'Application',
        description: '앱의 UI를 그리는 View 계층입니다.',
        components: [
            'View Tree',
            'Canvas API',
            'Hardware Acceleration',
            'RenderThread'
        ],
        doc: 'https://developer.android.com/guide/topics/ui/how-android-draws'
    },

    // ========================================
    // Android 버전별 미디어 진화 (android-version-history.html) - Card 2
    // ========================================

    'AAudio': {
        title: 'AAudio',
        layer: 'Framework API',
        description: 'Android 8.0+에서 도입된 고성능 저지연 오디오 API입니다.',
        components: [
            'Low Latency (<10ms)',
            'Exclusive Mode',
            'Shared Mode',
            'Callback-driven',
            'MMAP (Memory-Mapped Audio)'
        ],
        path: 'frameworks/av/media/libaaudio/',
        doc: 'https://developer.android.com/ndk/guides/audio/aaudio',
        codeExample: `
// C++ AAudio 스트림 생성
AAudioStreamBuilder* builder;
AAudio_createStreamBuilder(&builder);

AAudioStreamBuilder_setDirection(builder, AAUDIO_DIRECTION_OUTPUT);
AAudioStreamBuilder_setPerformanceMode(builder, AAUDIO_PERFORMANCE_MODE_LOW_LATENCY);

AAudioStream* stream;
AAudioStreamBuilder_openStream(builder, &stream);
AAudioStream_requestStart(stream);
        `.trim()
    },

    'Lollipop': {
        title: 'Android 5.0 Lollipop',
        layer: 'Android Version',
        description: 'ART 런타임 기본 적용, Camera2 API 도입 (2014)',
        components: [
            'ART (Dalvik 대체)',
            'Camera2 API',
            'AudioAttributes',
            'Material Design',
            '64-bit Support'
        ],
        doc: 'https://developer.android.com/about/versions/lollipop'
    },

    'Marshmallow': {
        title: 'Android 6.0 Marshmallow',
        layer: 'Android Version',
        description: '런타임 권한, MIDI API 추가 (2015)',
        components: [
            'Runtime Permissions',
            'MIDI API',
            'Doze Mode',
            'App Standby',
            'Adoptable Storage'
        ],
        doc: 'https://developer.android.com/about/versions/marshmallow'
    },

    'Features - Lollipop': {
        title: 'Lollipop 미디어 기능',
        layer: 'Features',
        description: 'Android 5.0 Lollipop에서 추가된 미디어 기능들',
        components: [
            'Camera2 API',
            'AudioAttributes',
            'MediaSession API',
            'MediaRouter API',
            'Material Design'
        ]
    },

    'Features - Marshmallow': {
        title: 'Marshmallow 미디어 기능',
        layer: 'Features',
        description: 'Android 6.0 Marshmallow에서 추가된 미디어 기능들',
        components: [
            'MIDI API',
            'Audio Capture Improvements',
            'Camera2 Enhancements',
            'Runtime Permissions for Media'
        ]
    },

    'Features - AAudio': {
        title: 'AAudio 기능',
        layer: 'Features',
        description: 'AAudio API의 주요 기능들',
        components: [
            'Low Latency',
            'Exclusive Mode',
            'MMAP',
            'Callback-driven'
        ]
    },

    'Features - AudioTrack': {
        title: 'AudioTrack 기능',
        layer: 'Features',
        description: 'AudioTrack API의 주요 기능들',
        components: [
            'PCM Playback',
            'Static/Streaming',
            'Volume Control',
            'Playback Rate'
        ]
    },

    'Features - OpenSL ES': {
        title: 'OpenSL ES 기능',
        layer: 'Features',
        description: 'OpenSL ES API의 주요 기능들',
        components: [
            'Native Audio',
            'Low Latency',
            'Buffer Queue',
            'Effects'
        ]
    },

    'Camera1 Features': {
        title: 'Camera API 1 기능',
        layer: 'Features',
        description: 'Camera API 1의 주요 기능들 (Deprecated)',
        components: [
            'Simple Camera Access',
            'Preview',
            'Capture',
            'Auto-focus',
            'Deprecated in Android 5.0'
        ]
    },

    'Camera2 Features': {
        title: 'Camera API 2 기능',
        layer: 'Features',
        description: 'Camera API 2의 주요 기능들',
        components: [
            'Manual Camera Control',
            'RAW Capture',
            'Burst Capture',
            'Camera2 Session',
            'CaptureRequest'
        ]
    },

    'CameraX Features': {
        title: 'CameraX 기능',
        layer: 'Features',
        description: 'CameraX Jetpack 라이브러리의 주요 기능들',
        components: [
            'Simplified API',
            'Use Case-based',
            'Lifecycle-aware',
            'Extensions API',
            'Backward Compatibility'
        ]
    },

    'OMX IL': {
        title: 'OpenMAX IL',
        layer: 'Codec API',
        description: 'Android 4.x~9.x에서 사용된 코덱 인터페이스입니다. (Deprecated)',
        components: [
            'OMX Component',
            'Port-based Architecture',
            'Buffer Management',
            'State Machine',
            'Replaced by Codec2'
        ],
        path: 'frameworks/av/media/libstagefright/omx/',
        doc: 'https://source.android.com/docs/core/media/compat'
    },

    'App1': {
        title: 'App (Legacy)',
        layer: 'Application',
        description: 'OpenMAX IL을 사용하는 레거시 앱입니다.',
        components: [
            'MediaCodec API',
            'ACodec',
            'OpenMAX IL'
        ]
    },

    'App2': {
        title: 'App (Modern)',
        layer: 'Application',
        description: 'Codec2를 사용하는 현대적인 앱입니다.',
        components: [
            'MediaCodec API',
            'CCodec',
            'Codec2 API'
        ]
    },

    'MediaCodec1': {
        title: 'MediaCodec API (Legacy)',
        layer: 'Framework API',
        description: 'OpenMAX IL을 사용하는 MediaCodec API입니다.',
        components: [
            'ACodec Backend',
            'Input/Output Buffers',
            'Async Callback'
        ],
        path: 'frameworks/av/media/libstagefright/'
    },

    'MediaCodec2': {
        title: 'MediaCodec API (Modern)',
        layer: 'Framework API',
        description: 'Codec2를 사용하는 MediaCodec API입니다.',
        components: [
            'CCodec Backend',
            'Input/Output Buffers',
            'Async Callback',
            'Better Performance'
        ],
        path: 'frameworks/av/media/libstagefright/'
    },

    'Vendor Codec Library': {
        title: 'Vendor Codec Library',
        layer: 'Vendor Implementation',
        description: '벤더가 제공하는 하드웨어 코덱 구현입니다.',
        components: [
            'H.264/H.265 Decoder',
            'H.264/H.265 Encoder',
            'VP9/AV1 Decoder',
            'Hardware Accelerated',
            'Vendor-specific Optimization'
        ]
    },

    'Codec2 Implementation': {
        title: 'Codec2 Implementation',
        layer: 'HAL Implementation',
        description: 'Codec2 HAL의 실제 구현입니다.',
        components: [
            'C2Component',
            'C2ComponentStore',
            'Software/Hardware Codec',
            'Modular & Updatable',
            'Project Mainline Support'
        ],
        path: 'hardware/google/av/codec2/',
        doc: 'https://source.android.com/docs/core/media/codec2'
    },

    'Codec2 API': {
        title: 'Codec2 API',
        layer: 'HAL Interface',
        description: 'OpenMAX를 대체하는 새로운 코덱 HAL입니다.',
        components: [
            'C2Component Interface',
            'Parameter-based Configuration',
            'Work-based Processing',
            'Better Memory Management',
            'Reduced Overhead'
        ],
        path: 'frameworks/av/media/codec2/',
        doc: 'https://source.android.com/docs/core/media/codec2'
    },

    'Legacy': {
        title: 'Legacy Architecture',
        layer: 'System',
        description: 'Android 10 이전의 레거시 코덱 아키텍처입니다.',
        components: [
            'OpenMAX IL',
            'ACodec',
            'Tight Coupling',
            'Difficult to Update'
        ]
    },

    'Modern': {
        title: 'Modern Architecture',
        layer: 'System',
        description: 'Android 10+ 현대 코덱 아키텍처입니다.',
        components: [
            'Codec2',
            'CCodec',
            'Modular Design',
            'Project Mainline Support'
        ]
    },

    'Gen1': {
        title: 'Generation 1',
        layer: 'Evolution',
        description: '1세대 미디어 아키텍처입니다.',
        components: [
            'OpenCore',
            'PV Player',
            'Android 1.x - 2.1'
        ]
    },

    'Gen2': {
        title: 'Generation 2',
        layer: 'Evolution',
        description: '2세대 미디어 아키텍처입니다.',
        components: [
            'Stagefright',
            'OpenMAX IL',
            'Android 2.2 - 9.0'
        ]
    },

    'Gen3': {
        title: 'Generation 3',
        layer: 'Evolution',
        description: '3세대 미디어 아키텍처입니다.',
        components: [
            'NuPlayer',
            'Codec2',
            'Android 10+'
        ]
    },

    'Java': {
        title: 'Java Layer',
        layer: 'Framework',
        description: 'Java 프레임워크 레이어입니다.',
        components: [
            'MediaPlayer API',
            'MediaCodec API',
            'MediaRecorder API'
        ]
    },

    'Native1': {
        title: 'Native Layer (Legacy)',
        layer: 'Native',
        description: '레거시 Native 레이어입니다.',
        components: [
            'Stagefright',
            'ACodec',
            'OpenMAX IL'
        ]
    },

    'Native2': {
        title: 'Native Layer (Modern)',
        layer: 'Native',
        description: '현대 Native 레이어입니다.',
        components: [
            'NuPlayer',
            'CCodec',
            'Codec2'
        ]
    },

    'Features': {
        title: 'Current Features',
        layer: 'Features',
        description: '현재 사용 가능한 기능들입니다.',
        components: [
            'MediaCodec API',
            'Camera2 API',
            'AAudio',
            'Codec2'
        ]
    },

    'Future': {
        title: 'Future Enhancements',
        layer: 'Roadmap',
        description: '향후 개선 예정 사항입니다.',
        components: [
            'AV1 Hardware Support',
            'HDR10+ Support',
            'Spatial Audio',
            'AI-enhanced Processing'
        ]
    },

    // ========================================
    // AAOS 추가 노드 (aaos.html) - Card 3
    // ========================================

    'AAOS Operating System': {
        title: 'AAOS (Android Automotive OS)',
        layer: 'Operating System',
        description: '차량용으로 특화된 Android 운영체제입니다.',
        components: [
            'Car Service Framework',
            'Vehicle HAL',
            'Car Audio',
            'Car Input',
            'Car Display'
        ],
        doc: 'https://source.android.com/docs/automotive'
    },

    'Android Auto App': {
        title: 'Android Auto',
        layer: 'Application',
        description: '스마트폰을 차량 디스플레이에 미러링하는 앱입니다.',
        components: [
            'Phone Projection',
            'Media Apps',
            'Navigation Apps',
            'Messaging Apps',
            'Google Assistant'
        ],
        doc: 'https://developers.google.com/cars/design'
    },

    'Car App Library': {
        title: 'Car App Library',
        layer: 'Framework Library',
        description: 'AAOS 및 Android Auto용 앱 개발 라이브러리입니다.',
        components: [
            'CarAppService',
            'Navigation Templates',
            'POI Templates',
            'Messaging Templates',
            'Media Templates'
        ],
        doc: 'https://developer.android.com/training/cars/apps'
    },

    'Car Controls': {
        title: 'Car Controls',
        layer: 'System UI',
        description: '차량 제어를 위한 시스템 UI입니다.',
        components: [
            'Climate Control',
            'Seat Control',
            'Window Control',
            'Quick Settings'
        ],
        path: 'packages/apps/Car/SystemUI/'
    },

    'Car Display': {
        title: 'Car Display Service',
        layer: 'Car Service',
        description: '차량의 다중 디스플레이를 관리하는 서비스입니다.',
        components: [
            'Multi-Display Support',
            'Display Zones',
            'Activity Routing',
            'Display Policy'
        ],
        path: 'packages/services/Car/service/src/com/android/car/display/'
    },

    'Car Property Manager': {
        title: 'Car Property Manager',
        layer: 'Car API',
        description: '차량 속성에 접근하는 API입니다.',
        components: [
            'Property Get/Set',
            'Property Subscription',
            'Area-based Properties',
            'Permission Control'
        ],
        path: 'packages/services/Car/car-lib/src/android/car/hardware/property/',
        codeExample: `
val carPropertyManager = car.getCarManager(Car.PROPERTY_SERVICE) as CarPropertyManager

// 차량 속도 읽기
val speed = carPropertyManager.getFloatProperty(
    VehiclePropertyIds.PERF_VEHICLE_SPEED,
    VehicleAreaType.VEHICLE_AREA_TYPE_GLOBAL
)
        `.trim()
    },

    'Vehicle Properties': {
        title: 'Vehicle Properties',
        layer: 'VHAL',
        description: '차량의 하드웨어 속성들입니다.',
        components: [
            'Speed (PERF_VEHICLE_SPEED)',
            'Gear (GEAR_SELECTION)',
            'Fuel Level (FUEL_LEVEL)',
            'Door State (DOOR_LOCK)',
            'HVAC (HVAC_TEMPERATURE_SET)'
        ],
        doc: 'https://source.android.com/docs/automotive/vhal/property-configuration'
    },

    'VHAL Interface': {
        title: 'VHAL Interface',
        layer: 'HAL Interface',
        description: 'Vehicle HAL과 통신하는 AIDL 인터페이스입니다.',
        components: [
            'IVehicle.aidl',
            'Property Subscribe/Unsubscribe',
            'Property Get/Set',
            'VehicleAreaConfig'
        ],
        path: 'hardware/interfaces/automotive/vehicle/aidl/'
    },

    'Sensors': {
        title: 'Vehicle Sensors',
        layer: 'Hardware',
        description: '차량의 각종 센서들입니다.',
        components: [
            'Speed Sensor',
            'Gear Sensor',
            'Parking Sensor',
            'Fuel Sensor',
            'Temperature Sensor'
        ]
    },

    'Car Hardware': {
        title: 'Car Hardware',
        layer: 'Hardware',
        description: '차량 하드웨어 컴포넌트입니다.',
        components: [
            'Display',
            'Audio Amplifier',
            'Microphone',
            'Camera',
            'CAN Bus'
        ]
    },

    'Phone Hardware': {
        title: 'Phone Hardware',
        layer: 'Hardware',
        description: '스마트폰 하드웨어입니다.',
        components: [
            'Display',
            'Touchscreen',
            'Microphone',
            'Speaker',
            'GPS'
        ]
    },

    'Phone': {
        title: 'Phone (Smartphone)',
        layer: 'Device',
        description: 'Android Auto를 실행하는 스마트폰입니다.',
        components: [
            'Android Auto App',
            'USB/Bluetooth Connection',
            'Media Apps',
            'Navigation Apps'
        ]
    },

    'User 1': {
        title: 'Driver Profile',
        layer: 'User Profile',
        description: '운전자 사용자 프로필입니다.',
        components: [
            'User Settings',
            'App Data',
            'Media Preferences',
            'Navigation History'
        ]
    },

    'User 2': {
        title: 'Passenger Profile',
        layer: 'User Profile',
        description: '동승자 사용자 프로필입니다.',
        components: [
            'User Settings',
            'App Data',
            'Media Preferences',
            'Navigation History'
        ]
    },

    'ECU 1': {
        title: 'ECU 1 (Engine)',
        layer: 'Hardware',
        description: '엔진 제어 ECU입니다.',
        components: [
            'Engine Control',
            'Transmission Control',
            'CAN Bus Communication'
        ]
    },

    'ECU 2': {
        title: 'ECU 2 (Body)',
        layer: 'Hardware',
        description: '바디 제어 ECU입니다.',
        components: [
            'Body Control',
            'Climate Control',
            'CAN Bus Communication'
        ]
    },

    'Audio Zone 1': {
        title: 'Audio Zone 1 (Front)',
        layer: 'Audio Zone',
        description: '전방 좌석 오디오 존입니다.',
        components: [
            'Front Speakers',
            'Media Playback',
            'Navigation Audio',
            'Phone Calls'
        ]
    },

    'Audio Zone 2': {
        title: 'Audio Zone 2 (Rear)',
        layer: 'Audio Zone',
        description: '후방 좌석 오디오 존입니다.',
        components: [
            'Rear Speakers',
            'Independent Media',
            'Headphones Support'
        ]
    },

    'Standard HAL': {
        title: 'Standard HAL',
        layer: 'HAL',
        description: '표준 Android HAL입니다.',
        components: [
            'Audio HAL',
            'Sensor HAL',
            'Graphics HAL',
            'Bluetooth HAL'
        ]
    },

    'Vehicle App': {
        title: 'Vehicle App',
        layer: 'Application',
        description: 'AAOS에서 실행되는 차량용 앱입니다.',
        components: [
            'Navigation Apps',
            'Media Apps',
            'HVAC Control Apps',
            'Car Settings',
            'OEM Apps'
        ],
        doc: 'https://developer.android.com/training/cars/apps'
    },

    'Navigation App': {
        title: 'Navigation App',
        layer: 'Application',
        description: '차량 내비게이션 앱입니다.',
        components: [
            'Google Maps',
            'Waze',
            'OEM Navigation',
            'Route Planning',
            'Turn-by-turn Guidance'
        ],
        doc: 'https://developer.android.com/training/cars/navigation'
    },

    'Media3 Library': {
        title: 'Media3 Library',
        layer: 'Framework Library',
        description: 'Jetpack Media3는 ExoPlayer를 포함하는 차세대 미디어 라이브러리입니다.',
        components: [
            'ExoPlayer (Core Player)',
            'MediaSession (Session Management)',
            'Media3 UI Components',
            'Casting Support',
            'Background Playback'
        ],
        path: 'androidx.media3',
        doc: 'https://developer.android.com/media/media3',
        codeExample: `
// Media3 ExoPlayer 생성
val player = ExoPlayer.Builder(context)
    .setAudioAttributes(AudioAttributes.DEFAULT, true)
    .setHandleAudioBecomingNoisy(true)
    .build()

// MediaSession 연결
val mediaSession = MediaSession.Builder(context, player)
    .setCallback(MediaSessionCallback())
    .build()

// 재생
val mediaItem = MediaItem.fromUri(uri)
player.setMediaItem(mediaItem)
player.prepare()
player.play()
        `.trim()
    },

    'AAOS App Types': {
        title: 'AAOS App Types',
        layer: 'Application Architecture',
        description: 'AAOS에서 실행 가능한 앱 유형들입니다.',
        components: [
            'Car App Library Apps',
            'Media Apps',
            'Navigation Apps',
            'System Apps',
            'OEM Apps'
        ]
    },

    'Layer 1': {
        title: 'Layer 1: Vehicle Apps',
        layer: 'Application Layer',
        description: 'AAOS 앱 레이어입니다.',
        components: [
            'Navigation Apps',
            'Media Apps',
            'HVAC Apps',
            'Settings'
        ]
    },

    'Layer 2': {
        title: 'Layer 2: Car Services',
        layer: 'Framework Layer',
        description: 'Car Service 프레임워크 레이어입니다.',
        components: [
            'Car Service',
            'Car Audio Service',
            'Car Display Service',
            'Car Input Service'
        ]
    },

    'Layer 3': {
        title: 'Layer 3: Android Framework',
        layer: 'Framework Layer',
        description: '표준 Android 프레임워크 레이어입니다.',
        components: [
            'ActivityManager',
            'WindowManager',
            'AudioManager',
            'PackageManager'
        ]
    },

    'Layer 7': {
        title: 'Layer 7: Hardware',
        layer: 'Hardware Layer',
        description: '차량 하드웨어 레이어입니다.',
        components: [
            'ECU',
            'Sensors',
            'Displays',
            'Audio Amplifiers'
        ]
    },

    'Car Services': {
        title: 'Car Services',
        layer: 'Framework',
        description: 'AAOS Car Service 컴포넌트들입니다.',
        components: [
            'Car Audio Service',
            'Car Display Service',
            'Car Input Service',
            'Car Property Service',
            'Car User Service'
        ],
        path: 'packages/services/Car/service/'
    },

    'VHAL Layer': {
        title: 'VHAL Layer',
        layer: 'HAL',
        description: 'Vehicle HAL 레이어입니다.',
        components: [
            'Vehicle HAL',
            'VHAL Interface',
            'Property Management',
            'CAN Bus Communication'
        ]
    },

    'Vehicle': {
        title: 'Vehicle',
        layer: 'Hardware',
        description: '실제 차량 하드웨어입니다.',
        components: [
            'ECU',
            'CAN Bus',
            'Sensors',
            'Actuators'
        ]
    },

    'Hardware': {
        title: 'Hardware',
        layer: 'Hardware',
        description: '차량 하드웨어 컴포넌트입니다.',
        components: [
            'Display',
            'Audio',
            'Camera',
            'Sensors'
        ]
    },

    'Framework': {
        title: 'Framework',
        layer: 'Framework',
        description: 'Android Framework 레이어입니다.',
        components: [
            'System Services',
            'Car Services',
            'API Libraries'
        ]
    },

    'Audio Zone 1': {
        title: 'Audio Zone 1 (Front)',
        layer: 'Audio Zone',
        description: '전방 좌석 오디오 존입니다.',
        components: [
            'Front Speakers',
            'Navigation Audio',
            'Media Playback',
            'Phone Calls'
        ]
    },

    'Audio Zone 2': {
        title: 'Audio Zone 2 (Rear)',
        layer: 'Audio Zone',
        description: '후방 좌석 오디오 존입니다.',
        components: [
            'Rear Speakers',
            'Independent Media',
            'Headphone Support'
        ]
    },

    // ========================================
    // Media Framework Core 노드 (media-framework-core.html) - Card 4
    // ========================================

    'Application Layer': {
        title: 'Application Layer',
        layer: 'Layer 1',
        description: '미디어 앱이 실행되는 애플리케이션 레이어입니다.',
        components: [
            'YouTube',
            'Spotify',
            'Camera',
            'Gallery',
            'Music Player'
        ]
    },

    'Java API Framework': {
        title: 'Java API Framework',
        layer: 'Layer 2',
        description: 'Android 미디어 Java API 프레임워크입니다.',
        components: [
            'MediaPlayer',
            'MediaCodec',
            'MediaRecorder',
            'MediaSession',
            'MediaDrm'
        ],
        path: 'frameworks/base/media/java/android/media/'
    },

    'Native Libraries & Runtime': {
        title: 'Native Libraries & Runtime',
        layer: 'Layer 3',
        description: 'Native C++ 미디어 라이브러리와 런타임입니다.',
        components: [
            'libmedia',
            'libstagefright',
            'NuPlayer',
            'MediaExtractor',
            'ART'
        ],
        path: 'frameworks/av/'
    },

    'Binder IPC': {
        title: 'Binder IPC',
        layer: 'IPC',
        description: 'Client-Server 간 프로세스 간 통신입니다.',
        components: [
            'IMediaPlayer',
            'IMediaCodec',
            'IMediaDrm',
            'Parcel'
        ]
    },

    'Media3': {
        title: 'Media3 (Jetpack)',
        layer: 'App Library',
        description: 'ExoPlayer를 포함하는 Jetpack 미디어 라이브러리입니다.',
        components: [
            'ExoPlayer',
            'MediaSession',
            'UI Components',
            'Casting'
        ],
        path: 'androidx.media3',
        doc: 'https://developer.android.com/media/media3'
    },

    'ExoPlayer': {
        title: 'ExoPlayer',
        layer: 'Media Player',
        description: 'Media3의 핵심 플레이어 엔진입니다.',
        components: [
            'Adaptive Streaming',
            'Codec Support',
            'DRM Support',
            'Customizable'
        ],
        doc: 'https://exoplayer.dev/'
    },

    'Media3 Session': {
        title: 'Media3 MediaSession',
        layer: 'Session Management',
        description: 'Media3의 MediaSession 구현입니다.',
        components: [
            'Session Management',
            'Media Button',
            'Notification',
            'Background Playback'
        ]
    },

    'Media3 UI': {
        title: 'Media3 UI',
        layer: 'UI Components',
        description: 'Media3의 UI 컴포넌트입니다.',
        components: [
            'PlayerView',
            'PlayerControlView',
            'StyledPlayerView',
            'Custom Controls'
        ]
    },

    'MediaCodec 1': {
        title: 'MediaCodec (Input)',
        layer: 'Framework API',
        description: 'MediaCodec 입력 버퍼 처리입니다.',
        components: [
            'Input Buffer',
            'Queue Input',
            'Feed Data'
        ]
    },

    'MediaCodec 2': {
        title: 'MediaCodec (Processing)',
        layer: 'Framework API',
        description: 'MediaCodec 처리 단계입니다.',
        components: [
            'Decode/Encode',
            'Hardware Acceleration',
            'Buffer Processing'
        ]
    },

    'MediaCodec 3': {
        title: 'MediaCodec (Output)',
        layer: 'Framework API',
        description: 'MediaCodec 출력 버퍼 처리입니다.',
        components: [
            'Output Buffer',
            'Dequeue Output',
            'Release Buffer'
        ]
    },

    'MediaDrm': {
        title: 'MediaDrm',
        layer: 'Framework API',
        description: 'DRM(Digital Rights Management) Framework API입니다.',
        components: [
            'License Management',
            'Key Request/Response',
            'Crypto Session',
            'Widevine/PlayReady Support'
        ],
        path: 'frameworks/base/media/java/android/media/MediaDrm.java',
        doc: 'https://developer.android.com/reference/android/media/MediaDrm'
    },

    'MediaDrm Service': {
        title: 'MediaDrm Service',
        layer: 'Native Service',
        description: 'DRM을 처리하는 Native 서비스입니다.',
        components: [
            'DRM Plugin Management',
            'License Storage',
            'Crypto Operations',
            'TEE Communication'
        ],
        path: 'frameworks/av/drm/'
    },

    'KeyMaster': {
        title: 'KeyMaster',
        layer: 'Security',
        description: '암호화 키를 안전하게 관리하는 HAL입니다.',
        components: [
            'Key Generation',
            'Key Storage',
            'Cryptographic Operations',
            'Hardware-backed Keys'
        ],
        path: 'hardware/interfaces/keymaster/',
        doc: 'https://source.android.com/docs/security/features/keystore'
    },

    'Widevine': {
        title: 'Widevine DRM',
        layer: 'DRM System',
        description: 'Google의 DRM 솔루션입니다.',
        components: [
            'Widevine L1 (TEE)',
            'Widevine L2 (TEE)',
            'Widevine L3 (Software)',
            'License Server'
        ],
        doc: 'https://www.widevine.com/'
    },

    'Secure Decoder': {
        title: 'Secure Decoder',
        layer: 'Hardware Codec',
        description: 'TEE에서 실행되는 보안 디코더입니다.',
        components: [
            'Encrypted Input',
            'TEE Decryption',
            'Secure Pipeline',
            'Protected Output'
        ]
    },

    'MediaSession Service': {
        title: 'MediaSession Service',
        layer: 'System Service',
        description: 'MediaSession을 관리하는 시스템 서비스입니다.',
        components: [
            'Session Management',
            'Priority Control',
            'Media Button Routing',
            'Volume Control'
        ],
        path: 'frameworks/base/services/core/java/com/android/server/media/'
    },

    'MediaSession Framework': {
        title: 'MediaSession Framework',
        layer: 'Framework',
        description: 'MediaSession 프레임워크 컴포넌트입니다.',
        components: [
            'MediaSession',
            'MediaController',
            'MediaBrowser',
            'MediaBrowserService'
        ],
        path: 'frameworks/base/media/java/android/media/session/'
    },

    'Components': {
        title: 'Codec Components',
        layer: 'Codec',
        description: '코덱 컴포넌트입니다.',
        components: [
            'Encoder',
            'Decoder',
            'Filters',
            'Muxers'
        ]
    },

    'Codec HAL Interface': {
        title: 'Codec HAL Interface',
        layer: 'HAL Interface',
        description: 'Codec2 HAL 인터페이스입니다.',
        components: [
            'IComponent',
            'IComponentStore',
            'IConfigurable',
            'HIDL/AIDL'
        ],
        path: 'hardware/interfaces/media/c2/'
    },

    'Codec2 Core': {
        title: 'Codec2 Core',
        layer: 'HAL Implementation',
        description: 'Codec2 코어 구현입니다.',
        components: [
            'C2Component',
            'C2Allocator',
            'C2Buffer',
            'C2Param'
        ],
        path: 'frameworks/av/media/codec2/'
    },

    'Codec2 Component': {
        title: 'Codec2 Component',
        layer: 'Codec Component',
        description: '개별 코덱 컴포넌트입니다.',
        components: [
            'Component Interface',
            'Work Queue',
            'Buffer Management',
            'Parameter Configuration'
        ]
    },

    'Codec2 Parameter': {
        title: 'Codec2 Parameter',
        layer: 'Configuration',
        description: 'Codec2 파라미터 시스템입니다.',
        components: [
            'C2Param',
            'C2Setting',
            'C2Info',
            'Reflector'
        ]
    },

    'Codec2 Hardware': {
        title: 'Codec2 Hardware Codec',
        layer: 'Hardware',
        description: '하드웨어 가속 코덱입니다.',
        components: [
            'HW Encoder',
            'HW Decoder',
            'Video Processor',
            'Vendor Implementation'
        ]
    },

    'Codec2 Software': {
        title: 'Codec2 Software Codec',
        layer: 'Software',
        description: '소프트웨어 코덱입니다.',
        components: [
            'SW Encoder',
            'SW Decoder',
            'libvpx (VP9)',
            'dav1d (AV1)'
        ]
    },

    'Codec2 Store': {
        title: 'Codec2 Component Store',
        layer: 'Codec Store',
        description: '코덱 컴포넌트를 관리하는 스토어입니다.',
        components: [
            'Component Query',
            'Component Creation',
            'Trait Management',
            'Interface Discovery'
        ]
    },

    'Codec2 Implementation': {
        title: 'Codec2 Implementation',
        layer: 'HAL Implementation',
        description: 'Codec2 HAL의 실제 구현입니다.',
        components: [
            'Vendor Codecs',
            'Software Codecs',
            'Component Store',
            'Allocator Service'
        ]
    },

    'Gallery App': {
        title: 'Gallery',
        layer: 'Application',
        description: '사진/비디오 갤러리 앱입니다.',
        components: [
            'Image Viewer',
            'Video Player',
            'Slideshow',
            'Editing'
        ]
    },

    'Music App': {
        title: 'Music',
        layer: 'Application',
        description: '음악 플레이어 앱입니다.',
        components: [
            'Audio Playback',
            'Playlist',
            'Audio Focus',
            'MediaSession'
        ]
    },

    'Media Files': {
        title: 'Media Files',
        layer: 'Storage',
        description: '저장소의 미디어 파일입니다.',
        components: [
            'Audio Files',
            'Video Files',
            'Images',
            'Playlists'
        ]
    },

    'Media Database': {
        title: 'Media Database',
        layer: 'Storage',
        description: '미디어 메타데이터 데이터베이스입니다.',
        components: [
            'MediaStore DB',
            'Metadata',
            'Thumbnails',
            'Content URI'
        ],
        path: 'packages/providers/MediaProvider/'
    },

    'Media Scanner': {
        title: 'Media Scanner',
        layer: 'System Service',
        description: '미디어 파일을 스캔하고 인덱싱하는 서비스입니다.',
        components: [
            'File Discovery',
            'Metadata Extraction',
            'DB Update',
            'Thumbnail Generation'
        ],
        path: 'packages/providers/MediaProvider/src/com/android/providers/media/scan/'
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
