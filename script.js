let jsBeginnerQuestions = [
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
    question: "Was ist das Ergebnis des Ausdrucks `2 + 3 * 4` in JavaScript?",
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
    question: "Welches der folgenden Symbole ist ein arithmetischer Operator?",
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
    question: "Wie subtrahiert man in JavaScript zwei Zahlen, z.B. 10 und 4?",
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
    question: "Wie weist man den Wert 'Hallo' einer Variablen `greeting` zu?",
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
];

// Function to create and populate the header
const createHeader = () => {
  const header = document.getElementById("header");
  const nav = document.createElement("nav");
  const h1 = document.createElement("h1");
  h1.textContent = "JS - Trainer";

  const navStats = document.createElement("div");
  navStats.className = "nav-stats";

  const scoreBox = document.createElement("div");
  scoreBox.className = "score-box";

  const h3 = document.createElement("h3");
  h3.textContent = "Score";

  const scoreP = document.createElement("p");
  scoreP.id = "score";
  scoreP.textContent = "0";

  scoreBox.appendChild(h3);
  scoreBox.appendChild(scoreP);
  navStats.appendChild(scoreBox);
  nav.appendChild(h1);
  nav.appendChild(navStats);
  header.appendChild(nav);
};

// Function to create and populate the main content
const createMainContent = () => {
  const main = document.getElementById("main");

  // Game over section
  const gameOverDiv = document.createElement("div");
  gameOverDiv.className = "game-over";
  gameOverDiv.style.display = "none";

  const gameOverH2 = document.createElement("h2");
  gameOverH2.textContent = "Du hast alle Fragen beantwortet";

  const gameOverP = document.createElement("p");
  gameOverP.innerHTML = 'Deine Punktzahl ist: <span id="final-score">0</span>';

  const restartButton = document.createElement("button");
  restartButton.id = "restart";
  restartButton.textContent = "Restart";

  gameOverDiv.appendChild(gameOverH2);
  gameOverDiv.appendChild(gameOverP);
  gameOverDiv.appendChild(restartButton);
  main.appendChild(gameOverDiv);

  // Game section
  const gameSection = document.createElement("section");
  gameSection.id = "game";

  const questionContainer = document.createElement("div");
  questionContainer.className = "question-container";

  const questionP = document.createElement("p");
  questionP.id = "question";

  questionContainer.appendChild(questionP);
  gameSection.appendChild(questionContainer);

  const answerContainer = document.createElement("div");
  answerContainer.className = "answer-container";

  ["option1", "option2", "option3", "option4"].forEach((id) => {
    const optionDiv = document.createElement("div");
    optionDiv.id = id;
    optionDiv.className = "answer-text";

    const optionP = document.createElement("p");
    optionDiv.appendChild(optionP);

    answerContainer.appendChild(optionDiv);
  });

  gameSection.appendChild(answerContainer);
  main.appendChild(gameSection);

  // Modal section
  const modalDiv = document.createElement("div");
  modalDiv.id = "result-modal";
  modalDiv.className = "modal";

  const modalContentDiv = document.createElement("div");
  modalContentDiv.className = "modal-content";

  const closeModalSpan = document.createElement("span");
  closeModalSpan.id = "close-modal";
  closeModalSpan.className = "close";
  closeModalSpan.innerHTML = "&times;";

  const modalTextP = document.createElement("p");
  modalTextP.id = "modal-text";

  const modalRightAnsP = document.createElement("p");
  modalRightAnsP.id = "modal-rightAns";

  const progressBarDiv = document.createElement("div");
  progressBarDiv.id = "progress-bar";

  modalContentDiv.appendChild(closeModalSpan);
  modalContentDiv.appendChild(modalTextP);
  modalContentDiv.appendChild(modalRightAnsP);
  modalContentDiv.appendChild(progressBarDiv);
  modalDiv.appendChild(modalContentDiv);
  main.appendChild(modalDiv);
};

// Call the functions to create the content
createHeader();
createMainContent();

let score = 0;

const checkIfGameIsOver = () => {
  const unansweredQuestions = jsBeginnerQuestions.filter(
    (question) => !question.answered
  );
  if (unansweredQuestions.length === 0) {
    document.getElementById("game").style.display = "none";
    document.querySelector(".game-over").style.display = "block";
    document.getElementById("final-score").textContent = score;
    clearProgress(); // Clear progress when the quiz is completed
  }
};

const restartButton = document.getElementById("restart");
const restartGame = () => {
  jsBeginnerQuestions.forEach((question) => {
    question.answered = false;
  });
  score = 0;
  document.getElementById("score").textContent = score;
  currentQuestion = pickRandomQuestion(jsBeginnerQuestions);
  displayQuestion(currentQuestion);
  document.getElementById("game").style.display = "flex";
  document.querySelector(".game-over").style.display = "none";
  saveProgress(); // Save the reset progress
};

