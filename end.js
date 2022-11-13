
const mostRecentScore = localStorage.getItem("mostRecentScore");



finalScore.innerText =
  'Rate Of Success: ' + Math.round((mostRecentScore / 15) * 100)+'%';

