// สร้างไอคอน PWA จาก SVG (รันครั้งเดียว: node scripts/gen-icons.mjs)
// ดีไซน์: กระเบื้องขาว + กากบาทการแพทย์สี teal บนพื้นไล่เฉด teal
import sharp from "sharp";
import { mkdirSync } from "node:fs";
import path from "node:path";

const OUT = path.resolve("public/icons");
mkdirSync(OUT, { recursive: true });

function tileSvg(size, { padding = 0, bg = true } = {}) {
  const pad = Math.round((size * padding) / 100);
  const s = size - pad * 2;
  const r = Math.round(s * 0.24); // มุมโค้งพื้นหลัง
  const card = s * 0.52; // ขนาดกระเบื้องขาว
  const cardR = Math.round(card * 0.22);
  const bar = card * 0.52; // ความยาวแขนกากบาท
  const thick = card * 0.2; // ความหนาแขนกากบาท
  const bgRect = bg
    ? `<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
         <stop offset="0" stop-color="#14b8a6"/><stop offset="1" stop-color="#115e59"/>
       </linearGradient></defs>
       <rect x="${pad}" y="${pad}" width="${s}" height="${s}" rx="${r}" fill="url(#g)"/>`
    : "";
  const cx = size / 2;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  ${bgRect}
  <rect x="${cx - card / 2}" y="${cx - card / 2}" width="${card}" height="${card}" rx="${cardR}" fill="#ffffff"/>
  <rect x="${cx - bar / 2}" y="${cx - thick / 2}" width="${bar}" height="${thick}" rx="${thick / 2}" fill="#0d9488"/>
  <rect x="${cx - thick / 2}" y="${cx - bar / 2}" width="${thick}" height="${bar}" rx="${thick / 2}" fill="#0d9488"/>
</svg>`;
}

const jobs = [
  { file: "icon-192.png", size: 192 },
  { file: "icon-512.png", size: 512 },
  { file: "maskable-512.png", size: 512, padding: 12 }, // safe zone สำหรับ maskable
  { file: "apple-touch-icon.png", size: 180 },
  { file: "favicon-32.png", size: 32 },
];

for (const j of jobs) {
  await sharp(Buffer.from(tileSvg(j.size, { padding: j.padding ?? 0 })))
    .png()
    .toFile(path.join(OUT, j.file));
  console.log("wrote", j.file);
}
