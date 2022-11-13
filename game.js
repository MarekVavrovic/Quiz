const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
const url = document.getElementById("url");

//loader
const loader =document.getElementById("loader");
const game = document.getElementById("game")

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [];

fetch(
  "https://raw.githubusercontent.com/MarekVavrovic/QuestionPics106/main/QuestionsPistures106.JSON"
)
  .then((res) => {
    return res.json();
  })
  .then((loadedQuestions) => {
    questions = loadedQuestions;
    startGame();
  })
  .catch((err) => {
    console.log(err);
  });




const BONUS = 1;
const MAX_QUESTIONS = 15;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
  game.classList.remove("hidden");
  loader.classList.add("hidden");
};

getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    //send score to local storage
     localStorage.setItem("mostRecentScore", score);
    //go to the end page
    return window.location.assign("/end.html");
  }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;

  //Update progress bar
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  
  question.innerText = currentQuestion.question;

  //adding URL
  url.innerHTML = `<img src="${currentQuestion.URL}" >`;


  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const correctIncorrect =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (correctIncorrect === "correct") {
      incrementScore(BONUS);
    }

    selectedChoice.parentElement.classList.add(correctIncorrect);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(correctIncorrect);
      getNewQuestion();
    }, 500);
  });
});

incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};


