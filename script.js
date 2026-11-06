// FIRST STEP: GET COMPUTER CHOICE
let compChoice = "";
function getComputerChoice() {
    let num = Math.ceil(Number(Math.random()*3));
    if (num === 1) {
        compChoice = "Rock"; 
    } else if (num === 2) {
        compChoice = "Paper";
    }else{
        compChoice = "Scissors";
    }
}

// SECOND STEP: GET HUMAN CHOICE
let humChoice = "";
function getHumanChoice() {
    humChoice = prompt("Rock, Paper or Scissors: ");
}

// THIRD STEP: ADD GAME LOGIC
let humScore = 0;
let compScore = 0;

function comment(comment){
    document.getElementById("comment").textContent = comment;
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === "Rock" && computerChoice === "Rock") {
        comment("draw");
    } else if (humanChoice === "Rock" && computerChoice === "Paper") {
        comment(`${computerChoice} beats ${humanChoice}`);
        compScore++;
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        comment(`${humanChoice} beats ${computerChoice}`);
        humScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        comment(`${humanChoice} beats ${computerChoice}`);
        humScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Paper") {
        comment(`draw`);
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        comment(`${computerChoice} beats ${humanChoice}`);
        compScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        comment(`${computerChoice} beats ${humanChoice}`);
        compScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        comment(`${humanChoice} beats ${computerChoice}`);
        humScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Scissors") {
        comment("draw");
    }else {
        alert("Enter a valid input");
    }
}

//  FOURTH STEP: PLAY/ITERATE MULTIPLE TIMES
// function playGame(){
//     getComputerChoice();
//     getHumanChoice();
//     playRound(humChoice, compChoice);
   
// }

// for(let i = 0; i < 5; i++){
//     playGame();
// }
// console.log("Your score: " + humScore);
// console.log("Computer score: " + compScore);

;
let displayComputerScore = document.getElementById("computer-score");

function displayScore(Human, Computer){
    document.getElementById("human-score").textContent = Human;
    document.getElementById("computer-score").textContent = Computer;
}
function resetGame() {
    humScore = 0;
    compScore = 0;
    displayScore(humScore, compScore);
}
function displayWinner() {
    if (humScore === 5) {
        alert("Congratulations! You won the game!");
    } else if (compScore === 5) {
        alert("Sorry! The computer won the game!");
    }
}
document.getElementById("rock").addEventListener("click", function() {
    humChoice = "Rock";
    getComputerChoice();
    playRound(humChoice, compChoice);
    displayScore(humScore, compScore);
    displayWinner();
});
document.getElementById("paper").addEventListener("click", function() {
    humChoice = "Paper";
    getComputerChoice();
    playRound(humChoice, compChoice);
    displayScore(humScore, compScore);
    displayWinner();
});
document.getElementById("scissors").addEventListener("click", function() {
    humChoice = "Scissors";
    getComputerChoice();
    playRound(humChoice, compChoice);
    displayScore(humScore, compScore);
    displayWinner();
});

document.getElementById("reset").addEventListener("click", () => {
    resetGame();
});
