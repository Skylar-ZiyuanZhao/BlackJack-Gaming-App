// when start game is pressed, ramdomly draw two cards from the card
// render the two cards in "Card: " section
// add them together, and render the result at "Sum: " section 
// according to the result, if the sum = 21, win, if sum<21, ask to draw another cards, if sum > 21 out of the game
// when new card is clicked, randomly draw a new card
// for card number, when the card > 10, they should be counted as 10, if 1 is drawnm it should be counted as 11, 
let player = {
    name: "Zig Zag",
    chip: 200
}

let cards = []
let sum = 0
let message = ''
let isAlive = false
let hasBlackJack = false
let cardEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": " + player.chip

function getRandomCard() {
    let randomCard = Math.floor(Math.random()*13) +1
    if (randomCard > 10) {
        return 10
    }
    else if (randomCard === 1) {
        return 11
    } else {
        return randomCard
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    renderGame()
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let newc = getRandomCard()
        cards.push(newc)
        sum += newc
        renderGame()
    }
}

function renderGame() {
    cardEl.textContent = "Card: "
    for (let i = 0; i < cards.length; i ++  ) {
        cardEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else if (sum > 21) {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}