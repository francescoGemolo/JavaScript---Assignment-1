// Genera un numero casuale tra 1 e 100
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

// Chiede un input al giocatore
function getPlayerGuess() {
    let input = prompt("Enter a number between 1 and 100:")

    while (
        input === null ||
        input.trim() === "" ||
        isNaN(Number(input)) ||
        !Number.isInteger(Number(input)) ||
        Number(input) < 1 ||
        Number(input) > 100
    ) {
        input = prompt("Invalid input.Please enter a whole number between 1 and 100:");
    }

    return Number(input);
}

// Confronta il guess con il numero corretto e restituisce una stringa
function checkGuess(playerGuess, correctNumber) {
    if (playerGuess < correctNumber) return "Too low!";
    if (playerGuess > correctNumber) return "Too high!";
    return "Correct!"
}

// Logica principale del gioco
function game() {
    const MAX_ATTEMPTS = 10;
    const secretNumber = generateRandomNumber();
    let attempts = 0;
    let result = "";
}