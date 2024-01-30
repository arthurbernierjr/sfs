// GLOBAL

const words = [
  'ride',
  'national anthem',
  'money',
  'summertime',
  'sadness',
  'love',
  'cinnamon',
  'California',
  'bartender',
  'flipside',
  'beautiful',
  'problems',
  'blue',
  'velvet',
  'daddy',
  'cherry',
  'cola',
  'cry',
  'Coachella',
  'Florida',
  'brooklyn',
  'baby',
  'freak',
  'free',
  'America',
  'honeymoon',
  'hope',
  'feelings',
  'Lolita',
  'power',
  'glory',
  'sad',
  'girl',
  'religion',
  'cool',
  'bummer',
  'mustang',
  'beach',
  'the greatest',
  'video games',
  'art deco',
  'happiness is a butterfly',
  'lucky ones',
  'music to watch boys to',
  'off to the races',
  'west coast'
]

let guesses = 6
const letters = 'abcdefghijklmnopqrstuvwxyz'
let lettersLeft = letters.split('')
const wrongLetters = []
let letterPlay = ''
// game letters
class Letter {
  constructor (value) {
    this.value = value
    this.hidden = true
    // deal with words that have spaces in them
    if (value === ' ') {
      this.hidden = false
    }
  }

  show () {
    this.hidden = false
  }

  display () {
    return this.hidden ? '_' : this.value
  }
}

// game word + game logic
class Word {
  constructor (word) {
    this.letters = []
    this.getLetters(word)
  }

  // create array of letter objects using Letter class
  getLetters (newWord) {
    for (const letter of newWord) {
      this.letters.push(new Letter(letter))
    }
  }

  isWordFullyGuessed () {
    // if there are no letters hidden then we have a winner!
    if (!this.letters.some(l => l.hidden)) {
      return true
    }
    return false
  }

  // test a letter played, triggered by option selection in browser
  testLetter (playLetter) {
    let letterFound = false
    // iterate over letters in the word
    for (const letter of this.letters) {
      // if there is a match, then set the letter's hidden property to true using the show function
      if (playLetter === letter.value.toLowerCase()) {
        letter.show()
        // set play value (will allow for update number of guesses correctly)
        letterFound = true
      }
    }
    // test if we have a winner

    // regardless of winner, return a value so the number of guesses can be updated correctly
    return { letterFound, wordFullyGuessed: this.isWordFullyGuessed() }
  }

  revealWhenOver () {
    for (const letter of this.letters) {
      letter.show()
    }
  }
}

const chooseWord = words => {
  return new Word(words[Math.floor(Math.random() * words.length)])
}
// start the game on start game button, set the variables, set the word to be guessed
const startGame = () => {
  guesses = 6
  lettersLeft = letters.split('')
  wrongGuesses = []
  // creates a word object to play
  ;(word = chooseWord(words)), (letterplay = '')
  playRound()
}

const playRound = () => {
  console.log(word.letters.map(letter => letter.display() + ' ').join(''))
  askForLetter()
  const { letterFound } = word.testLetter(letterPlay)
  if (letterFound) {
    const index = lettersLeft.findIndex(l => letterPlay === l)
    lettersLeft.splice(index, 1)
  } else {
    guesses--
    const index = lettersLeft.findIndex(l => letterPlay === l)
    wrongLetters.push(letterPlay)
    wrongLetters.sort()
  }
  if (word.isWordFullyGuessed()) {
    alert(
      `You won the word was ${word.letters
        .map(letter => letter.display())
        .join('')}`
    )
  } else if (guesses <= 0) {
    word.revealWhenOver()
    alert(
      `You lost the word was ${word.letters
        .map(letter => letter.display())
        .join('')}`
    )
  } else {
    playRound()
  }
}

const askForLetter = () => {
  letterPlay = prompt(
    `please choose a letter
     remaining letters:
     ${lettersLeft}
     wrong guesses:
     ${wrongLetters}
     remaining guesses:
     ${guesses}
    `
  )[0].toLowerCase()
}

startGame()