restartButton.addEventListener("click", restartGame);

// Load progress from localStorage
const loadProgress = () => {
  const savedProgress = localStorage.getItem("quizProgress");
  if (savedProgress) {
    const progress = JSON.parse(savedProgress);
    score = progress.score;
    jsBeginnerQuestions = progress.questions;
    document.getElementById("score").textContent = score;
  }
};

// Save progress to localStorage
const saveProgress = () => {
  const progress = {
    score: score,
    questions: jsBeginnerQuestions,
  };
  localStorage.setItem("quizProgress", JSON.stringify(progress));
};

// Clear progress from localStorage
const clearProgress = () => {
  localStorage.removeItem("quizProgress");
};

// Function to pick a random unanswered question
const pickRandomQuestion = (questions) => {
  const unansweredQuestions = questions.filter(
    (question) => !question.answered
  );
  if (unansweredQuestions.length === 0) {
    return null; // No questions left
  }
  const randomIndex = Math.floor(Math.random() * unansweredQuestions.length);
  return unansweredQuestions[randomIndex];
};

// Load the saved progress if available
loadProgress();

let currentQuestion = pickRandomQuestion(jsBeginnerQuestions);
const questionElement = document.getElementById("question");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");

// Function to display the question and options on the page
const displayQuestion = (questionObj) => {
  questionElement.textContent = questionObj.question;
  option1.textContent = questionObj.options.a;
  option2.textContent = questionObj.options.b;
  option3.textContent = questionObj.options.c;
  option4.textContent = questionObj.options.d;
};

// Function to check the answer and update the score
const checkAnswer = (selectedOption, correctAnswer) => {
  if (selectedOption === correctAnswer) {
    score++;
    document.getElementById("score").textContent = score;
    return true;
  }
  return false;
};

// Get modal elements
const modal = document.getElementById("result-modal");
const modalText = document.getElementById("modal-text");
const closeModal = document.getElementById("close-modal");
const progressBar = document.getElementById("progress-bar");
const modalRightAns = document.getElementById("modal-rightAns");

// Handle the answer selection
const handleAnswer = (selectedOption) => {
  const correct = checkAnswer(selectedOption, currentQuestion.correctAnswer);

  let selectedElement;
  if (selectedOption === "a") {
    selectedElement = option1;
  } else if (selectedOption === "b") {
    selectedElement = option2;
  } else if (selectedOption === "c") {
    selectedElement = option3;
  } else if (selectedOption === "d") {
    selectedElement = option4;
  }

  // Display result in the modal and apply the correct class
  if (correct) {
    selectedElement.classList.add("success");
    modalText.textContent = "Korrekt!";
  } else {
    selectedElement.classList.add("danger");
    modalText.textContent = "Falsch!";
  }

  // Always show the correct answer in the modal
  modalRightAns.textContent = `Die richtige Antwort ist: ${
    currentQuestion.options[currentQuestion.correctAnswer]
  }`;

  // Show the modal
  modal.style.display = "flex";

  // Reset and start the progress bar
  progressBar.style.width = "100%";
  setTimeout(() => {
    progressBar.style.width = "0%";
  }, 10);

  // Mark the current question as answered
  currentQuestion.answered = true;

  // Save the progress
  saveProgress();

  // Automatically close the modal and move to the next question after a delay
  setTimeout(() => {
    closeModalFunc(selectedElement);
  }, 1500);
};

// Function to close the modal and load the next question
const closeModalFunc = (selectedElement) => {
  // Hide the modal
  modal.style.display = "none";
  // Remove previous color classes
  if (selectedElement) {
    selectedElement.classList.remove("success", "danger");
  }

  // Load the next question
  currentQuestion = pickRandomQuestion(jsBeginnerQuestions);
  if (currentQuestion) {
    displayQuestion(currentQuestion);
  } else {
    checkIfGameIsOver(); // Check if the game is over when there are no more questions
  }
};

// Event listener to close the modal manually
closeModal.addEventListener("click", () => {
  closeModalFunc(document.querySelector(".success, .danger"));
});
// Add event listeners to the answer options
option1.addEventListener("click", () => handleAnswer("a"));
option2.addEventListener("click", () => handleAnswer("b"));
option3.addEventListener("click", () => handleAnswer("c"));
option4.addEventListener("click", () => handleAnswer("d"));

// Initialize the game
const gameLoop = () => {
  checkIfGameIsOver(); // Check if the game is already over when starting
  if (currentQuestion) {
    displayQuestion(currentQuestion);
  }
};

// Start the game loop
gameLoop();
