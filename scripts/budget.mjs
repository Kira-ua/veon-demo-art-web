// R-210: build budgets for the homepage — total ≤ 1 MB, JS ≤ 150 KB, CSS ≤ 50 KB (dist/, uncompressed files).
import fs from "node:fs";
import path from "node:path";
const dist = path.resolve("dist");
const files = [];
const walk = (d) => { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); fs.statSync(p).isDirectory() ? walk(p) : files.push(p); } };
walk(dist);
const sum = (re) => files.filter((f) => re.test(f) && !/404/.test(f)).reduce((a, f) => a + fs.statSync(f).size, 0);
const html = fs.readFileSync(path.join(dist, "index.html"), "utf8");
const inlineCss = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)].reduce((a, m) => a + Buffer.byteLength(m[1]), 0);
const js = sum(/\.js$/), css = sum(/\.css$/) + inlineCss;
const fonts = sum(/\.woff2$/), page = Buffer.byteLength(html) + sum(/\.(js|css)$/) + fonts + sum(/\.svg$/);
const kb = (n) => (n / 1024).toFixed(1) + " KB";
const rows = [["page (html+css+js+fonts+svg)", page, 1024 * 1024], ["javascript", js, 150 * 1024], ["css", css, 50 * 1024]];
let fail = false;
for (const [n, v, lim] of rows) { const ok = v <= lim; fail ||= !ok; console.log(`${ok ? "PASS" : "FAIL"}  ${n}: ${kb(v)} (limit ${kb(lim)})`); }
console.log(`info  fonts: ${kb(fonts)}`);
if (fail) process.exit(1);
