// const makeDeck = () => {
//   let deck = []
//   for (let i = 1; i <=14; i++){
//     deck.push(i)
//   }
//   return deck
// }
//
// const getRandomNum = (arrLength) => {
//   const num = Math.floor(Math.random() * arrLength)
//   return num
// }
//
// const shuffle = (arr) => {
//   shuffledDeck = []
//   while ( arr.length > 0) {
//     shuffledDeck.push(
//       arr.splice(getRandomNum(arr.length), 1)[0]
//     )
//   }
//   return shuffledDeck
// }
//
// let newDeck = shuffle(makeDeck())
//
// const player1Card = newDeck.pop()
// const player2Card = newDeck.pop()
//
// console.log(`player 1 drew a ${player1Card}`)
// console.log(`player 2 drew a ${player2Card}`)
// if (player1Card > player2Card) {
//
//   console.log('player 1 wins')
// } else if (player2Card > player1Card) {
//   console.log('player 2 wins')
// } else {
//   console.log('tie')
// }

// BONUS

const makeDeck = () => {
  const deck = []
  for (let j = 0; j < 4; j++) {
    for (let i = 1; i <= 14; i++) {
      deck.push(i)
    }
  }
  return deck
}

const getRandomNum = (arrLength) => {
  return Math.floor(Math.random() * arrLength)
}

const shuffle = (arr) => {
  shuffledDeck = []
  while (arr.length > 0) {
    shuffledDeck.push(
      arr.splice(getRandomNum(arr.length), 1)[0]
    )
  }
  return shuffledDeck
}

const drawCards = () => {
  const newCard1 = newDeck.pop()
  const newCard2 = newDeck.pop()
  player1Card += newCard1
  player2Card += newCard2
  console.log(`player 1 drew a ${newCard1}`)
  console.log(`player 2 drew a ${newCard2}`)
}

const checkWin = () => {
  if (player1Card > player2Card) {
    console.log('player 1 wins')
  } else if (player2Card > player1Card) {
    console.log('player 2 wins')
  } else {
    console.log('Tie! Draw again!')
    drawCards()
    checkWin()
  }
}

let player1Card = 0
let player2Card = 0

const newDeck = shuffle(makeDeck())
drawCards()
checkWin()
