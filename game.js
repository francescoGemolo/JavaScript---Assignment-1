let lastGuess = null;

// Create a random number between 1 and 100
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

// Compare the guess with the secret number
function checkGuess(guess, correctNumber) {
    if (guess < correctNumber) return "Too low...";
    if (guess > correctNumber) return "Too high!";
    return "Correct!";
}

// Validation logic
function getPlayerGuess(message, currentLastGuess) {
    while (true) {
        let input = prompt(message);

        // Escape if user clicks "Cancel"
        if (input === null) {
            console.log("You escaped...for now!");
            return "EXIT";
        }

        let num = Number(input);

        // Basic Validation
        if (input.trim() === "" || isNaN(num) || !Number.isInteger(num) || num < 1 || num > 100) {
            message = "Invalid input.\nYou are wasting my time, human.\nEnter a number (1–100):";
            continue;
        }

        // Repetition Check
        if (num === currentLastGuess) {
            message = `...again?\nRepetition: ${num} already tried.\nTry a DIFFERENT number:`;
            continue;
        }

        return num;
    }
}

// Main Logic
function game() {
    let correctNumber = generateRandomNumber();
    let attempts = 0;
    let maxAttempts = 10;
    let gameWon = false;
    let lastResult = "";
    lastGuess = null;

    let intro = `Human detected...\n\nI am the system that will break you.\n\nGuess the number (1–100).\nYou have ${maxAttempts} attempts.`;

    while (attempts < maxAttempts) {
        let currentPrompt;

        if (attempts === 0) {
            currentPrompt = intro;
        } else {
            let feedback = (lastResult === "Too low...")
                ? "Too low. Predictable."
                : "Too high. You still don’t understand, do you?";

            if (attempts === maxAttempts - 1) {
                currentPrompt = `${feedback}\n\nFinal attempt.\nI will not ask again.`;
            } else {
                currentPrompt = `${feedback}\n\nWrong!\nAttempts left: ${maxAttempts - attempts}`;
            }
        }

        // The game stops here until a valid, new number is entered
        let guess = getPlayerGuess(currentPrompt, lastGuess);

        if (guess === "EXIT") return;

        attempts++;
        lastGuess = guess;
        lastResult = checkGuess(guess, correctNumber);

        console.log(`Attempt ${attempts}: ${guess} -> ${lastResult}`);

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
    "Welcome, human. Type %cgame()%c and press Enter to start...",
    "color: green; font-weight: bold;",
    "color: inherit;"
);