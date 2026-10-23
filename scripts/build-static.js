import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const templatePath = path.join(root, "scripts", "static-page.html");
const outPath = path.join(root, "index.html");
const cssPath = path.join(root, "tmp-build", "app.css");
const vehiclesSrc = path.join(root, "public", "vehicles");
const vehiclesDest = path.join(root, "vehicles");

fs.mkdirSync(vehiclesDest, { recursive: true });
if (fs.existsSync(vehiclesSrc)) {
  for (const file of fs.readdirSync(vehiclesSrc)) {
    fs.copyFileSync(path.join(vehiclesSrc, file), path.join(vehiclesDest, file));
  }
}

let fonts = "";
if (fs.existsSync(cssPath)) {
  const css = fs.readFileSync(cssPath, "utf8");
  const faces = [...css.matchAll(/@font-face\{[\s\S]*?\}/g)].map((match) => match[0]);
  const keep = new Set();
  faces.forEach((face, index) => {
    const weight = (face.match(/font-weight:([^;]+)/) || [])[1];
    const range = face.match(/unicode-range:([^}]+)/)?.[1] || "";
    const arabic = range.includes("U+6??") || range.includes("U+FB50");
    const latin = range.includes("U+??") || range.includes("U+20AC");
    if ((arabic && ["400", "500", "600"].includes(weight)) || (latin && ["400", "500"].includes(weight))) {
      keep.add(index);
    }
  });
  fonts = [...keep].map((index) => faces[index]).join("\n");
}

let html = fs.readFileSync(templatePath, "utf8");
html = html.replace("/* VAZIRMATN_FONTS */", fonts || "/* Vazirmatn: add tmp-build/app.css to inline fonts */");

if (/<script[\s>]/i.test(html)) {
  throw new Error("Static page contains a <script> tag.");
}

fs.writeFileSync(outPath, html);
console.log(`Wrote ${outPath} (${html.length} bytes, no JavaScript)`);
