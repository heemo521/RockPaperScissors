//Play image of rock paper scissors and the user needs to click a button within time
//or loses automatically

const data = {
    1: 'Rock',
    2: 'Paper',
    3: 'Scissors',
};

const score = [0, 0];

const container = document.querySelector('.container');

function computerPlay() {
    const computer = Math.round(Math.random() * (3 - 1) + 1);

    return data[computer];
}

function playRound(playerSelection, computerSelection) {
    const playerSelect = String(playerSelection).toLowerCase();
    const computerSelect = computerSelection.toLowerCase();

    const btnIconP = `<i class="far fa-hand-${playerSelect}"></i>`;
    const btnIconC = `<i class="far fa-hand-${computerSelect}"></i>`;

    const winnerMsg = `You Win!+${btnIconP} beats ${btnIconC}!`;
    const loserMsg = `You Lose!+${btnIconC} beats ${btnIconP}!`;
    const tieMsg = `It's a Tie!!+${btnIconP} = ${btnIconC}!`;

    let playerWins = false;

    if (playerSelect === computerSelect) {
        return tieMsg;
    }

    if (playerSelect === 'rock') {
        if (computerSelect === 'scissors') {
            playerWins = true;
        }
    } else if (playerSelect === 'paper') {
        if (computerSelect === 'rock') {
            playerWins = true;
        }
    } else if (playerSelect === 'scissors') {
        if (computerSelect === 'paper') {
            playerWins = true;
        }
    }
    // else {
    //     return `UserInput: ${playerSelect}. This is not a valid input. Please try again.`;
    // }

    const scoreKeeper = playerWins ? 0 : 1;
    score[scoreKeeper] += 1;

    return playerWins ? winnerMsg : loserMsg;
}

// const scoreDiv = document.querySelector('.score');
// const scoreBoard = document.querySelector('.score-board');

function game(playerSelect) {
    // scoreDiv.textContent = `[ 0 : 0 ]`;

    // for (let i = 0; i < 5; i++) {
    //     const playerSelection = prompt(`Type in rock, paper, or scissors. Or take a chance!`);
    //     const computerSelection = computerPlay();

    // console.log(playRound(playerSelection, computerSelection));
    // console.log(`Score {Player: ${score[0]} Computer: ${score[1]}}`);
    //     // scoreDiv.textContent = `[ ${score[0]} : ${score[1]} ]`;
    // }

    const playerSelection = playerSelect;
    const computerSelection = computerPlay();

    const message = playRound(playerSelection, computerSelection).split('+');

    document.querySelector('.message0').innerHTML = message[0];
    document.querySelector('.message1').innerHTML = message[1];

    // ${message}
    if (score[0] === 5 || score[1] === 5) {
        stopGame();
    }
    // if (score[0] > score[1]) {
    //     console.log(`Player Wins the Game!!!`);
    // } else if (score[0] < score[1]) {
    //     console.log(`Player Loses the Game! Try again!`);
    // } else if (score[0] === score[1]) {
    //     console.log(`TIE!!! Tough Game! Try again!`);
    // }
    // console.log(`Score {Player: ${score[0]} Computer: ${score[1]}}`);
}

const stopGame = function () {};

const reset = function () {};

//Button
const playBtn = document.querySelector('.btn-play');
const buttonsDiv = document.querySelector('.buttons');

//Game Buttons
const createButtons = function (name) {
    const btn = document.createElement('button');
    btn.classList.add(`btn`);
    btn.classList.add(`btn-${name}`);
    btn.classList.add(`btn-game`);
    btn.dataset.name = name;
    const btnIcon = document.createElement('i');
    btnIcon.classList.add(`far`);
    btnIcon.classList.add(`fa-hand-${name}`);

    btn.appendChild(btnIcon);

    return btn;
};

const appendChildren = (parent, children) => {
    children.forEach((child) => parent.appendChild(child));
};

const buttonClicked = function (e) {
    e.stopPropagation();
    const scoreDisplay = document.querySelector('.scores');
    // console.log(this.dataset.name);
    game(this.dataset.name);
    scoreDisplay.textContent = `*Player: ${score[0]} Computer: ${score[1]}*`;
};

const playDisplay = function () {
    const choices = ['rock', 'paper', 'scissors'];
    const gameBtns = choices.map((choice) => createButtons(choice));

    buttonsDiv.removeChild(playBtn);
    appendChildren(buttonsDiv, gameBtns);

    scoreBoard(score);

    gameBtns.forEach((gameBtn) => {
        gameBtn.addEventListener('click', buttonClicked, { capture: true });
    });
};

const scoreBoard = function (score) {
    //    console.log(`Score {Player: ${score[0]} Computer: ${score[1]}}`);
    const scoreBoardHTML = `
        <div class='score-board'>
            <h2>Score Board</h2>
            <p class=scores>*Player: ${score[0]} Computer: ${score[1]}*</p>
        </div>`;
    const title = document.querySelector('.title');

    if (title) container.removeChild(title);

    const winOrLoseHTML = `
    <h2 class='message0'></h2>
    <h3 class='message1'></h3>
    `;

    container.insertAdjacentHTML('afterbegin', scoreBoardHTML);
    container.insertAdjacentHTML('afterbegin', winOrLoseHTML);
};

playBtn.addEventListener('click', playDisplay);

// Add a div for displaying results and change all of your console.logs into DOM methods.
// Display scoreboard
// UI for score board
// Move the Title to the top
// Display the running score, and announce a winner of the game once one player reaches 5 points.
// Refactoring

// Commit to the new branch
//Merging to main
//Check with git log
//Push main - git push origin main .
//Verify on gitHub
//  Delete the branch from our local repo with git branch -d rps-ui and also delete it from the remote repo on Github with git push --delete origin rps-ui. Congrats, we’re all done with our cleanup!
// Publish the project on GitHub Pages and add a live preview link in the project lesson.
