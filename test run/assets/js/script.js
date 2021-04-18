var quizTimer = document.getElementById("timer");
var score = 0;
var resultsDiv = document.getElementById("results");
var startDiv = document.getElementById("start");
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")

let shuffledQuestions, currentQuestionIndex

//  Functions
function startGame() {
  console.log("Started!");
  // debugger;
  startDiv.style.display = "none";
  resultsDiv.style.display = "none";

  // shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0

  // Timer Starts
  var timeLeft = 5
    //Timer
    timerInterval = setInterval(function() {
        timeLeft--;
        quizTimer.textContent = "Time left: " + timeLeft;
    
        if(timeLeft === 0) {
          clearInterval(timerInterval);
          showResults();
        }
      }, 1000);
      
      // Start questions
      // setNextQuestion();
  showQuestions()

    // variable to store the HTML output
    const output = [];
  
    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
        // variable to store the list of possible answers
        const answers = [];
  
        // and for each available answer...
        for(letter in currentQuestion.answers){
  
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
  
    // finally combine our output list into one string of HTML and put it on the page
    // quizContainer.innerHTML = output.join('');
  }

  function setNextQuestion(){
  // showQuestions(shuffledQuestions[currentQuestionIndex])

};

var questions = [
  {
      question: "How many elements can you apply an 'ID' attribute to?",
      answers: [
        {text: "As many as you want", correct: false},
        {text: "3", correct: false},
        {text: "1", correct: true},
        {text: "128", correct: false}
      ]
  },

  {
    question: "What does DOM stand for?",
    answers: [
      {text: "Document Object Model", correct: true},
      {text: "Display Object Management", correct: false},
      {text: "Digital Ordinance Model", correct: false},
      {text: "Desktop Oriented Mode", correct: false}
    ]
},

{
  question: "What is used primarily to add styling to a web page?",
  answers: [
    {text: "HTML", correct: false},
    {text: "CSS", correct: true},
    {text: "Python", correct: false},
    {text: "React.js", correct: false}
  ]
},
     
{
question: "What HTML tags are JavaScript code wrapped in?",
answers: [
  {text: "&lt;div&gt;", correct: false},
  {text: "&lt;link&gt;", correct: true},
  {text: "&lt;head&gt;", correct: false},
  {text: "&lt;script&gt;", correct: false}
]
},

{
question: "When is localStorage data cleared?",
answers: [
  {text: "No expiration time", correct: true},
  {text: "On page reload", correct: false},
  {text: "On browser close", correct: false},
  {text: "On computer restart", correct: false}
]
},

{
question: "What does WWW stand for?",
answers: [
  {text: "Web World Workings",correct: false},
  {text: "Weak Winter Wind", correct: false},
  {text: "World Wide Web", correct: true},
  {text: "Wendy Wants Waffles", correct: false}
]
},

{
question: "What HTML attribute references an external JavaScript file?",
answers: [
  {text: "href", correct: false},
  {text: "src", correct: true},
  {text: "class", correct: false},
  {text: "index", correct: false}
]
},
];

function showQuestions(questions) {
  console.log(questions);
  
  questionElement.innerText = questions[0].question
}

  function showResults(){

    // gather answer containers from our quizon
    const answerContainers = quizContainer.querySelectorAll('.answers');
  
    // keep track of user's answers
    let numCorrect = 0;
  
    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {
  
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;
  
        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });
  
    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const startButton = document.getElementById('start');




// click button to start game
startButton.addEventListener('click', startGame);