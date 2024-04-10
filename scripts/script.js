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
    showElementById('play-ground');
    continueGame();
}