let userScore = 0;
let aiScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user_score");
const aiScorePara = document.querySelector("#AI_score");

const genAIChoice = () =>
{
    const options = ["rock","paper","scissors"];
    let randIdx = Math.floor(Math.random()*3);   //math.random gives random number btw 0 to 1 multiplying 3 gives number btw 0 to 2
    return options[randIdx]; 
};

const drawGame = () =>{
    msg.innerText = "Game is Draw. Play Again";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin,userChoice,aiChoice,) =>{
    if(userWin)
    {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${aiChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        aiScore++;
        aiScorePara.innerText = aiScore;
        msg.innerText = `You Lose! ${aiChoice} beats your ${userChoice}`; // keep an eye on quotation if printing value
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) =>{

    const aiChoice = genAIChoice();

    if(userChoice === aiChoice)
    {
        drawGame();
    }
    else{
        userWin = true;
        if(userChoice === "rock")
        {
            userWin = aiChoice === "paper" ? false:true;
        }
        else if (userChoice === "paper") {
            //rock, scissors
            userWin = aiChoice === "scissors" ? false : true;
          } else {
            //rock, paper
            userWin = aiChoice === "rock" ? false : true;
          }
          showWinner(userWin, userChoice, aiChoice);
        }
    };

    choices.forEach((choice) => {
        choice.addEventListener("click", () => {
          const userChoice = choice.getAttribute("id");
          playGame(userChoice);
        });
    });
