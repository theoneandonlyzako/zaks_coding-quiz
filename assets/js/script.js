var quizTimer = document.getElementById("timer");
var score = 0;
var resultsDiv = document.getElementById("results");
var startDiv = document.getElementById("start");
const questionElement = document.getElementById("question")
const questionContainer = document.getElementById("question-container")
const answerButtons = Array.from(document.getElementsByClassName("answer-btn"));
console.log(answerButtons);

var questions = [
  {
    question: "How many elements can you apply an 'ID' attribute to?",
    answers: [
      { text: "As many as you want", correct: false },
      { text: "3", correct: false },
      { text: "1", correct: true },
      { text: "128", correct: false }
    ]
  },

  {
    question: "What does DOM stand for?",
    answers: [
      { text: "Document Object Model", correct: true },
      { text: "Display Object Management", correct: false },
      { text: "Digital Ordinance Model", correct: false },
      { text: "Desktop Oriented Mode", correct: false }
    ]
  },

  {
    question: "What is used primarily to add styling to a web page?",
    answers: [
      { text: "HTML", correct: false },
      { text: "CSS", correct: true },
      { text: "Python", correct: false },
      { text: "React.js", correct: false }
    ]
  },

  {
    question: "What HTML tags are JavaScript code wrapped in?",
    answers: [
      { text: "&lt;div&gt;", correct: false },
      { text: "&lt;link&gt;", correct: true },
      { text: "&lt;head&gt;", correct: false },
      { text: "&lt;script&gt;", correct: false }
    ]
  },

  {
    question: "When is localStorage data cleared?",
    answers: [
      { text: "No expiration time", correct: true },
      { text: "On page reload", correct: false },
      { text: "On browser close", correct: false },
      { text: "On computer restart", correct: false }
    ]
  },

  {
    question: "What does WWW stand for?",
    answers: [
      { text: "Web World Workings", correct: false },
      { text: "Weak Winter Wind", correct: false },
      { text: "World Wide Web", correct: true },
      { text: "Wendy Wants Waffles", correct: false }
    ]
  },

  {
    question: "What HTML attribute references an external JavaScript file?",
    answers: [
      { text: "href", correct: false },
      { text: "src", correct: true },
      { text: "class", correct: false },
      { text: "index", correct: false }
    ]
  },
];

let shuffledQuestions, currentQuestionIndex

//  Functions
function startGame() {
  console.log("Started!");
  startDiv.style.display = "none";
  resultsDiv.style.display = "none";
  questionContainer.style.display = "flex";

  // shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0

  // Timer Starts
  var timeLeft = 76
  //Timer
   var timerInterval = setInterval(function () {
    timeLeft--;
    quizTimer.textContent = "Time left: " + timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      showResults();
    }
  }, 1000);

  // Start questions
  // setNextQuestion();
  showNextQuestion();

  // finally combine our output list into one string of HTML and put it on the page
  // quizContainer.innerHTML = output.join('');
}

function showNextQuestion() {
  // showQuestions(shuffledQuestions[currentQuestionIndex])
  questionElement.textContent = questions[currentQuestionIndex].question;

  answerButtons.forEach((element, index) => {

    element.innerText = questions[currentQuestionIndex].answers[index].text;

  });

};

function showResults() {

}

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const startButton = document.getElementById('start');

// click button to start game
startButton.addEventListener('click', startGame);