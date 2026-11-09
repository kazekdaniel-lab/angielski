window.WEEKS = window.WEEKS || [];
window.WEEKS.push({
  week: 8,
  title: "Przymiotniki, opisywanie",
  grammar: {
    title: "Present Continuous",
    explain: [
      "Present Continuous to czas, którym mówisz o tym, co dzieje się teraz, w tej chwili: I'm working now - Teraz pracuję.",
      "Budowa: am / is / are + czasownik z końcówką -ing. I'm writing, she's calling, they're working. Skróty: I'm, he's, she's, it's, we're, they're.",
      "Przeczenie: dodajesz not: I'm not working, he isn't calling, they aren't sleeping. Pytanie: am / is / are idzie na początek: Are you working? Is Kate calling?",
      "Pisownia -ing: e na końcu znika (write - writing), a w krótkich słowach ostatnia litera się podwaja (sit - sitting, run - running). Porównaj: I work every day (zawsze tak jest) i I'm working now (dzieje się teraz)."
    ],
    table: [
      ["I", "am working", "I'm working."],
      ["he / she / it", "is working", "She's working."],
      ["you / we / they", "are working", "We're working."],
      ["przeczenie", "isn't / aren't", "He isn't working."],
      ["pytanie", "Are you...?", "Are you working?"]
    ],
    examples: [
      { en: "I'm writing a report now.", pl: "Teraz piszę raport." },
      { en: "Kate is talking to a customer.", pl: "Kate rozmawia z klientem." },
      { en: "Are you working from home today?", pl: "Pracujesz dziś z domu?" }
    ],
    exercises: [
      { type: "choice", q: "She ___ an email now.", options: ["writes", "is writing", "writing"], answer: 1,
        pl: "Ona teraz pisze maila.", why: "Now znaczy teraz, więc is + -ing: is writing." },
      { type: "gap", q: "I ___ working at the moment.", answer: ["am", "'m"],
        pl: "W tej chwili pracuję.", why: "Przy I zawsze am: I am working." },
      { type: "choice", q: "They ___ a meeting right now.", options: ["are having", "have having", "is having"], answer: 0,
        pl: "Właśnie mają spotkanie.", why: "Przy they: are + -ing." },
      { type: "gap", q: "Tom is ___ (write) a new post.", answer: ["writing"],
        pl: "Tom pisze nowy post.", why: "Write traci e na końcu: writing." },
      { type: "choice", q: "___ you working today?", options: ["Do", "Are", "Is"], answer: 1,
        pl: "Pracujesz dzisiaj?", why: "Pytanie w tym czasie zaczynasz od am / is / are, a przy you jest are." },
      { type: "gap", q: "We aren't ___ (sit) in the office now.", answer: ["sitting"],
        pl: "Nie siedzimy teraz w biurze.", why: "W sit ostatnia litera się podwaja: sitting." },
      { type: "choice", q: "Kate ___ to a customer at the moment.", options: ["talks", "is talking", "are talking"], answer: 1,
        pl: "Kate rozmawia teraz z klientem.", why: "At the moment znaczy w tej chwili, a Kate to she: is talking." },
      { type: "gap", q: "My phone ___ (not) working today.", answer: ["isn't", "is not"],
        pl: "Mój telefon dzisiaj nie działa.", why: "My phone to it, więc isn't." },
      { type: "choice", q: "I usually work in the office, but today I ___ from home.", options: ["work", "am working", "working"], answer: 1,
        pl: "Zwykle pracuję w biurze, ale dziś pracuję z domu.", why: "Usually to stały zwyczaj, a today to coś wyjątkowego teraz: am working." },
      { type: "gap", q: "What ___ you doing now?", answer: ["are"],
        pl: "Co teraz robisz?", why: "Przy you: are + -ing." }
    ]
  },
  words: [
    {
      id: "w8-big",
      en: "big",
      pl: "duży",
      say: "byg",
      pos: "przymiotnik",
      part: 1,
      emoji: "🐘",
      ex: [
        { en: "We have a big kitchen.", pl: "Mamy dużą kuchnię." },
        { en: "We're preparing a big sale for Black Friday.", pl: "Przygotowujemy dużą wyprzedaż na Black Friday." }
      ],
      phrases: [
        { en: "a big order", pl: "duże zamówienie" },
        { en: "a big problem", pl: "duży problem" },
        { en: "big data", pl: "big data, duże zbiory danych" }
      ],
      family: ["large - duży", "huge - ogromny", "small - mały"],
      forms: "bigger - biggest",
      note: "W stopniu wyższym g się podwaja: bigger, biggest. Na metkach ubrań piszą large (L), nie big.",
      mnemo: "BYG - BIGOS: zawsze robisz DUŻY gar."
    },
    {
      id: "w8-small",
      en: "small",
      pl: "mały",
      say: "smol",
      pos: "przymiotnik",
      part: 1,
      emoji: "🐭",
      ex: [
        { en: "My flat is small but nice.", pl: "Moje mieszkanie jest małe, ale ładne." },
        { en: "Small shops are selling more online now.", pl: "Małe sklepy sprzedają teraz więcej przez internet." }
      ],
      phrases: [
        { en: "a small business", pl: "mała firma" },
        { en: "small talk", pl: "luźna pogawędka" },
        { en: "a small size", pl: "mały rozmiar" }
      ],
      family: ["little - mały", "tiny - malutki", "big - duży"],
      forms: "smaller - smallest",
      note: "Small talk to rozmowa o pogodzie czy weekendzie. W pracy w USA to ważna umiejętność, nie strata czasu.",
      mnemo: "SMOL - mała kropla SMOŁY, a cały samochód brudny."
    },
    {
      id: "w8-new",
      en: "new",
      pl: "nowy",
      say: "nu",
      pos: "przymiotnik",
      part: 1,
      emoji: "✨",
      ex: [
        { en: "I have a new phone.", pl: "Mam nowy telefon." },
        { en: "We're adding new products to the shop.", pl: "Dodajemy nowe produkty do sklepu." }
      ],
      phrases: [
        { en: "brand new", pl: "zupełnie nowy" },
        { en: "new customers", pl: "nowi klienci" },
        { en: "What's new?", pl: "Co nowego?" }
      ],
      family: ["old - stary", "news - wiadomości", "newsletter - newsletter"],
      forms: "newer - newest",
      note: "W USA new brzmi [nu], w Wielkiej Brytanii [nju]. News to wiadomości, nie nowości.",
      mnemo: "NU - NU, pokaż ten NOWY telefon!"
    },
    {
      id: "w8-old",
      en: "old",
      pl: "stary",
      say: "ould",
      pos: "przymiotnik",
      part: 1,
      emoji: "👴",
      ex: [
        { en: "My laptop is very old.", pl: "Mój laptop jest bardzo stary." },
        { en: "Our old customers are coming back.", pl: "Starzy klienci do nas wracają." }
      ],
      phrases: [
        { en: "an old friend", pl: "stary przyjaciel" },
        { en: "the old price", pl: "stara cena" },
        { en: "How old are you?", pl: "Ile masz lat?" }
      ],
      family: ["new - nowy", "young - młody", "age - wiek"],
      forms: "older - oldest",
      note: "O wiek pytasz How old are you? Odpowiadasz I'm 30, nie I have 30 years.",
      mnemo: "OULD - OLDBOJ: STARY piłkarz, który wciąż gra."
    },
    {
      id: "w8-fast",
      en: "fast",
      pl: "szybki; szybko",
      say: "fest",
      pos: "przymiotnik",
      part: 1,
      emoji: "⚡",
      ex: [
        { en: "My new laptop is very fast.", pl: "Mój nowy laptop jest bardzo szybki." },
        { en: "Customers love fast delivery.", pl: "Klienci uwielbiają szybką dostawę." }
      ],
      phrases: [
        { en: "fast delivery", pl: "szybka dostawa" },
        { en: "fast internet", pl: "szybki internet" },
        { en: "fast food", pl: "fast food, szybkie jedzenie" }
      ],
      family: ["quick - szybki", "speed - prędkość", "slow - wolny"],
      forms: "faster - fastest",
      note: "Fast to i szybki, i szybko: a fast car, she works fast. Nie mów fastly.",
      mnemo: "FEST - szybki jak ostatni autobus z FESTIWALU."
    },
    {
      id: "w8-slow",
      en: "slow",
      pl: "wolny, powolny",
      say: "slou",
      pos: "przymiotnik",
      part: 1,
      emoji: "🐢",
      ex: [
        { en: "The bus is very slow today.", pl: "Autobus jedzie dziś bardzo wolno." },
        { en: "Our website is slow, so customers are leaving.", pl: "Nasza strona działa wolno, więc klienci odchodzą." }
      ],
      phrases: [
        { en: "slow down", pl: "zwolnić" },
        { en: "slow internet", pl: "wolny internet" },
        { en: "a slow day", pl: "spokojny dzień" }
      ],
      family: ["slowly - powoli", "late - spóźniony", "fast - szybki"],
      forms: "slower - slowest",
      note: "Powoli to slowly: She speaks slowly. Wolny jak wolny czas to free, nie slow.",
      mnemo: "SLOU - SŁOŃ nigdzie się nie spieszy."
    },
    {
      id: "w8-good",
      en: "good",
      pl: "dobry",
      say: "gud",
      pos: "przymiotnik",
      part: 1,
      emoji: "👍",
      ex: [
        { en: "This coffee is very good.", pl: "Ta kawa jest bardzo dobra." },
        { en: "Our sales are good this month.", pl: "W tym miesiącu mamy dobrą sprzedaż." }
      ],
      phrases: [
        { en: "Good job!", pl: "Dobra robota!" },
        { en: "good at", pl: "dobry w czymś" },
        { en: "Good morning!", pl: "Dzień dobry!" }
      ],
      family: ["better - lepszy", "great - świetny", "bad - zły"],
      forms: "better - best",
      note: "Dobrze to well, nie good: She works well. Dobry w czymś to good at, nie good in.",
      mnemo: "GUD - babciny GULASZ: zawsze DOBRY."
    },
    {
      id: "w8-bad",
      en: "bad",
      pl: "zły, kiepski",
      say: "bed",
      pos: "przymiotnik",
      part: 2,
      emoji: "👎",
      ex: [
        { en: "The weather is bad today.", pl: "Dziś jest brzydka pogoda." },
        { en: "We're reading a bad review about our shop.", pl: "Czytamy złą opinię o naszym sklepie." }
      ],
      phrases: [
        { en: "bad news", pl: "zła wiadomość" },
        { en: "not bad", pl: "nieźle" },
        { en: "bad luck", pl: "pech" }
      ],
      family: ["worse - gorszy", "terrible - okropny", "good - dobry"],
      forms: "worse - worst",
      note: "Bad i bed (łóżko) brzmią podobnie. W bad otwierasz usta szerzej, prawie jak przy a.",
      mnemo: "BED - zły dzień? Wracasz do BED (łóżka) i śpisz do jutra."
    },
    {
      id: "w8-happy",
      en: "happy",
      pl: "szczęśliwy, zadowolony",
      say: "hepi",
      pos: "przymiotnik",
      part: 2,
      emoji: "😊",
      ex: [
        { en: "I'm very happy today.", pl: "Jestem dziś bardzo szczęśliwy." },
        { en: "Our customers are happy with the delivery.", pl: "Nasi klienci są zadowoleni z dostawy." }
      ],
      phrases: [
        { en: "happy with", pl: "zadowolony z" },
        { en: "Happy birthday!", pl: "Wszystkiego najlepszego!" },
        { en: "happy hour", pl: "happy hour, godziny promocji" }
      ],
      family: ["happiness - szczęście", "glad - zadowolony", "sad - smutny"],
      forms: "happier - happiest",
      note: "Zadowolony z czegoś to happy with, nie happy from. Happy to często po prostu zadowolony.",
      mnemo: "HEPI - HEPI END, czyli szczęśliwe zakończenie."
    },
    {
      id: "w8-busy",
      en: "busy",
      pl: "zajęty",
      say: "byzi",
      pos: "przymiotnik",
      part: 2,
      emoji: "🐝",
      ex: [
        { en: "I'm very busy today.", pl: "Jestem dziś bardzo zajęty." },
        { en: "Our team is busy with orders today.", pl: "Nasz zespół jest dziś zajęty zamówieniami." }
      ],
      phrases: [
        { en: "a busy day", pl: "pracowity dzień" },
        { en: "busy with", pl: "zajęty czymś" },
        { en: "The line is busy.", pl: "Linia jest zajęta." }
      ],
      family: ["business - biznes, firma", "free - wolny", "tired - zmęczony"],
      forms: "busier - busiest",
      note: "Busy czytasz [byzi], nie [busi]. Business pochodzi od busy, dlatego brzmi [byznes].",
      mnemo: "BYZI - pszczoła BZYCZY, bo jest zajęta jak ty."
    },
    {
      id: "w8-tired",
      en: "tired",
      pl: "zmęczony",
      say: "tajerd",
      pos: "przymiotnik",
      part: 2,
      emoji: "🥱",
      ex: [
        { en: "I'm tired after work.", pl: "Po pracy jestem zmęczony." },
        { en: "The team is tired, but the campaign is ready.", pl: "Zespół jest zmęczony, ale kampania jest gotowa." }
      ],
      phrases: [
        { en: "very tired", pl: "bardzo zmęczony" },
        { en: "tired of", pl: "zmęczony czymś, mający dość" },
        { en: "feel tired", pl: "czuć się zmęczonym" }
      ],
      family: ["sleepy - śpiący", "busy - zajęty", "rest - odpoczynek"],
      forms: "more tired - the most tired",
      note: "Mam tego dość to I'm tired of it. Wymowa [tajerd], nie [tired].",
      mnemo: "TAJERD - zmęczony jak TIRE (opona po amerykańsku) po rajdzie."
    },
    {
      id: "w8-easy",
      en: "easy",
      pl: "łatwy",
      say: "izi",
      pos: "przymiotnik",
      part: 2,
      emoji: "😌",
      ex: [
        { en: "This task is easy.", pl: "To zadanie jest łatwe." },
        { en: "Our app makes shopping easy.", pl: "Nasza aplikacja ułatwia zakupy." }
      ],
      phrases: [
        { en: "easy to use", pl: "łatwy w obsłudze" },
        { en: "Take it easy!", pl: "Spokojnie! Wyluzuj!" },
        { en: "easy money", pl: "łatwe pieniądze" }
      ],
      family: ["easily - łatwo", "simple - prosty", "difficult - trudny"],
      forms: "easier - easiest",
      note: "Łatwo (jak coś robisz) to easily: I can do it easily. Ale stały zwrot to Take it easy.",
      mnemo: "IZI - po polsku też mówimy 'izi', gdy coś jest łatwe."
    },
    {
      id: "w8-difficult",
      en: "difficult",
      pl: "trudny",
      say: "dyfykalt",
      pos: "przymiotnik",
      part: 2,
      emoji: "🧗",
      ex: [
        { en: "English is not difficult.", pl: "Angielski nie jest trudny." },
        { en: "We're working on a difficult project.", pl: "Pracujemy nad trudnym projektem." }
      ],
      phrases: [
        { en: "a difficult question", pl: "trudne pytanie" },
        { en: "a difficult customer", pl: "trudny klient" },
        { en: "difficult to find", pl: "trudny do znalezienia" }
      ],
      family: ["hard - trudny, ciężki", "difficulty - trudność", "easy - łatwy"],
      forms: "more difficult - the most difficult",
      note: "Stopień wyższy to more difficult, nie difficulter. W mowie często usłyszysz hard: It's hard.",
      mnemo: "DYFYKALT - sprzęt z DEFEKTEM: trudny do naprawy."
    },
    {
      id: "w8-beautiful",
      en: "beautiful",
      pl: "piękny",
      say: "bjutyful",
      pos: "przymiotnik",
      part: 3,
      emoji: "🌸",
      ex: [
        { en: "Your house is beautiful.", pl: "Masz piękny dom." },
        { en: "We're taking beautiful photos for the new collection.", pl: "Robimy piękne zdjęcia do nowej kolekcji." }
      ],
      phrases: [
        { en: "a beautiful day", pl: "piękny dzień" },
        { en: "beautiful design", pl: "piękny projekt" },
        { en: "really beautiful", pl: "naprawdę piękny" }
      ],
      family: ["beauty - piękno, uroda", "pretty - ładny", "nice - miły, ładny"],
      forms: "more beautiful - the most beautiful",
      note: "Uwaga na pisownię: b-e-a-u. Beautiful to mocne słowo, na zwykłe ładny częściej mówisz nice albo pretty.",
      mnemo: "BJUTYFUL - BUTY FULL: szafa pełna PIĘKNYCH butów."
    },
    {
      id: "w8-important",
      en: "important",
      pl: "ważny",
      say: "ymportent",
      pos: "przymiotnik",
      part: 3,
      emoji: "❗",
      ex: [
        { en: "This meeting is very important.", pl: "To spotkanie jest bardzo ważne." },
        { en: "Customer reviews are important for our shop.", pl: "Opinie klientów są ważne dla naszego sklepu." }
      ],
      phrases: [
        { en: "very important", pl: "bardzo ważny" },
        { en: "important for", pl: "ważny dla" },
        { en: "an important customer", pl: "ważny klient" }
      ],
      family: ["importance - znaczenie", "main - główny", "urgent - pilny"],
      forms: "more important - the most important",
      note: "Ważny jak bilet czy paszport to valid, nie important. Important znaczy istotny.",
      mnemo: "YMPORTENT - IMPORT z Chin to dla szefa najWAŻNIEJSZA sprawa."
    }
  ],
  sentences: [
    { use: "L1", en: "My laptop is old.", pl: "Mój laptop jest stary.", alt: [] },
    { use: "L1", en: "This coffee is very good.", pl: "Ta kawa jest bardzo dobra.", alt: [] },
    { use: "L1", en: "We have a new office.", pl: "Mamy nowe biuro.", alt: [] },
    { use: "L3", en: "I'm busy, I'm writing a report.", pl: "Jestem zajęty, piszę raport.", alt: [] },
    { use: "L3", en: "Kate is working on a difficult task.", pl: "Kate pracuje nad trudnym zadaniem.", alt: [] },
    { use: "L3", en: "Tom is sleeping because he's tired.", pl: "Tom śpi, bo jest zmęczony.", alt: [] },
    { use: "L3", en: "We're having a bad day today.", pl: "Mamy dziś zły dzień.", alt: [] },
    { use: "L5", en: "Are you working on the new project?", pl: "Pracujesz nad nowym projektem?",
      alt: [] },
    { use: "L5", en: "The team is preparing a big campaign.", pl: "Zespół przygotowuje dużą kampanię.",
      alt: ["The team is preparing a large campaign."] },
    { use: "L5", en: "Anna isn't working today because she's tired.", pl: "Anna dziś nie pracuje, bo jest zmęczona.",
      alt: ["Today Anna isn't working because she's tired.", "Anna's not working today because she's tired."] },
    { use: "L5", en: "The website is loading very slowly.", pl: "Strona ładuje się bardzo wolno.",
      alt: ["The site is loading very slowly.", "The page is loading very slowly."] },
    { use: "L5", en: "I'm reading an important email.", pl: "Czytam ważnego maila.",
      alt: ["I'm reading an important e-mail."] }
  ],
  reading: {
    title: "Sesja zdjęciowa",
    text: [
      { en: "Today is a busy day in our online shop.", pl: "Dziś w naszym sklepie internetowym jest dużo pracy." },
      { en: "Our team is taking photos of new clothes.", pl: "Nasz zespół robi zdjęcia nowych ubrań." },
      { en: "Kate is checking the clothes, and Tom is moving the lamps.", pl: "Kate sprawdza ubrania, a Tom przestawia lampy." },
      { en: "The photos are beautiful, but the work is slow.", pl: "Zdjęcia są piękne, ale praca idzie wolno." },
      { en: "Mark, our manager, is calling a big customer.", pl: "Mark, nasz kierownik, dzwoni do dużego klienta." },
      { en: "This order is very important for us.", pl: "To zamówienie jest dla nas bardzo ważne." },
      { en: "Everybody is tired, but we are happy.", pl: "Wszyscy są zmęczeni, ale szczęśliwi." }
    ],
    questions: [
      { q: "What is the team doing today?", qpl: "Co dziś robi zespół?",
        options: ["They're taking photos.", "They're sending orders.", "They're sleeping."], answer: 0 },
      { q: "Who is Mark calling?", qpl: "Do kogo dzwoni Mark?",
        options: ["Kate.", "His mother.", "A big customer."], answer: 2 },
      { q: "How does the team feel?", qpl: "Jak czuje się zespół?",
        options: ["Sad and tired.", "Tired, but happy.", "Happy and not tired."], answer: 1 }
    ]
  },
  dialog: {
    intro: "Pracujesz z domu, a kolega z biura dzwoni zapytać, co słychać.",
    turns: [
      { bot: "Hi! Are you busy?", botpl: "Cześć! Jesteś zajęty?",
        options: ["Yes, I'm writing a report.", "Yes, I writing a report.", "Yes, I'm write a report."], answer: 0,
        hint: "I'm writing..." },
      { bot: "Oh! Is it a difficult report?", botpl: "O! Trudny ten raport?",
        options: ["No, is easy, but is long.", "No, it's easy, but it's long.", "No, it's easily, but it's long."], answer: 1,
        hint: "No, it's easy..." },
      { bot: "And what is Kate doing?", botpl: "A co robi Kate?",
        options: ["She talks to a customer now.", "She is talk to a customer now.", "She's talking to a customer now."], answer: 2,
        hint: "She's talking..." },
      { bot: "And Tom? Is he working today?", botpl: "A Tom? Pracuje dzisiaj?",
        options: ["No, he isn't. He's very tired.", "No, he doesn't. He's very tired.", "No, he not. He's very tired."], answer: 0,
        hint: "No, he isn't..." },
      { bot: "OK. How is the new website?", botpl: "Dobra. Jak tam nowa strona?",
        options: ["She's beautiful, but slow.", "It's beautiful, but slowly.", "It's beautiful, but slow."], answer: 2,
        hint: "It's beautiful, but..." },
      { bot: "Good. I'm sending you the new photos now.", botpl: "Dobra. Wysyłam ci teraz nowe zdjęcia.",
        options: ["Great, I check my inbox now.", "Great, I'm checking my inbox now.", "Great, I am check my inbox now."], answer: 1,
        hint: "I'm checking..." }
    ]
  }
});
