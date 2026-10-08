# progress.md（引き継ぎメモ）

最終更新: 2026-10-08

## いまのページ構成（index.html）
2026-10-08 に「高級感」重視で作り直し、その後ユーザーの希望で黒ベースにした（明朝の見出し・黒白グレー・ゆっくりした動き。方針は CLAUDE.md）。
- チーム実績のスクショは 1280×800 で撮り直し済み（capture.yml）。一覧は720px（tools/img/team.json）、ヒーローは1200pxの別データ（tools/img/hero.json）
- index.html は約 1.45MB（画像を高画質にしたため）
hero（コピー＋チーム実績4サイトのスライドショー）→ WORKS（チーム実績12サイト、PCは3列で中央列を下げる・スマホは2列）
→ ABOUT（役割分担 SORA / TEAM）→ PROFILE（普通の自己紹介＋表、波）→ SERVICE → FLOW → PRICE（表形式＋24時間 / 3画面 / 1人）
→ SAMPLE（架空の制作サンプル3つ＋ポイント）→ FAQ（7問）→ CONTACT（黒背景、最初に教えてほしい4つ）
- 架空サンプルは下に置く（ユーザーの希望：実績が上、仮のサイトは下）
- スマホ（960px以下）はハンバーガーメニュー
- 確認用スクショ：fullPage で撮ると clip-path の中の absolute 画像が白く写ることがある。実際の表示はスクロールしてビューポートで確認する

- サンプルページ：`salon.html`（美容室）、`accounting.html`（会計事務所）、`cafe.html`（英語のカフェLP）。写真は Unsplash
- works のサンプル画像（`shot_salon` など、`tools/img/shots.json`）は各サンプルページのスクリーンショット。
  サンプルページの見た目を変えたら撮り直す

## 決まっていること
- アイコンは案Dベース（黒地に SORA / WEB DESIGN、Jost の細字）：`assets/brand/sora-icon.png`（800×800、クラウドワークス用）。ファビコンは `tools/img/favicon.json`
- チーム実績は12サイト（aimabel.com は閉店したので外した）。`affiliate-pipeline` の `TEAM_WORKS` と揃える
- FAQ の答えは提案文（affiliate-pipeline の worker_matcher）と食い違わないようにする。支払いはクラウドワークスの仮払い
- contact はボタンなし（「クラウドワークスのメッセージからご連絡ください」の文だけ）

## やり残し・次にやること
- ワーカーに各実績サイトの担当範囲（デザイン / 構築 / 使ったツール）を確認中。返事が来たら WORKS の各カードに「担当：〜」を追加（本当のことだけ）
- 親名義の CrowdWorks プロフィールURLができたら、contact にそこへのボタンを付ける
