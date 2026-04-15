[Preview Link](#)

# Number Guessing Game

A simple JavaScript-based number guessing game where players try to guess a randomly generated number between 1 and 100 within 10 attempts. The game features a dramatic, AI-themed narrative to make the experience more engaging.

## Code Overview

The project includes the following files:

### Files
- `index.html`: A basic HTML page that loads the JavaScript and provides a black background.
- `game.js`: Contains the game logic for the browser prompt version.

### Key Functions
The game uses these JavaScript functions:

- `generateRandomNumber()`: Generates a random integer between 1 and 100 using `Math.random()` and `Math.floor()`.
- `generateRandomMessage(arr)`: Selects a random message from an array using array indexing and `Math.random()`.
- `checkGuess(guess, correctNumber)`: Compares the player's guess to the correct number, returning "Low...", "High...", or "Correct!".
- `getPlayerGuess(currentMessage, currentLastGuess)`: Handles user input via `prompt()`, validates if it's a number between 1-100, and prevents repeated guesses.
- `game()`: Main function that initializes the game, manages the loop for up to 10 attempts, and provides AI-themed feedback using `console.log()`.

The game uses browser prompts for input and console output for feedback.

## Preview


## Contributors

- [Daniele LG90](https://github.com/DanieleLG90)
- [Francesco Gemolo](https://github.com/francescoGemolo)
- [Paula BC Dev](https://github.com/PaulaBCDev)

This project was developed collaboratively as part of a JavaScript assignment.</content>