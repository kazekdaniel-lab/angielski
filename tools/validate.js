// Walidacja plików data/week-NN.js. Użycie: node tools/validate.js [1 2 3 ...]
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const LIST = {
  1: ["Monday", "Wednesday", "Thursday", "today", "tomorrow", "week", "hour", "thirteen", "thirty", "hundred", "thousand", "half past", "o'clock", "weekend", "minute"],
  2: ["mother", "father", "brother", "sister", "wife", "husband", "child", "friend", "boss", "customer", "team", "people", "partner", "colleague", "daughter"],
  3: ["water", "coffee", "tea", "bread", "apple", "egg", "milk", "breakfast", "lunch", "dinner", "sandwich", "cheese", "vegetables", "menu", "bottle"],
  4: ["house", "flat", "room", "kitchen", "table", "chair", "door", "window", "desk", "lamp", "bed", "shelf", "laptop", "box", "key"],
  5: ["work", "eat", "drink", "sleep", "go", "read", "write", "buy", "sell", "open", "start", "finish", "send", "check", "call"],
  6: ["office", "meeting", "job", "manager", "report", "deadline", "salary", "invoice", "task", "project", "schedule", "contract", "employee", "email", "break"],
  7: ["shop", "money", "price", "cheap", "expensive", "pay", "card", "cash", "discount", "receipt", "order", "delivery", "return", "size", "basket"],
  8: ["big", "small", "new", "old", "fast", "slow", "good", "bad", "happy", "busy", "tired", "easy", "difficult", "beautiful", "important"],
  9: ["street", "city", "station", "hotel", "left", "right", "straight on", "near", "next to", "opposite", "corner", "bridge", "park", "map", "traffic"],
  10: ["travel", "trip", "plane", "train", "airport", "ticket", "passport", "luggage", "booking", "arrive", "visit", "stay", "abroad", "guide", "beach"],
  11: ["hobby", "film", "music", "book", "sport", "game", "party", "concert", "gym", "swim", "dance", "cook", "relax", "free time", "podcast"],
  12: ["plan", "future", "next", "soon", "goal", "dream", "idea", "tonight", "later", "year", "month", "launch", "grow", "decide", "success"],
};
const POS = ["rzeczownik", "czasownik", "przymiotnik", "przysłówek", "liczebnik", "przyimek", "wyrażenie"];
const slug = (s) => s.toLowerCase().replace(/[ ']/g, "-");

function check(n) {
  const errs = [];
  const e = (m) => errs.push(m);
  const file = path.join(__dirname, "..", "data", `week-${String(n).padStart(2, "0")}.js`);
  if (!fs.existsSync(file)) return [`brak pliku ${file}`];
  const src = fs.readFileSync(file, "utf8");
  src.split("\n").forEach((l, i) => { if (/[\u2013\u2014]/.test(l)) e(`linia ${i + 1}: półpauza/pauza`); });
  const ctx = { window: {} };
  try { vm.runInNewContext(src, ctx, { filename: file }); } catch (x) { return [`błąd składni: ${x.message}`]; }
  const W = (ctx.window.WEEKS || [])[0];
  if (!W) return ["plik nie dodaje obiektu do window.WEEKS"];
  if (W.week !== n) e(`week = ${W.week}, oczekiwano ${n}`);
  if (!W.title) e("brak title");
  const isStr = (v) => typeof v === "string" && v.trim().length > 0;
  const pair = (o, where) => { if (!o || !isStr(o.en) || !isStr(o.pl)) e(`${where}: brak en/pl`); };

  const g = W.grammar || {};
  if (!isStr(g.title)) e("grammar.title");
  if (!Array.isArray(g.explain) || g.explain.length < 2 || g.explain.length > 4) e("grammar.explain: 2-4 akapity");
  if (!Array.isArray(g.table)) e("grammar.table musi być tablicą");
  if (!Array.isArray(g.examples) || g.examples.length !== 3) e("grammar.examples: dokładnie 3");
  (g.examples || []).forEach((x, i) => pair(x, `grammar.examples[${i}]`));
  if (!Array.isArray(g.exercises) || g.exercises.length !== 10) e(`grammar.exercises: ${g.exercises && g.exercises.length}, oczekiwano 10`);
  (g.exercises || []).forEach((x, i) => {
    const w = `grammar.exercises[${i}]`;
    if ((x.q || "").split("___").length !== 2) e(`${w}: "___" musi wystąpić dokładnie raz`);
    if (!isStr(x.pl) || !isStr(x.why)) e(`${w}: brak pl/why`);
    if (x.type === "choice") {
      if (!Array.isArray(x.options) || x.options.length < 2 || x.options.length > 4) e(`${w}: options 2-4`);
      if (!(x.answer >= 0 && x.answer < (x.options || []).length)) e(`${w}: answer poza zakresem`);
      if (new Set(x.options).size !== (x.options || []).length) e(`${w}: zduplikowane opcje`);
    } else if (x.type === "gap") {
      if (!Array.isArray(x.answer) || !x.answer.length || !x.answer.every(isStr)) e(`${w}: answer musi być niepustą listą`);
    } else e(`${w}: zły type`);
  });

  const words = W.words || [];
  if (words.length !== 15) e(`words: ${words.length}, oczekiwano 15`);
  const exp = LIST[n];
  words.forEach((x, i) => {
    const w = `words[${i}] ${x.en}`;
    if (x.en !== exp[i]) e(`${w}: oczekiwano "${exp[i]}"`);
    if (x.id !== `w${n}-${slug(exp[i] || "")}`) e(`${w}: id "${x.id}", oczekiwano "w${n}-${slug(exp[i] || "")}"`);
    const part = i < 7 ? 1 : i < 13 ? 2 : 3;
    if (x.part !== part) e(`${w}: part ${x.part}, oczekiwano ${part}`);
    ["pl", "say", "emoji", "note", "mnemo"].forEach((k) => { if (!isStr(x[k])) e(`${w}: brak ${k}`); });
    if (typeof x.forms !== "string") e(`${w}: forms musi być stringiem`);
    if (!POS.includes(x.pos)) e(`${w}: pos "${x.pos}"`);
    if (/[\[\]()'ˈ]/.test(x.say || "") || (x.say || "") !== (x.say || "").toLowerCase()) e(`${w}: say "${x.say}" (małe litery, bez nawiasów i akcentów)`);
    if (!Array.isArray(x.ex) || x.ex.length !== 2) e(`${w}: ex dokładnie 2`);
    (x.ex || []).forEach((p, j) => pair(p, `${w}.ex[${j}]`));
    if (!Array.isArray(x.phrases) || x.phrases.length < 2 || x.phrases.length > 3) e(`${w}: phrases 2-3`);
    (x.phrases || []).forEach((p, j) => pair(p, `${w}.phrases[${j}]`));
    if (!Array.isArray(x.family) || x.family.length < 2 || x.family.length > 5) e(`${w}: family 2-5`);
    (x.family || []).forEach((f) => { if (!/^.+ - .+$/.test(f)) e(`${w}: family "${f}" (format "word - słowo")`); });
  });

  const s = W.sentences || [];
  if (s.length !== 12) e(`sentences: ${s.length}, oczekiwano 12`);
  const cnt = { L1: 0, L3: 0, L5: 0 };
  s.forEach((x, i) => { pair(x, `sentences[${i}]`); if (!(x.use in cnt)) e(`sentences[${i}]: use "${x.use}"`); else cnt[x.use]++; if (!Array.isArray(x.alt)) e(`sentences[${i}]: alt musi być tablicą`); });
  if (cnt.L1 !== 3 || cnt.L3 !== 4 || cnt.L5 !== 5) e(`sentences: L1=${cnt.L1} L3=${cnt.L3} L5=${cnt.L5}, oczekiwano 3/4/5`);

  const r = W.reading || {};
  if (!isStr(r.title)) e("reading.title");
  if (!Array.isArray(r.text) || r.text.length < 5 || r.text.length > 7) e("reading.text: 5-7 zdań");
  (r.text || []).forEach((x, i) => pair(x, `reading.text[${i}]`));
  const full = (r.text || []).map((x) => x.en).join(" ").toLowerCase();
  words.filter((x) => x.part === 3).forEach((x) => { if (!full.includes(x.en.toLowerCase())) e(`reading.text nie zawiera słowa part 3 "${x.en}"`); });
  if (!Array.isArray(r.questions) || r.questions.length !== 3) e("reading.questions: dokładnie 3");
  (r.questions || []).forEach((x, i) => {
    if (!isStr(x.q) || !isStr(x.qpl)) e(`reading.questions[${i}]: q/qpl`);
    if (!Array.isArray(x.options) || x.options.length < 2 || !(x.answer >= 0 && x.answer < x.options.length)) e(`reading.questions[${i}]: options/answer`);
  });

  const d = W.dialog || {};
  if (!isStr(d.intro)) e("dialog.intro");
  if (!Array.isArray(d.turns) || d.turns.length !== 6) e("dialog.turns: dokładnie 6");
  (d.turns || []).forEach((x, i) => {
    if (!isStr(x.bot) || !isStr(x.botpl) || !isStr(x.hint)) e(`dialog.turns[${i}]: bot/botpl/hint`);
    if (!Array.isArray(x.options) || x.options.length !== 3 || !(x.answer >= 0 && x.answer < 3)) e(`dialog.turns[${i}]: 3 opcje i answer`);
    if (new Set(x.options || []).size !== 3) e(`dialog.turns[${i}]: zduplikowane opcje`);
  });
  return errs;
}

const weeks = process.argv.slice(2).map(Number);
const todo = weeks.length ? weeks : Object.keys(LIST).map(Number);
let bad = 0;
for (const n of todo) {
  const errs = check(n);
  if (errs.length) { bad++; console.log(`Tydzień ${n}: ${errs.length} błędów`); errs.forEach((x) => console.log("  - " + x)); }
  else console.log(`Tydzień ${n}: OK`);
}
process.exit(bad ? 1 : 0);
