/*----- constants -----*/
const colors = {
    'null': 'grey',
    '1': 'red',
    '-1': 'blue'
}

const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

/*----- state variables -----*/
let board
let turn
let winner

/*----- cached elements  -----*/
const squareEls = document.querySelectorAll('div')
const btn = document.querySelector('button')

/*----- event listeners -----*/
function handleClick(evt) {
    let event = evt.target
    if (event.style.backgroundColor === 'grey') {
        event.style.backgroundColor = colors[turn]
        turn *= -1
    }
}

squareEls.forEach(function(square) {
    square.addEventListener('click', handleClick)
})

/*----- functions -----*/
function init() {
    console.log('initializing game')

    // initialize state variables
    board = [null, null, null, null, null, null, null, null, null]
    turn = 1
    winner = null
    
    // calling render function
    render()
}

function render() {
    console.log('rendering game')
    renderBoard()
}

function renderBoard() {
    console.log('rendering board')
   
    // assigns the null value for the colors object to start since nothing has been clicked yet
    for (let i = 0; i < board.length; i++) {
        squareEls[i].style.backgroundColor = colors[board[i]]
    }
}

init()