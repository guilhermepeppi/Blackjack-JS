let player = {
  myName: 'Guilherme',
  chips: 0
}
let hasBlackJack = false
let isAlive = true
let message = ''
let sum = 0
let cards = []

let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')
let playerEl = document.getElementById("player-el")

// 4. Render the player's name and chips in playerEl
playerEl.textContent = player.myName + ': $' + player.chips


function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1; // Random number between 1 and 13
  if (randomNumber > 10) {
    return 10
  } else if (randomNumber === 1) {
    return 11
  } else {
    return randomNumber
  }
}

function startGame() {
  isAlive = true
  sum = 0
  cards = []
  cards.push(getRandomCard());
  cards.push(getRandomCard());
  cardsEl.textContent = `Cards: ${cards.join(", ")}`
  for (var i = 0; i < cards.length; i++) {
    sum += cards[i];
  }
  renderGame()
}

function renderGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂"
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳"
    hasBlackJack = true
  } else {
    message = "You're out of the game! 😭"
    isAlive = false
  }
  messageEl.textContent = message
  sumEl.textContent = "Sum: " + sum
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    cardsEl.textContent = `Cards: ${cards.join(", ")}`
    renderGame()
  }
}