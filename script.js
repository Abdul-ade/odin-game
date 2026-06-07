document.querySelector("p").textContent;
let compChoice = "";
function getComputerChoice() {
    let num = Math.ceil(Number(Math.random()*3));
    if (num === 1) {
        compChoice = "Rock"; 
    } else if (num === 2) {
        compChoice = "Paper";
    }else{
        compChoice = "scissors";
    }
        console.log(compChoice);
}
getComputerChoice();

let humChoice = "";
function getHumanChoice() {
    // console.log(prompt("Enter a valid input: "));
}
getHumanChoice();

let humScore = 0;
let compScore = 0;

function playRound(humanChoice, computerChoice){
    humanChoice = humChoice;
    computerChoice = compChoice;
    if (humanChoice === "Rock" && computerChoice === "Rock") {
        consolole.log(`You draw`);
    } else if (humanChoice === "Rock" && computerChoice === "Paper") {
        console.log(`You lose, ${computerChoice} beats ${humanChoice}`);
        compScore++;
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log(`You win, ${humanChoice} beats ${computerChoice}`);
        humScore++;
    } else if (humanChoice === "paper" && computerChoice === "Rock") {
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
    }
}

function playGame () {

}