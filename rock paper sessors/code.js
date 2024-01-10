const choices = ["rock", "paper", "scissors"];
const imgChoices = ['✊', '✋', '✌️', '👊'];
const possibleResults = ["Computer Won :(", "You Won!", "It's a Tie"];
const computerScore = document.getElementById("computerScore");
const userScore = document.getElementById("userScore");


function play(userMove) {
    document.getElementById("computerHand").classList.add("rotate");
    document.getElementById("userHand").classList.add("rotate");
    const computerMoveIndex = Math.floor(Math.random() * 3);
    var userMoveIndex;
    const computerMove = choices[computerMoveIndex];

    var result = "";


    switch (userMove) {
        case 'scissors':
            document.getElementById("rock").disabled = true;
            document.getElementById("paper").disabled = true;
            userMoveIndex = 2;
            break;
        case 'rock':
            document.getElementById("scissors").disabled = true;
            document.getElementById("paper").disabled = true;
            userMoveIndex = 0;
            break;
        case 'paper':
            document.getElementById("rock").disabled = true;
            document.getElementById("scissors").disabled = true;
            userMoveIndex = 1;
            break;
    }

    if (computerMove == userMove) {
        result = possibleResults[2];

    }
    else {
        switch (userMove) {
            case 'scissors':
                result = (computerMove === choices[0]) ? possibleResults[0] : possibleResults[1];
                break;

            case 'rock':
                result = (computerMove === choices[1]) ? possibleResults[0] : possibleResults[1];
                break;

            case 'paper':
                result = (computerMove === choices[2]) ? possibleResults[0] : possibleResults[1];
                break;
        }
    }




    setTimeout(() => {
        document.getElementById("computerHand").classList.remove("rotate");
        document.getElementById("userHand").classList.remove("rotate");
        document.getElementById("result").innerText = result;

        var win = document.getElementById("win");
        var lose = document.getElementById("lose");
        var tie = document.getElementById("tie");

        if (result == possibleResults[1]) {
            document.body.style.backgroundColor = "rgb(163, 255, 149)";
            win.play();
   

        } else if (result == possibleResults[0]) {
            document.body.style.backgroundColor = "rgb(91, 62, 255)";
            lose.play();
        }
        else {
            document.body.style.backgroundColor = "rgb(255, 253, 240)";
tie.play();
        }

        document.getElementById("computerHand").innerText = imgChoices[computerMoveIndex];
        document.getElementById("userHand").innerText = imgChoices[userMoveIndex];
        switch (result) {
            case possibleResults[0]:
                computerScore.innerText = parseInt(computerScore.innerText) + 1;
                break;
            case possibleResults[1]:
                userScore.innerText = parseInt(userScore.innerText) + 1;
                break;
            default:
                break;
        }
        // win.pause();
        // lose.pause();
        // tie.pause();
        document.getElementById("rock").disabled = false;
        document.getElementById("paper").disabled = false;
        document.getElementById("scissors").disabled = false;
        

    }, 3000);
    document.getElementById("computerHand").innerText = imgChoices[3];
    document.getElementById("userHand").innerText = imgChoices[3];
    document.getElementById("result").innerText = "";



}