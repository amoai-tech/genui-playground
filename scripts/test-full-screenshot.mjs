import puppeteer from 'puppeteer-core';
import { mkdtempSync, readdirSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const dir = mkdtempSync(join(tmpdir(), 'a2ui-full-png-'));
const browser = await puppeteer.launch({ executablePath:'/usr/bin/google-chrome',headless:true,args:['--no-sandbox','--disable-dev-shm-usage'],defaultViewport:{width:1440,height:850} });
try {
  const page=await browser.newPage();
  const cdp=await page.createCDPSession();
  await cdp.send('Browser.setDownloadBehavior',{behavior:'allow',downloadPath:dir,eventsEnabled:true});
  page.on('console',m=>{if(m.type()==='error')console.log('Browser console:',m.text().slice(0,400))});
  page.on('pageerror',e=>console.log('Page error:',String(e).slice(0,400)));
  await page.goto('http://localhost:3100/playground',{waitUntil:'networkidle2',timeout:90000});
  await page.click('[data-start-without-ai]');
  await page.waitForSelector('[data-json-preview] [data-generative-ui-root]',{timeout:25000}).catch(()=>{});
  await page.waitForSelector('[data-download-full-screenshot]',{timeout:15000});
  const before=await page.$eval('[data-json-preview]',el=>({height:el.clientHeight,scroll:el.scrollHeight,width:el.clientWidth}));
  // Force a long dashboard to ensure the capture includes material below the visible preview viewport.
  await page.evaluate(()=>{const p=document.querySelector('[data-json-preview]'); const d=document.createElement('div'); d.textContent='SCREENSHOT BOTTOM MARKER';d.style.cssText='height:1000px;padding:24px;color:#000;background:#fff';p.append(d)});
  const expanded=await page.$eval('[data-json-preview]',el=>({height:el.clientHeight,scroll:el.scrollHeight}));
  await page.click('[data-download-full-screenshot]');
  let file;
  for(let i=0;i<50;i++) {await new Promise(r=>setTimeout(r,250)); file=readdirSync(dir).find(x=>x.endsWith('.png'));if(file)break;}
  const errors=await page.$$eval('[role="alert"]',els=>els.map(e=>e.textContent));
  if(!file)throw Error('No PNG was downloaded; alerts: '+errors.join(' / '));
  const data=readFileSync(join(dir,file));
  const w=data.readUInt32BE(16),h=data.readUInt32BE(20);
  console.log(JSON.stringify({dir,file,bytes:data.length,dimensions:[w,h],before,expanded,alerts:errors}));
  if(h <= 1000)throw Error('Screenshot did not capture full scroll height');
}finally{await browser.close()}
