// News-image entry (Node 22, standard library only): the image is the
// entry.png beside this file, and the program copies it to the output
// directory as entry.png. The gate reads the first bytes to tell PNG
// from JPEG, so the name stays entry.png either way.
//
// Local test:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

// entry.png is committed in the repo; the render is deterministic
// (two consecutive Playwright runs produce byte-identical PNGs).
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./entry.png', import.meta.url);

if (!existsSync(source)) {
  throw new Error('entry.png is missing from the repository');
}
const size = statSync(source).size;
if (size > 1048576) {
  throw new Error(`entry.png is ${size} bytes, over the 1 MiB limit`);
}
copyFileSync(source, join(outDir, 'entry.png'));
console.log(`copied entry.png (${size} bytes) to ${join(outDir, 'entry.png')}`);
