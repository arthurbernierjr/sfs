
// const sumArray = (arr) => {
//   let sum = 0
//   for(let i = 0; i < arr.length; i++){
//     sum += arr[i]
//   }
//   return sum
// }
//
// console.log(sumArray([1, 2, 3, 4, 5, 6]));

// const checkPrime = (num) => {
//   let isPrime = true
//   for(let i = 2; i <= Math.sqrt(num); i++){
//     if(num % i === 0){
//       isPrime = false
//       return isPrime
//     }
//   }
//   return isPrime
// }
//
//
// console.log(checkPrime(3));
// console.log(checkPrime(4));
//
// const printPrime = (num) => {
//   for(let j = 0; j <= num; j++){
//     if(checkPrime(j)){
//       console.log(j);
//     }
//   }
// }
//
// printPrime(97)

const randomMove = () => {
  const moves = ['rock', 'paper', 'scissors']
  const moveIndex = Math.floor(Math.random() * moves.length)
  return moves[moveIndex]
}
// console.log(randomMove());

const rockPaperScissors = () => {
  const compMove = randomMove()
  const playMove = randomMove()
  const outcomeStatement = `Computer chose ${compMove} and player chose ${playMove} so `
  if (compMove === playMove) {
    console.log(outcomeStatement + 'it is a tie!')
  } else if ((compMove === 'rock' && playMove === 'scissors') || (compMove === 'paper' && playMove === 'rock') || (compMove === 'scissors' && playMove === 'paper')) {
    console.log(outcomeStatement + 'the computer won!')
  } else {
    console.log(outcomeStatement + 'the player won!')
  }
}

rockPaperScissors()
