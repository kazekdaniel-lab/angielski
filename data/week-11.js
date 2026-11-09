window.WEEKS = window.WEEKS || [];
window.WEEKS.push({
  week: 11,
  title: "Czas wolny",
  grammar: {
    title: "Past Simple (czasowniki nieregularne)",
    explain: [
      "Część czasowników w przeszłości nie dostaje -ed, tylko zmienia formę: go - went, buy - bought, swim - swam. To czasowniki nieregularne. Nie ma na nie reguły, trzeba się ich nauczyć na pamięć.",
      "Forma przeszła jest taka sama dla wszystkich osób: I went, she went, they went.",
      "Przeczenia i pytania robisz tak samo jak przy regularnych: didn't / Did + zwykła forma. I didn't go. Did you see the film? Po did nigdy nie dajesz formy przeszłej, więc nie mów Did you went?",
      "Na start najważniejsze: go - went, have - had, do - did, see - saw, make - made, get - got, eat - ate, drink - drank, read - read (czytasz [red]), write - wrote, buy - bought, sell - sold, send - sent."
    ],
    table: [
      ["go", "went", "didn't go"],
      ["have", "had", "didn't have"],
      ["see", "saw", "didn't see"],
      ["buy", "bought", "didn't buy"],
      ["swim", "swam", "didn't swim"],
      ["eat", "ate", "didn't eat"],
      ["send", "sent", "didn't send"],
      ["read", "read [red]", "didn't read"]
    ],
    examples: [
      { en: "We went to a concert on Saturday.", pl: "W sobotę poszliśmy na koncert." },
      { en: "She bought a new book online.", pl: "Kupiła nową książkę przez internet." },
      { en: "Did you see the film? No, I didn't.", pl: "Widziałeś ten film? Nie." }
    ],
    exercises: [
      { type: "choice", q: "Yesterday I ___ to the gym.", options: ["go", "went", "goed"], answer: 1,
        pl: "Wczoraj poszedłem na siłownię.", why: "Go jest nieregularne. Przeszła forma to went." },
      { type: "gap", q: "We ___ (have) a party last weekend.", answer: ["had"],
        pl: "W zeszły weekend zrobiliśmy imprezę.", why: "Have w przeszłości to had." },
      { type: "choice", q: "Did you ___ the new film?", options: ["saw", "see", "sees"], answer: 1,
        pl: "Widziałeś ten nowy film?", why: "Po did zawsze zwykła forma: see, nie saw." },
      { type: "gap", q: "She ___ (not buy) the tickets online.", answer: ["didn't buy", "did not buy"],
        pl: "Nie kupiła biletów przez internet.", why: "Przeczenie: didn't + zwykła forma. Nie mówimy didn't bought." },
      { type: "choice", q: "Last summer Tom ___ in the sea every day.", options: ["swimmed", "swim", "swam"], answer: 2,
        pl: "Zeszłego lata Tom codziennie pływał w morzu.", why: "Swim jest nieregularne: swam, nie swimmed." },
      { type: "gap", q: "I ___ (read) a great book about marketing last week.", answer: ["read"],
        pl: "W zeszłym tygodniu przeczytałem świetną książkę o marketingu.", why: "Read w przeszłości pisze się tak samo, ale czyta się [red]." },
      { type: "choice", q: "We ___ a great film on Friday.", options: ["saw", "seed", "see"], answer: 0,
        pl: "W piątek obejrzeliśmy świetny film.", why: "See jest nieregularne: saw." },
      { type: "gap", q: "Mark ___ (send) the invoice last Monday.", answer: ["sent"],
        pl: "Mark wysłał fakturę w zeszły poniedziałek.", why: "Send jest nieregularne: sent." },
      { type: "choice", q: "___ you cook dinner yesterday?", options: ["Were", "Did", "Do"], answer: 1,
        pl: "Gotowałeś wczoraj kolację?", why: "Pytanie o czynność w przeszłości: Did + osoba + zwykły czasownik." },
      { type: "gap", q: "Last week we ___ (sell) 200 tickets for the concert.", answer: ["sold"],
        pl: "W zeszłym tygodniu sprzedaliśmy 200 biletów na koncert.", why: "Sell jest nieregularne: sold." }
    ]
  },
  words: [
    {
      id: "w11-hobby",
      en: "hobby",
      pl: "hobby",
      say: "hobi",
      pos: "rzeczownik",
      part: 1,
      emoji: "🎨",
      ex: [
        { en: "Cooking is my new hobby.", pl: "Gotowanie to moje nowe hobby." },
        { en: "She turned her hobby into a business.", pl: "Zamieniła swoje hobby w biznes." }
      ],
      phrases: [
        { en: "my hobby is", pl: "moje hobby to" },
        { en: "a new hobby", pl: "nowe hobby" },
        { en: "take up a hobby", pl: "zacząć nowe hobby" }
      ],
      family: ["free time - czas wolny", "interest - zainteresowanie", "passion - pasja"],
      forms: "l.mn. hobbies",
      note: "Liczba mnoga: hobbies. Zamiast What is your hobby? częściej pytamy: What do you do in your free time?",
      mnemo: "HOBI - nawet HOBBIT ma hobby: 6 posiłków dziennie."
    },
    {
      id: "w11-film",
      en: "film",
      pl: "film",
      say: "fylm",
      pos: "rzeczownik",
      part: 1,
      emoji: "🎬",
      ex: [
        { en: "We saw a great film yesterday.", pl: "Wczoraj obejrzeliśmy świetny film." },
        { en: "We made a short film about our brand.", pl: "Nakręciliśmy krótki film o naszej marce." }
      ],
      phrases: [
        { en: "watch a film", pl: "obejrzeć film" },
        { en: "a short film", pl: "krótki film" },
        { en: "film festival", pl: "festiwal filmowy" }
      ],
      family: ["movie - film (USA)", "cinema - kino", "actor - aktor"],
      forms: "l.mn. films; filmed (przeszły od film = filmować)",
      note: "W USA częściej mówi się movie, a kino to movie theater. Film to też czasownik: filmować, np. We filmed an ad.",
      mnemo: "FYLM - mówisz jak po polsku, tylko jakbyś miał popcorn w buzi."
    },
    {
      id: "w11-music",
      en: "music",
      pl: "muzyka",
      say: "mjuzyk",
      pos: "rzeczownik",
      part: 1,
      emoji: "🎵",
      ex: [
        { en: "I listen to music at work.", pl: "W pracy słucham muzyki." },
        { en: "We used new music in our ad.", pl: "W naszej reklamie użyliśmy nowej muzyki." }
      ],
      phrases: [
        { en: "listen to music", pl: "słuchać muzyki" },
        { en: "pop music", pl: "muzyka pop" },
        { en: "music festival", pl: "festiwal muzyczny" }
      ],
      family: ["song - piosenka", "musician - muzyk", "band - zespół"],
      forms: "niepoliczalny: some music",
      note: "Słuchać muzyki to listen TO music. Nie mówimy a music ani musics.",
      mnemo: "MJUZYK - MUZYK gra MUZYKĘ, a ty dodajesz tylko J."
    },
    {
      id: "w11-book",
      en: "book",
      pl: "książka; rezerwować",
      say: "buk",
      pos: "rzeczownik",
      part: 1,
      emoji: "📚",
      ex: [
        { en: "I read a good book last week.", pl: "W zeszłym tygodniu przeczytałem dobrą książkę." },
        { en: "We booked a room for the meeting.", pl: "Zarezerwowaliśmy salę na spotkanie." }
      ],
      phrases: [
        { en: "read a book", pl: "czytać książkę" },
        { en: "book a table", pl: "zarezerwować stolik" },
        { en: "e-book", pl: "e-book" }
      ],
      family: ["booking - rezerwacja", "bookshop - księgarnia", "library - biblioteka", "page - strona"],
      forms: "l.mn. books; booked (przeszły od book = rezerwować)",
      note: "Book to też czasownik: rezerwować. I booked a hotel. = Zarezerwowałem hotel.",
      mnemo: "BUK - książki robi się z drzewa, na przykład z BUKA."
    },
    {
      id: "w11-sport",
      en: "sport",
      pl: "sport",
      say: "sport",
      pos: "rzeczownik",
      part: 1,
      emoji: "⚽",
      ex: [
        { en: "What sports do you like?", pl: "Jakie sporty lubisz?" },
        { en: "We sell sports clothes online.", pl: "Sprzedajemy odzież sportową przez internet." }
      ],
      phrases: [
        { en: "do sport", pl: "uprawiać sport" },
        { en: "sports shop", pl: "sklep sportowy" },
        { en: "team sport", pl: "sport drużynowy" }
      ],
      family: ["soccer - piłka nożna (USA)", "player - zawodnik", "gym - siłownia"],
      forms: "l.mn. sports",
      note: "W USA mówi się zwykle sports: I like sports. Uprawiać sport to do sport albo play sports, nie make sport.",
      mnemo: "SPORT - brzmi jak po polsku, więc zero wysiłku. Prawdziwy sport to dopiero wymowa th."
    },
    {
      id: "w11-game",
      en: "game",
      pl: "gra; mecz",
      say: "gejm",
      pos: "rzeczownik",
      part: 1,
      emoji: "🎮",
      ex: [
        { en: "We played a game after work.", pl: "Po pracy zagraliśmy w grę." },
        { en: "Our online game had a lot of players.", pl: "Nasza gra online miała dużo graczy." }
      ],
      phrases: [
        { en: "play a game", pl: "grać w grę" },
        { en: "computer game", pl: "gra komputerowa" },
        { en: "basketball game", pl: "mecz koszykówki" }
      ],
      family: ["player - gracz", "play - grać", "win - wygrać", "match - mecz"],
      forms: "l.mn. games",
      note: "Grać w grę to play a game, bez in. W USA mecz to często game, np. a basketball game.",
      mnemo: "GEJM - jeszcze jedna GEJMa i nagle jest 3 w nocy."
    },
    {
      id: "w11-party",
      en: "party",
      pl: "impreza; przyjęcie",
      say: "parti",
      pos: "rzeczownik",
      part: 1,
      emoji: "🎉",
      ex: [
        { en: "The party was great.", pl: "Impreza była świetna." },
        { en: "We had a party for our customers.", pl: "Zrobiliśmy imprezę dla naszych klientów." }
      ],
      phrases: [
        { en: "birthday party", pl: "przyjęcie urodzinowe" },
        { en: "have a party", pl: "zrobić imprezę" },
        { en: "office party", pl: "impreza firmowa" }
      ],
      family: ["guest - gość", "celebrate - świętować", "invite - zapraszać"],
      forms: "l.mn. parties",
      note: "Zrobić imprezę to have a party, nie make a party. Party to też partia polityczna.",
      mnemo: "PARTI - po imprezie w poniedziałek wszystko w pracy PARTOLISZ."
    },
    {
      id: "w11-concert",
      en: "concert",
      pl: "koncert",
      say: "konsert",
      pos: "rzeczownik",
      part: 2,
      emoji: "🎸",
      ex: [
        { en: "We went to a concert on Friday.", pl: "W piątek poszliśmy na koncert." },
        { en: "Our company sponsored a big concert.", pl: "Nasza firma była sponsorem dużego koncertu." }
      ],
      phrases: [
        { en: "go to a concert", pl: "iść na koncert" },
        { en: "rock concert", pl: "koncert rockowy" },
        { en: "concert ticket", pl: "bilet na koncert" }
      ],
      family: ["band - zespół", "stage - scena", "music - muzyka", "festival - festiwal"],
      forms: "l.mn. concerts",
      note: "Na koncercie to AT a concert, nie ON a concert. W środku słowa jest dźwięk s: [konsert].",
      mnemo: "KONSERT - na koncercie tyle ludzi, że czujesz się jak w KONSERwie."
    },
    {
      id: "w11-gym",
      en: "gym",
      pl: "siłownia",
      say: "dżym",
      pos: "rzeczownik",
      part: 2,
      emoji: "🏋️",
      ex: [
        { en: "I go to the gym every day.", pl: "Codziennie chodzę na siłownię." },
        { en: "Our gym clothes sold very well.", pl: "Nasze ubrania na siłownię świetnie się sprzedały." }
      ],
      phrases: [
        { en: "go to the gym", pl: "chodzić na siłownię" },
        { en: "at the gym", pl: "na siłowni" },
        { en: "gym bag", pl: "torba na siłownię" }
      ],
      family: ["workout - trening", "fitness - fitness", "sport - sport"],
      forms: "l.mn. gyms",
      note: "Na siłownię to TO the gym, a na siłowni to AT the gym. Gym czytamy z miękkim dż, nie z twardym g.",
      mnemo: "DŻYM - po siłowni jesteś miękki jak DŻEM."
    },
    {
      id: "w11-swim",
      en: "swim",
      pl: "pływać",
      say: "słym",
      pos: "czasownik",
      part: 2,
      emoji: "🏊",
      ex: [
        { en: "I swam in the sea yesterday.", pl: "Wczoraj pływałem w morzu." },
        { en: "Our manager swims every morning before work.", pl: "Nasz menedżer codziennie rano przed pracą pływa." }
      ],
      phrases: [
        { en: "go swimming", pl: "iść popływać" },
        { en: "swim in the sea", pl: "pływać w morzu" },
        { en: "swimming pool", pl: "basen" }
      ],
      family: ["swimmer - pływak", "pool - basen", "sea - morze", "beach - plaża"],
      forms: "swam (przeszły); he swims",
      note: "Swim jest nieregularne: przeszła forma to swam, nie swimmed. Iść popływać to go swimming.",
      mnemo: "SŁYM - pływasz jak SUM, tylko szybciej."
    },
    {
      id: "w11-dance",
      en: "dance",
      pl: "tańczyć; taniec",
      say: "dens",
      pos: "czasownik",
      part: 2,
      emoji: "💃",
      ex: [
        { en: "We danced at the party.", pl: "Tańczyliśmy na imprezie." },
        { en: "Dance videos get a lot of views.", pl: "Filmiki z tańcem mają dużo wyświetleń." }
      ],
      phrases: [
        { en: "go dancing", pl: "iść potańczyć" },
        { en: "dance class", pl: "lekcja tańca" },
        { en: "dance music", pl: "muzyka taneczna" }
      ],
      family: ["dancer - tancerz", "music - muzyka", "party - impreza"],
      forms: "danced (przeszły, regularny); he dances",
      note: "Dance jest regularne: danced. W amerykańskim mówimy [dens], w brytyjskim [dans].",
      mnemo: "DENS - tańczysz do rana, aż sił zostaje na DENku."
    },
    {
      id: "w11-cook",
      en: "cook",
      pl: "gotować; kucharz",
      say: "kuk",
      pos: "czasownik",
      part: 2,
      emoji: "🍳",
      ex: [
        { en: "I cooked dinner for my family.", pl: "Ugotowałem kolację dla rodziny." },
        { en: "Our cooking videos are very popular.", pl: "Nasze filmiki z gotowania są bardzo popularne." }
      ],
      phrases: [
        { en: "cook dinner", pl: "gotować kolację" },
        { en: "a good cook", pl: "dobry kucharz" },
        { en: "cooking class", pl: "kurs gotowania" }
      ],
      family: ["chef - szef kuchni", "kitchen - kuchnia", "recipe - przepis", "cooker - kuchenka"],
      forms: "cooked (przeszły, regularny); he cooks",
      note: "Cook to też kucharz. Uwaga: cooker to kuchenka, a nie kucharz!",
      mnemo: "KUK - KUKułka w zegarze kuka, że obiad gotowy."
    },
    {
      id: "w11-relax",
      en: "relax",
      pl: "odpoczywać; relaksować się",
      say: "rylaks",
      pos: "czasownik",
      part: 2,
      emoji: "😌",
      ex: [
        { en: "I relaxed at home on Sunday.", pl: "W niedzielę odpoczywałem w domu." },
        { en: "Our customers can relax and shop online.", pl: "Nasi klienci mogą odpocząć i zrobić zakupy online." }
      ],
      phrases: [
        { en: "relax at home", pl: "odpoczywać w domu" },
        { en: "just relax", pl: "wyluzuj" },
        { en: "relax on the beach", pl: "odpoczywać na plaży" }
      ],
      family: ["rest - odpoczynek", "relaxed - zrelaksowany", "calm - spokojny"],
      forms: "relaxed (przeszły, regularny); he relaxes",
      note: "Relax nie potrzebuje się: I relax, nie I relax myself. Akcent pada na drugą sylabę: re-LAX.",
      mnemo: "RYLAKS - leżysz jak RYba na plaży, pełny reLAKS."
    },
    {
      id: "w11-free-time",
      en: "free time",
      pl: "czas wolny",
      say: "fri tajm",
      pos: "rzeczownik",
      part: 3,
      emoji: "🛋️",
      ex: [
        { en: "In my free time I read.", pl: "W wolnym czasie czytam." },
        { en: "I made a podcast in my free time.", pl: "W wolnym czasie nagrałem podcast." }
      ],
      phrases: [
        { en: "in my free time", pl: "w wolnym czasie" },
        { en: "a lot of free time", pl: "dużo wolnego czasu" },
        { en: "no free time", pl: "zero wolnego czasu" }
      ],
      family: ["hobby - hobby", "weekend - weekend", "vacation - urlop (USA)"],
      forms: "",
      note: "Mówimy IN my free time, nie ON my free time. Free znaczy też darmowy: free delivery = darmowa dostawa.",
      mnemo: "FRI TAJM - w wolnym czasie jesz FRYTKI i masz TAJM-aut od pracy."
    },
    {
      id: "w11-podcast",
      en: "podcast",
      pl: "podcast",
      say: "podkest",
      pos: "rzeczownik",
      part: 3,
      emoji: "🎙️",
      ex: [
        { en: "I listened to a podcast on the train.", pl: "W pociągu słuchałem podcastu." },
        { en: "We started a podcast about e-commerce.", pl: "Założyliśmy podcast o e-commerce." }
      ],
      phrases: [
        { en: "listen to a podcast", pl: "słuchać podcastu" },
        { en: "start a podcast", pl: "założyć podcast" },
        { en: "podcast episode", pl: "odcinek podcastu" }
      ],
      family: ["episode - odcinek", "host - prowadzący", "guest - gość", "listener - słuchacz"],
      forms: "l.mn. podcasts",
      note: "Słuchamy podcastu: listen TO a podcast, nie listen a podcast. Po amerykańsku końcówka brzmi [kest], nie [kast].",
      mnemo: "PODKEST - słuchasz go POD KĘS kanapki w przerwie na lunch."
    }
  ],
  sentences: [
    { use: "L1", en: "My hobby is music.", pl: "Moje hobby to muzyka.", alt: [] },
    { use: "L1", en: "This book is very good.", pl: "Ta książka jest bardzo dobra.", alt: [] },
    { use: "L1", en: "The party was great.", pl: "Impreza była świetna.", alt: [] },
    { use: "L3", en: "We went to a concert.", pl: "Poszliśmy na koncert.", alt: [] },
    { use: "L3", en: "She swam in the sea.", pl: "Pływała w morzu.", alt: [] },
    { use: "L3", en: "I went to the gym yesterday.", pl: "Wczoraj poszedłem na siłownię.", alt: ["Yesterday I went to the gym."] },
    { use: "L3", en: "They didn't dance at the party.", pl: "Nie tańczyli na imprezie.", alt: [] },
    { use: "L5", en: "I saw a great film yesterday.", pl: "Wczoraj obejrzałem świetny film.", alt: ["Yesterday I saw a great film.", "I watched a great film yesterday.", "Yesterday I watched a great film.", "I saw a great movie yesterday.", "I watched a great movie yesterday."] },
    { use: "L5", en: "Did you buy the concert tickets?", pl: "Kupiłeś bilety na koncert?", alt: ["Did you buy tickets for the concert?", "Did you buy the tickets for the concert?", "Did you buy concert tickets?"] },
    { use: "L5", en: "I listened to podcasts in my free time.", pl: "W wolnym czasie słuchałem podcastów.", alt: ["In my free time I listened to podcasts."] },
    { use: "L5", en: "We didn't go to the party.", pl: "Nie poszliśmy na imprezę.", alt: [] },
    { use: "L5", en: "She wrote a book about marketing.", pl: "Ona napisała książkę o marketingu.", alt: ["She wrote a book on marketing."] }
  ],
  reading: {
    title: "Weekend Anny",
    text: [
      { en: "Anna is a manager, and she doesn't have a lot of free time.", pl: "Anna jest menedżerką i nie ma dużo wolnego czasu." },
      { en: "But last weekend was different.", pl: "Ale zeszły weekend był inny." },
      { en: "On Saturday morning she went to the gym and swam for an hour.", pl: "W sobotę rano poszła na siłownię i przez godzinę pływała." },
      { en: "In the afternoon she cooked lunch for her friends.", pl: "Po południu ugotowała obiad dla znajomych." },
      { en: "In the evening they went to a concert.", pl: "Wieczorem poszli na koncert." },
      { en: "On Sunday she relaxed at home and listened to a podcast about marketing.", pl: "W niedzielę odpoczywała w domu i słuchała podcastu o marketingu." },
      { en: "It was a great weekend.", pl: "To był świetny weekend." }
    ],
    questions: [
      { q: "What did Anna do on Saturday morning?", qpl: "Co Anna robiła w sobotę rano?", options: ["She went to the gym.", "She went to a concert.", "She cooked lunch."], answer: 0 },
      { q: "Who did Anna cook for?", qpl: "Dla kogo Anna gotowała?", options: ["For her boss.", "For her friends.", "For her customers."], answer: 1 },
      { q: "What was the podcast about?", qpl: "O czym był podcast?", options: ["Music.", "Sport.", "Marketing."], answer: 2 }
    ]
  },
  dialog: {
    intro: "W poniedziałek rano kolega z biura pyta cię o weekend.",
    turns: [
      { bot: "Hi! How was your weekend?", botpl: "Cześć! Jak minął weekend?",
        options: ["It was great, thanks!", "It were great, thanks!", "It is great, thanks!"], answer: 0,
        hint: "It was..." },
      { bot: "What did you do on Saturday?", botpl: "Co robiłeś w sobotę?",
        options: ["I goed to a concert.", "I went to a concert.", "I go to a concert."], answer: 1,
        hint: "I went to..." },
      { bot: "Did you like the music?", botpl: "Podobała ci się muzyka?",
        options: ["Yes, it liked me a lot.", "Yes, I did liked it.", "Yes, I liked it a lot."], answer: 2,
        hint: "Yes, I liked..." },
      { bot: "And what did you do on Sunday?", botpl: "A co robiłeś w niedzielę?",
        options: ["I relaxed myself at home and cooked lunch.", "I relaxed at home and cooked lunch.", "I relax at home and cook lunch yesterday."], answer: 1,
        hint: "I relaxed..." },
      { bot: "Did you go to the gym?", botpl: "Byłeś na siłowni?",
        options: ["No, I didn't. I went swimming.", "No, I didn't went. I swimmed.", "No, I wasn't go. I went swimming."], answer: 0,
        hint: "No, I didn't..." },
      { bot: "Cool! Did you listen to our new podcast?", botpl: "Super! Słuchałeś naszego nowego podcastu?",
        options: ["Yes, I listened it on Sunday.", "Yes, I listened to it on Sunday.", "Yes, I heard to it on Sunday."], answer: 1,
        hint: "Yes, I listened to..." }
    ]
  }
});
