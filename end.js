
// const saveScoreBtn = document.getElementById("saveScoreBtn");
// const finalScore = document.getElementById("finalScore");


//get score from local storage
const mostRecentScore = localStorage.getItem("mostRecentScore");

// const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
// const MAX_HIGH_SCORES = 5;

finalScore.innerText =
  'Rate Of Success: ' + Math.round((mostRecentScore / 15) * 100)+'%';

// username.addEventListener("keyup", () => {
//   saveScoreBtn.disabled = !username.value;
// });


// saveHighScore = (e) => {
//   e.preventDefault();

//   const score = {
//     score: mostRecentScore,
//     name: username.value,
//   };
//   highScores.push(score);
//   highScores.sort((a, b) => b.score - a.score);
//   highScores.splice(5);

//   //update local storage
//   localStorage.setItem("highScores", JSON.stringify(highScores));
//   window.location.assign("/");
// };
