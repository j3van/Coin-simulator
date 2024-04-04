// COIN FLIP SIMULATOR

// HTML Variables
let outputEl = document.getElementById("output");
let headsEl = document.getElementById("heads-out");
let tailsl = document.getElementById("tails-out");

//Count Variables
let numHeads = 0;
let numTails = 0;

//Button Event Listner
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Generate a Random number
  let randNum = Math.random();
  console.log(randNum);

  //Simulate the coin flip
  if (randNum < 0.5) {
    outputEl.innerHTML = "<img src='img/heads.png'>";
    numHeads = numHeads + 1;
    headsEl.innerHTML = numHeads;
  } else {
    outputEl.innerHTML = "<img src='img/tails.png'>";
    numTails = numTails + 1;
    tailsl.innerHTML = numTails;
  }
}

// Dice

// HTML Variables 2
let output2El = document.getElementById("output2");
let oneOutEl = document.getElementById("one-out");
let twoOutEl = document.getElementById("two-out");
let threeOutEl = document.getElementById("three-out");
let fourOutEl = document.getElementById("four-out");
let fiveOutEl = document.getElementById("five-out");
let sixOutEl = document.getElementById("six-out");
let numOne = 0;
let numTwo = 0;
let numThree = 0;
let numFour = 0;
let numFive = 0;
let numSix = 0;

//Button Event Lisener
document.getElementById("dicebtn").addEventListener("click", diceRollClicked);

function diceRollClicked() {
  //Generate a random number
  let randNum2 = Math.random();
  console.log(randNum2);

  // Simulate dice roll
  if (randNum2 < 0.16666666666) {
    output2El.innerHTML = "<img src='img/1.png'>";
    numOne = numOne + 1;
    oneOutEl.innerHTML = numOne;
  } else if (randNum2 < 0.33333333333) {
    output2El.innerHTML = "<img src='img/2.png'>";
    numTwo = numTwo + 1;
    twoOutEl.innerHTML = numTwo;
  } else if (randNum2 < 0.5) {
    output2El.innerHTML = "<img src='img/3.png'>";
    numThree = numThree + 1;
    threeOutEl.innerHTML = numThree;
  } else if (randNum2 < 0.66666666666) {
    output2El.innerHTML = "<img src='img/4.png'>";
    numFour = numFour + 1;
    fourOutEl.innerHTML = numFour;
  } else if (randNum2 < 0.83333333333) {
    output2El.innerHTML = "<img src='img/5.png'>";
    numFive = numFive + 1;
    fiveOutEl.innerHTML = numFive;
  } else if (randNum2 < 1) {
    output2El.innerHTML = "<img src='img/6.png'>";
    numSix = numSix + 1;
    sixOutEl.innerHTML = numSix;
  }
}
