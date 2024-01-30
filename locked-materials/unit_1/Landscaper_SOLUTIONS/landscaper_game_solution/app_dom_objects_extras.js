// Global Variables
let landscapeButton

// Default Tools
class Tool {
  constructor (name, earnings, purchasePrice) {
    this.name = name
    this.earnings = earnings
    this.purchasePrice = purchasePrice
  }
}

const tools = [
  new Tool('teeth', 1, 0),
  new Tool('rusty scissors', 5, 5),
  new Tool('old-timey push lawnmower', 25, 20),
  new Tool('fancy battery powered lawnmower', 250, 100),
  new Tool('starving students', 250, 500)
]

// player - default values

class Player {
  constructor (money, tool) {
    this.money = money
    this.tool = tool
  }

  resetPlayerData (tools) {
    this.money = 0
    this.tool = tools.shift()
  }

  nextTool (tools) {
    this.tool = tools.shift()
  }
}

const player = new Player(0)
const startGame = () => {
  // initialize a new player
  // automatically give player the new tool
  player.nextTool(tools)
  // alert('the game has started');
  // alerts are annoying - let's use a simple div and update the innerHTML as needed
  message('the game has started')
  renderStore()
}

const message = (str) => {
  const info = document.querySelector('.messages')
  info.innerHTML = `
  <h5>${str}</h5>
  <h6>Current tool: <span> ${player.tool.name}</span></h6>
  <h6>Current earnings: <span>${player.tool.earnings}</span></h6>
  <h6>Player bank account: <span> ${player.money}</span></h6>
  `
  if (player.money >= 1000) {
    document.querySelector('.messages').innerHTML =
    '<h2> You did it! You won!</h2>'
  }
}

const renderStore = () => {
  const store = document.querySelector('.store')
  if (tools.length > 0) {
    store.innerHTML = `
      <h5> Item available for purchase</h5>
      <h6> ${tools[0].name}</h6>
      <h6> Purchase price: ${tools[0].purchasePrice}</h6>
    `
    store.innerHTML += (player.money >= tools[0].purchasePrice) ? '<button class=\'purchase\'> Purchase </button>' : '<p>You can\'t afford this yet</p>'
    const makePurchase = document.querySelector('.purchase')
    if (makePurchase) {
      makePurchase.addEventListener('click', () => {
        player.nextTool(tools)
        player.money -= player.tool.purchasePrice
        renderStore()
        message('You have upgraded!')
      })
    }
  } else {
    store.innerHTML = '<h5> You have purchased all upgrades</h5>'
  }
}

// A function for landscaping
const landscape = () => {
  // start with a simple console log
  // console.log('i am landscaping');
  // every time landscaped need to increase bank account by tool earnings, then update the message
  player.money += player.tool.earnings
  message('You are working hard and making progress')
  renderStore()
}

startGame()
landscapeButton = document.querySelector('.landscape')
landscapeButton.addEventListener('click', landscape)
