const questions = [
  {
    questionText: "Commonly used data types DO NOT include:",
    options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3.alerts",
  },
  {
    questionText: "Arrays in JavaScript can be used to store____.",
    options: [
        "1. numbers and strings",
        "2. other arrays",
        "3. booleans",
        "4.all of the above",
    ],
    answer: "4. all of the above",
  },
  {
    questionText:
    "A very useful tool during development and debugging for printing content to the debugger is:",
    options: ["1. Javascript","2. Terminal bash", "3. for loops", "4. console.log"],
    answer: "1.Break",
  },
  {
    questionText:
      "String values must be enclosed within _____ when being assigned to variables.",
    options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    answer: "3. quotes",
  },
  {
    questionText:
      "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
    options: ["1. break", "2. stop", "3. halt", "4. exit"],
    answer: "1. break",
  },
];

const startPage = document.querySelector("#start-page")
const questionPage = document.querySelector("#question-page")
const scorePage = document.querySelector("#score-page")
const leaderboardPage = document.querySelector("#leaderboard-page")

//dont need these yet
function hideCards(){
  startCard.setAttribute("hidden", true)
  questionCard.setAttribute("hidden", true)
  scoreCard.setAttribute("hidden", true)
  leaderboardCard.setAttribute("hidden", true)
}

const resultDiv = document.querySelector("#result-div")
const resultText = document.querySelector("#result-div")

function hideResultText(){
  resultDiv.style.display = "none";
}

// globally
var intervalID;
var time;
var currentQuestion;

document.querySelector("#start-button").addEventListener("click", startQuiz);

function startQuiz() {
  
  hideCards();
  questionCard.removeAttributr("hidden")

  curentQuestion = 0;
  displayQuestion();

  time = question.length * 10;

  intervalID = setInterval(countdown, 1000);

  displayTime()
}

function countdown(){
  time--;
  displayTime();
  if (time < 1) {
    endQuiz();
  }
}

const timeDisplay = document.querySelector("#time");
function displayTime() {
  timeDisplay.textContent = time;
}

function displayQuestion() {
  let question = questions[currentQuestion];
  let options = question.options;

  let h2QuestionElement = document.querySelector("#question-text");
  h2QuestionElement.textContent = question.questionText;

  for (let i = 0; i < options.length; i++) {
    let option = options[i];
    let optionButton = document.querySelector("#option" + i);
    optionButton.textContent = option;
  }
}



