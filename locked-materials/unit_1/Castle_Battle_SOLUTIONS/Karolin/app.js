// Global Variables
let computerCastle
let playerCastle
let round = 1

const computerPeonNames = ['Justin Sane', 'Bill Ng', 'Ginger Vitis', 'Al Gore Rythim', 'Homan Provement', 'Anna Graham', 'Daisy Chain', 'Dusty Sandmann', 'Wilma Leggrowbach', 'Abe Rudder', 'Mark Mywords', 'Skip Dover', 'Rosa Shore', 'Rhea Curran', 'Stan Still', 'Clara Nett', 'Lon Moore', 'Walter Melon', 'Howe D. Pardner', 'Shirley U. Jest', 'Marshall Law', 'Mike Czech', 'George Washington Sleptier', 'Harry Pitts', 'Jimmy DeLocke', 'Mary Ann Bright', 'Ray Zenz', 'April Schauer', 'Tanya Hyde', 'Doug Hole', 'Xavier Money', 'Juan Morefore DeRhode', 'Harmon Ikka', 'Carl Arm', 'Sue Permann', 'Tom Katt', 'Liz Onnia', 'Trina Forest', 'Helen Highwater', 'Hal E. Luya', 'Helena Hanbaskett', 'Chuck Roast', 'Phil Graves', 'Faye Kinnitt', 'Neil Down', 'Rhea Pollster', 'Lou Zar', 'Juan Nightstand', 'Hugo First', 'Emerald Stone', 'Buck Ng', 'Oliver Sutton', 'Lynn Meabuck', 'Eddie Bull', 'Estelle Hertz', 'Vlad Tire', 'Ima Lytle Teapot', 'Biff Wellington', 'Rusty Nails', 'Cy Kosis', 'Gene Poole', 'Willie Maykit', 'Gene Poole', 'Hy Price', 'Ilene Left', 'Brighton Early', 'Freida Convict', 'Hal Jalikakick', 'Zoe Mudgett Hertz', 'Sherman Wadd Evver', 'Herb E. Side', 'Carrie Oakey', 'Carl Arm', 'Joe Czarfunee', 'Scott Shawn DeRocks', 'Count Orff', 'Harmon Ikka', 'Lou Dan Obseen', 'Eaton Wright', 'Rocky Mountain', 'Nida Lyte', 'Tanya Hyde', 'Neil Down', 'Terry Bull', 'Kandi Apple', 'Skip Roper', 'Nick O\'Time', 'Misty C. Shore', 'Tad Moore', 'Rhea Pollster', 'Lois Price', 'Cam Payne', 'Dan D. Lyon', 'Ima Klotz', 'Howie Doohan', 'Oliver Sutton', 'Penny Profit', 'Hilda Climb', 'Tad Moore', 'Brandon Irons', 'Winsom Cash', 'Jack Pott', 'Lee Nover', 'Candace Spencer', 'Ilene Dover', 'Annie Matter', 'Mary Ott', 'Annie Matter', 'Alf Abet', 'Therese R. Green', 'Dan D. Lyon', 'Phil DeGrave', 'Ilene Left', 'Kay Mart', 'Rhoda Booke', 'Mitch Again', 'Eli Ondefloor', 'Rick O\'Shea', 'Alec Tricity', 'Haywood Jashootmee', 'Rusty Blades', 'Kenny Dewitt', 'Diane Toluvia', 'Brighton Early', 'Rich Kidd', 'Walter Melon', 'Al O\'Moaney', 'Aaron Thetires', 'Rip Tile', 'Annie Howe', 'Mel Practiss', 'Ann Chovie', 'Stan Still', 'Trina Forest', 'Cheri Pitts', 'Marcus Absent', 'Chris Mass', 'Ann Chovie', 'Faye Tallity', 'Michelle Lynn', 'Eddie Bull', 'Art Major', 'Jan U. Wharry', 'Penny Nichols', 'I. M. Boring', 'June Bugg', 'Doll R. Bill', 'Beau Vine', 'Mike Rohsopht', 'Carson O. Gin', 'Eddie Bull', 'Ilene South', 'Willie Waite', 'Easton West', 'Chris Mass', 'Tate Urtots', 'Ben D. Fender', 'Sawyer B. Hind', 'Emma Royds', 'Lee Nover', 'Liz Onnia', 'Elle O\'Quent', 'Ella Vader', 'Sally Mander', 'Helena Hanbaskett', 'Skip Stone', 'Jerry Atrics', 'Misty Shore', 'Iona Frisbee', 'Rose Gardner', 'Amanda B. Reckonwith', 'Frank N. Sense', 'Stu Pitt', 'Mason Jarr', 'Sal A. Mander', 'Michael Otto Nuys', 'Bea Sting', 'Cammie Sole', 'Seymour Legg', 'Marlon Fisher', 'Kent Cook', 'Therese R. Green', 'Joe Czarfunee', 'Dusty Carr', 'Kent Cook', 'Doris Schutt', 'Annette Curtain', 'Sally Forth', 'Hare Brain', 'Olive Hoyl', 'Max Power', 'Raney Schauer', 'Rusty Irons', 'Scott Shawn DeRocks', 'Sue Flay', 'Doug Hole', 'Annie Moore', 'Des Buratto', 'Patton Down DeHatches', 'Alec Tricity', 'Sue Jeu']

