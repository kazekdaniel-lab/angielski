window.WEEKS = window.WEEKS || [];
window.WEEKS.push({
  week: 4,
  title: "Dom i przedmioty",
  grammar: {
    title: "there is / there are",
    explain: [
      "There is / there are mówi, że coś gdzieś jest albo istnieje. Po polsku: „W pokoju jest biurko”, po angielsku: There is a desk in the room.",
      "There is stawiamy przy jednej rzeczy (there is a lamp), there are przy kilku (there are two chairs). W mowie skracamy: there's.",
      "Przeczenie: there isn't a... albo there aren't any... (any = żadne). Pytanie: przestaw kolejność: Is there a key? Are there any boxes?",
      "Uwaga na kalkę z polskiego: nie mówimy In the room is a desk ani It is a desk in the room. Zdanie zaczynamy od there."
    ],
    table: [
      ["There is + 1 rzecz", "There is a lamp.", "Jest lampa."],
      ["There are + kilka", "There are two beds.", "Są 2 łóżka."],
      ["There isn't", "There isn't a key.", "Nie ma klucza."],
      ["There aren't any", "There aren't any boxes.", "Nie ma (żadnych) pudełek."],
      ["Is there...?", "Is there a desk?", "Czy jest biurko?"],
      ["Are there any...?", "Are there any chairs?", "Czy są (jakieś) krzesła?"],
      ["Krótkie odpowiedzi", "Yes, there is. / No, there aren't.", "Tak, jest. / Nie, nie ma."]
    ],
    examples: [
      { en: "There is a desk by the window.", pl: "Przy oknie stoi biurko." },
      { en: "There are two laptops on the table.", pl: "Na stole są 2 laptopy." },
      { en: "Is there a lamp in the room?", pl: "Czy w pokoju jest lampa?" }
    ],
    exercises: [
      { type: "choice", q: "There ___ a lamp on the desk.", options: ["is", "are"], answer: 0,
        pl: "Na biurku jest lampa.", why: "A lamp to jedna rzecz, więc there is." },
      { type: "gap", q: "There ___ three chairs in the kitchen.", answer: ["are"],
        pl: "W kuchni są 3 krzesła.", why: "Three chairs to kilka rzeczy, więc there are." },
      { type: "choice", q: "___ a key in the box?", options: ["There is", "Is there", "Are there"], answer: 1,
        pl: "Czy w pudełku jest klucz?", why: "W pytaniu is idzie przed there. A key to jedna rzecz, więc is." },
      { type: "gap", q: "There ___ any boxes in the room.", answer: ["aren't", "are not"],
        pl: "W pokoju nie ma żadnych pudełek.", why: "Przeczenie przy kilku rzeczach: there aren't any." },
      { type: "choice", q: "In my flat ___ a small kitchen.", options: ["it is", "there is", "is"], answer: 1,
        pl: "W moim mieszkaniu jest mała kuchnia.", why: "Gdy mówisz, że coś gdzieś jest, potrzebujesz there is. Samo is albo it is to kalka z polskiego." },
      { type: "gap", q: "___ there a desk in the office?", answer: ["is"],
        pl: "Czy w biurze jest biurko?", why: "Pytanie o jedną rzecz: Is there...?" },
      { type: "choice", q: "Are there any shelves? - Yes, there ___.", options: ["is", "aren't", "are"], answer: 2,
        pl: "Są jakieś półki? - Tak, są.", why: "Krótka odpowiedź powtarza are: Yes, there are." },
      { type: "gap", q: "One shelf, two ___.", answer: ["shelves"],
        pl: "1 półka, 2 półki.", why: "Shelf w liczbie mnogiej zmienia f na v: shelves." },
      { type: "choice", q: "There are two ___ in my flat.", options: ["room", "rooms", "a rooms"], answer: 1,
        pl: "W moim mieszkaniu są 2 pokoje.", why: "There are + liczba mnoga: rooms." },
      { type: "gap", q: "Is there a key? - No, there ___.", answer: ["isn't", "is not"],
        pl: "Jest klucz? - Nie, nie ma.", why: "Krótka odpowiedź przecząca przy jednej rzeczy: No, there isn't." }
    ]
  },
  words: [
    {
      id: "w4-house",
      en: "house",
      pl: "dom",
      say: "hałs",
      pos: "rzeczownik",
      part: 1,
      emoji: "🏠",
      ex: [
        { en: "This is my house.", pl: "To mój dom." },
        { en: "The house is also our office.", pl: "Dom jest też naszym biurem." }
      ],
      phrases: [
        { en: "at my house", pl: "u mnie w domu" },
        { en: "a big house", pl: "duży dom" },
        { en: "house party", pl: "domówka" }
      ],
      family: ["home - dom (miejsce, gdzie mieszkasz)", "flat - mieszkanie", "garden - ogród", "housework - prace domowe"],
      forms: "l.mn. houses (hałzyz)",
      note: "House to budynek. Dom jako miejsce, gdzie mieszkasz, to home: I'm at home (jestem w domu), nie at house.",
      mnemo: "HAŁS - w domu z dziećmi zawsze jest HAŁAS."
    },
    {
      id: "w4-flat",
      en: "flat",
      pl: "mieszkanie",
      say: "flet",
      pos: "rzeczownik",
      part: 1,
      emoji: "🏢",
      ex: [
        { en: "My flat is very small.", pl: "Moje mieszkanie jest bardzo małe." },
        { en: "There is a photo studio in my flat.", pl: "W moim mieszkaniu jest studio foto." }
      ],
      phrases: [
        { en: "a two-room flat", pl: "mieszkanie dwupokojowe" },
        { en: "flat for rent", pl: "mieszkanie na wynajem" },
        { en: "a small flat", pl: "małe mieszkanie" }
      ],
      family: ["apartment - mieszkanie (USA)", "house - dom", "room - pokój", "block of flats - blok"],
      forms: "",
      note: "Flat to słowo brytyjskie, Amerykanie mówią apartment. Jako przymiotnik flat znaczy płaski.",
      mnemo: "FLET - w bloku sąsiad gra na FLECIE za ścianą twojego mieszkania."
    },
    {
      id: "w4-room",
      en: "room",
      pl: "pokój",
      say: "rum",
      pos: "rzeczownik",
      part: 1,
      emoji: "🛋️",
      ex: [
        { en: "There are three rooms in my flat.", pl: "W moim mieszkaniu są 3 pokoje." },
        { en: "The meeting room is free now.", pl: "Sala spotkań jest teraz wolna." }
      ],
      phrases: [
        { en: "meeting room", pl: "sala spotkań" },
        { en: "living room", pl: "salon" },
        { en: "no room", pl: "brak miejsca" }
      ],
      family: ["bedroom - sypialnia", "bathroom - łazienka", "living room - salon", "roommate - współlokator"],
      forms: "",
      note: "Room to też miejsce: There is no room in the box (w pudle nie ma miejsca). Wymawiamy jak rum.",
      mnemo: "RUM - w każdym pokoju butelka RUMU? Tylko u piratów."
    },
    {
      id: "w4-kitchen",
      en: "kitchen",
      pl: "kuchnia",
      say: "kyczen",
      pos: "rzeczownik",
      part: 1,
      emoji: "🧑‍🍳",
      ex: [
        { en: "The kitchen is small but nice.", pl: "Kuchnia jest mała, ale ładna." },
        { en: "There is a coffee machine in the office kitchen.", pl: "W biurowej kuchni jest ekspres do kawy." }
      ],
      phrases: [
        { en: "in the kitchen", pl: "w kuchni" },
        { en: "kitchen table", pl: "stół kuchenny" },
        { en: "office kitchen", pl: "kuchnia w biurze" }
      ],
      family: ["cook - gotować, kucharz", "fridge - lodówka", "oven - piekarnik", "chicken - kurczak (nie myl!)"],
      forms: "",
      note: "Nie myl kitchen (kyczen, kuchnia) z chicken (czyken, kurczak).",
      mnemo: "KYCZEN - w każdej kuchni wisi jakiś KICZ na lodówce."
    },
    {
      id: "w4-table",
      en: "table",
      pl: "stół; tabela",
      say: "tejbel",
      pos: "rzeczownik",
      part: 1,
      emoji: "🍽️",
      ex: [
        { en: "The keys are on the table.", pl: "Klucze leżą na stole." },
        { en: "The prices are in the table below.", pl: "Ceny są w tabeli poniżej." }
      ],
      phrases: [
        { en: "on the table", pl: "na stole" },
        { en: "at the table", pl: "przy stole" },
        { en: "a table for two", pl: "stolik dla 2 osób" }
      ],
      family: ["chair - krzesło", "desk - biurko", "tablet - tablet"],
      forms: "",
      note: "Coś leży ON the table (na stole), a ludzie siedzą AT the table (przy stole). Table to też tabela w raporcie.",
      mnemo: "TEJBEL - na stole leży TABELA z wynikami sprzedaży."
    },
    {
      id: "w4-chair",
      en: "chair",
      pl: "krzesło",
      say: "czer",
      pos: "rzeczownik",
      part: 1,
      emoji: "🪑",
      ex: [
        { en: "There are four chairs in the kitchen.", pl: "W kuchni są 4 krzesła." },
        { en: "The office chair is on sale.", pl: "Krzesło biurowe jest w promocji." }
      ],
      phrases: [
        { en: "office chair", pl: "krzesło biurowe" },
        { en: "on a chair", pl: "na krześle" },
        { en: "a comfortable chair", pl: "wygodne krzesło" }
      ],
      family: ["armchair - fotel", "sofa - kanapa", "table - stół", "chairman - prezes, przewodniczący"],
      forms: "",
      note: "Siedzimy ON a chair (na krześle), ale IN an armchair (w fotelu).",
      mnemo: "CZER - na krześle siedzi stażysta CZERWONY ze wstydu."
    },
    {
      id: "w4-door",
      en: "door",
      pl: "drzwi",
      say: "dor",
      pos: "rzeczownik",
      part: 1,
      emoji: "🚪",
      ex: [
        { en: "Is the door open?", pl: "Drzwi są otwarte?" },
        { en: "The courier is at the door.", pl: "Kurier stoi pod drzwiami." }
      ],
      phrases: [
        { en: "front door", pl: "drzwi wejściowe" },
        { en: "at the door", pl: "pod drzwiami" },
        { en: "door to door", pl: "od drzwi do drzwi" }
      ],
      family: ["window - okno", "key - klucz", "doorbell - dzwonek do drzwi", "lock - zamek"],
      forms: "",
      note: "Po polsku drzwi są w liczbie mnogiej, po angielsku jedne drzwi to a door: The door is open, nie the doors are open.",
      mnemo: "DOR - biegnij do drzwi i DORWIJ kuriera, zanim odjedzie!"
    },
    {
      id: "w4-window",
      en: "window",
      pl: "okno",
      say: "łyndou",
      pos: "rzeczownik",
      part: 2,
      emoji: "🪟",
      ex: [
        { en: "The window is very big.", pl: "Okno jest bardzo duże." },
        { en: "There is a pop-up window on our website.", pl: "Na naszej stronie wyskakuje okienko pop-up." }
      ],
      phrases: [
        { en: "by the window", pl: "przy oknie" },
        { en: "shop window", pl: "witryna sklepu" },
        { en: "pop-up window", pl: "wyskakujące okienko" }
      ],
      family: ["door - drzwi", "glass - szkło", "curtain - zasłona", "Windows - system Windows"],
      forms: "",
      note: "Shop window to witryna sklepu. Windows z wielkiej litery to system operacyjny.",
      mnemo: "ŁYNDOU - brzmi jak WINDA, a w windzie akurat okna nie ma."
    },
    {
      id: "w4-desk",
      en: "desk",
      pl: "biurko",
      say: "desk",
      pos: "rzeczownik",
      part: 2,
      emoji: "🗄️",
      ex: [
        { en: "The laptop is on the desk.", pl: "Laptop leży na biurku." },
        { en: "The help desk is open from nine.", pl: "Dział pomocy działa od 9:00." }
      ],
      phrases: [
        { en: "at my desk", pl: "przy moim biurku" },
        { en: "help desk", pl: "dział pomocy" },
        { en: "front desk", pl: "recepcja" }
      ],
      family: ["table - stół", "office - biuro", "desktop - pulpit, komputer stacjonarny", "drawer - szuflada"],
      forms: "",
      note: "Desk to biurko, nie deska (deska to board). Front desk w hotelu to recepcja.",
      mnemo: "DESK - biurko to w sumie DESKA na nogach."
    },
    {
      id: "w4-lamp",
      en: "lamp",
      pl: "lampa",
      say: "lemp",
      pos: "rzeczownik",
      part: 2,
      emoji: "💡",
      ex: [
        { en: "There is a lamp by the bed.", pl: "Przy łóżku stoi lampa." },
        { en: "There are two lamps in our photo studio.", pl: "W naszym studiu foto są 2 lampy." }
      ],
      phrases: [
        { en: "desk lamp", pl: "lampka na biurko" },
        { en: "floor lamp", pl: "lampa stojąca" }
      ],
      family: ["light - światło", "bulb - żarówka", "light switch - włącznik światła"],
      forms: "",
      note: "Lamp to lampa jako przedmiot. Światło w pokoju to light: Turn on the light (zapal światło).",
      mnemo: "LEMP - LEMUR boi się ciemności, więc śpi przy lampie."
    },
    {
      id: "w4-bed",
      en: "bed",
      pl: "łóżko",
      say: "bed",
      pos: "rzeczownik",
      part: 2,
      emoji: "🛏️",
      ex: [
        { en: "The cat is on the bed.", pl: "Kot jest na łóżku." },
        { en: "Bed sheets are our bestseller.", pl: "Pościel to nasz bestseller." }
      ],
      phrases: [
        { en: "in bed", pl: "w łóżku" },
        { en: "go to bed", pl: "iść spać" },
        { en: "bed and breakfast", pl: "nocleg ze śniadaniem" }
      ],
      family: ["bedroom - sypialnia", "sleep - spać", "pillow - poduszka", "sofa - kanapa"],
      forms: "",
      note: "Mówimy in bed (w łóżku) i go to bed (iść spać), bez the. Nie myl bed (łóżko) z bad (zły).",
      mnemo: "BED - po pracy łóżko BĘDZIE na ciebie czekać."
    },
    {
      id: "w4-shelf",
      en: "shelf",
      pl: "półka",
      say: "szelf",
      pos: "rzeczownik",
      part: 2,
      emoji: "📚",
      ex: [
        { en: "The books are on the shelf.", pl: "Książki są na półce." },
        { en: "Our products are on the top shelf.", pl: "Nasze produkty są na najwyższej półce." }
      ],
      phrases: [
        { en: "on the shelf", pl: "na półce" },
        { en: "top shelf", pl: "najwyższa półka" },
        { en: "bookshelf", pl: "półka na książki" }
      ],
      family: ["shelves - półki", "cupboard - szafka", "bookcase - regał"],
      forms: "l.mn. shelves",
      note: "Liczba mnoga jest nieregularna: shelf - shelves, tak jak wife - wives.",
      mnemo: "SZELF - pamiętasz szelf z geografii? To półka, tylko pod wodą."
    },
    {
      id: "w4-laptop",
      en: "laptop",
      pl: "laptop",
      say: "leptap",
      pos: "rzeczownik",
      part: 2,
      emoji: "💻",
      ex: [
        { en: "My laptop is on the bed.", pl: "Mój laptop leży na łóżku." },
        { en: "Is there a laptop for the new colleague?", pl: "Jest laptop dla nowego kolegi z pracy?" }
      ],
      phrases: [
        { en: "laptop bag", pl: "torba na laptopa" },
        { en: "on my laptop", pl: "na moim laptopie" },
        { en: "work laptop", pl: "laptop służbowy" }
      ],
      family: ["computer - komputer", "screen - ekran", "keyboard - klawiatura", "charger - ładowarka"],
      forms: "",
      note: "Po amerykańsku leptap: pierwsze a jak w cat, o prawie jak a.",
      mnemo: "LEPTAP - stary laptop zawsze się LEPI od kawy."
    },
    {
      id: "w4-box",
      en: "box",
      pl: "pudełko, karton",
      say: "baks",
      pos: "rzeczownik",
      part: 3,
      emoji: "📦",
      ex: [
        { en: "The box is empty.", pl: "Pudełko jest puste." },
        { en: "There are fifty boxes for delivery today.", pl: "Dzisiaj do wysyłki jest 50 paczek." }
      ],
      phrases: [
        { en: "a cardboard box", pl: "karton" },
        { en: "gift box", pl: "pudełko na prezent" },
        { en: "inbox", pl: "skrzynka odbiorcza" }
      ],
      family: ["package - paczka", "parcel - paczka (UK)", "courier - kurier", "unboxing - rozpakowywanie (np. na filmie)"],
      forms: "l.mn. boxes",
      note: "Liczba mnoga z -es: boxes. Inbox w mailu to skrzynka odbiorcza.",
      mnemo: "BAKS - za każdy wysłany karton wpada parę BAKSÓW."
    },
    {
      id: "w4-key",
      en: "key",
      pl: "klucz; kluczowy",
      say: "ki",
      pos: "rzeczownik",
      part: 3,
      emoji: "🔑",
      ex: [
        { en: "The key is in the door.", pl: "Klucz jest w drzwiach." },
        { en: "Good photos are key in e-commerce.", pl: "Dobre zdjęcia to podstawa w e-commerce." }
      ],
      phrases: [
        { en: "car keys", pl: "kluczyki do samochodu" },
        { en: "the key to", pl: "klucz do" },
        { en: "key customers", pl: "kluczowi klienci" }
      ],
      family: ["lock - zamek", "door - drzwi", "keyboard - klawiatura", "keyword - słowo kluczowe"],
      forms: "",
      note: "Key to też „kluczowy”: key customers (kluczowi klienci). W marketingu: keyword (słowo kluczowe).",
      mnemo: "KI - klucz wpadł pod szafę? Wyciągasz go KIJEM."
    }
  ],
  sentences: [
    { use: "L1", en: "The door is open.", pl: "Drzwi są otwarte.", alt: [] },
    { use: "L1", en: "My flat is small.", pl: "Moje mieszkanie jest małe.", alt: ["My apartment is small."] },
    { use: "L1", en: "The chair is in the kitchen.", pl: "Krzesło jest w kuchni.", alt: [] },
    { use: "L3", en: "There is a lamp on the desk.", pl: "Na biurku jest lampa.", alt: ["On the desk there is a lamp."] },
    { use: "L3", en: "There are two windows in my room.", pl: "W moim pokoju są 2 okna.", alt: ["In my room there are two windows."] },
    { use: "L3", en: "Is there a laptop on the shelf?", pl: "Czy na półce jest laptop?", alt: [] },
    { use: "L3", en: "There isn't a bed in this room.", pl: "W tym pokoju nie ma łóżka.", alt: ["There is no bed in this room."] },
    { use: "L5", en: "There is a key in the box.", pl: "W pudełku jest klucz.", alt: ["In the box there is a key."] },
    { use: "L5", en: "There are three boxes by the door.", pl: "Przy drzwiach są 3 pudełka.",
      alt: ["There are 3 boxes by the door.", "There are three boxes at the door.", "There are 3 boxes at the door.", "There are three boxes next to the door.", "There are 3 boxes next to the door.", "By the door there are three boxes."] },
    { use: "L5", en: "Are there any chairs in the kitchen?", pl: "Czy w kuchni są jakieś krzesła?", alt: ["Are there chairs in the kitchen?"] },
    { use: "L5", en: "There aren't any shelves in my office.", pl: "W moim biurze nie ma półek.",
      alt: ["There are no shelves in my office.", "In my office there aren't any shelves.", "In my office there are no shelves."] },
    { use: "L5", en: "Is there a key to the house?", pl: "Jest klucz do domu?", alt: ["Is there a key for the house?"] }
  ],
  reading: {
    title: "Nowe biuro w mieszkaniu",
    text: [
      { en: "This is my new flat, and it is also our office.", pl: "To moje nowe mieszkanie, a zarazem nasze biuro." },
      { en: "There are three rooms and a small kitchen.", pl: "Są tu 3 pokoje i mała kuchnia." },
      { en: "In the big room, there are two desks and a lamp.", pl: "W dużym pokoju są 2 biurka i lampa." },
      { en: "There are a lot of boxes on the shelves for our customers.", pl: "Na półkach jest mnóstwo pudełek dla naszych klientów." },
      { en: "There isn't a meeting room, but the kitchen table is OK.", pl: "Nie ma sali spotkań, ale stół w kuchni wystarczy." },
      { en: "There is only one problem: where is the key?", pl: "Jest tylko jeden problem: gdzie jest klucz?" }
    ],
    questions: [
      { q: "How many rooms are there?", qpl: "Ile jest pokoi?", options: ["Two.", "Three.", "Four."], answer: 1 },
      { q: "What is on the shelves?", qpl: "Co jest na półkach?", options: ["Boxes for customers.", "Laptops.", "A lamp."], answer: 0 },
      { q: "Is there a meeting room?", qpl: "Czy jest sala spotkań?", options: ["Yes, there is.", "Yes, in the kitchen.", "No, there isn't."], answer: 2 }
    ]
  },
  dialog: {
    intro: "Oglądasz mieszkanie, które ma być biurem twojej firmy.",
    turns: [
      { bot: "Hi, welcome! Is the flat for you?", botpl: "Cześć, zapraszam! Mieszkanie jest dla ciebie?",
        options: ["No, it is for our company.", "No, it is for we company.", "No, is for our company."], answer: 0,
        hint: "No, it is for..." },
      { bot: "OK! There are three rooms. This is the big room.", botpl: "Dobrze! Są tu 3 pokoje. To jest ten duży.",
        options: ["Are there a desk?", "Is there a desk?", "Is there desks?"], answer: 1,
        hint: "Is there a..." },
      { bot: "Yes, there is. And there are two chairs.", botpl: "Tak, jest. Są też 2 krzesła.",
        options: ["Great! Is there any shelves?", "Great! Are there any shelfs?", "Great! Are there any shelves?"], answer: 2,
        hint: "Great! Are there any..." },
      { bot: "No, there aren't. But there is a big window.", botpl: "Nie, nie ma. Ale jest duże okno.",
        options: ["OK. And where is the kitchen?", "OK. And where are the kitchen?", "OK. And where kitchen?"], answer: 0,
        hint: "OK. And where is..." },
      { bot: "The kitchen is here, by the door.", botpl: "Kuchnia jest tutaj, przy drzwiach.",
        options: ["Nice! In the kitchen is a table?", "Nice! Is there a table in the kitchen?", "Nice! It is a table in the kitchen?"], answer: 1,
        hint: "Nice! Is there..." },
      { bot: "Yes, there is. So, is the flat OK for you?", botpl: "Tak, jest. No i jak, mieszkanie ci pasuje?",
        options: ["Yes, is great. Where are the keys?", "Yes, it's great. Where is the keys?", "Yes, it's great. Where are the keys?"], answer: 2,
        hint: "Yes, it's great..." }
    ]
  }
});
