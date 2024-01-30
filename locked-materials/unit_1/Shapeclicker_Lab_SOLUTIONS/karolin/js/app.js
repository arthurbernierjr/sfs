/* global $:true */

// ///////////////////////////////////////////////////////
// Original interpretation of instructions
// ///////////////////////////////////////////////////////

// any shape becomes any shape order of clicks is what matters

// const shapes = ['triangle', 'circle', 'square', 'triangle-down', 'octagon', 'heart']
//
// let current = 1
//
// const pickShape = () => {
//   if (current > shapes.length - 1) {
//     current = 0
//     return current
//   } else {
//     return current++
//   }
// }
//
// const changeShape = event => {
//   const $currentShape = $(event.currentTarget)
//   $currentShape.removeClass().addClass(shapes[pickShape()])
// }
//
// $(() => {
//   $('.row').children().on('click', changeShape)
// })

// ///////////////////////////////////////////////////////
// Alternate interpretation of instructions
// ///////////////////////////////////////////////////////

// triangles always become circles, circles always become squares etc

const shapes = ['triangle', 'circle', 'square', 'triangle-down', 'octagon', 'heart']

const changeShape = event => {
  const $currentShape = $(event.currentTarget)
  // Hungry for more attempt
  // $currentShape.removeAttr('style')
  const currentClass = $currentShape.attr('class')
  let currentIndex = shapes.findIndex(c => c === currentClass)
  if (currentIndex === shapes.length - 1) {
    currentIndex = 0
  } else {
    currentIndex++
  }
  $currentShape.removeClass().addClass(shapes[currentIndex])
}

// $(() => {
//   $('.row')
//     .children()
//     .on('click', changeShape)
// })

// ///////////////////////////////////////////////////////
// HFM incomplete
// ///////////////////////////////////////////////////////
// let red = 255
// let green = 0
// let blue = 0
//
// const borderProperties = `100px solid(${red}, ${green}, ${blue})`

const changeColor = event => {
  const $thisShape = $(event.currentTarget)
  const bBorder = $thisShape.css('border-bottom')
  const tBorder = $thisShape.css('border-top')
  const background = $thisShape.css('background-color')
  console.log(tBorder)
  if (background === 'rgb(255, 0, 0)') {
    console.log('change background')
    $thisShape.css('background-color', 'black')
  }
  if (bBorder.slice(6) === 'solid rgb(255, 0, 0)') {
    console.log('change border bottom')
    $thisShape.css('border-bottom', '100px solid black')
  }
  if (tBorder.slice(6) === 'solid rgb(255, 0, 0)') {
    console.log('change border top')
    $thisShape.css('border-top', '100px solid black')
  }
}

const revertColor = event => {
  $(event.currentTarget).removeAttr('style')
}

$(() => {
  $('.row')
    .children()
    .on('click', changeShape)
    .on('mouseenter', changeColor)
    .on('mouseleave', revertColor)
})
