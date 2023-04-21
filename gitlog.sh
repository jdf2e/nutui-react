#!/bin/bash

# 提取 某个时间之后的提交信息
latestPublishedDate="$1"
log=$(git log --since="$latestPublishedDate" --pretty=format:%s\ @%an)

## Feat 和 Fix 转小写，句号转空
log=$(echo "$log" | sed 's/feat/feat/i;s/fix/fix/i;s/。//')

# 提交信息进行不区分大小写的排序
log=$(echo "$log" | sort -f)

# 增加 emoji
log=$(echo "$log" | sed 's/^feat/* :sparkles: feat/i;s/^fix/* :bug: fix/i;s/^chore/* 🔨 chore/i;s/^refactor/* 🛠 refactor/i;s/^docs/* 📖 docs/i')

version="$2"
today=$(date "+%Y-%m-%d")
todayChangeLog=$(echo -e "# v$2\n\`$today\`\n\n$log")
oldChangeLog=$(cat ./CHANGELOG.md)

echo -e "$todayChangeLog\n\n\n$oldChangeLog" > ./CHANGELOG.md