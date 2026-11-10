# Kartoteka - aplikacja do nauki angielskiego A1-A2

Statyczna aplikacja webowa w stylu Duolingo z rozbudowanymi fiszkami. Hosting: GitHub Pages (repo `angielski`, gałąź `main`, katalog główny). Bez frameworków i bez kroku budowania.

## Pliki
- `index.html` - szkielet, ładuje `data/week-01.js` ... `week-12.js` i `app.js`. Po zmianie `app.js` lub `style.css` podbij `?v=N` w index.html (cache GitHub Pages i przeglądarki).
- `app.js` - cały silnik: widoki (Dziś, 1000 słów, Fiszki, Postęp), lekcje, system pudełek, raporty.
- `style.css` - wygląd (papier, tusz, kartoteka), tryb ciemny przez `prefers-color-scheme`.
- `data/week-NN.js` - treść tygodnia. Schemat i STAŁA lista słów: `data/_schemat.md`.
- `tools/validate.js` - walidator treści: `node tools/validate.js` (wszystkie) albo `node tools/validate.js 3` (jeden tydzień). Musi zwrócić OK.
- Moduł "1000 słów" (zakładka 1000 słów): `data/top-01.js` ... `top-10.js` (po 100 fiszek, `window.TOP`), schemat `data/_top1000.md`, lista i kolejność `tools/ngsl-1000.tsv` (NGSL, CC BY-SA 4.0, nie zmieniać), walidator `node tools/validate-top.js`. Po zmianie pliku top-NN podbij jego `?v=N` w index.html.
- Zasady modułu 1000: dziennie 5/10/15/20 nowych (domyślnie 10), "Już znam" = pudełko 4, "Uczę się" = pudełko 1 + sprawdzenie (co 5 słów EN -> PL, na koniec PL -> EN), powtórki to fiszki do odwrócenia z samooceną, max 40 w sesji. Przerwanie sesji zapisuje to, co zrobione. Stan: `S.top` (`words`, `newDay`, `per`), id fiszki = `t` + numer.
- `nauczyciel/` - stara wersja: nauczyciel prowadzący lekcje w czacie Claude Code. Lokalnie, poza repo.

## Zasady nauki (z briefu ucznia)
- Cykl 7 dni: 1 nowe słowa (7), 2 gramatyka (wyjaśnienie + 6 zadań), 3 słowa (6) + zdania, 4 czytanie + 2 słowa, 5 pisanie (5 tłumaczeń PL -> EN), 6 rozmowa, 7 test (8 słówek, 4 gramatyka, 3 zdania). Poniżej 70% = powtórka tygodnia.
- Pudełka: 1 = następny dzień, 2 = po 2 dniach, 3 = po 4, 4 = po 7, 5 = po 14, potem opanowane. Dobra odpowiedź = pudełko wyżej, zła = pudełko 1. Powtórka na start sesji: max 10 fiszek, najpierw pudełko 1.
- Literówka = zaliczone z poprawką. Krótkie słowa (am, is, a, the) i końcówki (-s, -ed, -ing) muszą być dokładnie.
- Raport sesji w formacie postep.md (zakładka Postęp, przycisk kopiuj). Po tygodniu 12 uczeń wkleja historię Claude'owi, żeby ułożyć program A2-B1.

## Konwencje
- Teksty w UI po polsku, naturalnie. Tylko zwykły myślnik `-`, nigdy półpauza ani pauza.
- Wymowa w polu `say`: polskie litery, amerykański angielski (konwencja w `data/_schemat.md`).
- Postęp ucznia: `localStorage` (klucz `kartoteka.v1`) + eksport/import JSON. Nie zmieniaj struktury stanu bez migracji w `load()`.
- Test w przeglądarce: podgląd `kartoteka` (port 4317), dopisz `?debug`, żeby mieć `window.__K` (stan, lekcja).
