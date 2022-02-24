let correctNumber = getRandomNumber();


window.onload = function () {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);
};

function playGame(){
    let numberGuess = document.getElementById("number-guess").value;
    
    displayResult(numberGuess);
}

function displayResult(numberGuess){
    if(numberGuess > correctNumber){
        showNumberAbove();
    }else if(numberGuess < correctNumber){
        showNumberBelow();
    }else{
        showYouWon();
    }
}

function getRandomNumber(){
    let randomNumber = Math.random();
    let wholeNumber = Math.floor(randomNumber * 100) + 1;
    return wholeNumber;
}

function initGame(){

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

function showYouWon() {
    const text = "Awesome job, you got it!";
  
    let dialog = getDialog("won", text);
    console.log(dialog);
    document.getElementById("result").innerHTML = dialog;
  }
  
function showNumberAbove() {
    const text = "Your guess is too high!";
    
    let dialog = getDialog("warning", text);
    document.getElementById("result").innerHTML = dialog;
  }
  
function showNumberBelow() {
    const text = "Your guess is too low!";
   
    let dialog = getDialog("warning", text);
    document.getElementById("result").innerHTML = dialog;
  }