let correctNumber = getRandomNumber();


window.onload = function () {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);
};

function playGame(){
    let numberGuess = document.getElementById("number-guess").value;
    console.log(correctNumber);
    if(numberGuess > correctNumber){
        console.log("guess too high");
    }else if(numberGuess < correctNumber){
        console.log("guess too low");
    }else{
        console.log("guess is correct");
    }
}

function getRandomNumber(){
    let randomNumber = Math.random();
    let wholeNumber = Math.floor(randomNumber * 100) + 1;
    return wholeNumber;
}

function initGame(){

}