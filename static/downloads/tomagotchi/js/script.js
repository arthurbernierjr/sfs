/* ======================
Tamagotchi
========================= */

// 1. Make a Modal
// - Make a modal that provide information about the game
// - The modal should appear when the page loads and have a button on it that begins the game
// - When the user clicks start game the modal should disappear and the Tamagotchi should appear

// 2. Make a Carousel
// - Allow the user to choose a background from a carousel of images
// - When the user selects that image, apply it to the background of the page

// 3. Make a Tamagotchi Class
// - The Tamagotchi should have the following properties: name, hunger, sleepiness, boredom, age
// - The Tamagotchi should have the following methods: eat, sleep, play
// - Your pet should morph to a teenager at 5 years old and an adult at 10 years old
// - Your pet should die if hunger, boredom or sleepiness hits 10
// - Your Tamagotchi should append itself to the dom

/* ======================
CACHED DOM NOTES
========================= */

const body = document.querySelector('body')
const modal = document.querySelector('.modal')
const carousel = document.querySelector('.carousel')
const getStarted = document.querySelector('.get-started')
const TamagotchiHome = document.querySelector('#Tamagotchi-home')
const carouselImg = document.querySelector('.carousel img')
const next = document.querySelector('.carousel .next')
const previous = document.querySelector('.carousel .previous')
const select = document.querySelector('.carousel .select')
const feed = document.querySelector('.feed')
const sleep = document.querySelector('.sleep')
const play = document.querySelector('.play')

/* ======================
CREATE Tamagotchi
========================= */

class Tamagotchi {
  constructor (name, hunger = 0, sleepiness = 0, boredom = 0, age = 0) {
    this.name = name
    this.hunger = hunger
    this.sleepiness = sleepiness
    this.boredom = boredom
    this.age = age
    this.image = {
      child: 'http://img1.wikia.nocookie.net/__cb20130917064458/tamagotchi/images/thumb/d/d5/Tsubutchi.PNG/500px-Tsubutchi.PNG',
      teen: 'https://vignette.wikia.nocookie.net/tamagotchi/images/8/8e/Kuribotchi-Child_Channel_Found_Artwork_Pose1.png/revision/latest?cb=20191027162030',
      adult: 'https://i.pinimg.com/originals/69/78/9c/69789c579049af430702a54ccb98dbae.png'
    }
  }

  checkStats () {
    if (this.age === 1) this.updateImage('child')
    if (this.age === 3) this.updateImage('teen')
    if (this.age === 5) this.updateImage('adult')
    if (this.hunger > 10 || this.sleepiness > 10 || this.boredom > 10) {
      body.innerHTML = `
            <h3>Oh no you let your poor friend die.
            Refresh the page to hatch a new one, or maybe not since you let your last one die.</h3>`
    }
  }

  feed () {
    this.hunger--
    this.checkStats()
    this.updateStatsOnDom()
  }

  sleep () {
    this.sleepiness--
    this.checkStats()
    this.updateStatsOnDom()
  }

  play () {
    this.boredom--
    this.checkStats()
    this.updateStatsOnDom()
  }

  birth () {
    const div = document.createElement('div')
    div.innerHTML = `
            <div class='general-container'>
                <div class='shadow'></div>
                <div class='egg'>
                    <div class='spots'></div>
                </div>
            </div>
        `
    return div
  }

  updateImage (age) {
    const container = document.querySelector('.general-container')
    container.innerHTML = `
        <div class='shadow'></div>
                <div class='bodyImg'>
                    <img src="${this.image[age]}"/>
                </div>
        `
  }

  updateStatsOnDom () {
    const container = document.querySelector('.life-stats')
    container.innerHTML = `
        <div class="hunger btn">
            Hunger: <span>${this.hunger}</span>
        </div>
        <div class="sleepiness btn">
            Sleepiness: <span>${this.sleepiness}</span>
        </div>
        <div class="boredom btn">
            Bordeom: <span>${this.boredom}</span>
        </div>
        <div class="age btn">
            Age: <span>${this.age}</span>
        </div>
        `
    this.checkStats()
  }

  startCounters () {
    setInterval(() => {
      this.age++
      this.updateStatsOnDom()
    }, 10000)
    setInterval(() => {
      this.hunger++
      this.updateStatsOnDom()
    }, 4000)
    setInterval(() => {
      this.sleepiness++
      this.updateStatsOnDom()
    }, 7500)
    setInterval(() => {
      this.boredom++
      this.updateStatsOnDom()
    }, 6000)
  }

  appendToDom (container) {
    const domNode = this.birth()
    this.updateStatsOnDom()
    this.startCounters()
    container.appendChild(domNode)
  }
}

const firstPet = new Tamagotchi('Yoshi')

/* ======================
GLOBAL VARS
========================= */

const backgroundImage = [
  'https://i.imgur.com/Ksuzqbm.jpg',
  'https://i.imgur.com/lTcdkRk.jpg',
  'https://i.imgur.com/ETtvIfN.jpg'
]

let currentSlide = 0

/* =============================
FUNCTIONS
============================= */

const toggleModal = () => modal.classList.toggle('open')

const changeSlide = (direction) => {
  if (direction === 'next') {
    if (currentSlide < backgroundImage.length - 1) {
      currentSlide++
    } else {
      currentSlide = 0
    }
  } else if (direction === 'previous') {
    if (currentSlide > 0) {
      currentSlide--
    } else {
      currentSlide = backgroundImage.length - 1
    }
  }
  carouselImg.setAttribute('src', backgroundImage[currentSlide])
}

const openCarousel = () => {
  carousel.classList.add('open')
  carouselImg.setAttribute('src', backgroundImage[currentSlide])
  toggleModal()
}

const selectBackground = () => {
  carousel.classList.remove('open')
  body.style.backgroundImage = `url(${backgroundImage[currentSlide]})`
  birth()
}

// Tamagotchi LIFE
const birth = () => {
  firstPet.appendToDom(TamagotchiHome)
}

const feedPet = () => firstPet.feed()

const putPetSleep = () => firstPet.sleep()

const playPet = () => firstPet.play()

const startGame = () => {
  toggleModal()
}

/* =============================
EVENT LISTENERS
============================= */
getStarted.addEventListener('click', openCarousel)
next.addEventListener('click', () => changeSlide('next'))
previous.addEventListener('click', () => changeSlide('previous'))
select.addEventListener('click', selectBackground)
feed.addEventListener('click', feedPet)
sleep.addEventListener('click', putPetSleep)
play.addEventListener('click', playPet)

// window.onload = () => {
//     startGame();
// }
setTimeout(startGame, 500)
