window.WEEKS = window.WEEKS || [];
window.WEEKS.push({
  week: 6,
  title: "Praca i biuro",
  grammar: {
    title: "Present Simple (pytania i przeczenia)",
    explain: [
      "Przeczenie robisz z don't (skrót od do not) przed czasownikiem: I don't work on Sundays - Nie pracuję w niedziele.",
      "Przy he, she, it zamiast don't jest doesn't (does not), a czasownik traci -s: She doesn't work on Mondays, nie She doesn't works.",
      "Pytanie zaczynasz od Do, a przy he, she, it od Does: Do you like your job? Does Tom work here? Po does czasownik też jest bez -s.",
      "Krótkie odpowiedzi: Yes, I do. / No, I don't. Yes, she does. / No, she doesn't. Słowo pytające stoi na samym początku: What time do you start? Where does she work?"
    ],
    table: [
      ["I / you / we / they", "don't work", "Do you work?"],
      ["he / she / it", "doesn't work", "Does she work?"],
      ["krótka odpowiedź", "Yes, I do.", "No, I don't."],
      ["krótka odpowiedź", "Yes, she does.", "No, she doesn't."]
    ],
    examples: [
      { en: "I don't work on Saturdays.", pl: "Nie pracuję w soboty." },
      { en: "Does Tom have a meeting today?", pl: "Czy Tom ma dziś spotkanie?" },
      { en: "Where do you work?", pl: "Gdzie pracujesz?" }
    ],
    exercises: [
      { type: "choice", q: "She ___ work on Sundays.", options: ["don't", "doesn't", "isn't"], answer: 1,
        pl: "Ona nie pracuje w niedziele.", why: "Przy she przeczenie to doesn't." },
      { type: "gap", q: "I ___ (not) like long meetings.", answer: ["don't", "do not"],
        pl: "Nie lubię długich spotkań.", why: "Przy I przeczenie to don't." },
      { type: "choice", q: "___ you have a meeting today?", options: ["Do", "Does", "Are"], answer: 0,
        pl: "Masz dziś spotkanie?", why: "Przy you pytanie zaczynasz od Do." },
      { type: "gap", q: "___ your manager work in this office?", answer: ["does"],
        pl: "Czy twój kierownik pracuje w tym biurze?", why: "Your manager to he albo she, więc Does." },
      { type: "choice", q: "Does Kate ___ the report on Fridays?", options: ["send", "sends", "sending"], answer: 0,
        pl: "Czy Kate wysyła raport w piątki?", why: "Po does czasownik w podstawowej formie, bez -s." },
      { type: "gap", q: "Tom ___ (not) answer emails on the weekend.", answer: ["doesn't", "does not"],
        pl: "Tom nie odpowiada na maile w weekendy.", why: "Tom to he, więc doesn't." },
      { type: "choice", q: "Where ___ your sister work?", options: ["do", "does", "is"], answer: 1,
        pl: "Gdzie pracuje twoja siostra?", why: "Your sister to she, więc does." },
      { type: "gap", q: "We ___ (not) work on Sundays.", answer: ["don't", "do not"],
        pl: "Nie pracujemy w niedziele.", why: "Przy we przeczenie to don't." },
      { type: "choice", q: "Do they like the office? - Yes, they ___.", options: ["do", "does", "are"], answer: 0,
        pl: "Podoba im się biuro? - Tak.", why: "Na pytanie z Do odpowiadasz krótko: Yes, they do." },
      { type: "gap", q: "What time ___ the meeting start?", answer: ["does"],
        pl: "O której zaczyna się spotkanie?", why: "The meeting to it, więc does." }
    ]
  },
  words: [
    {
      id: "w6-office",
      en: "office",
      pl: "biuro",
      say: "ofys",
      pos: "rzeczownik",
      part: 1,
      emoji: "🏢",
      ex: [
        { en: "My office is in Warsaw.", pl: "Moje biuro jest w Warszawie." },
        { en: "Do you work in the office or at home?", pl: "Pracujesz w biurze czy w domu?" }
      ],
      phrases: [
        { en: "in the office", pl: "w biurze" },
        { en: "office hours", pl: "godziny pracy biura" },
        { en: "head office", pl: "centrala, siedziba główna" }
      ],
      family: ["desk - biurko", "office worker - pracownik biurowy", "officer - urzędnik; funkcjonariusz"],
      forms: "",
      note: "Biurko to desk, nie office. Office to całe biuro albo gabinet.",
      mnemo: "OFYS - w korpo mówią 'idę na ofis', czyli do biura."
    },
    {
      id: "w6-meeting",
      en: "meeting",
      pl: "spotkanie, zebranie",
      say: "mityng",
      pos: "rzeczownik",
      part: 1,
      emoji: "👥",
      ex: [
        { en: "The meeting starts at 10 o'clock.", pl: "Spotkanie zaczyna się o 10." },
        { en: "We don't have a meeting on Friday.", pl: "W piątek nie mamy spotkania." }
      ],
      phrases: [
        { en: "have a meeting", pl: "mieć spotkanie" },
        { en: "in a meeting", pl: "na spotkaniu" },
        { en: "online meeting", pl: "spotkanie online" }
      ],
      family: ["meet - spotykać się", "call - rozmowa telefoniczna", "agenda - plan spotkania"],
      forms: "",
      note: "Na spotkaniu to in a meeting, nie on a meeting: Sorry, I'm in a meeting.",
      mnemo: "MITYNG - jak polityczny MITYNG, tylko z kawą i slajdami."
    },
    {
      id: "w6-job",
      en: "job",
      pl: "praca, posada",
      say: "dżob",
      pos: "rzeczownik",
      part: 1,
      emoji: "👔",
      ex: [
        { en: "I like my job.", pl: "Lubię swoją pracę." },
        { en: "Does she have a job in marketing?", pl: "Czy ona ma pracę w marketingu?" }
      ],
      phrases: [
        { en: "a full-time job", pl: "praca na pełen etat" },
        { en: "a new job", pl: "nowa praca" },
        { en: "good job!", pl: "dobra robota!" }
      ],
      family: ["work - praca", "career - kariera", "job offer - oferta pracy"],
      forms: "l.mn. jobs",
      note: "Job jest policzalny: a job, two jobs. Work nie: I have a job, ale I have a lot of work. Nie mów a work.",
      mnemo: "DŻOB - marzysz o karierze jak Steve JOBS, a masz DŻOB w Excelu."
    },
    {
      id: "w6-manager",
      en: "manager",
      pl: "kierownik, menedżer",
      say: "menedżer",
      pos: "rzeczownik",
      part: 1,
      emoji: "🧑‍💼",
      ex: [
        { en: "Kate is our new manager.", pl: "Kate jest naszą nową kierowniczką." },
        { en: "Does the manager check the reports?", pl: "Czy kierownik sprawdza raporty?" }
      ],
      phrases: [
        { en: "marketing manager", pl: "kierownik marketingu" },
        { en: "project manager", pl: "kierownik projektu" },
        { en: "store manager", pl: "kierownik sklepu" }
      ],
      family: ["boss - szef", "manage - zarządzać", "management - zarząd, kierownictwo"],
      forms: "",
      note: "Akcent na początku: MEnedżer. Manager to zwykle kierownik działu, a nie prezes firmy.",
      mnemo: "MENEDŻER - jak MEN in Black, tylko zamiast broni ma Excela."
    },
    {
      id: "w6-report",
      en: "report",
      pl: "raport",
      say: "ryport",
      pos: "rzeczownik",
      part: 1,
      emoji: "📊",
      ex: [
        { en: "I write a report every Friday.", pl: "W każdy piątek piszę raport." },
        { en: "Do you send the sales report on Monday?", pl: "Wysyłasz raport sprzedaży w poniedziałek?" }
      ],
      phrases: [
        { en: "sales report", pl: "raport sprzedaży" },
        { en: "write a report", pl: "napisać raport" },
        { en: "weekly report", pl: "raport tygodniowy" }
      ],
      family: ["reporter - reporter, dziennikarz", "data - dane", "chart - wykres"],
      forms: "",
      note: "Akcent na drugą sylabę: ryPORT. Jako czasownik report to zgłaszać: report a problem.",
      mnemo: "RYPORT - szef czyta twój raport i RYPIE nim w stół."
    },
    {
      id: "w6-deadline",
      en: "deadline",
      pl: "termin (ostateczny)",
      say: "dedlajn",
      pos: "rzeczownik",
      part: 1,
      emoji: "⏰",
      ex: [
        { en: "The deadline is on Friday.", pl: "Termin mija w piątek." },
        { en: "We don't miss deadlines in our team.", pl: "W naszym zespole nie zawalamy terminów." }
      ],
      phrases: [
        { en: "meet a deadline", pl: "zdążyć w terminie" },
        { en: "miss a deadline", pl: "nie zdążyć w terminie" },
        { en: "a tight deadline", pl: "krótki termin" }
      ],
      family: ["date - data", "on time - na czas", "late - spóźniony"],
      forms: "",
      note: "Zdążyć z czymś na termin to meet a deadline, nie catch a deadline.",
      mnemo: "DEDLAJN - DEAD + LINE: za tą linią już nie żyjesz."
    },
    {
      id: "w6-salary",
      en: "salary",
      pl: "pensja",
      say: "seleri",
      pos: "rzeczownik",
      part: 1,
      emoji: "💰",
      ex: [
        { en: "I get my salary every month.", pl: "Pensję dostaję co miesiąc." },
        { en: "What salary do they offer?", pl: "Jaką pensję oferują?" }
      ],
      phrases: [
        { en: "a high salary", pl: "wysoka pensja" },
        { en: "monthly salary", pl: "pensja miesięczna" },
        { en: "salary increase", pl: "podwyżka" }
      ],
      family: ["money - pieniądze", "pay - wypłata; płacić", "raise - podwyżka"],
      forms: "l.mn. salaries",
      note: "Salary to stała miesięczna pensja, a wage to stawka, zwykle za godzinę. Nie myl z celery (seler).",
      mnemo: "SELERI - pensja tak niska, że starcza tylko na SELER."
    },
    {
      id: "w6-invoice",
      en: "invoice",
      pl: "faktura",
      say: "ynwojs",
      pos: "rzeczownik",
      part: 2,
      emoji: "📄",
      ex: [
        { en: "I send invoices on Mondays.", pl: "Faktury wysyłam w poniedziałki." },
        { en: "Do you need an invoice for this order?", pl: "Potrzebujesz faktury do tego zamówienia?" }
      ],
      phrases: [
        { en: "send an invoice", pl: "wysłać fakturę" },
        { en: "pay an invoice", pl: "zapłacić fakturę" },
        { en: "invoice number", pl: "numer faktury" }
      ],
      family: ["bill - rachunek", "receipt - paragon", "payment - płatność"],
      forms: "",
      note: "Faktura to invoice, nie facture. Rachunek w restauracji to bill, a w USA często check.",
      mnemo: "YNWOJS - IN VOICE: księgowa czyta fakturę na GŁOS (voice) i płacze."
    },
    {
      id: "w6-task",
      en: "task",
      pl: "zadanie",
      say: "tesk",
      pos: "rzeczownik",
      part: 2,
      emoji: "📝",
      ex: [
        { en: "I have 3 tasks today.", pl: "Mam dziś 3 zadania." },
        { en: "This task is for the marketing team.", pl: "To zadanie jest dla zespołu marketingu." }
      ],
      phrases: [
        { en: "do a task", pl: "wykonać zadanie" },
        { en: "a daily task", pl: "codzienne zadanie" },
        { en: "task list", pl: "lista zadań" }
      ],
      family: ["to-do list - lista rzeczy do zrobienia", "project - projekt", "job - praca"],
      forms: "",
      note: "Zadanie się wykonuje: do a task, nie make a task. Zadanie domowe w szkole to homework.",
      mnemo: "TESK - przy nudnym zadaniu TĘSKNISZ za weekendem."
    },
    {
      id: "w6-project",
      en: "project",
      pl: "projekt",
      say: "prodżekt",
      pos: "rzeczownik",
      part: 2,
      emoji: "📁",
      ex: [
        { en: "We have a new project.", pl: "Mamy nowy projekt." },
        { en: "Does Kate work on the website project?", pl: "Czy Kate pracuje przy projekcie strony?" }
      ],
      phrases: [
        { en: "work on a project", pl: "pracować nad projektem" },
        { en: "start a project", pl: "zacząć projekt" },
        { en: "project manager", pl: "kierownik projektu" }
      ],
      family: ["plan - plan", "task - zadanie", "team - zespół"],
      forms: "",
      note: "Pracujesz nad projektem: work on a project, nie work over a project. Akcent na początku: PROdżekt.",
      mnemo: "PRODŻEKT - robisz projekt na PRO, a szef i tak chce poprawek."
    },
    {
      id: "w6-schedule",
      en: "schedule",
      pl: "harmonogram, grafik",
      say: "skedżul",
      pos: "rzeczownik",
      part: 2,
      emoji: "📅",
      ex: [
        { en: "My schedule is full this week.", pl: "W tym tygodniu mam pełny grafik." },
        { en: "Do you have the schedule for the campaign?", pl: "Masz harmonogram kampanii?" }
      ],
      phrases: [
        { en: "on schedule", pl: "zgodnie z planem" },
        { en: "work schedule", pl: "grafik pracy" },
        { en: "a busy schedule", pl: "napięty grafik" }
      ],
      family: ["calendar - kalendarz", "plan - plan", "timetable - rozkład jazdy; plan lekcji"],
      forms: "",
      note: "Amerykanie mówią [skedżul], Brytyjczycy często [szedżul]. Obie wersje są poprawne.",
      mnemo: "SKEDŻUL - grafik tak napięty, że do biura jeździsz na SKEJCIE."
    },
    {
      id: "w6-contract",
      en: "contract",
      pl: "umowa, kontrakt",
      say: "kontrekt",
      pos: "rzeczownik",
      part: 2,
      emoji: "📜",
      ex: [
        { en: "I have a contract for one year.", pl: "Mam umowę na rok." },
        { en: "Do you have a contract with this client?", pl: "Masz umowę z tym klientem?" }
      ],
      phrases: [
        { en: "sign a contract", pl: "podpisać umowę" },
        { en: "a one-year contract", pl: "umowa na rok" },
        { en: "employment contract", pl: "umowa o pracę" }
      ],
      family: ["agreement - umowa, porozumienie", "sign - podpisywać", "signature - podpis"],
      forms: "",
      note: "Umowę podpisujesz: sign a contract, nie write a contract (to znaczy ją napisać). Akcent na początku: KONtrekt.",
      mnemo: "KONTREKT - szef chce podpisu, a ty dajesz KONTRĘ i poprawki."
    },
    {
      id: "w6-employee",
      en: "employee",
      pl: "pracownik",
      say: "ymploji",
      pos: "rzeczownik",
      part: 2,
      emoji: "🧑‍💻",
      ex: [
        { en: "Our company has 20 employees.", pl: "Nasza firma ma 20 pracowników." },
        { en: "Do employees work from home on Fridays?", pl: "Czy pracownicy pracują w piątki z domu?" }
      ],
      phrases: [
        { en: "a new employee", pl: "nowy pracownik" },
        { en: "employee of the month", pl: "pracownik miesiąca" },
        { en: "full-time employee", pl: "pracownik na pełen etat" }
      ],
      family: ["employer - pracodawca", "employ - zatrudniać", "staff - personel"],
      forms: "l.mn. employees",
      note: "Employee to pracownik, a employer to pracodawca. Różni je tylko końcówka, łatwo pomylić.",
      mnemo: "YMPLOJI - pracownik jest IM LOJALNY, dopóki płacą."
    },
    {
      id: "w6-email",
      en: "email",
      pl: "mail, e-mail",
      say: "imejl",
      pos: "rzeczownik",
      part: 3,
      emoji: "📧",
      ex: [
        { en: "I check my email every hour.", pl: "Sprawdzam pocztę co godzinę." },
        { en: "Do customers read our emails?", pl: "Czy klienci czytają nasze maile?" }
      ],
      phrases: [
        { en: "send an email", pl: "wysłać maila" },
        { en: "email address", pl: "adres e-mail" },
        { en: "reply to an email", pl: "odpowiedzieć na maila" }
      ],
      family: ["message - wiadomość", "inbox - skrzynka odbiorcza", "newsletter - newsletter"],
      forms: "",
      note: "Adres mailowy to email address, nie mail address. Email bywa też czasownikiem: I email the client - Piszę do klienta maila.",
      mnemo: "IMEJL - I MEJL, i MEJL, i MEJL... skrzynka nigdy nie jest pusta."
    },
    {
      id: "w6-break",
      en: "break",
      pl: "przerwa",
      say: "brejk",
      pos: "rzeczownik",
      part: 3,
      emoji: "☕",
      ex: [
        { en: "I have a break at 12 o'clock.", pl: "O 12 mam przerwę." },
        { en: "The team takes a break after the meeting.", pl: "Po spotkaniu zespół robi przerwę." }
      ],
      phrases: [
        { en: "take a break", pl: "zrobić sobie przerwę" },
        { en: "coffee break", pl: "przerwa na kawę" },
        { en: "lunch break", pl: "przerwa na lunch" }
      ],
      family: ["rest - odpoczynek", "pause - pauza", "vacation - urlop"],
      forms: "jako czasownik (psuć, łamać): he breaks; broke (przeszły)",
      note: "Przerwę robisz: take a break albo have a break, nie make a break.",
      mnemo: "BREJK - BREAKDANCE: na przerwie tańczysz na biurku."
    }
  ],
  sentences: [
    { use: "L1", en: "The meeting is at 10.", pl: "Spotkanie jest o 10.", alt: [] },
    { use: "L1", en: "I like my job.", pl: "Lubię swoją pracę.", alt: [] },
    { use: "L1", en: "My manager is in the office.", pl: "Mój kierownik jest w biurze.", alt: [] },
    { use: "L3", en: "I don't send invoices on Fridays.", pl: "Nie wysyłam faktur w piątki.", alt: [] },
    { use: "L3", en: "Does she work on this project?", pl: "Czy ona pracuje przy tym projekcie?", alt: [] },
    { use: "L3", en: "The new employee doesn't work on Mondays.", pl: "Nowy pracownik nie pracuje w poniedziałki.", alt: [] },
    { use: "L3", en: "Do you have the schedule?", pl: "Masz harmonogram?", alt: [] },
    { use: "L5", en: "Do you check your emails every day?", pl: "Codziennie sprawdzasz maile?",
      alt: ["Do you check your email every day?", "Do you check emails every day?", "Do you check email every day?", "Do you check your emails daily?"] },
    { use: "L5", en: "She doesn't take a break at work.", pl: "Ona nie robi sobie przerwy w pracy.",
      alt: ["She doesn't have a break at work.", "She doesn't take breaks at work.", "She doesn't have breaks at work."] },
    { use: "L5", en: "What time does the meeting start?", pl: "O której zaczyna się spotkanie?",
      alt: ["When does the meeting start?"] },
    { use: "L5", en: "Our employees don't work on Sundays.", pl: "Nasi pracownicy nie pracują w niedziele.",
      alt: ["Our employees don't work on Sunday."] },
    { use: "L5", en: "Does your manager read the reports?", pl: "Czy twój kierownik czyta raporty?",
      alt: ["Does your manager read reports?"] }
  ],
  reading: {
    title: "Poniedziałek w biurze",
    text: [
      { en: "Tom is a marketing manager.", pl: "Tom jest kierownikiem marketingu." },
      { en: "On Monday, he starts work at 8 o'clock and checks his email.", pl: "W poniedziałek zaczyna pracę o 8 i sprawdza pocztę." },
      { en: "At 10 o'clock, he has a meeting with his team.", pl: "O 10 ma spotkanie z zespołem." },
      { en: "Tom doesn't like long meetings.", pl: "Tom nie lubi długich spotkań." },
      { en: "At 12 o'clock, the team has a short break and drinks coffee.", pl: "O 12 zespół ma krótką przerwę i pije kawę." },
      { en: "In the afternoon, Tom writes a report for his boss.", pl: "Po południu Tom pisze raport dla szefa." },
      { en: "The deadline is tomorrow!", pl: "Termin mija jutro!" }
    ],
    questions: [
      { q: "What does Tom check at 8 o'clock?", qpl: "Co Tom sprawdza o 8?",
        options: ["His email.", "His salary.", "His schedule."], answer: 0 },
      { q: "Does Tom like long meetings?", qpl: "Czy Tom lubi długie spotkania?",
        options: ["Yes, he does.", "No, he doesn't.", "Yes, he is."], answer: 1 },
      { q: "When is the deadline for the report?", qpl: "Kiedy mija termin oddania raportu?",
        options: ["Today.", "On Friday.", "Tomorrow."], answer: 2 }
    ]
  },
  dialog: {
    intro: "Pierwszy dzień w nowej pracy. Kierowniczka Kate oprowadza cię po biurze.",
    turns: [
      { bot: "Welcome! Do you have your contract?", botpl: "Witaj! Masz swoją umowę?",
        options: ["Yes, I have. It's in my bag.", "Yes, I do. It's in my bag.", "Yes, I does. It's in my bag."], answer: 1,
        hint: "Yes, I do..." },
      { bot: "Great. Do you know the team?", botpl: "Świetnie. Znasz zespół?",
        options: ["No, I don't know them.", "No, I not know them.", "No, I doesn't know them."], answer: 0,
        hint: "No, I don't..." },
      { bot: "This is Tom. He works on the new project.", botpl: "To jest Tom. Pracuje przy nowym projekcie.",
        options: ["Do he work with me?", "Does he works with me?", "Does he work with me?"], answer: 2,
        hint: "Does he work...?" },
      { bot: "Yes, he does. Do you have any questions?", botpl: "Tak. Masz jakieś pytania?",
        options: ["What time starts the meeting?", "What time does the meeting start?", "What time does the meeting starts?"], answer: 1,
        hint: "What time does...?" },
      { bot: "At 10. And we have a break at 12.", botpl: "O 10. A o 12 mamy przerwę.",
        options: ["Do we eat lunch in the office?", "We eat lunch in the office?", "Does we eat lunch in the office?"], answer: 0,
        hint: "Do we eat...?" },
      { bot: "Yes, we do. The kitchen is here. Anything else?", botpl: "Tak. Kuchnia jest tutaj. Coś jeszcze?",
        options: ["No, thanks. I haven't any questions.", "No, thanks. I doesn't have any questions.", "No, thanks. I don't have any questions."], answer: 2,
        hint: "I don't have..." }
    ]
  }
});
