const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const tmpl = fs.readFileSync('./tmp/tmpl.html', 'utf-8')
  const content = tmpl;
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const override = Object.assign(page.viewport(), {width: await page.evaluate(() => document.body.clientWidth), height: await page.evaluate(() => document.body.clientHeight)});
  await page.setViewport(override);
  await page.setContent(content)
  // const img = `${name}.${format}`
  // console.log(name, format);
  await page.screenshot({path: '顶顶顶顶.jpg'})
  await browser.close();
})();
