let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.getElementById("user-score");
const compScorePara = document.getElementById("comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3); 
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game Draw! Play again";
  msg.style.backgroundColor = "rgb(5, 5, 43)";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
     userScore++;
     userScorePara.innerText = userScore;
      msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
      msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
      msg.innerText = `You lost!. ${compChoice} beats your ${userChoice}`;
      msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();
  console.log("Computer choice: ", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.querySelector("img").getAttribute("alt");
    console.log("Choice was clicked: ", userChoice);
    playGame(userChoice);
  });
});