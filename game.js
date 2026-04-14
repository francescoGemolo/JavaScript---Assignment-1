// Generate a random number (1-100)
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

// Get valid input or escape
function getPlayerGuess(message) {
    let input = prompt(message);

    if (input === null) {
        alert("You escaped...for now!");
        return null;
    }

    while (
        input.trim() === "" ||
        isNaN(Number(input)) ||
        Number(input) < 1 ||
        Number(input) > 100 ||
        !Number.isInteger(Number(input))
    ) {
        input = prompt("Foolish human!\nEnter a number (1-100)");

        // Check escape again
        if (input === null) {
            alert("You escaped...for now!");
            return null;
        }
    }

    return Number(input);
}

// Check guess result
function checkGuess(guess, correctNumber) {
    if (guess < correctNumber) return "Too low!";
    if (guess > correctNumber) return "Too high!";
    return "Correct!";
}

// Main logic
function game() {
    let correctNumber = generateRandomNumber();
    let attempts = 0;
    let maxAttempts = 10;

    let intro = `Hello human...\n
I am the evil AI.\n
Guess the number (1-100)\n
You have 10 attempts\n
Try to survive`;

    while (attempts < maxAttempts) {
        let guess;

        if (attempts === 0) {
            guess = getPlayerGuess(intro);
        }

        else if (attempts === maxAttempts - 1) {
            guess = getPlayerGuess("Last chance human...\nDo not fail!");
        }

        else {
            guess = getPlayerGuess(`Wrong!\nAttempts left: ${maxAttempts - attempts}`);
        }

        // Exit if player escape
        if (guess === null) return;

        attempts++;

        let result = checkGuess(guess, correctNumber);

        if (result === "Correct!") {
            let score = (maxAttempts - attempts + 1) * 10;

            alert(`Impossible...\nYou win!\nAttempts: ${attempts}\nScore: ${score}`);
            return;
        }

        if (result === "Too low!") {
            alert("Too low...");
        } else {
            alert("Too high, you dare?");
        }
    }

    alert(`Game over.\nThe world is mine.\nNumber was: ${correctNumber}`);
}

// Start game
game();