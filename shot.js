// Renders page.html to a 1024x1024 entry.png with Playwright.
import { chromium } from '/home/hatch/workspace/makefun/token-radar/test/pw/node_modules/playwright/index.mjs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { writeFileSync } from 'fs';

const dir = dirname(fileURLToPath(import.meta.url));
const pagePath = join(dir, 'page.html');
const outPath = join(dir, 'entry.png');

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1024, height: 1024 } });
await page.goto('file://' + pagePath);
await page.waitForTimeout(300);
await page.screenshot({ path: outPath });
await browser.close();
console.log('wrote', outPath);
