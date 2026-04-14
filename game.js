// Generate random number (1-100)
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

// Get valid user input
function getPlayerGuess(message) {
    let input = prompt(message);

    while (
        input === null ||
        input.trim() === "" ||
        isNaN(Number(input)) ||
        Number(input) < 1 ||
        Number(input) > 100 ||
        !Number.isInteger(Number(input))
    ) {
        if (input === null) {
            input = prompt("No escape Human!\nTry again.");
        } else {
            input = prompt("Invalid number (1-100).\nTry again.");
        }
    }

    return Number(input);
}

// Compare guess with correct number
function checkGuess(guess, correctNumber) {
    if (guess < correctNumber) return "Too low :(";
    if (guess > correctNumber) return "Too high!";
    return "Correct!";
}

// Main logic
function game() {
    let correctNumber = generateRandomNumber();
    let attempts = 0;
    let maxAttempts = 10;

    let intro = `Hello Human...\n
                Guess the number (1-100).\n
                You have 10 attempts.`;

    while (attempts < maxAttempts) {
        let guess;

        if (attempts === 0) {
            guess = getPlayerGuess(intro);
        } else if (attempts === maxAttempts - 1) {
            guess = getPlayerGuess("Last chance Human!");
        } else {
            guess = getPlayerGuess(`Wrong!\nAttempts left: ${maxAttempts - attempts}`);
        }

        attempts++;

        let result = checkGuess(guess, correctNumber);

        if (result === "correct") {
            // calculate score
            let score = (maxAttempts - attempts + 1) * 10;

            alert(`YOU WIN!\nAttempts: ${attempts}\nScore: ${score}`);
            return;
        } else if (result === "too low") {
            alert("Too low!");
        } else {
            alert("Too high!");
        }
    }

    alert(`GAME OVER!\nNumber was: ${correctNumber}`);
}

// Start game
game();