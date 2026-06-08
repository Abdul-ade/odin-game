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

function playRound(humanChoice, computerChoice){
    if (humanChoice === "Rock" && computerChoice === "Rock") {
        console.log(`You draw`);
    } else if (humanChoice === "Rock" && computerChoice === "Paper") {
        console.log(`You lose, ${computerChoice} beats ${humanChoice}`);
        compScore++;
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log(`You win, ${humanChoice} beats ${computerChoice}`);
        humScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log(`You win, ${humanChoice} beats ${computerChoice}`);
        humScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Paper") {
        console.log(`You draw`);
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        console.log(`You lose, ${computerChoice} beats ${humanChoice}`);
        compScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        console.log(`You lose, ${computerChoice} beats ${humanChoice}`);
        compScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log(`You win, ${humanChoice} beats ${computerChoice}`);
        humScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Scissors") {
        console.log("You draw");
    }else {
        alert("Enter a valid input");
    }
}

//  FOURTH STEP: PLAY/ITERATE MULTIPLE TIMES
function playGame(){
    getComputerChoice();
    getHumanChoice();
    playRound(humChoice, compChoice);
    console.log("Your score: " + humScore);
    console.log("Computer score: " + compScore);
}

for(let i = 0; i < 5; i++){
    playGame();
}