#!/usr/bin/env python3
"""
Add theme toggle script to all HTML pages
"""

import os
import re
from pathlib import Path

def add_theme_script(file_path):
    """Add theme toggle script to HTML file"""

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Skip if already added
    if 'theme-toggle.js' in content:
        print(f"  ✓ Already has theme toggle: {file_path.name}")
        return False

    # Add script before closing </body> tag
    script_tag = '    <script src="scripts/theme-toggle.js"></script>\n</body>'

    if '</body>' in content:
        content = content.replace('</body>', script_tag)
    else:
        print(f"  ✗ No </body> tag found: {file_path.name}")
        return False

    # Write updated content
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"  ✓ Added theme toggle: {file_path.name}")
    return True

def main():
    """Add theme toggle to all HTML files"""

    # Get all HTML files in current directory
    html_files = list(Path('.').glob('*.html'))

    print(f"\n🌓 Adding theme toggle to {len(html_files)} HTML files...\n")

    updated_count = 0
    for html_file in sorted(html_files):
        try:
            if add_theme_script(html_file):
                updated_count += 1
        except Exception as e:
            print(f"  ✗ Error updating {html_file.name}: {e}")

    print(f"\n✨ Complete! Added theme toggle to {updated_count} files.\n")

if __name__ == '__main__':
    main()
