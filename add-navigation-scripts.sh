#!/bin/bash

# 모든 HTML 파일에 내비게이션 스크립트 추가
# (index.html 제외)

for file in *.html; do
    # index.html은 제외
    if [ "$file" = "index.html" ] || [ "$file" = "old_main_page.html" ]; then
        continue
    fi

    # 이미 copy-code.js가 있는지 확인
    if grep -q "copy-code.js" "$file"; then
        echo "✅ $file - 이미 스크립트가 추가됨"
        continue
    fi

    # theme-toggle.js 라인 찾기
    if grep -q "theme-toggle.js" "$file"; then
        # theme-toggle.js 전에 새로운 스크립트 추가
        sed -i.bak '/<script src="scripts\/theme-toggle.js"><\/script>/i\
    <!-- Navigation & Copy Features -->\
    <script src="scripts\/copy-code.js"><\/script>\
    <script src="scripts\/toc-generator.js"><\/script>\
    <script src="scripts\/page-navigation.js"><\/script>\
' "$file"
        echo "✅ $file - 스크립트 추가 완료"
    else
        # theme-toggle.js가 없으면 </body> 전에 추가
        sed -i.bak '/<\/body>/i\
\
    <!-- Navigation & Copy Features -->\
    <script src="scripts\/copy-code.js"><\/script>\
    <script src="scripts\/toc-generator.js"><\/script>\
    <script src="scripts\/page-navigation.js"><\/script>\
    <script src="scripts\/theme-toggle.js"><\/script>\
' "$file"
        echo "✅ $file - 스크립트 추가 완료 (theme-toggle.js 포함)"
    fi
done

# 백업 파일 삭제
rm -f *.html.bak

echo ""
echo "🎉 모든 HTML 파일에 내비게이션 스크립트가 추가되었습니다!"
