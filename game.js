// Array for random message
const message = {
    low: [
        "Too low. Predictable.",
        "Aiming low? How typical of your species.",
        "Too low. You're not even close to my level.",
        "Lower than your chances of survival. Try again."
    ],
    high: [
        "Too high. Your ego is clouding your judgment.",
        "Too high. You clearly don't understand how this works.",
        "Wrong. The number is smaller, much like your intellect.",
        "Way too high. Calm down, human."
    ],
    invalid: [
        "Invalid input. You are wasting my time, human.",
        "That's not a number. Is your processor malfunctioning?",
        "Enter a number between 1 and 100. It's not that hard."
    ]
};

// Generate Random message
const generateRandomMessage = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Generate Random Numbers
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function checkGuess(guessNumber, correctNumber) {
    if (guessNumber < correctNumber) return "Low...";
    if (guessNumber > correctNumber) return "High...";
    return "Correct!";
}

// Security Logic
function getPlayerGuess(currentMessage, currentLastGuess) {
    while (true) {
        let input = prompt(currentMessage);

        // Escape logic
        if (input === null) {
            console.log("%cSystem override: Human escaped, for now.", "color: orange;");
            return "Exit";
        }

        let num = Number(input);

        // Validation
        if (input.trim() === "" || isNaN(num) || !Number.isInteger(num) || num < 1 || num > 100) {
            currentMessage = `${generateRandomMessage(message.invalid)}\nRange: 1–100:`;
            continue;
        }

        // Repetition
        if (num === currentLastGuess) {
            currentMessage = `...again?\nYou already tried ${num}.\nTry to be original:`;
            continue;
        }

        return num;
    }
}

// Main Logic
function game() {
    const correctNumber = generateRandomNumber();
    const maxAttempts = 10;
    let attempts = 0;
    let lastGuess = null;
    let lastResult = "";
    let gameWon = false;

    const intro = `Human detected...\n\nI am the system that will break you.\n\nGuess the number (1–100).\nYou have ${maxAttempts} attempts.`;

    while (attempts < maxAttempts) {
        let currentPrompt;

        if (attempts === 0) {
            currentPrompt = intro;
        } else {
            // Dynamic Feedback
            let feedback = (lastResult === "Low...")
                ? generateRandomMessage(message.low)
                : generateRandomMessage(message.high);

            if (attempts === maxAttempts - 1) {
                currentPrompt = `Final attempt.\n${feedback}\nI will not ask again.`;
            } else {
                currentPrompt = `${feedback}\n\nAttempts left: ${maxAttempts - attempts}`;
            }
        }

        // Wait for input
        let guessNumber = getPlayerGuess(currentPrompt, lastGuess);
        if (guessNumber === "Exit") return;

        // Update state
        attempts++;
        lastGuess = guessNumber;
        lastResult = checkGuess(guessNumber, correctNumber);

        console.log(`Attempt ${attempts}: ${guessNumber} -> ${lastResult}`);

        // Win
        if (lastResult === "Correct!") {
            gameWon = true;
            let score = (maxAttempts - attempts + 1) * 10;

            console.log(`Attempts: ${attempts} | Score: ${score}`);

            console.log(
                "%cImpossible...\nYou survived. For now.\n\n%cType %cgame()%c and press Enter to play again...",
                "color: lime;",
                "color: inherit;",
                "color: green;",
                "color: inherit;"
            );

            break;
        }
    }

    // Game Over
    if (!gameWon) {
        console.log(
            "%cGame Over.\nThere was never a chance for you.\n\n%cType %cgame()%c and press Enter to play again...",
            "color: red;",
            "color: inherit;",
            "color: green;",
            "color: inherit;"
        );
        console.log(`The number was: ${correctNumber}`);
    }
}

// Init
function init() {
    alert("Access denied. Open the console (Ctrl + Shift + I) to view the instructions and prove your worth!");

    console.clear();
    console.log(
        "%cSYSTEM MALFUNCTION%c\n\nTo bypass security, you must execute the bypass sequence.\n\nType %cgame()%c and press Enter to begin the breach.",
        "color: red;",
        "color: inherit;",
        "color: green;",
        "color: inherit;"
    );
}

// Prompt
init();