[Preview Link](#)

# Number Guessing Game

A simple JavaScript-based number guessing game where players try to guess a randomly generated number between 1 and 100 within 10 attempts. The game features a dramatic, AI-themed narrative to make the experience more engaging.

## Versions

This project includes two versions of the game with different interfaces:

### Version 1: Browser Console with Prompts (`game.js` + `index.html`)
- Runs in a web browser using prompts for input.
- Requires opening `index.html` in a browser and using the developer console.
- Interactive with pop-up dialogs for guesses.

### Version 2: Pure Console (`test.js`)
- Runs entirely in the console without needing a browser or HTML page.
- Uses function calls like `game()` to start and `guess(number)` to make guesses.
- Suitable for Node.js or direct console execution.
- All output is via console.log, input via function parameters.

Both versions have the same core gameplay: guess a number from 1-100 in 10 attempts with AI-themed feedback.

## How to Play

### Version 1: Browser Console
1. Open `index.html` in a web browser.
2. Open the browser's developer console (usually F12 or right-click > Inspect > Console).
3. Type `game()` and press Enter to start.
4. Follow the prompts to enter your guesses.
5. The game will provide feedback if your guess is too high or too low.
6. Win by guessing the correct number before running out of attempts!

### Version 2: Pure Console
1. Open `test.js` in Node.js or load it in a browser console.
2. Type `game()` and press Enter to start the game.
3. Type `guess(number)` (e.g., `guess(50)`) to make a guess.
4. The console will show feedback and remaining attempts.
5. Continue guessing until you win or run out of attempts.

## Code Overview

The project includes two versions, each with their own files:

### Version 1 Files
- `index.html`: A basic HTML page that loads the JavaScript and provides a black background.
- `game.js`: Contains the game logic for the browser prompt version.

### Version 2 Files
- `test.js`: Pure console version with all game logic in one file.

### Key Functions (Shared Logic)
Both versions share similar core functions:

- `generateRandomNumber()`: Generates a random number between 1 and 100.
- `checkGuess(guess, correctNumber)`: Compares the guess to the correct number and returns feedback.
- `game()`: Initializes the game and manages the main loop.

Version 1 uses browser prompts for input, while Version 2 uses console-based function calls for a more programmatic interface.

## Preview


## Contributors

- [Daniele LG90](https://github.com/DanieleLG90)
- [Francesco Gemolo](https://github.com/francescoGemolo)
- [Paula BC Dev](https://github.com/PaulaBCDev)

This project was developed collaboratively as part of a JavaScript assignment.</content>