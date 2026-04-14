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
        input = prompt("Invalid input.\nYou are wasting my time, human.\nEnter a number (1–100):");

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

    let intro = `Human detected...

I am the system that will break you.

Guess the number (1–100).
You have 10 attempts.
Every mistake brings you closer to failure.`;

    while (attempts < maxAttempts) {
        let currentPrompt;

        if (attempts === 0) {
            currentPrompt = intro;
        } else {
            let feedback =
                (lastResult === "Too low...")
                    ? "Too low. Predictable."
                    : "Too high. You still don’t understand, do you?";

            if (attempts === maxAttempts - 1) {
                currentPrompt = `${feedback}\n\nFinal attempt.\nI will not ask again.`;
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
            console.log("%cImpossible...\nYou survived. For now.", "color: green;");
            console.log(`Attempts: ${attempts}\nScore: ${score}`);
            break;
        }
    }

    if (!gameWon) {
        console.log("%cYou failed.\nThere was never a chance for you.", "color: red;");
        console.log(`Number was: ${correctNumber}`);
    }
}

// Input
console.log(
    "Welcome, human. Type %cgame()%c and press Enter to start your challenge...",
    "color: green;",
    "color: inherit;"
);