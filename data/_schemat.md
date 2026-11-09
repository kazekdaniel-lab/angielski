# Schemat danych tygodnia - aplikacja do nauki angielskiego (A1-A2)

Uczeń: Polak, poziom A1-A2, zainteresowania: biznes, e-commerce, marketing. Aplikacja w stylu Duolingo: krótkie lekcje, fiszki z pudełkami, odsłuch przez syntezator mowy (en-US).

Każdy tydzień to osobny plik `data/week-NN.js` (NN = 01..12). Plik dokleja obiekt do globalnej tablicy:

```js
window.WEEKS = window.WEEKS || [];
window.WEEKS.push({ ... });
```

To ma być poprawny JavaScript (podwójne cudzysłowy w stringach, apostrofy w tekście angielskim wewnątrz "..." są OK). Bez komentarzy wewnątrz obiektu poza nagłówkiem pliku.

## Program (tydzień: słowa | gramatyka)

1. liczby, dni, godziny | to be (am / is / are)
2. rodzina i ludzie | zaimki i my / your / his / her
3. jedzenie i picie | a / an / the, liczba mnoga
4. dom i przedmioty | there is / there are
5. czasowniki codzienne | Present Simple (zdania twierdzące)
6. praca i biuro | Present Simple (pytania i przeczenia)
7. zakupy i pieniądze | can / can't
8. przymiotniki, opisywanie | Present Continuous
9. miasto i kierunki | was / were
10. podróże | Past Simple (czasowniki regularne)
11. czas wolny | Past Simple (czasowniki nieregularne)
12. plany i przyszłość | going to + powtórka całości

## Lista słów (STAŁA, nie zmieniaj, nie dodawaj, nie usuwaj)

part 1 = dzień 1 (7 słów), part 2 = dzień 3 (6 słów), part 3 = dzień 4, słowa z tekstu do czytania (2 słowa).

| Tydz. | part 1 | part 2 | part 3 |
|---|---|---|---|
| 1 | Monday, Wednesday, Thursday, today, tomorrow, week, hour | thirteen, thirty, hundred, thousand, half past, o'clock | weekend, minute |
| 2 | mother, father, brother, sister, wife, husband, child | friend, boss, customer, team, people, partner | colleague, daughter |
| 3 | water, coffee, tea, bread, apple, egg, milk | breakfast, lunch, dinner, sandwich, cheese, vegetables | menu, bottle |
| 4 | house, flat, room, kitchen, table, chair, door | window, desk, lamp, bed, shelf, laptop | box, key |
| 5 | work, eat, drink, sleep, go, read, write | buy, sell, open, start, finish, send | check, call |
| 6 | office, meeting, job, manager, report, deadline, salary | invoice, task, project, schedule, contract, employee | email, break |
| 7 | shop, money, price, cheap, expensive, pay, card | cash, discount, receipt, order, delivery, return | size, basket |
| 8 | big, small, new, old, fast, slow, good | bad, happy, busy, tired, easy, difficult | beautiful, important |
| 9 | street, city, station, hotel, left, right, straight on | near, next to, opposite, corner, bridge, park | map, traffic |
| 10 | travel, trip, plane, train, airport, ticket, passport | luggage, booking, arrive, visit, stay, abroad | guide, beach |
| 11 | hobby, film, music, book, sport, game, party | concert, gym, swim, dance, cook, relax | free time, podcast |
| 12 | plan, future, next, soon, goal, dream, idea | tonight, later, year, month, launch, grow | decide, success |

## Struktura obiektu

