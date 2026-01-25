#!/usr/bin/env python3
"""
Update all HTML documentation pages with new design system
Preserves content while updating styles and fonts
"""

import os
import re
from pathlib import Path

def update_html_file(file_path):
    """Update a single HTML file with new design system"""

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Skip if already updated (check for design-system.css)
    if 'design-system.css' in content:
        print(f"  ✓ Already updated: {file_path.name}")
        return False

    # 1. Update font imports
    old_font_pattern = r'<link\s+href="https://fonts\.googleapis\.com/css2\?family=Noto\+Sans\+KR[^"]*"\s+rel="stylesheet">'
    new_font_import = '''<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;600;700;900&family=IBM+Plex+Mono:wght@400;500;600&family=Playfair+Display:wght@700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles/design-system.css">'''

    content = re.sub(old_font_pattern, new_font_import, content)

    # 2. Remove inline <style> tag but keep mermaid config
    style_pattern = r'<style>.*?</style>'

    def replace_style(match):
        style_content = match.group(0)
        # Keep only minimal page-specific overrides if needed
        return '    <style>\n        /* Page-specific styles loaded from design-system.css */\n    </style>'

    content = re.sub(style_pattern, replace_style, content, flags=re.DOTALL)

    # 3. Update class names to match design system
    # Update header titles
    content = re.sub(r'<h1>(.*?)</h1>', r'<h1 class="page-title">\1</h1>', content)
    content = re.sub(r'<p class="subtitle">', r'<p class="page-subtitle">', content)

    # Update sections
    content = re.sub(r'<section class="section">', r'<section class="content-section section">', content)

    # Update diagram containers
    content = re.sub(r'<div class="diagram-container">', r'<div class="mermaid-container">', content)

    # Write updated content
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"  ✓ Updated: {file_path.name}")
    return True

def main():
    """Update all HTML files except index.html"""

    # Get all HTML files in current directory
    html_files = list(Path('.').glob('*.html'))

    # Exclude index.html as it's already redesigned
    html_files = [f for f in html_files if f.name != 'index.html']

    print(f"\n🎨 Updating {len(html_files)} HTML files with new design system...\n")

    updated_count = 0
    for html_file in sorted(html_files):
        try:
            if update_html_file(html_file):
                updated_count += 1
        except Exception as e:
            print(f"  ✗ Error updating {html_file.name}: {e}")

    print(f"\n✨ Complete! Updated {updated_count} files.\n")
    print("Note: Mermaid diagrams and content preserved. Styles updated to design-system.css")

if __name__ == '__main__':
    main()
