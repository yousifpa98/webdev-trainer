// Function to create and populate the header
const createHeader = () => {
  const header = document.getElementById("header");
  const nav = document.createElement("nav");
  const h1 = document.createElement("h1");

  const link = document.createElement("a");
  link.href = "index.html";
  link.textContent = "Web Dev Trainer";
  h1.appendChild(link);

  const navStats = document.createElement("div");
  navStats.className = "nav-stats";
  navStats.id = "nav-stats"; // Added ID for easier access

  const scoreBox = document.createElement("div");
  scoreBox.className = "score-box";
  scoreBox.id = "score-box"; // Added ID for easier access

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

  // Menu section
  const menuDiv = document.createElement("div");
  menuDiv.id = "menu";

  // Difficulty selection
  const difficultySection = document.createElement("div");
  difficultySection.className = "menu-section";
  const difficultyLabel = document.createElement("label");
  difficultyLabel.textContent = "Wähle eine Schwierigkeit:";
  const difficultySelect = document.createElement("select");
  difficultySelect.id = "difficulty";
  ["beginner", "medium", "hard"].forEach((level) => {
      const option = document.createElement("option");
      option.value = level;
      option.textContent = level.charAt(0).toUpperCase() + level.slice(1);
      difficultySelect.appendChild(option);
  });
  difficultySection.appendChild(difficultyLabel);
  difficultySection.appendChild(difficultySelect);

  // Topic selection
  const topicSection = document.createElement("div");
  topicSection.className = "menu-section";
  const topicLabel = document.createElement("label");
  topicLabel.textContent = "Wähle ein Thema:";
  const topicSelect = document.createElement("select");
  topicSelect.id = "topic";
  ["html", "css", "js"].forEach((topic) => {
      const option = document.createElement("option");
      option.value = topic;
      option.textContent = topic.toUpperCase();
      topicSelect.appendChild(option);
  });
  topicSection.appendChild(topicLabel);
  topicSection.appendChild(topicSelect);

  // Start game button
  const startButton = document.createElement("button");
  startButton.id = "start-game";
  startButton.textContent = "Start Game";

  // Append all sections to menu
  menuDiv.appendChild(difficultySection);
  menuDiv.appendChild(topicSection);
  menuDiv.appendChild(startButton);
  main.appendChild(menuDiv);

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
  gameSection.style.display = "none"; // Hide the game section initially

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

  // Event listener for the start game button
  startButton.addEventListener("click", () => {
      const selectedDifficulty = difficultySelect.value;
      const selectedTopic = topicSelect.value;
      startGame(selectedDifficulty, selectedTopic);
  });
};

// Function to start the game based on selected difficulty and topic
const startGame = (difficulty, topic) => {
  // Hide the menu and show the game section
  document.getElementById("menu").style.display = "none";
  document.getElementById("game").style.display = "flex";

  // Hide the score when in the menu
  document.getElementById("nav-stats").style.display = "block";

  // Load the selected questions
  const selectedQuestions = questions[difficulty][topic];
  currentQuestions = selectedQuestions;

  // Reset the score
  score = 0;
  document.getElementById("score").textContent = score;

  // Start the game loop
  currentQuestion = pickRandomQuestion(currentQuestions);
  gameLoop();
};

createHeader();
createMainContent();

// Rest of your existing game logic
let score = 0;
let currentQuestions = [];

const checkIfGameIsOver = () => {
  const unansweredQuestions = currentQuestions.filter(
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
  currentQuestions.forEach((question) => {
      question.answered = false;
  });
  score = 0;
  document.getElementById("score").textContent = score;
  currentQuestion = pickRandomQuestion(currentQuestions);
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
      currentQuestions = progress.questions;
      document.getElementById("score").textContent = score;
  }
};

// Save progress to localStorage
const saveProgress = () => {
  const progress = {
      score: score,
      questions: currentQuestions,
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

let currentQuestion = pickRandomQuestion(currentQuestions);
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
  currentQuestion = pickRandomQuestion(currentQuestions);
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
