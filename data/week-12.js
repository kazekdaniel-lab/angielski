window.WEEKS = window.WEEKS || [];
window.WEEKS.push({
  week: 12,
  title: "Plany i przyszłość",
  grammar: {
    title: "going to + powtórka całości",
    explain: [
      "Going to służy do mówienia o planach i zamiarach, czyli o tym, co już postanowiłeś zrobić: I'm going to launch a new shop. = Zamierzam otworzyć nowy sklep.",
      "Budowa: am / is / are + going to + zwykły czasownik. She is going to call you. They are going to grow. Po going to czasownik nie dostaje ani -s, ani -ed.",
      "Przeczenie: dodaj not: I'm not going to travel. Pytanie: am / is / are idzie na początek: Are you going to visit the office? Yes, I am. / No, I'm not.",
      "Powtórka: znasz już teraźniejszość (I work, I'm working now), przeszłość (I was, I worked, I went) i plany (I'm going to work). Zanim odpowiesz, zapytaj się w głowie: to się dzieje zwykle, teraz, wczoraj czy w przyszłości?"
    ],
    table: [
      ["I", "am going to", "I'm going to call"],
      ["he / she / it", "is going to", "she's going to call"],
      ["you / we / they", "are going to", "we're going to call"],
      ["przeczenie", "am / is / are + not", "I'm not going to call"],
      ["pytanie", "Are you going to...?", "Yes, I am. / No, I'm not."]
    ],
    examples: [
      { en: "We're going to launch a new website next month.", pl: "W przyszłym miesiącu uruchamiamy nową stronę." },
      { en: "I'm not going to work tonight.", pl: "Dziś wieczorem nie zamierzam pracować." },
      { en: "Are you going to visit the customer? Yes, I am.", pl: "Odwiedzisz tego klienta? Tak." }
    ],
    exercises: [
      { type: "choice", q: "I ___ going to call the customer tomorrow.", options: ["am", "is", "are"], answer: 0,
        pl: "Jutro zadzwonię do klienta.", why: "Przy I zawsze am: I am going to." },
      { type: "gap", q: "We're going ___ launch the shop in May.", answer: ["to"],
        pl: "W maju uruchamiamy sklep.", why: "Po going zawsze jest to, a potem zwykły czasownik." },
      { type: "choice", q: "She is going to ___ a podcast.", options: ["started", "start", "starts"], answer: 1,
        pl: "Ona zamierza założyć podcast.", why: "Po going to zwykła forma czasownika, bez -ed i bez -s." },
      { type: "gap", q: "They ___ going to travel this year. They're going to stay at home.", answer: ["aren't", "are not", "'re not"],
        pl: "W tym roku nie wyjeżdżają. Zostają w domu.", why: "Przeczenie: are + not, w skrócie aren't." },
      { type: "choice", q: "___ you going to decide today?", options: ["Do", "Are", "Is"], answer: 1,
        pl: "Podejmiesz dziś decyzję?", why: "Pytanie z going to: Are + you + going to + czasownik." },
      { type: "gap", q: "Mark ___ going to grow his team next year.", answer: ["is", "'s"],
        pl: "Mark zamierza w przyszłym roku powiększyć zespół.", why: "Mark to on (he), więc is." },
      { type: "choice", q: "Yesterday we ___ the new product.", options: ["launch", "launched", "are going to launch"], answer: 1,
        pl: "Wczoraj wprowadziliśmy na rynek nowy produkt.", why: "Yesterday to przeszłość, a launch jest regularny: launched." },
      { type: "gap", q: "Look! Anna ___ (write) an email now.", answer: ["is writing", "'s writing"],
        pl: "Zobacz! Anna właśnie pisze maila.", why: "Now oznacza, że to dzieje się w tej chwili: is + czasownik z -ing." },
      { type: "choice", q: "Last year our shop ___ very small.", options: ["is", "were", "was"], answer: 2,
        pl: "W zeszłym roku nasz sklep był bardzo mały.", why: "Last year to przeszłość, a shop to jedna rzecz, więc was." },
      { type: "gap", q: "Last year our business ___ (grow) a lot.", answer: ["grew"],
        pl: "W zeszłym roku nasz biznes bardzo urósł.", why: "Grow jest nieregularne: przeszła forma to grew." }
    ]
  },
  words: [
    {
      id: "w12-plan",
      en: "plan",
      pl: "plan; planować",
      say: "plen",
      pos: "rzeczownik",
      part: 1,
      emoji: "📋",
      ex: [
        { en: "What's your plan for today?", pl: "Jaki masz plan na dziś?" },
        { en: "We need a marketing plan for May.", pl: "Potrzebujemy planu marketingowego na maj." }
      ],
      phrases: [
        { en: "make a plan", pl: "zrobić plan" },
        { en: "business plan", pl: "biznesplan" },
        { en: "plan B", pl: "plan awaryjny" }
      ],
      family: ["planner - kalendarz; planer", "schedule - harmonogram", "goal - cel"],
      forms: "planned (przeszły, podwójne n); he plans",
      note: "Plan to też czasownik: planować. W przeszłości podwajamy n: planned, nie planed.",
      mnemo: "PLEN - mówisz PLAN z szerokim uśmiechem: PLEEEN, wszystko ogarnięte."
    },
    {
      id: "w12-future",
      en: "future",
      pl: "przyszłość",
      say: "fjuczer",
      pos: "rzeczownik",
      part: 1,
      emoji: "🔮",
      ex: [
        { en: "I often think about the future.", pl: "Często myślę o przyszłości." },
        { en: "E-commerce is the future of shopping.", pl: "E-commerce to przyszłość zakupów." }
      ],
      phrases: [
        { en: "in the future", pl: "w przyszłości" },
        { en: "the near future", pl: "najbliższa przyszłość" },
        { en: "future plans", pl: "plany na przyszłość" }
      ],
      family: ["past - przeszłość", "present - teraźniejszość", "tomorrow - jutro"],
      forms: "",
      note: "W przyszłości to IN THE future, z the. Polacy często gubią to the.",
      mnemo: "FJUCZER - FIU! Przyszłość przychodzi szybciej, niż myślisz."
    },
    {
      id: "w12-next",
      en: "next",
      pl: "następny; przyszły",
      say: "nekst",
      pos: "przymiotnik",
      part: 1,
      emoji: "⏭️",
      ex: [
        { en: "See you next week!", pl: "Do zobaczenia w przyszłym tygodniu!" },
        { en: "Our next campaign is in June.", pl: "Nasza kolejna kampania rusza w czerwcu." }
      ],
      phrases: [
        { en: "next week", pl: "w przyszłym tygodniu" },
        { en: "next time", pl: "następnym razem" },
        { en: "the next day", pl: "następnego dnia" }
      ],
      family: ["last - ostatni; zeszły", "first - pierwszy", "following - kolejny"],
      forms: "",
      note: "Przed next week, next year nie dajemy in ani on: next Monday, nie on next Monday.",
      mnemo: "NEKST - w angielskiej przychodni lekarz woła NEKST zamiast NASTĘPNY."
    },
    {
      id: "w12-soon",
      en: "soon",
      pl: "wkrótce; niedługo",
      say: "sun",
      pos: "przysłówek",
      part: 1,
      emoji: "⏳",
      ex: [
        { en: "My birthday is soon.", pl: "Niedługo mam urodziny." },
        { en: "The new collection is coming soon.", pl: "Nowa kolekcja już wkrótce." }
      ],
      phrases: [
        { en: "see you soon", pl: "do zobaczenia wkrótce" },
        { en: "coming soon", pl: "już wkrótce" },
        { en: "as soon as possible", pl: "jak najszybciej" }
      ],
      family: ["later - później", "now - teraz", "early - wcześnie"],
      forms: "",
      note: "Soon brzmi prawie jak sun (słońce), tylko z dłuższym u. Skrót ASAP to as soon as possible.",
      mnemo: "SUN - słońce (sun) wkrótce wyjdzie zza chmur."
    },
    {
      id: "w12-goal",
      en: "goal",
      pl: "cel",
      say: "goul",
      pos: "rzeczownik",
      part: 1,
      emoji: "🎯",
      ex: [
        { en: "My goal is to learn English.", pl: "Moim celem jest nauczyć się angielskiego." },
        { en: "Our goal is 1000 orders a month.", pl: "Naszym celem jest 1000 zamówień miesięcznie." }
      ],
      phrases: [
        { en: "set a goal", pl: "wyznaczyć cel" },
        { en: "reach a goal", pl: "osiągnąć cel" },
        { en: "sales goal", pl: "cel sprzedażowy" }
      ],
      family: ["target - cel; target", "aim - cel; zamiar", "success - sukces"],
      forms: "l.mn. goals",
      note: "Goal to też gol w piłce. Cel podróży to nie goal, tylko destination.",
      mnemo: "GOUL - cel osiągnięty, jakbyś strzelił GOLa w ostatniej minucie."
    },
    {
      id: "w12-dream",
      en: "dream",
      pl: "marzenie; sen; marzyć",
      say: "drim",
      pos: "rzeczownik",
      part: 1,
      emoji: "💭",
      ex: [
        { en: "My dream is a house by the sea.", pl: "Marzę o domu nad morzem." },
        { en: "Her dream is her own online shop.", pl: "Jej marzeniem jest własny sklep internetowy." }
      ],
      phrases: [
        { en: "dream job", pl: "wymarzona praca" },
        { en: "have a dream", pl: "mieć marzenie; mieć sen" },
        { en: "dream about", pl: "marzyć o" }
      ],
      family: ["sleep - spać", "wish - życzenie", "goal - cel"],
      forms: "dreamed albo dreamt (przeszły); he dreams",
      note: "Dream to i marzenie, i sen w nocy. Marzyć o czymś to dream ABOUT albo dream OF.",
      mnemo: "DRIM - w czasie DRZEMki masz najpiękniejsze sny."
    },
    {
      id: "w12-idea",
      en: "idea",
      pl: "pomysł",
      say: "ajdija",
      pos: "rzeczownik",
      part: 1,
      emoji: "💡",
      ex: [
        { en: "That's a very good idea!", pl: "To bardzo dobry pomysł!" },
        { en: "We need new ideas for our ads.", pl: "Potrzebujemy nowych pomysłów na reklamy." }
      ],
      phrases: [
        { en: "a good idea", pl: "dobry pomysł" },
        { en: "no idea", pl: "nie mam pojęcia" },
        { en: "business idea", pl: "pomysł na biznes" }
      ],
      family: ["plan - plan", "think - myśleć", "brainstorm - burza mózgów"],
      forms: "l.mn. ideas",
      note: "Idea to po polsku najczęściej pomysł, a nie idea. I have no idea. = Nie mam pojęcia.",
      mnemo: "AJDIJA - wpadasz na pomysł i krzyczysz: AJ, DIJAbelnie dobre!"
    },
    {
      id: "w12-tonight",
      en: "tonight",
      pl: "dziś wieczorem; dziś w nocy",
      say: "tunajt",
      pos: "przysłówek",
      part: 2,
      emoji: "🌙",
      ex: [
        { en: "What are you doing tonight?", pl: "Co robisz dziś wieczorem?" },
        { en: "The sale ends tonight at midnight.", pl: "Wyprzedaż kończy się dziś o północy." }
      ],
      phrases: [
        { en: "tonight at 8", pl: "dziś o 20" },
        { en: "see you tonight", pl: "do zobaczenia wieczorem" },
        { en: "not tonight", pl: "nie dziś" }
      ],
      family: ["today - dzisiaj", "tomorrow - jutro", "evening - wieczór", "night - noc"],
      forms: "",
      note: "Nie mów this night ani today evening. Dziś wieczorem to po prostu tonight.",
      mnemo: "TUNAJT - dziś wieczorem TU NAJlepsza impreza w mieście."
    },
    {
      id: "w12-later",
      en: "later",
      pl: "później",
      say: "lejter",
      pos: "przysłówek",
      part: 2,
      emoji: "🕒",
      ex: [
        { en: "Can you call me later?", pl: "Możesz zadzwonić do mnie później?" },
        { en: "I'm going to call the customer later.", pl: "Zadzwonię do klienta później." }
      ],
      phrases: [
        { en: "see you later", pl: "na razie; do zobaczenia" },
        { en: "later today", pl: "jeszcze dziś" },
        { en: "two days later", pl: "2 dni później" }
      ],
      family: ["soon - wkrótce", "late - późno", "after - po"],
      forms: "",
      note: "Nie myl later (później) z late (późno, spóźniony). I'm late. = Spóźniłem się.",
      mnemo: "LEJTER - LEJ TERaz wodę na herbatę, a pracę zrób później."
    },
    {
      id: "w12-year",
      en: "year",
      pl: "rok",
      say: "jir",
      pos: "rzeczownik",
      part: 2,
      emoji: "📆",
      ex: [
        { en: "Next year I'm going to travel a lot.", pl: "W przyszłym roku zamierzam dużo podróżować." },
        { en: "Our shop is two years old.", pl: "Nasz sklep ma 2 lata." }
      ],
      phrases: [
        { en: "next year", pl: "w przyszłym roku" },
        { en: "last year", pl: "w zeszłym roku" },
        { en: "every year", pl: "co roku" }
      ],
      family: ["month - miesiąc", "week - tydzień", "birthday - urodziny", "yearly - roczny"],
      forms: "l.mn. years",
      note: "Wiek podajemy z years old: I am 30 years old. Nie mówimy I have 30 years.",
      mnemo: "JIR - jak JEŻ: raz w roku budzi się z zimowego snu."
    },
    {
      id: "w12-month",
      en: "month",
      pl: "miesiąc",
      say: "manf",
      pos: "rzeczownik",
      part: 2,
      emoji: "🗓️",
      ex: [
        { en: "This month is very busy.", pl: "Ten miesiąc jest bardzo pracowity." },
        { en: "We get 200 orders a month.", pl: "Mamy 200 zamówień miesięcznie." }
      ],
      phrases: [
        { en: "next month", pl: "w przyszłym miesiącu" },
        { en: "a month", pl: "miesięcznie" },
        { en: "every month", pl: "co miesiąc" }
      ],
      family: ["year - rok", "week - tydzień", "monthly - miesięczny"],
      forms: "l.mn. months",
      note: "Na końcu jest th, czyli [f], a nie t: [manf]. Miesięcznie to a month albo per month.",
      mnemo: "MANF - na początku miesiąca MAM Forsę, pod koniec już nie."
    },
    {
      id: "w12-launch",
      en: "launch",
      pl: "wprowadzić na rynek; uruchomić; premiera",
      say: "loncz",
      pos: "czasownik",
      part: 2,
      emoji: "🚀",
      ex: [
        { en: "The launch is next week.", pl: "Premiera jest w przyszłym tygodniu." },
        { en: "We're going to launch the shop in May.", pl: "W maju uruchamiamy sklep." }
      ],
      phrases: [
        { en: "product launch", pl: "premiera produktu" },
        { en: "launch a website", pl: "uruchomić stronę" },
        { en: "launch date", pl: "data premiery" }
      ],
      family: ["start - zacząć", "release - wydać", "open - otworzyć"],
      forms: "launched (przeszły); he launches",
      note: "Launch to też rzeczownik: premiera. Nie myl z lunch (obiad): [loncz] i [lancz] to dwa różne słowa.",
      mnemo: "LONCZ - premierę robisz w porze LUNCHu, żeby przyszło więcej ludzi."
    },
    {
      id: "w12-grow",
      en: "grow",
      pl: "rosnąć; rozwijać",
      say: "grou",
      pos: "czasownik",
      part: 2,
      emoji: "📈",
      ex: [
        { en: "Children grow very fast.", pl: "Dzieci bardzo szybko rosną." },
        { en: "Our business grew a lot last year.", pl: "W zeszłym roku nasz biznes bardzo urósł." }
      ],
      phrases: [
        { en: "grow fast", pl: "szybko rosnąć" },
        { en: "grow a business", pl: "rozwijać firmę" },
        { en: "grow up", pl: "dorastać" }
      ],
      family: ["growth - wzrost", "develop - rozwijać", "big - duży"],
      forms: "grew (przeszły); he grows",
      note: "Grow jest nieregularne: grew. Działa w obie strony: The shop grows (rośnie) i We grow the shop (rozwijamy go).",
      mnemo: "GROU - rośniesz jak GROszek w ogródku."
    },
    {
      id: "w12-decide",
      en: "decide",
      pl: "zdecydować; postanowić",
      say: "dysajd",
      pos: "czasownik",
      part: 3,
      emoji: "🤔",
      ex: [
        { en: "I can't decide right now.", pl: "Nie mogę się teraz zdecydować." },
        { en: "We decided to sell abroad.", pl: "Postanowiliśmy sprzedawać za granicę." }
      ],
      phrases: [
        { en: "decide to", pl: "postanowić coś zrobić" },
        { en: "decide on", pl: "zdecydować się na" },
        { en: "hard to decide", pl: "trudno zdecydować" }
      ],
      family: ["decision - decyzja", "choose - wybrać", "plan - plan"],
      forms: "decided (przeszły); he decides",
      note: "Zdecydować się to po prostu decide, bez myself. Decyzję podejmujemy: make a decision, nie do a decision.",
      mnemo: "DYSAJD - decydujesz, po której stronie, czyli SAJD, stoisz."
    },
    {
      id: "w12-success",
      en: "success",
      pl: "sukces",
      say: "sakses",
      pos: "rzeczownik",
      part: 3,
      emoji: "🏆",
      ex: [
        { en: "Her first book was a success.", pl: "Jej pierwsza książka odniosła sukces." },
        { en: "Our new campaign was a big success.", pl: "Nasza nowa kampania okazała się wielkim sukcesem." }
      ],
      phrases: [
        { en: "a big success", pl: "wielki sukces" },
        { en: "success story", pl: "historia sukcesu" },
        { en: "the key to success", pl: "klucz do sukcesu" }
      ],
      family: ["successful - udany; skuteczny", "succeed - odnieść sukces", "fail - ponieść porażkę"],
      forms: "przymiotnik: successful",
      note: "Piszemy przez podwójne c i podwójne s. Odnieść sukces to succeed albo be successful, nie make success.",
      mnemo: "SAKSES - na twój sukces zawsze gra SAKSofon."
    }
  ],
  sentences: [
    { use: "L1", en: "That's a good idea.", pl: "To dobry pomysł.", alt: [] },
    { use: "L1", en: "See you soon.", pl: "Do zobaczenia wkrótce.", alt: [] },
    { use: "L1", en: "My dream is a big house.", pl: "Moim marzeniem jest duży dom.", alt: [] },
    { use: "L3", en: "I'm going to call you later.", pl: "Zadzwonię do ciebie później.", alt: [] },
    { use: "L3", en: "We're going to launch the app next month.", pl: "W przyszłym miesiącu uruchamiamy aplikację.", alt: ["Next month we're going to launch the app."] },
    { use: "L3", en: "She is going to work tonight.", pl: "Ona dziś wieczorem będzie pracować.", alt: ["Tonight she is going to work."] },
    { use: "L3", en: "Our team is going to grow this year.", pl: "W tym roku nasz zespół się powiększy.", alt: ["This year our team is going to grow."] },
    { use: "L5", en: "I'm going to open a shop next year.", pl: "W przyszłym roku zamierzam otworzyć sklep.", alt: ["Next year I'm going to open a shop.", "I'm going to open a store next year.", "Next year I'm going to open a store."] },
    { use: "L5", en: "We aren't going to work tonight.", pl: "Dziś wieczorem nie zamierzamy pracować.", alt: ["Tonight we aren't going to work."] },
    { use: "L5", en: "Are you going to decide today?", pl: "Czy zamierzasz dzisiaj podjąć decyzję?", alt: ["Are you going to make a decision today?"] },
    { use: "L5", en: "The launch was a big success.", pl: "Premiera była wielkim sukcesem.", alt: ["The launch was a great success.", "The launch was a huge success."] },
    { use: "L5", en: "What is your goal for this year?", pl: "Jaki masz cel na ten rok?", alt: [] }
  ],
  reading: {
    title: "Plany Kate",
    text: [
      { en: "Last year Kate opened a small online shop.", pl: "W zeszłym roku Kate otworzyła mały sklep internetowy." },
      { en: "The shop was a big success.", pl: "Sklep okazał się wielkim sukcesem." },
      { en: "Now she has 300 orders a month.", pl: "Teraz ma 300 zamówień miesięcznie." },
      { en: "This year she decided to grow her business.", pl: "W tym roku postanowiła rozwinąć swój biznes." },
      { en: "Next month she is going to launch a new website.", pl: "W przyszłym miesiącu uruchamia nową stronę." },
      { en: "She is also going to sell abroad.", pl: "Zamierza też sprzedawać za granicę." },
      { en: "Her dream is a shop in every big city in Europe.", pl: "Marzy o sklepie w każdym dużym mieście w Europie." }
    ],
    questions: [
      { q: "When did Kate open her shop?", qpl: "Kiedy Kate otworzyła sklep?", options: ["Last year.", "Last month.", "Next year."], answer: 0 },
      { q: "What is Kate going to do next month?", qpl: "Co Kate zrobi w przyszłym miesiącu?", options: ["Open a shop in Paris.", "Launch a new website.", "Visit her customers."], answer: 1 },
      { q: "How many orders does Kate have a month?", qpl: "Ile zamówień miesięcznie ma Kate?", options: ["30.", "100.", "300."], answer: 2 }
    ]
  },
  dialog: {
    intro: "Szefowa pyta cię o twoje plany marketingowe na przyszły rok.",
    turns: [
      { bot: "Hi! What are your plans for next year?", botpl: "Cześć! Jakie masz plany na przyszły rok?",
        options: ["I going to launch a podcast.", "I'm going to launch a podcast.", "I'm going launch a podcast."], answer: 1,
        hint: "I'm going to..." },
      { bot: "Good idea! When are you going to start?", botpl: "Dobry pomysł! Kiedy zamierzasz zacząć?",
        options: ["I'm going to start in March.", "I'm going to start on March.", "I'm going to started in March."], answer: 0,
        hint: "I'm going to start in..." },
      { bot: "Did you have a podcast before?", botpl: "Miałeś już kiedyś podcast?",
        options: ["Yes, I haved one last year.", "Yes, I did had one last year.", "Yes, I had one last year."], answer: 2,
        hint: "Yes, I had..." },
      { bot: "Was it a success?", botpl: "Odniósł sukces?",
        options: ["No, it were not very popular.", "Not really. It wasn't very popular.", "No, it didn't was popular."], answer: 1,
        hint: "Not really. It wasn't..." },
      { bot: "Can you work on it every week?", botpl: "Dasz radę pracować nad nim co tydzień?",
        options: ["Yes, I can work on it every Friday.", "Yes, I can to work on it every Friday.", "Yes, I can working on it every Friday."], answer: 0,
        hint: "Yes, I can..." },
      { bot: "And what is your goal?", botpl: "A jaki masz cel?",
        options: ["My goal are 1000 listeners a month.", "I have goal 1000 listeners in month.", "My goal is 1000 listeners a month."], answer: 2,
        hint: "My goal is..." }
    ]
  }
});
