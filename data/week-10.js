window.WEEKS = window.WEEKS || [];
window.WEEKS.push({
  week: 10,
  title: "Podróże",
  grammar: {
    title: "Past Simple (czasowniki regularne)",
    explain: [
      "Past Simple to zwykły czas przeszły. Mówisz nim o tym, co się wydarzyło i już się skończyło: wczoraj, w zeszłym tygodniu, zeszłego lata.",
      "W czasownikach regularnych dodajesz na końcu -ed: visit - visited, work - worked. Gdy czasownik kończy się na -e, dodajesz samo -d: arrive - arrived. Forma jest taka sama dla wszystkich osób: I visited, she visited, they visited.",
      "Przeczenie: didn't + zwykły czasownik, już bez -ed: I didn't travel. Pytanie: Did + osoba + zwykły czasownik: Did you book the hotel? Krótko odpowiadasz: Yes, I did. / No, I didn't.",
      "Wymowa -ed: po t i d mówisz [yd], np. visited [wizytyd]. W innych słowach -ed brzmi jak krótkie [t] albo [d]: worked [łorkt], stayed [stejd]."
    ],
    table: [
      ["visit", "visited", "didn't visit"],
      ["arrive", "arrived", "didn't arrive"],
      ["stay", "stayed", "didn't stay"],
      ["travel", "traveled", "didn't travel"],
      ["stop", "stopped", "didn't stop"],
      ["pytanie", "Did you visit...?", "Yes, I did. / No, I didn't."]
    ],
    examples: [
      { en: "We booked a hotel near the beach.", pl: "Zarezerwowaliśmy hotel blisko plaży." },
      { en: "The plane arrived at 10 o'clock.", pl: "Samolot przyleciał o 10." },
      { en: "Did they visit the customer? No, they didn't.", pl: "Czy odwiedzili klienta? Nie." }
    ],
    exercises: [
      { type: "choice", q: "Last week we ___ a hotel near the airport.", options: ["book", "booked", "are booking"], answer: 1,
        pl: "W zeszłym tygodniu zarezerwowaliśmy hotel blisko lotniska.", why: "Last week to przeszłość, więc czasownik dostaje -ed." },
      { type: "gap", q: "The train ___ (arrive) at 6 o'clock yesterday.", answer: ["arrived"],
        pl: "Pociąg przyjechał wczoraj o 6.", why: "Arrive kończy się na -e, więc dodajesz samo -d." },
      { type: "choice", q: "Last Monday Anna ___ our partner in Berlin.", options: ["visited", "visit", "visiting"], answer: 0,
        pl: "W zeszły poniedziałek Anna odwiedziła naszego partnera w Berlinie.", why: "To już się wydarzyło, więc visit + -ed = visited." },
      { type: "gap", q: "We ___ (not travel) abroad last summer.", answer: ["didn't travel", "did not travel"],
        pl: "Zeszłego lata nie wyjeżdżaliśmy za granicę.", why: "Przeczenie: didn't + zwykły czasownik, bez -ed." },
      { type: "choice", q: "___ you check the passports yesterday?", options: ["Do", "Did", "Were"], answer: 1,
        pl: "Sprawdziłeś wczoraj paszporty?", why: "Pytanie o przeszłość: Did + osoba + zwykły czasownik." },
      { type: "gap", q: "Did the guide ___ (call) you?", answer: ["call"],
        pl: "Przewodnik do ciebie dzwonił?", why: "Po did czasownik wraca do zwykłej formy: call, nie called." },
      { type: "choice", q: "Yesterday they ___ at a hotel near the beach.", options: ["staied", "stayed", "stay"], answer: 1,
        pl: "Wczoraj nocowali w hotelu blisko plaży.", why: "W stay przed y stoi samogłoska, więc dodajesz zwykłe -ed: stayed." },
      { type: "gap", q: "The guide ___ (not arrive) on time.", answer: ["didn't arrive", "did not arrive"],
        pl: "Przewodnik nie przyjechał na czas.", why: "Przeczenie: didn't + arrive, bez -d na końcu." },
      { type: "choice", q: "Did you ___ the old city?", options: ["visited", "visits", "visit"], answer: 2,
        pl: "Zwiedziłeś stare miasto?", why: "Po did zawsze zwykła forma czasownika: visit." },
      { type: "gap", q: "We ___ (travel) to Spain by plane last summer.", answer: ["traveled", "travelled"],
        pl: "Zeszłego lata polecieliśmy do Hiszpanii samolotem.", why: "Travel + -ed. W USA piszą traveled, w Wielkiej Brytanii travelled. Obie formy są dobre." }
    ]
  },
  words: [
    {
      id: "w10-travel",
      en: "travel",
      pl: "podróżować; podróże",
      say: "trewel",
      pos: "czasownik",
      part: 1,
      emoji: "🌍",
      ex: [
        { en: "We traveled to Italy last summer.", pl: "Zeszłego lata pojechaliśmy do Włoch." },
        { en: "Our manager travels a lot for work.", pl: "Nasz menedżer dużo podróżuje służbowo." }
      ],
      phrases: [
        { en: "travel abroad", pl: "podróżować za granicę" },
        { en: "business travel", pl: "podróże służbowe" },
        { en: "travel by train", pl: "podróżować pociągiem" }
      ],
      family: ["traveler - podróżnik", "travel agency - biuro podróży", "journey - podróż"],
      forms: "traveled (przeszły; w brytyjskim travelled); he travels",
      note: "Travel to głównie czasownik. Jeden konkretny wyjazd to a trip, nie a travel.",
      mnemo: "TREWEL - stare TRZEWIKI, które zwiedziły pół świata."
    },
    {
      id: "w10-trip",
      en: "trip",
      pl: "wyjazd; wycieczka",
      say: "tryp",
      pos: "rzeczownik",
      part: 1,
      emoji: "🚗",
      ex: [
        { en: "Our trip to Rome was great.", pl: "Nasz wyjazd do Rzymu był świetny." },
        { en: "I was on a business trip last week.", pl: "W zeszłym tygodniu byłem w delegacji." }
      ],
      phrases: [
        { en: "business trip", pl: "delegacja; wyjazd służbowy" },
        { en: "day trip", pl: "jednodniowa wycieczka" },
        { en: "go on a trip", pl: "pojechać na wycieczkę" }
      ],
      family: ["vacation - urlop (USA)", "journey - podróż", "tour - wycieczka z przewodnikiem"],
      forms: "l.mn. trips",
      note: "Na wyjazd jedziemy ON a trip, nie IN a trip. Have a nice trip! = Miłej podróży!",
      mnemo: "TRYP - na wyjeździe przełączasz się w TRYB urlopowy."
    },
    {
      id: "w10-plane",
      en: "plane",
      pl: "samolot",
      say: "plejn",
      pos: "rzeczownik",
      part: 1,
      emoji: "✈️",
      ex: [
        { en: "The plane was very late.", pl: "Samolot był bardzo opóźniony." },
        { en: "Our boss traveled to London by plane.", pl: "Nasz szef poleciał do Londynu samolotem." }
      ],
      phrases: [
        { en: "by plane", pl: "samolotem" },
        { en: "on the plane", pl: "w samolocie" },
        { en: "catch a plane", pl: "zdążyć na samolot" }
      ],
      family: ["airplane - samolot (USA)", "flight - lot", "pilot - pilot", "airport - lotnisko"],
      forms: "l.mn. planes",
      note: "Samolotem to BY plane, bez the. W samolocie to ON the plane, nie IN the plane.",
      mnemo: "PLEJN - w samolocie ratuje cię tylko PLEJlista w słuchawkach."
    },
    {
      id: "w10-train",
      en: "train",
      pl: "pociąg",
      say: "trejn",
      pos: "rzeczownik",
      part: 1,
      emoji: "🚆",
      ex: [
        { en: "The train arrived on time.", pl: "Pociąg przyjechał punktualnie." },
        { en: "I check my emails on the train.", pl: "W pociągu sprawdzam maile." }
      ],
      phrases: [
        { en: "by train", pl: "pociągiem" },
        { en: "on the train", pl: "w pociągu" },
        { en: "train station", pl: "dworzec kolejowy" }
      ],
      family: ["station - dworzec", "platform - peron", "ticket - bilet"],
      forms: "l.mn. trains",
      note: "Pociągiem to BY train, a w pociągu to ON the train. Train to też czasownik: szkolić (training = szkolenie).",
      mnemo: "TREJN - w pociągu masz TRENING cierpliwości, bo znowu jest opóźnienie."
    },
    {
      id: "w10-airport",
      en: "airport",
      pl: "lotnisko",
      say: "erport",
      pos: "rzeczownik",
      part: 1,
      emoji: "🛫",
      ex: [
        { en: "The airport is near the city.", pl: "Lotnisko jest blisko miasta." },
        { en: "We opened a shop at the airport.", pl: "Otworzyliśmy sklep na lotnisku." }
      ],
      phrases: [
        { en: "at the airport", pl: "na lotnisku" },
        { en: "to the airport", pl: "na lotnisko" },
        { en: "airport bus", pl: "autobus na lotnisko" }
      ],
      family: ["plane - samolot", "flight - lot", "gate - bramka", "terminal - terminal"],
      forms: "l.mn. airports",
      note: "Na lotnisku to AT the airport, nie ON the airport. Air to powietrze, więc airport to port dla samolotów.",
      mnemo: "ERPORT - na lotnisku wszyscy mówią EEER, gdzie jest mój PORTfel?"
    },
    {
      id: "w10-ticket",
      en: "ticket",
      pl: "bilet",
      say: "tykyt",
      pos: "rzeczownik",
      part: 1,
      emoji: "🎫",
      ex: [
        { en: "I have two train tickets.", pl: "Mam 2 bilety na pociąg." },
        { en: "Customers ordered 500 tickets online.", pl: "Klienci zamówili 500 biletów przez internet." }
      ],
      phrases: [
        { en: "plane ticket", pl: "bilet lotniczy" },
        { en: "train ticket", pl: "bilet na pociąg" },
        { en: "round-trip ticket", pl: "bilet w obie strony (USA)" }
      ],
      family: ["booking - rezerwacja", "seat - miejsce", "price - cena"],
      forms: "l.mn. tickets",
      note: "Ticket to też zgłoszenie w obsłudze klienta (support ticket) i mandat (parking ticket).",
      mnemo: "TYKYT - bilet w kieszeni robi TYK TYK jak zegar: zaraz odjazd!"
    },
    {
      id: "w10-passport",
      en: "passport",
      pl: "paszport",
      say: "pesport",
      pos: "rzeczownik",
      part: 1,
      emoji: "🛂",
      ex: [
        { en: "My passport is in my bag.", pl: "Paszport mam w torbie." },
        { en: "The team needed passports for the trip.", pl: "Zespół potrzebował paszportów na wyjazd." }
      ],
      phrases: [
        { en: "passport control", pl: "kontrola paszportowa" },
        { en: "show your passport", pl: "pokaż paszport" },
        { en: "a valid passport", pl: "ważny paszport" }
      ],
      family: ["ID card - dowód osobisty", "visa - wiza", "border - granica"],
      forms: "l.mn. passports",
      note: "Piszemy przez dwa s: passport. Na lotnisku usłyszysz krótko: Passport, please.",
      mnemo: "PESPORT - nawet PES potrzebuje paszportu za granicą."
    },
    {
      id: "w10-luggage",
      en: "luggage",
      pl: "bagaż",
      say: "lagydż",
      pos: "rzeczownik",
      part: 2,
      emoji: "🧳",
      ex: [
        { en: "My luggage is very heavy.", pl: "Mój bagaż jest bardzo ciężki." },
        { en: "We sell luggage online.", pl: "Sprzedajemy walizki przez internet." }
      ],
      phrases: [
        { en: "hand luggage", pl: "bagaż podręczny" },
        { en: "a piece of luggage", pl: "sztuka bagażu" },
        { en: "luggage room", pl: "przechowalnia bagażu" }
      ],
      family: ["baggage - bagaż (USA)", "suitcase - walizka", "bag - torba"],
      forms: "niepoliczalny: a lot of luggage",
      note: "Luggage jest niepoliczalny: nie mówimy a luggage ani luggages. Jedna walizka to a suitcase albo a piece of luggage.",
      mnemo: "LAGYDŻ - bagaż tak ciężki, że masz LAGa jak stary komputer."
    },
    {
      id: "w10-booking",
      en: "booking",
      pl: "rezerwacja",
      say: "bukyng",
      pos: "rzeczownik",
      part: 2,
      emoji: "📝",
      ex: [
        { en: "I have a booking for two nights.", pl: "Mam rezerwację na 2 noce." },
        { en: "We checked the booking in our system.", pl: "Sprawdziliśmy rezerwację w naszym systemie." }
      ],
      phrases: [
        { en: "make a booking", pl: "zrobić rezerwację" },
        { en: "online booking", pl: "rezerwacja online" },
        { en: "booking number", pl: "numer rezerwacji" }
      ],
      family: ["book - rezerwować", "reservation - rezerwacja (USA)", "cancel - odwołać"],
      forms: "od czasownika book: booked (przeszły)",
      note: "W USA częściej mówi się reservation. Book to tu czasownik rezerwować: I booked a room. = Zarezerwowałem pokój.",
      mnemo: "BUKYNG - rezerwujesz hotel jak BUKmacher: obstawiasz najtańszy pokój."
    },
    {
      id: "w10-arrive",
      en: "arrive",
      pl: "przyjechać; przylecieć; dotrzeć",
      say: "erajw",
      pos: "czasownik",
      part: 2,
      emoji: "🛬",
      ex: [
        { en: "We arrived in London at night.", pl: "Dotarliśmy do Londynu w nocy." },
        { en: "Your order arrived yesterday.", pl: "Twoje zamówienie dotarło wczoraj." }
      ],
      phrases: [
        { en: "arrive at the airport", pl: "dotrzeć na lotnisko" },
        { en: "arrive in London", pl: "przylecieć do Londynu" },
        { en: "arrive on time", pl: "przyjechać na czas" }
      ],
      family: ["arrival - przyjazd", "come - przyjść", "leave - wyjechać"],
      forms: "arrived (przeszły); he arrives",
      note: "Po arrive nie dajemy to. Mówimy arrive IN (miasto, kraj) albo arrive AT (budynek, lotnisko), nie arrive to London.",
      mnemo: "ERAJW - przylatujesz na wakacje i krzyczysz: E, RAJ W końcu!"
    },
    {
      id: "w10-visit",
      en: "visit",
      pl: "odwiedzać; zwiedzać; wizyta",
      say: "wizyt",
      pos: "czasownik",
      part: 2,
      emoji: "🏛️",
      ex: [
        { en: "We visited the old city.", pl: "Zwiedziliśmy stare miasto." },
        { en: "A lot of people visited our website.", pl: "Dużo osób odwiedziło naszą stronę." }
      ],
      phrases: [
        { en: "visit a customer", pl: "odwiedzić klienta" },
        { en: "visit a museum", pl: "zwiedzić muzeum" },
        { en: "website visit", pl: "wizyta na stronie" }
      ],
      family: ["visitor - gość; odwiedzający", "tour - wycieczka", "guest - gość"],
      forms: "visited (przeszły); he visits",
      note: "Po visit nie dajemy to: visit London, nie visit to London. Visit to też rzeczownik: a visit = wizyta.",
      mnemo: "WIZYT - prawie jak WIZYTa u teściowej, tylko krótsza."
    },
    {
      id: "w10-stay",
      en: "stay",
      pl: "zostać; mieszkać (np. w hotelu)",
      say: "stej",
      pos: "czasownik",
      part: 2,
      emoji: "🛏️",
      ex: [
        { en: "We stayed at a small hotel.", pl: "Nocowaliśmy w małym hotelu." },
        { en: "Customers stayed on our website for 5 minutes.", pl: "Klienci spędzali na naszej stronie 5 minut." }
      ],
      phrases: [
        { en: "stay at a hotel", pl: "mieszkać w hotelu" },
        { en: "stay at home", pl: "zostać w domu" },
        { en: "stay in touch", pl: "być w kontakcie" }
      ],
      family: ["visit - odwiedzać", "leave - wyjechać", "guest - gość"],
      forms: "stayed (przeszły); he stays",
      note: "Stay to nie stać (to stand). I stayed at a hotel. = Mieszkałem w hotelu, a nie Stałem w hotelu.",
      mnemo: "STEJ - jak STÓJ: stoisz w miejscu, czyli zostajesz."
    },
    {
      id: "w10-abroad",
      en: "abroad",
      pl: "za granicą; za granicę",
      say: "ebrod",
      pos: "przysłówek",
      part: 2,
      emoji: "🌐",
      ex: [
        { en: "My sister lives abroad.", pl: "Moja siostra mieszka za granicą." },
        { en: "We sell a lot abroad.", pl: "Sporo sprzedajemy za granicę." }
      ],
      phrases: [
        { en: "go abroad", pl: "wyjechać za granicę" },
        { en: "live abroad", pl: "mieszkać za granicą" },
        { en: "study abroad", pl: "studiować za granicą" }
      ],
      family: ["foreign - zagraniczny", "country - kraj", "border - granica"],
      forms: "",
      note: "Przed abroad nie dajemy to: go abroad, nie go to abroad. To jedno słowo znaczy i za granicą, i za granicę.",
      mnemo: "EBROD - za granicą zapuszczasz BRODę, bo nikt cię nie zna."
    },
    {
      id: "w10-guide",
      en: "guide",
      pl: "przewodnik; poradnik",
      say: "gajd",
      pos: "rzeczownik",
      part: 3,
      emoji: "🧭",
      ex: [
        { en: "Our guide was very good.", pl: "Nasz przewodnik był bardzo dobry." },
        { en: "We posted a short guide on our blog.", pl: "Wrzuciliśmy krótki poradnik na naszego bloga." }
      ],
      phrases: [
        { en: "tour guide", pl: "przewodnik wycieczek" },
        { en: "travel guide", pl: "przewodnik turystyczny" },
        { en: "a free guide", pl: "darmowy poradnik" }
      ],
      family: ["guidebook - przewodnik (książka)", "tour - wycieczka", "lead - prowadzić"],
      forms: "l.mn. guides; guided (przeszły od guide = oprowadzać)",
      note: "Guide to osoba albo książka, a w marketingu też poradnik, np. darmowy ebook. Czytamy [gajd], nie [gwide].",
      mnemo: "GAJD - przewodnik prowadzi cię przez GAJ i wszystko tłumaczy."
    },
    {
      id: "w10-beach",
      en: "beach",
      pl: "plaża",
      say: "bicz",
      pos: "rzeczownik",
      part: 3,
      emoji: "🏖️",
      ex: [
        { en: "We stayed near the beach.", pl: "Mieszkaliśmy blisko plaży." },
        { en: "Our summer ad showed a beach.", pl: "Nasza letnia reklama pokazywała plażę." }
      ],
      phrases: [
        { en: "on the beach", pl: "na plaży" },
        { en: "beach bag", pl: "torba plażowa" },
        { en: "beach vacation", pl: "wakacje na plaży" }
      ],
      family: ["sea - morze", "sand - piasek", "sun - słońce"],
      forms: "l.mn. beaches",
      note: "Na plaży to ON the beach. Przeciągaj i w środku, bo krótkie i zamienia to słowo w przekleństwo.",
      mnemo: "BICZ - na plaży słońce smaga cię jak BICZ."
    }
  ],
  sentences: [
    { use: "L1", en: "The plane is very big.", pl: "Samolot jest bardzo duży.", alt: [] },
    { use: "L1", en: "I have two tickets.", pl: "Mam 2 bilety.", alt: [] },
    { use: "L1", en: "Our trip was great.", pl: "Nasz wyjazd był świetny.", alt: [] },
    { use: "L3", en: "We stayed at a small hotel.", pl: "Nocowaliśmy w małym hotelu.", alt: ["We stayed in a small hotel."] },
    { use: "L3", en: "My luggage arrived very late.", pl: "Mój bagaż dotarł bardzo późno.", alt: [] },
    { use: "L3", en: "I checked the booking yesterday.", pl: "Wczoraj sprawdziłem rezerwację.", alt: ["Yesterday I checked the booking."] },
    { use: "L3", en: "Did you visit the customer abroad?", pl: "Odwiedziłeś klienta za granicą?", alt: [] },
    { use: "L5", en: "We booked train tickets.", pl: "Zarezerwowaliśmy bilety na pociąg.", alt: ["We booked the train tickets.", "We booked tickets for the train.", "We booked the tickets for the train."] },
    { use: "L5", en: "The plane didn't arrive on time.", pl: "Samolot nie przyleciał na czas.", alt: [] },
    { use: "L5", en: "The guide showed us the old city.", pl: "Przewodnik pokazał nam stare miasto.", alt: ["The guide showed us the old town.", "The guide showed the old city to us."] },
    { use: "L5", en: "I worked abroad last summer.", pl: "Zeszłego lata pracowałem za granicą.", alt: ["Last summer I worked abroad."] },
    { use: "L5", en: "Did you stay near the beach?", pl: "Czy mieszkaliście blisko plaży?", alt: [] }
  ],
  reading: {
    title: "Delegacja do Hiszpanii",
    text: [
      { en: "Last week Tom traveled to Spain on a business trip.", pl: "W zeszłym tygodniu Tom pojechał służbowo do Hiszpanii." },
      { en: "He stayed at a hotel near the beach.", pl: "Mieszkał w hotelu blisko plaży." },
      { en: "On Monday he visited a big customer in Barcelona.", pl: "W poniedziałek odwiedził dużego klienta w Barcelonie." },
      { en: "The meeting was long, but the customer liked the project.", pl: "Spotkanie było długie, ale klientowi spodobał się projekt." },
      { en: "On Tuesday a guide showed him the old city.", pl: "We wtorek przewodnik pokazał mu stare miasto." },
      { en: "In the evening he walked on the beach.", pl: "Wieczorem spacerował po plaży." },
      { en: "He arrived home on Friday, tired but happy.", pl: "Wrócił do domu w piątek, zmęczony, ale zadowolony." }
    ],
    questions: [
      { q: "Where was Tom's hotel?", qpl: "Gdzie był hotel Toma?", options: ["Near the beach.", "Near the airport.", "Next to the station."], answer: 0 },
      { q: "What did the guide show Tom?", qpl: "Co przewodnik pokazał Tomowi?", options: ["The beach.", "The old city.", "The airport."], answer: 1 },
      { q: "When did Tom arrive home?", qpl: "Kiedy Tom wrócił do domu?", options: ["On Monday.", "On Tuesday.", "On Friday."], answer: 2 }
    ]
  },
  dialog: {
    intro: "Koleżanka z zespołu pyta cię o twój wyjazd służbowy do Londynu.",
    turns: [
      { bot: "Hi! Did you travel to London last week?", botpl: "Cześć! Leciałeś w zeszłym tygodniu do Londynu?",
        options: ["Yes, I travel there on Monday.", "Yes, I traveled there on Monday.", "Yes, I did traveled there on Monday."], answer: 1,
        hint: "Yes, I traveled..." },
      { bot: "Did the plane arrive on time?", botpl: "Samolot przyleciał punktualnie?",
        options: ["No, it arrived 2 hours late.", "No, it didn't arrived on time.", "No, it arrive late."], answer: 0,
        hint: "No, it arrived..." },
      { bot: "Where did you stay?", botpl: "Gdzie nocowałeś?",
        options: ["I stay at a hotel near the station yesterday.", "I stayed at hotel near the station.", "I stayed at a hotel near the station."], answer: 2,
        hint: "I stayed at a..." },
      { bot: "Did you visit the customer?", botpl: "Odwiedziłeś klienta?",
        options: ["Yes, I visited to him on Tuesday.", "Yes, I visited him on Tuesday.", "Yes, I did visited him on Tuesday."], answer: 1,
        hint: "Yes, I visited..." },
      { bot: "Did you visit the city too?", botpl: "A zwiedziłeś też miasto?",
        options: ["No, I didn't. I worked all week.", "No, I didn't visited. I worked all week.", "No, I not visit. I worked all week."], answer: 0,
        hint: "No, I didn't..." },
      { bot: "Did you like the trip?", botpl: "Podobał ci się wyjazd?",
        options: ["Yes, it liked me very much.", "Yes, I liked very much it.", "Yes, I liked it very much."], answer: 2,
        hint: "Yes, I liked it..." }
    ]
  }
});
