// 画像を縮小・再圧縮して data URI の JSON にする: node enc.js out.json maxWidth quality file...
// 台（モックアップの背景）の写真のように細かさが要らないものは、BLUR=0.6 のように少しぼかすと軽くなる
const { chromium } = require('playwright');
const fs = require('fs');
(async () => {
  const [out, maxW, q, ...files] = process.argv.slice(2);
  const b = await chromium.launch(); const p = await b.newPage();
  const res = {};
  for (const f of files) {
    const src = 'data:image/jpeg;base64,' + fs.readFileSync(f).toString('base64');
    res[f.split('/').pop().replace(/\.jpg$/, '')] = await p.evaluate(async ([src, maxW, q, blur]) => {
      const img = new Image(); img.src = src; await img.decode();
      const s = Math.min(1, maxW / img.naturalWidth);
      const c = document.createElement('canvas'); c.width = Math.round(img.naturalWidth * s); c.height = Math.round(img.naturalHeight * s);
      const ctx = c.getContext('2d');
      if (blur) ctx.filter = `blur(${blur}px)`;
      ctx.drawImage(img, 0, 0, c.width, c.height);
      return c.toDataURL('image/jpeg', q);
    }, [src, +maxW, +q, +(process.env.BLUR || 0)]);
  }
  fs.writeFileSync(out, JSON.stringify(res));
  for (const [k, v] of Object.entries(res)) console.log(k, Math.round(v.length / 1024) + 'KB');
  await b.close();
})();
