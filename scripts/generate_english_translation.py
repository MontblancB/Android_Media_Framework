#!/usr/bin/env python3
"""
Generate English translation for DIAGRAM_NODE_DATA
Extracts Korean data and outputs structured English translation template
"""

import re
import sys

def extract_ko_section(file_path):
    """Extract DIAGRAM_NODE_DATA_KO section"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    ko_start = content.find('const DIAGRAM_NODE_DATA_KO = {')
    ko_end = content.find('// ========================================\n// 영문 다이어그램 데이터 (English)')

    if ko_start == -1 or ko_end == -1:
        print("Error: Could not find KO data section")
        sys.exit(1)

    return content[ko_start:ko_end].strip()

def count_entries(ko_section):
    """Count the number of entries"""
    entries = re.findall(r"^\s{4}'([^']+)':\s*\{", ko_section, re.MULTILINE)
    return len(entries), entries

def main():
    file_path = '/Users/se-hyunbaek/Desktop/WorkSpace/98_LGE/02_Android_Media_Framework/Android_Media_Framework/scripts/diagram-data.js'

    print("Extracting Korean data...")
    ko_section = extract_ko_section(file_path)

    count, entries = count_entries(ko_section)
    print(f"Total entries to translate: {count}")
    print(f"\nFirst 20 entries:")
    for i, entry in enumerate(entries[:20], 1):
        print(f"{i:3d}. {entry}")

    print(f"\n...({count - 40} more entries)...\n")

    print(f"Last 20 entries:")
    for i, entry in enumerate(entries[-20:], count-19):
        print(f"{i:3d}. {entry}")

if __name__ == '__main__':
    main()
