# progress.md（引き継ぎメモ）

最終更新: 2026-10-08

## いまのページ構成（index.html）
2026-10-08 に白ベースのデザインに作り直した（前の暗いデザインは「AIっぽい」と言われたため。方針は CLAUDE.md）。
hero（コピー＋サンプル3枚のコラージュ）→ 流れる文字 → 01 WORKS（チーム実績12サイト、PCは4列・スマホは2列）→ 02 SAMPLE（制作サンプル3つ＋ポイント3つずつ）
  ※ 実績をサンプルより上に置く（ユーザーの希望）
→ 03 ABOUT（役割分担 SORA / TEAM）→ 04 PROFILE（普通の自己紹介＋表、波）→ 05 SERVICE → 06 FLOW → 07 PRICE（表形式＋24時間 / 3画面 / 1人）
→ 08 FAQ（7問）→ 09 CONTACT（黒背景、最初に教えてほしい4つ：業種・目的・ご予算・公開時期）
- スマホ（960px以下）はハンバーガーメニュー

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
