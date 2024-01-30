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

const convertValue = (val) => {
  if (val === 'X') {
    return 3
  } else if (val === 'O') {
    return 5
  } else {
    return 0
  }
}

const checkForWin = () => {
  let sumRow = 0
  let sumCol = 0
  let sumDiagR = 0
  let sumDiagL = 0
  for (let x = 0; x < 3; x++) {
    sumRow = 0
    sumCol = 0
    for (let y = 0; y < 3; y++) {
      // rows
      sumRow += convertValue(boardValues[x][y])
      // columns
      sumCol += convertValue(boardValues[y][x])
    }
    // right diag
    sumDiagR += convertValue(boardValues[x][x])
    // left diag
    sumDiagL += convertValue(boardValues[x][2 - x])
    if (sumRow === 9 || sumCol === 9 || sumDiagR === 9 || sumDiagL === 9) {
      alert('X wins!')
      return
    }
    if (sumRow === 15 || sumCol === 15 || sumDiagR === 15 || sumDiagL === 15) {
      alert('O wins!')
      return
    }
    const boardFull = [].concat(...boardValues).reduce((accumulator, currentValue) => {
      return accumulator + convertValue(currentValue)
    }, 0)
    if (boardFull >= 35) {
      alert("It's a tie!")
      return
    }
  }
}

const startGame = () => {
  generateBoard()
  boardValues = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]
}

$(() => {
  startGame()
  $('button').on('click', startGame)
})
