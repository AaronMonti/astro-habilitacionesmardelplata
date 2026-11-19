import { writeFile } from "node:fs/promises";
import sharp from "sharp";

// Trazo del isotipo (public/logo.svg) en blanco para que contraste sobre el rojo.
const logoSvg = `
<g fill="#ffffff">
  <path d="M197.234,47.994h-67.537c0,95.635-11.786,124.19-24.024,140.687 c-12.238,16.491,4.531,27.924,4.531,27.924c25.373,15.708,41.429,71.453,44.698,83.691c-3.726,2.763-6.168,7.152-6.168,12.145 c0,7.419,5.336,13.565,12.368,14.876l-0.076-24.595l-0.016-5.151l-0.261-85.66l-14.191-14.191h33.82l-14.185,14.185l0.261,85.638 l0.016,5.183l0.076,24.612c7.103-1.256,12.51-7.43,12.51-14.892c0-5.319-2.752-9.981-6.897-12.684 c9.159-36.447,32.248-69.446,45.927-82.244c14.049-13.146,5.439-24.356,5.439-24.356 C194.965,147.045,197.234,47.994,197.234,47.994z"/>
  <path d="M124.35,0v12.689h-8.039c-7.636,0-13.826,6.19-13.826,13.826s6.19,13.826,13.826,13.826h95.124 c7.636,0,13.826-6.19,13.826-13.826s-6.19-13.826-13.826-13.826H199.48V0H124.35z"/>
</g>`;

const buildingLines = `
<g fill="none" stroke="#ffffff" stroke-opacity="0.18" stroke-width="2">
  <path d="M840 520V210l150-70 150 70v310" />
  <path d="M820 520h340" />
  <path d="M870 250v60m40-75v75m70-90v90m40-75v75m70-90v90m40-75v75" />
  <path d="M870 360v60m40-60v60m70-60v60m40-60v60m70-60v60m40-60v60" />
  <path d="M950 520v-70h80v70" />
</g>`;

const ogSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#6b0008" />
      <stop offset="55%" stop-color="#902727" />
      <stop offset="100%" stop-color="#b72b2b" />
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)" />
  ${buildingLines}
  <g transform="translate(84 80) scale(0.42)">${logoSvg}</g>
  <text x="248" y="146" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="34" font-weight="bold" letter-spacing="1">TOLEDO, MORENO &amp; ASOC.</text>
  <text x="250" y="180" fill="#ffd9d9" font-family="Arial, Helvetica, sans-serif" font-size="17" letter-spacing="3.5">HABILITACIONES MAR DEL PLATA</text>
  <path d="M84 232h1032" stroke="#ffffff" stroke-opacity="0.28" stroke-width="2" />
  <text x="84" y="350" fill="#ffffff" font-family="Georgia, 'Times New Roman', serif" font-size="58">Tu inversión, bien</text>
  <text x="84" y="420" fill="#ffffff" font-family="Georgia, 'Times New Roman', serif" font-size="58">gestionada desde el inicio.</text>
  <text x="86" y="492" fill="#ffe6e6" font-family="Arial, Helvetica, sans-serif" font-size="25">Habilitaciones comerciales, industriales y cartelería</text>
  <text x="86" y="556" fill="#ffcccc" font-family="Arial, Helvetica, sans-serif" font-size="20">Córdoba 1882 · Mar del Plata · +54 9 223 532-2443</text>
</svg>`;

const iconSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180">
  <rect width="180" height="180" rx="36" fill="#902727" />
  <g transform="translate(16 16) scale(0.452)">${logoSvg}</g>
</svg>`;

const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 180 180">
  <rect width="180" height="180" rx="36" fill="#902727" />
  <g transform="translate(16 16) scale(0.452)">${logoSvg}</g>
</svg>`;

await writeFile(new URL("../public/favicon.svg", import.meta.url), faviconSvg);
console.log("Generado public/favicon.svg");

const targets = [
    { name: "og-image.png", svg: ogSvg, width: 1200, height: 630 },
    { name: "apple-touch-icon.png", svg: iconSvg, width: 180, height: 180 },
];

for (const target of targets) {
    const buffer = await sharp(Buffer.from(target.svg))
        .resize(target.width, target.height)
        .png({ compressionLevel: 9 })
        .toBuffer();

    await writeFile(new URL(`../public/${target.name}`, import.meta.url), buffer);
    console.log(`Generado public/${target.name}`);
}
