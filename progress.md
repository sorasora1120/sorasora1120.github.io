# progress.md（引き継ぎメモ）

最終更新: 2026-10-12

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

- `design.html`（2026-10-12）：チラシ・名刺・ロゴ・バナー・パッケージのデザインサンプル。affiliate-pipeline がこの種類の案件も拾うように
  なり（ユーザー「じゃあ仕事増やそう」）、提案文の最初にこのページを案内する（`worker_matcher.DESIGN_SAMPLES_URL`）。
  架空の3店（Lumière・みなと会計事務所・Windsor Urban Café）。文字はHTML・CSS・SVGで組み、写真は CSS 変数で1回だけ埋め込む。
  中の大きさは `container-type: inline-size` と cqw でそろえる（**container の要素自身に padding を付けない**：padding 自体と中身の cqw が
  ずれて文字が小さくなった。padding は内側の `.pad` に付ける）。トップの「できること」の下と「デザインサンプル」の下からリンク
  - いまの形（2026-10-12、4回目。「もっと写真とかほしいしもっとかっこよくして」と言われて）：作品を机・壁・布の写真の上に置いて見せる
    モックアップ（`.scene` ＋ `.put`、影と光は CSS）。
    表紙＝暗い布（d_linen）の上にチラシ3枚・名刺3枚を並べる（下の作品を JS で複製：`data-clone`。真ん中の一番上が会計事務所）／
    ロゴ＝各店の写真の上に置いた例（salon1・tower・pourover）＋カラー・反転のタイル／
    チラシ3枚＝Lumière（変えていない）・みなと会計事務所・Windsor Urban Café（新しく追加。英語のポスター、大きな POUR / OVER で
    ハンドドリップの写真をはさむ）／名刺＝Lumière・みなと・カフェのスタンプカード（新しく追加）／バナー／パッケージ（漆喰の壁の前）。
    チラシと名刺はタップで拡大（`data-zoom` → `.lb`）。PCは3列、iPad（960px以下）は2列、スマホ（640px以下）は1列で台を画面の端まで
  - みなと会計事務所のチラシ：港区の事務所という設定にして、東京タワーの夜景（tower）を上に大きく。夜空に明朝の見出し
    「確定申告、ひとりで悩まない。」と「平日の夜も、税理士に相談できます。」（相談は火・木の夜と土曜）、下の和紙の段に日程と時間、
    朱色の「相談受付」の印を写真と段の境目にかける。角印のロゴの朱色が東京タワーの色と重なる。バナー2つも同じ夜景にした
  - それまでの経緯（ユーザーの好みが分かる）：最初の版は「ダサい・AIっぽい」（写真にグラデーション＋白文字、紺の帯＋タグ＋チェックの
    箇条書き、細線のアイコン）→ 美容室は雑誌の表紙の形で「いい感じ」、会計事務所はカレンダーが主役の太いゴシックで「クソダサい」→
    外国人のモデルの写真の版は「変だよ」（日本の会計事務所に見えない）→ 写真なしの和紙と縦書きの版 → 今の形。
    **好み：写真が大きく、明朝・細い英字で、色をしぼった雑誌のような組み方。太いゴシック・色のついた丸・チェックリスト・帯のような
    「チラシの型」はダサいと感じる。人物の写真を使う時は、案件の国・業種に合う人か確かめる（人がいない写真の方が無難）**
  - 写真の探し方：Openverse の API（api.openverse.org、ライセンスを cc0 にしぼる）で探し、GitHub Actions の一時ブランチで一覧画像を作って
    選んだ（このコンテナからは写真サイトにつながらない）。StockSnap と WordPress Photo Directory の写真は CC0。Unsplash の検索と Pexels の
    ページは「ボットではないか」の確認が出るので使わない。rawpixel は透かしが入るので使わない。StockSnap は幅960pxまで
  - 写真の data URI は重いので、CSS 変数はページの最後の `<style>` に置く（先に文字が出る）。台の写真は
    `BLUR=0.7 node tools/enc.js ... 900 0.5` で軽くした。design.html は約830KB
  - 小さく複製した名刺で文字が重なった：cqw で文字を小さくしても、font-size を付けていない親の行の高さ（body の14.5px×2）が残るため。
    小さい文字を中に持つ親にも cqw の font-size と line-height を付ける
  - スクショ確認：Google Fonts の CSS は大きいので、Playwright の route で curl する時は `maxBuffer` を大きくする（ENOBUFS で全部フォールバックになった）。
    Linux の Chromium は小さい英字の間隔が乱れて写るので `--font-render-hinting=none` を付ける（実機の見た目とは関係ない）。
    表紙は動きが終わる前に撮ると写らないので `reducedMotion: 'reduce'` で撮る

## 決まっていること
- アイコンは案Dベース（黒地に SORA / WEB DESIGN、Jost の細字）：`assets/brand/sora-icon.png`（800×800、クラウドワークス用）。ファビコンは `tools/img/favicon.json`
- チーム実績は12サイト（aimabel.com は閉店したので外した）。`affiliate-pipeline` の `TEAM_WORKS` と揃える
- FAQ の答えは提案文（affiliate-pipeline の worker_matcher）と食い違わないようにする。支払いはクラウドワークスの仮払い
- クラウドワークスのプロフィール: https://crowdworks.jp/public/employees/6831717（contact の「クラウドワークスで相談する」ボタンのリンク先）。
  2026-10-10、ユーザーがこのアカウントを親の名義に書き換えた（新しく作ったのではなく同じアカウント）

## やり残し・次にやること
- ワーカーに各実績サイトの担当範囲（デザイン / 構築 / 使ったツール）を確認中。返事が来たら WORKS の各カードに「担当：〜」を追加（本当のことだけ）

## 2026-10-16 英語の営業サイト（en.html）を作り直し
- 「ドメインは買わなくていいから、いいの作って」→ en.html を現地のお店向けの営業サイトに作り直した（URL: https://sorasora1120.github.io/en.html）
- 一番上は見本サイトの動画（samples/video/reel.mp4）、見本4つはスマホの枠で動画再生＋PCではスクロールで起き上がる3D、できること、チームの実績12、流れ、料金（local-en.html と同じ $400・最初の3店 $250・追加ページ $100・更新 $25/月 に、複数ページ $900〜・EC $1,400〜）、自己紹介、FAQ、連絡先（?name=&email=&phone=）
- `samples/*.html` と `samples/video/*.mp4` は dispatch-viewer の previews/demo-*.html と previews/video/ のコピー（あちらで作り直したらコピーし直す）。build.py は通さない
- 回転するリング・カーソルの光はこのサイトの方針（CLAUDE.md）に合わせて入れていない

## 2026-10-15 英語版（en.html）
- 海外・現地（Windsor）のお客さん向けの英語版 `src/en.html`（`index.html` のCSSと動きをそのまま使い、見出しは Instrument Serif、本文は Jost）
- 中身：チームの実績12（チームの実績としてだけ）→ How we work → 自己紹介 → できること → 流れ → 料金（CAD、1ページ $400〜・複数ページ $900〜・EC $1,400〜・更新 $25/月〜）
  → 架空の見本4つ（dispatch-viewer の previews/demo-*.html、スクショは `tools/img/shots_en.json`）→ FAQ → 連絡先（`?name=&email=&phone=`）
- 支払いの書き方は「半分を先に、半分を公開時」だけ（受け取る人は書かない。現地の仕事のお金は友達が受け取る約束のため）
- 日本語版のメニューに EN、英語版に 日本語 のリンク
