/* Kartoteka - nauka angielskiego A1-A2.
   Treść: data/week-NN.js (window.WEEKS). Postęp: localStorage, eksport do pliku JSON. */
(() => {
  "use strict";

  // ---------- program i dane ----------
  const PROGRAM = [
    [1, "Liczby, dni, godziny", "to be (am / is / are)"],
    [2, "Rodzina i ludzie", "zaimki i my / your / his / her"],
    [3, "Jedzenie i picie", "a / an / the, liczba mnoga"],
    [4, "Dom i przedmioty", "there is / there are"],
    [5, "Czasowniki codzienne", "Present Simple (zdania twierdzące)"],
    [6, "Praca i biuro", "Present Simple (pytania i przeczenia)"],
    [7, "Zakupy i pieniądze", "can / can't"],
    [8, "Przymiotniki, opisywanie", "Present Continuous"],
    [9, "Miasto i kierunki", "was / were"],
    [10, "Podróże", "Past Simple (czasowniki regularne)"],
    [11, "Czas wolny", "Past Simple (czasowniki nieregularne)"],
    [12, "Plany i przyszłość", "going to + powtórka całości"],
  ];
  const COLORS = ["#E4572E", "#D99A1C", "#5E9C5B", "#2E86AB", "#A23B72", "#3D5A80", "#D96C4F", "#3F9C83", "#B9852A", "#5E548E", "#D1495B", "#00798C"];
  const DAYS = {
    1: { name: "Nowe słowa", min: 10 },
    2: { name: "Gramatyka", min: 10 },
    3: { name: "Słowa i zdania", min: 10 },
    4: { name: "Czytanie", min: 10 },
    5: { name: "Pisanie", min: 10 },
    6: { name: "Rozmowa", min: 10 },
    7: { name: "Test tygodnia", min: 12 },
  };
  const INTERVAL = [0, 1, 2, 4, 7, 14]; // pudełko -> za ile dni powtórka
  const GOAL = 30; // dzienny cel XP
  const PASS = 70; // próg testu w %

  const WEEKS = (window.WEEKS || []).filter((w) => w && w.week).sort((a, b) => a.week - b.week);
  const byWeek = (n) => WEEKS.find((w) => w.week === n);
  const ALL = [];
  WEEKS.forEach((w) => w.words.forEach((x) => ALL.push(Object.assign({ week: w.week }, x))));
  const WORD = {};
  ALL.forEach((x) => (WORD[x.id] = x));
  const color = (n) => COLORS[(n - 1) % COLORS.length];
  const prog = (n) => PROGRAM[n - 1] || [n, "", ""];

  // moduł 1000 słów (lista NGSL): data/top-NN.js (window.TOP), id fiszki = "t" + numer
  const TOP = (window.TOP || []).filter((x) => x && x.n).sort((a, b) => a.n - b.n);
  const TW = {};
  TOP.forEach((x) => { x.id = "t" + x.n; TW[x.id] = x; });
  const tcolor = (n) => COLORS[(Math.ceil(n / 100) - 1) % COLORS.length];
  const TREV_MAX = 40; // max powtórek w jednej sesji 1000 słów
  const PER_OPTS = [5, 10, 15, 20];

  // ---------- narzędzia ----------
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const sample = (a, n) => shuffle(a).slice(0, n);
  const pick = (a) => a[Math.floor(Math.random() * a.length)];
  const pad = (n) => String(n).padStart(2, "0");
  const dstr = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const today = () => dstr(new Date());
  const addDays = (s, n) => { const [y, m, d] = s.split("-").map(Number); return dstr(new Date(y, m - 1, d + n)); };
  const daysBetween = (a, b) => Math.round((new Date(b + "T12:00:00") - new Date(a + "T12:00:00")) / 864e5);
  const plural = (n, one, few, many) => { if (n === 1) return one; const d = n % 10, h = n % 100; return d >= 2 && d <= 4 && (h < 12 || h > 14) ? few : many; };
  const reEsc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const ICON = {
    spk: '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor"/><path d="M16 8.5a5 5 0 0 1 0 7M18.6 6a8.6 8.6 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    x: '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>',
    flame: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M12 2.5c.8 3.6 5.5 5.4 5.5 10.6a5.5 5.5 0 0 1-11 0c0-2.3 1.1-3.9 2.3-5 0 2 1 3.2 2.2 3.2.2-3.3-1.3-5.5 1-8.8z" fill="currentColor"/></svg>',
    star: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M12 3l2.7 5.6 6.1.8-4.5 4.2 1.1 6L12 16.7 6.6 19.6l1.1-6L3.2 9.4l6.1-.8z" fill="currentColor"/></svg>',
    today: '<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><rect x="3.5" y="5" width="17" height="15" rx="2.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M3.5 10h17M8 3v4M16 3v4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="15" r="2" fill="currentColor"/></svg>',
    cards: '<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><rect x="6" y="3.5" width="14" height="10" rx="2" fill="none" stroke="currentColor" stroke-width="2" transform="rotate(8 13 8)"/><rect x="3.5" y="9" width="14" height="11" rx="2" fill="var(--paper)" stroke="currentColor" stroke-width="2"/><path d="M6.5 13h8M6.5 16h5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    chart: '<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path d="M4 20h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><rect x="5.5" y="12" width="3" height="6" rx="1" fill="currentColor"/><rect x="10.5" y="8" width="3" height="10" rx="1" fill="currentColor"/><rect x="15.5" y="4" width="3" height="14" rx="1" fill="currentColor"/></svg>',
    lock: '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><rect x="5" y="10.5" width="14" height="10" rx="2" fill="currentColor"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
    check: '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M5 12.5l4.2 4.2L19 7" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    grid: '<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><g fill="currentColor"><rect x="3" y="3" width="5" height="5" rx="1.2"/><rect x="9.5" y="3" width="5" height="5" rx="1.2"/><rect x="16" y="3" width="5" height="5" rx="1.2"/><rect x="3" y="9.5" width="5" height="5" rx="1.2"/><rect x="9.5" y="9.5" width="5" height="5" rx="1.2"/></g><g fill="none" stroke="currentColor" stroke-width="1.6"><rect x="16.8" y="10.3" width="3.4" height="3.4" rx="1"/><rect x="3.8" y="16.8" width="3.4" height="3.4" rx="1"/><rect x="10.3" y="16.8" width="3.4" height="3.4" rx="1"/><rect x="16.8" y="16.8" width="3.4" height="3.4" rx="1"/></g></svg>',
  };

  // ---------- stan ----------
  const KEY = "kartoteka.v1";
  const fresh = () => ({ v: 1, pos: { week: 1, day: 1 }, done: {}, tests: {}, words: {}, xp: 0, xpDay: {}, streak: 0, lastDay: null, lastMain: null, session: 0, log: [], settings: { sound: true, rate: 0.9, voice: "" }, top: { words: {}, newDay: {}, per: 10 } });
  let S = load();
  function hydrate(o) { // stan z pliku lub localStorage + brakujące pola z nowszych wersji
    const f = fresh();
    return Object.assign(f, o, { settings: Object.assign(f.settings, o.settings || {}), top: Object.assign(f.top, o.top || {}) });
  }
  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) return hydrate(JSON.parse(raw));
    } catch (e) { /* brak dostępu do localStorage */ }
    return fresh();
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { toast("Nie da się zapisać postępu w tej przeglądarce. Zrób eksport w zakładce Postęp."); } }

  function streakNow() {
    if (!S.lastDay) return 0;
    const gap = daysBetween(S.lastDay, today());
    return gap <= 1 ? S.streak : 0;
  }
  function touchDay() {
    const t = today();
    if (S.lastDay === t) return;
    S.streak = S.lastDay && daysBetween(S.lastDay, t) === 1 ? S.streak + 1 : 1;
    S.lastDay = t;
  }
  function dueList() {
    const t = today();
    return Object.entries(S.words)
      .filter(([id, w]) => WORD[id] && w.box < 6 && w.due && w.due <= t)
      .sort((a, b) => a[1].box - b[1].box || (a[1].due < b[1].due ? -1 : a[1].due > b[1].due ? 1 : 0))
      .map(([id]) => WORD[id]);
  }
  function boxLabel(id) {
    const w = S.words[id];
    if (!w) return "jeszcze nie poznane";
    if (w.box >= 6) return "opanowane";
    const d = daysBetween(today(), w.due);
    const when = d <= 0 ? "powtórka dziś" : d === 1 ? "powtórka jutro" : `powtórka za ${d} dni`;
    return `pudełko ${w.box} · ${when}`;
  }
  function tDue() {
    const t = today();
    return Object.entries(S.top.words)
      .filter(([id, w]) => TW[id] && w.box < 6 && w.due && w.due <= t)
      .sort((a, b) => a[1].box - b[1].box || (a[1].due < b[1].due ? -1 : a[1].due > b[1].due ? 1 : 0))
      .map(([id]) => TW[id]);
  }
  const tNewToday = () => S.top.newDay[today()] || 0;
  function tBoxLabel(id) {
    const w = S.top.words[id];
    if (!w) return "jeszcze nie poznane";
    if (w.box >= 6) return "opanowane";
    const d = daysBetween(today(), w.due);
    const when = d <= 0 ? "powtórka dziś" : d === 1 ? "powtórka jutro" : `powtórka za ${d} dni`;
    return `pudełko ${w.box} · ${when}`;
  }

  // ---------- mowa i dźwięki ----------
  const TTS = { ok: "speechSynthesis" in window && "SpeechSynthesisUtterance" in window, voice: null, list: [] };
  function loadVoices() {
    if (!TTS.ok) return;
    const vs = speechSynthesis.getVoices();
    TTS.list = vs.filter((v) => /^en[-_]/i.test(v.lang));
    const us = TTS.list.filter((v) => /^en[-_]US/i.test(v.lang));
    TTS.voice = TTS.list.find((v) => v.name === S.settings.voice)
      || us.find((v) => /Samantha|Google US English|Aria|Jenny|Ava|Allison|Natural/i.test(v.name))
      || us[0] || TTS.list[0] || null;
  }
  if (TTS.ok) { loadVoices(); speechSynthesis.onvoiceschanged = loadVoices; }
  function say(text, slow) {
    if (!TTS.ok || !text) return;
    try {
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = (TTS.voice && TTS.voice.lang) || "en-US";
      if (TTS.voice) u.voice = TTS.voice;
      u.rate = slow ? 0.6 : S.settings.rate;
      speechSynthesis.speak(u);
    } catch (e) { /* mowa niedostępna */ }
  }
  let AC = null;
  function sfx(kind) {
    if (!S.settings.sound) return;
    try {
      AC = AC || new (window.AudioContext || window.webkitAudioContext)();
      const t = AC.currentTime;
      const notes = kind === "ok" ? [587, 880] : kind === "done" ? [523, 659, 784, 1047] : [196, 165];
      notes.forEach((f, i) => {
        const o = AC.createOscillator(), g = AC.createGain(), at = t + i * 0.09;
        o.type = kind === "bad" ? "square" : "triangle";
        o.frequency.value = f;
        g.gain.setValueAtTime(0.0001, at);
        g.gain.exponentialRampToValueAtTime(kind === "bad" ? 0.05 : 0.16, at + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, at + 0.2);
        o.connect(g).connect(AC.destination);
        o.start(at); o.stop(at + 0.22);
      });
    } catch (e) { /* brak dźwięku */ }
  }

  // ---------- porównywanie odpowiedzi ----------
  const CONTR = { "i'm": "i am", "you're": "you are", "we're": "we are", "they're": "they are", "he's": "he is", "she's": "she is", "it's": "it is", "that's": "that is", "there's": "there is", "what's": "what is", "where's": "where is", "who's": "who is", "how's": "how is", "isn't": "is not", "aren't": "are not", "wasn't": "was not", "weren't": "were not", "don't": "do not", "doesn't": "does not", "didn't": "did not", "can't": "can not", "cannot": "can not", "won't": "will not", "i'll": "i will", "you'll": "you will", "we'll": "we will", "they'll": "they will", "he'll": "he will", "she'll": "she will", "it'll": "it will", "i've": "i have", "you've": "you have", "we've": "we have", "they've": "they have", "haven't": "have not", "hasn't": "has not", "couldn't": "could not", "let's": "let us", "'re": "are", "'m": "am", "'s": "is" };
  const ONES = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  const TENS = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  function num2words(n) {
    if (n < 20) return ONES[n];
    if (n < 100) return TENS[Math.floor(n / 10)] + (n % 10 ? " " + ONES[n % 10] : "");
    if (n < 1000) return ONES[Math.floor(n / 100)] + " hundred" + (n % 100 ? " " + num2words(n % 100) : "");
    if (n < 10000) return ONES[Math.floor(n / 1000)] + " thousand" + (n % 1000 ? " " + num2words(n % 1000) : "");
    return String(n);
  }
  function norm(s) {
    let t = String(s || "").toLowerCase().replace(/[‘’`´]/g, "'");
    t = t.replace(/(\d+):(\d+)/g, "$1 $2").replace(/[.,!?;:"()[\]…]/g, " ").replace(/-/g, " ");
    let toks = t.split(/\s+/).filter(Boolean);
    toks = toks.flatMap((w) => (CONTR[w] ? CONTR[w].split(" ") : [w]));
    toks = toks.flatMap((w) => (/^\d+$/.test(w) ? num2words(+w).split(" ") : [w]));
    for (let i = 0; i < toks.length - 1; i++) if (toks[i] === "a" && (toks[i + 1] === "hundred" || toks[i + 1] === "thousand")) toks[i] = "one";
    return toks;
  }
  function lev(a, b) { // odległość edycyjna z przestawieniem sąsiednich liter (appel -> apple = 1)
    const m = a.length, n = b.length;
    if (!m) return n; if (!n) return m;
    const d = Array.from({ length: m + 1 }, (_, i) => [i].concat(Array(n).fill(0)));
    for (let j = 1; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const c = a[i - 1] === b[j - 1] ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + c);
        if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
      }
    }
    return d[m][n];
  }
  const SUFFIX = /^(s|es|ed|d|ing)$/;
  const grammarDiff = (u, c) => (u.startsWith(c) && SUFFIX.test(u.slice(c.length))) || (c.startsWith(u) && SUFFIX.test(c.slice(u.length)));
  function tokOk(u, c) { // 0 = identyczne, 1 = literówka, -1 = błąd
    if (u === c) return 0;
    if (c.length < 4) return -1; // krótkie słowa (am, is, a, the) muszą być dokładnie
    if (grammarDiff(u, c)) return -1; // apple / apples, work / works to błąd gramatyczny, nie literówka
    return lev(u, c) <= (c.length >= 8 ? 2 : 1) ? 1 : -1;
  }
  function compare(input, answers, strict) {
    const u = norm(input);
    let best = null;
    for (const a of answers) {
      const c = norm(a);
      if (c.length !== u.length) continue;
      let ok = true, typo = false;
      for (let i = 0; i < c.length; i++) {
        const r = strict ? (u[i] === c[i] ? 0 : -1) : tokOk(u[i], c[i]);
        if (r < 0) { ok = false; break; }
        if (r > 0) typo = true;
      }
      if (ok && !typo) return { ok: true, typo: false, match: a };
      if (ok && !best) best = { ok: true, typo: true, match: a };
    }
    return best || { ok: false };
  }
  function hl(sentence, word) {
    const s = esc(sentence);
    const w = esc(word);
    try { return s.replace(new RegExp(`(^|[^\\w])(${reEsc(w)}\\w*)`, "i"), "$1<mark>$2</mark>"); } catch (e) { return s; }
  }

  // ---------- UI: wspólne ----------
  const app = document.getElementById("app");
  const modal = document.getElementById("modal");
  const UI = { view: "home", open: null, filter: null, q: "", flipDir: "en", hund: 0, tq: "" };
  let L = null; // bieżąca lekcja
  let F = null; // tryb fiszek

  let toastT = null;
  function toast(msg) {
    const t = document.getElementById("toast");
    t.textContent = msg; t.classList.add("show");
    clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove("show"), 2800);
  }
  function copy(text) {
    const done = () => toast("Skopiowane do schowka.");
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text).then(done, () => fallback());
    fallback();
    function fallback() {
      const ta = document.createElement("textarea"); ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); done(); } catch (e) { toast("Nie udało się skopiować."); }
      ta.remove();
    }
  }
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-say]");
    if (b) { e.preventDefault(); say(b.getAttribute("data-say"), b.hasAttribute("data-slow")); }
  });

  function audioBtns(text, big) {
    return `<span class="audio"><button class="aud${big ? " big" : ""}" data-say="${esc(text)}" aria-label="Posłuchaj">${ICON.spk}</button><button class="aud slow" data-say="${esc(text)}" data-slow aria-label="Posłuchaj wolniej">wolniej</button></span>`;
  }

  function cardHTML(w, o = {}) {
    const ex = w.ex.map((e) => `<li><button class="aud sm" data-say="${esc(e.en)}" aria-label="Posłuchaj zdania">${ICON.spk}</button><span><b>${hl(e.en, w.en)}</b><small>${esc(e.pl)}</small></span></li>`).join("");
    const ph = w.phrases.map((p) => `<button class="chip" data-say="${esc(p.en)}"><b>${esc(p.en)}</b><small>${esc(p.pl)}</small></button>`).join("");
    const fam = w.family.map((f) => { const i = f.indexOf(" - "); const en = i > 0 ? f.slice(0, i) : f; const pl = i > 0 ? f.slice(i + 3) : ""; return `<li><button class="fam-w" data-say="${esc(en)}">${esc(en)}</button><span>${esc(pl)}</span></li>`; }).join("");
    return `<article class="icard" style="--wk:${color(w.week)}">
      <header class="icard-head">
        <span class="icard-emoji" aria-hidden="true">${w.emoji}</span>
        <div class="icard-title"><h2 lang="en">${esc(w.en)}</h2><p class="say">[${esc(w.say)}]</p></div>
        ${audioBtns(w.en, true)}
      </header>
      <p class="icard-pl"><span>${esc(w.pl)}</span><em>${esc(w.pos)}</em></p>
      <section><h3>Przykłady</h3><ul class="exs">${ex}</ul></section>
      <section><h3>Połączenia</h3><div class="chips">${ph}</div></section>
      <section><h3>Rodzina słów</h3><ul class="fam">${fam}</ul></section>
      ${w.forms ? `<section><h3>Odmiana</h3><p class="forms">${esc(w.forms)}</p></section>` : ""}
      <section class="note"><h3>Uwaga</h3><p>${esc(w.note)}</p></section>
      <aside class="mnemo"><span>skojarzenie</span><p>${esc(w.mnemo)}</p></aside>
      ${o.noFoot ? "" : `<footer class="icard-foot"><span>Tydzień ${w.week} · ${esc(prog(w.week)[1])}</span><span>${boxLabel(w.id)}</span></footer>`}
    </article>`;
  }

  function openCard(id) {
    const w = WORD[id]; if (!w) return;
    modal.innerHTML = `<div class="sheet" role="dialog" aria-modal="true" aria-label="Fiszka ${esc(w.en)}"><button class="icon-btn sheet-x" id="mclose" aria-label="Zamknij">${ICON.x}</button>${cardHTML(w)}</div>`;
    modal.classList.add("open");
    document.body.classList.add("noscroll");
    const close = () => { modal.classList.remove("open"); modal.innerHTML = ""; document.body.classList.remove("noscroll"); };
    $("#mclose").onclick = close;
    modal.onclick = (e) => { if (e.target === modal) close(); };
    say(w.en);
  }

  // fiszka z modułu 1000 słów
  function thl(sentence, w) { // podświetla słowo, jego końcówki (-s, -ed, -ing...) albo formy nieregularne z pola forms
    const s = esc(sentence);
    const e = w.en, b = reEsc(e);
    const alts = [e.length > 2 ? `${b}(?:s|es|ed|d|ing|ly|er|est)?` : b];
    if (e.length > 2 && /e$/.test(e)) alts.push(`${reEsc(e.slice(0, -1))}(?:ing|ed|er|est)`); // prepare -> preparing
    if (/[^aeiou]y$/.test(e)) alts.push(`${reEsc(e.slice(0, -1))}i(?:es|ed|er|est|ly)`); // carry -> carries
    if (/[^aeiou][aeiou][bdgklmnprt]$/.test(e)) alts.push(`${b}${e.slice(-1)}(?:ing|ed|er|est)`); // kid -> kidding
    const head = alts.join("|");
    const forms = String(w.forms || "").split(/[^A-Za-z]+/).filter((t) => t.length > 1).map(reEsc);
    try { return s.replace(new RegExp(`(^|[^A-Za-z])(${[head].concat(forms).join("|")})(?![A-Za-z])`, "i"), "$1<mark>$2</mark>"); } catch (e) { return s; }
  }
  function tcardHTML(w, o = {}) {
    const ex = w.ex.map((e) => `<li><button class="aud sm" data-say="${esc(e.en)}" aria-label="Posłuchaj zdania">${ICON.spk}</button><span><b lang="en">${thl(e.en, w)}</b><small>${esc(e.pl)}</small></span></li>`).join("");
    const ph = w.phrases.map((p) => `<button class="chip" data-say="${esc(p.en)}"><b lang="en">${esc(p.en)}</b><small>${esc(p.pl)}</small></button>`).join("");
    return `<article class="icard tcard" style="--wk:${tcolor(w.n)}">
      <header class="icard-head">
        <span class="trank" aria-label="Słowo numer ${w.n}"><small>nr</small>${w.n}</span>
        <div class="icard-title"><h2 lang="en">${esc(w.en)}</h2><p class="say">[${esc(w.say)}]</p></div>
        ${audioBtns(w.en, true)}
      </header>
      <p class="icard-pl"><span>${esc(w.pl)}</span><em>${esc(w.pos)}</em></p>
      ${w.forms ? `<section><h3>Odmiana</h3><p class="forms" lang="en">${esc(w.forms)}</p></section>` : ""}
      <section><h3>Przykłady</h3><ul class="exs">${ex}</ul></section>
      <section><h3>Połączenia</h3><div class="chips">${ph}</div></section>
      ${w.note ? `<section class="note"><h3>Uwaga</h3><p>${esc(w.note)}</p></section>` : ""}
      ${o.noFoot ? "" : `<footer class="icard-foot"><span>1000 słów · nr ${w.n}</span><span>${tBoxLabel(w.id)}</span></footer>`}
    </article>`;
  }
  function openTop(id) {
    const w = TW[id]; if (!w) return;
    modal.innerHTML = `<div class="sheet" role="dialog" aria-modal="true" aria-label="Fiszka ${esc(w.en)}"><button class="icon-btn sheet-x" id="mclose" aria-label="Zamknij">${ICON.x}</button>${tcardHTML(w)}</div>`;
    modal.classList.add("open");
    document.body.classList.add("noscroll");
    const close = () => { modal.classList.remove("open"); modal.innerHTML = ""; document.body.classList.remove("noscroll"); };
    $("#mclose").onclick = close;
    modal.onclick = (e) => { if (e.target === modal) close(); };
    say(w.en);
  }

  // ---------- widoki ----------
  function render() {
    if (L || F) return;
    const v = UI.view;
    app.innerHTML = `<div class="page">${v === "home" ? homeHTML() : v === "top" ? topHTML() : v === "cards" ? cardsHTML() : progressHTML()}</div>${navHTML()}`;
    ({ home: bindHome, top: bindTop, cards: bindCards, progress: bindProgress })[v]();
    $$(".nav button").forEach((b) => (b.onclick = () => { UI.view = b.dataset.v; render(); window.scrollTo(0, 0); }));
  }
  function navHTML() {
    const it = (v, label, icon) => `<button data-v="${v}" class="${UI.view === v ? "on" : ""}" aria-current="${UI.view === v ? "page" : "false"}">${icon}<span>${label}</span></button>`;
    return `<nav class="nav">${it("home", "Dziś", ICON.today)}${it("top", "1000 słów", ICON.grid)}${it("cards", "Fiszki", ICON.cards)}${it("progress", "Postęp", ICON.chart)}</nav>`;
  }
  function topbar() {
    const xp = S.xpDay[today()] || 0;
    return `<header class="top"><div class="brand"><span class="logo" aria-hidden="true"><i></i><i></i><i></i></span>Kartoteka</div>
      <div class="chips-top"><span class="pill streak" title="Dni z rzędu">${ICON.flame}${streakNow()}</span><span class="pill xp" title="XP dzisiaj">${ICON.star}${xp} XP</span></div></header>`;
  }
  function ring(v, max, label) {
    const p = Math.min(1, v / max), r = 22, c = 2 * Math.PI * r;
    return `<svg class="ring" viewBox="0 0 56 56" width="56" height="56" aria-label="${esc(label || `Cel dnia: ${v} z ${max} XP`)}"><circle cx="28" cy="28" r="${r}" class="ring-bg"/><circle cx="28" cy="28" r="${r}" class="ring-fg" stroke-dasharray="${c}" stroke-dashoffset="${c * (1 - p)}"/><text x="28" y="32" text-anchor="middle">${Math.min(v, 9999)}</text></svg>`;
  }
  function topicOf(week, day) {
    const W = byWeek(week);
    if (day === 2) return `Gramatyka: ${W ? W.grammar.title : prog(week)[2]}`;
    if (day === 4 && W) return `Czytanie: ${W.reading.title}`;
    if (day === 1 || day === 3) return `${DAYS[day].name}: ${prog(week)[1].toLowerCase()}`;
    return DAYS[day].name;
  }
  function weekState(n) {
    if (n < S.pos.week) return "done";
    if (n === S.pos.week) return "current";
    return "locked";
  }
  function dayState(n, d) {
    const ws = weekState(n);
    if (ws === "done") return "done";
    if (ws === "locked") return "lock";
    if (d < S.pos.day) return "done";
    if (d === S.pos.day) return "now";
    return d === 7 ? "early" : "lock";
  }

  function homeHTML() {
    const p = S.pos;
    const xp = S.xpDay[today()] || 0;
    const dueN = dueList().length;
    let todayCard;
    if (p.week > 12) {
      todayCard = `<section class="today"><p class="kicker">Program ukończony</p><h1>12 tygodni za tobą</h1>
        <p class="lead">Skopiuj całą historię i wklej ją Claude'owi z prośbą: "ułóż mi kolejny 12-tygodniowy program na poziom A2-B1 na podstawie moich błędów".</p>
        <div class="row"><button class="btn primary" id="copyall">Kopiuj historię</button>${dueN ? `<button class="btn" id="rev">Powtórka (${Math.min(dueN, 10)})</button>` : ""}</div></section>`;
    } else {
      const doneToday = S.lastMain === today();
      todayCard = `<section class="today" style="--wk:${color(p.week)}">
        <div class="today-top"><p class="kicker">Dziś · sesja ${S.session + 1}</p>${ring(xp, GOAL)}</div>
        <h1>Tydzień ${p.week}, dzień ${p.day}</h1>
        <p class="lead">${esc(topicOf(p.week, p.day))}</p>
        <ol class="plan">
          <li><span class="pn">1</span><b>Powtórka fiszek</b><span>${dueN ? `${Math.min(dueN, 10)} ${plural(Math.min(dueN, 10), "fiszka", "fiszki", "fiszek")}` : "dziś nic zaległego"}</span></li>
          <li><span class="pn">2</span><b>${esc(DAYS[p.day].name)}</b><span>ok. ${DAYS[p.day].min} min</span></li>
        </ol>
        <button class="btn primary big" id="start">${doneToday ? "Następna sesja" : "Start"}</button>
        ${doneToday ? `<p class="done-note">${ICON.check} Dzisiejsza sesja zaliczona. Kolejna jest dla chętnych.</p>` : ""}
        <p class="goal">Cel dnia: ${GOAL} XP</p>
      </section>`;
    }
    const weeks = PROGRAM.map(([n, t, g]) => {
      const st = weekState(n);
      const open = UI.open === null ? n === p.week : UI.open === n;
      const doneN = st === "done" ? 7 : st === "current" ? p.day - 1 : 0;
      const tests = S.tests[n] || [];
      const last = tests.length ? tests[tests.length - 1] : null;
      const meta = st === "locked" ? `${ICON.lock}` : `${doneN}/7${last !== null ? ` · test ${last}%` : ""}`;
      const stations = open ? `<ol class="line">${[1, 2, 3, 4, 5, 6, 7].map((d) => {
        const ds = dayState(n, d);
        const dot = ds === "done" ? ICON.check : ds === "lock" ? ICON.lock : d;
        const sub = ds === "now" ? "dzisiaj" : ds === "done" ? "powtórz" : ds === "early" ? "spróbuj wcześniej" : "";
        return `<li><button class="stn ${ds}" data-week="${n}" data-day="${d}" ${ds === "lock" ? 'aria-disabled="true"' : ""}><span class="dot">${dot}</span><span class="stn-t"><b>${esc(DAYS[d].name)}</b>${sub ? `<small>${sub}</small>` : ""}</span></button></li>`;
      }).join("")}</ol>` : "";
      return `<div class="wk ${st}${open ? " open" : ""}" style="--wk:${color(n)}">
        <button class="wk-tab" data-open="${n}" aria-expanded="${open}"><span class="wk-num">${n}</span><span class="wk-t"><b>${esc(t)}</b><small>${esc(g)}</small></span><span class="wk-meta">${meta}</span></button>${stations}</div>`;
    }).join("");
    return `${topbar()}${todayCard}${topBanner()}<section class="weeks"><h2 class="sec">Kartoteka kursu</h2>${weeks}</section>`;
  }
  function topBanner() {
    if (!TOP.length) return "";
    const known = Object.keys(S.top.words).filter((id) => TW[id]).length;
    const rev = Math.min(tDue().length, TREV_MAX), left = Math.max(0, S.top.per - tNewToday());
    const nextW = TOP.find((w) => !S.top.words[w.id]);
    const todo = [rev ? `${rev} ${plural(rev, "powtórka", "powtórki", "powtórek")}` : "", left && nextW ? `${left} ${plural(left, "nowe słowo", "nowe słowa", "nowych słów")}` : ""].filter(Boolean).join(" + ");
    return `<button class="tban" id="gotop"><span class="tban-n">${known}<small>/1000</small></span><span class="tban-t"><b>1000 słów</b><small>${todo ? `Dziś: ${todo}` : "Na dziś zrobione"}</small></span><span class="tban-go" aria-hidden="true">›</span></button>`;
  }
  function bindHome() {
    const s = $("#start"); if (s) s.onclick = () => startSession("main", S.pos.week, S.pos.day);
    const gt = $("#gotop"); if (gt) gt.onclick = () => { UI.view = "top"; render(); window.scrollTo(0, 0); };
    const r = $("#rev"); if (r) r.onclick = startReview;
    const ca = $("#copyall"); if (ca) ca.onclick = () => copy(historyText());
    $$("[data-open]").forEach((b) => (b.onclick = () => { const n = +b.dataset.open; const isOpen = b.getAttribute("aria-expanded") === "true"; UI.open = isOpen ? 0 : n; render(); }));
    $$(".stn").forEach((b) => (b.onclick = () => {
      const n = +b.dataset.week, d = +b.dataset.day, ds = dayState(n, d);
      if (ds === "lock") return toast(weekState(n) === "locked" ? "Najpierw zalicz test poprzedniego tygodnia." : "Ta lekcja odblokuje się po poprzedniej.");
      if (ds === "now") return startSession("main", n, d);
      if (ds === "done") return startSession("practice", n, d);
      if (ds === "early" && confirm(`Test tygodnia ${n} teraz? Wynik ${PASS}% lub więcej zalicza cały tydzień i otwiera następny.`)) startSession("early", n, 7);
    }));
  }

  function cardsHTML() {
    const known = Object.keys(S.words).filter((id) => WORD[id]);
    const counts = [1, 2, 3, 4, 5, 6].map((b) => known.filter((id) => (S.words[id].box >= 6 ? 6 : S.words[id].box) === b).length);
    const dueN = dueList().length;
    if (!UI.filter) UI.filter = known.length ? "known" : "w1";
    const list = filteredWords();
    const boxes = counts.map((c, i) => `<div class="bx${i === 5 ? " master" : ""}"><span class="bx-n">${c}</span><span class="bx-l">${i === 5 ? "opanowane" : "pudełko " + (i + 1)}</span><span class="bx-i">${i === 5 ? "" : i === 0 ? "co dzień" : "co " + INTERVAL[i + 1] + " dni"}</span></div>`).join("");
    const opts = [["known", `Poznane (${known.length})`], ["due", `Do powtórki (${dueN})`], ["all", `Wszystkie (${ALL.length})`]].concat(PROGRAM.map(([n]) => [`w${n}`, `Tydzień ${n}`]));
    const items = list.map((w) => {
      const st = S.words[w.id];
      const b = st ? (st.box >= 6 ? "★" : st.box) : "";
      return `<button class="mini${st ? "" : " unknown"}" data-card="${w.id}" style="--wk:${color(w.week)}"><span class="mini-e" aria-hidden="true">${w.emoji}</span><span class="mini-t"><b lang="en">${esc(w.en)}</b><small>${esc(w.pl)}</small></span>${b !== "" ? `<span class="mini-b" title="${boxLabel(w.id)}">${b}</span>` : ""}</button>`;
    }).join("");
    return `${topbar()}<section class="boxes-wrap"><h2 class="sec">Twoje pudełka</h2><div class="boxes">${boxes}</div>
      <div class="row"><button class="btn primary" id="rev" ${dueN ? "" : "disabled"}>Powtórka${dueN ? ` (${Math.min(dueN, 10)})` : ": nic na dziś"}</button><button class="btn" id="flip" ${list.length ? "" : "disabled"}>Przeglądaj fiszki</button></div></section>
      <section class="deck"><div class="deck-tools"><select id="filter" aria-label="Filtr fiszek">${opts.map(([v, l]) => `<option value="${v}"${UI.filter === v ? " selected" : ""}>${l}</option>`).join("")}</select>
      <input type="search" id="q" placeholder="Szukaj po angielsku lub polsku" value="${esc(UI.q)}" aria-label="Szukaj fiszki"></div>
      ${list.length ? `<div class="minis">${items}</div>` : `<p class="empty">${UI.filter === "known" ? "Nie masz jeszcze fiszek. Pierwsze 7 dostaniesz w dzisiejszej lekcji." : UI.filter === "due" ? "Na dziś wszystko powtórzone." : "Brak wyników."}</p>`}</section>`;
  }
  function filteredWords() {
    let list = ALL;
    const f = UI.filter;
    if (f === "known") list = ALL.filter((w) => S.words[w.id]);
    else if (f === "due") list = dueList();
    else if (f && f[0] === "w") list = ALL.filter((w) => w.week === +f.slice(1));
    const q = UI.q.trim().toLowerCase();
    if (q) list = list.filter((w) => w.en.toLowerCase().includes(q) || w.pl.toLowerCase().includes(q));
    return list;
  }
  function bindCards() {
    const r = $("#rev"); if (r) r.onclick = startReview;
    $("#flip").onclick = () => startFlip(filteredWords());
    $("#filter").onchange = (e) => { UI.filter = e.target.value; render(); };
    const q = $("#q");
    q.oninput = (e) => {
      UI.q = e.target.value;
      const pos = e.target.selectionStart;
      render();
      const n = $("#q"); n.focus(); try { n.setSelectionRange(pos, pos); } catch (x) { /* ok */ }
    };
    $$("[data-card]").forEach((b) => (b.onclick = () => openCard(b.dataset.card)));
  }

  // ---------- widok: 1000 słów ----------
  function topHTML() {
    if (!TOP.length) return `${topbar()}<p class="empty">Nie udało się wczytać fiszek 1000 słów (pliki data/top-NN.js).</p>`;
    const T = S.top.words;
    const ids = Object.keys(T).filter((id) => TW[id]);
    const counts = [1, 2, 3, 4, 5, 6].map((b) => ids.filter((id) => Math.min(6, T[id].box) === b).length);
    const rev = Math.min(tDue().length, TREV_MAX);
    const done = tNewToday(), left = Math.max(0, S.top.per - done);
    const nextW = TOP.find((w) => !T[w.id]);
    const can = rev > 0 || (left > 0 && !!nextW);
    const newTxt = !nextW ? "cała lista poznana" : left ? `${left}, od nr ${nextW.n}` : `dziś już ${done}`;
    const hero = `<section class="today t1000">
      <div class="today-top"><p class="kicker">Najczęstsze słowa · lista NGSL</p>${ring(ids.length, 1000, `Poznane: ${ids.length} z 1000 słów`)}</div>
      <h1>1000 słów</h1>
      <p class="lead">Od najczęstszego: najpierw the, be, and, potem coraz rzadsze. Codziennie kilka nowych i powtórki w pudełkach.</p>
      <ol class="plan">
        <li><span class="pn">1</span><b>Powtórka</b><span>${rev ? `${rev} ${plural(rev, "fiszka", "fiszki", "fiszek")}` : "dziś nic zaległego"}</span></li>
        <li><span class="pn">2</span><b>Nowe słowa</b><span>${newTxt}</span></li>
      </ol>
      <button class="btn primary big" id="tstart" ${can ? "" : "disabled"}>${can ? "Ucz się" : "Na dziś zrobione"}</button>
      ${!left && nextW ? `<button class="link tmore" id="tmore">Chcę jeszcze ${S.top.per} nowych</button>` : ""}
      <div class="per" role="group" aria-label="Nowych słów dziennie"><span>Nowych dziennie</span>${PER_OPTS.map((n) => `<button class="seg${S.top.per === n ? " on" : ""}" data-per="${n}" aria-pressed="${S.top.per === n}">${n}</button>`).join("")}</div>
    </section>`;
    const boxes = counts.map((c, i) => `<div class="bx${i === 5 ? " master" : ""}"><span class="bx-n">${c}</span><span class="bx-l">${i === 5 ? "opanowane" : "pudełko " + (i + 1)}</span><span class="bx-i">${i === 5 ? "" : i === 0 ? "co dzień" : "co " + INTERVAL[i + 1] + " dni"}</span></div>`).join("");
    const q = UI.tq.trim().toLowerCase();
    let list;
    if (q) {
      const hits = TOP.filter((w) => w.en.toLowerCase().includes(q) || w.pl.toLowerCase().includes(q)).slice(0, 60);
      list = hits.length ? `<div class="minis tl">${hits.map(tMini).join("")}</div>` : `<p class="empty">Brak wyników.</p>`;
    } else {
      list = Array.from(new Set(TOP.map((w) => Math.ceil(w.n / 100)))).map(hundHTML).join("");
    }
    return `${topbar()}${hero}
      <section class="boxes-wrap"><h2 class="sec">Pudełka 1000 słów</h2><div class="boxes">${boxes}</div></section>
      <section class="deck"><h2 class="sec">Mapa listy</h2><div class="deck-tools"><input type="search" id="tq" placeholder="Szukaj w 1000 słów (EN lub PL)" value="${esc(UI.tq)}" aria-label="Szukaj słowa"></div>${list}</section>
      <p class="credit">Lista słów i kolejność: New General Service List (NGSL), Browne, Culligan, Phillips, licencja CC BY-SA 4.0.</p>`;
  }
  function hundHTML(h) {
    const T = S.top.words;
    const ws = TOP.filter((w) => Math.ceil(w.n / 100) === h);
    const kn = ws.filter((w) => T[w.id]).length, ms = ws.filter((w) => T[w.id] && T[w.id].box >= 6).length;
    const open = UI.hund === h;
    const cells = ws.map((w) => `<i class="c${T[w.id] ? Math.min(6, T[w.id].box) : 0}"></i>`).join("");
    return `<div class="hund${open ? " open" : ""}" style="--wk:${tcolor(h * 100)}">
      <button class="hund-tab" data-h="${h}" aria-expanded="${open}">
        <span class="wk-num">${h}</span>
        <span class="hund-t"><b>Słowa ${(h - 1) * 100 + 1}-${h * 100}</b><small>${kn}/${ws.length} poznanych${ms ? ` · ${ms} opanowanych` : ""}</small></span>
        <span class="cells" aria-hidden="true">${cells}</span>
      </button>
      ${open ? `<div class="hund-body"><div class="minis">${ws.map(tMini).join("")}</div></div>` : ""}
    </div>`;
  }
  function tMini(w) {
    const st = S.top.words[w.id];
    const b = st ? (st.box >= 6 ? "★" : st.box) : "";
    return `<button class="mini${st ? "" : " unknown"}" data-top="${w.id}" style="--wk:${tcolor(w.n)}"><span class="mini-n">${w.n}</span><span class="mini-t"><b lang="en">${esc(w.en)}</b><small>${esc(w.pl)}</small></span>${b !== "" ? `<span class="mini-b" title="${tBoxLabel(w.id)}">${b}</span>` : ""}</button>`;
  }
  function bindTop() {
    const s = $("#tstart"); if (s) s.onclick = () => startTop(false);
    const m = $("#tmore"); if (m) m.onclick = () => startTop(true);
    $$("[data-per]").forEach((b) => (b.onclick = () => { S.top.per = +b.dataset.per; save(); render(); }));
    $$("[data-h]").forEach((b) => (b.onclick = () => {
      const h = +b.dataset.h;
      UI.hund = UI.hund === h ? 0 : h;
      render();
      const el = $(`[data-h="${h}"]`); if (UI.hund && el) el.scrollIntoView({ block: "start" });
    }));
    $$("[data-top]").forEach((b) => (b.onclick = () => openTop(b.dataset.top)));
    const q = $("#tq");
    if (q) q.oninput = (e) => {
      UI.tq = e.target.value;
      const pos = e.target.selectionStart;
      render();
      const n = $("#tq"); n.focus(); try { n.setSelectionRange(pos, pos); } catch (x) { /* ok */ }
    };
  }

  function progressHTML() {
    const known = Object.keys(S.words).filter((id) => WORD[id]);
    const mastered = known.filter((id) => S.words[id].box >= 6).length;
    const topKnown = Object.keys(S.top.words).filter((id) => TW[id]).length;
    const tiles = [[S.session, "sesji"], [known.length, "słów z kursu"], [mastered, "opanowanych z kursu"], [`${topKnown}/1000`, "z listy 1000 słów"], [S.xp, "XP razem"], [streakNow(), "dni z rzędu"]]
      .map(([v, l]) => `<div class="tile-stat"><b>${v}</b><span>${l}</span></div>`).join("");
    const tests = PROGRAM.map(([n, t]) => {
      const r = S.tests[n] || [];
      if (!r.length) return "";
      return `<li style="--wk:${color(n)}"><span class="tw">Tydzień ${n}</span><span class="tt">${esc(t)}</span><span class="tr">${r.map((x) => `<em class="${x >= PASS ? "pass" : "fail"}">${x}%</em>`).join(" ")}</span></li>`;
    }).join("");
    const log = S.log.slice().reverse().map((e, i) => `<details class="logi"${i === 0 ? " open" : ""}><summary><b>Sesja ${e.n}</b> · tydzień ${e.week}, dzień ${e.day} · ${e.date}<span>${e.right}/${e.total}</span></summary><pre>${esc(reportText(e))}</pre><button class="btn small" data-copy="${S.log.indexOf(e)}">Kopiuj raport</button></details>`).join("");
    const voices = TTS.list.map((v) => `<option value="${esc(v.name)}"${TTS.voice && v.name === TTS.voice.name ? " selected" : ""}>${esc(v.name)} (${esc(v.lang)})</option>`).join("");
    return `${topbar()}<section><h2 class="sec">Statystyki</h2><div class="stats">${tiles}</div></section>
      ${tests ? `<section><h2 class="sec">Testy tygodniowe</h2><ul class="tests">${tests}</ul></section>` : ""}
      <section><h2 class="sec">Dziennik sesji</h2>${log || `<p class="empty">Tu pojawią się raporty z sesji w formacie do postep.md.</p>`}
      ${S.log.length ? `<div class="row"><button class="btn" id="copyall">Kopiuj całą historię</button></div>` : ""}</section>
      <section class="settings"><h2 class="sec">Ustawienia</h2>
        <label class="set"><span>Dźwięki odpowiedzi</span><input type="checkbox" id="snd" ${S.settings.sound ? "checked" : ""}></label>
        <label class="set"><span>Tempo lektora</span><input type="range" id="rate" min="0.6" max="1.1" step="0.05" value="${S.settings.rate}"></label>
        ${TTS.ok ? `<label class="set"><span>Głos</span><select id="voice">${voices || "<option>domyślny</option>"}</select></label><button class="btn small" id="testvoice">Posłuchaj głosu</button>` : `<p class="empty">Ta przeglądarka nie ma syntezatora mowy, ćwiczenia ze słuchu są wyłączone.</p>`}
      </section>
      <section class="settings"><h2 class="sec">Kopia postępu</h2>
        <p class="hint">Postęp jest zapisany w tej przeglądarce. Żeby przenieść go na inne urządzenie, zrób eksport i wczytaj plik tam.</p>
        <div class="row"><button class="btn" id="exp">Eksport do pliku</button><label class="btn" for="imp">Wczytaj plik</label><input type="file" id="imp" accept="application/json,.json" hidden></div>
        <button class="btn danger small" id="reset">Zacznij od zera</button>
      </section>`;
  }
  function bindProgress() {
    $$("[data-copy]").forEach((b) => (b.onclick = () => copy(reportText(S.log[+b.dataset.copy]))));
    const ca = $("#copyall"); if (ca) ca.onclick = () => copy(historyText());
    $("#snd").onchange = (e) => { S.settings.sound = e.target.checked; save(); };
    $("#rate").onchange = (e) => { S.settings.rate = +e.target.value; save(); say("This is your English teacher."); };
    const v = $("#voice"); if (v) v.onchange = (e) => { S.settings.voice = e.target.value; save(); loadVoices(); say("Hello! Today is Monday."); };
    const tv = $("#testvoice"); if (tv) tv.onclick = () => say("Hello! The meeting is on Wednesday at ten o'clock.");
    $("#exp").onclick = () => {
      const blob = new Blob([JSON.stringify(S, null, 1)], { type: "application/json" });
      const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = `kartoteka-postep-${today()}.json`;
      document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 2000);
    };
    $("#imp").onchange = (e) => {
      const f = e.target.files[0]; if (!f) return;
      const rd = new FileReader();
      rd.onload = () => {
        try {
          const o = JSON.parse(rd.result);
          if (!o || o.v !== 1 || !o.pos || !o.words) throw new Error("zły format");
          if (!confirm("Wczytać postęp z pliku? Obecny postęp w tej przeglądarce zostanie zastąpiony.")) return;
          S = hydrate(o); save(); render(); toast("Postęp wczytany.");
        } catch (x) { toast("To nie jest plik z postępem Kartoteki."); }
      };
      rd.readAsText(f);
    };
    $("#reset").onclick = () => { if (confirm("Na pewno usunąć cały postęp? Tego nie da się cofnąć (chyba że masz eksport).")) { S = fresh(); save(); UI.open = null; render(); toast("Zaczynasz od zera."); } };
  }

  // ---------- raporty ----------
  function reportText(e) {
    const w = (id) => WORD[id] || { en: id, pl: "?" };
    const nw = e.nowe.map((id) => `${w(id).en} = ${w(id).pl}`).join(", ") || "-";
    const aw = e.awanse.map(([id, b]) => `${w(id).en} -> ${b >= 6 ? "opanowane" : "pudełko " + b}`).join(", ") || "-";
    const sp = e.spadki.map((id) => w(id).en).join(", ") || "-";
    const g = e.gram ? `${e.gram[0]}, ${e.gram[1]}/${e.gram[2]}` : "-";
    const nx = e.next.week > 12 ? "program ukończony" : `Sesja ${e.n + 1} | Tydzień ${e.next.week}, dzień ${e.next.day} - ${topicOf(e.next.week, e.next.day)}`;
    return [
      `## Sesja ${e.n} | Tydzień ${e.week}, dzień ${e.day} | ${e.date}`,
      `Wynik: ${e.right}/${e.total}${e.day === 7 ? ` (test ${e.pct}%)` : ""}`,
      `Nowe słowa (pudełko 1): ${nw}`,
      `Awanse: ${aw}`,
      `Do pudełka 1: ${sp}`,
      `Gramatyka: ${g}`,
      `Słabe punkty: ${e.weak.length ? e.weak.join("; ") : "-"}`,
      `Następna sesja: ${nx}`,
    ].join("\n");
  }
  function historyText() {
    return "# Postęp - nauka angielskiego\n\n" + S.log.map(reportText).join("\n\n");
  }

  // ---------- budowanie lekcji ----------
  function makeOpts(w, key, pool) {
    const seen = new Set([w[key].toLowerCase()]);
    const out = [w];
    const add = (list) => {
      for (const x of shuffle(list)) {
        if (out.length >= 4) break;
        const k = x[key].toLowerCase();
        if (x.id === w.id || seen.has(k)) continue;
        seen.add(k); out.push(x);
      }
    };
    add(pool.filter((x) => x.pos === w.pos)); add(pool); add(ALL);
    return shuffle(out);
  }
  function vocabStep(w, kind, pool, extra) {
    if (kind === "listen" && !TTS.ok) kind = "en_pl";
    return Object.assign({ type: "vocab", kind, wordId: w.id, scored: true, opts: kind === "type" ? null : makeOpts(w, kind === "pl_en" ? "en" : "pl", pool) }, extra || {});
  }
  function weekWords(W) { return W.words.map((x) => WORD[x.id]).filter(Boolean); }
  function teach(words, pool) {
    const steps = [];
    for (let i = 0; i < words.length; i += 2) {
      const g = words.slice(i, i + 2);
      g.forEach((w) => steps.push({ type: "intro", wordId: w.id }));
      g.forEach((w) => steps.push(vocabStep(w, "en_pl", pool)));
    }
    sample(words, Math.ceil(words.length / 2)).forEach((w, i) => steps.push(vocabStep(w, i % 2 ? "listen" : "pl_en", pool)));
    return steps;
  }
  function tilesStep(s, W, extra) {
    const toks = s.en.split(/\s+/).map((t) => t.replace(/^[^\w']+|[^\w']+$/g, "")).filter(Boolean);
    const lower = new Set(toks.map((t) => t.toLowerCase()));
    const others = [];
    W.sentences.forEach((x) => { if (x !== s) x.en.split(/\s+/).forEach((t) => { const c = t.replace(/^[^\w']+|[^\w']+$/g, ""); if (c && !lower.has(c.toLowerCase()) && !others.some((o) => o.toLowerCase() === c.toLowerCase())) others.push(c); }); });
    return Object.assign({ type: "tiles", s, tiles: shuffle(toks.concat(sample(others, Math.min(3, others.length)))), scored: true }, extra || {});
  }
  function buildLesson(W, day) {
    const ww = weekWords(W);
    const part = (p) => ww.filter((w) => w.part === p);
    const sent = (u) => W.sentences.filter((s) => s.use === u);
    const gx = W.grammar.exercises;
    const steps = []; let newIds = [];
    if (day === 1 || day === 3) {
      const ws = part(day === 1 ? 1 : 2);
      newIds = ws.map((w) => w.id);
      steps.push(...teach(ws, ww));
      steps.push({ type: "match", ids: sample(ws, Math.min(5, ws.length)).map((w) => w.id), scored: true });
      if (day === 1) sample(ws, 2).forEach((w) => steps.push(vocabStep(w, "type", ww)));
      sent(day === 1 ? "L1" : "L3").forEach((s) => steps.push(tilesStep(s, W)));
    } else if (day === 2) {
      steps.push({ type: "gexplain" });
      gx.slice(0, 6).forEach((ex) => steps.push({ type: "gram", ex, scored: true, grammar: true }));
    } else if (day === 4) {
      const ws = part(3);
      newIds = ws.map((w) => w.id);
      steps.push({ type: "reading" });
      W.reading.questions.forEach((q) => steps.push({ type: "rq", q, scored: true }));
      ws.forEach((w) => steps.push({ type: "intro", wordId: w.id }));
      ws.forEach((w) => steps.push(vocabStep(w, "en_pl", ww)));
    } else if (day === 5) {
      sent("L5").forEach((s) => steps.push({ type: "write", s, scored: true }));
      sample(part(1).concat(part(2)), 2).forEach((w) => steps.push(vocabStep(w, "type", ww)));
    } else if (day === 6) {
      W.dialog.turns.forEach((t, i) => steps.push({ type: "dialog", t, idx: i, scored: true, noRequeue: true }));
    } else if (day === 7) {
      const kinds = ["en_pl", "type", "pl_en", "listen"];
      sample(ww, 8).forEach((w, i) => steps.push(vocabStep(w, kinds[i % 4], ww, { test: true })));
      gx.slice(6, 10).forEach((ex) => steps.push({ type: "gram", ex, scored: true, grammar: true, test: true }));
      sample(sent("L3").concat(sent("L5")), 3).forEach((s) => steps.push(tilesStep(s, W, { test: true })));
    }
    return { steps, newIds };
  }
  function reviewSteps(max) {
    const due = dueList().slice(0, max);
    const known = Object.keys(S.words).map((id) => WORD[id]).filter(Boolean);
    const kinds = ["en_pl", "pl_en", "type", "listen"];
    return shuffle(due).map((w, i) => vocabStep(w, kinds[i % kinds.length], known.length >= 4 ? known : ALL, { review: true }));
  }
  function newL(o) {
    return Object.assign({ i: 0, right: 0, total: 0, tRight: 0, tTotal: 0, gRight: 0, gTotal: 0, gWeak: [], miss: new Set(), grade: new Set(), wstat: {}, chat: [], answered: false, newIds: [], requeue: true }, o);
  }
  function startSession(mode, week, day) {
    const W = byWeek(week);
    if (!W) return toast(`Treść tygodnia ${week} jeszcze się nie wczytała.`);
    const rev = mode === "main" ? reviewSteps(10) : [];
    const les = buildLesson(W, day);
    L = newL({ kind: "lesson", mode, week, day, W, steps: rev.concat(les.steps), newIds: mode === "early" ? [] : les.newIds, requeue: day !== 7 });
    rev.forEach((s) => L.grade.add(s.wordId));
    if (day === 7 && mode !== "practice") les.steps.forEach((s) => { if (s.wordId && S.words[s.wordId]) L.grade.add(s.wordId); });
    if (rev.length) L.steps.splice(rev.length, 0, { type: "divider", title: DAYS[day].name, sub: topicOf(week, day) });
    lessonShell();
    showStep();
  }
  function startReview() {
    const steps = reviewSteps(10);
    if (!steps.length) return toast("Na dziś nie ma nic do powtórki.");
    L = newL({ kind: "review", mode: "review", steps });
    steps.forEach((s) => L.grade.add(s.wordId));
    lessonShell();
    showStep();
  }

  // ---------- sesja 1000 słów ----------
  // powtórki: fiszka do odwrócenia + samoocena; nowe: karta (Już znam / Uczę się), co 5 słów sprawdzenie EN -> PL, na koniec PL -> EN
  function tOpts(w, key) {
    const parts = (s) => s.toLowerCase().replace(/\([^)]*\)/g, "").split(/[,;]/).map((x) => x.trim()).filter(Boolean);
    const mine = new Set(parts(w.pl));
    const seen = new Set([w[key].toLowerCase()]);
    const out = [w];
    const add = (list) => {
      for (const x of shuffle(list)) {
        if (out.length >= 4) break;
        const k = x[key].toLowerCase();
        if (x.id === w.id || seen.has(k) || parts(x.pl).some((p) => mine.has(p))) continue; // bez dwóch poprawnych odpowiedzi
        seen.add(k); out.push(x);
      }
    };
    const near = TOP.filter((x) => Math.abs(x.n - w.n) <= 150);
    add(near.filter((x) => x.pos === w.pos)); add(near); add(TOP);
    return shuffle(out);
  }
  function tPickNext() {
    return TOP.find((w) => !S.top.words[w.id] && !L.learn.includes(w.id) && !L.known.includes(w.id));
  }
  function startTop(extra) {
    if (!TOP.length) return toast("Fiszki 1000 słów jeszcze się nie wczytały.");
    const due = tDue().slice(0, TREV_MAX);
    const quota = extra ? S.top.per : Math.max(0, S.top.per - tNewToday());
    L = newL({ kind: "top", mode: "top", steps: shuffle(due).map((w) => ({ type: "tflip", wordId: w.id, scored: true })), learn: [], known: [], chunk: [], quota, shown: 0 });
    const first = quota > 0 ? tPickNext() : null;
    if (first) {
      if (L.steps.length) L.steps.push({ type: "divider", title: "nowe słowa", sub: `${quota} ${plural(quota, "słowo", "słowa", "słów")} z listy, od nr ${first.n}` });
      L.steps.push({ type: "tintro", wordId: first.id });
    }
    if (!L.steps.length) { L = null; return toast("Na dziś wszystko zrobione."); }
    lessonShell();
    showStep();
  }
  function finishTop() {
    L.finished = true;
    const t = today(), T = S.top.words;
    const res = { nowe: [], znane: [], awanse: [], spadki: [] };
    const doneSteps = L.steps.slice(0, Math.min(L.steps.length, L.i + (L.answered ? 1 : 0)));
    L.learn.forEach((id) => { if (!T[id]) { T[id] = { box: 1, due: addDays(t, 1), added: t, ok: 0, bad: 0 }; res.nowe.push(id); } });
    L.known.forEach((id) => { if (!T[id]) { T[id] = { box: 4, due: addDays(t, INTERVAL[4]), added: t, ok: 0, bad: 0, known: true }; res.znane.push(id); } });
    doneSteps.filter((s) => s.type === "tflip" && !s.retry).forEach((s) => {
      const w = T[s.wordId]; if (!w) return;
      if (L.miss.has(s.wordId)) { w.box = 1; w.due = addDays(t, 1); res.spadki.push(s.wordId); }
      else { w.box = Math.min(6, w.box + 1); w.due = w.box >= 6 ? null : addDays(t, INTERVAL[w.box]); res.awanse.push([s.wordId, w.box]); }
    });
    Object.keys(L.wstat).forEach((id) => { const w = T[id]; if (w) { w.ok += L.wstat[id][0]; w.bad += L.wstat[id][1]; } });
    S.top.newDay[t] = (S.top.newDay[t] || 0) + res.nowe.length;
    const any = L.total > 0 || res.nowe.length > 0 || res.znane.length > 0;
    const xp = any ? L.right * 2 + 10 : 0;
    if (any) { S.xp += xp; S.xpDay[t] = (S.xpDay[t] || 0) + xp; touchDay(); }
    save();
    return { xp, res, any };
  }
  function showTopResult({ xp, res }) {
    const nm = (id) => `<b lang="en">${esc(TW[id].en)}</b>`;
    const lst = (title, arr, fmt) => (arr.length ? `<div class="res-list"><h3>${title}</h3><p>${arr.map(fmt).join(", ")}</p></div>` : "");
    const known = Object.keys(S.top.words).filter((id) => TW[id]).length;
    $("#barfill").style.width = "100%";
    $("#lcount").textContent = "";
    body.innerHTML = `<div class="result">
      <div class="stamp" aria-hidden="true">${known}/1000</div>
      <h1>${res.nowe.length ? `+${res.nowe.length} ${plural(res.nowe.length, "nowe słowo", "nowe słowa", "nowych słów")}` : "Powtórka zrobiona"}</h1>
      <div class="res-stats"><div><b>${L.right}/${L.total}</b><span>poprawnie</span></div><div><b>+${xp}</b><span>XP</span></div><div><b>${S.streak}</b><span>${plural(S.streak, "dzień", "dni", "dni")} z rzędu</span></div></div>
      ${lst("Nowe fiszki (pudełko 1)", res.nowe, (id) => `${nm(id)} = ${esc(TW[id].pl)}`)}
      ${lst(`Już znane (wrócą za ${INTERVAL[4]} dni)`, res.znane, nm)}
      ${lst("Awanse", res.awanse, ([id, b]) => `${nm(id)} -> ${b >= 6 ? "opanowane" : "pudełko " + b}`)}
      ${lst("Do pudełka 1", res.spadki, (id) => `${nm(id)} = ${esc(TW[id].pl)}`)}
    </div>`;
    foot.className = "l-foot";
    foot.innerHTML = `<span></span><button class="btn primary" id="fin">Gotowe</button>`;
    sfx("done");
    $("#fin").onclick = () => { L = null; UI.view = "top"; render(); window.scrollTo(0, 0); };
  }

  // ---------- silnik lekcji ----------
  const GOOD = ["Dobrze!", "Świetnie!", "Tak jest!", "Brawo!", "Zgadza się!", "Dokładnie!"];
  const cur = () => L.steps[L.i];
  let foot, body;

  function lessonShell() {
    window.scrollTo(0, 0);
    app.innerHTML = `<div class="lesson"><header class="l-top"><button class="icon-btn" id="quit" aria-label="Przerwij lekcję">${ICON.x}</button><div class="bar" role="progressbar" aria-label="Postęp lekcji"><i id="barfill"></i></div><span class="l-count" id="lcount"></span></header><main class="l-body" id="lbody"></main><footer class="l-foot" id="lfoot"></footer></div>`;
    foot = $("#lfoot"); body = $("#lbody");
    $("#quit").onclick = () => {
      if (L && L.finished) { L = null; return render(); }
      if (L && L.kind === "top") {
        if (!confirm("Zakończyć teraz? To, co już zrobione, zostanie zapisane.")) return;
        if (TTS.ok) speechSynthesis.cancel();
        const r = finishTop();
        if (r.any) return showTopResult(r);
        L = null; return render();
      }
      if (confirm("Przerwać? Wynik tej sesji nie zostanie zapisany.")) { L = null; if (TTS.ok) speechSynthesis.cancel(); render(); }
    };
  }
  function showStep() {
    const st = cur();
    L.answered = false;
    $("#barfill").style.width = `${Math.round((L.i / L.steps.length) * 100)}%`;
    $("#lcount").textContent = `${L.i + 1}/${L.steps.length}`;
    body.innerHTML = `<div class="step step-${st.type}">${R[st.type](st)}</div>`;
    body.scrollTop = 0; window.scrollTo(0, 0);
    M[st.type](st);
  }
  function next() {
    if (!L) return;
    L.i++;
    if (L.i >= L.steps.length) return L.kind === "top" ? showTopResult(finishTop()) : finish();
    showStep();
  }
  function footCheck(dunno) {
    foot.className = "l-foot";
    foot.innerHTML = `${dunno ? '<button class="btn ghost" id="dunno">Nie wiem</button>' : "<span></span>"}<button class="btn primary" id="check" disabled>Sprawdź</button>`;
  }
  function footNext(label, hint) {
    foot.className = "l-foot";
    foot.innerHTML = `<span class="foot-hint">${hint || ""}</span><button class="btn primary" id="next">${label || "Dalej"}</button>`;
    $("#next").onclick = next;
  }
  function footHint(text) {
    foot.className = "l-foot";
    foot.innerHTML = `<span class="foot-hint">${text}</span>`;
  }
  const enableCheck = (on) => { const b = $("#check"); if (b) b.disabled = !on; };
  function feedback(ok, html, typo) {
    foot.className = "l-foot fb " + (ok ? "good" : "bad");
    foot.innerHTML = `<div class="fb-msg"><strong>${ok ? (typo ? "Dobrze, z literówką" : pick(GOOD)) : "Nie tym razem"}</strong>${html || ""}</div><button class="btn ${ok ? "good" : "bad"}" id="next">Dalej</button>`;
    $("#next").onclick = next;
    $("#next").focus({ preventScroll: true });
  }
  function mark(id, ok) {
    const s = (L.wstat[id] = L.wstat[id] || [0, 0]);
    if (ok) s[0]++; else { s[1]++; L.miss.add(id); }
  }
  function answer(ok, html, o) {
    o = o || {};
    if (L.answered) return;
    L.answered = true;
    const st = cur();
    if (st.scored && !st.retry) {
      L.total++; if (ok) L.right++;
      if (st.test) { L.tTotal++; if (ok) L.tRight++; }
      if (st.grammar) { L.gTotal++; if (ok) L.gRight++; else if (st.ex.why && !L.gWeak.includes(st.ex.why)) L.gWeak.push(st.ex.why); }
    }
    if (st.wordId) mark(st.wordId, ok);
    if (!ok && L.requeue && !st.noRequeue && !st.retry) L.steps.push(Object.assign({}, st, { retry: true }));
    $$("#lbody button.opt, #lbody .tile, #lbody input, #lbody textarea").forEach((x) => (x.disabled = true));
    sfx(ok ? "ok" : "bad");
    feedback(ok, html, o.typo);
    if (o.speak) setTimeout(() => say(o.speak), 260);
  }
  const optsHTML = (labels) => `<div class="opts">${labels.map((l, i) => `<button class="opt" data-i="${i}"><kbd>${i + 1}</kbd><span>${esc(l)}</span></button>`).join("")}</div>`;
  function bindOpts(onPick) {
    $$("#lbody .opt").forEach((b) => (b.onclick = () => {
      if (L.answered) return;
      $$("#lbody .opt").forEach((x) => x.classList.remove("sel"));
      b.classList.add("sel");
      onPick(+b.dataset.i);
    }));
  }
  function markOpts(chosen, correct) {
    $$("#lbody .opt").forEach((b) => { const i = +b.dataset.i; if (i === correct) b.classList.add("right"); else if (i === chosen) b.classList.add("wrong"); });
  }
  const wordFb = (w, extra) => `<p class="fb-word"><b lang="en">${esc(w.en)}</b> [${esc(w.say)}] - ${esc(w.pl)}</p><p class="fb-ex">${esc(w.ex[0].en)}<small>${esc(w.ex[0].pl)}</small></p>${extra || ""}`;

  const R = {}; // render
  const M = {}; // mount

  R.divider = (st) => `<div class="divider"><p class="kicker">Powtórka zrobiona</p><h2>Teraz: ${esc(st.title)}</h2><p>${esc(st.sub)}</p></div>`;
  M.divider = () => footNext("Zaczynamy");

  R.intro = (st) => `<p class="tag new">Nowe słowo</p>${cardHTML(WORD[st.wordId], { noFoot: true })}`;
  M.intro = (st) => { footNext("Dalej"); setTimeout(() => say(WORD[st.wordId].en), 200); };

  R.vocab = (st) => {
    const w = WORD[st.wordId];
    const tag = st.retry ? '<p class="tag">Jeszcze raz</p>' : st.review ? '<p class="tag">Powtórka</p>' : st.test ? '<p class="tag">Test</p>' : "";
    if (st.kind === "en_pl") return `${tag}<h2 class="q">Co znaczy to słowo?</h2><div class="prompt"><button class="aud big" data-say="${esc(w.en)}" aria-label="Posłuchaj">${ICON.spk}</button><span class="pw" lang="en">${esc(w.en)}</span></div>${optsHTML(st.opts.map((x) => x.pl))}`;
    if (st.kind === "pl_en") return `${tag}<h2 class="q">Jak to powiedzieć po angielsku?</h2><div class="prompt"><span class="pe" aria-hidden="true">${w.emoji}</span><span class="pw">${esc(w.pl)}</span></div>${optsHTML(st.opts.map((x) => x.en))}`;
    if (st.kind === "listen") return `${tag}<h2 class="q">Posłuchaj i wybierz znaczenie</h2><div class="listen"><button class="aud huge" data-say="${esc(w.en)}" aria-label="Posłuchaj">${ICON.spk}</button><button class="aud slow" data-say="${esc(w.en)}" data-slow>wolniej</button></div>${optsHTML(st.opts.map((x) => x.pl))}`;
    return `${tag}<h2 class="q">Napisz po angielsku</h2><div class="prompt"><span class="pe" aria-hidden="true">${w.emoji}</span><span class="pw">${esc(w.pl)}</span></div><input class="answer" id="inp" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="wpisz słowo" lang="en" aria-label="Odpowiedź po angielsku">`;
  };
  M.vocab = (st) => {
    const w = WORD[st.wordId];
    footCheck(true);
    let chosen = -1;
    const fbOk = (extra) => wordFb(w, extra);
    $("#dunno").onclick = () => { if (st.opts) markOpts(-1, st.opts.findIndex((x) => x.id === w.id)); answer(false, fbOk(`<p class="fb-mnemo">${esc(w.mnemo)}</p>`), { speak: w.en }); };
    if (st.kind === "type") {
      const inp = $("#inp");
      inp.oninput = () => enableCheck(inp.value.trim().length > 0);
      inp.focus({ preventScroll: true });
      $("#check").onclick = () => {
        const r = compare(inp.value, [w.en], false);
        inp.classList.add(r.ok ? "right" : "wrong");
        answer(r.ok, fbOk(r.typo ? `<p>Poprawny zapis: <b>${esc(w.en)}</b></p>` : r.ok ? "" : `<p>Twoja odpowiedź: ${esc(inp.value)}</p>`), { typo: r.typo, speak: w.en });
      };
    } else {
      if (st.kind === "en_pl" || st.kind === "listen") setTimeout(() => say(w.en), 250);
      const correct = st.opts.findIndex((x) => x.id === w.id);
      bindOpts((i) => { chosen = i; enableCheck(true); if (st.kind === "pl_en") say(st.opts[i].en); });
      $("#check").onclick = () => { markOpts(chosen, correct); answer(chosen === correct, fbOk(), { speak: st.kind === "pl_en" ? null : w.en }); };
    }
  };

  R.match = (st) => {
    const ws = st.ids.map((id) => WORD[id]);
    st.left = st.left || shuffle(ws); st.right = st.right || shuffle(ws);
    return `${st.retry ? '<p class="tag">Jeszcze raz</p>' : ""}<h2 class="q">Połącz pary</h2><div class="match"><div class="mcol">${st.left.map((w) => `<button class="mt" data-side="L" data-id="${w.id}" lang="en">${esc(w.en)}</button>`).join("")}</div><div class="mcol">${st.right.map((w) => `<button class="mt" data-side="R" data-id="${w.id}">${esc(w.pl)}</button>`).join("")}</div></div>`;
  };
  M.match = (st) => {
    footHint("Dotknij słowa i jego tłumaczenia.");
    let sel = null, errs = 0, left = st.ids.length;
    $$("#lbody .mt").forEach((b) => (b.onclick = () => {
      if (b.classList.contains("ok") || L.answered) return;
      if (b.dataset.side === "L") say(WORD[b.dataset.id].en);
      if (!sel || sel.dataset.side === b.dataset.side) { $$("#lbody .mt.sel").forEach((x) => x.classList.remove("sel")); sel = b; b.classList.add("sel"); return; }
      const a = sel; sel = null; a.classList.remove("sel");
      if (a.dataset.id === b.dataset.id) {
        [a, b].forEach((x) => { x.classList.add("ok"); x.disabled = true; });
        left--;
        if (!left) setTimeout(() => answer(errs === 0, `<p>${errs ? `Pomyłki: ${errs}. Te słowa wrócą w powtórkach.` : "Wszystkie pary bez pomyłki."}</p>`), 250);
      } else {
        errs++;
        mark(a.dataset.id, false); mark(b.dataset.id, false);
        sfx("bad");
        [a, b].forEach((x) => { x.classList.add("no"); setTimeout(() => x.classList.remove("no"), 450); });
      }
    }));
  };

  R.tiles = (st) => `${st.retry ? '<p class="tag">Jeszcze raz</p>' : st.test ? '<p class="tag">Test</p>' : ""}<h2 class="q">Ułóż zdanie po angielsku</h2><p class="src">${esc(st.s.pl)}</p><div class="tray" id="tray" aria-label="Twoje zdanie"></div><div class="bank" id="bank">${st.tiles.map((t, i) => `<button class="tile" data-i="${i}" lang="en">${esc(t)}</button>`).join("")}</div>`;
  M.tiles = (st) => {
    footCheck(false);
    const tray = $("#tray"), bank = $("#bank");
    const sync = () => enableCheck(tray.children.length > 0);
    bank.onclick = (e) => {
      const b = e.target.closest(".tile"); if (!b || b.classList.contains("used") || L.answered) return;
      b.classList.add("used");
      const t = document.createElement("button"); t.className = "tile"; t.dataset.i = b.dataset.i; t.textContent = b.textContent; t.lang = "en";
      tray.appendChild(t); sync();
    };
    tray.onclick = (e) => {
      const t = e.target.closest(".tile"); if (!t || L.answered) return;
      const src = bank.querySelector(`.tile[data-i="${t.dataset.i}"]`); if (src) src.classList.remove("used");
      t.remove(); sync();
    };
    $("#check").onclick = () => {
      const built = Array.from(tray.children).map((x) => x.textContent).join(" ");
      const r = compare(built, [st.s.en].concat(st.s.alt || []), true);
      tray.classList.add(r.ok ? "right" : "wrong");
      answer(r.ok, r.ok ? `<p class="fb-ex">${esc(st.s.en)}<small>${esc(st.s.pl)}</small></p>` : `<p>Poprawnie: <b lang="en">${esc(st.s.en)}</b></p>`, { speak: st.s.en });
    };
  };

  R.write = (st) => `${st.retry ? '<p class="tag">Jeszcze raz</p>' : ""}<h2 class="q">Przetłumacz na angielski</h2><p class="src">${esc(st.s.pl)}</p><textarea class="answer area" id="inp" rows="3" autocomplete="off" autocapitalize="sentences" autocorrect="off" spellcheck="false" placeholder="Napisz całe zdanie" lang="en" aria-label="Tłumaczenie"></textarea>`;
  M.write = (st) => {
    footCheck(true);
    const inp = $("#inp");
    inp.oninput = () => enableCheck(inp.value.trim().length > 0);
    inp.onkeydown = (e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); const c = $("#check"); if (c && !c.disabled) c.click(); else { const n = $("#next"); if (n) n.click(); } } };
    inp.focus({ preventScroll: true });
    $("#dunno").onclick = () => answer(false, `<p>Poprawnie: <b lang="en">${esc(st.s.en)}</b></p>`, { speak: st.s.en });
    $("#check").onclick = () => {
      const r = compare(inp.value, [st.s.en].concat(st.s.alt || []), false);
      inp.classList.add(r.ok ? "right" : "wrong");
      const alts = (st.s.alt || []).length ? `<p class="fb-alt">Też dobrze: ${st.s.alt.map(esc).join(" / ")}</p>` : "";
      answer(r.ok, r.ok ? `<p>${r.typo ? "Poprawnie" : "Wzór"}: <b lang="en">${esc(r.match)}</b></p>${alts}` : `<p>Poprawnie: <b lang="en">${esc(st.s.en)}</b></p>${alts}`, { typo: r.typo, speak: st.s.en });
    };
  };

  R.gexplain = () => {
    const g = L.W.grammar;
    const table = g.table && g.table.length ? `<table class="gtab"><tbody>${g.table.map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody></table>` : "";
    return `<p class="tag">Gramatyka tygodnia</p><h2 class="gt">${esc(g.title)}</h2>${g.explain.map((p) => `<p class="gp">${esc(p)}</p>`).join("")}${table}<h3 class="sub">Przykłady</h3><ul class="exs">${g.examples.map((e) => `<li><button class="aud sm" data-say="${esc(e.en)}" aria-label="Posłuchaj">${ICON.spk}</button><span><b lang="en">${esc(e.en)}</b><small>${esc(e.pl)}</small></span></li>`).join("")}</ul>`;
  };
  M.gexplain = () => footNext("Do ćwiczeń");

  R.gram = (st) => {
    const ex = st.ex, [a, b] = ex.q.split("___");
    const tag = `<p class="tag">${st.retry ? "Jeszcze raz" : st.test ? "Test · gramatyka" : "Gramatyka"}</p>`;
    if (ex.type === "choice") return `${tag}<h2 class="q">Wybierz brakujące słowo</h2><p class="gq" lang="en">${esc(a)}<span class="gap" id="gap">___</span>${esc(b)}</p><p class="hint-pl">${esc(ex.pl)}</p>${optsHTML(ex.options)}`;
    return `${tag}<h2 class="q">Wpisz brakujące słowo</h2><p class="gq" lang="en">${esc(a)}<input class="gap-in" id="inp" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" aria-label="Brakujące słowo" size="6">${esc(b)}</p><p class="hint-pl">${esc(ex.pl)}</p>`;
  };
  M.gram = (st) => {
    const ex = st.ex;
    const full = (ans) => esc(ex.q).replace("___", `<mark>${esc(ans)}</mark>`);
    const fb = (ans) => `<p class="fb-ex" lang="en">${full(ans)}<small>${esc(ex.pl)}</small></p><p class="fb-why">${esc(ex.why)}</p>`;
    footCheck(false);
    if (ex.type === "choice") {
      let chosen = -1;
      bindOpts((i) => { chosen = i; $("#gap").textContent = ex.options[i]; enableCheck(true); });
      $("#check").onclick = () => { markOpts(chosen, ex.answer); answer(chosen === ex.answer, fb(ex.options[ex.answer]), { speak: ex.q.replace("___", ex.options[ex.answer]) }); };
    } else {
      const inp = $("#inp");
      inp.oninput = () => { enableCheck(inp.value.trim().length > 0); inp.style.width = Math.max(4, inp.value.length + 1) + "ch"; };
      inp.focus({ preventScroll: true });
      $("#check").onclick = () => {
        const u = norm(inp.value).join(" ");
        const ok = ex.answer.some((a) => norm(a).join(" ") === u);
        inp.classList.add(ok ? "right" : "wrong");
        answer(ok, fb(ex.answer[0]), { speak: ex.q.replace("___", ex.answer[0]) });
      };
    }
  };

  const readingText = () => L.W.reading.text.map((s, i) => `<li><button class="aud sm" data-say="${esc(s.en)}" aria-label="Posłuchaj zdania">${ICON.spk}</button><button class="rs" data-i="${i}" lang="en">${esc(s.en)}<small>${esc(s.pl)}</small></button></li>`).join("");
  function bindReading(root) { $$(".rs", root).forEach((b) => (b.onclick = () => b.classList.toggle("show"))); }
  R.reading = () => `<p class="tag">Czytanie</p><h2 class="gt">${esc(L.W.reading.title)}</h2><p class="hint">Przeczytaj tekst. Dotknij zdania, żeby zobaczyć tłumaczenie.</p><button class="btn small" data-say="${esc(L.W.reading.text.map((s) => s.en).join(" "))}">${ICON.spk} Posłuchaj całości</button><ol class="rtext">${readingText()}</ol>`;
  M.reading = () => { bindReading(body); footNext("Do pytań"); };
  R.rq = (st) => `<p class="tag">${st.retry ? "Jeszcze raz" : "Pytanie do tekstu"}</p><details class="rbox"><summary>Pokaż tekst</summary><ol class="rtext">${readingText()}</ol></details><h2 class="q" lang="en">${esc(st.q.q)}</h2><p class="hint-pl">${esc(st.q.qpl)}</p>${optsHTML(st.q.options)}`;
  M.rq = (st) => {
    bindReading(body);
    footCheck(false);
    let chosen = -1;
    bindOpts((i) => { chosen = i; enableCheck(true); });
    $("#check").onclick = () => { markOpts(chosen, st.q.answer); answer(chosen === st.q.answer, `<p>Odpowiedź: <b lang="en">${esc(st.q.options[st.q.answer])}</b></p>`); };
  };

  const bubble = (m) => m.who === "bot"
    ? `<div class="bub bot"><button class="aud sm" data-say="${esc(m.en)}" aria-label="Posłuchaj">${ICON.spk}</button><p lang="en">${esc(m.en)}<button class="tr-btn" aria-label="Pokaż tłumaczenie">PL</button><small>${esc(m.pl)}</small></p></div>`
    : `<div class="bub me"><p lang="en">${esc(m.en)}</p></div>`;
  R.dialog = (st) => `<p class="tag">Rozmowa · ${st.idx + 1}/${L.W.dialog.turns.length}</p><p class="d-intro">${esc(L.W.dialog.intro)}</p><div class="chat" id="chat">${L.chat.map(bubble).join("")}${bubble({ who: "bot", en: st.t.bot, pl: st.t.botpl })}</div><h3 class="sub">Twoja odpowiedź</h3>${optsHTML(st.t.options)}<button class="link" id="hint">Podpowiedź</button><p class="d-hint" id="dhint" hidden>${esc(st.t.hint)}</p>`;
  M.dialog = (st) => {
    footCheck(false);
    $$("#chat .tr-btn").forEach((b) => (b.onclick = (e) => { e.stopPropagation(); b.parentElement.classList.toggle("show"); }));
    const chat = $("#chat"); chat.scrollTop = chat.scrollHeight;
    setTimeout(() => say(st.t.bot), 250);
    $("#hint").onclick = () => { $("#dhint").hidden = false; $("#hint").remove(); };
    let chosen = -1;
    bindOpts((i) => { chosen = i; enableCheck(true); });
    $("#check").onclick = () => {
      const ok = chosen === st.t.answer;
      markOpts(chosen, st.t.answer);
      L.chat.push({ who: "bot", en: st.t.bot, pl: st.t.botpl }, { who: "me", en: st.t.options[st.t.answer] });
      answer(ok, ok ? "" : `<p>Lepiej: <b lang="en">${esc(st.t.options[st.t.answer])}</b></p><p class="fb-why">Podpowiedź: ${esc(st.t.hint)}</p>`, { speak: st.t.options[st.t.answer] });
    };
  };

  // ---------- kroki modułu 1000 słów ----------
  R.tintro = (st) => `<p class="tag new">Nowe słowo · ${Math.min(L.learn.length + 1, L.quota)}/${L.quota}</p>${tcardHTML(TW[st.wordId], { noFoot: true })}`;
  M.tintro = (st) => {
    foot.className = "l-foot";
    foot.innerHTML = `<button class="btn" id="tknow">Już znam</button><button class="btn primary" id="tlearn">Uczę się</button>`;
    setTimeout(() => say(TW[st.wordId].en), 200);
    const go = (known) => {
      if (L.answered) return;
      L.answered = true;
      (known ? L.known : L.learn).push(st.wordId);
      if (!known) L.chunk.push(st.wordId);
      L.shown++;
      const more = L.learn.length < L.quota && L.shown < L.quota * 4 ? tPickNext() : null;
      const ins = [];
      if (L.chunk.length && (L.chunk.length >= 5 || !more)) { ins.push(...shuffle(L.chunk).map((id) => ({ type: "tq", wordId: id, kind: "en_pl", scored: true }))); L.chunk = []; }
      if (more) ins.push({ type: "tintro", wordId: more.id });
      else if (L.learn.length) ins.push(...shuffle(L.learn).map((id) => ({ type: "tq", wordId: id, kind: "pl_en", scored: true })));
      L.steps.splice(L.i + 1, 0, ...ins);
      next();
    };
    $("#tknow").onclick = () => go(true);
    $("#tlearn").onclick = () => go(false);
  };

  R.tq = (st) => {
    const w = TW[st.wordId];
    st.opts = st.opts && !st.retry ? st.opts : tOpts(w, st.kind === "pl_en" ? "en" : "pl");
    const tag = `<p class="tag">${st.retry ? "Jeszcze raz" : "Sprawdzenie"}</p>`;
    if (st.kind === "en_pl") return `${tag}<h2 class="q">Co znaczy to słowo?</h2><div class="prompt"><button class="aud big" data-say="${esc(w.en)}" aria-label="Posłuchaj">${ICON.spk}</button><span class="pw" lang="en">${esc(w.en)}</span></div>${optsHTML(st.opts.map((x) => x.pl))}`;
    return `${tag}<h2 class="q">Jak to powiedzieć po angielsku?</h2><div class="prompt"><span class="pw">${esc(w.pl)}</span></div>${optsHTML(st.opts.map((x) => x.en))}`;
  };
  M.tq = (st) => {
    const w = TW[st.wordId];
    footCheck(true);
    const correct = st.opts.findIndex((x) => x.id === w.id);
    let chosen = -1;
    const fb = `<p class="fb-word"><b lang="en">${esc(w.en)}</b> [${esc(w.say)}] - ${esc(w.pl)}</p><p class="fb-ex">${esc(w.ex[0].en)}<small>${esc(w.ex[0].pl)}</small></p>`;
    if (st.kind === "en_pl") setTimeout(() => say(w.en), 250);
    $("#dunno").onclick = () => { markOpts(-1, correct); answer(false, fb, { speak: w.en }); };
    bindOpts((i) => { chosen = i; enableCheck(true); if (st.kind === "pl_en") say(st.opts[i].en); });
    $("#check").onclick = () => { markOpts(chosen, correct); answer(chosen === correct, fb, { speak: st.kind === "pl_en" ? null : w.en }); };
  };

  R.tflip = (st) => {
    const w = TW[st.wordId];
    return `<p class="tag">${st.retry ? "Jeszcze raz" : "Powtórka"}</p><div class="flipcard" id="fc"><div class="flip-front" style="--wk:${tcolor(w.n)}"><span class="trank big"><small>nr</small>${w.n}</span><h2 lang="en">${esc(w.en)}</h2>${audioBtns(w.en, true)}<p class="hint">Co to znaczy? Pomyśl, potem odwróć.</p></div></div>`;
  };
  M.tflip = (st) => {
    const w = TW[st.wordId];
    setTimeout(() => say(w.en), 200);
    foot.className = "l-foot";
    foot.innerHTML = `<span class="foot-hint">Pomyśl o znaczeniu.</span><button class="btn primary" id="fturn">Odwróć</button>`;
    const fc = $("#fc");
    const grade = (ok) => {
      if (L.answered) return;
      L.answered = true;
      if (!st.retry) { L.total++; if (ok) L.right++; }
      mark(st.wordId, ok);
      if (!ok && !st.retry) L.steps.push(Object.assign({}, st, { retry: true }));
      sfx(ok ? "ok" : "bad");
      next();
    };
    const turn = () => {
      if (fc.classList.contains("turned") || fc.classList.contains("turning")) return;
      fc.classList.add("turning");
      setTimeout(() => {
        fc.classList.remove("turning"); fc.classList.add("turned");
        fc.innerHTML = tcardHTML(w, { noFoot: true });
        foot.innerHTML = `<button class="btn bad" id="fno">Nie umiem</button><button class="btn good" id="fyes">Umiem</button>`;
        $("#fno").onclick = () => grade(false);
        $("#fyes").onclick = () => grade(true);
      }, 160);
    };
    $("#fturn").onclick = turn;
    fc.onclick = (e) => { if (!e.target.closest("button")) turn(); };
  };

  document.addEventListener("keydown", (e) => {
    if (!L || !foot) return;
    const tag = (e.target.tagName || "").toLowerCase();
    if (e.key === "Enter" && tag !== "textarea" && tag !== "button") {
      const n = $("#next"); if (n) { e.preventDefault(); return n.click(); }
      const c = $("#check"); if (c && !c.disabled) { e.preventDefault(); return c.click(); }
      const t = $("#fturn") || $("#tlearn"); if (t) { e.preventDefault(); return t.click(); }
    }
    if (tag === "input" || tag === "textarea") return;
    if (/^[1-6]$/.test(e.key)) { const o = $$("#lbody .opt")[+e.key - 1]; if (o && !o.disabled) o.click(); }
  });

  // ---------- koniec sesji ----------
  function finish() {
    L.finished = true;
    const t = today();
    const res = { nowe: [], awanse: [], spadki: [] };
    const graded = L.mode !== "practice";
    if (graded) {
      L.newIds.forEach((id) => { if (!S.words[id]) { S.words[id] = { box: 1, due: addDays(t, 1), added: t, ok: 0, bad: 0 }; res.nowe.push(id); } });
      L.grade.forEach((id) => {
        const w = S.words[id]; if (!w || res.nowe.includes(id)) return;
        if (L.miss.has(id)) { w.box = 1; w.due = addDays(t, 1); res.spadki.push(id); }
        else { w.box = Math.min(6, w.box + 1); w.due = w.box >= 6 ? null : addDays(t, INTERVAL[w.box]); res.awanse.push([id, w.box]); }
      });
    }
    Object.keys(L.wstat).forEach((id) => { const w = S.words[id]; if (w) { w.ok += L.wstat[id][0]; w.bad += L.wstat[id][1]; } });
    const xp = L.right * 2 + 10;
    S.xp += xp; S.xpDay[t] = (S.xpDay[t] || 0) + xp;
    touchDay();

    const r = { xp, pass: true, stamp: "Zaliczone", title: "Sesja zaliczona", msg: "", report: null };
    const pct = L.tTotal ? Math.round((100 * L.tRight) / L.tTotal) : 0;
    if (L.kind === "review") { r.stamp = "Powtórzone"; r.title = "Powtórka zrobiona"; }
    if (L.mode === "practice") { r.stamp = "Utrwalone"; r.title = "Lekcja powtórzona"; r.msg = "To była powtórka lekcji: liczy się XP, pudełka bez zmian."; }
    if (L.mode === "main" || L.mode === "early") {
      const wk = L.week, d = L.day;
      let nextPos = { week: wk, day: d + 1 };
      if (d === 7) {
        (S.tests[wk] = S.tests[wk] || []).push(pct);
        r.pass = pct >= PASS;
        if (r.pass) {
          nextPos = { week: wk + 1, day: 1 };
          for (let i = 1; i <= 7; i++) S.done[`${wk}-${i}`] = S.done[`${wk}-${i}`] || { date: t };
          if (L.mode === "early") weekWords(L.W).forEach((w) => { if (!S.words[w.id]) { S.words[w.id] = { box: 1, due: addDays(t, 1), added: t, ok: 0, bad: 0 }; res.nowe.push(w.id); } });
          r.stamp = `Zdane ${pct}%`; r.title = wk === 12 ? "Cały program zaliczony!" : `Tydzień ${wk} zaliczony`;
          r.msg = wk === 12 ? "Skopiuj historię z zakładki Postęp i poproś Claude o program A2-B1." : `Od jutra tydzień ${wk + 1}: ${prog(wk + 1)[1].toLowerCase()}.`;
        } else if (L.mode === "early") {
          nextPos = { week: S.pos.week, day: S.pos.day };
          r.stamp = `${pct}%`; r.title = "Jeszcze nie teraz"; r.msg = `Potrzeba ${PASS}%. Wracasz do zwykłych lekcji tego tygodnia.`;
        } else {
          nextPos = { week: wk, day: 1 };
          for (let i = 1; i <= 7; i++) delete S.done[`${wk}-${i}`];
          r.stamp = `${pct}%`; r.title = "Powtarzamy tydzień"; r.msg = `Potrzeba ${PASS}%. Tydzień ${wk} od początku, słowa zostają w pudełkach.`;
        }
      } else {
        S.done[`${wk}-${d}`] = { date: t, right: L.right, total: L.total };
      }
      S.pos = nextPos;
      if (L.mode === "main") {
        S.session++; S.lastMain = t;
        const weak = Array.from(L.miss).map((id) => WORD[id] && WORD[id].en).filter(Boolean).concat(L.gWeak.slice(0, 3));
        const entry = { n: S.session, week: wk, day: d, date: t, right: L.right, total: L.total, pct, nowe: res.nowe, awanse: res.awanse, spadki: res.spadki, gram: L.gTotal ? [L.W.grammar.title, L.gRight, L.gTotal] : null, weak, next: nextPos };
        S.log.push(entry);
        r.report = reportText(entry);
      }
    }
    save();
    showResult(r, res);
  }
  function showResult(r, res) {
    const lst = (title, arr, fmt) => (arr.length ? `<div class="res-list"><h3>${title}</h3><p>${arr.map(fmt).join(", ")}</p></div>` : "");
    const weak = Array.from(L.miss).map((id) => WORD[id]).filter(Boolean);
    $("#barfill").style.width = "100%";
    $("#lcount").textContent = "";
    body.innerHTML = `<div class="result">
      <div class="stamp${r.pass ? "" : " fail"}" aria-hidden="true">${esc(r.stamp)}</div>
      <h1>${esc(r.title)}</h1>
      <div class="res-stats"><div><b>${L.right}/${L.total}</b><span>poprawnie</span></div><div><b>+${r.xp}</b><span>XP</span></div><div><b>${S.streak}</b><span>${plural(S.streak, "dzień", "dni", "dni")} z rzędu</span></div></div>
      ${r.msg ? `<p class="res-msg">${esc(r.msg)}</p>` : ""}
      ${lst("Nowe fiszki (pudełko 1)", res.nowe, (id) => `<b lang="en">${esc(WORD[id].en)}</b> = ${esc(WORD[id].pl)}`)}
      ${lst("Awanse", res.awanse, ([id, b]) => `<b lang="en">${esc(WORD[id].en)}</b> -> ${b >= 6 ? "opanowane" : "pudełko " + b}`)}
      ${lst("Do pudełka 1", res.spadki, (id) => `<b lang="en">${esc(WORD[id].en)}</b>`)}
      ${weak.length ? lst("Do poćwiczenia", weak, (w) => `<b lang="en">${esc(w.en)}</b> (${esc(w.pl)})`) : ""}
      ${L.gWeak.length ? `<div class="res-list"><h3>Gramatyka do poprawy</h3><ul>${L.gWeak.slice(0, 3).map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>` : ""}
      ${r.report ? `<details class="report"><summary>Raport sesji (format postep.md)</summary><pre>${esc(r.report)}</pre><button class="btn small" id="copyrep">Kopiuj raport</button></details>` : ""}
    </div>`;
    foot.className = "l-foot";
    foot.innerHTML = `<span></span><button class="btn primary" id="fin">Gotowe</button>`;
    sfx("done");
    const cr = $("#copyrep"); if (cr) cr.onclick = () => copy(r.report);
    $("#fin").onclick = () => { L = null; UI.open = null; UI.view = "home"; render(); window.scrollTo(0, 0); };
  }

  // ---------- tryb fiszek (przeglądanie) ----------
  function startFlip(list) {
    if (!list.length) return toast("Brak fiszek w tym filtrze.");
    F = { deck: shuffle(list).slice(0, 20), i: 0, back: false, yes: 0, no: 0, moved: [] };
    renderFlip();
  }
  function renderFlip() {
    const w = F.deck[F.i];
    const front = UI.flipDir === "en"
      ? `<div class="flip-front"><span class="pe" aria-hidden="true">${w.emoji}</span><h2 lang="en">${esc(w.en)}</h2>${audioBtns(w.en, true)}</div>`
      : `<div class="flip-front"><span class="pe" aria-hidden="true">${w.emoji}</span><h2>${esc(w.pl)}</h2><p class="hint">Jak to będzie po angielsku?</p></div>`;
    app.innerHTML = `<div class="lesson flipmode"><header class="l-top"><button class="icon-btn" id="fquit" aria-label="Zamknij">${ICON.x}</button><div class="bar"><i style="width:${Math.round((F.i / F.deck.length) * 100)}%"></i></div><span class="l-count">${F.i + 1}/${F.deck.length}</span></header>
      <main class="l-body"><div class="flip-tools"><button class="seg${UI.flipDir === "en" ? " on" : ""}" data-dir="en">EN -> PL</button><button class="seg${UI.flipDir === "pl" ? " on" : ""}" data-dir="pl">PL -> EN</button></div>
      <div class="flipcard" id="fc">${F.back ? cardHTML(w) : front}</div></main>
      <footer class="l-foot">${F.back ? `<button class="btn bad" id="fno">Nie umiem</button><button class="btn good" id="fyes">Umiem</button>` : `<span class="foot-hint">Pomyśl o odpowiedzi.</span><button class="btn primary" id="fturn">Odwróć</button>`}</footer></div>`;
    $("#fquit").onclick = () => { F = null; render(); };
    $$(".seg").forEach((b) => (b.onclick = () => { UI.flipDir = b.dataset.dir; F.back = false; renderFlip(); }));
    if (!F.back) {
      const turn = () => { const fc = $("#fc"); fc.classList.add("turning"); setTimeout(() => { F.back = true; renderFlip(); say(w.en); }, 160); };
      $("#fturn").onclick = turn; $("#fc").onclick = (e) => { if (!e.target.closest("button")) turn(); };
      if (UI.flipDir === "en") say(w.en);
    } else {
      $("#fc").classList.add("turned");
      const grade = (ok) => {
        const st = S.words[w.id], t = today();
        if (ok) F.yes++; else F.no++;
        if (st && st.box < 6 && st.due && st.due <= t) {
          if (ok) { st.box = Math.min(6, st.box + 1); st.due = st.box >= 6 ? null : addDays(t, INTERVAL[st.box]); } else { st.box = 1; st.due = addDays(t, 1); }
          F.moved.push(w.id); save();
        }
        F.i++; F.back = false;
        if (F.i >= F.deck.length) return flipDone();
        renderFlip();
      };
      $("#fyes").onclick = () => grade(true);
      $("#fno").onclick = () => grade(false);
    }
  }
  function flipDone() {
    S.xp += F.yes; S.xpDay[today()] = (S.xpDay[today()] || 0) + F.yes; touchDay(); save();
    app.innerHTML = `<div class="lesson"><header class="l-top"><span></span><div class="bar"><i style="width:100%"></i></div><span></span></header><main class="l-body"><div class="result"><div class="stamp" aria-hidden="true">Przejrzane</div><h1>${F.deck.length} ${plural(F.deck.length, "fiszka", "fiszki", "fiszek")}</h1>
      <div class="res-stats"><div><b>${F.yes}</b><span>umiem</span></div><div><b>${F.no}</b><span>nie umiem</span></div><div><b>+${F.yes}</b><span>XP</span></div></div>
      <p class="res-msg">${F.moved.length ? `Zaległe fiszki przesunięte w pudełkach: ${F.moved.length}.` : "Pudełka zmieniają się tylko dla fiszek, które miały dziś powtórkę."}</p></div></main>
      <footer class="l-foot"><span></span><button class="btn primary" id="fin">Gotowe</button></footer></div>`;
    sfx("done");
    $("#fin").onclick = () => { F = null; render(); };
  }

  // ---------- start ----------
  if (!WEEKS.length) {
    app.innerHTML = `<div class="page"><p class="empty">Nie udało się wczytać treści kursu (folder data/).</p></div>`;
    return;
  }
  if (/[?&]debug\b/.test(location.search)) window.__K = { get L() { return L; }, get S() { return S; }, WORD, TW, TOP, tDue, tOpts, thl, compare, norm };
  render();
})();
