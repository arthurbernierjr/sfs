/* global $:true alert:true */

// global variables
let boardValues = []
let xTurn = true

const generateBoard = () => {
  // empty contents of container - important for game restart
  const $container = $('.container').empty()
  // create a div to contain the board
  const $board = $('<div>').addClass('board')
  // create squares
  // first loop for x positions
  for (let x = 0; x < 3; x++) {
    // second loop for y positions
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
  // target clicked on square
  const $square = $(event.currentTarget)
  // add html/h3 element with text X or O
  // depending on whether xTurn is true or false
  $square
    .html(`<h3> ${xTurn ? 'X' : 'O'}`)
    // update apperance
    .removeClass('square')
    .addClass('playedSquare')
    // remove click event listener so square cannot be
    // played again
    .off('click')
  // get square x/y positions
  const xPos = $square.attr('x')
  const yPos = $square.attr('y')
  // update the boardValues array in the correct position with the value of the play
  boardValues[xPos][yPos] = xTurn ? 'X' : 'O'
  // did this turn cause a win? Check it
  checkForWin()
  // switch/toggler turns from X to O or O to X
  xTurn = !xTurn
}

const checkForWin = () => {
  // create an array of strings based on the values of the board
  const isAwin = [
    // rows top to bottom
    boardValues[0][0] + boardValues[0][1] + boardValues[0][2],
    boardValues[1][0] + boardValues[1][1] + boardValues[1][2],
    boardValues[2][0] + boardValues[2][1] + boardValues[2][2],
    // columns left to right
    boardValues[0][0] + boardValues[1][0] + boardValues[2][0],
    boardValues[0][1] + boardValues[1][1] + boardValues[2][1],
    boardValues[0][2] + boardValues[1][2] + boardValues[2][2],
    // right diagnol
    boardValues[2][2] + boardValues[0][0] + boardValues[1][1],
    // left diagnol
    boardValues[2][0] + boardValues[1][1] + boardValues[0][2]
  ]
  // iterate over each string
  for (const check of isAwin) {
    // check if the string is all Xs or Os
    if (checkForMatch(check)) {
      alert(`SuperFantastic! ${check[0]} has won!`)
      // no more playing once game is over!
      gameOver()
      // return removes bug where win is on last turn
      // by exiting out of the function
      return
    }
  }
  // check if the board is full / all plays have been made
  // check if any value ib boardArrays is null
  // first flatten the 2D array into 1 array
  const boardFull = [].concat(...boardValues)
    // check if any value in the array is null
    .some(value => value === null)
  // if no values are null it is a tie
  if (!boardFull) {
    alert("It's a tie!")
    // no more playing once game is over!
    gameOver()
  }
}

// check if there are 3 Xs or 0s
const checkForMatch = (testForMatches) => {
  // returns true or false, checks both win conditons for Xs or Os
  return testForMatches === 'XXX' || testForMatches === 'OOO'
}

const gameOver = () => {
  $('.square')
    .off('click')
    .css('background-color', 'gainsboro')
    .removeClass('square')
    .addClass('playedSquare')
}
// start game, generate the board, generate the plays
const startGame = () => {
  generateBoard()
  boardValues = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]
}

// document on ready
$(() => {
  startGame()
  $('button').on('click', startGame)
})
