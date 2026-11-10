// Walidacja modułu 1000 słów: data/top-NN.js. Użycie: node tools/validate-top.js [1 2 ...]
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const LIST = {};
fs.readFileSync(path.join(__dirname, "ngsl-1000.tsv"), "utf8").split("\n").forEach((l) => {
  if (!l || l[0] === "#") return;
  const [n, en, forms] = l.split("\t");
  LIST[+n] = { en, forms: (forms || "").split(",").map((x) => x.trim()).filter(Boolean) };
});
const POS = ["rzeczownik", "czasownik", "czasownik modalny", "przymiotnik", "przysłówek", "liczebnik", "przyimek", "zaimek", "spójnik", "rodzajnik", "partykuła", "wykrzyknik", "wyrażenie"];
const isStr = (v) => typeof v === "string" && v.trim().length > 0;
const reEsc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

function check(f) {
  const errs = [];
  const e = (m) => errs.push(m);
  const file = path.join(ROOT, "data", `top-${String(f).padStart(2, "0")}.js`);
  if (!fs.existsSync(file)) return null;
  const src = fs.readFileSync(file, "utf8");
  src.split("\n").forEach((l, i) => { if (/[\u2013\u2014]/.test(l)) e(`linia ${i + 1}: półpauza/pauza`); });
  const ctx = { window: {} };
  try { vm.runInNewContext(src, ctx, { filename: file }); } catch (x) { return [`błąd składni: ${x.message}`]; }
  const T = ctx.window.TOP || [];
  const from = (f - 1) * 100 + 1;
  if (T.length !== 100) e(`liczba fiszek: ${T.length}, oczekiwano 100`);
  T.forEach((x, i) => {
    const n = from + i;
    const exp = LIST[n];
    const w = `#${n} ${x && x.en}`;
    if (!x || x.n !== n) return e(`${w}: n = ${x && x.n}, oczekiwano ${n} (kolejność z listy)`);
    const want = exp.en === "i" ? "I" : exp.en;
    if (x.en !== want) e(`${w}: en "${x.en}", oczekiwano "${want}"`);
    ["pl", "say", "pos"].forEach((k) => { if (!isStr(x[k])) e(`${w}: brak ${k}`); });
    if (typeof x.forms !== "string") e(`${w}: forms musi być stringiem`);
    if (typeof x.note !== "string") e(`${w}: note musi być stringiem ("" jeśli brak)`);
    if (isStr(x.pl) && x.pl.length > 60) e(`${w}: pl za długie (${x.pl.length} znaków)`);
    String(x.pos || "").split(", ").forEach((p) => { if (!POS.includes(p)) e(`${w}: pos "${p}"`); });
    if (/[\[\]()'ˈ"]/.test(x.say || "") || (x.say || "") !== (x.say || "").toLowerCase()) e(`${w}: say "${x.say}" (małe litery, bez nawiasów i akcentów)`);
    if (!Array.isArray(x.ex) || x.ex.length !== 2) e(`${w}: ex dokładnie 2`);
    const forms = [exp.en].concat(exp.forms, String(x.forms || "").split(/[^A-Za-z']+/).filter((t) => t.length > 1));
    const re = new RegExp(`(^|[^A-Za-z])(${forms.map(reEsc).join("|")})(?![A-Za-z])`, "i");
    (x.ex || []).forEach((p, j) => {
      if (!p || !isStr(p.en) || !isStr(p.pl)) return e(`${w}.ex[${j}]: brak en/pl`);
      if (!re.test(p.en)) e(`${w}.ex[${j}]: zdanie nie zawiera słowa ani jego formy: "${p.en}"`);
    });
    if (!Array.isArray(x.phrases) || x.phrases.length < 2 || x.phrases.length > 3) e(`${w}: phrases 2-3`);
    (x.phrases || []).forEach((p, j) => { if (!p || !isStr(p.en) || !isStr(p.pl)) e(`${w}.phrases[${j}]: brak en/pl`); });
  });
  return errs;
}

const args = process.argv.slice(2).map(Number);
const todo = args.length ? args : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let bad = 0, missing = 0;
for (const f of todo) {
  const errs = check(f);
  const name = `top-${String(f).padStart(2, "0")}`;
  if (errs === null) { missing++; console.log(`${name}: brak pliku (pominięty)`); continue; }
  if (errs.length) { bad++; console.log(`${name}: ${errs.length} błędów`); errs.slice(0, 60).forEach((x) => console.log("  - " + x)); }
  else console.log(`${name}: OK`);
}
process.exit(bad || (args.length && missing) ? 1 : 0);
