//Variables & Functions for the Random Number Generator, user input, and checking correctness
let ranNum = Math.floor(Math.random()*10)+1;
let numInput = document.getElementById("guess");
let correctOrNot = document.getElementById("tOrF");
let submitNum = document.getElementById("submit")

function guessCheck(){
    //converts value of numInput to a number
    let userGuess = parseInt(numInput.value)

    //checks the 
    if (userGuess > ranNum){
        correctOrNot.innerText = "Wrong number! Try a smaller number."
        correctOrNot.style.color = ("#ff3d3d")
    } else if(userGuess < ranNum){
        correctOrNot.innerText = "Wrong number! Try a larger number.";
        correctOrNot.style.color = ("#ff3d3d")
    } else if(userGuess === ranNum){
        correctOrNot.innerText = "You got it!";
        correctOrNot.style.color = ("#57d457")
    } else{
        correctOrNot.innerText = "Please input a valid number"
        correctOrNot.style.color = ("#ff3d3d")
    }
}

submitNum.addEventListener("click", guessCheck)