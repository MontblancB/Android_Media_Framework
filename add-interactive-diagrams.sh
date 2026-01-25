#!/bin/bash

# 인터랙티브 다이어그램 스크립트를 모든 HTML 파일에 추가

echo "🚀 인터랙티브 다이어그램 스크립트 추가 시작..."

# 작업할 디렉토리
cd "$(dirname "$0")"

# 처리할 파일 카운터
processed=0
skipped=0
added=0

# 모든 HTML 파일 순회 (index.html, old_main_page.html 제외)
for file in *.html; do
    # 제외할 파일
    if [ "$file" = "index.html" ] || [ "$file" = "old_main_page.html" ]; then
        echo "⏭️  $file - 건너뛰기 (제외 파일)"
        ((skipped++))
        continue
    fi

    ((processed++))

    # 이미 스크립트가 추가되어 있는지 확인
    if grep -q "diagram-interactive.js" "$file"; then
        echo "✅ $file - 이미 스크립트가 추가됨"
        continue
    fi

    # theme-toggle.js 이전에 인터랙티브 스크립트 삽입
    if grep -q "theme-toggle.js" "$file"; then
        # macOS sed는 -i 뒤에 빈 문자열이나 확장자가 필요
        sed -i.bak '/<script src="scripts\/theme-toggle.js"><\/script>/i\
    <!-- Interactive Diagram Features -->\
    <script src="scripts\/diagram-data.js"><\/script>\
    <script src="scripts\/diagram-interactive.js"><\/script>\
\
' "$file"

        # 백업 파일 삭제
        rm -f "${file}.bak"

        echo "➕ $file - 스크립트 추가 완료"
        ((added++))
    else
        echo "⚠️  $file - theme-toggle.js를 찾을 수 없음 (스킵)"
    fi
done

echo ""
echo "✨ 완료!"
echo "   처리한 파일: $processed개"
echo "   스크립트 추가: $added개"
echo "   건너뛴 파일: $skipped개"
