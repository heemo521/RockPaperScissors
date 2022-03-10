const data = {
    1: 'Rock',
    2: 'Paper',
    3: 'Scissors',
};

const score = [0, 0];

function computerPlay() {
    const computer = Math.round(Math.random() * (3 - 1) + 1);

    return data[computer];
}

function playRound(playerSelection, computerSelection) {
    const playerSelect = playerSelection.toUpperCase();
    const computerSelect = computerSelection.toUpperCase();

    const winnerMsg = `You Win! ${playerSelect} beats ${computerSelect}!`;
    const loserMsg = `You Lose! ${computerSelect} beats ${playerSelect}!`;
    const tieMsg = `It's a Tie!! ${playerSelect} = ${computerSelect}!`;

    let playerWins = false;

    if (playerSelect === computerSelect) {
        return tieMsg;
    }

    if (playerSelect === 'ROCK') {
        if (computerSelect === 'SCISSORS') {
            playerWins = true;
        }
    } else if (playerSelect === 'PAPER') {
        if (computerSelect === 'ROCK') {
            playerWins = true;
        }
    } else if (playerSelect === 'SCISSORS') {
        if (computerSelect === 'PAPER') {
            playerWins = true;
        }
    } else {
        return `UserInput: ${playerSelect}. This is not a valid input. Please try again.`;
    }

    const scoreKeeper = playerWins ? 0 : 1;
    score[scoreKeeper] += 1;

    return playerWins ? winnerMsg : loserMsg;
}

// const scoreDiv = document.querySelector('.score');
// const scoreBoard = document.querySelector('.score-board');

function game() {
    // scoreDiv.textContent = `[ 0 : 0 ]`;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt(`Type in rock, paper, or scissors. Or take a chance!`);
        const computerSelection = computerPlay();

        console.log(playRound(playerSelection, computerSelection));
        console.log(`Score {Player: ${score[0]} Computer: ${score[1]}}`);
        // scoreDiv.textContent = `[ ${score[0]} : ${score[1]} ]`;
    }

    if (score[0] > score[1]) {
        console.log(`Player Wins the Game!!!`);
    } else if (score[0] < score[1]) {
        console.log(`Player Loses the Game! Try again!`);
    } else if (score[0] === score[1]) {
        console.log(`TIE!!! Tough Game! Try again!`);
    }
    console.log(`Score {Player: ${score[0]} Computer: ${score[1]}}`);
}

const playBtn = document.querySelector('button');
playBtn.addEventListener('click', game);
