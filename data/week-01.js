window.WEEKS = window.WEEKS || [];
window.WEEKS.push({
  week: 1,
  title: "Liczby, dni, godziny",
  grammar: {
    title: "to be (am / is / are)",
    explain: [
      "Be to po polsku „być”. Ma 3 formy: am, is, are. Po polsku często pomijamy „jest” (Dzisiaj poniedziałek), po angielsku nigdy: Today IS Monday.",
      "Am stoi tylko przy I. Is stoi przy he, she, it i przy jednej rzeczy (the meeting, today). Are stoi przy you, we, they i przy kilku rzeczach (the orders).",
      "Przeczenie: dodaj not (I am not, it is not, we are not). Pytanie: przestaw kolejność. You are free. -> Are you free?",
      "W mowie skracamy: I'm, you're, it's, we're, isn't, aren't. Godzinę i dzień podajemy z it: It's ten o'clock. It's Monday."
    ],
    table: [
      ["I", "am", "I'm"],
      ["you / we / they", "are", "you're / we're / they're"],
      ["he / she / it", "is", "he's / she's / it's"],
      ["przeczenie", "am not / is not / are not", "I'm not / isn't / aren't"],
      ["pytanie", "Am I...? / Is it...? / Are you...?", "Is it Monday?"]
    ],
    examples: [
      { en: "It's ten o'clock.", pl: "Jest 10:00." },
      { en: "The meeting is on Wednesday.", pl: "Spotkanie jest w środę." },
      { en: "Are you free on Thursday?", pl: "Masz czas w czwartek?" }
    ],
    exercises: [
      { type: "choice", q: "I ___ at work today.", options: ["am", "is", "are"], answer: 0,
        pl: "Jestem dzisiaj w pracy.", why: "Przy I zawsze am." },
      { type: "gap", q: "It ___ Monday today.", answer: ["is", "'s"],
        pl: "Dzisiaj jest poniedziałek.", why: "Przy it zawsze is. Skrót: it's." },
      { type: "choice", q: "The orders ___ ready.", options: ["is", "am", "are"], answer: 2,
        pl: "Zamówienia są gotowe.", why: "The orders to kilka rzeczy (they), więc are." },
      { type: "gap", q: "We ___ in the office on Thursday.", answer: ["are", "'re"],
        pl: "W czwartek jesteśmy w biurze.", why: "Przy we zawsze are. Skrót: we're." },
      { type: "choice", q: "___ the meeting at ten o'clock?", options: ["Are", "Is", "Am"], answer: 1,
        pl: "Spotkanie jest o 10:00?", why: "W pytaniu be idzie na początek. The meeting to jedna rzecz (it), więc is." },
      { type: "gap", q: "Tom ___ not in the office today.", answer: ["is", "'s"],
        pl: "Toma nie ma dzisiaj w biurze.", why: "Tom to he, więc is. Przeczenie: is not, skrót isn't." },
      { type: "choice", q: "The meeting is ___ Monday.", options: ["in", "on", "at"], answer: 1,
        pl: "Spotkanie jest w poniedziałek.", why: "Z dniami tygodnia zawsze on: on Monday." },
      { type: "gap", q: "___ you free tomorrow?", answer: ["are"],
        pl: "Masz jutro czas?", why: "Pytanie z you: Are you...? Be idzie na początek." },
      { type: "choice", q: "It's 9:30. It's ___ nine.", options: ["half to", "thirty past", "half past"], answer: 2,
        pl: "Jest 9:30, czyli wpół do 10.", why: "9:30 to half past nine. Anglik liczy od godziny, która minęła: pół godziny PO 9." },
      { type: "gap", q: "The sale ___ today. It's tomorrow.", answer: ["isn't", "is not", "'s not"],
        pl: "Wyprzedaż nie jest dzisiaj, tylko jutro.", why: "Przeczenie: is + not, skrót isn't." }
    ]
  },
  words: [
    {
      id: "w1-monday",
      en: "Monday",
      pl: "poniedziałek",
      say: "mandej",
      pos: "rzeczownik",
      part: 1,
      emoji: "📅",
      ex: [
        { en: "It is Monday today.", pl: "Dzisiaj jest poniedziałek." },
        { en: "The new campaign is on Monday.", pl: "Nowa kampania startuje w poniedziałek." }
      ],
      phrases: [
        { en: "on Monday", pl: "w poniedziałek" },
        { en: "every Monday", pl: "w każdy poniedziałek" },
        { en: "Monday morning", pl: "poniedziałkowy poranek" }
      ],
      family: ["Tuesday - wtorek", "Friday - piątek", "Saturday - sobota", "Sunday - niedziela"],
      forms: "",
      note: "Dni tygodnia piszemy wielką literą. Mówimy ON Monday, nie IN Monday.",
      mnemo: "MANDEJ - poniedziałek to dzień MANDATÓW za spóźnienie do pracy."
    },
    {
      id: "w1-wednesday",
      en: "Wednesday",
      pl: "środa",
      say: "łenzdej",
      pos: "rzeczownik",
      part: 1,
      emoji: "🐪",
      ex: [
        { en: "The meeting is on Wednesday.", pl: "Spotkanie jest w środę." },
        { en: "Wednesday is a good day for a newsletter.", pl: "Środa to dobry dzień na newsletter." }
      ],
      phrases: [
        { en: "on Wednesday", pl: "w środę" },
        { en: "next Wednesday", pl: "w przyszłą środę" }
      ],
      family: ["Tuesday - wtorek", "Thursday - czwartek", "midweek - środek tygodnia"],
      forms: "",
      note: "Pierwsze d jest nieme: mówimy łenzdej, nie łednesdej. Piszemy jednak Wednesday.",
      mnemo: "ŁENZDEJ - środa to dzień ŁEZ: do weekendu jeszcze daleko."
    },
    {
      id: "w1-thursday",
      en: "Thursday",
      pl: "czwartek",
      say: "ferzdej",
      pos: "rzeczownik",
      part: 1,
      emoji: "📆",
      ex: [
        { en: "Tomorrow is Thursday, not Tuesday.", pl: "Jutro jest czwartek, a nie wtorek." },
        { en: "The live stream is on Thursday evening.", pl: "Transmisja na żywo jest w czwartek wieczorem." }
      ],
      phrases: [
        { en: "on Thursday", pl: "w czwartek" },
        { en: "this Thursday", pl: "w ten czwartek" },
        { en: "Thursday evening", pl: "czwartkowy wieczór" }
      ],
      family: ["Wednesday - środa", "Friday - piątek", "weekday - dzień roboczy"],
      forms: "",
      note: "Th to nie t ani f: wsuń czubek języka między zęby i dmuchnij. Nie myl z Tuesday (wtorek).",
      mnemo: "FERZDEJ - w czwartek myślisz już tylko o FERIACH, czyli o weekendzie."
    },
    {
      id: "w1-today",
      en: "today",
      pl: "dzisiaj, dziś",
      say: "tudej",
      pos: "przysłówek",
      part: 1,
      emoji: "👉",
      ex: [
        { en: "Today is my first day.", pl: "Dzisiaj jest mój pierwszy dzień." },
        { en: "The sale is only today!", pl: "Wyprzedaż tylko dzisiaj!" }
      ],
      phrases: [
        { en: "today's orders", pl: "dzisiejsze zamówienia" },
        { en: "from today", pl: "od dzisiaj" },
        { en: "later today", pl: "jeszcze dzisiaj, później" }
      ],
      family: ["tomorrow - jutro", "yesterday - wczoraj", "now - teraz", "tonight - dziś wieczorem"],
      forms: "",
      note: "Today stoi zwykle na początku albo na końcu zdania. Nie dodajemy przyimka: nie mówimy ON today.",
      mnemo: "TUDEJ - dzisiaj jestem TU, a jutro się zobaczy."
    },
    {
      id: "w1-tomorrow",
      en: "tomorrow",
      pl: "jutro",
      say: "tumarou",
      pos: "przysłówek",
      part: 1,
      emoji: "🌅",
      ex: [
        { en: "Tomorrow is a big day.", pl: "Jutro jest wielki dzień." },
        { en: "The new collection is online tomorrow.", pl: "Nowa kolekcja będzie w sklepie jutro." }
      ],
      phrases: [
        { en: "see you tomorrow", pl: "do jutra" },
        { en: "tomorrow morning", pl: "jutro rano" },
        { en: "the day after tomorrow", pl: "pojutrze" }
      ],
      family: ["today - dzisiaj", "yesterday - wczoraj", "morning - rano, poranek"],
      forms: "",
      note: "Piszemy z jednym m i dwoma r: tomorrow. Bez przyimka: tomorrow, nie ON tomorrow.",
      mnemo: "TUMAROU - jutro po imprezie będziesz TUMANEM."
    },
    {
      id: "w1-week",
      en: "week",
      pl: "tydzień",
      say: "łik",
      pos: "rzeczownik",
      part: 1,
      emoji: "🗓️",
      ex: [
        { en: "My birthday is next week.", pl: "Moje urodziny są w przyszłym tygodniu." },
        { en: "Black Week is a week of big sales.", pl: "Black Week to tydzień wielkich wyprzedaży." }
      ],
      phrases: [
        { en: "this week", pl: "w tym tygodniu" },
        { en: "next week", pl: "w przyszłym tygodniu" },
        { en: "every week", pl: "co tydzień" }
      ],
      family: ["weekend - weekend", "weekly - cotygodniowy", "day - dzień", "month - miesiąc"],
      forms: "",
      note: "Mówimy THIS week (w tym tygodniu) i NEXT week (w przyszłym tygodniu), bez in: nie IN next week.",
      mnemo: "ŁIK - tydzień w pracy przetrwasz tylko ŁYK po ŁYKU kawy."
    },
    {
      id: "w1-hour",
      en: "hour",
      pl: "godzina",
      say: "ałer",
      pos: "rzeczownik",
      part: 1,
      emoji: "⏰",
      ex: [
        { en: "The meeting is an hour long.", pl: "Spotkanie trwa godzinę." },
        { en: "The support line is open 24 hours.", pl: "Infolinia działa 24 godziny na dobę." }
      ],
      phrases: [
        { en: "in an hour", pl: "za godzinę" },
        { en: "half an hour", pl: "pół godziny" },
        { en: "office hours", pl: "godziny pracy biura" }
      ],
      family: ["minute - minuta", "second - sekunda", "hourly - co godzinę", "time - czas, godzina"],
      forms: "",
      note: "H jest nieme, więc AN hour, nie A hour. O godzinę na zegarku pytamy What time is it?, nie What hour.",
      mnemo: "AŁER - godzina czekania na kuriera boli: AŁ!"
    },
    {
      id: "w1-thirteen",
      en: "thirteen",
      pl: "trzynaście (13)",
      say: "fertin",
      pos: "liczebnik",
      part: 2,
      emoji: "🔢",
      ex: [
        { en: "My son is thirteen.", pl: "Mój syn ma 13 lat." },
        { en: "Thirteen orders are ready.", pl: "Gotowych jest 13 zamówień." }
      ],
      phrases: [
        { en: "thirteen years old", pl: "13 lat (wiek)" },
        { en: "Friday the 13th", pl: "piątek 13." }
      ],
      family: ["three - trzy", "thirty - trzydzieści", "fourteen - czternaście", "fifteen - piętnaście"],
      forms: "",
      note: "Akcent na końcu: fer-TIN. W thirty akcent jest na początku: FER-ti. Tak odróżnisz 13 od 30.",
      mnemo: "FERTIN - w piątek 13. nie licz na FART."
    },
    {
      id: "w1-thirty",
      en: "thirty",
      pl: "trzydzieści (30)",
      say: "ferti",
      pos: "liczebnik",
      part: 2,
      emoji: "⏳",
      ex: [
        { en: "It is six thirty now.", pl: "Jest teraz 6:30." },
        { en: "The ad is thirty seconds long.", pl: "Reklama trwa 30 sekund." }
      ],
      phrases: [
        { en: "thirty minutes", pl: "30 minut, pół godziny" },
        { en: "nine thirty", pl: "9:30" },
        { en: "thirty percent", pl: "30 procent" }
      ],
      family: ["three - trzy", "thirteen - trzynaście", "third - trzeci", "forty - czterdzieści"],
      forms: "",
      note: "Akcent na początku: FER-ti. W szybkiej amerykańskiej mowie t brzmi prawie jak d: ferdi.",
      mnemo: "FERTI - 30 sekund reklamy i FERTIG (po niemiecku: gotowe)."
    },
    {
      id: "w1-hundred",
      en: "hundred",
      pl: "sto (100)",
      say: "handred",
      pos: "liczebnik",
      part: 2,
      emoji: "💯",
      ex: [
        { en: "My grandma is a hundred today!", pl: "Moja babcia kończy dziś 100 lat!" },
        { en: "A hundred customers are online now.", pl: "Teraz na stronie jest 100 klientów." }
      ],
      phrases: [
        { en: "a hundred", pl: "sto" },
        { en: "two hundred", pl: "200" },
        { en: "hundreds of", pl: "setki" }
      ],
      family: ["thousand - tysiąc", "hundredth - setny", "percent - procent"],
      forms: "two hundred (bez -s)",
      note: "Po liczbie nie dodajemy -s: three hundred, nie three hundreds. Mówimy a hundred albo one hundred.",
      mnemo: "HANDRED - sto zamówień dziennie? Taki HANDEL to ja rozumiem!"
    },
    {
      id: "w1-thousand",
      en: "thousand",
      pl: "tysiąc (1000)",
      say: "fałzend",
      pos: "liczebnik",
      part: 2,
      emoji: "📈",
      ex: [
        { en: "Two thousand people are at the concert.", pl: "Na koncercie jest 2000 osób." },
        { en: "Ten thousand people are on the newsletter list.", pl: "Na liście newslettera jest 10 tysięcy osób." }
      ],
      phrases: [
        { en: "a thousand", pl: "tysiąc" },
        { en: "ten thousand", pl: "10 tysięcy" },
        { en: "thousands of", pl: "tysiące" }
      ],
      family: ["hundred - sto", "million - milion", "10k - 10 tysięcy (skrót)"],
      forms: "two thousand (bez -s)",
      note: "Th na początku to nie t: fałzend, nie tałzend. Po liczbie bez -s: five thousand, nie five thousands.",
      mnemo: "FAŁZEND - 10 tysięcy obserwujących, ale połowa FAŁSZYWA."
    },
    {
      id: "w1-half-past",
      en: "half past",
      pl: "wpół do (half past nine = 9:30)",
      say: "hef pest",
      pos: "wyrażenie",
      part: 2,
      emoji: "🕤",
      ex: [
        { en: "It's half past nine.", pl: "Jest wpół do 10." },
        { en: "The webinar is at half past ten.", pl: "Webinar jest o 10:30." }
      ],
      phrases: [
        { en: "half past nine", pl: "9:30, wpół do 10" },
        { en: "at half past ten", pl: "o 10:30" },
        { en: "half past twelve", pl: "12:30" }
      ],
      family: ["half - pół, połowa", "quarter past - kwadrans po", "quarter to - za kwadrans", "o'clock - pełna godzina"],
      forms: "",
      note: "Half past nine to 9:30, czyli po polsku wpół do DZIESIĄTEJ. Anglik liczy od godziny, która minęła, nie od następnej.",
      mnemo: "HEF PEST - Budapeszt to 2 połówki: Buda i PEST. Half past to połówka godziny."
    },
    {
      id: "w1-o-clock",
      en: "o'clock",
      pl: "pełna godzina (ten o'clock = 10:00)",
      say: "oklak",
      pos: "wyrażenie",
      part: 2,
      emoji: "🕙",
      ex: [
        { en: "It's ten o'clock now.", pl: "Jest teraz 10:00." },
        { en: "The shop is open from nine o'clock.", pl: "Sklep jest otwarty od 9:00." }
      ],
      phrases: [
        { en: "at five o'clock", pl: "o 5:00" },
        { en: "six o'clock", pl: "6:00" }
      ],
      family: ["clock - zegar", "hour - godzina", "half past - wpół do", "time - czas, pora"],
      forms: "",
      note: "O'clock tylko przy pełnych godzinach: ten o'clock. Przy minutach go nie ma: ten thirty, nie ten thirty o'clock.",
      mnemo: "OKLAK - przyszedłeś punktualnie o pełnej godzinie? Należą się OKLASKI."
    },
    {
      id: "w1-weekend",
      en: "weekend",
      pl: "weekend",
      say: "łikend",
      pos: "rzeczownik",
      part: 3,
      emoji: "🏖️",
      ex: [
        { en: "Saturday and Sunday are the weekend.", pl: "Sobota i niedziela to weekend." },
        { en: "The promo is only on the weekend.", pl: "Promocja jest tylko w weekend." }
      ],
      phrases: [
        { en: "on the weekend", pl: "w weekend" },
        { en: "Have a nice weekend!", pl: "Miłego weekendu!" },
        { en: "long weekend", pl: "długi weekend" }
      ],
      family: ["week - tydzień", "Saturday - sobota", "Sunday - niedziela", "weekday - dzień roboczy"],
      forms: "",
      note: "Po amerykańsku ON the weekend, po brytyjsku AT the weekend. Nigdy IN the weekend.",
      mnemo: "ŁIKEND - WEEK (tydzień) + END (koniec). Jedyny koniec, na który wszyscy czekają."
    },
    {
      id: "w1-minute",
      en: "minute",
      pl: "minuta",
      say: "mynyt",
      pos: "rzeczownik",
      part: 3,
      emoji: "⏱️",
      ex: [
        { en: "Just a minute, please.", pl: "Chwileczkę, proszę." },
        { en: "The delivery is in thirty minutes.", pl: "Dostawa będzie za 30 minut." }
      ],
      phrases: [
        { en: "just a minute", pl: "chwileczkę" },
        { en: "in five minutes", pl: "za 5 minut" },
        { en: "last minute", pl: "w ostatniej chwili" }
      ],
      family: ["hour - godzina", "second - sekunda", "moment - chwila"],
      forms: "",
      note: "Mynyt to minuta. To samo słowo czytane majnut znaczy malutki, więc uważaj na wymowę.",
      mnemo: "MYNYT - szef mówi „just a minute”, a MIJA godzina."
    }
  ],
  sentences: [
    { use: "L1", en: "Today is Monday.", pl: "Dzisiaj jest poniedziałek.", alt: ["It is Monday today."] },
    { use: "L1", en: "The meeting is on Wednesday.", pl: "Spotkanie jest w środę.", alt: [] },
    { use: "L1", en: "Tomorrow is Thursday.", pl: "Jutro jest czwartek.", alt: ["It is Thursday tomorrow."] },
    { use: "L3", en: "It is half past nine.", pl: "Jest wpół do 10.", alt: ["It is nine thirty."] },
    { use: "L3", en: "The meeting is at ten o'clock.", pl: "Spotkanie jest o 10:00.", alt: ["The meeting is at ten."] },
    { use: "L3", en: "Thirteen people are in the office.", pl: "W biurze jest 13 osób.", alt: [] },
    { use: "L3", en: "Two hundred orders are ready.", pl: "Gotowych jest 200 zamówień.", alt: [] },
    { use: "L5", en: "Are you in the office tomorrow?", pl: "Jesteś jutro w biurze?", alt: ["Are you at the office tomorrow?"] },
    { use: "L5", en: "We are not in the office on Monday.", pl: "W poniedziałek nie jesteśmy w biurze.",
      alt: ["On Monday we are not in the office.", "We are not at the office on Monday.", "On Monday we are not at the office."] },
    { use: "L5", en: "The shop is open on the weekend.", pl: "Sklep jest otwarty w weekend.",
      alt: ["On the weekend the shop is open.", "The shop is open at the weekend.", "The store is open on the weekend.", "The store is open at the weekend.", "On the weekend the store is open."] },
    { use: "L5", en: "The delivery is in thirty minutes.", pl: "Dostawa będzie za 30 minut.",
      alt: ["The delivery is in 30 minutes.", "Delivery is in thirty minutes.", "Delivery is in 30 minutes.", "The delivery will be in thirty minutes.", "The delivery will be in 30 minutes."] },
    { use: "L5", en: "Is the sale this week or next week?", pl: "Wyprzedaż jest w tym tygodniu czy w przyszłym?",
      alt: ["Is the sale this week or next?"] }
  ],
  reading: {
    title: "Tydzień w sklepie internetowym",
    text: [
      { en: "Hi! I am Anna, and this is my online shop.", pl: "Cześć! Jestem Anna, a to mój sklep internetowy." },
      { en: "Today is Monday, and it is nine o'clock.", pl: "Dzisiaj jest poniedziałek, godzina 9:00." },
      { en: "The big sale is on Thursday at ten o'clock.", pl: "Wielka wyprzedaż jest w czwartek o 10:00." },
      { en: "The sale is only one hour long, so every minute is important.", pl: "Wyprzedaż trwa tylko godzinę, więc liczy się każda minuta." },
      { en: "On Friday, a thousand orders are ready!", pl: "W piątek gotowych jest 1000 zamówień!" },
      { en: "And the weekend? The weekend is for my family!", pl: "A weekend? Weekend jest dla mojej rodziny!" }
    ],
    questions: [
      { q: "What day is the big sale?", qpl: "W jaki dzień jest wielka wyprzedaż?", options: ["On Monday.", "On Thursday.", "On Friday."], answer: 1 },
      { q: "How long is the sale?", qpl: "Ile trwa wyprzedaż?", options: ["One hour.", "Thirty minutes.", "One week."], answer: 0 },
      { q: "Who is the weekend for?", qpl: "Dla kogo jest weekend?", options: ["For the shop.", "For the customers.", "For the family."], answer: 2 }
    ]
  },
  dialog: {
    intro: "Nowa koleżanka z zespołu pyta cię o termin spotkania.",
    turns: [
      { bot: "Hi! Is the meeting today?", botpl: "Cześć! Spotkanie jest dzisiaj?",
        options: ["No, it tomorrow.", "No, it is tomorrow.", "No, it are tomorrow."], answer: 1,
        hint: "No, it is..." },
      { bot: "OK. What time is the meeting?", botpl: "Dobra. O której jest spotkanie?",
        options: ["At ten o'clock.", "In ten o'clock.", "On ten o'clock."], answer: 0,
        hint: "At ten..." },
      { bot: "Sorry, what day is it today?", botpl: "Sorki, jaki dziś jest dzień?",
        options: ["It Wednesday.", "Is Wednesday.", "It's Wednesday."], answer: 2,
        hint: "It's..." },
      { bot: "Are you in the office tomorrow?", botpl: "Jesteś jutro w biurze?",
        options: ["Yes, I am.", "Yes, I'm.", "Yes, I is."], answer: 0,
        hint: "Yes, I..." },
      { bot: "Great! Is the meeting long?", botpl: "Super! Spotkanie jest długie?",
        options: ["No, it's thirty hours.", "No, it's thirty minutes.", "No, it is minutes thirty."], answer: 1,
        hint: "No, it's thirty..." },
      { bot: "Perfect. See you tomorrow at ten!", botpl: "Świetnie. Do zobaczenia jutro o 10!",
        options: ["Thank you, see you on tomorrow!", "Thank you, see you yesterday!", "Thank you, see you tomorrow!"], answer: 2,
        hint: "Thank you, see you..." }
    ]
  }
});
