/* global $:true alert:true */

let boardValues = []
let xTurn = true

const generateBoard = () => {
  const $container = $('.container').empty()
  const $board = $('<div>').addClass('board')
  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      const $square = $('<div>')
        .addClass('square')
        .attr('x', x)
        .attr('y', y)
        .on('click', playSquare)
      $board.append($square)
    }
  }
  $container.append($board)
}

const playSquare = (event) => {
  const $square = $(event.currentTarget)
    .html(`<h3> ${xTurn ? 'X' : 'O'}`)
    .removeClass('square')
    .addClass('playedSquare')
    .off('click')
  const xPos = $square.attr('x')
  const yPos = $square.attr('y')
  boardValues[xPos][yPos] = xTurn ? 'X' : 'O'
  checkForWin()
  xTurn = !xTurn
}

const checkForWin = () => {
  console.log($('.square'))
  let rowWin, colWin
  const rightCheck = boardValues[2][2] + boardValues[0][0] + boardValues[1][1]
  const rightDiagWin = rightCheck === 'XXX' || rightCheck === 'OOO'
  const leftCheck = [boardValues[2][0] + boardValues[1][1] + boardValues[0][2]]
  const leftDiagWin = leftCheck === 'XXX' || leftCheck === 'OOO'
  console.log(rightDiagWin)
  for (let x = 0; x < boardValues.length; x++) {
    const rowCheck = [].concat(...boardValues[x]).join('')
    // https://stackoverflow.com/questions/17428587/transposing-a-2d-array-in-javascript
    const boardValuesTranspose = [...boardValues].map((col, i) => boardValues.map(row => row[i]))
    const colCheck = [].concat(...boardValuesTranspose[x]).join('')
    rowWin = rowCheck === 'XXX' || rowCheck === 'OOO'
    colWin = colCheck === 'XXX' || colCheck === 'OOO'
    if (rowWin || rightDiagWin) {
      alert(`${boardValues[x][0]} has won! Epic!`)
      return
    } else if (colWin || leftDiagWin) {
      alert(`${boardValues[2][x]} has won! SuperFantastic!`)
      return
    }
  }
  const boardFull = [].concat(...boardValues).some(value => value === null)
  if (!boardFull) {
    alert("It's a tie!")
  }
}

const startGame = () => {
  generateBoard()
  boardValues = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]
}

$(() => {
  startGame()
  $('button').on('click', startGame)
})
