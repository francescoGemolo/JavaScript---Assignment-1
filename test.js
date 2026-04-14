let correctNumber = null;
let attempts = 0;
let maxAttempts = 10;
let gameWon = false;
let lastGuess = null;
let lastResult = "";

// Create a random number between 1 and 100
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

// Compare the guess with the secret number
function checkGuess(guess) {
    if (guess < correctNumber) return "Too low...";
    if (guess > correctNumber) return "Too high!";
    return "Correct!";
}

// Initialized
function game() {
    correctNumber = generateRandomNumber();
    attempts = 0;
    gameWon = false;
    lastGuess = null;
    lastResult = "";

    console.log(`
Human detected...
I am the system that will break you.

Guess the number (1–100).
You have ${maxAttempts} attempts.

Type: %cguess(number)`,
        "color: green; font-weight: bold;"
    );
}

function guess(value) {
    // Check if the game is active or already over
    if (correctNumber === null) {
        console.log("Error: System inactive. Use game().");
        return;
    }
    if (gameWon) {
        console.log("Error: Game already won. Use game().");
        return;
    }

    // Validate input: Must be an integer between 1 and 100
    if (typeof value !== "number" || isNaN(value) || !Number.isInteger(value) || value < 1 || value > 100) {
        console.log("Invalid input. You are wasting my time.");
        console.log("Enter a number (1–100). Attempt NOT counted.");
        return;
    }

    // Prevent repeated guesses
    if (value === lastGuess) {
        console.log("%c...again?", "color: purple;");
        console.log(`Repetition: ${value} already tried. I will not count this.`);
        return;
    }

    // Register a valid attempt
    lastGuess = value;
    attempts++;
    lastResult = checkGuess(value);

    // Pick a mean response based on result
    let feedback = (lastResult === "Too low...")
        ? "Too low. Predictable."
        : "Too high. You still don’t understand, do you?";

    // Check for Win
    if (lastResult === "Correct!") {
        gameWon = true;
        let score = (maxAttempts - attempts + 1) * 10;
        console.log("%cImpossible...\nYou survived. For now.", "color: green;");
        console.log(`Attempts: ${attempts}\nScore: ${score}`);
        return;
    }

    // Check for Loss or continue
    if (attempts >= maxAttempts) {
        console.log("%cYou failed.\nThere was never a chance for you.", "color: red;");
        console.log(`Number was: ${correctNumber}`);
    } else {
        console.log(`Attempt ${attempts}: ${value} -> ${feedback}`);

        // Warning for the very last try
        if (attempts === maxAttempts - 1) {
            console.log("%cFinal attempt. I will not ask again.", "color: orange;");
        } else {
            console.log(`Wrong! Attempts left: ${maxAttempts - attempts}`);
        }
    }
}

// Input
console.log(
    "Welcome, human. Type %cgame()%c and press Enter to begin...",
    "color: green;",
    "color: inherit;"
);