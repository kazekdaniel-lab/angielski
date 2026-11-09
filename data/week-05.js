window.WEEKS = window.WEEKS || [];
window.WEEKS.push({
  week: 5,
  title: "Czasowniki codzienne",
  grammar: {
    title: "Present Simple (zdania twierdzące)",
    explain: [
      "Present Simple to czas, którym mówisz o tym, co robisz regularnie: codziennie, w każdy poniedziałek, zawsze. Na przykład: I work in an online shop - Pracuję w sklepie internetowym.",
      "Budowa jest prosta: osoba + czasownik w podstawowej formie. I work, you work, we work, they work. Nie wstawiasz am, is ani are: I work, nie I am work.",
      "Przy he, she, it (on, ona, ono) dodajesz do czasownika -s: he works, she sells, it starts. Po -sh, -ch, -s, -x oraz w go i do dodajesz -es: she finishes, he goes. Have zmienia się w has.",
      "Często dodajesz every day (codziennie), always (zawsze) albo usually (zwykle). Always i usually stoją przed czasownikiem: I always check the orders."
    ],
    table: [
      ["I / you / we / they", "work", "We work at home."],
      ["he / she / it", "works", "She works at home."],
      ["-sh, -ch, -s, -x, go, do", "+ es", "he finishes, she goes"],
      ["have", "has", "He has a laptop."]
    ],
    examples: [
      { en: "I work in an online shop.", pl: "Pracuję w sklepie internetowym." },
      { en: "Anna sells bags on Instagram.", pl: "Anna sprzedaje torebki na Instagramie." },
      { en: "The shop opens at 9 o'clock.", pl: "Sklep otwiera się o 9." }
    ],
    exercises: [
      { type: "choice", q: "She ___ in an online shop.", options: ["work", "works", "is work"], answer: 1,
        pl: "Ona pracuje w sklepie internetowym.", why: "Przy she dodajesz -s: works. Bez is przed czasownikiem." },
      { type: "gap", q: "I ___ (drink) coffee every morning.", answer: ["drink"],
        pl: "Codziennie rano piję kawę.", why: "Przy I czasownik zostaje bez zmian: drink." },
      { type: "choice", q: "We ___ our customers on Mondays.", options: ["call", "calls", "are call"], answer: 0,
        pl: "W poniedziałki dzwonimy do klientów.", why: "Przy we czasownik bez -s: call." },
      { type: "gap", q: "Tom ___ (finish) work at 5 o'clock.", answer: ["finishes"],
        pl: "Tom kończy pracę o 17.", why: "Tom to he, a finish kończy się na -sh, więc dodajesz -es: finishes." },
      { type: "choice", q: "Kate ___ to the office every day.", options: ["go", "gos", "goes"], answer: 2,
        pl: "Kate codziennie jeździ do biura.", why: "Go przy he/she/it dostaje -es: goes." },
      { type: "gap", q: "Mark ___ (have) a laptop at home.", answer: ["has"],
        pl: "Mark ma laptopa w domu.", why: "Have przy he/she/it zmienia się w has." },
      { type: "choice", q: "The campaign ___ on Monday.", options: ["start", "starts", "starting"], answer: 1,
        pl: "Kampania startuje w poniedziałek.", why: "The campaign to it, więc dodajesz -s: starts." },
      { type: "gap", q: "My father ___ (read) the news every day.", answer: ["reads"],
        pl: "Mój tata codziennie czyta wiadomości.", why: "My father to he, więc reads." },
      { type: "choice", q: "They ___ shoes online.", options: ["sell", "sells", "is sell"], answer: 0,
        pl: "Oni sprzedają buty przez internet.", why: "Przy they czasownik bez -s: sell." },
      { type: "gap", q: "Anna ___ (send) the orders on Fridays.", answer: ["sends"],
        pl: "Anna wysyła zamówienia w piątki.", why: "Anna to she, więc dodajesz -s: sends." }
    ]
  },
  words: [
    {
      id: "w5-work",
      en: "work",
      pl: "pracować; praca",
      say: "łerk",
      pos: "czasownik",
      part: 1,
      emoji: "💼",
      ex: [
        { en: "I work from home on Fridays.", pl: "W piątki pracuję z domu." },
        { en: "Kate works for an online shop.", pl: "Kate pracuje w sklepie internetowym." }
      ],
      phrases: [
        { en: "go to work", pl: "iść do pracy" },
        { en: "work from home", pl: "pracować z domu" },
        { en: "at work", pl: "w pracy" }
      ],
      family: ["worker - pracownik", "job - praca, posada", "homework - praca domowa"],
      forms: "he works",
      note: "Praca jako rzeczownik nie dostaje a: I go to work, nie I go to a work. Posada, etat to job.",
      mnemo: "ŁERK - tak stękasz w poniedziałek rano, kiedy trzeba iść do pracy."
    },
    {
      id: "w5-eat",
      en: "eat",
      pl: "jeść",
      say: "it",
      pos: "czasownik",
      part: 1,
      emoji: "🍽️",
      ex: [
        { en: "I eat breakfast at 7 o'clock.", pl: "Jem śniadanie o 7." },
        { en: "The team eats lunch in the office.", pl: "Zespół je lunch w biurze." }
      ],
      phrases: [
        { en: "eat breakfast", pl: "jeść śniadanie" },
        { en: "eat lunch", pl: "jeść lunch" },
        { en: "eat out", pl: "jeść na mieście" }
      ],
      family: ["food - jedzenie", "meal - posiłek", "drink - pić"],
      forms: "he eats; ate (przeszły)",
      note: "Przy posiłkach Amerykanie często mówią have zamiast eat: I have breakfast at 7. Obie wersje są poprawne.",
      mnemo: "IT - informatyk z działu IT ciągle coś JE przy biurku."
    },
    {
      id: "w5-drink",
      en: "drink",
      pl: "pić; napój",
      say: "drynk",
      pos: "czasownik",
      part: 1,
      emoji: "🥤",
      ex: [
        { en: "My father drinks tea with milk.", pl: "Mój tata pije herbatę z mlekiem." },
        { en: "Our customers buy cold drinks in summer.", pl: "Latem nasi klienci kupują zimne napoje." }
      ],
      phrases: [
        { en: "drink coffee", pl: "pić kawę" },
        { en: "a cold drink", pl: "zimny napój" },
        { en: "soft drink", pl: "napój bezalkoholowy" }
      ],
      family: ["water - woda", "coffee - kawa", "bottle - butelka"],
      forms: "he drinks; drank (przeszły)",
      note: "Polskie napić się kawy to have a coffee, nie take a coffee. Drink to też rzeczownik: a drink - napój.",
      mnemo: "DRYNK - stara DRYNDA szefa pije 12 litrów na 100."
    },
    {
      id: "w5-sleep",
      en: "sleep",
      pl: "spać",
      say: "slip",
      pos: "czasownik",
      part: 1,
      emoji: "😴",
      ex: [
        { en: "I sleep 7 hours every night.", pl: "Co noc śpię 7 godzin." },
        { en: "Our online shop never sleeps.", pl: "Nasz sklep internetowy nigdy nie śpi." }
      ],
      phrases: [
        { en: "sleep well", pl: "dobrze spać" },
        { en: "go to sleep", pl: "iść spać" },
        { en: "sleep late", pl: "spać do późna" }
      ],
      family: ["sleepy - śpiący", "bed - łóżko", "night - noc"],
      forms: "he sleeps; slept (przeszły)",
      note: "W sleep i jest długie [slip]. Krótkie i daje slip [slyp] - poślizgnąć się.",
      mnemo: "SLIP - śpisz w samych SLIPACH."
    },
    {
      id: "w5-go",
      en: "go",
      pl: "iść; jechać",
      say: "gou",
      pos: "czasownik",
      part: 1,
      emoji: "🚶",
      ex: [
        { en: "I go to work by bus.", pl: "Do pracy jeżdżę autobusem." },
        { en: "The campaign goes live on Monday.", pl: "Kampania rusza w poniedziałek." }
      ],
      phrases: [
        { en: "go to work", pl: "iść do pracy" },
        { en: "go home", pl: "iść do domu" },
        { en: "go shopping", pl: "iść na zakupy" }
      ],
      family: ["come - przychodzić", "walk - iść pieszo", "drive - jechać autem"],
      forms: "he goes; went (przeszły)",
      note: "Go to i iść, i jechać. Do domu to go home, bez to: nie go to home.",
      mnemo: "GOU - GOOOL! Piłka IDZIE prosto do siatki."
    },
    {
      id: "w5-read",
      en: "read",
      pl: "czytać",
      say: "rid",
      pos: "czasownik",
      part: 1,
      emoji: "📖",
      ex: [
        { en: "My mother reads a book every evening.", pl: "Mama co wieczór czyta książkę." },
        { en: "I read customer reviews every morning.", pl: "Co rano czytam opinie klientów." }
      ],
      phrases: [
        { en: "read a book", pl: "czytać książkę" },
        { en: "read the news", pl: "czytać wiadomości" },
        { en: "read an email", pl: "przeczytać maila" }
      ],
      family: ["reader - czytelnik", "book - książka", "write - pisać"],
      forms: "he reads; read (przeszły, wymowa: red)",
      note: "Czas przeszły pisze się tak samo, ale brzmi inaczej: dziś [rid], wczoraj [red].",
      mnemo: "RID - czytasz atlas grzybów: RYDZ czy muchomor?"
    },
    {
      id: "w5-write",
      en: "write",
      pl: "pisać",
      say: "rajt",
      pos: "czasownik",
      part: 1,
      emoji: "✍️",
      ex: [
        { en: "I write in my notebook every day.", pl: "Codziennie piszę w notesie." },
        { en: "Kate writes posts for our Instagram.", pl: "Kate pisze posty na nasz Instagram." }
      ],
      phrases: [
        { en: "write an email", pl: "napisać maila" },
        { en: "write a post", pl: "napisać post" },
        { en: "write down", pl: "zapisać" }
      ],
      family: ["writer - pisarz", "read - czytać", "pen - długopis"],
      forms: "he writes; wrote (przeszły)",
      note: "W na początku jest nieme. Write brzmi tak samo jak right (dobrze, prawy): [rajt].",
      mnemo: "RAJT - piszesz o wakacjach w RAJU, a siedzisz w biurze."
    },
    {
      id: "w5-buy",
      en: "buy",
      pl: "kupować",
      say: "baj",
      pos: "czasownik",
      part: 2,
      emoji: "🛒",
      ex: [
        { en: "I buy bread and milk every day.", pl: "Codziennie kupuję chleb i mleko." },
        { en: "Customers buy more on Black Friday.", pl: "W Black Friday klienci kupują więcej." }
      ],
      phrases: [
        { en: "buy online", pl: "kupować przez internet" },
        { en: "buy now", pl: "kup teraz" },
        { en: "buy a ticket", pl: "kupić bilet" }
      ],
      family: ["buyer - kupujący", "sell - sprzedawać", "shop - sklep"],
      forms: "he buys; bought (przeszły)",
      note: "Buy brzmi jak bye (pa!). W he buys y zostaje, bo przed nim stoi samogłoska.",
      mnemo: "BAJ - kupujesz tyle, że portfel mówi ci BAJ BAJ (bye bye)."
    },
    {
      id: "w5-sell",
      en: "sell",
      pl: "sprzedawać",
      say: "sel",
      pos: "czasownik",
      part: 2,
      emoji: "🏷️",
      ex: [
        { en: "My brother sells cars.", pl: "Mój brat sprzedaje samochody." },
        { en: "We sell coffee and tea online.", pl: "Sprzedajemy kawę i herbatę przez internet." }
      ],
      phrases: [
        { en: "sell online", pl: "sprzedawać przez internet" },
        { en: "sell out", pl: "wyprzedać się" },
        { en: "best seller", pl: "hit sprzedaży" }
      ],
      family: ["seller - sprzedawca", "sale - sprzedaż; wyprzedaż", "buy - kupować"],
      forms: "he sells; sold (przeszły)",
      note: "Sell i cell (komórka) brzmią tak samo. Sprzedawca w sklepie internetowym to seller.",
      mnemo: "SEL - babcia SPRZEDAJE SELER na targu, a ty perfumy w sieci."
    },
    {
      id: "w5-open",
      en: "open",
      pl: "otwierać; otwarty",
      say: "oupen",
      pos: "czasownik",
      part: 2,
      emoji: "🔓",
      ex: [
        { en: "I open the window every morning.", pl: "Co rano otwieram okno." },
        { en: "Many customers open our newsletter on Mondays.", pl: "Dużo klientów otwiera nasz newsletter w poniedziałki." }
      ],
      phrases: [
        { en: "open the door", pl: "otworzyć drzwi" },
        { en: "open an email", pl: "otworzyć maila" },
        { en: "open 24/7", pl: "czynne całą dobę" }
      ],
      family: ["close - zamykać", "closed - zamknięty", "opening hours - godziny otwarcia"],
      forms: "he opens",
      note: "Open to też przymiotnik: The shop is open - Sklep jest czynny. Nie mów The shop is opened.",
      mnemo: "OUPEN - OPENEREM otwierasz butelkę po pracy."
    },
    {
      id: "w5-start",
      en: "start",
      pl: "zaczynać",
      say: "start",
      pos: "czasownik",
      part: 2,
      emoji: "🚀",
      ex: [
        { en: "I start work at 8 o'clock.", pl: "Zaczynam pracę o 8." },
        { en: "Black Friday starts at midnight.", pl: "Black Friday zaczyna się o północy." }
      ],
      phrases: [
        { en: "start work", pl: "zaczynać pracę" },
        { en: "start a business", pl: "założyć firmę" },
        { en: "from the start", pl: "od początku" }
      ],
      family: ["begin - zaczynać", "finish - kończyć", "startup - startup, młoda firma"],
      forms: "he starts",
      note: "Przy godzinie zawsze at: I start at 9, nie I start on 9. Założyć firmę to po prostu start a business.",
      mnemo: "START - jak START rakiety: 3, 2, 1, zaczynamy!"
    },
    {
      id: "w5-finish",
      en: "finish",
      pl: "kończyć",
      say: "fynysz",
      pos: "czasownik",
      part: 2,
      emoji: "🏁",
      ex: [
        { en: "Kate finishes work at 4 o'clock.", pl: "Kate kończy pracę o 16." },
        { en: "The promotion finishes on Sunday.", pl: "Promocja kończy się w niedzielę." }
      ],
      phrases: [
        { en: "finish work", pl: "kończyć pracę" },
        { en: "finish a project", pl: "skończyć projekt" },
        { en: "finish line", pl: "meta" }
      ],
      family: ["end - koniec", "start - zaczynać", "finished - skończony"],
      forms: "he finishes",
      note: "Przy he/she/it piszesz finishes, z -es, bo słowo kończy się na -sh. Wymawiasz [fynyszyz].",
      mnemo: "FYNYSZ - FINISZ maratonu: kończysz i padasz na trawę."
    },
    {
      id: "w5-send",
      en: "send",
      pl: "wysyłać",
      say: "send",
      pos: "czasownik",
      part: 2,
      emoji: "📤",
      ex: [
        { en: "My mother sends me photos every day.", pl: "Mama codziennie wysyła mi zdjęcia." },
        { en: "We send all orders the same day.", pl: "Wszystkie zamówienia wysyłamy tego samego dnia." }
      ],
      phrases: [
        { en: "send an email", pl: "wysłać maila" },
        { en: "send a message", pl: "wysłać wiadomość" },
        { en: "send a parcel", pl: "wysłać paczkę" }
      ],
      family: ["sender - nadawca", "receive - dostawać, odbierać", "shipping - wysyłka"],
      forms: "he sends; sent (przeszły)",
      note: "Możesz powiedzieć send Anna an email albo send an email to Anna. Gdy osoba stoi zaraz po send, nie dajesz to.",
      mnemo: "SEND - SĘDZIA WYSYŁA piłkarza do szatni."
    },
    {
      id: "w5-check",
      en: "check",
      pl: "sprawdzać",
      say: "czek",
      pos: "czasownik",
      part: 3,
      emoji: "✅",
      ex: [
        { en: "I check my phone every morning.", pl: "Co rano sprawdzam telefon." },
        { en: "Anna checks the orders at 9 o'clock.", pl: "Anna sprawdza zamówienia o 9." }
      ],
      phrases: [
        { en: "check email", pl: "sprawdzić pocztę" },
        { en: "check in", pl: "zameldować się, odprawić się" },
        { en: "double-check", pl: "sprawdzić dwa razy" }
      ],
      family: ["checklist - lista kontrolna", "checkout - kasa, finalizacja zakupu", "check-in - odprawa, zameldowanie"],
      forms: "he checks",
      note: "W USA check to też rachunek w restauracji i czek. Checkout w sklepie internetowym to ostatni krok zakupu.",
      mnemo: "CZEK - sprawdzasz, czy CZEK od szefa ma dość zer."
    },
    {
      id: "w5-call",
      en: "call",
      pl: "dzwonić; rozmowa telefoniczna",
      say: "kol",
      pos: "czasownik",
      part: 3,
      emoji: "📞",
      ex: [
        { en: "I call my mother on Sundays.", pl: "W niedziele dzwonię do mamy." },
        { en: "Tom calls our customers every afternoon.", pl: "Tom codziennie po południu dzwoni do naszych klientów." }
      ],
      phrases: [
        { en: "call a customer", pl: "zadzwonić do klienta" },
        { en: "call back", pl: "oddzwonić" },
        { en: "a video call", pl: "rozmowa wideo" }
      ],
      family: ["phone - telefon", "caller - dzwoniący", "call center - infolinia"],
      forms: "he calls",
      note: "Dzwonisz do kogoś bez to: call Tom, nie call to Tom.",
      mnemo: "KOL - dzwonisz do KOLegi już KOLejny raz dziś."
    }
  ],
  sentences: [
    { use: "L1", en: "I work from home.", pl: "Pracuję z domu.", alt: [] },
    { use: "L1", en: "She drinks tea every day.", pl: "Ona codziennie pije herbatę.", alt: [] },
    { use: "L1", en: "We eat lunch at work.", pl: "Jemy lunch w pracy.", alt: [] },
    { use: "L3", en: "Anna sells shoes on Instagram.", pl: "Anna sprzedaje buty na Instagramie.", alt: [] },
    { use: "L3", en: "My boss starts work at 8 o'clock.", pl: "Mój szef zaczyna pracę o 8.", alt: [] },
    { use: "L3", en: "Our customers buy coffee online.", pl: "Nasi klienci kupują kawę przez internet.", alt: [] },
    { use: "L3", en: "Tom finishes work at 6 o'clock.", pl: "Tom kończy pracę o 18.", alt: [] },
    { use: "L5", en: "Kate checks the orders every morning.", pl: "Kate co rano sprawdza zamówienia.",
      alt: ["Every morning Kate checks the orders.", "Kate checks orders every morning.", "Every morning Kate checks orders."] },
    { use: "L5", en: "I call customers on Mondays.", pl: "W poniedziałki dzwonię do klientów.",
      alt: ["On Mondays I call customers.", "I call customers on Monday.", "I call the customers on Mondays.", "I call my customers on Mondays."] },
    { use: "L5", en: "My sister goes to work by bus.", pl: "Moja siostra jeździ do pracy autobusem.",
      alt: ["My sister goes to work on the bus."] },
    { use: "L5", en: "My father reads the news at breakfast.", pl: "Tata czyta wiadomości przy śniadaniu.",
      alt: ["My dad reads the news at breakfast.", "Dad reads the news at breakfast.", "My father reads the news during breakfast."] },
    { use: "L5", en: "Anna writes posts for our shop.", pl: "Anna pisze posty dla naszego sklepu.",
      alt: ["Anna writes posts for our store.", "Anna writes the posts for our shop."] }
  ],
  reading: {
    title: "Dzień Anny",
    text: [
      { en: "Anna sells coffee online.", pl: "Anna sprzedaje kawę przez internet." },
      { en: "She starts work at 8 o'clock.", pl: "Pracę zaczyna o 8." },
      { en: "First, she drinks a coffee and checks her phone.", pl: "Najpierw pije kawę i sprawdza telefon." },
      { en: "Then she calls her customers.", pl: "Potem dzwoni do klientów." },
      { en: "At half past twelve, she eats lunch with her team.", pl: "O 12:30 je lunch ze swoim zespołem." },
      { en: "In the afternoon, she sends boxes with coffee.", pl: "Po południu wysyła paczki z kawą." },
      { en: "She finishes work at 4 o'clock and goes home.", pl: "Kończy pracę o 16 i wraca do domu." }
    ],
    questions: [
      { q: "What is in Anna's boxes?", qpl: "Co jest w paczkach Anny?",
        options: ["Coffee.", "Tea.", "Bread."], answer: 0 },
      { q: "Who is with Anna at lunch?", qpl: "Kto jest z Anną na lunchu?",
        options: ["Her mother.", "Her team.", "Her customers."], answer: 1 },
      { q: "Is Anna at work at 5 o'clock?", qpl: "Czy Anna jest w pracy o 17?",
        options: ["Yes, she is.", "Yes, she is at lunch.", "No, she is at home."], answer: 2 }
    ]
  },
  dialog: {
    intro: "Kate, nowa osoba w zespole, pyta cię przy kawie, jak wygląda twój dzień w pracy.",
    turns: [
      { bot: "Hi, I'm Kate! What is your job here?", botpl: "Cześć, jestem Kate! Czym się tu zajmujesz?",
        options: ["I work in customer service.", "I works in customer service.", "I am work in customer service."], answer: 0,
        hint: "I work in..." },
      { bot: "Nice! And your morning?", botpl: "Fajnie! A jak wygląda twój poranek?",
        options: ["I am check the orders first.", "First, I check the orders.", "First, I checks the orders."], answer: 1,
        hint: "First, I check..." },
      { bot: "Is Anna your boss?", botpl: "Anna jest twoją szefową?",
        options: ["Yes, she is. She helps me a lot.", "Yes, she does. She helps me a lot.", "Yes, she is. She help me a lot."], answer: 0,
        hint: "Yes, she is. She helps..." },
      { bot: "What about lunch?", botpl: "A co z lunchem?",
        options: ["I eat sandwich at my desk.", "I eats a sandwich at my desk.", "I eat a sandwich at my desk."], answer: 2,
        hint: "I eat a sandwich..." },
      { bot: "Who calls the customers here?", botpl: "A kto tu dzwoni do klientów?",
        options: ["Tom call them every day.", "Tom calls them every day.", "Tom calls to them every day."], answer: 1,
        hint: "Tom calls them..." },
      { bot: "Your day is long! And in the evening?", botpl: "Masz długi dzień! A wieczorem?",
        options: ["I go to home and read a book.", "I go home and read a book.", "I goes home and read a book."], answer: 1,
        hint: "I go home..." }
    ]
  }
});
