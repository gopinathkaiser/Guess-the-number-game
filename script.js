let correctNumber = getRandomNumber();
console.log(correctNumber);

window.onload = function () {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);
};

function playGame(){
    let numberGuess = document.getElementById("number-guess").value;
    console.log(numberGuess);
}

function getRandomNumber(){
    let randomNumber = Math.random();
    let wholeNumber = Math.floor(randomNumber * 100) + 1;
    return wholeNumber;
}