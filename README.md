# Wprowadzenie

Aplikacja internetowa do wyświetlania na smartfonach tekstów pieśni i Liturgii Godzin, stworzona z myślą o pielgrzymkach i warsztatach.

Funkcje dla użytkownika:
* działa w pełni w trybie offline,
* możliwość instalacji/dodania do ekranu głównego smartfona (Progressive Web App),
* tryb nocny,
* zmiana rozmiaru tekstu.

Funkcje dla programisty:
* teksty wpisywane w plikach MDX (Markdown + JSX),
* łatwe w użyciu komponenty do formatowania tekstów brewiarzowych,
* z tekstów generowany jest statyczny HTML (bez Reacta ani innego frameworka).

# Rozpoczęcie pracy

Przygotowanie:
```sh
git clone https://github.com/hejmsdz/pielgrzymka.git
cd pielgrzymka
npm install
```

Uruchomienie do developmentu:
```sh
npm start
```

Budowa statycznych plików HTML:
```sh
npm run build
```

# Struktura plików

* `src/dzien` – pliki z tekstami na kolejne dni. Ważne: muszą mieć rozszerzenia `.html.mdx`, i mieć na początku linie:
  ```js
  import makeLayout from "../../layouts/content";
  export const layout = makeLayout();
  ```
* `src/contents.js` – spis treści wyświetlany na stronie głównej.

# Komponenty dostępne w plikach MDX

## Liturgia Godzin

### `<Opening />`

| props | typ | domyślnie | opis |
|-|-|-|-|
| `alleluja` | `boolean` | `true` | dodaje "Alleluja" na końcu wezwania |

Wstawia słowa wezwania (Boże, wejrzyj ku wspomożeniu memu...).

### `<Hymn />`

| props | typ | domyślnie | opis |
|-|-|-|-|
| `children` | MDX | – | treść hymnu (zwrotki oddzielone pustą linią) |

Wstawia nagłówek "Hymn" i treść hymnu.

### `<Psalm />`

| props | typ | domyślnie | opis |
|-|-|-|-|
| `no` | `string` | – | numer psalmu wyświetlany w nagłówku |
| `antiphon` | `string` | – | treść antyfony |
| `children` | MDX | – | treść psalmu (dwuwersy oddzielone pustą linią) |

Wstawia nagłówek "Psalm" z numerem, antyfonę na początku i końcu oraz treść psalmu. Co drugi dwuwers jest wyświetlany z wcięciem. Gwiazdki muszą być escape'owane (`\*`) ze względu na składnię Markdowna.

### `<Canticle />`

| props | typ | domyślnie | opis |
|-|-|-|-|
| `src` | `string` | – | sigla pieśni wyświetlane w nagłówku |
| `title` | `string` | – | własny nagłówek do wyświetlania zamiast słowa "Pieśń" z siglami |
| `antiphon` | `string` | – | treść antyfony |
| `children` | MDX | – | treść pieśni (dwuwersy oddzielone pustą linią) |
| `noGloria` | `boolean` | `false` | wstawia komentarz "Na końcu tej pieśni nie mówi się Chwała Ojcu". |

Wyświetla nagłówek "Pieśń" z siglami, antyfonę na początku i końcu oraz treść pieśni. Zasada działania jest identyczna jak w komponencie `<Psalm />`.

### `<Reading />`

| props | typ | domyślnie | opis |
|-|-|-|-|
| `src` | `string` | – | sigla czytania wyświetlane w nagłówku |
| `children` | MDX | – | treść czytania |

Wyświetla nagłówek "Czytanie" z siglami i treść czytania.

### `<Responsory />`

| props | typ | domyślnie | opis |
|-|-|-|-|
| `a` | `string` | – | pierwsza połowa wersetu |
| `b` | `string` | – | druga połowa wersetu |
| `c` | `string` | – | drugie wezwanie |

Wyświetla nagłówek "Responsorium krótkie" i dialog w następującej formie:

```
K: {a} * {b}
W: {a} / {b}
K: {c}
W: {b}
K: Chwała Ojcu i Synowi, i Duchowi Świętemu.
W: {a} / {b}
```

Jeżeli druga połowa wersetu (`b`) nie zostanie podana, to `a` będzie potraktowane jako cały werset.

### `<Benedictus />`

| props | typ | domyślnie | opis |
|-|-|-|-|
| `antiphon` | `string` | – | treść antyfony |

Wstawia pieśń Zachariasza ("Błogosławiony Pan Bóg Izraela...") z antyfoną.

### `<Magnificat />`

| props | typ | domyślnie | opis |
|-|-|-|-|
| `antiphon` | `string` | – | treść antyfony |

Wstawia pieśń Maryi ("Wielbi dusza moja Pana...") z antyfoną.

### `<Intercessions />`

| props | typ | domyślnie | opis |
|-|-|-|-|
| `response` | `string` | – | odpowiedź na prośbę |
| `children` | MDX | – | prośby (oddzielone pustą linią) |

Wstawia nagłówek "Prośby" i kolejne wezwania. Na końcu każdego wezwania wstawiana jest automatycznie odpowiedź.
Pierwszy akapit nie jest prośbą, tylko wprowadzeniem, ale to nic nie zmienia w zachowaniu komponentu.
Po prośbach dodawany jest początek modlitwy "Ojcze nasz...".

### `<Prayer />`

| props | typ | domyślnie | opis |
|-|-|-|-|
| `children` | MDX | – | treść modlitwy |

Wstawia nagłówek "Modlitwa" z tekstem modlitwy kończącej.

### `<Dismissal />`

| props | typ | domyślnie | opis |
|-|-|-|-|
| `alleluja` | `boolean` | `false` | dodaje podwójne "Alleluja" po słowach "Idźcie w pokoju Chrystusa" i "Bogu niech będą dzięki" |
| `children` | MDX | – | treść dodatkowego, uroczystego błogosławieństwa |

Wstawia końcowe błogosławieństwo i rozesłanie. Jeżeli jako `children` zostanie przekazany dodatkowy tekst, pojawi się między "I z Duchem Twoim" a "Niech was błogosławi Bóg wszechmogący".

## Pozostałe

### `<K />`

| props | typ | domyślnie | opis |
|-|-|-|-|
| `children` | MDX | – | tekst |

Oznacza wezwanie czerwoną literą "K".

### `<W />`

| props | typ | domyślnie | opis |
|-|-|-|-|
| `children` | MDX | – | tekst |

Oznacza odpowiedź czerwoną literą "W".

### `<Lyrics />`

| props | typ | domyślnie | opis |
|-|-|-|-|
| `children` | MDX | – | tekst (zwrotki oddzielone pustą linią) |

Wstawia tekst piosenki lub pieśni.
