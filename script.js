let result;
let userScore = 0;
let compScore = 0;
let wonRounds = 0;

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const won_rounds_span = document.querySelectorAll(".won-rounds");
const play_again = document.querySelectorAll(".btn");
const toast_body = document.getElementsByClassName("toast-body")[0];
const modal_title = document.getElementById("ModalTitle");
const modal_body = document.getElementsByClassName("modal-body")[1];

play_again[1].addEventListener("click", reset);
play_again[2].addEventListener("click", reset);
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: apiKey,
  authDomain: "rock-paper-scissors-5eb47.firebaseapp.com",
  databaseURL: "https://rock-paper-scissors-5eb47.firebaseio.com",
  projectId: "rock-paper-scissors-5eb47",
  storageBucket: "rock-paper-scissors-5eb47.appspot.com",
  messagingSenderId: "916950638113",
  appId: "1:916950638113:web:3f29298d46afb2db5ccd60",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var scoresRef = firebase.database().ref("scores");
var ref = firebase.database().ref("scores");
ref.on("value", gotScores, errMessage);

function gotScores(data) {
  var scores = data.val();
  var keys = Object.keys(scores);
  var scorecollection = document.querySelectorAll("li");
  for (var j = 0; j < scorecollection.length; j++) {
    scorecollection[j].remove();
  }
  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];
    var name = scores[k].name;
    var won_rounds = scores[k].wonRounds;
    var li = document.createElement("li");
    li.innerHTML = `${name}:<span class="won-rounds"> ${won_rounds} </span>`;
    li.setAttribute("data-score", won_rounds);

    var scoreboard = document.getElementById("scoreboard");
    scoreboard.append(li);
    var $scoreboard = $("#scoreboard");
    $scoreboard
      .find("li")
      .sort(function (a, b) {
        return -a.getAttribute("data-score") - -b.getAttribute("data-score");
      })
      .appendTo($scoreboard);
  }
}
function errMessage(err) {
  console.log("Error!");
  console.log(err);
}

function Welcome() {
  sessionStorage.setItem("welcome", "rules");
  $("#welcomeModal").modal("show");
}

if (sessionStorage.getItem("welcome") === "rules") {
  console.log("perfectenschlag");
} else {
  Welcome();
}

document
  .getElementById("publishScores")
  .addEventListener("submit", publishScores);

function publishScores(e) {
  e.preventDefault();
  $("#resultsModal").modal("hide");
  $(".toast").toast("show");
  toast_body.innerHTML = "Your results have been saved!";
  var name = document.getElementById("name").value;
  saveScores(name, wonRounds);
}

function saveScores(name) {
  var newScoreRef = scoresRef.push();
  newScoreRef.set({
    name: name,
    wonRounds: wonRounds,
  });
}

function victory() {
  if (result === "Victory!") {
    userScore++;
    userScore_span.innerHTML = userScore;
  }
  if (userScore === 3) {
    wonRounds++;
    won_rounds_span[0].innerHTML = wonRounds;
    won_rounds_span[1].innerHTML = wonRounds;
    $(".toast").toast("show");
    toast_body.innerHTML = "You have won a round!";
    userScore = 0;
    compScore = 0;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    console.log(wonRounds);
  }
}

function defeat() {
  if (result === "Defeat!") {
    compScore++;
    compScore_span.innerHTML = compScore;
  }
  if (compScore === 3) {
    $("#resultsModal").modal("show");
    if (wonRounds === 0) {
      $("#resultsModal").modal("show");
      modal_body.innerHTML = ` <p>You have won <span class="won-rounds">0</span> round</p>
      <button onclick='location.reload()'
        type="button"
        class="btn btn-secondary btn-block"
        data-dismiss="modal"
      >
        Play again?
      </button>`;
    }
    userScore = 0;
    compScore = 0;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
  }
}

function reset() {
  userScore = 0;
  compScore = 0;
  wonRounds = 0;
  won_rounds_span[0].innerHTML = wonRounds;
  result = "";
  result1 = "";
  document.getElementById("text1").innerHTML = result1;
  document.getElementById("text").innerHTML = result;
}

function Computer() {
  var array = ["paper", "scissors", "rock"];
  var randomItem = array[Math.floor(Math.random() * array.length)];
  return randomItem;
}

function game(player) {
  var comp = Computer();

  if (player === comp) {
    result = "It's a draw!";
  } else if (comp === "paper") {
    if (player === "scissors") {
      result = "Victory!";
      if (result === "Victory!") {
        victory();
      }
    }
    if (player === "rock") {
      result = "Defeat!";
      defeat();
    }
  } else if (comp === "scissors") {
    if (player === "rock") {
      result = "Victory!";
      victory();
    }
    if (player === "paper") {
      result = "Defeat!";
      defeat();
    }
  } else if (comp === "rock") {
    if (player === "paper") {
      result = "Victory!";
      victory();
    }
    if (player === "scissors") {
      result = "Defeat!";
      defeat();
    }
  }
  if (result === "Victory!") {
    result1 = `Computer has chosen ${comp}, ${player} wins over ${comp}!`;
  }
  if (result === "Defeat!") {
    result1 = `Computer has chosen ${comp}, ${comp} wins over ${player}!`;
  }
  if (result === "It's a draw!") {
    result1 = `Computer has chosen ${comp}`;
  }
  document.getElementById("text1").innerHTML = result1;
  document.getElementById("text").innerHTML = result;
}

function main() {
  rock_div.addEventListener("click", function () {
    game("rock");
  });
  paper_div.addEventListener("click", function () {
    game("paper");
  });
  scissors_div.addEventListener("click", function () {
    game("scissors");
  });
}
main();
