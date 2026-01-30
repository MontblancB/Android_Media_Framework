// ========================================
// English Diagram Data (DIAGRAM_NODE_DATA_EN)
// Translation of DIAGRAM_NODE_DATA_KO
// ========================================

const DIAGRAM_NODE_DATA_EN = {
    // ========================================
    // AOSP Layer Nodes
    // ========================================

    'System Apps': {
        title: 'System Apps',
        layer: 'Application Layer',
        description: 'Pre-installed applications that come with the Android system, including Phone, Contacts, Settings, Email, Camera, and more.',
        components: [
            'Phone (Dialer app)',
            'Contacts',
            'Settings',
            'Email',
            'Camera',
            'Browser'
        ],
        path: 'packages/apps/',
        doc: 'https://source.android.com/docs/core/architecture',
        relatedSections: ['section-1', 'section-2']
    },

    'Framework': {
        title: 'Java API Framework',
        layer: 'Framework Layer',
        description: 'The Java/Kotlin API framework used for Android app development. Includes View System, Activity Manager, Package Manager, and more.',
        components: [
            'View System - UI rendering',
            'Activity Manager - Activity lifecycle',
            'Package Manager - App installation/management',
            'Window Manager - Window management',
            'Notification Manager - Notifications',
            'Content Providers - Data sharing'
        ],
        path: 'frameworks/base/core/java/android/',
        doc: 'https://developer.android.com/reference',
        codeExample: `
// Creating an Activity
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
        description: 'The runtime environment that executes Android apps. Handles AOT compilation, garbage collection, and JIT compilation.',
        components: [
            'AOT (Ahead-of-Time) Compilation',
            'JIT (Just-in-Time) Compilation',
            'Garbage Collection (GC)',
            'Core Libraries',
            'DEX Bytecode Execution'
        ],
        path: 'art/',
        doc: 'https://source.android.com/docs/core/runtime',
        codeExample: `
# Check ART information
adb shell getprop dalvik.vm.heapsize
adb shell dumpsys meminfo com.example.app

# Check compilation mode
adb shell cmd package compile -m speed -f com.example.app
        `.trim()
    },

    'Native Libraries': {
        title: 'Native C/C++ Libraries',
        layer: 'Native Layer',
        description: 'C/C++ native libraries that provide core functionality for the Android system, including Media, Graphics, and Audio.',
        components: [
            'Media Framework (libstagefright)',
            'SurfaceFlinger - Screen composition',
            'AudioFlinger - Audio mixing',
            'libc (Bionic) - C standard library',
            'WebView (Chromium)',
            'SSL/Crypto libraries'
        ],
        path: 'frameworks/native/',
        doc: 'https://source.android.com/docs/core',
        codeExample: `
// Calling native library via JNI
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
        description: 'Layer that abstracts hardware implementations. Standardized through HIDL/AIDL interfaces.',
        components: [
            'Audio HAL - Audio hardware',
            'Camera HAL - Camera sensors',
            'Codec HAL - Hardware codecs',
            'Graphics HAL - GPU',
            'Sensor HAL - Sensors',
            'Vehicle HAL - Vehicle control (AAOS)'
        ],
        path: 'hardware/interfaces/',
        doc: 'https://source.android.com/docs/core/architecture/hal',
        codeExample: `
// Check HAL services
adb shell lshal

# Specific HAL information
adb shell dumpsys android.hardware.audio@7.0::IDevicesFactory/default
        `.trim()
    },

    'View System': {
        title: 'View System',
        layer: 'Framework Layer',
        description: 'The core system for Android UI rendering. Manages Views, ViewGroups, and Windows.',
        components: [
            'View - Base class for UI components',
            'ViewGroup - Layout container',
            'WindowManager - Window management',
            'Canvas/Paint - Drawing API'
        ],
        path: 'frameworks/base/core/java/android/view/',
        doc: 'https://developer.android.com/reference/android/view/View',
        codeExample: `
// Creating and rendering a View
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
        description: 'Core system service that manages activity lifecycles, back stacks, and tasks.',
        components: [
            'ActivityManagerService (AMS)',
            'Activity Stack Management',
            'Task Management',
            'Process Lifecycle'
        ],
        path: 'frameworks/base/services/core/java/com/android/server/am/',
        doc: 'https://developer.android.com/guide/components/activities',
        codeExample: `
// Starting an Activity
val intent = Intent(this, DetailActivity::class.java)
startActivity(intent)
        `.trim()
    },

    // ========================================
    // Media Framework Nodes
    // ========================================

    'MediaPlayer': {
        title: 'MediaPlayer',
        layer: 'Framework API',
        description: 'The default media playback API in Android SDK. Can play audio and video files.',
        components: [
            'setDataSource() - Set media source',
            'prepare() - Prepare playback',
            'start() / pause() / stop()',
            'seekTo() - Seeking',
            'release() - Resource cleanup'
        ],
        path: 'frameworks/base/media/java/android/media/MediaPlayer.java',
        doc: 'https://developer.android.com/reference/android/media/MediaPlayer',
        codeExample: `
val mediaPlayer = MediaPlayer().apply {
    setDataSource("https://example.com/music.mp3")
    prepare()
    start()
}
        `.trim(),
        relatedIssues: [
            { id: 'issue-buffering', title: 'Video keeps buffering' },
            { id: 'issue-av-sync', title: 'Audio-video sync issues' },
            { id: 'issue-seek-slow', title: 'Slow seek operation' },
            { id: 'issue-cold-start', title: 'Slow playback start' }
        ]
    },

    'ExoPlayer': {
        title: 'ExoPlayer (Media3)',
        layer: 'Framework API',
        description: "Google's advanced media playback library. Supports adaptive streaming like DASH and HLS.",
        components: [
            'Player - Playback control',
            'MediaSource - Media source abstraction',
            'Renderer - Rendering pipeline',
            'TrackSelector - Track selection'
        ],
        path: 'androidx.media3',
        doc: 'https://developer.android.com/guide/topics/media/media3/exoplayer',
        codeExample: `
val player = ExoPlayer.Builder(context).build()
val mediaItem = MediaItem.fromUri(videoUri)
player.setMediaItem(mediaItem)
player.prepare()
player.play()
        `.trim(),
        relatedIssues: [
            { id: 'issue-buffering', title: 'Video keeps buffering' },
            { id: 'issue-av-sync', title: 'Audio-video sync issues' },
            { id: 'issue-seek-slow', title: 'Slow seek operation' },
            { id: 'issue-frame-drop', title: 'Frame drops occurring' }
        ]
    },

    'MediaCodec': {
        title: 'MediaCodec',
        layer: 'Framework API',
        description: 'Low-level API for hardware/software codecs. Provides direct control over encoding/decoding.',
        components: [
            'configure() - Codec configuration',
            'dequeueInputBuffer() - Input buffer',
            'queueInputBuffer() - Data transmission',
            'dequeueOutputBuffer() - Decoding result'
        ],
        path: 'frameworks/base/media/java/android/media/MediaCodec.java',
        doc: 'https://developer.android.com/reference/android/media/MediaCodec',
        codeExample: `
val codec = MediaCodec.createDecoderByType("video/avc")
codec.configure(format, surface, null, 0)
codec.start()
        `.trim(),
        relatedIssues: [
            { id: 'issue-codec-configure', title: 'MediaCodec.configure() fails' },
            { id: 'issue-dequeue-timeout', title: 'dequeueOutputBuffer() timeout' },
            { id: 'issue-resolution-unsupported', title: 'Resolution/framerate not supported' }
        ]
    },

    'MediaCodecService': {
        title: 'MediaCodecService',
        layer: 'Native Layer',
        description: 'Native implementation of MediaCodec. Communicates with Codec 2.0 HAL.',
        components: [
            'IMediaCodecService',
            'MediaCodec Instance Management',
            'Codec 2.0 HAL Interface',
            'Buffer Management'
        ],
        path: 'frameworks/av/media/libmediaplayerservice/',
        doc: 'https://source.android.com/docs/core/media/codec',
        relatedSections: ['section-4']
    },

    'AudioFlinger': {
        title: 'AudioFlinger',
        layer: 'Native Layer',
        description: 'Android audio mixing and output engine. Mixes all audio streams and sends them to HAL.',
        components: [
            'AudioMixer - Multi-stream mixing',
            'PlaybackThread - Playback thread',
            'AudioTrack Management',
            'Audio Policy Application'
        ],
        path: 'frameworks/av/services/audioflinger/',
        doc: 'https://source.android.com/docs/core/audio/audioflinger',
        codeExample: `
// Playing PCM data with AudioTrack
val audioTrack = AudioTrack(...)
audioTrack.write(pcmData, 0, pcmData.size)
audioTrack.play()
        `.trim()
    },

    'Camera HAL': {
        title: 'Camera HAL',
        layer: 'HAL Layer',
        description: 'Hardware Abstraction Layer for camera hardware. Connects camera sensors with the Framework.',
        components: [
            'Camera3Device',
            'Capture Request/Result',
            'Stream Configuration',
            'Metadata Processing'
        ],
        path: 'hardware/interfaces/camera/',
        doc: 'https://source.android.com/docs/core/camera/camera3',
        relatedSections: ['section-3']
    },

    'Audio HAL': {
        title: 'Audio HAL',
        layer: 'HAL Layer',
        description: 'Hardware Abstraction Layer for audio hardware. Connects audio drivers with AudioFlinger.',
        components: [
            'IDevice - Audio device interface',
            'IStream - Audio stream',
            'StreamOut/StreamIn',
            'Audio Effects HAL'
        ],
        path: 'hardware/interfaces/audio/',
        doc: 'https://source.android.com/docs/core/audio/implement',
        relatedSections: ['section-4'],
        codeExample: `
// Audio HAL AIDL Implementation Example (C++)
class StreamOut : public BnStreamOut {
public:
    Status getBufferSizeFrames(int32_t* _aidl_return) override {
        *_aidl_return = mFrameCount;
        return Status::ok();
    }

    Status write(const std::vector<int8_t>& data,
                 WriteStatus* _aidl_return) override {
        // Write PCM data to hardware
        return Status::ok();
    }
};
        `.trim()
    },

    'Linux Kernel': {
        title: 'Linux Kernel',
        layer: 'Kernel Layer',
        description: 'The Linux kernel that forms the foundation of Android. Handles device drivers, memory management, and process scheduling.',
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
# Check kernel logs
adb shell dmesg

# Binder statistics
adb shell cat /proc/binder/stats
        `.trim()
    },

    // ========================================
    // Binder IPC
    // ========================================

    'Binder Driver': {
        title: 'Binder Driver',
        layer: 'Kernel',
        description: "Android's inter-process communication (IPC) mechanism. Implemented as /dev/binder device.",
        components: [
            'Transaction Management',
            'Reference Counting',
            'Death Notification',
            'Memory Mapping (mmap)'
        ],
        path: 'kernel/drivers/android/binder.c',
        doc: 'https://source.android.com/docs/core/architecture/hidl/binder-ipc',
        codeExample: `
# Check Binder information
adb shell cat /sys/kernel/debug/binder/stats
adb shell dumpsys activity services
        `.trim()
    },

    'Service Manager': {
        title: 'Service Manager',
        layer: 'Native',
        description: 'Binder service registry. Central directory where all system services are registered.',
        components: [
            'Service Registration/Lookup',
            'Service Lifecycle Management',
            'Context Manager'
        ],
        path: 'frameworks/native/cmds/servicemanager/',
        doc: 'https://source.android.com/docs/core/architecture/aidl/service-manager',
        codeExample: `
# List registered services
adb shell service list

# Specific service information
adb shell dumpsys media.player
        `.trim()
    },

    // ========================================
    // SurfaceFlinger & Graphics
    // ========================================

    'SurfaceFlinger': {
        title: 'SurfaceFlinger',
        layer: 'Native',
        description: 'Compositor that combines all Surfaces displayed on screen.',
        components: [
            'Layer Management',
            'BufferQueue Consumption',
            'Vsync Synchronization',
            'Hardware Composer (HWC) Integration'
        ],
        path: 'frameworks/native/services/surfaceflinger/',
        doc: 'https://source.android.com/docs/core/graphics/surfaceflinger-windowmanager',
        codeExample: `
# Check SurfaceFlinger information
adb shell dumpsys SurfaceFlinger

# Layer information
adb shell dumpsys SurfaceFlinger --list
        `.trim()
    },

    'BufferQueue': {
        title: 'BufferQueue',
        layer: 'Native',
        description: 'Producer-Consumer pattern buffer queue. Supports Triple Buffering.',
        components: [
            'BufferQueueProducer - Buffer production',
            'BufferQueueConsumer - Buffer consumption',
            'Triple Buffering',
            'Fence Synchronization'
        ],
        path: 'frameworks/native/libs/gui/',
        doc: 'https://source.android.com/docs/core/graphics/arch-bq-gralloc'
    },

    // ========================================
    // Other System Components
    // ========================================

    'Zygote': {
        title: 'Zygote',
        layer: 'Runtime',
        description: 'Parent process of all Android app processes. Forks pre-loaded classes and resources to start apps quickly.',
        components: [
            'Preload Classes/Resources',
            'Fork App Process',
            'Load JNI Libraries',
            'Set SELinux Context'
        ],
        path: 'frameworks/base/core/java/com/android/internal/os/ZygoteInit.java',
        doc: 'https://source.android.com/docs/core/runtime/zygote',
        codeExample: `
# Check Zygote process
adb shell ps | grep zygote

# 64bit/32bit Zygote
zygote64
zygote
        `.trim()
    },

    'System Server': {
        title: 'System Server',
        layer: 'Framework',
        description: 'Process that hosts core Android system services. Over 60 services run here.',
        components: [
            'ActivityManagerService',
            'PackageManagerService',
            'WindowManagerService',
            'PowerManagerService',
            'MediaSessionService',
            '60+ other services'
        ],
        path: 'frameworks/base/services/java/com/android/server/SystemServer.java',
        doc: 'https://source.android.com/docs/core/architecture',
        codeExample: `
# System Server information
adb shell ps | grep system_server

# Service list
adb shell service list
        `.trim()
    }

    // NOTE: This is a partial translation (first ~25 entries out of 756 total)
    // Continue translating remaining entries following the same pattern
};
