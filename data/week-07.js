window.WEEKS = window.WEEKS || [];
window.WEEKS.push({
  week: 7,
  title: "Zakupy i pieniądze",
  grammar: {
    title: "can / can't",
    explain: [
      "Can znaczy móc albo umieć. Mówisz nim, co potrafisz i co jest możliwe: I can speak English. You can pay by card.",
      "Can ma tę samą formę przy każdej osobie, bez -s: I can, she can, they can. Po can stoi czasownik w podstawowej formie, bez to: She can pay, nie She can to pay ani She cans pay.",
      "Przeczenie to can't (cannot): We can't send the order today. W pytaniu can idzie na początek: Can I pay by card? Odpowiadasz krótko: Yes, you can. / No, you can't.",
      "Can I...? to też grzeczna prośba w sklepie i w pracy: Can I have a receipt, please? - Mogę prosić o paragon?"
    ],
    table: [
      ["I / you / he / she / we / they", "can pay", "She can pay by card."],
      ["przeczenie", "can't pay", "We can't pay in cash."],
      ["pytanie", "Can I pay...?", "Can I pay by card?"],
      ["krótka odpowiedź", "Yes, you can.", "No, you can't."]
    ],
    examples: [
      { en: "You can pay by card or in cash.", pl: "Możesz zapłacić kartą albo gotówką." },
      { en: "We can't send the order today.", pl: "Nie możemy dziś wysłać zamówienia." },
      { en: "Can I return these shoes?", pl: "Czy mogę zwrócić te buty?" }
    ],
    exercises: [
      { type: "choice", q: "She ___ speak three languages.", options: ["can", "cans", "can to"], answer: 0,
        pl: "Ona mówi w 3 językach.", why: "Can jest takie samo przy każdej osobie: she can, nie she cans." },
      { type: "gap", q: "You ___ pay by card here. We only take cash.", answer: ["can't", "cannot", "can not"],
        pl: "Tutaj nie zapłacisz kartą. Przyjmujemy tylko gotówkę.", why: "Tylko gotówka, więc kartą nie można: can't." },
      { type: "choice", q: "___ I have a receipt, please?", options: ["Can", "Does", "Am"], answer: 0,
        pl: "Mogę prosić o paragon?", why: "Grzeczna prośba zaczyna się od Can I...?" },
      { type: "gap", q: "We can ___ (send) the order tomorrow.", answer: ["send"],
        pl: "Możemy wysłać zamówienie jutro.", why: "Po can czasownik w podstawowej formie, bez to i bez -s." },
      { type: "choice", q: "Can he ___ by card?", options: ["pays", "pay", "to pay"], answer: 1,
        pl: "Czy on może zapłacić kartą?", why: "Po can zawsze forma podstawowa: pay." },
      { type: "gap", q: "Can I return this jacket? - Yes, you ___.", answer: ["can"],
        pl: "Mogę zwrócić tę kurtkę? - Tak, możesz.", why: "W krótkiej odpowiedzi powtarzasz can: Yes, you can." },
      { type: "choice", q: "Sorry, I ___ find my card.", options: ["can't", "don't can", "not can"], answer: 0,
        pl: "Przepraszam, nie mogę znaleźć karty.", why: "Przeczenie od can to can't. Nie dodajesz don't." },
      { type: "gap", q: "Customers ___ return shoes within 30 days.", answer: ["can"],
        pl: "Klienci mogą zwrócić buty w ciągu 30 dni.", why: "Mogą to can, takie samo przy każdej osobie." },
      { type: "choice", q: "Where ___ I pay?", options: ["can", "does", "is"], answer: 0,
        pl: "Gdzie mogę zapłacić?", why: "Pytanie z where: Where can I...?" },
      { type: "gap", q: "Tom can't ___ (pay) in cash today.", answer: ["pay"],
        pl: "Tom nie może dziś zapłacić gotówką.", why: "Po can't czasownik w podstawowej formie, bez -s." }
    ]
  },
  words: [
    {
      id: "w7-shop",
      en: "shop",
      pl: "sklep; robić zakupy",
      say: "szop",
      pos: "rzeczownik",
      part: 1,
      emoji: "🏪",
      ex: [
        { en: "There is a shop near my house.", pl: "Koło mojego domu jest sklep." },
        { en: "You can buy our coffee in the online shop.", pl: "Naszą kawę kupisz w sklepie internetowym." }
      ],
      phrases: [
        { en: "online shop", pl: "sklep internetowy" },
        { en: "go shopping", pl: "iść na zakupy" },
        { en: "shop assistant", pl: "sprzedawca, ekspedientka" }
      ],
      family: ["store - sklep (w USA)", "shopping - zakupy", "shopper - kupujący"],
      forms: "jako czasownik: he shops; shopping",
      note: "W USA częściej usłyszysz store, w Wielkiej Brytanii shop. Zakupy to shopping, nie shops.",
      mnemo: "SZOP - SZOP pracz w sklepie bierze wszystko, co błyszczy."
    },
    {
      id: "w7-money",
      en: "money",
      pl: "pieniądze",
      say: "mani",
      pos: "rzeczownik",
      part: 1,
      emoji: "💰",
      ex: [
        { en: "I don't have money for a new phone.", pl: "Nie mam pieniędzy na nowy telefon." },
        { en: "We can save money on delivery.", pl: "Możemy zaoszczędzić na dostawie." }
      ],
      phrases: [
        { en: "save money", pl: "oszczędzać pieniądze" },
        { en: "spend money", pl: "wydawać pieniądze" },
        { en: "make money", pl: "zarabiać pieniądze" }
      ],
      family: ["cash - gotówka", "coin - moneta", "rich - bogaty"],
      forms: "tylko liczba pojedyncza: the money is, nie the money are",
      note: "Po polsku pieniądze są w liczbie mnogiej, a po angielsku money w pojedynczej: The money is in the bank. Nie ma słowa moneys.",
      mnemo: "MANI - masz MANIĘ na punkcie kasy."
    },
    {
      id: "w7-price",
      en: "price",
      pl: "cena",
      say: "prajs",
      pos: "rzeczownik",
      part: 1,
      emoji: "💲",
      ex: [
        { en: "The price is 20 dollars.", pl: "Cena to 20 dolarów." },
        { en: "Can you check the price on the website?", pl: "Możesz sprawdzić cenę na stronie?" }
      ],
      phrases: [
        { en: "a low price", pl: "niska cena" },
        { en: "full price", pl: "pełna cena" },
        { en: "price list", pl: "cennik" }
      ],
      family: ["cost - koszt; kosztować", "cheap - tani", "expensive - drogi"],
      forms: "",
      note: "Cena jest high albo low. Expensive mówisz o produkcie: The bag is expensive, ale The price is high.",
      mnemo: "PRAJS - PRAŻYNKI za taką cenę? Biorę 10 paczek!"
    },
    {
      id: "w7-cheap",
      en: "cheap",
      pl: "tani",
      say: "czip",
      pos: "przymiotnik",
      part: 1,
      emoji: "🪙",
      ex: [
        { en: "This coffee is cheap and good.", pl: "Ta kawa jest tania i dobra." },
        { en: "Customers can find cheap shoes in our shop.", pl: "U nas klienci znajdą tanie buty." }
      ],
      phrases: [
        { en: "really cheap", pl: "naprawdę tani" },
        { en: "cheap flights", pl: "tanie loty" },
        { en: "cheap and good", pl: "tani i dobry" }
      ],
      family: ["expensive - drogi", "price - cena", "low-cost - tani, niskobudżetowy"],
      forms: "cheaper - cheapest",
      note: "Cheap bywa negatywne, jak polskie tandetny. W reklamie częściej piszemy affordable albo low price.",
      mnemo: "CZIP - tani CZIP w telefonie, dlatego wszystko się zawiesza."
    },
    {
      id: "w7-expensive",
      en: "expensive",
      pl: "drogi (kosztowny)",
      say: "ykspensyw",
      pos: "przymiotnik",
      part: 1,
      emoji: "💎",
      ex: [
        { en: "This laptop is very expensive.", pl: "Ten laptop jest bardzo drogi." },
        { en: "TV ads are very expensive.", pl: "Reklamy w telewizji są bardzo drogie." }
      ],
      phrases: [
        { en: "too expensive", pl: "za drogi" },
        { en: "very expensive", pl: "bardzo drogi" },
        { en: "an expensive brand", pl: "droga marka" }
      ],
      family: ["cheap - tani", "price - cena", "cost - koszt"],
      forms: "more expensive - the most expensive",
      note: "Drogi jak cena to expensive, a droga jak ulica to road. Stopień wyższy: more expensive, nie expensiver.",
      mnemo: "YKSPENSYW - po drogich zakupach twoja pensja to już EKS-PENSJA."
    },
    {
      id: "w7-pay",
      en: "pay",
      pl: "płacić",
      say: "pej",
      pos: "czasownik",
      part: 1,
      emoji: "💸",
      ex: [
        { en: "I pay for lunch today.", pl: "Dzisiaj ja płacę za lunch." },
        { en: "Customers can pay online or on delivery.", pl: "Klienci mogą zapłacić online albo przy odbiorze." }
      ],
      phrases: [
        { en: "pay by card", pl: "płacić kartą" },
        { en: "pay in cash", pl: "płacić gotówką" },
        { en: "pay for something", pl: "zapłacić za coś" }
      ],
      family: ["payment - płatność", "salary - pensja", "bill - rachunek"],
      forms: "he pays; paid (przeszły)",
      note: "Płacisz za coś: pay for lunch, nie pay lunch. Ale rachunek płacisz bez for: pay the bill.",
      mnemo: "PEJ - płacisz rachunek i boli jak smagnięcie PEJCZEM."
    },
    {
      id: "w7-card",
      en: "card",
      pl: "karta",
      say: "kard",
      pos: "rzeczownik",
      part: 1,
      emoji: "💳",
      ex: [
        { en: "Here is my card.", pl: "Proszę, oto moja karta." },
        { en: "Can I pay by card?", pl: "Mogę zapłacić kartą?" }
      ],
      phrases: [
        { en: "credit card", pl: "karta kredytowa" },
        { en: "gift card", pl: "karta podarunkowa" },
        { en: "business card", pl: "wizytówka" }
      ],
      family: ["cash - gotówka", "wallet - portfel", "PIN - PIN"],
      forms: "",
      note: "Kartą płacisz by card, nie with card. Wizytówka to business card.",
      mnemo: "KARD - widzisz wyciąg z karty i potrzebujesz KARDIOLOGA."
    },
    {
      id: "w7-cash",
      en: "cash",
      pl: "gotówka",
      say: "kesz",
      pos: "rzeczownik",
      part: 2,
      emoji: "💵",
      ex: [
        { en: "I don't have cash with me.", pl: "Nie mam przy sobie gotówki." },
        { en: "Can I pay in cash on delivery?", pl: "Mogę zapłacić gotówką przy odbiorze?" }
      ],
      phrases: [
        { en: "pay in cash", pl: "płacić gotówką" },
        { en: "cash on delivery", pl: "płatność przy odbiorze" },
        { en: "cash back", pl: "zwrot części pieniędzy" }
      ],
      family: ["money - pieniądze", "card - karta", "ATM - bankomat"],
      forms: "",
      note: "Gotówką płacisz in cash, a kartą by card. Cash jest niepoliczalne: some cash, nie a cash.",
      mnemo: "KESZ - dawniej płaciło się KASZĄ, dziś gotówką."
    },
    {
      id: "w7-discount",
      en: "discount",
      pl: "zniżka, rabat",
      say: "dyskałnt",
      pos: "rzeczownik",
      part: 2,
      emoji: "🔖",
      ex: [
        { en: "Students get a 10% discount.", pl: "Studenci mają 10% zniżki." },
        { en: "Can I get a discount on a big order?", pl: "Mogę dostać rabat przy dużym zamówieniu?" }
      ],
      phrases: [
        { en: "a 20% discount", pl: "20% zniżki" },
        { en: "discount code", pl: "kod rabatowy" },
        { en: "get a discount", pl: "dostać zniżkę" }
      ],
      family: ["sale - wyprzedaż", "promotion - promocja", "coupon - kupon"],
      forms: "",
      note: "Zniżka na coś to a discount on, nie for: a discount on shoes. Kod rabatowy to discount code albo promo code.",
      mnemo: "DYSKAŁNT - w DYSKONCIE każda zniżka cieszy."
    },
    {
      id: "w7-receipt",
      en: "receipt",
      pl: "paragon",
      say: "rysit",
      pos: "rzeczownik",
      part: 2,
      emoji: "🧾",
      ex: [
        { en: "Here is your receipt.", pl: "Proszę, oto paragon." },
        { en: "Can I have a receipt, please?", pl: "Mogę prosić o paragon?" }
      ],
      phrases: [
        { en: "keep the receipt", pl: "zachować paragon" },
        { en: "a receipt for", pl: "paragon za" },
        { en: "email receipt", pl: "paragon na maila" }
      ],
      family: ["invoice - faktura", "bill - rachunek", "return - zwrot"],
      forms: "",
      note: "P jest nieme: [rysit]. To nie recepta, recepta to prescription.",
      mnemo: "RYSIT - RYŚ z działu IT zawsze chowa paragony."
    },
    {
      id: "w7-order",
      en: "order",
      pl: "zamówienie; zamawiać",
      say: "order",
      pos: "rzeczownik",
      part: 2,
      emoji: "📦",
      ex: [
        { en: "I can order pizza for the team.", pl: "Mogę zamówić pizzę dla zespołu." },
        { en: "We get 50 orders every day.", pl: "Codziennie dostajemy 50 zamówień." }
      ],
      phrases: [
        { en: "place an order", pl: "złożyć zamówienie" },
        { en: "order number", pl: "numer zamówienia" },
        { en: "order online", pl: "zamawiać przez internet" }
      ],
      family: ["delivery - dostawa", "customer - klient", "cart - koszyk (w sklepie internetowym)"],
      forms: "jako czasownik: he orders",
      note: "Polski order to medal, a angielski order to zamówienie. In order znaczy w porządku albo po kolei.",
      mnemo: "ORDER - za 1000 zamówień szef daje ci ORDER."
    },
    {
      id: "w7-delivery",
      en: "delivery",
      pl: "dostawa",
      say: "dylyweri",
      pos: "rzeczownik",
      part: 2,
      emoji: "🚚",
      ex: [
        { en: "Delivery is free today.", pl: "Dzisiaj dostawa jest darmowa." },
        { en: "We can offer next-day delivery.", pl: "Możemy zaoferować dostawę na następny dzień." }
      ],
      phrases: [
        { en: "free delivery", pl: "darmowa dostawa" },
        { en: "delivery time", pl: "czas dostawy" },
        { en: "home delivery", pl: "dostawa do domu" }
      ],
      family: ["deliver - dostarczać", "courier - kurier", "parcel - paczka"],
      forms: "",
      note: "W amerykańskich sklepach internetowych często zobaczysz shipping zamiast delivery: free shipping - darmowa wysyłka.",
      mnemo: "DYLYWERI - DELIkatesy z dostawą: pyszne i pod same drzwi."
    },
    {
      id: "w7-return",
      en: "return",
      pl: "zwracać; zwrot",
      say: "rytern",
      pos: "czasownik",
      part: 2,
      emoji: "↩️",
      ex: [
        { en: "Can I return this jacket?", pl: "Mogę zwrócić tę kurtkę?" },
        { en: "Returns are free in our shop.", pl: "W naszym sklepie zwroty są darmowe." }
      ],
      phrases: [
        { en: "free returns", pl: "darmowe zwroty" },
        { en: "return an item", pl: "zwrócić produkt" },
        { en: "return policy", pl: "zasady zwrotów" }
      ],
      family: ["refund - zwrot pieniędzy", "exchange - wymiana", "come back - wracać"],
      forms: "he returns",
      note: "Return to też wracać: I return home at 6. Zwrot towaru to return, a zwrot pieniędzy to refund.",
      mnemo: "RYTERN - klawisz RETURN też cię zwraca na początek linii."
    },
    {
      id: "w7-size",
      en: "size",
      pl: "rozmiar",
      say: "sajz",
      pos: "rzeczownik",
      part: 3,
      emoji: "📏",
      ex: [
        { en: "What size are these shoes?", pl: "Jaki rozmiar mają te buty?" },
        { en: "Can I change the size in my order?", pl: "Mogę zmienić rozmiar w zamówieniu?" }
      ],
      phrases: [
        { en: "what size?", pl: "jaki rozmiar?" },
        { en: "size chart", pl: "tabela rozmiarów" },
        { en: "one size", pl: "rozmiar uniwersalny" }
      ],
      family: ["small - mały", "medium - średni", "large - duży"],
      forms: "",
      note: "Mam rozmiar M to I'm a medium albo I'm size M, nie I have size M. Buty w USA mają inne numery, np. 9 zamiast 42.",
      mnemo: "SAJZ - SAJGON w przymierzalni: żaden rozmiar nie pasuje."
    },
    {
      id: "w7-basket",
      en: "basket",
      pl: "koszyk",
      say: "beskyt",
      pos: "rzeczownik",
      part: 3,
      emoji: "🧺",
      ex: [
        { en: "My basket is full of fruit.", pl: "Mój koszyk jest pełen owoców." },
        { en: "Many customers leave products in the basket.", pl: "Dużo klientów zostawia produkty w koszyku." }
      ],
      phrases: [
        { en: "shopping basket", pl: "koszyk na zakupy" },
        { en: "add to basket", pl: "dodaj do koszyka" },
        { en: "abandoned basket", pl: "porzucony koszyk" }
      ],
      family: ["cart - koszyk (w USA)", "checkout - kasa, finalizacja zakupu", "bag - torba"],
      forms: "",
      note: "W amerykańskich sklepach internetowych częściej zobaczysz cart (Add to cart), w brytyjskich basket.",
      mnemo: "BESKYT - jak w BASKETBALLU: wrzucasz produkty do KOSZA."
    }
  ],
  sentences: [
    { use: "L1", en: "This shop is cheap.", pl: "Ten sklep jest tani.", alt: [] },
    { use: "L1", en: "I pay by card.", pl: "Płacę kartą.", alt: [] },
    { use: "L1", en: "The bag is very expensive.", pl: "Ta torebka jest bardzo droga.", alt: [] },
    { use: "L3", en: "Can I pay in cash?", pl: "Mogę zapłacić gotówką?", alt: [] },
    { use: "L3", en: "You can return the shoes.", pl: "Możesz zwrócić buty.", alt: [] },
    { use: "L3", en: "We can't send your order today.", pl: "Nie możemy dziś wysłać twojego zamówienia.", alt: [] },
    { use: "L3", en: "Can I get a discount?", pl: "Mogę dostać zniżkę?", alt: [] },
    { use: "L5", en: "Can I have a receipt, please?", pl: "Mogę prosić o paragon?",
      alt: ["Can I have a receipt?", "Can I get a receipt, please?", "Can I get a receipt?", "Can I have the receipt, please?"] },
    { use: "L5", en: "Customers can pay by card or in cash.", pl: "Klienci mogą płacić kartą albo gotówką.",
      alt: ["Customers can pay in cash or by card.", "The customers can pay by card or in cash."] },
    { use: "L5", en: "I can't find my size.", pl: "Nie mogę znaleźć swojego rozmiaru.",
      alt: [] },
    { use: "L5", en: "We can send the order tomorrow.", pl: "Możemy wysłać zamówienie jutro.",
      alt: ["Tomorrow we can send the order.", "We can ship the order tomorrow."] },
    { use: "L5", en: "Can you check the delivery time?", pl: "Możesz sprawdzić czas dostawy?",
      alt: [] }
  ],
  reading: {
    title: "Buty przez internet",
    text: [
      { en: "Kate needs shoes for work.", pl: "Kate potrzebuje butów do pracy." },
      { en: "She goes to an online shop and checks the prices.", pl: "Wchodzi do sklepu internetowego i sprawdza ceny." },
      { en: "The black shoes are expensive, but the white shoes are cheap.", pl: "Czarne buty są drogie, ale białe są tanie." },
      { en: "The shop has her size, so she puts the white shoes in her basket.", pl: "Sklep ma jej rozmiar, więc wrzuca białe buty do koszyka." },
      { en: "With a discount code, she can pay only 20 dollars.", pl: "Z kodem rabatowym może zapłacić tylko 20 dolarów." },
      { en: "She pays by card, and delivery is free.", pl: "Płaci kartą, a dostawa jest darmowa." }
    ],
    questions: [
      { q: "Which shoes are cheap?", qpl: "Które buty są tanie?",
        options: ["The black shoes.", "The white shoes.", "All the shoes."], answer: 1 },
      { q: "How does Kate pay?", qpl: "Jak płaci Kate?",
        options: ["By card.", "In cash.", "She can't pay."], answer: 0 },
      { q: "Is delivery expensive?", qpl: "Czy dostawa jest droga?",
        options: ["Yes, it's 20 dollars.", "Yes, it is.", "No, it's free."], answer: 2 }
    ]
  },
  dialog: {
    intro: "Jesteś w sklepie z ubraniami i chcesz kupić kurtkę.",
    turns: [
      { bot: "Hello! Can I help you?", botpl: "Dzień dobry! W czym mogę pomóc?",
        options: ["Yes, please. I need a jacket.", "Yes, please. I can need a jacket.", "Yes, please. I need jacket."], answer: 0,
        hint: "I need a jacket." },
      { bot: "What size are you?", botpl: "Jaki rozmiar nosisz?",
        options: ["I have size M.", "I'm a medium.", "My size are medium."], answer: 1,
        hint: "I'm a medium." },
      { bot: "Here you are. This jacket is 120 dollars.", botpl: "Proszę bardzo. Ta kurtka kosztuje 120 dolarów.",
        options: ["Oh, the price is very expensive.", "Oh, it's very expensive.", "Oh, it's very expensively."], answer: 1,
        hint: "It's very expensive." },
      { bot: "But today we have a 20% discount.", botpl: "Ale dziś mamy 20% zniżki.",
        options: ["Great! Can I pay by card?", "Great! Can I to pay by card?", "Great! Can I pays by card?"], answer: 0,
        hint: "Can I pay...?" },
      { bot: "Yes, of course. Here is your receipt.", botpl: "Tak, oczywiście. Proszę, oto paragon.",
        options: ["Thank you. I can return it?", "Thank you. Can I return it?", "Thank you. Do I can return it?"], answer: 1,
        hint: "Can I return...?" },
      { bot: "Yes, you can. You have 30 days.", botpl: "Tak, możesz. Masz na to 30 dni.",
        options: ["Perfect. Thanks you very much!", "Perfect. Thank you very much!", "Perfect. Thank you very much you!"], answer: 1,
        hint: "Thank you very much!" }
    ]
  }
});
