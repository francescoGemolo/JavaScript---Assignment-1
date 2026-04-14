// Generate a random number (1-100)
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

// Get valid input or escape
function getPlayerGuess(message) {
    let input = prompt(message);

    if (input === null) {
        console.log("You escaped...for now!");
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

        if (input === null) {
            console.log("You escaped...for now!");
            return null;
        }
    }

    return Number(input);
}

// Check guess result
function checkGuess(guess, correctNumber) {
    if (guess < correctNumber) return "Too low...";
    if (guess > correctNumber) return "Too high!";
    return "Correct!";
}

// Main Logic
function game() {
    let correctNumber = generateRandomNumber();
    let attempts = 0;
    let maxAttempts = 10;
    let gameWon = false;
    let lastResult = "";

    let intro = `Hello human...\n
I am the evil AI!\n
Guess the number (1-100).\n
You have 10 attempts.\n
Try to survive!`;

    while (attempts < maxAttempts) {
        let currentPrompt;

        if (attempts === 0) {
            currentPrompt = intro;
        } else {
            let feedback = (lastResult === "Too low...") ? "Too low..." : "Too high, you dare?";

            if (attempts === maxAttempts - 1) {
                currentPrompt = `${feedback}\n\nLast chance human...\nDo not fail!`;
            } else {
                currentPrompt = `${feedback}\n\nWrong!\nAttempts left: ${maxAttempts - attempts}`;
            }
        }

        let guess = getPlayerGuess(currentPrompt);

        if (guess === null) return;

        attempts++;
        lastResult = checkGuess(guess, correctNumber);

        if (lastResult !== "Correct!") {
            console.log(`Attempt ${attempts}: ${guess} -> ${lastResult}`);
        }

        if (lastResult === "Correct!") {
            gameWon = true;
            let score = (maxAttempts - attempts + 1) * 10;
            console.log("%cImpossible...\nYou win!", "color: green;");
            console.log(`Attempts: ${attempts}\nScore: ${score}`);
            break;
        }
    }

    if (!gameWon) {
        console.log("%cGame over.\nThe world is mine.", "color: red;");
        console.log(`Number was: ${correctNumber}`);
    }
}

// Output
console.log(
    "Welcome, human. Type %cgame()%c and press Enter to start your challenge...",
    "color: green;",
    "color: inherit;"
);