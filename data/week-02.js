window.WEEKS = window.WEEKS || [];
window.WEEKS.push({
  week: 2,
  title: "Rodzina i ludzie",
  grammar: {
    title: "Zaimki i my / your / his / her",
    explain: [
      "Zaimki to krótkie słowa zamiast imienia: I (ja), you (ty, wy), he (on), she (ona), it (ono, to), we (my), they (oni, one). Po angielsku nie wolno ich pomijać: nie „Is my boss”, tylko „She is my boss”.",
      "Żeby powiedzieć, czyje coś jest, używasz: my (mój), your (twój, wasz), his (jego), her (jej), its (jego, jej - o rzeczy), our (nasz), their (ich). Forma się nie zmienia: my brother, my sister, my friends.",
      "Przy his i her liczy się właściciel, a nie rzecz. Tom i jego siostra = Tom and his sister. Anna i jej brat = Anna and her brother.",
      "Po angielsku nie ma słowa „swój”. Mówisz po prostu, czyj: Anna is with her husband (Anna jest ze swoim mężem)."
    ],
    table: [
      ["I", "my", "mój, moja"],
      ["you", "your", "twój, wasz"],
      ["he", "his", "jego"],
      ["she", "her", "jej"],
      ["it", "its", "jego, jej (o rzeczy)"],
      ["we", "our", "nasz"],
      ["they", "their", "ich"]
    ],
    examples: [
      { en: "This is my sister, Kate.", pl: "To moja siostra, Kate." },
      { en: "He is my boss, and she is his wife.", pl: "On jest moim szefem, a ona jego żoną." },
      { en: "Anna is here with her husband.", pl: "Anna jest tu ze swoim mężem." }
    ],
    exercises: [
      { type: "choice", q: "This is Tom. ___ is my brother.", options: ["He", "She", "It"], answer: 0,
        pl: "To jest Tom. Jest moim bratem.", why: "Tom to mężczyzna, więc he. Po angielsku zaimka nie pomijamy." },
      { type: "gap", q: "Kate is my colleague. ___ is in the office today.", answer: ["she"],
        pl: "Kate to moja koleżanka z pracy. Jest dzisiaj w biurze.", why: "Kate to kobieta, więc she. Po polsku wystarczy „jest”, po angielsku musi być zaimek." },
      { type: "choice", q: "Mark is here with ___ wife.", options: ["her", "his", "their"], answer: 1,
        pl: "Mark jest tu ze swoją żoną.", why: "Liczy się właściciel: Mark to on, więc his, choć żona jest kobietą." },
      { type: "gap", q: "Anna and ___ husband are in Paris.", answer: ["her"],
        pl: "Anna i jej mąż są w Paryżu.", why: "Anna to ona, więc her (jej)." },
      { type: "choice", q: "Are you and ___ team ready?", options: ["you're", "you", "your"], answer: 2,
        pl: "Ty i twój zespół jesteście gotowi?", why: "Your to twój. You're to skrót od you are: brzmi podobnie, ale znaczy co innego." },
      { type: "gap", q: "We are a small shop. ___ customers are happy.", answer: ["our"],
        pl: "Jesteśmy małym sklepem. Nasi klienci są zadowoleni.", why: "We to my, a our to nasz." },
      { type: "choice", q: "My parents are in Spain. ___ are on holiday.", options: ["They", "Their", "There"], answer: 0,
        pl: "Moi rodzice są w Hiszpanii. Są na wakacjach.", why: "Przed are potrzebny jest zaimek they (oni). Their to ich, there to tam." },
      { type: "gap", q: "Kate is married. Mark is her ___.", answer: ["husband"],
        pl: "Kate jest mężatką. Mark to jej mąż.", why: "Mąż to husband, żona to wife." },
      { type: "choice", q: "The customers are happy with ___ orders.", options: ["his", "their", "there"], answer: 1,
        pl: "Klienci są zadowoleni ze swoich zamówień.", why: "Klienci to they, więc their. Polskie „swój” zależy od osoby: my, your, his, her, our, their." },
      { type: "gap", q: "Tom, is this ___ phone?", answer: ["your"],
        pl: "Tom, to twój telefon?", why: "Mówisz do Toma, więc your (twój)." }
    ]
  },
  words: [
    {
      id: "w2-mother",
      en: "mother",
      pl: "matka, mama",
      say: "mader",
      pos: "rzeczownik",
      part: 1,
      emoji: "👩",
      ex: [
        { en: "This is my mother, Anna.", pl: "To moja mama, Anna." },
        { en: "My mother is our best customer.", pl: "Moja mama to nasza najlepsza klientka." }
      ],
      phrases: [
        { en: "my mother", pl: "moja mama" },
        { en: "mother and father", pl: "mama i tata" },
        { en: "Mother's Day", pl: "Dzień Matki" }
      ],
      family: ["mom - mama (potocznie, USA)", "father - ojciec", "parents - rodzice", "grandmother - babcia"],
      forms: "",
      note: "W USA na co dzień mówi się mom. Mother brzmi poważniej, jak „matka”.",
      mnemo: "MADER - mama zawsze jest MĄDRZEJSZA, sprawdź."
    },
    {
      id: "w2-father",
      en: "father",
      pl: "ojciec, tata",
      say: "fader",
      pos: "rzeczownik",
      part: 1,
      emoji: "👨",
      ex: [
        { en: "His father is a doctor.", pl: "Jego tata jest lekarzem." },
        { en: "Her father is the big boss here.", pl: "Jej tata jest tu wielkim szefem." }
      ],
      phrases: [
        { en: "my father", pl: "mój tata" },
        { en: "father and son", pl: "ojciec i syn" },
        { en: "Father's Day", pl: "Dzień Ojca" }
      ],
      family: ["dad - tata (potocznie)", "mother - matka", "parents - rodzice", "grandfather - dziadek"],
      forms: "",
      note: "Na co dzień mówimy dad (tata). Father brzmi poważniej, jak „ojciec”. Th w środku jest dźwięczne: fader.",
      mnemo: "FADER - tata ścisza cały dom jak FADER w mikserze DJ-a."
    },
    {
      id: "w2-brother",
      en: "brother",
      pl: "brat",
      say: "brader",
      pos: "rzeczownik",
      part: 1,
      emoji: "👦",
      ex: [
        { en: "My brother is twenty.", pl: "Mój brat ma 20 lat." },
        { en: "His brother is our new partner.", pl: "Jego brat jest naszym nowym wspólnikiem." }
      ],
      phrases: [
        { en: "older brother", pl: "starszy brat" },
        { en: "younger brother", pl: "młodszy brat" },
        { en: "brothers and sisters", pl: "rodzeństwo" }
      ],
      family: ["sister - siostra", "siblings - rodzeństwo", "bro - brachu (potocznie)"],
      forms: "",
      note: "Wiek podajemy z be: My brother is twenty (mój brat MA 20 lat). Nie mówimy has twenty.",
      mnemo: "BRADER - „Siema, brader!” Polacy już tak mówią do kumpli."
    },
    {
      id: "w2-sister",
      en: "sister",
      pl: "siostra",
      say: "syster",
      pos: "rzeczownik",
      part: 1,
      emoji: "👧",
      ex: [
        { en: "My sister is in London.", pl: "Moja siostra jest w Londynie." },
        { en: "Her sister is a social media manager.", pl: "Jej siostra jest social media managerką." }
      ],
      phrases: [
        { en: "big sister", pl: "starsza siostra" },
        { en: "little sister", pl: "młodsza siostra" },
        { en: "sister company", pl: "spółka siostrzana" }
      ],
      family: ["brother - brat", "siblings - rodzeństwo", "sister-in-law - szwagierka, bratowa"],
      forms: "",
      note: "Big sister i little sister to starsza i młodsza siostra. Nie chodzi o wzrost.",
      mnemo: "SYSTER - siostra ma SYSTEM na wszystko, nawet na ciebie."
    },
    {
      id: "w2-wife",
      en: "wife",
      pl: "żona",
      say: "łajf",
      pos: "rzeczownik",
      part: 1,
      emoji: "💍",
      ex: [
        { en: "This is my wife, Kate.", pl: "To moja żona, Kate." },
        { en: "His wife is the owner of the shop.", pl: "Jego żona jest właścicielką sklepu." }
      ],
      phrases: [
        { en: "my wife", pl: "moja żona" },
        { en: "husband and wife", pl: "mąż i żona" },
        { en: "ex-wife", pl: "była żona" }
      ],
      family: ["husband - mąż", "married - żonaty, zamężna", "wedding - ślub"],
      forms: "l.mn. wives",
      note: "Liczba mnoga jest nieregularna: one wife, two wives. F zmienia się w v.",
      mnemo: "ŁAJF - bez żony i bez WiFi nie ma LAJFU."
    },
    {
      id: "w2-husband",
      en: "husband",
      pl: "mąż",
      say: "hazbend",
      pos: "rzeczownik",
      part: 1,
      emoji: "🤵",
      ex: [
        { en: "Her husband is a teacher.", pl: "Jej mąż jest nauczycielem." },
        { en: "Her husband is her business partner.", pl: "Jej mąż jest jej wspólnikiem." }
      ],
      phrases: [
        { en: "my husband", pl: "mój mąż" },
        { en: "ex-husband", pl: "były mąż" },
        { en: "husband and wife", pl: "mąż i żona" }
      ],
      family: ["wife - żona", "married - żonaty, zamężna", "couple - para"],
      forms: "",
      note: "S w środku czytamy jak z: hazbend. Nie myl z housewife, czyli gospodynią domową.",
      mnemo: "HAZBEND - ślub to HAZARD, a mąż to twoja wygrana."
    },
    {
      id: "w2-child",
      en: "child",
      pl: "dziecko",
      say: "czajld",
      pos: "rzeczownik",
      part: 1,
      emoji: "🧒",
      ex: [
        { en: "Their child is five.", pl: "Ich dziecko ma 5 lat." },
        { en: "Her child is the face of the campaign.", pl: "Jej dziecko jest twarzą kampanii." }
      ],
      phrases: [
        { en: "only child", pl: "jedynak, jedynaczka" },
        { en: "small child", pl: "małe dziecko" },
        { en: "children's clothes", pl: "ubrania dziecięce" }
      ],
      family: ["kid - dzieciak (potocznie)", "baby - niemowlę", "son - syn", "daughter - córka"],
      forms: "l.mn. children",
      note: "Liczba mnoga jest nieregularna: one child, two children, nie childs. Na co dzień częściej usłyszysz kid i kids.",
      mnemo: "CZAJLD - dziecko zawsze CZAI się na twój telefon."
    },
    {
      id: "w2-friend",
      en: "friend",
      pl: "przyjaciel, kolega",
      say: "frend",
      pos: "rzeczownik",
      part: 2,
      emoji: "🤝",
      ex: [
        { en: "Tom is my best friend.", pl: "Tom jest moim najlepszym przyjacielem." },
        { en: "Her friend is an influencer.", pl: "Jej koleżanka jest influencerką." }
      ],
      phrases: [
        { en: "best friend", pl: "najlepszy przyjaciel" },
        { en: "friends and family", pl: "rodzina i znajomi" },
        { en: "a friend from work", pl: "kolega z pracy" }
      ],
      family: ["friendly - przyjazny, miły", "friendship - przyjaźń", "girlfriend - dziewczyna (partnerka)", "boyfriend - chłopak (partner)"],
      forms: "",
      note: "Friend to szerokie słowo: przyjaciel, kolega, znajomy. Ale girlfriend to zwykle dziewczyna, z którą się spotykasz, a nie koleżanka.",
      mnemo: "FREND - z przyjacielem zawsze jest FRAJDA."
    },
    {
      id: "w2-boss",
      en: "boss",
      pl: "szef, szefowa",
      say: "bos",
      pos: "rzeczownik",
      part: 2,
      emoji: "👔",
      ex: [
        { en: "She is my boss.", pl: "Ona jest moją szefową." },
        { en: "The boss is in a meeting.", pl: "Szef jest na spotkaniu." }
      ],
      phrases: [
        { en: "my boss", pl: "mój szef" },
        { en: "the big boss", pl: "wielki szef, prezes" },
        { en: "be your own boss", pl: "być sam sobie szefem" }
      ],
      family: ["manager - kierownik, menedżer", "employee - pracownik", "team - zespół"],
      forms: "",
      note: "Boss pasuje do kobiety i do mężczyzny. W oficjalnym mailu częściej napiszesz manager.",
      mnemo: "BOS - szef może chodzić BOSO po biurze, ty nie."
    },
    {
      id: "w2-customer",
      en: "customer",
      pl: "klient, klientka",
      say: "kastemer",
      pos: "rzeczownik",
      part: 2,
      emoji: "🛒",
      ex: [
        { en: "She is a new customer.", pl: "Ona jest nową klientką." },
        { en: "The customer is always right.", pl: "Klient ma zawsze rację." }
      ],
      phrases: [
        { en: "new customer", pl: "nowy klient" },
        { en: "customer service", pl: "obsługa klienta" },
        { en: "happy customers", pl: "zadowoleni klienci" }
      ],
      family: ["client - klient (usług, np. agencji)", "buyer - kupujący", "shop - sklep"],
      forms: "",
      note: "Customer kupuje produkty w sklepie. Client korzysta z usług, np. agencji marketingowej albo prawnika.",
      mnemo: "KASTEMER - klient przychodzi z KASĄ, a wychodzi bez."
    },
    {
      id: "w2-team",
      en: "team",
      pl: "zespół",
      say: "tim",
      pos: "rzeczownik",
      part: 2,
      emoji: "👥",
      ex: [
        { en: "We are a small team.", pl: "Jesteśmy małym zespołem." },
        { en: "Our marketing team is in Warsaw.", pl: "Nasz zespół marketingu jest w Warszawie." }
      ],
      phrases: [
        { en: "team leader", pl: "lider zespołu" },
        { en: "team meeting", pl: "spotkanie zespołu" },
        { en: "sales team", pl: "dział sprzedaży" }
      ],
      family: ["teammate - kolega z zespołu", "teamwork - praca zespołowa", "group - grupa"],
      forms: "",
      note: "Piszemy ea, a mówimy długie i: tim. Amerykanie mówią zwykle ON the team (w zespole), Brytyjczycy IN the team.",
      mnemo: "TIM - w każdym zespole jest jakiś TYMEK, który nic nie robi."
    },
    {
      id: "w2-people",
      en: "people",
      pl: "ludzie, osoby",
      say: "pipel",
      pos: "rzeczownik",
      part: 2,
      emoji: "👫",
      ex: [
        { en: "People are nice here.", pl: "Ludzie są tu mili." },
        { en: "These people are our customers.", pl: "Ci ludzie to nasi klienci." }
      ],
      phrases: [
        { en: "a lot of people", pl: "dużo ludzi" },
        { en: "young people", pl: "młodzi ludzie" },
        { en: "ten people", pl: "10 osób" }
      ],
      family: ["person - osoba", "man - mężczyzna", "woman - kobieta", "human - człowiek"],
      forms: "l.poj. person",
      note: "People to liczba mnoga, więc zawsze are: people are, nie people is. Jedna osoba to a person.",
      mnemo: "PIPEL - ludzie w korku robią PIP, PIP!"
    },
    {
      id: "w2-partner",
      en: "partner",
      pl: "wspólnik; partner, partnerka",
      say: "partner",
      pos: "rzeczownik",
      part: 2,
      emoji: "💼",
      ex: [
        { en: "This is my partner, Mark.", pl: "To mój partner, Mark." },
        { en: "Kate is my business partner.", pl: "Kate jest moją wspólniczką." }
      ],
      phrases: [
        { en: "business partner", pl: "wspólnik" },
        { en: "partner company", pl: "firma partnerska" },
        { en: "my partner", pl: "mój partner, moja partnerka" }
      ],
      family: ["partnership - partnerstwo, współpraca", "colleague - kolega z pracy", "company - firma"],
      forms: "",
      note: "Partner to wspólnik w firmie albo osoba, z którą jesteś w związku. Z kontekstu wiadomo, o co chodzi.",
      mnemo: "PARTNER - prawie jak po polsku. Dobry wspólnik nie PARTACZY roboty."
    },
    {
      id: "w2-colleague",
      en: "colleague",
      pl: "kolega z pracy, koleżanka z pracy",
      say: "kalig",
      pos: "rzeczownik",
      part: 3,
      emoji: "🧑‍💼",
      ex: [
        { en: "Mark is my colleague.", pl: "Mark to mój kolega z pracy." },
        { en: "My colleague is in the marketing team.", pl: "Moja koleżanka z pracy jest w dziale marketingu." }
      ],
      phrases: [
        { en: "a new colleague", pl: "nowy kolega z pracy" },
        { en: "my colleagues", pl: "moi współpracownicy" },
        { en: "colleagues from work", pl: "koledzy z pracy" }
      ],
      family: ["co-worker - współpracownik", "friend - przyjaciel, kolega", "team - zespół"],
      forms: "",
      note: "Polskie „kolega” to friend albo colleague. Colleague to ktoś, z kim pracujesz, niekoniecznie przyjaciel. Na końcu nie ma „e”: kalig.",
      mnemo: "KALIG - kolega z pracy zawsze ma KALIGRAFIĘ w notatkach, a ty bazgroły."
    },
    {
      id: "w2-daughter",
      en: "daughter",
      pl: "córka",
      say: "doter",
      pos: "rzeczownik",
      part: 3,
      emoji: "🎀",
      ex: [
        { en: "Their daughter is six.", pl: "Ich córka ma 6 lat." },
        { en: "His daughter is our new intern.", pl: "Jego córka jest naszą nową stażystką." }
      ],
      phrases: [
        { en: "my daughter", pl: "moja córka" },
        { en: "only daughter", pl: "jedyna córka" },
        { en: "son and daughter", pl: "syn i córka" }
      ],
      family: ["son - syn", "child - dziecko", "mother - matka", "granddaughter - wnuczka"],
      forms: "",
      note: "Gh jest nieme: doter, nie dogter. Syn to son, czytane san, tak jak sun (słońce).",
      mnemo: "DOTER - córka zawsze DOTRZE do twojego portfela."
    }
  ],
  sentences: [
    { use: "L1", en: "This is my mother.", pl: "To moja mama.", alt: [] },
    { use: "L1", en: "He is her husband.", pl: "On jest jej mężem.", alt: [] },
    { use: "L1", en: "Your sister is nice.", pl: "Twoja siostra jest miła.", alt: [] },
    { use: "L3", en: "She is my new boss.", pl: "Ona jest moją nową szefową.", alt: [] },
    { use: "L3", en: "Our customers are happy.", pl: "Nasi klienci są zadowoleni.", alt: ["Our clients are happy."] },
    { use: "L3", en: "Tom is my friend and partner.", pl: "Tom jest moim przyjacielem i wspólnikiem.",
      alt: ["Tom is my friend and my partner.", "Tom is my friend and business partner.", "Tom is my friend and my business partner."] },
    { use: "L3", en: "These people are in your team.", pl: "Ci ludzie są w twoim zespole.", alt: ["These people are on your team."] },
    { use: "L5", en: "My colleague is with her daughter.", pl: "Moja koleżanka z pracy jest ze swoją córką.",
      alt: ["My coworker is with her daughter.", "My co-worker is with her daughter."] },
    { use: "L5", en: "Mark and his wife are our customers.", pl: "Mark i jego żona są naszymi klientami.",
      alt: ["Mark and his wife are our clients."] },
    { use: "L5", en: "Is your father in the office today?", pl: "Twój tata jest dzisiaj w biurze?",
      alt: ["Is your dad in the office today?", "Is your father at the office today?", "Is your dad at the office today?"] },
    { use: "L5", en: "Her husband is my boss.", pl: "Jej mąż jest moim szefem.", alt: [] },
    { use: "L5", en: "They are our partners, not our friends.", pl: "Oni są naszymi wspólnikami, a nie przyjaciółmi.",
      alt: ["They are our partners, not friends.", "They are our business partners, not our friends.", "They are our business partners, not friends."] }
  ],
  reading: {
    title: "Rodzinny sklep internetowy",
    text: [
      { en: "This is Anna, and this is her online shop.", pl: "To jest Anna, a to jej sklep internetowy." },
      { en: "Her husband, Mark, is her business partner.", pl: "Jej mąż Mark jest jej wspólnikiem." },
      { en: "Their daughter, Kate, is twenty, and she is in the team too.", pl: "Ich córka Kate ma 20 lat i też jest w zespole." },
      { en: "Tom is not family, but he is a good colleague and friend.", pl: "Tom nie jest z rodziny, ale to dobry kolega z pracy i przyjaciel." },
      { en: "The team is small: only four people.", pl: "Zespół jest mały: tylko 4 osoby." },
      { en: "The customers are happy, and Anna is a happy boss!", pl: "Klienci są zadowoleni, a Anna jest szczęśliwą szefową!" }
    ],
    questions: [
      { q: "Who is the business partner?", qpl: "Kto jest wspólnikiem?", options: ["Tom.", "Mark.", "Kate."], answer: 1 },
      { q: "How old is Kate?", qpl: "Ile lat ma Kate?", options: ["She is twenty.", "She is thirteen.", "She is thirty."], answer: 0 },
      { q: "Is Tom family?", qpl: "Czy Tom jest z rodziny?", options: ["Yes, he is her brother.", "Yes, he is.", "No, he isn't."], answer: 2 }
    ]
  },
  dialog: {
    intro: "Na firmowym spotkaniu nowy kolega pyta, kto jest kim.",
    turns: [
      { bot: "Hi! I'm Tom, the new designer. What's your name?", botpl: "Cześć! Jestem Tom, nowy grafik. Jak masz na imię?",
        options: ["Me name is Anna.", "I name is Anna.", "My name is Anna."], answer: 2,
        hint: "My name..." },
      { bot: "Nice to meet you, Anna! Who is that woman?", botpl: "Miło cię poznać, Anna! Kim jest ta kobieta?",
        options: ["Is my boss.", "She is my boss.", "He is my boss."], answer: 1,
        hint: "She is..." },
      { bot: "And the man with her?", botpl: "A ten mężczyzna obok niej?",
        options: ["He is her husband.", "He is his husband.", "He is she husband."], answer: 0,
        hint: "He is her..." },
      { bot: "Is he in our team?", botpl: "Jest w naszym zespole?",
        options: ["No, he not. He is a customer.", "No, he isn't. Him is a customer.", "No, he isn't. He is a customer."], answer: 2,
        hint: "No, he isn't..." },
      { bot: "And who are those two people?", botpl: "A kim są te 2 osoby?",
        options: ["They are my colleagues.", "They is my colleagues.", "Their are my colleagues."], answer: 0,
        hint: "They are..." },
      { bot: "Great. Is your family here too?", botpl: "Super. Twoja rodzina też tu jest?",
        options: ["Yes, mine sister is here.", "Yes, my sister is here.", "Yes, my sister are here."], answer: 1,
        hint: "Yes, my sister..." }
    ]
  }
});
