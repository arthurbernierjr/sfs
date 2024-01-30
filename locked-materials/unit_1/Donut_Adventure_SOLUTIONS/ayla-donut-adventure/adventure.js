console.log('dougie the donut')
// =============================

// =============== create a hero class ===============
class Hero {
  constructor (name) {
    this.name = name
    this.health = 100
    this.weapons = {
      sprinkleSpray: 5,
      sugarShock: 10
    }
    this.catchPhrases = ['I\'m fresher than day old pizza', 'You can\'t count my calories']
  }

  randomInt (array) {
    // return Math.floor(Math.random() * this.catchPhrases.length);
    return Math.floor(Math.random() * array.length)
  }

  talkSass () {
    // console.log(`${this.name} says: ${this.catchPhrases[this.randomInt()]}`);
    console.log(`${this.name} says: ${this.catchPhrases[this.randomInt(this.catchPhrases)]}`)
  }

  announceHealth () {
    console.log(`${this.name}'s current health is ${this.health}`)
  }

  randomWeapon () {
    return this.weapons[this.randomInt(this.weapons)]
  }

  fight (enemy) {
    console.log(`${this.name} says: I'm ready to rumble`)
    // create an array of the weapon names (keys from this.weapons)
    const weaponOptions = Object.keys(this.weapons)
    // select a random weapon from the weaponOptions array
    const selectWeapon = weaponOptions[this.randomInt(weaponOptions)]

    // log the selected weapon and it's hitpoints
    // console.log(`${this.name} used ${selectWeapon} for ${this.weapons[selectWeapon]} hitpoints`);

    // log the selected weapon, it's hit points, and the enemy's name
    console.log(`${this.name} used ${selectWeapon} and hit ${enemy.name} for ${this.weapons[selectWeapon]} hitpoints`)

    // subtract hitpoints from enemy's health
    enemy.health -= this.weapons[selectWeapon]
  }
}

// =============== instantiate our hero: Dougie the Donut ===============
const dougie = new Hero('Dougie')
console.log(dougie)

// =============== create an enemy class ===============
class Enemy {
  constructor (name) {
    this.name = name
    this.health = 100
    this.weapons = {
      pepperoniStars: 5,
      cheeseGrease: 10
    }
    this.catchPhrases = [
      'I\'m youtube famous', 'I\'m more dangerous than an uncovered sewer'
    ]
  }

  randomInt (array) {
    // return Math.floor(Math.random() * this.catchPhrases.length);
    return Math.floor(Math.random() * array.length)
  }

  talkSmack () {
    // console.log(`${this.name} says: ${this.catchPhrases[this.randomInt()]}`);
    console.log(`${this.name} says: ${this.catchPhrases[this.randomInt(this.catchPhrases)]}`)
  }

  announceHealth () {
    console.log(`${this.name}'s current health is ${this.health}`)
  }

  randomWeapon () {
    return this.weapons[this.randomInt(this.weapons)]
  }

  fight (enemy) {
    console.log(`${this.name} says: I'm gonna flatten you like a slice of pepperoni!`)
    // create an array of the weapon names (keys from this.weapons)
    const weaponOptions = Object.keys(this.weapons)
    // select a random weapon from the weaponOptions array
    const selectWeapon = weaponOptions[this.randomInt(weaponOptions)]

    // log the selected weapon and it's hitpoints
    // console.log(`${this.name} used ${selectWeapon} for ${this.weapons[selectWeapon]} hitpoints`);

    // log the selected weapon, it's hit points and the enemy's name
    console.log(`${this.name} used ${selectWeapon} and hit ${enemy.name} for ${this.weapons[selectWeapon]} hitpoints`)

    // subtract hitpoints from enemy's health
    enemy.health -= this.weapons[selectWeapon]
  }
}

// =============== instantiate our enemy: Pizza Rat ===============
const pizzaRat = new Enemy('Pizza Rat')
console.log(pizzaRat)

// =============== write the story of Dougie and Pizza Rat ===============

// have Dougie talkSass
dougie.talkSass()

// have Pizza Rat talkSmack
pizzaRat.talkSmack()

// have Dougie announceHealth
dougie.announceHealth()

// have Pizza Rat announceHealth
pizzaRat.announceHealth()

//= ============== fight ===============
dougie.fight(pizzaRat)
pizzaRat.fight(dougie)

dougie.announceHealth()
pizzaRat.announceHealth()
