import fs from "node:fs";

const s = fs.readFileSync(new URL("../index.html", import.meta.url), "utf8");
console.log(s.slice(0, 480));
console.log("---");
console.log("hasModuleAttr", /type=["']module["']/.test(s));
console.log("hasMainJsx", s.includes("main.jsx"));
console.log("hasNpmRun", s.includes("npm run dev"));
console.log("hasIife", s.includes('(function(){"use strict"'));
console.log("relativeVehicles", (s.match(/\.\/vehicles\//g) || []).length);
console.log("absoluteVehicles", (s.match(/["']\/vehicles\//g) || []).length);
console.log("hasRoot", s.includes('id="root"'));
console.log("hasTeslaTitle", s.includes("Tesla"));
console.log("hasModelS", s.includes("مدل S"));
