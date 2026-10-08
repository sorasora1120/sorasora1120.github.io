# progress.md（引き継ぎメモ）

最終更新: 2026-10-08

## いまのページ構成（index.html）
2026-10-08 に「高級感」重視で作り直した（明朝の見出し・白黒紺・ゆっくりした動き。方針は CLAUDE.md）。
hero（コピー＋チーム実績4サイトのスライドショー）→ WORKS（チーム実績12サイト、PCは3列で中央列を下げる・スマホは2列）
→ ABOUT（役割分担 SORA / TEAM）→ PROFILE（普通の自己紹介＋表、波）→ SERVICE → FLOW → PRICE（表形式＋24時間 / 3画面 / 1人）
→ SAMPLE（架空の制作サンプル3つ＋ポイント）→ FAQ（7問）→ CONTACT（黒背景、最初に教えてほしい4つ）
- 架空サンプルは下に置く（ユーザーの希望：実績が上、仮のサイトは下）
- スマホ（960px以下）はハンバーガーメニュー
- 確認用スクショ：fullPage で撮ると clip-path の中の absolute 画像が白く写ることがある。実際の表示はスクロールしてビューポートで確認する

- サンプルページ：`salon.html`（美容室）、`accounting.html`（会計事務所）、`cafe.html`（英語のカフェLP）。写真は Unsplash
- works のサンプル画像（`shot_salon` など、`tools/img/shots.json`）は各サンプルページのスクリーンショット。
  サンプルページの見た目を変えたら撮り直す
- index.html は約 542KB（画像込み）

## 決まっていること
- チーム実績は12サイト（aimabel.com は閉店したので外した）。`affiliate-pipeline` の `TEAM_WORKS` と揃える
- FAQ の答えは提案文（affiliate-pipeline の worker_matcher）と食い違わないようにする。支払いはクラウドワークスの仮払い
- contact はボタンなし（「クラウドワークスのメッセージからご連絡ください」の文だけ）

## やり残し・次にやること
- 親名義の CrowdWorks プロフィールURLができたら、contact にそこへのボタンを付ける
- ロゴをアイコン案（C か D）に合わせる（まだ決めていない）
