#!/usr/bin/env python3
"""
Translate DIAGRAM_NODE_DATA_KO to English and create DIAGRAM_NODE_DATA_EN
"""

import re
import json

def translate_layer(layer_ko):
    """Translate layer names to English"""
    layer_map = {
        'Application Layer': 'Application Layer',
        'Framework Layer': 'Framework Layer',
        'Runtime': 'Runtime',
        'Native Layer': 'Native Layer',
        'HAL': 'HAL',
        'Kernel': 'Kernel',
        'DRM': 'DRM',
        'TEE': 'TEE',
        'Testing': 'Testing',
        'Application': 'Application',
        'Framework': 'Framework',
        'Native': 'Native',
        'Hardware': 'Hardware',
        'Service': 'Service',
        'Audio': 'Audio',
        'Media': 'Media',
        'Automotive': 'Automotive',
        'Security': 'Security',
        'Network': 'Network',
        'Storage': 'Storage',
        'Graphics': 'Graphics',
        'IPC': 'IPC',
        'Boot': 'Boot',
        'System': 'System',
        'Vendor': 'Vendor',
        'OEM': 'OEM'
    }
    return layer_map.get(layer_ko, layer_ko)

def translate_technical_term(text):
    """Keep technical terms as-is, translate descriptions"""
    # Common technical terms that should remain in English
    technical_terms = [
        'MediaPlayer', 'MediaCodec', 'AudioFlinger', 'SurfaceFlinger',
        'Binder', 'HAL', 'Framework', 'Native', 'Kernel', 'Runtime',
        'API', 'SDK', 'NDK', 'JNI', 'AIDL', 'HIDL', 'IPC', 'RPC',
        'MediaSession', 'ExoPlayer', 'Media3', 'Codec2', 'CCodec',
        'AudioTrack', 'AudioRecord', 'Camera', 'GPU', 'CPU',
        'Widevine', 'DRM', 'TEE', 'OEMCrypto', 'CDM',
        'Dolby', 'Atmos', 'AC-4', 'Vision', 'AAC', 'HEVC',
        'AAOS', 'CarService', 'Vehicle HAL', 'GAS', 'CarMa',
        'CTS', 'VTS', 'GTS', 'CDD', 'Treble',
        'ION', 'Gralloc', 'BufferQueue', 'HWComposer',
        'Zygote', 'Init', 'ServiceManager', 'SystemServer',
        'ART', 'DEX', 'AOT', 'JIT', 'GC',
        'Perfetto', 'Logcat', 'Systrace', 'dumpsys'
    ]

    # Check if the text is a technical term
    for term in technical_terms:
        if term.lower() in text.lower():
            return text

    return text

# Translation mappings for common Korean phrases
translation_map = {
    # Common descriptions
    '입니다': 'is',
    '를': '',
    '을': '',
    '의': 'of',
    '와': 'and',
    '과': 'and',
    '에': 'to',
    '로': 'with',
    '으로': 'with',
    '가': '',
    '이': '',
    '하는': '',
    '합니다': '',
    '포함합니다': 'includes',
    '제공합니다': 'provides',
    '관리합니다': 'manages',
    '처리합니다': 'processes',
    '담당합니다': 'handles',

    # Common components
    '핵심': 'core',
    '시스템': 'system',
    '서비스': 'service',
    '관리자': 'manager',
    '제어': 'control',
    '처리': 'processing',
    '프레임워크': 'framework',
    '라이브러리': 'library',
    '드라이버': 'driver',
    '인터페이스': 'interface',
    '계층': 'layer',
    '모듈': 'module',
    '컴포넌트': 'component',
    '클라이언트': 'client',
    '프록시': 'proxy',
    '스텁': 'stub',

    # Media related
    '미디어': 'media',
    '오디오': 'audio',
    '비디오': 'video',
    '재생': 'playback',
    '녹음': 'recording',
    '인코딩': 'encoding',
    '디코딩': 'decoding',
    '스트리밍': 'streaming',
    '버퍼': 'buffer',
    '코덱': 'codec',

    # AAOS related
    '차량': 'vehicle',
    '자동차': 'automotive',
    '운전자': 'driver',
    '승객': 'passenger',
    '좌석': 'seat',
    '존': 'zone',

    # Testing
    '테스트': 'test',
    '검증': 'validation',
    '호환성': 'compatibility',
    '성능': 'performance',

    # Common actions
    '설정': 'settings',
    '구성': 'configuration',
    '초기화': 'initialization',
    '시작': 'start',
    '중지': 'stop',
    '일시정지': 'pause',
    '재개': 'resume',
    '연결': 'connection',
    '해제': 'disconnection'
}

print("Translation dictionary created. Manual translation needed for full accuracy.")
print("\nNote: This is a helper script. Full translation requires AI or human translator.")
print("Please use Claude or another AI to translate the actual descriptions accurately.")
