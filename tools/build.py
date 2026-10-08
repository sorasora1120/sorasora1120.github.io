"""src/*.html の {{画像名}} を data URI に置き換えて、公開用のHTMLを書き出す。

画像は別ファイルにすると学校などのネットワーク・CDN経由で読み込めないことがあった
ため、ページに埋め込む。data URI は tools/enc.js で assets/ から作る:
  node tools/enc.js /tmp/img.json 1000 0.62 assets/photos/salon1.jpg ...
  python3 tools/build.py /tmp/img.json [/tmp/img2.json ...]
"""
import json, re, sys, pathlib

root = pathlib.Path(__file__).resolve().parent.parent
images = {}
for f in sys.argv[1:]:
    images.update(json.load(open(f)))
for src in (root / "src").glob("*.html"):
    html = src.read_text(encoding="utf-8")
    missing = sorted(set(re.findall(r"\{\{(\w+)\}\}", html)) - set(images))
    if missing:
        sys.exit(f"{src.name}: 画像が見つかりません: {missing}")
    out = re.sub(r"\{\{(\w+)\}\}", lambda m: images[m.group(1)], html)
    (root / src.name).write_text(out, encoding="utf-8")
    print(src.name, len(out) // 1024, "KB")