// Game Objects
class Castle {
  constructor (name) {
    this.barrack = new Barrack()
    this.hitpoints = 10
    this.name = name
  }
}

class Barrack {
  constructor () {
    this.peons = []
  }

  createPeon (name, job) {
    this.peons.push(new Peon(name, job))
  }
}

class Peon {
  constructor (name, job) {
    this.name = name
    this.job = job
  }

  work (myCastle, enemyCastle) {
    if (this.job === 'attack') {
      console.log(`${this.name} attacks ${enemyCastle.name}, which is now ${enemyCastle.hitpoints} weak!`)
      enemyCastle.hitpoints -= 1
    } else if (this.job === 'repair') {
      myCastle.hitpoints += 1
      console.log(`${this.name} repairs ${myCastle.name}, which is now ${myCastle.hitpoints} strong!`)
    } else {
      console.log('eh, what? I do not know what to do')
    }
  }
}

// Functionality
const playerRound = () => {
  const choice = prompt('what to do (c)reate peon, (d)eploy peons or (q)uit?').toLowerCase()
  if (choice[0] === 'c') {
    playerPeonCreate()
  } else if (choice[0] === 'd') {
    for (const peon of playerCastle.barrack.peons) {
      peon.work(playerCastle, computerCastle)
    }
  } else if (choice[0] === 'q') {
    // oops type c or
    alert('alright byeeee!')
    return
  } else {
    alert("oops you didn't type c or s or q! Try again!")
    playerRound()
  }
  roundInfo()
  winLoseContinue()
}

const computerRound = () => {
  const battleOption = Math.random()
  const peonName = computerPeonNames[Math.floor(Math.random() * computerPeonNames.length)]
  if (battleOption > 0.84) {
    computerCastle.barrack.createPeon(peonName, 'repair')
  } else if (battleOption > 0.72) {
    computerCastle.barrack.createPeon(peonName, 'attack')
  } else if (battleOption > 0.50 && computerCastle.barrack.peons.length > 0) {
    for (const peon of computerCastle.barrack.peons) {
      peon.work(computerCastle, playerCastle)
    }
  } else {
    console.log('Your enemy\'s peons are refusing to join the mission!')
  }
  roundInfo()
  winLoseContinue()
}

const playerPeonCreate = () => {
  const peonJob = prompt('Please give your peon a job: (a)ttack or (r)epair')
  let peonName = prompt("Please name your peon (if you don't give a name, the peon will be named either Andy or Randy)")

  if (peonJob[0].toLowerCase() === 'r') {
    peonName = peonName || 'Randy'
    playerCastle.barrack.createPeon(peonName, 'repair')
  } else if (peonJob[0].toLowerCase() === 'a') {
    peonName = peonName || 'Andy'
    playerCastle.barrack.createPeon(peonName, 'attack')
  } else {
    console.log('something has gone horribly wrong')
    playerPeonCreate()
  }
}

const roundInfo = () => {
  console.log(`%c Round ${round}:`, 'font-size:32px')
  console.log(`Player Castle has ${playerCastle.hitpoints} hitpoints and the following ${playerCastle.barrack.peons.length}peons: ${playerCastle.barrack.peons.map(p => ` ${p.name}, ${p.job} `).toString()}`)
  console.log(`Computer Castle has ${computerCastle.hitpoints} hitpoints and the following ${computerCastle.barrack.peons.length} peons: ${computerCastle.barrack.peons.map(p => ` ${p.name} : ${p.job} `).toString()}`)
}

const winLoseContinue = () => {
  if (computerCastle.hitpoints <= 0) {
    alert('Player has won!')
    playAgain()
  } else if (playerCastle.hitpoints <= 0) {
    alert('Computer has won!')
    playAgain()
  } else {
    round++
    if (round % 2 !== 0) {
      playerRound()
    } else {
      computerRound()
    }
  }
}

const playAgain = () => {
  const again = prompt('would you like to play again? y/n')
  if (again[0].toLowerCase() === 'y') {
    startNewGame()
  } else {
    alert('I hope to see you around some time')
  }
}

const startNewGame = () => {
  alert('Welcome to Castle Battle, where you are entrenched in an epic battle with a neigboring kingdom! You will have a choice to either create a peon with a name and a job, or to deploy your peons to do your bidding. Your enemy will be doing the same!')
  const yourCastle = prompt('Name your castle')
  round = 0
  computerCastle = new Castle('Skynet')
  playerCastle = new Castle(yourCastle)
  playerRound()
}

startNewGame()
