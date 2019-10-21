<<<<<<< HEAD
let result;
let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

function reset_w() {
  var r = confirm('Game over! You won! Try again?');
  if (r == true) {
    location.reload();
  } else {
    window.close();
  }
}

function reset_l() {
  var r = confirm('Game over! You lost! Try again?');
  if (r == true) {
    location.reload();
  } else {
    window.close();
  }
}

function victory() {
  if (result === 'Victory!') {
    userScore++;
    userScore_span.innerHTML = userScore;
  }
  if (userScore === 5) {
    reset_w();
  }
}

function defeat() {
  if (result === 'Defeat!') {
    compScore++;
    compScore_span.innerHTML = compScore;
  }
  if (compScore === 5) {
    reset_l();
  }
}

function Computer() {
  var array = ['paper', 'scissors', 'rock'];
  var randomItem = array[Math.floor(Math.random() * array.length)];
  return randomItem;
}

function game(player) {
  var comp = Computer();
  if (player === comp) {
    result = 'Draw!';
  } else if (comp === 'paper') {
    if (player === 'scissors') {
      result = 'Victory!';
      if (result === 'Victory!') {
        victory();
      }
    }
    if (player === 'rock') {
      result = 'Defeat!';
      defeat();
    }
  } else if (comp === 'scissors') {
    if (player === 'rock') {
      result = 'Victory!';
      victory();
    }
    if (player === 'paper') {
      result = 'Defeat!';
      defeat();
    }
  } else if (comp === 'rock') {
    if (player === 'paper') {
      result = 'Victory!';
      victory();
    }
    if (player === 'scissors') {
      result = 'Defeat!';
      defeat();
    }
  }

  document.getElementById('text').innerHTML = result;
}

function main() {
  rock_div.addEventListener('click', function() {
    game('rock');
  });
  paper_div.addEventListener('click', function() {
    game('paper');
  });
  scissors_div.addEventListener('click', function() {
    game('scissors');
  });
}
main();
=======
let result;
let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function reset_w() {
    var r = confirm("Game over! You won! Try again?");
    if (r == true) {
        location.reload();
    } else {
        window.close();
    }
}

function reset_l() {
    var r = confirm("Game over! You lost! Try again?");
    if (r == true) {
        location.reload();
    } else {
        window.close();
    }
}



function victory() {
    if (result === "Victory!") {
        userScore++;
        userScore_span.innerHTML = userScore;
    }
    if (userScore === 5) {
        reset_w();
    }

}

function defeat() {
    if (result === "Defeat!") {
        compScore++;
        compScore_span.innerHTML = compScore;
    }
    if (compScore === 5) {
        reset_l();
    }

}

function Computer() {
    var array = [
        "paper",
        "scissors",
        "rock"
    ];
    var randomItem = array[Math.floor(Math.random() * array.length)];
    return randomItem;
}


function game(player) {
    var comp = Computer();
    if (player === comp) {
        result = "Draw!"
    } else if (comp === "paper") {
        if (player === "scissors") {
            result = "Victory!";
            if (result === "Victory!") {
                victory();
            }

        }
        if (player === "rock") {
            result = "Defeat!"
            defeat();
        }
    } else if (comp === "scissors") {
        if (player === "rock") {
            result = "Victory!";
            victory();
        }
        if (player === "paper") {
            result = "Defeat!"
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

    document.getElementById("text").innerHTML = result;

}

function main() {
    rock_div.addEventListener('click', function () {
        game('rock');
    });
    paper_div.addEventListener('click', function () {
        game('paper');
    });
    scissors_div.addEventListener('click', function () {
        game('scissors');
    });
}
main();
>>>>>>> d36d5d41447ea046465df4ae126d8156f201c5ab
