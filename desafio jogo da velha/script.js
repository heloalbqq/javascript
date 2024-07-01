const cells = document.querySelectorAll('.cell')
const resetButton = document.getElementById('reset')
let currentPlayer = 'X';
let board = Array(9).fill(null);
let gameActive = true


let winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

cells.forEach(cell => cell.addEventListener('click', handleCellClick))
resetButton.addEventListener('click', resetGame)

function handleCellClick(event) {
    const index = event.target.getAttribute('data-index')

    if (board[index] || !gameActive) {
        return
    }

    board[index] = currentPlayer
    event.target.textContent = currentPlayer

    if (checWin()) {
        alert(`${currentPlayer} venceu!`)
        gameActive = false
    } else if (board.every(cell => cell)){
        alert('Empate!')
        gameActive = false
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
    }
}

function checWin() {
    return winningConditions.some(condition => {
        return condition.every(index => board[index] === currentPlayer)
    })
}

function resetGame() {
    board = Array(9).fill(null)
    gameActive = true
    currentPlayer = 'X'
    cells.forEach(cell => cell.textContent = '')
}