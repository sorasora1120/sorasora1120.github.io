// 一時的な素材取得スクリプト（GitHub Actions上で実行）。
// 1) 連携チームの制作実績サイトのスクリーンショット
// 2) 制作サンプル用の写真（Unsplash、商用利用可のライセンス）
const { chromium } = require('playwright');
const fs = require('fs');
const https = require('https');

const SITES = {
  gipsyqueens: 'https://gipsyqueens.com/', maribelli: 'https://maribelli-shop.com/', amdor: 'https://amdor.de/',
  whitesand: 'https://whitesandgolf.com/', bigcove: 'https://bigcoveecycles.com/', skyfox: 'https://www.skyfoxtech.com/',
  hogplay: 'https://hogplay.myshopify.com/', bsonme: 'https://bsonme.com/', golfcars: 'https://golfcarsofarizona.com/',
  havoc: 'https://havocpowersports.com/', malane: 'https://malanelighting.com/',
  massinart: 'https://massinart.ma/',
};
const PHOTOS = {
  salon1: 'photo-1560066984-138dadb4c035', salon2: 'photo-1522337360788-8b13dee7a37e', salon3: 'photo-1562322140-8baeececf3df',
  salon4: 'photo-1595476108010-b4d1f102b1b1', salon5: 'photo-1633681926022-84c23e8cb2d6',
  office1: 'photo-1497366216548-37526070297c', office2: 'photo-1554224155-6726b3ff858f', office3: 'photo-1600880292203-757bb62b4baf',
  office4: 'photo-1573496359142-b8d87734a5a2', office5: 'photo-1556761175-b413da4baf72',
  cafe1: 'photo-1495474472287-4d71bcdd2085', cafe2: 'photo-1509042239860-f550ce710b93', cafe3: 'photo-1554118811-1e0d58224f24',
  cafe4: 'photo-1509440159596-0249088772ff', cafe5: 'photo-1501339847302-ac426a4a7cbb',
};

function download(url, path) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) return resolve(download(res.headers.location, path));
      if (res.statusCode !== 200) { console.log('NG', res.statusCode, url); res.resume(); return resolve(false); }
      const f = fs.createWriteStream(path); res.pipe(f); f.on('finish', () => { f.close(); resolve(true); });
    }).on('error', (e) => { console.log('ERR', url, e.message); resolve(false); });
  });
}

(async () => {
  fs.mkdirSync('assets/team', { recursive: true });
  fs.mkdirSync('assets/photos', { recursive: true });
  // 写真は取得済み。撮り直したいときだけ PHOTOS=1 で実行する
  if (process.env.PHOTOS) for (const [k, id] of Object.entries(PHOTOS)) {
    const ok = await download(`https://images.unsplash.com/${id}?w=1100&q=62&fm=jpg&fit=crop`, `assets/photos/${k}.jpg`);
    console.log('photo', k, ok);
  }
  const browser = await chromium.launch();
  for (const [k, url] of Object.entries(SITES)) {
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 1,
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36' });
    const p = await ctx.newPage();
    try {
      await p.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
      await p.waitForTimeout(6000);
      // よくあるクッキー同意・ポップアップを閉じる
      for (const t of ['Accept', 'Accept all', 'Allow all', 'OK', 'Got it', 'Close', 'No thanks', 'Akzeptieren', 'Alle akzeptieren']) {
        const b = p.getByRole('button', { name: t, exact: true }).first();
        if (await b.isVisible().catch(() => false)) { await b.click().catch(() => {}); await p.waitForTimeout(800); }
      }
      await p.keyboard.press('Escape').catch(() => {});
      await p.waitForTimeout(1000);
      await p.screenshot({ path: `assets/team/${k}.jpg`, type: 'jpeg', quality: 85 });
      console.log('shot', k, 'ok', await p.title());
    } catch (e) { console.log('shot', k, 'NG', e.message); }
    await ctx.close();
  }
  await browser.close();
})();
