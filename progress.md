# progress.md（引き継ぎメモ）

最終更新: 2026-10-08

## いまのページ構成（index.html）
hero（縦書き）→ marquee → **works**（制作サンプル3つのスクショ＋チーム実績12サイトのスクショカード）→ about（SORA / TEAM の役割分担、回転リング）
→ profile（普通の自己紹介＋名前/出身/いま/仕事/好きなことの表、波のアニメーション）→ service → kinetic → flow → price → promise → **faq**（7問、開閉アニメーション）→ contact（最初に教えてほしい4つ：業種・目的・ご予算・公開時期）
- 制作サンプルのカードには「ポイント」3つ（サンプルページに実際にある内容だけ書く）
- スマホ（960px以下）はハンバーガーメニュー。チーム実績はスマホで2列
- promise の3つ目は「1人：ずっと同じ窓口」

- サンプルページ：`salon.html`（美容室）、`accounting.html`（会計事務所）、`cafe.html`（英語のカフェLP）。写真は Unsplash
- works のサンプル画像（`shot_salon` など、`tools/img/shots.json`）は各サンプルページのスクリーンショット。
  サンプルページの見た目を変えたら撮り直す
- index.html は約 556KB（画像込み）

## 決まっていること
- チーム実績は12サイト（aimabel.com は閉店したので外した）。`affiliate-pipeline` の `TEAM_WORKS` と揃える
- FAQ の答えは提案文（affiliate-pipeline の worker_matcher）と食い違わないようにする。支払いはクラウドワークスの仮払い
- contact はボタンなし（「クラウドワークスのメッセージからご連絡ください」の文だけ）

## やり残し・次にやること
- 親名義の CrowdWorks プロフィールURLができたら、contact にそこへのボタンを付ける
- ロゴをアイコン案（C か D）に合わせる（まだ決めていない）
