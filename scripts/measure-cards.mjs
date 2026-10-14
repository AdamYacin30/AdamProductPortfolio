import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForSelector('.cards .card');

  const cards = await page.$$eval('.cards .card', (els) =>
    els.map((el) => {
      const r = el.getBoundingClientRect();
      const desc = el.querySelector('.card__problem');
      const trace = el.querySelector('.card__trace .trace__bar');
      const rd = desc ? desc.getBoundingClientRect() : null;
      const rt = trace ? trace.getBoundingClientRect() : null;
      return {
        width: Math.round(r.width),
        height: Math.round(r.height),
        descWidth: rd ? Math.round(rd.width) : null,
        traceWidth: rt ? Math.round(rt.width) : null,
      };
    })
  );

  console.log(JSON.stringify(cards, null, 2));
  await browser.close();
})();
