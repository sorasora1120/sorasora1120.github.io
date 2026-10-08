# ソラ｜Web制作

制作実績・制作サンプル: https://sorasora1120.github.io/

制作サンプル（salon / accounting / cafe）は架空の店舗・事務所です。

## 編集のしかた
- ページの元は `src/*.html`。画像は `{{名前}}` で書き、`python3 tools/build.py` で埋め込んだものをルートに書き出す（画像データは `tools/img/*.json`）
  （画像を別ファイルにすると、学校のネットワークや rawcdn.githack.com 経由で読み込めないことがあったため）
- 写真は Unsplash、チームの実績スクリーンショットは `.github/workflows/capture.yml` で取得（`assets/`）
