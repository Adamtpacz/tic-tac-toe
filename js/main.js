/*----- constants -----*/
const colors = {
    Null: '0',
    Player1: '1',
    Player2: '-1'
}

const winCondition = {
    a: ['1', '2', '3']
    b: ['1', '2', '3']
    c: ['1', '2', '3']
}
const win1 = ['a1', 'a2', 'a3']

/*----- state variables -----*/
let squareStatus
let turn

/*----- cached elements  -----*/
const boardEl = document.querySelector('#board')
const squareEls = document.querySelectorAll('div')

/*----- event listeners -----*/

/*----- functions -----*/
function init() {
    console.log('starting game')
    render()
}

function render() {
    console.log('rendering game')
}

init()