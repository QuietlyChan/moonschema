#!/usr/bin/env bash
# 一键完成 GitHub 认证 → 创建公开仓库 → 推送 moonschema
# 前置：能访问 github.com 的网络（必要时先开代理）
# 用法：在仓库根目录执行  bash push-to-github.sh
set -e
cd "$(dirname "$0")"

GH="/c/Program Files/GitHub CLI/gh.exe"
if command -v gh >/dev/null 2>&1; then
  GH="$(command -v gh)"
fi

echo "== 1/3 GitHub 账号认证（浏览器设备流）="
echo "   浏览器打开 https://github.com/login/device 并输入下方一次性代码"
"$GH" auth login --hostname github.com --git-protocol https --web

echo "== 2/3 创建公开仓库 moonschema 并推送 ="
if git remote get-url origin >/dev/null 2>&1; then
  git push -u origin main
else
  "$GH" repo create moonschema --public --source . --remote origin --push
fi

echo "== 3/3 完成 ="
git remote -v
echo "仓库地址: https://github.com/$("$GH" api user -q .login)/moonschema"
echo "提示: 推送后 GitHub Actions 会自动跑 CI（moon check / fmt / 双目标测试）"
