// funzione per generare numero random
function randomNumber() {
    return Math.floor(Math.random() * 100) + 1
}
let rightNumber = randomNumber()
console.log(rightNumber)

// prompt per prendere il numero del giocatore
let firstMsg = `Hello Human, I'm the Devil AI!\n 
                If you want to save the world, play a game with me.\n
                You have to guess a number between 1 and 100.\n
                You have 10 guesses, are you ready to play?\n
                Make your choice.`
let playerGuess = prompt(firstMsg)
let guessNumber = playerGuess

// funzione per controllare che il numero abbia le caratteristiche giuste (maggiore di 1 minore di 100)
function getValidNumber(playerNumberInput) {
    while (playerNumberInput === null ||
        playerNumberInput.trim() === "" ||
        isNaN(Number(playerNumberInput)) ||
        Number(playerNumberInput) < 1 ||
        Number(playerNumberInput) > 100 ||
        !Number.isInteger(Number(playerNumberInput))
    ) {
        let newTemp
        if (playerNumberInput === null) {
            newTemp = prompt("You can't escape this agony Human!\n Try Again.")
        } else {
            newTemp = prompt("You can't fool me Human!\n Try Again.")
        }

        playerNumberInput = newTemp
    }

    return Number(playerNumberInput)
}

// funzione per confronto dei numeri
function checkNumber(random, player) {
    let attempts = 10
    player = getValidNumber(player)

    while (random !== player && attempts > 1) {
        attempts--
        let newImput
        //if (player === null) break
        if (attempts === 1) {
            newImput = prompt("This is your last change Human!\n Choose wisely.")
        } else {
            newImput = prompt("Wrong Number! you still have " + attempts + " attempts.\n Try again")
        }
        player = getValidNumber(newImput)
    }

    if (random === player) {
        alert("You are a lucky Human.\n YOU WIN!")
    } else {
        alert("GAME OVER!\n You lost Human.\n The world is mine!")
    }
}

checkNumber(rightNumber, guessNumber)