```js
{
  week: 1,
  title: "Liczby, dni, godziny",              // temat słów, po polsku
  grammar: {
    title: "to be (am / is / are)",
    explain: ["...", "..."],                   // 2-4 krótkie akapity PO POLSKU, prosto, bez terminologii; termin = wyjaśnij jednym zdaniem
    table: [["I", "am", "I'm"], ["you", "are", "you're"]],  // opcjonalnie: 2-8 wierszy, krótka ściąga (może być [])
    examples: [ { en: "I am a manager.", pl: "Jestem menedżerem." } ],   // DOKŁADNIE 3
    exercises: [                               // DOKŁADNIE 10 (1-6 = lekcja gramatyki, 7-10 = test tygodnia)
      { type: "choice", q: "She ___ my boss.", options: ["am", "is", "are"], answer: 1,
        pl: "Ona jest moją szefową.", why: "Przy she zawsze is." },
      { type: "gap", q: "We ___ in the office.", answer: ["are", "'re"],
        pl: "Jesteśmy w biurze.", why: "Przy we zawsze are." }
    ]                                          // mieszaj: ok. 5 choice + 5 gap; "___" dokładnie raz w q; answer w gap = lista poprawnych wpisów (małe litery)
  },
  words: [                                     // DOKŁADNIE 15, kolejność jak w tabeli (part 1, part 2, part 3)
    {
      id: "w1-monday",                         // "w" + nr tygodnia + "-" + słowo małymi literami, spacje i apostrofy zamień na "-"
      en: "Monday",
      pl: "poniedziałek",                      // główne tłumaczenie; jeśli 2 znaczenia: "praca; pracować"
      say: "mandej",                           // wymowa polskimi literami, amerykański angielski (konwencja niżej)
      pos: "rzeczownik",                       // rzeczownik | czasownik | przymiotnik | przysłówek | liczebnik | przyimek | wyrażenie
      part: 1,
      emoji: "📅",                             // 1 emoji pasujące do słowa
      ex: [                                    // DOKŁADNIE 2 zdania przykładowe, krótkie (4-9 słów), drugie z kontekstu biznes / e-commerce / marketing
        { en: "Today is Monday.", pl: "Dzisiaj jest poniedziałek." },
        { en: "The sale starts on Monday.", pl: "Wyprzedaż zaczyna się w poniedziałek." }
      ],
      phrases: [ { en: "on Monday", pl: "w poniedziałek" } ],   // 2-3 popularne połączenia z tym słowem
      family: [ "Tuesday - wtorek", "Friday - piątek" ],        // 2-5 słów powiązanych, format "word - słowo"
      forms: "",                               // odmiana, jeśli nieregularna lub ważna: "l.mn. children", "went (przeszły)", "better - best"; inaczej ""
      note: "Dni tygodnia piszemy wielką literą. Mówimy ON Monday, nie IN Monday.",  // typowy błąd Polaka albo pułapka, 1-2 zdania PL
      mnemo: "MANDEJ - w poniedziałek MANDAT za spóźnienie do pracy."           // skojarzenie ułatwiające zapamiętanie, PL, krótko, z humorem
    }
  ],
  sentences: [                                 // DOKŁADNIE 12
    { use: "L1", en: "Today is Monday.", pl: "Dzisiaj jest poniedziałek.", alt: [] },
    // L1 x3: bardzo proste zdania (3-6 słów) ze słowami part 1, do tłumaczenia EN -> PL i układania z kafelków
    // L3 x4: zdania (4-8 słów) ze słowami part 2 + gramatyka tygodnia, układane z kafelków PL -> EN
    // L5 x5: pełne zdania (4-9 słów) do wpisania PL -> EN, słowa z całego tygodnia + gramatyka tygodnia
    // alt = inne poprawne wersje angielskie (np. inny szyk), bez wersji różniących się tylko skrótem (I'm / I am to silnik obsługuje sam)
  ],
  reading: {
    title: "Tydzień w sklepie internetowym",   // tytuł PL
    text: [ { en: "...", pl: "..." } ],        // 5-7 zdań; TYLKO słowa z tego i wcześniejszych tygodni + podstawowe słowa A1 (I, you, a, the, and, is, my, in, on, at, this...); MUSI zawierać oba słowa part 3
    questions: [                               // DOKŁADNIE 3, pytanie po angielsku, odpowiedź wynika z tekstu
      { q: "What day is the meeting?", qpl: "W jaki dzień jest spotkanie?", options: ["On Monday.", "On Friday.", "On Sunday."], answer: 0 }
    ]
  },
  dialog: {
    intro: "Nowy kolega z zespołu pyta cię o grafik.",   // 1 zdanie PL, sytuacja
    turns: [                                   // DOKŁADNIE 6 wymian
      { bot: "Hi! Is the meeting today?", botpl: "Cześć! Czy spotkanie jest dzisiaj?",
        options: ["No, it is tomorrow.", "No, it are tomorrow.", "No, tomorrow is it."], answer: 0,
        hint: "No, it is..." }
      // 3 opcje: 1 poprawna, 2 z typowym błędem (gramatyka lub sens); answer = indeks poprawnej
    ]
  }
}
```

## Zasady treści

- Poziom A1-A2. Zdania krótkie i naturalne, takie, jakie mówi się naprawdę.
- Gramatyka w zdaniach nie wychodzi ponad tydzień, w którym jest (tydzień N używa gramatyki tygodni 1..N). Wyjątek: proste utarte zwroty (Thank you, How are you?).
- Przykłady z życia, pracy w e-commerce i marketingu (sklep internetowy, zamówienia, klienci, kampanie, social media), ale bez żargonu ponad poziom.
- Polski naturalny, jak mówi człowiek, zero kalek z angielskiego.
- Liczby w polskich tekstach cyframi.
- Myślnik: wyłącznie zwykły "-" (U+002D). NIGDY półpauza (U+2013) ani pauza (U+2014). Też w "family" i wszędzie indziej.
- Nie zmyślaj faktów o marce ani osobach. Imiona w przykładach: zwykłe angielskie (Anna, Tom, Kate, Mark).

## Wymowa polskimi literami (pole `say`), amerykański angielski

- w -> ł (water [łoter], week [łik]); th bezdźwięczne -> f (thought [fot], thirty [ferti]); th dźwięczne -> d (the [de], mother [mader])
- sh -> sz, ch -> cz, j / g miękkie -> dż (job [dżob], page [pejdż])
- długie i -> i (meet [mit]); krótkie i -> y (sit [syt]); ei -> ej (day [dej]); ou -> ou (go [gou]); ai -> aj (time [tajm]); au -> ał (hour [ałer])
- a jak w cat -> e (cat [ket]); u jak w cup -> a (cup [kap], Monday [mandej])
- er na końcu -> er (manager [menedżer]); r wymawiane
- Bez znaków akcentu, bez apostrofów, małe litery, bez nawiasów (nawiasy dodaje aplikacja).
