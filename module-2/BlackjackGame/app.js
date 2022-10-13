let messageShow = document.getElementById("message_top")
// HUMAN PLAYER STUFF
let sumShow = document.getElementById("sum_show")
let cardDeckShow = document.getElementById("cards_show")
let playerObj = document.getElementById("player_obj")
// PC STUFF
let sumShow2 = document.getElementById("sum_show2")
let cardDeckShow2 = document.getElementById("cards_show2")
let playerObj2 = document.getElementById("player_obj2")

class Player{
    name = "error 407(no name)"
    chips = "error 77(broke)"
    // gotBusted = false
    // cardDeck = []
    // cardSum = 0
    constructor(name, chips){
        this.name = name
        this.chips = chips
        
        this.gotBusted = false
        this.cardDeck =  []
        this.cardSum = 0
    }
}

const humanPlayer = new Player("Peter Parker", 1000)
const housePlayer = new Player("Joseph Joestar", 6000)
// name & chips
let playerText = document.getElementById("player_obj")


function getRandomCard(castSum) {
    let randomNumer = Math.floor(Math.random() * 13 ) + 1
    if (randomNumer > 10) {
        randomNumer =  10
    } 
    else if (randomNumer === 1 && castSum < 10) {
        randomNumer = 11
    } 
    renderGame()
    return randomNumer
}


// html activated
function startGame() {
    // reset states when new game
    humanPlayer.gotBlackjack = false
    humanPlayer.gotBusted = false
    humanPlayer.cardSum = 0
    housePlayer.gotBlackjack = false
    housePlayer.gotBusted = false
    housePlayer.cardSum = 0

    humanPlayer.cardDeck = [
        getRandomCard(humanPlayer.cardSum), 
        getRandomCard(humanPlayer.cardSum)
    ]
    housePlayer.cardDeck = [
        getRandomCard(humanPlayer.cardSum)
    ]
    // show 1 card of house
    let cast = housePlayer.cardDeck[0]
    cardDeckShow2.textContent = `Cards: ${cast}`
    sumShow2.textContent = `Sum: ${cast}`
    playerObj2.textContent = `${housePlayer.name} $${housePlayer.chips}`


    // sum of the cards array whit default value of 0, for empty array
    humanPlayer.cardSum = humanPlayer.cardDeck.reduce((partial_sum, a) => partial_sum + a, 0)
    
    theHousePlayin() 
    renderGame()
}


// automtic house's play
function theHousePlayin() {
    while (housePlayer.cardSum < 17){

        housePlayer.cardDeck.push(getRandomCard(housePlayer.cardSum))

        housePlayer.cardSum = housePlayer.cardDeck.reduce((partial_sum, a) => partial_sum + a, 0)
    }
}

function playerWin(){
    humanPlayer.chips += 50
    housePlayer.chips -= 50
}
function playerLose(){
    humanPlayer.chips -= 50
    housePlayer.chips += 50
}
// html activated
function standFunc(){
    humanPlayer.cardSum = humanPlayer.cardDeck.reduce((partial_sum, a) => partial_sum + a, 0)
    housePlayer.cardSum = housePlayer.cardDeck.reduce((partial_sum, a) => partial_sum + a, 0)

    if (humanPlayer.cardSum < 22 && (humanPlayer.cardSum > housePlayer.cardSum) && housePlayer.cardSum < 22) {
        messageShow.textContent = "You win"
        playerWin()
    }
    else if (humanPlayer.cardSum == housePlayer.cardSum) {
        messageShow.textContent = "DRAW, You lose"
        playerLose()
    }
    else {
        messageShow.textContent = "You lose"
        playerLose()
    }

    playerObj.textContent = `${humanPlayer.name} $${humanPlayer.chips}`
    playerObj2.textContent = `${housePlayer.name} $${housePlayer.chips}`
    // show all cards from house & update sum_show
    let sum_cast = housePlayer.cardDeck.reduce((partial_sum, a) => partial_sum + a, 0)
    // housePlayer.cardSum = sum_cast
    sumShow2.textContent = `Sum: ${sum_cast}`
    cardDeckShow2.textContent = "Cards: "
    for (let i = 0; i < housePlayer.cardDeck.length; i++) {
        cardDeckShow2.textContent += housePlayer.cardDeck[i] + " "
    }
}


function renderGame() {
    playerText.textContent = `${humanPlayer.name} : $${humanPlayer.chips}`
    cardDeckShow.textContent = "Cards: "
    for (let i = 0; i < humanPlayer.cardDeck.length; i++) {
        cardDeckShow.textContent += humanPlayer.cardDeck[i] + " "
    }
    
    sumShow.textContent = "Sum: " + humanPlayer.cardSum
    if (humanPlayer.cardSum === 21) {
        messageShow.textContent = "You've got Blackjack!"
        humanPlayer.gotBlackjack = true
        playerText.textContent = `${humanPlayer.name} : $${humanPlayer.chips}`
    } 
    else if (humanPlayer.cardSum <= 20) {
        messageShow.textContent = "Do you want to draw a new card?"
    } 
    else {
        messageShow.textContent = "You're out of the game!"
        playerText.textContent = `${humanPlayer.name} : $${humanPlayer.chips}`
    }
}


// html activated
function anotherCard() {
    // can only draw if, not blackjack or not busted or not empty hand
    if (humanPlayer.cardSum === 0 || humanPlayer.gotBlackjack || humanPlayer.gotBusted){
        messageShow.textContent = "Invalid move!"
    }
    else {
        let card = getRandomCard(humanPlayer.cardSum)
        humanPlayer.cardSum += card
        humanPlayer.cardDeck.push(card)
        renderGame()
    }
}
