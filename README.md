Tic-Tac-Toe Web Application
Overview
This is a simple Tic-Tac-Toe web application built using HTML, CSS, and JavaScript. The game allows two players to play against each other, taking turns to place their marks (X or O) on a 3x3 grid. The game includes features such as displaying whose turn it is, checking for a win or draw condition, and highlighting the current player's turn with a background gradient. It also features a screen transition to display the winner's name.

Features
Two-player Tic-Tac-Toe game.
Visual indication of the current player's turn.
Background image behind the game board.
Smooth screen transition to display the winner's name.
Reset button to start a new game.
Technologies Used
HTML
CSS
JavaScript
Setup and Installation
Clone the repository to your local machine.
bash
Copy code
git clone https://github.com/your-username/tic-tac-toe.git
Navigate to the project directory.
bash
Copy code
cd tic-tac-toe
Open index.html in your preferred web browser.
bash
Copy code
open index.html
Usage
Open the index.html file in a web browser.
The game board will be displayed with a background image.
Player X starts the game. Click on any cell to place your mark.
The game will indicate the current player's turn by changing the cell background gradient.
The game checks for a win or draw condition after each move.
When the game ends, a screen transition displays the winner's name.
Click the "Restart Game" button to start a new game.
Project Structure
Copy code
tic-tac-toe/
├── index.html
├── styles.css
└── script.js
index.html: The main HTML file containing the structure of the Tic-Tac-Toe game.
styles.css: The CSS file for styling the game, including the game board, cells, and winner overlay.
script.js: The JavaScript file for handling the game logic, including player turns, win conditions, and screen transitions.
Customization
Background Image: To change the background image of the game board, update the background-image property in the .board class in styles.css.
css
Copy code
.board {
    background-image: url('your-image-url.jpg'); /* Replace with your image URL */
    ...
}
Colors and Styles: You can customize the colors and styles of the cells, winner overlay, and other elements by modifying the styles.css file.
License
This project is licensed under the MIT License. See the LICENSE file for more details.

Contributing
Contributions are welcome! If you have suggestions for improvements or bug fixes, please create an issue or submit a pull request.

Acknowledgements
The project is inspired by the classic Tic-Tac-Toe game.
