window.WEEKS = window.WEEKS || [];
window.WEEKS.push({
  week: 9,
  title: "Miasto i kierunki",
  grammar: {
    title: "was / were",
    explain: [
      "Was i were to przeszła forma od am / is / are. Mówisz nimi, gdzie ktoś był albo jakie coś było: I was in the office. = Byłem w biurze.",
      "Was dajesz przy I, he, she, it i przy jednej rzeczy. Were dajesz przy you, we, they i przy kilku rzeczach: The shops were closed. = Sklepy były zamknięte.",
      "Przeczenie: dodaj not, w mowie skracamy to do wasn't / weren't. Pytanie: was / were idzie na początek zdania: Was the hotel near the station?",
      "Tak samo działa there was / there were, czyli był / była / były: There was a lot of traffic. = Był duży ruch."
    ],
    table: [
      ["I / he / she / it", "was", "wasn't"],
      ["you / we / they", "were", "weren't"],
      ["pytanie", "Was he...?", "Were they...?"],
      ["there", "there was", "there were"]
    ],
    examples: [
      { en: "The hotel was near the station.", pl: "Hotel był blisko dworca." },
      { en: "We were in the city on Monday.", pl: "W poniedziałek byliśmy w mieście." },
      { en: "Was there a lot of traffic on the bridge?", pl: "Czy na moście był duży ruch?" }
    ],
    exercises: [
      { type: "choice", q: "The hotel ___ near the station.", options: ["was", "were", "be"], answer: 0,
        pl: "Hotel był blisko dworca.", why: "Hotel to jedna rzecz, więc was." },
      { type: "gap", q: "We ___ in the city yesterday.", answer: ["were"],
        pl: "Wczoraj byliśmy w mieście.", why: "Przy we zawsze were." },
      { type: "choice", q: "___ the shops open last Sunday?", options: ["Was", "Were", "Is"], answer: 1,
        pl: "Czy w zeszłą niedzielę sklepy były otwarte?", why: "Shops to kilka rzeczy, więc were. W pytaniu were stoi na początku." },
      { type: "gap", q: "The hotel ___ cheap. It was expensive.", answer: ["wasn't", "was not"],
        pl: "Hotel nie był tani. Był drogi.", why: "Przeczenie: was + not, w skrócie wasn't." },
      { type: "choice", q: "There ___ two parks near my hotel.", options: ["was", "were", "is"], answer: 1,
        pl: "Blisko mojego hotelu były 2 parki.", why: "Two parks to więcej niż jedna rzecz, więc there were." },
      { type: "gap", q: "___ you at the meeting yesterday?", answer: ["were"],
        pl: "Byłeś wczoraj na spotkaniu?", why: "Przy you zawsze were, a w pytaniu were idzie na początek." },
      { type: "choice", q: "My colleagues ___ tired after the meeting.", options: ["were", "was", "be"], answer: 0,
        pl: "Koledzy z pracy byli zmęczeni po spotkaniu.", why: "Colleagues to kilka osób, więc were." },
      { type: "gap", q: "I ___ in the office yesterday. I was at home.", answer: ["wasn't", "was not"],
        pl: "Wczoraj nie było mnie w biurze. Byłem w domu.", why: "Przy I dajemy was, w przeczeniu wasn't." },
      { type: "choice", q: "___ there a lot of traffic on the bridge yesterday?", options: ["Were", "Is", "Was"], answer: 2,
        pl: "Czy wczoraj na moście był duży ruch?", why: "Traffic to jedna całość, której nie liczymy, więc was." },
      { type: "gap", q: "The customers ___ happy with the delivery last week.", answer: ["were"],
        pl: "W zeszłym tygodniu klienci byli zadowoleni z dostawy.", why: "Customers to kilka osób, więc were." }
    ]
  },
  words: [
    {
      id: "w9-street",
      en: "street",
      pl: "ulica",
      say: "strit",
      pos: "rzeczownik",
      part: 1,
      emoji: "🛣️",
      ex: [
        { en: "My office is on this street.", pl: "Moje biuro jest przy tej ulicy." },
        { en: "Our shop was on a busy street.", pl: "Nasz sklep był przy ruchliwej ulicy." }
      ],
      phrases: [
        { en: "on the street", pl: "na ulicy" },
        { en: "main street", pl: "główna ulica" },
        { en: "cross the street", pl: "przejść przez ulicę" }
      ],
      family: ["road - droga", "avenue - aleja", "square - plac"],
      forms: "l.mn. streets",
      note: "Adres podajemy z ON: The shop is on Main Street. W adresach street skraca się do St.",
      mnemo: "STRIT - jak STRYCH, tylko na dole i z korkami."
    },
    {
      id: "w9-city",
      en: "city",
      pl: "miasto",
      say: "syti",
      pos: "rzeczownik",
      part: 1,
      emoji: "🏙️",
      ex: [
        { en: "Krakow is a beautiful city.", pl: "Kraków to piękne miasto." },
        { en: "Our customers live in every big city.", pl: "Nasi klienci mieszkają w każdym dużym mieście." }
      ],
      phrases: [
        { en: "city center", pl: "centrum miasta" },
        { en: "in the city", pl: "w mieście" },
        { en: "big city", pl: "duże miasto" }
      ],
      family: ["town - miasteczko", "village - wieś", "capital - stolica", "downtown - centrum (USA)"],
      forms: "l.mn. cities",
      note: "Liczba mnoga: cities (y zmienia się w ies). City to duże miasto, małe miasto to town.",
      mnemo: "SYTI - w dużym mieście zawsze będziesz SYTY, bo knajpa jest na każdym rogu."
    },
    {
      id: "w9-station",
      en: "station",
      pl: "dworzec; stacja",
      say: "stejszyn",
      pos: "rzeczownik",
      part: 1,
      emoji: "🚉",
      ex: [
        { en: "The station is near my hotel.", pl: "Dworzec jest blisko mojego hotelu." },
        { en: "Our new ad is at the station.", pl: "Nasza nowa reklama wisi na dworcu." }
      ],
      phrases: [
        { en: "train station", pl: "dworzec kolejowy" },
        { en: "bus station", pl: "dworzec autobusowy" },
        { en: "at the station", pl: "na dworcu" }
      ],
      family: ["platform - peron", "bus stop - przystanek", "gas station - stacja benzynowa"],
      forms: "l.mn. stations",
      note: "Na dworcu to AT the station, nie ON the station. Zwykły przystanek autobusowy to bus stop, nie bus station.",
      mnemo: "STEJSZYN - na dworcu zamawiasz STEK z SZYNką, bo pociąg znowu ma opóźnienie."
    },
    {
      id: "w9-hotel",
      en: "hotel",
      pl: "hotel",
      say: "houtel",
      pos: "rzeczownik",
      part: 1,
      emoji: "🏨",
      ex: [
        { en: "The hotel was near the park.", pl: "Hotel był blisko parku." },
        { en: "Our team was in a hotel in Berlin.", pl: "Nasz zespół był w hotelu w Berlinie." }
      ],
      phrases: [
        { en: "hotel room", pl: "pokój hotelowy" },
        { en: "at the hotel", pl: "w hotelu" },
        { en: "a cheap hotel", pl: "tani hotel" }
      ],
      family: ["hostel - hostel", "reception - recepcja", "guest - gość"],
      forms: "l.mn. hotels",
      note: "Akcent pada na drugą sylabę: ho-TEL. Polacy często akcentują pierwszą, jak po polsku.",
      mnemo: "HOUTEL - w hotelu mówisz HOU HOU jak Mikołaj, bo śniadanie jest w cenie."
    },
    {
      id: "w9-left",
      en: "left",
      pl: "w lewo; lewy",
      say: "left",
      pos: "przysłówek",
      part: 1,
      emoji: "⬅️",
      ex: [
        { en: "Turn left at the corner.", pl: "Na rogu skręć w lewo." },
        { en: "The basket icon is on the left.", pl: "Ikona koszyka jest po lewej." }
      ],
      phrases: [
        { en: "turn left", pl: "skręć w lewo" },
        { en: "on the left", pl: "po lewej" },
        { en: "left hand", pl: "lewa ręka" }
      ],
      family: ["right - w prawo", "turn - skręcać", "left-handed - leworęczny"],
      forms: "",
      note: "Po lewej to ON the left, nie IN the left. Left to też przeszła forma od leave: He left. = Wyszedł.",
      mnemo: "LEFT - lewa dłoń z wyprostowanym kciukiem robi literę L. L jak LEFT i jak LEWO."
    },
    {
      id: "w9-right",
      en: "right",
      pl: "w prawo; prawy",
      say: "rajt",
      pos: "przysłówek",
      part: 1,
      emoji: "➡️",
      ex: [
        { en: "The hotel is on the right.", pl: "Hotel jest po prawej." },
        { en: "Click the button on the right.", pl: "Kliknij przycisk po prawej." }
      ],
      phrases: [
        { en: "turn right", pl: "skręć w prawo" },
        { en: "on the right", pl: "po prawej" },
        { en: "right now", pl: "w tej chwili" }
      ],
      family: ["left - w lewo", "all right - w porządku", "right-handed - praworęczny"],
      forms: "",
      note: "Right znaczy też dobry, poprawny: That's right! = Zgadza się! Nie myl z write (pisać), które brzmi tak samo.",
      mnemo: "RAJT - skręć w prawo, a trafisz prosto do RAJu."
    },
    {
      id: "w9-straight-on",
      en: "straight on",
      pl: "prosto (przed siebie)",
      say: "strejt on",
      pos: "wyrażenie",
      part: 1,
      emoji: "⬆️",
      ex: [
        { en: "Go straight on to the bridge.", pl: "Idź prosto aż do mostu." },
        { en: "Go straight on, our office is on the left.", pl: "Idź prosto, nasze biuro jest po lewej." }
      ],
      phrases: [
        { en: "go straight on", pl: "idź prosto" },
        { en: "drive straight on", pl: "jedź prosto" },
        { en: "straight ahead", pl: "prosto przed siebie" }
      ],
      family: ["straight - prosty", "ahead - przed siebie", "direction - kierunek"],
      forms: "",
      note: "Straight to prosty jak linia, nie łatwy (to easy). W USA częściej usłyszysz go straight ahead.",
      mnemo: "STREJT ON - maszerujesz prosto jak na STRAJKu i nigdzie nie skręcasz."
    },
    {
      id: "w9-near",
      en: "near",
      pl: "blisko; niedaleko",
      say: "nir",
      pos: "przyimek",
      part: 2,
      emoji: "📍",
      ex: [
        { en: "The park is near my flat.", pl: "Park jest blisko mojego mieszkania." },
        { en: "Our new shop is near the station.", pl: "Nasz nowy sklep jest blisko dworca." }
      ],
      phrases: [
        { en: "near here", pl: "niedaleko stąd" },
        { en: "near the station", pl: "blisko dworca" },
        { en: "very near", pl: "bardzo blisko" }
      ],
      family: ["far - daleko", "close to - blisko", "nearby - w pobliżu"],
      forms: "",
      note: "Po near nie dajemy of: near the park, nie near of the park.",
      mnemo: "NIR - jak NERka: siedzi blisko, zaraz obok."
    },
    {
      id: "w9-next-to",
      en: "next to",
      pl: "obok; przy",
      say: "nekst tu",
      pos: "przyimek",
      part: 2,
      emoji: "👫",
      ex: [
        { en: "The bank is next to the hotel.", pl: "Bank jest obok hotelu." },
        { en: "The price is next to the photo.", pl: "Cena jest obok zdjęcia." }
      ],
      phrases: [
        { en: "next to me", pl: "obok mnie" },
        { en: "next to the door", pl: "przy drzwiach" },
        { en: "sit next to", pl: "siedzieć obok" }
      ],
      family: ["near - blisko", "between - między", "behind - za", "in front of - przed"],
      forms: "",
      note: "Next to to tuż obok, a near to po prostu niedaleko. Nie zgub to: next to the hotel, nie next the hotel.",
      mnemo: "NEKST TU - następny (next) siada TU, tuż obok ciebie."
    },
    {
      id: "w9-opposite",
      en: "opposite",
      pl: "naprzeciwko",
      say: "opozyt",
      pos: "przyimek",
      part: 2,
      emoji: "↔️",
      ex: [
        { en: "The bank is opposite the park.", pl: "Bank jest naprzeciwko parku." },
        { en: "Our office is opposite a big shop.", pl: "Nasze biuro jest naprzeciwko dużego sklepu." }
      ],
      phrases: [
        { en: "opposite the station", pl: "naprzeciwko dworca" },
        { en: "right opposite", pl: "dokładnie naprzeciwko" },
        { en: "the opposite", pl: "przeciwieństwo" }
      ],
      family: ["across from - naprzeciwko (USA)", "next to - obok", "behind - za"],
      forms: "",
      note: "Po opposite nie dajemy of ani to: opposite the bank, nie opposite of the bank. W USA często mówi się across from.",
      mnemo: "OPOZYT - OPOZYcja zawsze siedzi naprzeciwko rządu."
    },
    {
      id: "w9-corner",
      en: "corner",
      pl: "róg",
      say: "korner",
      pos: "rzeczownik",
      part: 2,
      emoji: "📐",
      ex: [
        { en: "The shop is on the corner.", pl: "Sklep jest na rogu." },
        { en: "Our logo is in the corner.", pl: "Nasze logo jest w rogu." }
      ],
      phrases: [
        { en: "on the corner", pl: "na rogu (ulicy)" },
        { en: "in the corner", pl: "w rogu (pokoju, zdjęcia)" },
        { en: "around the corner", pl: "za rogiem; tuż tuż" }
      ],
      family: ["street - ulica", "crossroads - skrzyżowanie", "turn - skręcać"],
      forms: "l.mn. corners",
      note: "Na rogu ulicy to ON the corner, a w rogu pokoju albo obrazka to IN the corner.",
      mnemo: "KORNER - jak rzut rożny w piłce: kopiesz z rogu boiska."
    },
    {
      id: "w9-bridge",
      en: "bridge",
      pl: "most",
      say: "brydż",
      pos: "rzeczownik",
      part: 2,
      emoji: "🌉",
      ex: [
        { en: "There is a bridge near the hotel.", pl: "Blisko hotelu jest most." },
        { en: "Our billboard was next to the bridge.", pl: "Nasz billboard był obok mostu." }
      ],
      phrases: [
        { en: "over the bridge", pl: "przez most" },
        { en: "on the bridge", pl: "na moście" },
        { en: "under the bridge", pl: "pod mostem" }
      ],
      family: ["river - rzeka", "road - droga", "tunnel - tunel"],
      forms: "l.mn. bridges",
      note: "Przez most to over the bridge albo across the bridge. Nie mów through the bridge.",
      mnemo: "BRYDŻ - na moście dziadkowie grają w BRYDŻa i blokują cały ruch."
    },
    {
      id: "w9-park",
      en: "park",
      pl: "park; parkować",
      say: "park",
      pos: "rzeczownik",
      part: 2,
      emoji: "🌳",
      ex: [
        { en: "We were in the park on Sunday.", pl: "W niedzielę byliśmy w parku." },
        { en: "Our photo shoot was in the park.", pl: "Nasza sesja zdjęciowa była w parku." }
      ],
      phrases: [
        { en: "in the park", pl: "w parku" },
        { en: "park the car", pl: "zaparkować samochód" },
        { en: "parking lot", pl: "parking (USA)" }
      ],
      family: ["garden - ogród", "tree - drzewo", "car park - parking (Wielka Brytania)"],
      forms: "parked (przeszły, gdy park = parkować)",
      note: "Park to też czasownik: parkować. Nasz parking to po angielsku parking lot (USA) albo car park, a samo parking znaczy parkowanie.",
      mnemo: "PARK - jedyne słowo, którego nie musisz się uczyć. Tylko nie parkuj w nim auta."
    },
    {
      id: "w9-map",
      en: "map",
      pl: "mapa",
      say: "mep",
      pos: "rzeczownik",
      part: 3,
      emoji: "🗺️",
      ex: [
        { en: "I have a map of the city.", pl: "Mam mapę miasta." },
        { en: "Check the map on our website.", pl: "Sprawdź mapę na naszej stronie." }
      ],
      phrases: [
        { en: "on the map", pl: "na mapie" },
        { en: "city map", pl: "plan miasta" },
        { en: "map app", pl: "aplikacja z mapą" }
      ],
      family: ["direction - kierunek", "location - lokalizacja", "route - trasa"],
      forms: "l.mn. maps",
      note: "Na mapie to ON the map, nie IN the map.",
      mnemo: "MEP - bez mapy biegasz w kółko i robisz MEEP MEEP jak Struś Pędziwiatr."
    },
    {
      id: "w9-traffic",
      en: "traffic",
      pl: "ruch uliczny; korki",
      say: "trefyk",
      pos: "rzeczownik",
      part: 3,
      emoji: "🚦",
      ex: [
        { en: "There was a lot of traffic today.", pl: "Dzisiaj był duży ruch." },
        { en: "Our website has a lot of traffic.", pl: "Nasza strona ma duży ruch." }
      ],
      phrases: [
        { en: "traffic jam", pl: "korek" },
        { en: "heavy traffic", pl: "duży ruch" },
        { en: "website traffic", pl: "ruch na stronie" }
      ],
      family: ["traffic lights - światła drogowe", "car - samochód", "rush hour - godziny szczytu"],
      forms: "niepoliczalny: a lot of traffic",
      note: "Traffic jest niepoliczalny: a lot of traffic, nie traffics. Jeden korek to a traffic jam.",
      mnemo: "TREFYK - w korku TRAFIa cię szlag."
    }
  ],
  sentences: [
    { use: "L1", en: "The hotel is on the right.", pl: "Hotel jest po prawej.", alt: [] },
    { use: "L1", en: "This city is very big.", pl: "To miasto jest bardzo duże.", alt: [] },
    { use: "L1", en: "The station was on the left.", pl: "Dworzec był po lewej.", alt: [] },
    { use: "L3", en: "Our office was near the park.", pl: "Nasze biuro było blisko parku.", alt: [] },
    { use: "L3", en: "The shop was next to the bridge.", pl: "Sklep był obok mostu.", alt: [] },
    { use: "L3", en: "The station was opposite the park.", pl: "Dworzec był naprzeciwko parku.", alt: [] },
    { use: "L3", en: "There was a shop on the corner.", pl: "Na rogu był sklep.", alt: ["On the corner there was a shop."] },
    { use: "L5", en: "The station was opposite the hotel.", pl: "Dworzec był naprzeciwko hotelu.", alt: ["The station was across from the hotel."] },
    { use: "L5", en: "There was a lot of traffic on the bridge.", pl: "Na moście był duży ruch.", alt: ["There was heavy traffic on the bridge.", "The traffic on the bridge was heavy.", "On the bridge there was a lot of traffic."] },
    { use: "L5", en: "Was the shop on the corner?", pl: "Czy sklep był na rogu?", alt: [] },
    { use: "L5", en: "We weren't near the station.", pl: "Nie byliśmy blisko dworca.", alt: [] },
    { use: "L5", en: "It was a beautiful city.", pl: "To było piękne miasto.", alt: ["That was a beautiful city."] }
  ],
  reading: {
    title: "Spotkanie w Berlinie",
    text: [
      { en: "Last Monday Anna was in Berlin for a meeting with a customer.", pl: "W zeszły poniedziałek Anna była w Berlinie na spotkaniu z klientem." },
      { en: "Her hotel was near the station, next to a small park.", pl: "Jej hotel był blisko dworca, obok małego parku." },
      { en: "The customer's office was opposite the bridge.", pl: "Biuro klienta było naprzeciwko mostu." },
      { en: "There was a lot of traffic on the bridge.", pl: "Na moście był duży ruch." },
      { en: "The map on her phone was not very good.", pl: "Mapa w jej telefonie nie była zbyt dobra." },
      { en: "Anna was 15 minutes late, but the customer was happy with the project.", pl: "Anna spóźniła się 15 minut, ale klient był zadowolony z projektu." }
    ],
    questions: [
      { q: "Where was Anna's hotel?", qpl: "Gdzie był hotel Anny?", options: ["Near the station.", "Opposite the bridge.", "On the corner."], answer: 0 },
      { q: "Where was there a lot of traffic?", qpl: "Gdzie był duży ruch?", options: ["In the park.", "On the bridge.", "At the station."], answer: 1 },
      { q: "How late was Anna?", qpl: "Ile minut spóźniła się Anna?", options: ["5 minutes.", "30 minutes.", "15 minutes."], answer: 2 }
    ]
  },
  dialog: {
    intro: "Kolega z pracy pyta cię o wczorajsze spotkanie z klientem w centrum miasta.",
    turns: [
      { bot: "Hi! Where were you yesterday?", botpl: "Cześć! Gdzie byłeś wczoraj?",
        options: ["I were in the city center.", "I was in the city center.", "I am in the city center yesterday."], answer: 1,
        hint: "I was in..." },
      { bot: "Was the meeting near the station?", botpl: "Spotkanie było blisko dworca?",
        options: ["Yes, it was next to the station.", "Yes, it were next to the station.", "Yes, it was next the station."], answer: 0,
        hint: "Yes, it was next to..." },
      { bot: "Was there a lot of traffic?", botpl: "Był duży ruch?",
        options: ["Yes, there were a lot of traffics.", "Yes, it was many traffic.", "Yes, there was a lot of traffic."], answer: 2,
        hint: "Yes, there was..." },
      { bot: "Were the customers happy?", botpl: "Klienci byli zadowoleni?",
        options: ["Yes, they was very happy.", "Yes, they were very happy.", "Yes, they are happy yesterday."], answer: 1,
        hint: "Yes, they were..." },
      { bot: "Great! And where is our new office?", botpl: "Super! A gdzie jest nasze nowe biuro?",
        options: ["It is opposite the park, on the left.", "It is opposite of the park, in the left.", "It is in front the park, on left."], answer: 0,
        hint: "It is opposite..." },
      { bot: "Thanks! Is there a map on our website?", botpl: "Dzięki! Czy na naszej stronie jest mapa?",
        options: ["Yes, there are a map in the website.", "Yes, it is map on website.", "Yes, there is a map on the website."], answer: 2,
        hint: "Yes, there is..." }
    ]
  }
});
