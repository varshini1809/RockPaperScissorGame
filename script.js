'use strict'

//object for count on score..
/*  const score = {
      win: 0,
      loss: 0,
      tie: 0
  };
*/


let score = JSON.parse(localStorage.getItem('score')) ||
{
    win: 0,
    loss: 0,
    tie: 0
};

updateScore();

/*convert this from string back to an object 
            to get appared in the screen and not on console-screen
                : use JSON.parse()
 */


/* if (!score) {
     score = {
         win: 0,
         loss: 0,
         tie: 0
     };
 }
 */


function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'its a tie.';
        }
        else if (computerMove === 'paper') {
            result = 'you win.';
        }
        else if (computerMove === 'scissors') {
            result = 'you lose.';
        }

    }

    else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'you win.';
        }
        else if (computerMove === 'paper') {
            result = 'its a tie.';
        }
        else if (computerMove === 'scissors') {
            result = 'you lose.';
        }
    }

    else if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'you lose.';
        }
        else if (computerMove === 'paper') {
            result = 'you win.';
        }
        else if (computerMove === 'scissors') {
            result = 'its a tie.';
        }
    }

    if (result === 'you lose.')
        score.loss += 1;
    else if (result === 'you win.')
        score.win += 1;
    else if (result === 'its a tie.')
        score.tie += 1;


    // save it in localStorage
    localStorage.setItem('score', JSON.stringify(score));
    // firstly convert the object to json cause localStorage needs to be in the format of Strings

    updateScore();
    document.querySelector('.js-result').innerHTML = `${result}`;
    document.querySelector('.js-moves').innerHTML = `You ->
                      <img src="images/${playerMove}-emoji.png" class="move-icon">
                      <img src="images/${computerMove}-emoji.png" class="move-icon">
                      <- Computer`;

}


function updateScore() {
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.win}, Losses: ${score.loss}, Ties: ${score.tie}`;
}

function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    }
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    }
    else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
    }

    return computerMove;
}
