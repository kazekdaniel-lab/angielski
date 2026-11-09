window.WEEKS = window.WEEKS || [];
window.WEEKS.push({
  week: 3,
  title: "Jedzenie i picie",
  grammar: {
    title: "a / an / the, liczba mnoga",
    explain: [
      "Po polsku nie ma przedimków, po angielsku stoją przed rzeczownikiem. A / an znaczy „jakiś, jeden”: a sandwich, an apple. An stawiamy przed samogłoską w wymowie: an egg, an hour (h jest nieme).",
      "The znaczy „ten konkretny”, gdy obie strony wiedzą, o co chodzi: Where is the menu? (menu w tej restauracji, w której siedzimy).",
      "Liczba mnoga: zwykle dodajesz -s (apple - apples). Po s, sh, ch, x dodajesz -es (sandwich - sandwiches). Kilka słów jest nieregularnych: child - children, person - people.",
      "Niektórych rzeczy nie liczymy: water, milk, bread, cheese. Nie mają a / an ani -s. Liczymy za to opakowania i porcje: a bottle of water, a glass of milk."
    ],
    table: [
      ["a", "przed spółgłoską", "a sandwich, a bottle"],
      ["an", "przed samogłoską", "an apple, an egg, an hour"],
      ["the", "ten konkretny", "the menu, the coffee"],
      ["+ s", "większość słów", "apples, bottles"],
      ["+ es", "po s, sh, ch, x", "sandwiches, boxes"],
      ["nieregularne", "inna forma", "child - children, person - people"],
      ["niepoliczalne", "bez a / an i bez -s", "water, milk, bread, cheese"]
    ],
    examples: [
      { en: "An apple and a sandwich, please.", pl: "Poproszę jabłko i kanapkę." },
      { en: "The sandwiches are on the table.", pl: "Kanapki są na stole." },
      { en: "Two coffees and a bottle of water, please.", pl: "Poproszę 2 kawy i butelkę wody." }
    ],
    exercises: [
      { type: "choice", q: "It's ___ egg.", options: ["a", "an"], answer: 1,
        pl: "To jajko.", why: "Egg zaczyna się od samogłoski, więc an." },
      { type: "gap", q: "One sandwich, two ___.", answer: ["sandwiches"],
        pl: "1 kanapka, 2 kanapki.", why: "Po ch dodajemy -es: sandwich - sandwiches." },
      { type: "choice", q: "Where is ___ menu?", options: ["the", "an"], answer: 0,
        pl: "Gdzie jest menu?", why: "Pytasz o menu w tej konkretnej restauracji, więc the. An nie pasuje, bo menu zaczyna się od spółgłoski." },
      { type: "gap", q: "One child, two ___.", answer: ["children"],
        pl: "1 dziecko, 2 dzieci.", why: "Child ma nieregularną liczbę mnogą: children." },
      { type: "choice", q: "The vegetables ___ fresh.", options: ["is", "are", "am"], answer: 1,
        pl: "Warzywa są świeże.", why: "Vegetables to liczba mnoga, więc are." },
      { type: "gap", q: "Lunch is a sandwich and ___ apple.", answer: ["an", "one"],
        pl: "Na lunch jest kanapka i jabłko.", why: "Apple zaczyna się od samogłoski, więc an." },
      { type: "gap", q: "Two ___ of water, please.", answer: ["bottles"],
        pl: "Poproszę 2 butelki wody.", why: "Butelki są 2, więc -s: bottles. Wody nie liczymy, liczymy butelki." },
      { type: "choice", q: "My sister is ___.", options: ["an manager", "manager", "a manager"], answer: 2,
        pl: "Moja siostra jest menedżerką.", why: "Przed zawodem zawsze a / an: a manager. Po polsku nic tam nie ma, po angielsku musi być." },
      { type: "choice", q: "Dinner is in ___ hour.", options: ["an", "a"], answer: 0,
        pl: "Kolacja będzie za godzinę.", why: "W hour h jest nieme, słowo zaczyna się od dźwięku a (ałer), więc an." },
      { type: "gap", q: "We are ___ online shop.", answer: ["an"],
        pl: "Jesteśmy sklepem internetowym.", why: "Online zaczyna się od samogłoski, więc an." }
    ]
  },
  words: [
    {
      id: "w3-water",
      en: "water",
      pl: "woda",
      say: "łoter",
      pos: "rzeczownik",
      part: 1,
      emoji: "💧",
      ex: [
        { en: "The water is very cold.", pl: "Woda jest bardzo zimna." },
        { en: "A bottle of water is free with every order.", pl: "Do każdego zamówienia butelka wody gratis." }
      ],
      phrases: [
        { en: "a bottle of water", pl: "butelka wody" },
        { en: "a glass of water", pl: "szklanka wody" },
        { en: "sparkling water", pl: "woda gazowana" }
      ],
      family: ["still water - woda niegazowana", "drink - napój", "juice - sok", "bottle - butelka"],
      forms: "niepoliczalne",
      note: "Water jest niepoliczalne: nie a water, tylko water albo a bottle of water. W USA t w środku brzmi prawie jak d: łoder.",
      mnemo: "ŁOTER - woda w ŁODZI to zły znak."
    },
    {
      id: "w3-coffee",
      en: "coffee",
      pl: "kawa",
      say: "kofi",
      pos: "rzeczownik",
      part: 1,
      emoji: "☕",
      ex: [
        { en: "The coffee is hot.", pl: "Kawa jest gorąca." },
        { en: "Coffee is free for our customers.", pl: "Kawa jest gratis dla naszych klientów." }
      ],
      phrases: [
        { en: "a cup of coffee", pl: "filiżanka kawy" },
        { en: "black coffee", pl: "czarna kawa" },
        { en: "coffee break", pl: "przerwa na kawę" }
      ],
      family: ["tea - herbata", "café - kawiarnia", "cup - filiżanka, kubek", "milk - mleko"],
      forms: "",
      note: "Kawa jako napój jest niepoliczalna (coffee is hot), ale w kawiarni zamawiamy porcje: two coffees, please.",
      mnemo: "KOFI - KOcham FIliżankę kawy o poranku."
    },
    {
      id: "w3-tea",
      en: "tea",
      pl: "herbata",
      say: "ti",
      pos: "rzeczownik",
      part: 1,
      emoji: "🍵",
      ex: [
        { en: "Tea with milk, please.", pl: "Herbatę z mlekiem, poproszę." },
        { en: "Green tea is our best product.", pl: "Zielona herbata to nasz najlepszy produkt." }
      ],
      phrases: [
        { en: "a cup of tea", pl: "filiżanka herbaty" },
        { en: "green tea", pl: "zielona herbata" },
        { en: "tea with lemon", pl: "herbata z cytryną" }
      ],
      family: ["teapot - dzbanek do herbaty", "teabag - torebka herbaty", "coffee - kawa"],
      forms: "",
      note: "Herbata z cytryną to tea with lemon. Brytyjczycy piją tea with milk, Polacy raczej z cytryną.",
      mnemo: "TI - kierowca TIRA jedzie na herbacie z termosu."
    },
    {
      id: "w3-bread",
      en: "bread",
      pl: "chleb",
      say: "bred",
      pos: "rzeczownik",
      part: 1,
      emoji: "🍞",
      ex: [
        { en: "The bread is fresh today.", pl: "Chleb jest dzisiaj świeży." },
        { en: "Fresh bread is our bestseller.", pl: "Świeży chleb to nasz bestseller." }
      ],
      phrases: [
        { en: "a slice of bread", pl: "kromka chleba" },
        { en: "bread and butter", pl: "chleb z masłem" },
        { en: "white bread", pl: "biały chleb" }
      ],
      family: ["bakery - piekarnia", "roll - bułka", "toast - tost", "sandwich - kanapka"],
      forms: "niepoliczalne",
      note: "Bread jest niepoliczalny: nie a bread, tylko bread albo a loaf of bread (bochenek). Bułka to roll.",
      mnemo: "BRED - że chleb tuczy? Co za BREDNIE!"
    },
    {
      id: "w3-apple",
      en: "apple",
      pl: "jabłko",
      say: "epel",
      pos: "rzeczownik",
      part: 1,
      emoji: "🍎",
      ex: [
        { en: "An apple is a good snack.", pl: "Jabłko to dobra przekąska." },
        { en: "The apples are from a Polish farm.", pl: "Jabłka są z polskiego sadu." }
      ],
      phrases: [
        { en: "an apple a day", pl: "jabłko dziennie" },
        { en: "apple juice", pl: "sok jabłkowy" },
        { en: "apple pie", pl: "szarlotka" }
      ],
      family: ["fruit - owoce", "pear - gruszka", "banana - banan", "orange - pomarańcza"],
      forms: "",
      note: "Apple zaczyna się od samogłoski, więc an apple, nie a apple.",
      mnemo: "EPEL - jak firma Apple: najdroższe jabłko świata."
    },
    {
      id: "w3-egg",
      en: "egg",
      pl: "jajko",
      say: "eg",
      pos: "rzeczownik",
      part: 1,
      emoji: "🥚",
      ex: [
        { en: "Two eggs and bread, please.", pl: "Poproszę 2 jajka i chleb." },
        { en: "The eggs are from happy hens.", pl: "Jajka są od szczęśliwych kur." }
      ],
      phrases: [
        { en: "a boiled egg", pl: "jajko gotowane" },
        { en: "scrambled eggs", pl: "jajecznica" },
        { en: "a fried egg", pl: "jajko sadzone" }
      ],
      family: ["chicken - kurczak, kura", "yolk - żółtko", "omelette - omlet", "Easter egg - pisanka"],
      forms: "",
      note: "Egg zaczyna się od samogłoski: an egg. Jajecznica to scrambled eggs, zawsze w liczbie mnogiej.",
      mnemo: "EG - jajko przed EGZAMINEM, na mądrość."
    },
    {
      id: "w3-milk",
      en: "milk",
      pl: "mleko",
      say: "mylk",
      pos: "rzeczownik",
      part: 1,
      emoji: "🥛",
      ex: [
        { en: "The milk is in the fridge.", pl: "Mleko jest w lodówce." },
        { en: "Oat milk is popular with our customers.", pl: "Mleko owsiane jest popularne wśród naszych klientów." }
      ],
      phrases: [
        { en: "a glass of milk", pl: "szklanka mleka" },
        { en: "coffee with milk", pl: "kawa z mlekiem" },
        { en: "oat milk", pl: "mleko owsiane" }
      ],
      family: ["cheese - ser", "butter - masło", "yogurt - jogurt", "dairy - nabiał"],
      forms: "niepoliczalne",
      note: "Milk jest niepoliczalne: a glass of milk, nie a milk. I jest krótkie, jak y: mylk.",
      mnemo: "MYLK - kot MILKNIE, gdy dostanie mleko."
    },
    {
      id: "w3-breakfast",
      en: "breakfast",
      pl: "śniadanie",
      say: "brekfest",
      pos: "rzeczownik",
      part: 2,
      emoji: "🍳",
      ex: [
        { en: "Breakfast is ready, Tom!", pl: "Śniadanie gotowe, Tom!" },
        { en: "Breakfast meetings are popular in Warsaw.", pl: "Spotkania przy śniadaniu są popularne w Warszawie." }
      ],
      phrases: [
        { en: "for breakfast", pl: "na śniadanie" },
        { en: "a big breakfast", pl: "duże śniadanie" },
        { en: "breakfast meeting", pl: "spotkanie przy śniadaniu" }
      ],
      family: ["lunch - lunch", "dinner - kolacja", "brunch - późne śniadanie"],
      forms: "",
      note: "Przed nazwą posiłku zwykle nie ma a ani the: Breakfast is at eight. Nie: The breakfast is at eight.",
      mnemo: "BREKFEST - BRAK śniadania to żaden FEST."
    },
    {
      id: "w3-lunch",
      en: "lunch",
      pl: "lunch, obiad w ciągu dnia",
      say: "lancz",
      pos: "rzeczownik",
      part: 2,
      emoji: "🥗",
      ex: [
        { en: "Lunch is at one o'clock.", pl: "Lunch jest o 13:00." },
        { en: "Lunch with a new client is on Friday.", pl: "Lunch z nowym klientem jest w piątek." }
      ],
      phrases: [
        { en: "for lunch", pl: "na lunch" },
        { en: "lunch break", pl: "przerwa na lunch" },
        { en: "business lunch", pl: "lunch biznesowy" }
      ],
      family: ["breakfast - śniadanie", "dinner - kolacja", "lunchbox - pudełko na lunch"],
      forms: "",
      note: "Lunch to posiłek w środku dnia, często w pracy. Wymawiamy lancz, nie lunch przez u.",
      mnemo: "LANCZ - zdjęcie lunchu na Instagramie to czysty LANS."
    },
    {
      id: "w3-dinner",
      en: "dinner",
      pl: "kolacja; obiad (główny posiłek)",
      say: "dyner",
      pos: "rzeczownik",
      part: 2,
      emoji: "🍝",
      ex: [
        { en: "Dinner is at seven tonight.", pl: "Kolacja jest dziś o 19:00." },
        { en: "The client dinner is on Thursday.", pl: "Kolacja z klientem jest w czwartek." }
      ],
      phrases: [
        { en: "for dinner", pl: "na kolację" },
        { en: "dinner party", pl: "kolacja ze znajomymi" },
        { en: "business dinner", pl: "kolacja biznesowa" }
      ],
      family: ["lunch - lunch", "supper - lekka kolacja", "dining room - jadalnia"],
      forms: "",
      note: "Dinner to główny posiłek dnia, zwykle wieczorem. Dlatego po polsku to czasem obiad, a czasem kolacja.",
      mnemo: "DYNER - na kolację zupa z DYNI, pycha."
    },
    {
      id: "w3-sandwich",
      en: "sandwich",
      pl: "kanapka",
      say: "senłycz",
      pos: "rzeczownik",
      part: 2,
      emoji: "🥪",
      ex: [
        { en: "The sandwich is with cheese.", pl: "Kanapka jest z serem." },
        { en: "The sandwiches for the event are ready.", pl: "Kanapki na event są gotowe." }
      ],
      phrases: [
        { en: "a cheese sandwich", pl: "kanapka z serem" },
        { en: "a ham sandwich", pl: "kanapka z szynką" },
        { en: "sandwich bar", pl: "bar z kanapkami" }
      ],
      family: ["bread - chleb", "toast - tost", "burger - burger", "wrap - wrap, tortilla"],
      forms: "l.mn. sandwiches",
      note: "Liczba mnoga z -es: sandwiches. D w środku zwykle znika: senłycz.",
      mnemo: "SENŁYCZ - po dużej kanapce przychodzi SEN."
    },
    {
      id: "w3-cheese",
      en: "cheese",
      pl: "ser",
      say: "cziz",
      pos: "rzeczownik",
      part: 2,
      emoji: "🧀",
      ex: [
        { en: "The cheese is from France.", pl: "Ser jest z Francji." },
        { en: "Say cheese! The photo is for Instagram.", pl: "Uśmiech! Zdjęcie idzie na Instagram." }
      ],
      phrases: [
        { en: "a slice of cheese", pl: "plasterek sera" },
        { en: "a cheese sandwich", pl: "kanapka z serem" },
        { en: "say cheese", pl: "uśmiech (do zdjęcia)" }
      ],
      family: ["cheesecake - sernik", "milk - mleko", "butter - masło", "pizza - pizza"],
      forms: "niepoliczalne",
      note: "Cheese jest zwykle niepoliczalny: cheese, a slice of cheese. Przy zdjęciu mówimy Say cheese!, żeby wszyscy się uśmiechnęli.",
      mnemo: "CZIZ - mówisz CZIZ do zdjęcia i od razu masz uśmiech."
    },
    {
      id: "w3-vegetables",
      en: "vegetables",
      pl: "warzywa",
      say: "wedżtebelz",
      pos: "rzeczownik",
      part: 2,
      emoji: "🥦",
      ex: [
        { en: "The vegetables are fresh today.", pl: "Warzywa są dzisiaj świeże." },
        { en: "Fresh vegetables are on our website now.", pl: "Świeże warzywa są już na naszej stronie." }
      ],
      phrases: [
        { en: "fresh vegetables", pl: "świeże warzywa" },
        { en: "fruit and vegetables", pl: "owoce i warzywa" },
        { en: "vegetable soup", pl: "zupa jarzynowa" }
      ],
      family: ["vegetarian - wegetarianin", "vegan - weganin", "fruit - owoce", "carrot - marchewka"],
      forms: "l.poj. vegetable",
      note: "Mówimy wedżtebelz, w 3 sylabach, nie we-ge-ta-bles. Owoce i warzywa to fruit and vegetables, w tej kolejności.",
      mnemo: "WEDŻTEBELZ - zaczyna się prawie jak WEGE, bo to same warzywa."
    },
    {
      id: "w3-menu",
      en: "menu",
      pl: "menu, karta dań",
      say: "menju",
      pos: "rzeczownik",
      part: 3,
      emoji: "📋",
      ex: [
        { en: "The menu is in English.", pl: "Menu jest po angielsku." },
        { en: "The new lunch menu is on Instagram.", pl: "Nowe menu lunchowe jest na Instagramie." }
      ],
      phrases: [
        { en: "lunch menu", pl: "menu lunchowe" },
        { en: "on the menu", pl: "w menu, w karcie" },
        { en: "drinks menu", pl: "karta napojów" }
      ],
      family: ["restaurant - restauracja", "waiter - kelner", "dish - danie", "bill - rachunek"],
      forms: "",
      note: "Menu to też menu w aplikacji albo na stronie. Wymowa: menju, z j w środku.",
      mnemo: "MENJU - na talerzu zawsze MNIEJ niż na zdjęciu w menu."
    },
    {
      id: "w3-bottle",
      en: "bottle",
      pl: "butelka",
      say: "batel",
      pos: "rzeczownik",
      part: 3,
      emoji: "🍾",
      ex: [
        { en: "A bottle of water, please.", pl: "Poproszę butelkę wody." },
        { en: "Our water bottles are a hit on TikTok.", pl: "Nasze butelki na wodę są hitem na TikToku." }
      ],
      phrases: [
        { en: "a bottle of water", pl: "butelka wody" },
        { en: "a bottle of wine", pl: "butelka wina" },
        { en: "a plastic bottle", pl: "plastikowa butelka" }
      ],
      family: ["glass - szklanka, kieliszek", "can - puszka", "cup - kubek, filiżanka"],
      forms: "",
      note: "Butelka czego? A bottle OF water. W USA tt brzmi prawie jak d: badel.",
      mnemo: "BATEL - o ostatnią butelkę wina na imprezie toczy się BATALIA."
    }
  ],
  sentences: [
    { use: "L1", en: "The coffee is hot.", pl: "Kawa jest gorąca.", alt: [] },
    { use: "L1", en: "Bread and milk, please.", pl: "Poproszę chleb i mleko.", alt: [] },
    { use: "L1", en: "This is an apple.", pl: "To jest jabłko.", alt: ["It is an apple.", "That is an apple."] },
    { use: "L3", en: "Breakfast is at eight o'clock.", pl: "Śniadanie jest o 8:00.", alt: ["Breakfast is at eight."] },
    { use: "L3", en: "Two cheese sandwiches, please.", pl: "Poproszę 2 kanapki z serem.", alt: [] },
    { use: "L3", en: "The vegetables are for dinner.", pl: "Warzywa są na kolację.", alt: [] },
    { use: "L3", en: "Lunch is in an hour.", pl: "Lunch będzie za godzinę.", alt: [] },
    { use: "L5", en: "A coffee and a sandwich, please.", pl: "Poproszę kawę i kanapkę.",
      alt: ["Coffee and a sandwich, please.", "One coffee and one sandwich, please."] },
    { use: "L5", en: "The menu is on the table.", pl: "Menu jest na stole.", alt: [] },
    { use: "L5", en: "Two bottles of water, please.", pl: "Poproszę 2 butelki wody.", alt: ["2 bottles of water, please."] },
    { use: "L5", en: "The eggs and the cheese are for breakfast.", pl: "Jajka i ser są na śniadanie.",
      alt: ["The eggs and cheese are for breakfast.", "Eggs and cheese are for breakfast."] },
    { use: "L5", en: "Is the apple for your daughter?", pl: "Jabłko jest dla twojej córki?", alt: ["Is this apple for your daughter?"] }
  ],
  reading: {
    title: "Lunch zespołu",
    text: [
      { en: "Today is Friday, and the team lunch is at one o'clock.", pl: "Dzisiaj jest piątek, a lunch zespołu jest o 13:00." },
      { en: "The menu is on the table.", pl: "Menu leży na stole." },
      { en: "Lunch is a sandwich, an apple and a bottle of water.", pl: "Na lunch jest kanapka, jabłko i butelka wody." },
      { en: "The sandwiches are with cheese and vegetables.", pl: "Kanapki są z serem i warzywami." },
      { en: "Coffee and tea are free for the team.", pl: "Kawa i herbata są dla zespołu za darmo." },
      { en: "But Mark is not happy: the coffee is cold!", pl: "Ale Mark nie jest zadowolony: kawa jest zimna!" }
    ],
    questions: [
      { q: "What time is lunch?", qpl: "O której jest lunch?", options: ["At twelve o'clock.", "At one o'clock.", "At two o'clock."], answer: 1 },
      { q: "What is in the sandwiches?", qpl: "Co jest w kanapkach?", options: ["Cheese and vegetables.", "Egg and milk.", "Apples and bread."], answer: 0 },
      { q: "Why is Mark not happy?", qpl: "Dlaczego Mark nie jest zadowolony?", options: ["The tea is hot.", "The water is free.", "The coffee is cold."], answer: 2 }
    ]
  },
  dialog: {
    intro: "Zamawiasz lunch w kawiarni obok biura.",
    turns: [
      { bot: "Hi! What would you like?", botpl: "Cześć! Co podać?",
        options: ["An sandwich and a coffee, please.", "A sandwich and a coffee, please.", "A sandwich and an coffee, please."], answer: 1,
        hint: "A sandwich and..." },
      { bot: "Sure. A cheese sandwich or an egg sandwich?", botpl: "Jasne. Kanapka z serem czy z jajkiem?",
        options: ["A cheese sandwich, please.", "A cheeses sandwich, please.", "An cheese sandwich, please."], answer: 0,
        hint: "A cheese..." },
      { bot: "And the coffee: with milk?", botpl: "A kawa z mlekiem?",
        options: ["Yes, with a milk, please.", "Yes, with milks, please.", "Yes, with milk, please."], answer: 2,
        hint: "Yes, with..." },
      { bot: "Anything else? An apple, maybe?", botpl: "Coś jeszcze? Może jabłko?",
        options: ["Yes, two apple, please.", "Yes, two apples, please.", "Yes, two an apples, please."], answer: 1,
        hint: "Yes, two..." },
      { bot: "OK. Is it for here or to go?", botpl: "Dobrze. Na miejscu czy na wynos?",
        options: ["To go, please.", "For go, please.", "On the go, please."], answer: 0,
        hint: "To..." },
      { bot: "Here you are! The coffee is hot.", botpl: "Proszę bardzo! Kawa jest gorąca.",
        options: ["Thanks you! Have a nice day!", "Thank you! Have a nice day yesterday!", "Thank you! Have a nice day!"], answer: 2,
        hint: "Thank you!..." }
    ]
  }
});
