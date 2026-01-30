#!/usr/bin/env python3
"""
Translate DIAGRAM_NODE_DATA_KO to English
This script extracts the Korean data and provides a framework for translation.

Usage:
    python3 translate_ko_to_en.py

The script will:
1. Extract all Korean entries
2. Generate a structured English template
3. Preserve code examples, paths, and URLs
4. Only translate descriptions and component names
"""

import re
import json

# Translation dictionary for common technical terms and phrases
TRANSLATIONS = {
    # Technical terms (keep as-is in English)
    'MediaPlayer': 'MediaPlayer',
    'MediaCodec': 'MediaCodec',
    'AudioFlinger': 'AudioFlinger',
    'SurfaceFlinger': 'SurfaceFlinger',

    # Common Korean phrases
    '입니다': '',
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

    # System components
    '시스템': 'system',
    '서비스': 'service',
    '관리자': 'manager',
    '관리': 'management',
    '제어': 'control',
    '처리': 'processing',
    '프레임워크': 'framework',
    '라이브러리': 'library',
    '드라이버': 'driver',
    '인터페이스': 'interface',
    '계층': 'layer',
    '모듈': 'module',
    '컴포넌트': 'component',

    # Media terms
    '미디어': 'media',
    '오디오': 'audio',
    '비디오': 'video',
    '재생': 'playback',
    '녹음': 'recording',
    '인코딩': 'encoding',
    '디코딩': 'decoding',
    '버퍼': 'buffer',
    '코덱': 'codec',

    # Actions
    '설정': 'settings',
    '구성': 'configuration',
    '초기화': 'initialization',
    '시작': 'start',
    '중지': 'stop',
    '일시정지': 'pause',
    '연결': 'connection',
}

def extract_korean_data(file_path):
    """Extract DIAGRAM_NODE_DATA_KO section"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the Korean data section
    ko_start = content.find('const DIAGRAM_NODE_DATA_KO = {')
    en_start = content.find('const DIAGRAM_NODE_DATA_EN = {')

    if ko_start == -1 or en_start == -1:
        raise ValueError("Could not find data sections")

    ko_section = content[ko_start:en_start]
    return ko_section

def parse_entries(ko_section):
    """Parse individual entries from Korean data"""
    # This is a simplified parser - for full translation,
    # you would need a more robust JavaScript parser

    entries = []
    current_entry = None
    current_key = None

    lines = ko_section.split('\n')

    for line in lines:
        # Match entry start: '    'NodeName': {
        entry_match = re.match(r"^\s{4}'([^']+)':\s*\{", line)
        if entry_match:
            if current_entry:
                entries.append(current_entry)
            current_entry = {
                'name': entry_match.group(1),
                'content': [line]
            }
        elif current_entry:
            current_entry['content'].append(line)

            # Check for closing brace
            if re.match(r"^\s{4}\},?\s*$", line):
                entries.append(current_entry)
                current_entry = None

    return entries

def translate_description(korean_text):
    """
    Translate Korean description to English
    This is a placeholder - in practice, you would use an AI service or manual translation
    """
    # Basic cleaning
    text = korean_text.strip()

    # For now, return a template that needs manual translation
    return f"[TRANSLATE: {text}]"

def generate_english_file(entries):
    """Generate English translation file"""
    output = "const DIAGRAM_NODE_DATA_EN = {\n"
    output += "    // ========================================\n"
    output += "    // English Diagram Data (Auto-generated template)\n"
    output += "    // ========================================\n\n"

    for entry in entries:
        # Add entry with placeholder translations
        output += f"    '{entry['name']}': {{\n"
        output += "        // TODO: Translate this entry\n"
        for line in entry['content'][1:]:  # Skip first line (entry name)
            output += line + '\n'

    output += "};\n"
    return output

def main():
    input_file = '/Users/se-hyunbaek/Desktop/WorkSpace/98_LGE/02_Android_Media_Framework/Android_Media_Framework/scripts/diagram-data.js'
    output_file = '/Users/se-hyunbaek/Desktop/WorkSpace/98_LGE/02_Android_Media_Framework/Android_Media_Framework/scripts/diagram-data-en-generated.js'

    print("Extracting Korean data...")
    ko_section = extract_korean_data(input_file)

    print("Parsing entries...")
    entries = parse_entries(ko_section)

    print(f"Found {len(entries)} entries")

    print("\nSample entries:")
    for i, entry in enumerate(entries[:5]):
        print(f"{i+1}. {entry['name']}")

    print("\n" + "="*60)
    print("RECOMMENDATION:")
    print("="*60)
    print("""
Given the size of this file (756 entries, ~12,000 lines), I recommend:

1. **Use Claude API for batch translation:**
   - Process entries in chunks of 50-100
   - Maintain technical term accuracy
   - Preserve code examples exactly

2. **Manual approach for high quality:**
   - Work section by section (e.g., AOSP→Media→Codec2→etc.)
   - Use the partial translation I created as a reference
   - Ensure consistency across all entries

3. **Semi-automated with review:**
   - Use DeepL API or Google Cloud Translation
   - Post-process for technical accuracy
   - Human review of all translations

Would you like me to:
A) Create a chunked translation script using Claude API?
B) Translate specific sections you prioritize?
C) Create a detailed translation guideline document?
""")

if __name__ == '__main__':
    main()
