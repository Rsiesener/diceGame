


const imgArray = [
  'dice1.png',
  'dice2.png',
  'dice3.png',
  'dice4.png',
  'dice5.png',
  'dice6.png',
]

function throwDice() {
  let die1 = Math.random() * 6
  die1 = Math.floor(die1) + 1 

  let die2 = Math.random() * 6
  die2 = Math.floor(die2) + 1 

  getDice(die1, die2)
}

function getDice(dieOne, dieTwo) {
  let dieImg1 = imgArray[dieOne - 1]
  let dieImg2 = imgArray[dieTwo - 1]

  setDie(dieImg1, dieImg2)
}

function setDie(die1, die2) {
  console.log(typeof(die1))
  document.getElementById('die1').src = './images/' + die1
  document.getElementById('die2').src = './images/' + die2

  setWinner(die1, die2)
}

function setWinner(die1, die2) {
  if (die1 > die2) {
    document.querySelector('h3').innerText = 'Player one wins'
  } else if(die1 < die2) {
    document.querySelector('h3').innerText = 'Player two wins'
  } else {
    document.querySelector('h3').innerText = "It's a tie"
  }
}
