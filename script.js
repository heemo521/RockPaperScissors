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
    const playerSelection = playerSelect;
    const computerSelection = computerPlay();

    const message = playRound(playerSelection, computerSelection).split('+');

    document.querySelector('.message0').innerHTML = message[0];
    document.querySelector('.message1').innerHTML = message[1];

    if (score[0] === 5 || score[1] === 5) {
        stopGame();
    }
}

const stopGame = function () {
    let finalMessage = '';
    if (score[0] > score[1]) {
        finalMessage = `Player Wins the Game!!!`;
    } else if (score[0] < score[1]) {
        finalMessage = `Player Loses the Game!`;
    } else if (score[0] === score[1]) {
        finalMessage = `TIE!!! Tough Game!`;
    }
    console.log(`Score {Player: ${score[0]} Computer: ${score[1]}}`);
    document.querySelector('.message0').textContent = finalMessage;
    removeButtons();
    tryAgainBtn();
};

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

const removeButtons = function () {
    const btns = document.querySelectorAll('.btn-game');
    btns.forEach((btn) => buttonsDiv.removeChild(btn));

    // buttonsDiv.
};

const tryAgainBtn = function () {
    const tryBtnHTML = `<button class='btn again'>Try Again!</button>`;
    buttonsDiv.insertAdjacentHTML('afterbegin', tryBtnHTML);
    const resetBtn = document.querySelector('.again');

    resetBtn.addEventListener('click', reset);
};

const appendChildren = (parent, children) => {
    children.forEach((child) => parent.appendChild(child));
};

const buttonClicked = function (e) {
    if (!e) return;

    e.stopPropagation();
    const scoreDisplay = document.querySelector('.scores');
    // console.log(this.dataset.name);
    game(this.dataset.name);
    scoreDisplay.textContent = `*Player: ${score[0]} Computer: ${score[1]}*`;
};

const playDisplay = function () {
    const choices = ['rock', 'paper', 'scissors'];
    const gameBtns = choices.map((choice) => createButtons(choice));

    playBtn.classList.add('hide');
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

    const scoreBoard = document.querySelector('.score-board');
    const message0 = document.querySelector('.message0');
    const message1 = document.querySelector('.message1');
    if (scoreBoard) {
        container.removeChild(scoreBoard);
        container.removeChild(message0);
        container.removeChild(message1);
    }

    container.insertAdjacentHTML('afterbegin', scoreBoardHTML);
    container.insertAdjacentHTML('afterbegin', winOrLoseHTML);
};

const reset = function () {
    score[0] = 0;
    score[1] = 0;
    // container.removeChild(document.querySelector('.message0'));
    // container.removeChild(document.querySelector('.message1'));
    const resetBtn = document.querySelector('.again');
    resetBtn.classList.toggle('hide');
    playDisplay();
    buttonClicked();
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
