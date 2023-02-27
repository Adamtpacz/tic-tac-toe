/*----- constants -----*/
const colors = {
    Empty: null,
    Player1: '1',
    Player2: '-1'
}

const winCondition = {
    a: ['1', '2', '3'],
    b: ['1', '2', '3'],
    c: ['1', '2', '3']
}
// console.log(winCondition)

/*----- state variables -----*/
let board = []
let turn
let winner

/*----- cached elements  -----*/
const squareEls = document.querySelectorAll('div')
// console.log(squareEls)

/*----- event listeners -----*/


/*----- functions -----*/
function init() {
    console.log('starting game')
    render()

    board = [null, null, null, null, null, null, null, null, null]

}

function render() {
    console.log('rendering game')
}

init()