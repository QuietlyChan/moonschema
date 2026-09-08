#!/usr/bin/env bash
# 构建 Playground：编译 MoonBit → JS (ESM) 并拷贝到 web/ 目录
# 浏览器访问：在 playground/web 下起静态服务，例如
#   python -m http.server 8080   或   npx serve .
# 然后打开 http://localhost:8080
set -e
cd "$(dirname "$0")/.."

moon build --target js --release --strip
cp _build/js/release/build/playground/playground.js playground/web/moonschema.js
echo "OK -> playground/web/moonschema.js"
echo "本地 Node 烟测: node playground/web/smoke.mjs"
