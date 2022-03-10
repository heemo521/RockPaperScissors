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
    const playerSelect = String(playerSelection).toUpperCase();
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

    console.log(playRound(playerSelection, computerSelection));
    console.log(`Score {Player: ${score[0]} Computer: ${score[1]}}`);

    // if (score[0] > score[1]) {
    //     console.log(`Player Wins the Game!!!`);
    // } else if (score[0] < score[1]) {
    //     console.log(`Player Loses the Game! Try again!`);
    // } else if (score[0] === score[1]) {
    //     console.log(`TIE!!! Tough Game! Try again!`);
    // }
    // console.log(`Score {Player: ${score[0]} Computer: ${score[1]}}`);
}

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

    //Styling here!!!!

    btn.appendChild(btnIcon);

    return btn;
};

const appendChildren = (parent, children) => {
    children.forEach((child) => parent.appendChild(child));
};

const playDisplay = function () {
    const choices = ['rock', 'paper', 'scissors'];
    const gameBtns = choices.map((choice) => createButtons(choice));

    buttonsDiv.removeChild(playBtn);
    appendChildren(buttonsDiv, gameBtns);

    // const activateBtns = document.querySelectorAll('btn-game');
    // console.log(activateBtns);
    gameBtns.forEach((gameBtn) => {
        gameBtn.addEventListener(
            'click',
            function (e) {
                e.stopPropagation();
                console.log(this.dataset.name);
                game(this.dataset.name);
            },
            { capture: true }
        );
    });
};

playBtn.addEventListener('click', playDisplay);

// In our UI, the player should be able to play the game by clicking on buttons rather than typing their answer in a prompt.

// Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
// Add a div for displaying results and change all of your console.logs into DOM methods.
// Display the running score, and announce a winner of the game once one player reaches 5 points.
// You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life.
// Once you’re all done with your UI and made sure everything’s satisfactory, commit your changes to the rps-ui branch.
// Now let’s take a look at how we can merge the changes from our rps-ui branch back to our main branch.
// Checkout the branch we want to merge INTO i.e. main with the command git checkout main.
// Now let’s merge our rps-ui branch into main, our current branch, with git merge rps-ui.
// If everything goes fine, our rps-ui branch is now successfully merged with main! Use git log and you’ll see all the commits you’ve made to your feature branch on top of the commits you made to the main branch. Now for our final step!
// Let’s push our main branch into our remote repo by running git push origin main . Go to your Github repo and you’ll see that our main branch will have all the changes and commits you made to the rps-ui branch. Congratulations! You’ve successfully pushed your first feature into your production branch!
// Now that we have all our code in the main branch, we don’t really need our rps-ui branch anymore. Let’s do some cleanup, both locally and in the remote repo. Delete the branch from our local repo with git branch -d rps-ui and also delete it from the remote repo on Github with git push --delete origin rps-ui. Congrats, we’re all done with our cleanup!
// Make sure to publish the project on GitHub Pages and add a live preview link in the project lesson.
