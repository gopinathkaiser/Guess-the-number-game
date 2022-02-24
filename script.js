let guesses=[];
let correctNumber = getRandomNumber();

//loading script 
window.onload = function () {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);
};

//starting the game
function playGame(){
    let numberGuess = document.getElementById("number-guess").value;
    displayHistory();
    displayResult(numberGuess);
    saveGuessHistory(numberGuess);
    displayHistory();
}

//logic for displaying result
function displayResult(numberGuess){
    if(numberGuess > correctNumber){
        showNumberAbove();
    }else if(numberGuess < correctNumber){
        showNumberBelow();
    }else{
        showYouWon();
    }
}

//To restart the game
function initGame(){
    correctNumber = getRandomNumber();
    guesses=[];
    resetResultContent();
    displayHistory();

}

//clearing history
function resetResultContent() {
    document.getElementById("result").innerHTML = "";
  }

//generating random number 
function getRandomNumber(){
    let randomNumber = Math.random();
    let wholeNumber = Math.floor(randomNumber * 100) + 1;
    return wholeNumber;
}

//saving history using guesses array
function saveGuessHistory(guess){
    guesses.push(guess);
    console.log(guesses);
}

//displaying history
function displayHistory() {
    let index= guesses.length-1;
    let list = "<ul class='list-group'>";
   
     while(index>=0) {
      list +=
        "<li class='list-group-item'> You guessed  " + guesses[index] + "</li>";
        index-=1;
    }
    list += "</ul>";
    document.getElementById("history").innerHTML = list;
  }


function getDialog(dialogType, text) {
  let dialog;
  switch (dialogType) {
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>";
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>";
      break;
  }
  dialog += text;
  dialog += "</div>";
  return dialog;
}

//showing won message
function showYouWon() {
    const text = "Awesome job, you got it!";
  
    let dialog = getDialog("won", text);
    console.log(dialog);
    document.getElementById("result").innerHTML = dialog;
  }
  
//showing entered number is high
function showNumberAbove() {
    const text = "Your guess is too high!";
    
    let dialog = getDialog("warning", text);
    document.getElementById("result").innerHTML = dialog;
  }
  
//showing entered number is low
function showNumberBelow() {
    const text = "Your guess is too low!";
   
    let dialog = getDialog("warning", text);
    document.getElementById("result").innerHTML = dialog;
  }