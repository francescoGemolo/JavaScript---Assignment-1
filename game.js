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