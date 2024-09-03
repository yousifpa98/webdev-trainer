const questions = {
    beginner: {
      html: [
        {
          question:
            "Welches Tag wird verwendet, um einen Absatz in HTML zu erstellen?",
          options: {
            a: "<p>",
            b: "<div>",
            c: "<span>",
            d: "<a>",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches Attribut wird verwendet, um einer HTML-Datei eine externe CSS-Datei hinzuzufügen?",
          options: {
            a: "src",
            b: "link",
            c: "rel",
            d: "href",
          },
          correctAnswer: "d",
          answered: false,
        },
        {
          question:
            "Welches Tag wird verwendet, um eine Liste mit Aufzählungszeichen zu erstellen?",
          options: {
            a: "<ol>",
            b: "<ul>",
            c: "<li>",
            d: "<dl>",
          },
          correctAnswer: "b",
          answered: false,
        },
        {
          question: "Welches Tag wird verwendet, um ein Bild in HTML einzufügen?",
          options: {
            a: "<img>",
            b: "<picture>",
            c: "<figure>",
            d: "<src>",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question: "Welches Attribut definiert die Zielseite eines Links?",
          options: {
            a: "href",
            b: "src",
            c: "alt",
            d: "title",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches Tag wird verwendet, um einen Hyperlink in HTML zu erstellen?",
          options: {
            a: "<link>",
            b: "<a>",
            c: "<href>",
            d: "<nav>",
          },
          correctAnswer: "b",
          answered: false,
        },
        {
          question:
            "Welches Tag wird verwendet, um den größten Überschriftentext in HTML zu erstellen?",
          options: {
            a: "<h1>",
            b: "<h6>",
            c: "<h2>",
            d: "<header>",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches Attribut wird verwendet, um eine alternative Textbeschreibung für ein Bild bereitzustellen?",
          options: {
            a: "alt",
            b: "title",
            c: "src",
            d: "desc",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question: "Wie fügt man einen Kommentar in HTML ein?",
          options: {
            a: "<!-- Kommentar -->",
            b: "// Kommentar",
            c: "/* Kommentar */",
            d: "<comment>Kommentar</comment>",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches Tag wird verwendet, um eine Tabelle in HTML zu erstellen?",
          options: {
            a: "<table>",
            b: "<tr>",
            c: "<td>",
            d: "<tbody>",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Wie bindet man eine externe CSS-Datei in ein HTML-Dokument ein?",
          options: {
            a: "<link rel='stylesheet' href='styles.css'>",
            b: "<style src='styles.css'>",
            c: "<css src='styles.css'>",
            d: "<stylesheet href='styles.css'>",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches Attribut wird verwendet, um die Breite eines Bildes zu definieren?",
          options: {
            a: "width",
            b: "height",
            c: "size",
            d: "length",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches Tag wird verwendet, um einen Text fett darzustellen?",
          options: {
            a: "<strong>",
            b: "<em>",
            c: "<b>",
            d: "<bold>",
          },
          correctAnswer: "c",
          answered: false,
        },
        {
          question:
            "Welches Attribut wird verwendet, um die Farbe von Text in HTML zu ändern?",
          options: {
            a: "color",
            b: "font-color",
            c: "text-color",
            d: "style",
          },
          correctAnswer: "d",
          answered: false,
        },
        {
          question:
            "Welches Tag wird verwendet, um ein Textfeld in einem Formular zu erstellen?",
          options: {
            a: "<input>",
            b: "<textarea>",
            c: "<form>",
            d: "<textbox>",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches Attribut wird verwendet, um den Namen eines Eingabefeldes in einem Formular festzulegen?",
          options: {
            a: "name",
            b: "id",
            c: "type",
            d: "value",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches Tag wird verwendet, um eine Dropdown-Liste in einem Formular zu erstellen?",
          options: {
            a: "<select>",
            b: "<option>",
            c: "<dropdown>",
            d: "<list>",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches Tag wird verwendet, um einen HTML-Dokumenttitel festzulegen?",
          options: {
            a: "<title>",
            b: "<meta>",
            c: "<head>",
            d: "<header>",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question: "Welches Tag definiert den Hauptinhalt eines HTML-Dokuments?",
          options: {
            a: "<main>",
            b: "<section>",
            c: "<article>",
            d: "<content>",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches Attribut definiert die Schriftgröße in einem HTML-Element?",
          options: {
            a: "size",
            b: "font-size",
            c: "text-size",
            d: "style",
          },
          correctAnswer: "d",
          answered: false,
        },
      ],
      css: [
        {
          question:
            "Welches CSS-Eigenschaft wird verwendet, um die Textfarbe festzulegen?",
          options: {
            a: "color",
            b: "text-color",
            c: "font-color",
            d: "background-color",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches CSS-Eigenschaft wird verwendet, um den Hintergrund eines Elements zu ändern?",
          options: {
            a: "background",
            b: "background-color",
            c: "color",
            d: "bgcolor",
          },
          correctAnswer: "b",
          answered: false,
        },
        {
          question: "Wie kann man die Schriftgröße in CSS ändern?",
          options: {
            a: "font-size",
            b: "text-size",
            c: "font-style",
            d: "size",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches CSS-Eigenschaft wird verwendet, um die Breite eines Elements festzulegen?",
          options: {
            a: "width",
            b: "height",
            c: "size",
            d: "length",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question: "Wie kann man den Innenabstand eines Elements festlegen?",
          options: {
            a: "padding",
            b: "margin",
            c: "spacing",
            d: "border",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question: "Wie kann man den Außenabstand eines Elements festlegen?",
          options: {
            a: "margin",
            b: "padding",
            c: "spacing",
            d: "border",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches CSS-Eigenschaft wird verwendet, um den Rahmen eines Elements zu ändern?",
          options: {
            a: "border",
            b: "frame",
            c: "outline",
            d: "margin",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Wie legt man fest, dass ein Element zentriert ausgerichtet wird?",
          options: {
            a: "text-align: center",
            b: "align: center",
            c: "horizontal-align: center",
            d: "center",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches CSS-Eigenschaft wird verwendet, um den Zeilenabstand von Text festzulegen?",
          options: {
            a: "line-height",
            b: "spacing",
            c: "text-spacing",
            d: "text-height",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question: "Wie legt man eine serifenlose Schriftart in CSS fest?",
          options: {
            a: "font-family: Arial, sans-serif",
            b: "font: sans-serif",
            c: "font-style: Arial",
            d: "text-font: sans-serif",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question: "Wie ändert man die Schriftstärke eines Textes in CSS?",
          options: {
            a: "font-weight",
            b: "font-thickness",
            c: "font-bold",
            d: "text-weight",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question: "Wie legt man fest, dass Text kursiv angezeigt wird?",
          options: {
            a: "font-style: italic",
            b: "text-style: italic",
            c: "font-variant: italic",
            d: "text-variant: italic",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question: "Wie legt man eine Hintergrundgrafik für ein Element fest?",
          options: {
            a: "background-image",
            b: "background-color",
            c: "background-pattern",
            d: "image-source",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question: "Wie legt man fest, dass ein Element schwebt?",
          options: {
            a: "float",
            b: "position",
            c: "align",
            d: "display",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question: "Wie legt man fest, dass ein Element nicht sichtbar ist?",
          options: {
            a: "visibility: hidden",
            b: "display: none",
            c: "visibility: none",
            d: "display: hidden",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Wie legt man fest, dass Text in einem Element nicht umbrochen wird?",
          options: {
            a: "white-space: nowrap",
            b: "text-wrap: none",
            c: "overflow-wrap: no",
            d: "wrap: no",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Wie definiert man eine Liste von Schriften zur Auswahl in CSS?",
          options: {
            a: "font-family",
            b: "font-set",
            c: "font-selection",
            d: "font-list",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question: "Wie legt man eine Schatten für Text in CSS fest?",
          options: {
            a: "text-shadow",
            b: "text-glow",
            c: "shadow",
            d: "text-outline",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Wie legt man fest, dass ein Element am unteren Rand der Seite ausgerichtet wird?",
          options: {
            a: "vertical-align: bottom",
            b: "position: bottom",
            c: "align: bottom",
            d: "float: bottom",
          },
          correctAnswer: "a",
          answered: false,
        },
      ],
      js: [
        {
          question:
            "Welches Schlüsselwort wird verwendet, um eine veränderliche Variable in ES6 zu deklarieren?",
          options: {
            a: "var",
            b: "const",
            c: "let",
            d: "set",
          },
          correctAnswer: "c",
          answered: false,
        },
        {
          question:
            "Welches Schlüsselwort wird verwendet, um eine unveränderliche Variable zu deklarieren?",
          options: {
            a: "let",
            b: "const",
            c: "var",
            d: "immutable",
          },
          correctAnswer: "b",
          answered: false,
        },
        {
          question:
            "Welcher der folgenden Werte ist vom Datentyp 'number' in JavaScript?",
          options: {
            a: "'42'",
            b: "'true'",
            c: "'null'",
            d: "42",
          },
          correctAnswer: "d",
          answered: false,
        },
        {
          question: "Wie gibt man den Text 'Hello, World!' in der Konsole aus?",
          options: {
            a: "echo('Hello, World!');",
            b: "console.log('Hello, World!');",
            c: "print('Hello, World!');",
            d: "console.print('Hello, World!');",
          },
          correctAnswer: "b",
          answered: false,
        },
        {
          question:
            "Welches Symbol wird in JavaScript verwendet, um einen Wert zuzuweisen?",
          options: {
            a: "==",
            b: "=",
            c: "===",
            d: "<-",
          },
          correctAnswer: "b",
          answered: false,
        },
        {
          question:
            "Was ist das Ergebnis des Ausdrucks `2 + 3 * 4` in JavaScript?",
          options: {
            a: "10",
            b: "14",
            c: "20",
            d: "24",
          },
          correctAnswer: "b",
          answered: false,
        },
        {
          question: "Wie erstellt man ein Array in JavaScript?",
          options: {
            a: "let arr = (1, 2, 3);",
            b: "let arr = {1, 2, 3};",
            c: "let arr = <1, 2, 3>;",
            d: "let arr = [1, 2, 3];",
          },
          correctAnswer: "d",
          answered: false,
        },
        {
          question: "Wie kann man den Wert einer Variablen `x` um 1 erhöhen?",
          options: {
            a: "x += 1;",
            b: "x = x + 1;",
            c: "x++;",
            d: "Alle oben genannten",
          },
          correctAnswer: "d",
          answered: false,
        },
        {
          question: "Was gibt `typeof 42` in JavaScript zurück?",
          options: {
            a: "'number'",
            b: "'string'",
            c: "'boolean'",
            d: "'undefined'",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welcher Operator wird verwendet, um zwei Werte auf Gleichheit zu prüfen, wobei der Typ berücksichtigt wird?",
          options: {
            a: "===",
            b: "==",
            c: "=",
            d: "!=",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question: "Wie erstellt man eine Zeichenkette (String) in JavaScript?",
          options: {
            a: "let str = 42;",
            b: "let str = true;",
            c: "let str = 'Hallo';",
            d: "let str = [1, 2, 3];",
          },
          correctAnswer: "c",
          answered: false,
        },
        {
          question:
            "Welches der folgenden Symbole ist ein arithmetischer Operator?",
          options: {
            a: "&&",
            b: "===",
            c: "=>",
            d: "+",
          },
          correctAnswer: "d",
          answered: false,
        },
        {
          question:
            "Wie subtrahiert man in JavaScript zwei Zahlen, z.B. 10 und 4?",
          options: {
            a: "10 - 4",
            b: "10 + 4",
            c: "10 * 4",
            d: "10 / 4",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welcher Datentyp wird für Wahrheitswerte (true/false) verwendet?",
          options: {
            a: "number",
            b: "boolean",
            c: "string",
            d: "null",
          },
          correctAnswer: "b",
          answered: false,
        },
        {
          question:
            "Wie weist man den Wert 'Hallo' einer Variablen `greeting` zu?",
          options: {
            a: "let greeting == 'Hallo';",
            b: "greeting = 'Hallo';",
            c: "let greeting = 'Hallo';",
            d: "let greeting = Hallo;",
          },
          correctAnswer: "c",
          answered: false,
        },
        {
          question: "Welches Ergebnis liefert `typeof undefined`?",
          options: {
            a: "'undefined'",
            b: "'null'",
            c: "'object'",
            d: "'string'",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welche der folgenden Aussagen ist eine gültige Variablendeklaration in ES6?",
          options: {
            a: "variable name;",
            b: "let name;",
            c: "var name;",
            d: "declare name;",
          },
          correctAnswer: "b",
          answered: false,
        },
        {
          question:
            "Welcher Operator wird verwendet, um zwei Bedingungen zu kombinieren?",
          options: {
            a: "&&",
            b: "||",
            c: "==",
            d: "++",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question: "Was ist das Ergebnis von `5 % 2` in JavaScript?",
          options: {
            a: "1",
            b: "2",
            c: "0",
            d: "5",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Wie deklarierst du eine Konstante `PI` mit dem Wert 3.14 in JavaScript?",
          options: {
            a: "const PI = 3.14;",
            b: "let PI = 3.14;",
            c: "var PI = 3.14;",
            d: "constant PI = 3.14;",
          },
          correctAnswer: "a",
          answered: false,
        },
      ],
    },
    medium: {
      html: [
        {
          question:
            "Welches Attribut wird verwendet, um ein Ziel für einen Link festzulegen, der in einem neuen Tab geöffnet werden soll?",
          options: {
            a: "target='_self'",
            b: "target='_blank'",
            c: "target='_new'",
            d: "target='_window'",
          },
          correctAnswer: "b",
          answered: false,
        },
        {
          question:
            "Welches Tag wird verwendet, um eine nummerierte Liste zu erstellen?",
          options: {
            a: "<ul>",
            b: "<ol>",
            c: "<li>",
            d: "<dl>",
          },
          correctAnswer: "b",
          answered: false,
        },
        {
          question: "Wie erstellt man einen Tabellenkopf in HTML?",
          options: {
            a: "<thead>",
            b: "<head>",
            c: "<header>",
            d: "<th>",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches Tag wird verwendet, um den Text in einem HTML-Dokument zu unterstreichen?",
          options: {
            a: "<u>",
            b: "<underline>",
            c: "<ins>",
            d: "<mark>",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches Attribut wird verwendet, um die Hintergrundfarbe einer Tabelle festzulegen?",
          options: {
            a: "bgcolor",
            b: "background",
            c: "style",
            d: "color",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches HTML-Element wird verwendet, um einen Container für navigationslinks zu erstellen?",
          options: {
            a: "<nav>",
            b: "<div>",
            c: "<menu>",
            d: "<header>",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches Attribut wird verwendet, um das MIME-Typ eines verlinkten Dokuments anzugeben?",
          options: {
            a: "type",
            b: "rel",
            c: "href",
            d: "media",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches Attribut wird verwendet, um eine Spalte in einer HTML-Tabelle zu verbinden?",
          options: {
            a: "colspan",
            b: "rowspan",
            c: "span",
            d: "merge",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches Tag wird verwendet, um eine horizontale Linie in HTML einzufügen?",
          options: {
            a: "<hr>",
            b: "<line>",
            c: "<border>",
            d: "<hline>",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches Attribut wird verwendet, um die Textausrichtung in einem HTML-Element festzulegen?",
          options: {
            a: "align",
            b: "justify",
            c: "text-align",
            d: "valign",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches Tag wird verwendet, um einen Bereich in einem HTML-Dokument zu definieren?",
          options: {
            a: "<section>",
            b: "<div>",
            c: "<span>",
            d: "<article>",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches Attribut wird verwendet, um den Titel eines HTML-Dokuments festzulegen?",
          options: {
            a: "title",
            b: "name",
            c: "header",
            d: "headline",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches Tag wird verwendet, um eine Bildunterschrift in einer Tabelle zu erstellen?",
          options: {
            a: "<caption>",
            b: "<summary>",
            c: "<figcaption>",
            d: "<legend>",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches Attribut wird verwendet, um ein HTML-Dokument für verschiedene Bildschirmgrößen zu optimieren?",
          options: {
            a: "viewport",
            b: "screen",
            c: "resolution",
            d: "scalable",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches HTML-Tag wird verwendet, um einen Seitentitel zu definieren?",
          options: {
            a: "<title>",
            b: "<head>",
            c: "<meta>",
            d: "<header>",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches Attribut wird verwendet, um ein Formular in HTML zu verbinden?",
          options: {
            a: "action",
            b: "method",
            c: "form",
            d: "submit",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches Tag wird verwendet, um eine Inhaltsübersicht zu erstellen?",
          options: {
            a: "<nav>",
            b: "<aside>",
            c: "<section>",
            d: "<toc>",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches HTML-Tag wird verwendet, um Metadaten über ein Dokument anzugeben?",
          options: {
            a: "<meta>",
            b: "<link>",
            c: "<head>",
            d: "<base>",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches Attribut wird verwendet, um einen Textplatzhalter in einem Eingabefeld anzuzeigen?",
          options: {
            a: "placeholder",
            b: "hint",
            c: "label",
            d: "alt",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches HTML-Tag wird verwendet, um einen Tooltip anzuzeigen?",
          options: {
            a: "<abbr>",
            b: "<tooltip>",
            c: "<hint>",
            d: "<tip>",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches Attribut wird verwendet, um sicherzustellen, dass ein Eingabefeld ausgefüllt wird?",
          options: {
            a: "required",
            b: "mandatory",
            c: "validate",
            d: "needed",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches HTML-Tag wird verwendet, um einen Umbruch im Text einzufügen?",
          options: {
            a: "<br>",
            b: "<hr>",
            c: "<break>",
            d: "<nl>",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches Attribut wird verwendet, um ein Eingabefeld für Zahlen zu beschränken?",
          options: {
            a: "min/max",
            b: "range",
            c: "step",
            d: "limit",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches HTML-Tag wird verwendet, um eine Schleife von Elementen in einem Formular zu erstellen?",
          options: {
            a: "<fieldset>",
            b: "<legend>",
            c: "<group>",
            d: "<label>",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches Attribut wird verwendet, um die Tab-Reihenfolge von Eingabeelementen festzulegen?",
          options: {
            a: "tabindex",
            b: "order",
            c: "index",
            d: "sequence",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches HTML-Tag wird verwendet, um einen Abschnitt in einem Dokument zu definieren?",
          options: {
            a: "<section>",
            b: "<div>",
            c: "<article>",
            d: "<main>",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches Attribut wird verwendet, um ein Bild responsiv zu machen?",
          options: {
            a: "srcset",
            b: "responsive",
            c: "adaptive",
            d: "resize",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches Attribut wird verwendet, um mehrere Optionen in einer Dropdown-Liste auszuwählen?",
          options: {
            a: "multiple",
            b: "selected",
            c: "checked",
            d: "multiselect",
          },
          correctAnswer: "a",
          answered: false,
        },
      ],
      css: [
        {
          question: "Wie kann man eine Farbe mit Transparenz in CSS festlegen?",
          options: {
            a: "rgba()",
            b: "rgb()",
            c: "hex",
            d: "opacity",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question: "Wie kann man die Ecken eines Elements abrunden?",
          options: {
            a: "border-radius",
            b: "corner-radius",
            c: "border-round",
            d: "corner-round",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches CSS-Eigenschaft wird verwendet, um die Reihenfolge flexibler Elemente zu ändern?",
          options: {
            a: "order",
            b: "flex-order",
            c: "order-index",
            d: "flex-direction",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Wie legt man fest, dass ein Element absolut positioniert wird?",
          options: {
            a: "position: absolute",
            b: "position: fixed",
            c: "display: block",
            d: "display: absolute",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Wie legt man den Abstand zwischen Elementen in einem Flex-Container fest?",
          options: {
            a: "justify-content",
            b: "align-items",
            c: "spacing",
            d: "flex-spacing",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Wie kann man sicherstellen, dass ein Element immer im sichtbaren Bereich des Fensters bleibt?",
          options: {
            a: "position: fixed",
            b: "position: sticky",
            c: "position: absolute",
            d: "display: block",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question: "Wie kann man eine Linie oberhalb eines Elements hinzufügen?",
          options: {
            a: "border-top",
            b: "border-above",
            c: "line-top",
            d: "outline-top",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches CSS-Eigenschaft wird verwendet, um den Abstand zwischen Wörtern festzulegen?",
          options: {
            a: "word-spacing",
            b: "letter-spacing",
            c: "text-spacing",
            d: "spacing",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question: "Wie definiert man eine Transformation in CSS?",
          options: {
            a: "transform",
            b: "transition",
            c: "animation",
            d: "change",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Wie definiert man eine horizontale Ausrichtung von Elementen in einem Flex-Container?",
          options: {
            a: "justify-content",
            b: "align-items",
            c: "flex-align",
            d: "text-align",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Wie kann man den maximalen Platz, den ein Element einnehmen darf, festlegen?",
          options: {
            a: "max-width",
            b: "min-width",
            c: "width",
            d: "max-height",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Wie kann man sicherstellen, dass Text in Großbuchstaben dargestellt wird?",
          options: {
            a: "text-transform: uppercase",
            b: "text-case: upper",
            c: "font-case: upper",
            d: "text-case: caps",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question: "Wie kann man eine CSS-Animation definieren?",
          options: {
            a: "@keyframes",
            b: "@animation",
            c: "@transition",
            d: "@frames",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Wie kann man die Sichtbarkeit eines Elements steuern, ohne den Platz im Layout zu beeinflussen?",
          options: {
            a: "visibility: hidden",
            b: "display: none",
            c: "opacity: 0",
            d: "visibility: none",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question: "Wie legt man die minimale Höhe eines Elements fest?",
          options: {
            a: "min-height",
            b: "height",
            c: "max-height",
            d: "min-width",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question: "Wie definiert man eine diagonale Linie als Rahmen?",
          options: {
            a: "border: 1px solid; transform: rotate(45deg);",
            b: "border-diagonal: 1px solid;",
            c: "border: 1px diagonal solid;",
            d: "border: 1px solid diagonal;",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Wie kann man sicherstellen, dass ein Element nicht aus dem sichtbaren Bereich des Fensters scrollt?",
          options: {
            a: "position: fixed",
            b: "position: sticky",
            c: "position: absolute",
            d: "overflow: hidden",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Wie legt man fest, dass ein Text automatisch umgebrochen wird?",
          options: {
            a: "word-wrap: break-word",
            b: "text-wrap: break-word",
            c: "wrap: word",
            d: "word-break: wrap",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question: "Wie definiert man einen Übergangseffekt in CSS?",
          options: {
            a: "transition",
            b: "transform",
            c: "animation",
            d: "change",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Wie kann man sicherstellen, dass ein Bild innerhalb eines Containers bleibt und seine Proportionen beibehält?",
          options: {
            a: "object-fit: contain",
            b: "object-fit: cover",
            c: "object-position: center",
            d: "image-fit: contain",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Wie definiert man eine zentrierte Positionierung eines Elements in CSS?",
          options: {
            a: "position: absolute; left: 50%; transform: translateX(-50%);",
            b: "position: relative; left: 50%; transform: translateX(-50%);",
            c: "position: center; left: 50%; transform: translateX(-50%);",
            d: "position: static; left: 50%; transform: translateX(-50%);",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Wie kann man eine Schattenumrandung für ein Element definieren?",
          options: {
            a: "box-shadow",
            b: "border-shadow",
            c: "shadow",
            d: "outline-shadow",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question: "Wie kann man die Deckkraft eines Elements festlegen?",
          options: {
            a: "opacity",
            b: "transparency",
            c: "visible",
            d: "filter",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Wie legt man fest, dass ein Element sowohl horizontal als auch vertikal zentriert wird?",
          options: {
            a: "display: flex; justify-content: center; align-items: center;",
            b: "display: block; text-align: center; vertical-align: middle;",
            c: "display: grid; place-items: center;",
            d: "position: fixed; top: 50%; left: 50%;",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Wie kann man sicherstellen, dass ein Element eine festgelegte Breite nicht überschreitet?",
          options: {
            a: "max-width",
            b: "min-width",
            c: "width",
            d: "max-height",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question: "Wie definiert man einen Kreis als Hintergrund?",
          options: {
            a: "border-radius: 50%",
            b: "shape: circle",
            c: "background-shape: circle",
            d: "border-style: round",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Wie kann man ein Bild in den Hintergrund einfügen, ohne dass es wiederholt wird?",
          options: {
            a: "background-repeat: no-repeat",
            b: "background-repeat: none",
            c: "background-repeat: stop",
            d: "background-repeat: hidden",
          },
          correctAnswer: "a",
          answered: false,
        },
      ],
      js: [
        {
          question:
            "Worauf bezieht sich das Schlüsselwort `this` in einer Methode innerhalb eines Objekts?",
          options: {
            a: "Auf das globale Objekt",
            b: "Auf das Objekt selbst",
            c: "Auf die Funktion",
            d: "Auf das DOM-Element",
          },
          correctAnswer: "b",
          answered: false,
        },
        {
          question:
            "Welche Methode wird verwendet, um ein oder mehrere Elemente an das Ende eines Arrays anzufügen?",
          options: {
            a: "push()",
            b: "pop()",
            c: "shift()",
            d: "unshift()",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question: "Wie erstellt man ein Objekt in JavaScript?",
          options: {
            a: "let obj = [ ];",
            b: "let obj = { };",
            c: "let obj = < >;",
            d: "let obj = ( );",
          },
          correctAnswer: "b",
          answered: false,
        },
        {
          question:
            "Welcher der folgenden ist kein primitiver Datentyp in JavaScript?",
          options: {
            a: "string",
            b: "number",
            c: "object",
            d: "undefined",
          },
          correctAnswer: "c",
          answered: false,
        },
        {
          question: "Was macht die Methode `map()`?",
          options: {
            a: "Wandelt ein Array in ein neues Array mit unterschiedlichen Werten um",
            b: "Gibt einen einzelnen Wert aus einem Array zurück",
            c: "Filtert Elemente aus einem Array",
            d: "Sortiert die Elemente eines Arrays",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question: "Wie entfernt man das letzte Element aus einem Array?",
          options: {
            a: "array.pop()",
            b: "array.remove()",
            c: "array.shift()",
            d: "array.delete()",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welche der folgenden Anweisungen erstellt eine flache Kopie eines Arrays?",
          options: {
            a: "array.copy()",
            b: "[...array]",
            c: "array.clone()",
            d: "array.slice(0)",
          },
          correctAnswer: "b",
          answered: false,
        },
        {
          question: "Was wird `console.log(0.1 + 0.2)` ausgeben?",
          options: {
            a: "0.3",
            b: "0.30000000000000004",
            c: "0.1",
            d: "undefined",
          },
          correctAnswer: "b",
          answered: false,
        },
        {
          question:
            "Wie konvertiert man eine Zeichenkette `str` in eine Ganzzahl?",
          options: {
            a: "parseInt(str)",
            b: "Number(str)",
            c: "str.toInteger()",
            d: "parseFloat(str)",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question: "Was macht der `filter()`-Operator?",
          options: {
            a: "Er filtert Elemente aus einem Array basierend auf einer Bedingung",
            b: "Er wandelt ein Array in einen neuen Datentyp um",
            c: "Er fügt neue Elemente zu einem Array hinzu",
            d: "Er entfernt das erste Element eines Arrays",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welcher Operator wird verwendet, um eine Zuweisung in JavaScript zu machen?",
          options: {
            a: "==",
            b: "===",
            c: "=",
            d: "=>",
          },
          correctAnswer: "c",
          answered: false,
        },
        {
          question: "Wie ruft man eine Funktion `myFunction` in JavaScript auf?",
          options: {
            a: "myFunction;",
            b: "call myFunction();",
            c: "myFunction();",
            d: "invoke myFunction();",
          },
          correctAnswer: "c",
          answered: false,
        },
        {
          question:
            "Was wird durch den folgenden Code erreicht: `setTimeout(function() { alert('Hello'); }, 2000);`?",
          options: {
            a: "Zeigt eine Nachricht sofort an",
            b: "Zeigt eine Nachricht nach 2 Sekunden an",
            c: "Zeigt eine Nachricht, wenn die Funktion aufgerufen wird",
            d: "Zeigt eine Nachricht beim Laden der Seite",
          },
          correctAnswer: "b",
          answered: false,
        },
        {
          question: "Was wird durch die Methode `reduce()` erreicht?",
          options: {
            a: "Reduziert die Länge eines Arrays",
            b: "Wandelt ein Array in einen einzelnen Wert um",
            c: "Filtert Elemente aus einem Array",
            d: "Sortiert die Elemente eines Arrays",
          },
          correctAnswer: "b",
          answered: false,
        },
        {
          question:
            "Welche Methode gibt den ersten Index eines Elements in einem Array zurück?",
          options: {
            a: "find()",
            b: "indexOf()",
            c: "lastIndexOf()",
            d: "findIndex()",
          },
          correctAnswer: "b",
          answered: false,
        },
        {
          question:
            "Wie prüft man, ob eine Variable `x` den Wert `undefined` hat?",
          options: {
            a: "x == null",
            b: "typeof x === 'undefined'",
            c: "x === 'undefined'",
            d: "x == undefined",
          },
          correctAnswer: "b",
          answered: false,
        },
        {
          question:
            "Was wird durch den Ausdruck `null === undefined` zurückgegeben?",
          options: {
            a: "true",
            b: "false",
            c: "null",
            d: "undefined",
          },
          correctAnswer: "b",
          answered: false,
        },
        {
          question: "Wie erstellt man eine anonyme Funktion in JavaScript?",
          options: {
            a: "function() { }",
            b: "let fn = function anonymous() { }",
            c: "let fn = () => { }",
            d: "function name() { }",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Wie kann man den Wert von `x` invertieren (also von `true` auf `false` oder umgekehrt)?",
          options: {
            a: "x = !x;",
            b: "x = x != true;",
            c: "x = invert(x);",
            d: "x = reverse(x);",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welche Methode wird verwendet, um eine Zeichenkette in Großbuchstaben umzuwandeln?",
          options: {
            a: "toUpperCase()",
            b: "toUpper()",
            c: "toCaps()",
            d: "toUppercase()",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question: "Was wird durch die Methode `Object.keys()` zurückgegeben?",
          options: {
            a: "Eine Liste der Werte eines Objekts",
            b: "Eine Liste der Schlüssel eines Objekts",
            c: "Eine Liste der Methoden eines Objekts",
            d: "Eine Liste der Arrays eines Objekts",
          },
          correctAnswer: "b",
          answered: false,
        },
        {
          question:
            "Wie verhindert man, dass eine Webseite beim Klicken auf einen Link aktualisiert wird?",
          options: {
            a: "event.preventDefault()",
            b: "event.stopPropagation()",
            c: "return false",
            d: "window.stop()",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question: "Was ist die Standardmethode zur Verkettung von Arrays?",
          options: {
            a: "concat()",
            b: "join()",
            c: "merge()",
            d: "add()",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Was ist der Unterschied zwischen `==` und `===` in JavaScript?",
          options: {
            a: "`==` vergleicht Werte, `===` vergleicht Werte und Typen",
            b: "`==` vergleicht Typen, `===` vergleicht Werte",
            c: "`==` vergleicht Objekte, `===` vergleicht primitive Werte",
            d: "Es gibt keinen Unterschied",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Wie erstellt man eine neue Instanz eines Objekts in JavaScript?",
          options: {
            a: "let obj = new Object();",
            b: "let obj = create Object();",
            c: "let obj = new object();",
            d: "let obj = construct Object();",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question: "Was macht der Operator `typeof`?",
          options: {
            a: "Gibt den Datentyp einer Variable zurück",
            b: "Ändert den Datentyp einer Variable",
            c: "Erstellt eine neue Variable",
            d: "Löscht eine Variable",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question: "Wie fügt man ein Element am Anfang eines Arrays hinzu?",
          options: {
            a: "array.push()",
            b: "array.unshift()",
            c: "array.shift()",
            d: "array.addFirst()",
          },
          correctAnswer: "b",
          answered: false,
        },
        {
          question: "Was wird `NaN` in JavaScript repräsentieren?",
          options: {
            a: "Not a Number",
            b: "Null",
            c: "Undefined",
            d: "Negativ",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welche der folgenden Aussagen ist in JavaScript nicht gültig?",
          options: {
            a: "let x = 1;",
            b: "const y = 2;",
            c: "var z = 3;",
            d: "const a;",
          },
          correctAnswer: "d",
          answered: false,
        },
      ],
    },
    hard: {
      html: [
        {
          question:
            "Welches Tag wird verwendet, um eine Definition in einer Beschreibungsliste zu erstellen?",
          options: {
            a: "<dt>",
            b: "<dd>",
            c: "<dl>",
            d: "<def>",
          },
          correctAnswer: "b",
          answered: false,
        },
        {
          question:
            "Welches Attribut wird verwendet, um die Art der Eingabe eines Formularfeldes zu ändern?",
          options: {
            a: "type",
            b: "input",
            c: "formtype",
            d: "datatype",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches Attribut definiert eine Zeichenkodierung für ein HTML-Dokument?",
          options: {
            a: "charset",
            b: "encoding",
            c: "type",
            d: "lang",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches Tag wird verwendet, um ein eingebettetes Video in HTML darzustellen?",
          options: {
            a: "<video>",
            b: "<embed>",
            c: "<object>",
            d: "<iframe>",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches Tag wird verwendet, um eine Option in einem Dropdown-Menü zu erstellen?",
          options: {
            a: "<option>",
            b: "<select>",
            c: "<optgroup>",
            d: "<dropdown>",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches HTML-Tag wird verwendet, um eingebetteten Audioinhalt hinzuzufügen?",
          options: {
            a: "<audio>",
            b: "<sound>",
            c: "<voice>",
            d: "<music>",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches Attribut wird verwendet, um einen Bedingungsausdruck in einem Script-Tag zu platzieren?",
          options: {
            a: "if",
            b: "condition",
            c: "for",
            d: "defer",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Wie kann man verhindern, dass ein Bild heruntergeladen wird?",
          options: {
            a: "Mit dem Attribut `draggable='false'`",
            b: "Mit dem Attribut `download='false'`",
            c: "Mit dem Attribut `nodownload`",
            d: "Mit dem Attribut `disable`",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches Tag wird verwendet, um eine mathematische Formel in HTML darzustellen?",
          options: {
            a: "<math>",
            b: "<formula>",
            c: "<equation>",
            d: "<mml>",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches Tag wird verwendet, um eine Inhaltsquelle von einer anderen Webseite in das Dokument einzubetten?",
          options: {
            a: "<iframe>",
            b: "<frame>",
            c: "<embed>",
            d: "<object>",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches Attribut wird verwendet, um einen Titel für eine Gruppe von Formularsteuerelementen festzulegen?",
          options: {
            a: "legend",
            b: "caption",
            c: "title",
            d: "label",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches HTML-Element wird verwendet, um den Autor eines Dokuments zu definieren?",
          options: {
            a: "<address>",
            b: "<author>",
            c: "<cite>",
            d: "<meta>",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches HTML-Element wird verwendet, um einen Bereich zum Zeichnen von Grafiken zu definieren?",
          options: {
            a: "<canvas>",
            b: "<svg>",
            c: "<graphic>",
            d: "<paint>",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches Attribut wird verwendet, um eine Verbindung zu einem Stylesheet mit einer bestimmten Medientype herzustellen?",
          options: {
            a: "media",
            b: "rel",
            c: "type",
            d: "connect",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches Attribut wird verwendet, um zu steuern, ob eine Eingabe vollständig großgeschrieben wird?",
          options: {
            a: "text-transform",
            b: "uppercase",
            c: "capitalize",
            d: "transform",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches Tag wird verwendet, um einen Inline-Bereich in HTML zu erstellen?",
          options: {
            a: "<span>",
            b: "<div>",
            c: "<inline>",
            d: "<block>",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches Tag wird verwendet, um ein eingebettetes Objekt darzustellen?",
          options: {
            a: "<object>",
            b: "<embed>",
            c: "<iframe>",
            d: "<include>",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches Attribut wird verwendet, um das Laden von Bildern in einem HTML-Dokument zu verzögern?",
          options: {
            a: "loading",
            b: "defer",
            c: "lazy",
            d: "async",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches Tag wird verwendet, um den Quellcode in einem HTML-Dokument darzustellen?",
          options: {
            a: "<code>",
            b: "<pre>",
            c: "<kbd>",
            d: "<samp>",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches HTML-Element wird verwendet, um einen Downloadlink zu erstellen?",
          options: {
            a: "<a>",
            b: "<link>",
            c: "<download>",
            d: "<file>",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches Attribut wird verwendet, um den Fokus auf ein bestimmtes HTML-Element zu setzen?",
          options: {
            a: "autofocus",
            b: "focus",
            c: "active",
            d: "selected",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches Attribut wird verwendet, um sicherzustellen, dass eine Datei in einem bestimmten Ordner gespeichert wird?",
          options: {
            a: "directory",
            b: "path",
            c: "folder",
            d: "location",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches Tag wird verwendet, um einen Tooltip in HTML darzustellen?",
          options: {
            a: "<abbr>",
            b: "<span>",
            c: "<tooltip>",
            d: "<hint>",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches HTML-Element wird verwendet, um eine Eingabeaufforderung für ein Passwort zu erstellen?",
          options: {
            a: "<input type='password'>",
            b: "<input type='secret'>",
            c: "<input type='text'>",
            d: "<input type='secure'>",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches Attribut wird verwendet, um ein Bild responsiv zu machen?",
          options: {
            a: "srcset",
            b: "responsive",
            c: "sizes",
            d: "adaptive",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches Attribut wird verwendet, um die Richtung des Textes in einem HTML-Dokument zu ändern?",
          options: {
            a: "dir",
            b: "lang",
            c: "align",
            d: "direction",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches HTML-Tag wird verwendet, um eine Fortschrittsanzeige zu erstellen?",
          options: {
            a: "<progress>",
            b: "<meter>",
            c: "<range>",
            d: "<bar>",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches Attribut wird verwendet, um eine Zeichenkette als HTML-Inhalt darzustellen?",
          options: {
            a: "innerHTML",
            b: "textContent",
            c: "content",
            d: "html",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches Attribut wird verwendet, um das Verhalten von eingebetteten Medien beim Scrollen zu steuern?",
          options: {
            a: "scrolling",
            b: "overflow",
            c: "autoplay",
            d: "controls",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question: "Welches HTML-Tag wird verwendet, um ein Datum anzugeben?",
          options: {
            a: "<time>",
            b: "<date>",
            c: "<datetime>",
            d: "<timestamp>",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches Attribut wird verwendet, um den Zugriff auf ein Formularfeld zu deaktivieren?",
          options: {
            a: "disabled",
            b: "readonly",
            c: "inactive",
            d: "locked",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welches HTML-Tag wird verwendet, um die Basis-URL für relative URLs in einem Dokument festzulegen?",
          options: {
            a: "<base>",
            b: "<link>",
            c: "<head>",
            d: "<meta>",
          },
          correctAnswer: "a",
          answered: false,
        },
      ],
      css: [
        {
          question: "Wie definiert man ein Grid-Layout in CSS?",
          options: {
            a: "display: grid",
            b: "display: flex",
            c: "display: inline-grid",
            d: "display: block-grid",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Wie legt man den Abstand zwischen den Spalten eines Grids fest?",
          options: {
            a: "grid-gap",
            b: "column-gap",
            c: "grid-spacing",
            d: "gap",
          },
          correctAnswer: "b",
          answered: false,
        },
        {
          question:
            "Wie definiert man eine Schriftgröße relativ zur Schriftgröße des übergeordneten Elements?",
          options: {
            a: "em",
            b: "rem",
            c: "vh",
            d: "px",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question: "Wie definiert man eine CSS-Variable?",
          options: {
            a: "--variable-name: value",
            b: "$variable-name: value",
            c: "var: variable-name value",
            d: "@variable-name: value",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Wie kann man eine Farbe mit linearer Transparenz in CSS festlegen?",
          options: {
            a: "linear-gradient()",
            b: "rgba()",
            c: "transparent()",
            d: "opacity-gradient()",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Wie definiert man eine feste Breite, die sich an die Breite des Elternteils anpasst?",
          options: {
            a: "width: 100%",
            b: "width: auto",
            c: "width: inherit",
            d: "width: fit-content",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Wie definiert man ein Grid-Item, das sich über mehrere Spalten erstreckt?",
          options: {
            a: "grid-column: span 2",
            b: "grid-span: 2",
            c: "column-span: 2",
            d: "grid-area: 2",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question: "Wie legt man die Höhe eines flexiblen Containers fest?",
          options: {
            a: "height",
            b: "flex-basis",
            c: "min-height",
            d: "line-height",
          },
          correctAnswer: "b",
          answered: false,
        },
        {
          question:
            "Wie definiert man eine Transition, die nur auf die Höhe eines Elements angewendet wird?",
          options: {
            a: "transition: height",
            b: "transition: all",
            c: "transition: width",
            d: "transition: height width",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Wie definiert man eine Animation, die unendlich wiederholt wird?",
          options: {
            a: "animation-iteration-count: infinite",
            b: "animation-repeat: infinite",
            c: "animation-count: infinite",
            d: "animation-loop: infinite",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Wie kann man die Reihenfolge eines flexiblen Elements innerhalb eines Containers ändern?",
          options: {
            a: "order",
            b: "flex-order",
            c: "z-index",
            d: "position-order",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Wie legt man fest, dass ein Element relativ zu seinem Elternteil positioniert wird?",
          options: {
            a: "position: relative",
            b: "position: absolute",
            c: "position: fixed",
            d: "position: static",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Wie definiert man eine Transformation, die ein Element um 45 Grad dreht?",
          options: {
            a: "transform: rotate(45deg)",
            b: "transform: rotate(45)",
            c: "rotation: 45deg",
            d: "rotate: 45deg",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Wie definiert man einen Text, der vertikal in der Mitte eines Containers ausgerichtet ist?",
          options: {
            a: "align-items: center",
            b: "justify-content: center",
            c: "vertical-align: middle",
            d: "text-align: center",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Wie legt man eine benutzerdefinierte Schriftart in CSS fest?",
          options: {
            a: "@font-face",
            b: "@font-family",
            c: "@font",
            d: "@font-style",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Wie definiert man eine benutzerdefinierte Schriftart mit einer Quelle?",
          options: {
            a: "src: url('font.ttf')",
            b: "font: url('font.ttf')",
            c: "font-family: url('font.ttf')",
            d: "font-face: url('font.ttf')",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Wie legt man fest, dass eine CSS-Regel nur auf Bildschirme mit einer Breite von mehr als 768px angewendet wird?",
          options: {
            a: "@media (min-width: 768px)",
            b: "@media screen and (min-width: 768px)",
            c: "@media (max-width: 768px)",
            d: "@media only screen and (min-width: 768px)",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Wie definiert man einen Übergang, der über 2 Sekunden stattfindet?",
          options: {
            a: "transition-duration: 2s",
            b: "transition-time: 2s",
            c: "transition-length: 2s",
            d: "transition-delay: 2s",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Wie legt man fest, dass ein flexibles Element den restlichen Platz innerhalb eines Containers ausfüllt?",
          options: {
            a: "flex-grow: 1",
            b: "flex-shrink: 1",
            c: "flex-basis: auto",
            d: "flex-fill: 1",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Wie kann man sicherstellen, dass ein Element nicht unter einen festen Header scrollt?",
          options: {
            a: "scroll-margin-top",
            b: "margin-top",
            c: "scroll-padding-top",
            d: "padding-top",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question: "Wie definiert man eine CSS-Grid-Vorlage für ein Layout?",
          options: {
            a: "grid-template",
            b: "grid-layout",
            c: "grid-define",
            d: "grid-area",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question: "Wie definiert man einen linearen Farbverlauf in CSS?",
          options: {
            a: "linear-gradient()",
            b: "gradient-linear()",
            c: "background-gradient()",
            d: "gradient-line()",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Wie legt man fest, dass ein Element in der Mitte des Fensters angezeigt wird?",
          options: {
            a: "position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%)",
            b: "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)",
            c: "position: center; top: 50%; left: 50%; transform: translate(-50%, -50%)",
            d: "position: relative; top: 50%; left: 50%; transform: translate(-50%, -50%)",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Wie legt man fest, dass ein Element beim Hovern größer wird?",
          options: {
            a: "transform: scale(1.1)",
            b: "hover: scale(1.1)",
            c: "transition: scale(1.1)",
            d: "hover-effect: scale(1.1)",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Wie definiert man einen Abstand zwischen den Rasterelementen eines Grids?",
          options: {
            a: "grid-gap",
            b: "gap",
            c: "grid-spacing",
            d: "spacing",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Wie legt man fest, dass ein Element sowohl horizontal als auch vertikal zentriert wird?",
          options: {
            a: "display: flex; justify-content: center; align-items: center;",
            b: "display: block; text-align: center; vertical-align: middle;",
            c: "display: grid; place-items: center;",
            d: "position: fixed; top: 50%; left: 50%;",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question: "Wie definiert man eine benutzerdefinierte Animation in CSS?",
          options: {
            a: "@keyframes",
            b: "@animation",
            c: "@frames",
            d: "@motion",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Wie legt man eine benutzerdefinierte Schriftart in CSS fest?",
          options: {
            a: "@font-face",
            b: "@font-family",
            c: "@font",
            d: "@font-style",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Wie definiert man eine flexible Ausrichtung von Elementen in CSS?",
          options: {
            a: "flex-direction",
            b: "justify-content",
            c: "align-items",
            d: "display: flex",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question: "Wie definiert man eine Schattenumrandung für ein Element?",
          options: {
            a: "box-shadow",
            b: "border-shadow",
            c: "shadow",
            d: "outline-shadow",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Wie definiert man eine Animation, die nach ihrer Ausführung angehalten wird?",
          options: {
            a: "animation-fill-mode: forwards",
            b: "animation-state: paused",
            c: "animation-fill: stop",
            d: "animation-end: hold",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Wie definiert man eine Transformation, die ein Element dreht und skaliert?",
          options: {
            a: "transform: rotate(45deg) scale(1.5)",
            b: "transform: scale(1.5) rotate(45deg)",
            c: "transition: rotate(45deg) scale(1.5)",
            d: "transition: scale(1.5) rotate(45deg)",
          },
          correctAnswer: "a",
          answered: false,
        },
      ],
      js: [
        {
          question:
            "Was ist der Unterschied zwischen `null` und `undefined` in JavaScript?",
          options: {
            a: "`null` ist ein zugewiesener Wert, `undefined` bedeutet, dass der Wert nicht definiert ist",
            b: "`null` und `undefined` sind gleichwertig",
            c: "`undefined` ist ein zugewiesener Wert, `null` bedeutet, dass der Wert nicht definiert ist",
            d: "`null` ist eine Zahl, `undefined` ist ein Objekt",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Wie verhindert man die Ausführung eines Ereignisses in JavaScript?",
          options: {
            a: "event.stopPropagation()",
            b: "event.preventDefault()",
            c: "return false",
            d: "Alle oben genannten",
          },
          correctAnswer: "d",
          answered: false,
        },
        {
          question:
            "Wie erkennt man, ob eine Eigenschaft in einem Objekt vorhanden ist?",
          options: {
            a: "'property' in object",
            b: "object.hasOwnProperty('property')",
            c: "object.property !== undefined",
            d: "Alle oben genannten",
          },
          correctAnswer: "d",
          answered: false,
        },
        {
          question:
            "Was wird durch den Ausdruck `[1, 2, 3] == [1, 2, 3]` zurückgegeben?",
          options: {
            a: "true",
            b: "false",
            c: "undefined",
            d: "Syntaxfehler",
          },
          correctAnswer: "b",
          answered: false,
        },
        {
          question:
            "Was ist der Unterschied zwischen `bind()`, `call()` und `apply()`?",
          options: {
            a: "`bind()` erstellt eine neue Funktion, `call()` und `apply()` führen die Funktion sofort aus",
            b: "`call()` und `apply()` sind gleich, `bind()` hat keinen Parameter",
            c: "`apply()` nimmt ein Array von Argumenten, `call()` nimmt einzelne Argumente",
            d: "A und C sind richtig",
          },
          correctAnswer: "d",
          answered: false,
        },
        {
          question: "Was ist der Zweck des `use strict`-Modus in JavaScript?",
          options: {
            a: "Verhindert die Verwendung von unsicheren Features",
            b: "Beschleunigt die Ausführung von JavaScript",
            c: "Macht JavaScript-Code kompatibel mit älteren Browsern",
            d: "Entfernt den Kontext `this` aus dem globalen Objekt",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Wie wird eine Immediately Invoked Function Expression (IIFE) geschrieben?",
          options: {
            a: "(function() { /* code */ })()",
            b: "function() { /* code */ }()",
            c: "(function() { /* code */ }())",
            d: "A und C sind richtig",
          },
          correctAnswer: "d",
          answered: false,
        },
        {
          question: "Was ist ein Closure in JavaScript?",
          options: {
            a: "Eine Funktion innerhalb einer anderen Funktion",
            b: "Ein Block von Code, der außerhalb seines Kontexts aufgerufen wird",
            c: "Eine Funktion, die Zugriff auf ihre äußere Funktion hat, auch nachdem diese ausgeführt wurde",
            d: "Eine anonyme Funktion",
          },
          correctAnswer: "c",
          answered: false,
        },
        {
          question: "Was wird durch den Ausdruck `typeof NaN` zurückgegeben?",
          options: {
            a: "number",
            b: "NaN",
            c: "undefined",
            d: "null",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Welcher Operator überprüft sowohl den Wert als auch den Typ in JavaScript?",
          options: {
            a: "==",
            b: "===",
            c: "=",
            d: "!=",
          },
          correctAnswer: "b",
          answered: false,
        },
        {
          question: "Was bedeutet das Konzept 'Hoisting' in JavaScript?",
          options: {
            a: "Variablen und Funktionen werden nach oben verschoben",
            b: "Variablen und Funktionen werden in den globalen Bereich verschoben",
            c: "Variablen werden initialisiert, bevor der Code ausgeführt wird",
            d: "Variablen können erst verwendet werden, nachdem sie deklariert wurden",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Wie kann man in JavaScript 'deep clone' von Objekten durchführen?",
          options: {
            a: "Object.assign({}, obj)",
            b: "JSON.parse(JSON.stringify(obj))",
            c: "obj.clone()",
            d: "Keines von den oben genannten",
          },
          correctAnswer: "b",
          answered: false,
        },
        {
          question:
            "Wie kann man in JavaScript auf alle Argumente einer Funktion zugreifen?",
          options: {
            a: "Mit dem `arguments` Objekt",
            b: "Indem man `...args` als Parameter verwendet",
            c: "Indem man `args` als Array deklariert",
            d: "A und B sind richtig",
          },
          correctAnswer: "d",
          answered: false,
        },
        {
          question: "Was macht die Methode `Object.freeze()`?",
          options: {
            a: "Macht ein Objekt unveränderlich",
            b: "Löscht alle Eigenschaften eines Objekts",
            c: "Kopiert ein Objekt",
            d: "Konvertiert ein Objekt in einen String",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question: "Wie entfernt man Duplikate aus einem Array?",
          options: {
            a: "[...new Set(array)]",
            b: "array.unique()",
            c: "array.filter((value, index, self) => self.indexOf(value) === index)",
            d: "A und C sind richtig",
          },
          correctAnswer: "d",
          answered: false,
        },
        {
          question: "Was wird durch den Ausdruck `0 == false` zurückgegeben?",
          options: {
            a: "true",
            b: "false",
            c: "null",
            d: "undefined",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question: "Wie kann man eine Variable blockweit gültig machen?",
          options: {
            a: "Mit `let` oder `const`",
            b: "Mit `var`",
            c: "Mit `block`",
            d: "Keine der obigen",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question: "Was wird `console.log([] + {})` zurückgeben?",
          options: {
            a: "'[object Object]'",
            b: "'{}'",
            c: "'[object]'",
            d: "Syntaxfehler",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question: "Was wird `console.log('5' - 2)` zurückgeben?",
          options: {
            a: "3",
            b: "'3'",
            c: "'52'",
            d: "Fehler",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question: "Wie verhindert man, dass eine Variable neu deklariert wird?",
          options: {
            a: "Mit `const`",
            b: "Mit `let`",
            c: "Mit `var`",
            d: "Mit `static`",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question: "Wie wird eine Promise in JavaScript aufgelöst?",
          options: {
            a: "Mit `resolve()`",
            b: "Mit `reject()`",
            c: "Mit `then()`",
            d: "Mit `catch()`",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question: "Was bedeutet 'event bubbling' in JavaScript?",
          options: {
            a: "Ein Ereignis wird von einem Element zu einem anderen weitergegeben",
            b: "Ein Ereignis breitet sich von innen nach außen aus",
            c: "Ein Ereignis wird sofort abgefangen",
            d: "Ein Ereignis wird von außen nach innen weitergegeben",
          },
          correctAnswer: "b",
          answered: false,
        },
        {
          question: "Was bedeutet 'debouncing' in JavaScript?",
          options: {
            a: "Ein Mechanismus, der sicherstellt, dass eine Funktion nicht zu oft ausgeführt wird",
            b: "Ein Mechanismus, der verhindert, dass eine Funktion zu früh ausgeführt wird",
            c: "Ein Mechanismus, der sicherstellt, dass eine Funktion wiederholt ausgeführt wird",
            d: "Ein Mechanismus, der sicherstellt, dass eine Funktion nach einer Verzögerung ausgeführt wird",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Was ist der Unterschied zwischen `setTimeout` und `setInterval`?",
          options: {
            a: "`setTimeout` führt eine Funktion einmal nach einer Verzögerung aus, `setInterval` führt sie wiederholt aus",
            b: "`setTimeout` wiederholt die Ausführung einer Funktion, `setInterval` führt sie nur einmal aus",
            c: "`setTimeout` wird verwendet, um eine Funktion sofort auszuführen, `setInterval` wird nach einer Verzögerung verwendet",
            d: "`setTimeout` ist eine Schleife, `setInterval` nicht",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question: "Was wird durch den Ausdruck `typeof null` zurückgegeben?",
          options: {
            a: "object",
            b: "null",
            c: "undefined",
            d: "boolean",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question: "Wie bindet man eine Methode an ein bestimmtes Objekt?",
          options: {
            a: "Mit `bind()`",
            b: "Mit `call()`",
            c: "Mit `apply()`",
            d: "Mit `attach()`",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Wie kann man auf Eigenschaften eines Objekts dynamisch zugreifen?",
          options: {
            a: "Mit `object['property']`",
            b: "Mit `object.property`",
            c: "Mit `object.property()`",
            d: "Mit `object->property`",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question: "Was wird durch den Ausdruck `!!(false)` zurückgegeben?",
          options: {
            a: "false",
            b: "true",
            c: "undefined",
            d: "null",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question: "Was ist der Zweck von `Object.assign()`?",
          options: {
            a: "Kopiert Eigenschaften von einem oder mehreren Objekten in ein Zielobjekt",
            b: "Macht ein Objekt unveränderlich",
            c: "Löscht Eigenschaften eines Objekts",
            d: "Konvertiert ein Objekt in einen String",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question: "Wie konvertiert man einen String in ein JSON-Objekt?",
          options: {
            a: "JSON.parse(string)",
            b: "JSON.stringify(string)",
            c: "string.toJSON()",
            d: "string.parseJSON()",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question: "Was bedeutet 'strict mode' in JavaScript?",
          options: {
            a: "Ein strengerer Satz von Regeln für das Schreiben von JavaScript",
            b: "Eine optimierte Version von JavaScript",
            c: "Ein Modus, der alte Funktionen von JavaScript blockiert",
            d: "Ein Modus, der JavaScript in einer separaten Umgebung ausführt",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question: "Was wird durch `console.log('5' + 2)` zurückgegeben?",
          options: {
            a: "'52'",
            b: "7",
            c: "NaN",
            d: "Fehler",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question: "Was bedeutet 'temporal dead zone' in JavaScript?",
          options: {
            a: "Der Zeitraum, in dem eine `let` oder `const` Variable deklariert, aber noch nicht initialisiert wurde",
            b: "Der Zeitraum, in dem eine `var` Variable deklariert, aber noch nicht initialisiert wurde",
            c: "Der Zeitraum, in dem eine Funktion deklariert, aber noch nicht aufgerufen wurde",
            d: "Der Zeitraum, in dem ein Objekt deklariert, aber noch nicht verwendet wurde",
          },
          correctAnswer: "a",
          answered: false,
        },
        {
          question:
            "Was passiert, wenn man versucht, eine nicht existierende Eigenschaft eines Objekts zuzugreifen?",
          options: {
            a: "Gibt `undefined` zurück",
            b: "Löst einen Fehler aus",
            c: "Gibt `null` zurück",
            d: "Gibt einen leeren String zurück",
          },
          correctAnswer: "a",
          answered: false,
        },
      ],
    },
  };