                                                                        # RockPaperScissorGame

**#Description

The code you provided is an HTML, CSS, and JavaScript implementation of a simple Rock-Paper-Scissors game. It allows the user to choose their move (rock, paper, or scissors) by clicking on the corresponding buttons. The computer randomly selects its move, and the game determines the winner based on the rules of Rock-Paper-Scissors.

Here's a breakdown of the different components and functionality in the code:

**HTML:**
- The HTML structure includes a title, instructions, buttons for each move (rock, paper, scissors), result display area, moves history display, score display, and a button to reset the score.

**CSS:**
- The CSS styles define the appearance of the elements in the game, such as background color, font styles, button styles, and margins.

**JavaScript:**
- The JavaScript code handles the game logic and interaction.
- The `playGame` function is triggered when the user clicks on a move button. It compares the player's move with the computer's move and determines the result.
- The `pickComputerMove` function randomly selects the computer's move.
- The `updateScore` function updates the score display on the screen.
- The `reset-score-button` click event handler resets the score to zero and removes the score data from the browser's localStorage.
- The code also initializes the score using `localStorage` to store and retrieve the score data even if the page is refreshed.

Overall, this code allows users to play the Rock-Paper-Scissors game against the computer and keeps track of the score. It demonstrates basic usage of HTML, CSS, and JavaScript to create an interactive web-based game.
