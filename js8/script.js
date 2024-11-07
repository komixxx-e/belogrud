const squares = document.querySelectorAll('.square');
const statusText = document.getElementById('status');
const resetButton = document.getElementById('reset');
let currentPlayer = 'X';
let board = Array(9).fill(null);
let gameActive = true;

function checkWinner() {
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            statusText.textContent = `${board[a]} wins!`;
            gameActive = false;
            return;
        }
    }

    if (!board.includes(null)) {
        statusText.textContent = 'Draw!';
        gameActive = false;
    }
}

function handleClick(event) {
    const index = Array.from(squares).indexOf(event.target);
    if (!gameActive || board[index]) return;

    board[index] = currentPlayer;
    event.target.textContent = currentPlayer;
    checkWinner();
    if (gameActive) {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        statusText.textContent = `Turn: ${currentPlayer}`;
    }
}

function resetGame() {
    board.fill(null);
    squares.forEach(square => {
        square.textContent = '';
    });
    currentPlayer = 'X';
    statusText.textContent = `Turn: ${currentPlayer}`;
    gameActive = true;
}

squares.forEach(square => square.addEventListener('click', handleClick));
resetButton.addEventListener('click', resetGame);