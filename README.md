# The World in One Day — 25 November 2026

[![make.fun](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/G123456-1/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/G123456-1/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125)

A newspaper front page summing up **25 November 2026** in one 1024&times;1024 image:
31 stories, first reported that day, from every region — Shenzhou-24 launching
China's first foreign astronaut (Pakistan's Zeeshan Ali), the Cartagena hostages
freed, the Australia–Solomon Islands security treaty, Houthi strikes on Saudi
oil, the AI sell-off, Democrats taking the US House, and more.

## How it was made

No AI image generator was used for the text. The page is real HTML/CSS
(`page.html`, hand-written) rendered to a PNG with Playwright (`shot.js`),
so every headline is crisp and spelled correctly. Two consecutive renders
are byte-identical, and the image is under 1 MiB. Every story was verified
against multiple news sources (Reuters, AP, AFP, Xinhua and national
broadcasters) as first reported on 25 November 2026.

## Files

- `page.html` — the front page (31 stories, 16+ regions)
- `shot.js` — Playwright render script (1024&times;1024)
- `entry.png` — the submitted image
- `main.ts` — copies `entry.png` to `$MAKEFUN_OUTPUT_DIR`

## Bounty

https://make.fun/bounty/news-image-20261125

---

Built with [make.fun](https://make.fun/r/bv8sx78s) — come build with me and earn.
