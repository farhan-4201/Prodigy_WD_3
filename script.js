// script.js
document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    const resetButton = document.getElementById('resetButton');
    const gameMessage = document.getElementById('gameMessage');
    const winnerOverlay = document.getElementById('winnerOverlay');
    const winnerText = document.getElementById('winnerText');
    const closeOverlayButton = document.getElementById('closeOverlayButton');
    let currentPlayer = 'X';
    let gameState = Array(9).fill('');

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    cells.forEach(cell => {
        cell.addEventListener('click', handleCellClick);
    });

    resetButton.addEventListener('click', resetGame);
    closeOverlayButton.addEventListener('click', closeOverlay);

    function handleCellClick(event) {
        const cell = event.target;
        const cellIndex = cell.getAttribute('data-index');

        if (gameState[cellIndex] !== '' || checkWinner()) {
            return;
        }

        gameState[cellIndex] = currentPlayer;
        cell.textContent = currentPlayer;
        updateTurnDisplay();

        if (checkWinner()) {
            displayWinner(currentPlayer);
        } else if (gameState.every(cell => cell !== '')) {
            displayWinner('Draw');
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            updateTurnDisplay();
            gameMessage.textContent = `Player ${currentPlayer}'s turn`;
        }
    }

    function checkWinner() {
        return winningCombinations.some(combination => {
            return combination.every(index => {
                return gameState[index] === currentPlayer;
            });
        });
    }

    function resetGame() {
        gameState = Array(9).fill('');
        currentPlayer = 'X';
        cells.forEach(cell => {
            cell.textContent = '';
            cell.classList.remove('x-turn', 'o-turn');
        });
        updateTurnDisplay();
        gameMessage.textContent = `Player ${currentPlayer}'s turn`;
    }

    function updateTurnDisplay() {
        cells.forEach(cell => {
            if (cell.textContent === '') {
                cell.classList.remove('x-turn', 'o-turn');
                if (currentPlayer === 'X') {
                    cell.classList.add('x-turn');
                } else {
                    cell.classList.add('o-turn');
                }
            }
        });
    }

    function displayWinner(winner) {
        winnerText.textContent = winner === 'Draw' ? 'It\'s a Draw!' : `${winner} Wins!`;
        winnerOverlay.classList.add('show');
    }

    function closeOverlay() {
        winnerOverlay.classList.remove('show');
        resetGame();
    }

    updateTurnDisplay();
    gameMessage.textContent = `Player ${currentPlayer}'s turn`;
});

