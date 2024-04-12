// function play() {
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     const playSection = document.getElementById('play-ground');
//     playSection.classList.remove('hidden');
// }



function continueGame() {
    const alphabet = getARandomAlphabet();
    // console.log('Your random alphabet is:', alphabet);

    // set randomly generated alphabet in screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color of key
    setBackgroundColorById(alphabet);
}


function play() {
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);


    continueGame();
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');

    const gameScore = getTextElementValueById('current-score');
    setTextElementValueById('game-score', gameScore);

    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}

// handle key press
function handleKeyBoardBtnPress(event) {
    const playerPressed = event.key;
    // console.log('Player pressed: ', playerPressed);
    if (playerPressed === 'Escape') {
        gameOver();
    }

    // get expected key press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText.toLowerCase();

    console.log(playerPressed, currentAlphabet);

    // check matched or not
    if (playerPressed === currentAlphabet) {
        // update score
        // 1.get the current score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);

        // 2.Increase the score by 
        const newScore = currentScore + 1;

        // 3.Display the score;
        currentScoreElement.innerText = newScore;

        removeBackgroundColorById(currentAlphabet);
        continueGame();
    }
    else {

        // 1.get the current life 
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);
        // 2.decrease the life count by 1
        const newLife = currentLife - 1;
        // 3. display the updated life count
        currentLifeElement.innerText = newLife;


        if (newLife === 0) {
            gameOver();
        }
    }
}

// capture keyboard keypress
document.addEventListener('keyup', handleKeyBoardBtnPress);
