// wait until web page loads
$(() => {
  $('form').on('submit', addToBuy)
}) // closing document on ready

// get the value and display it on the page
const addToBuy = () => {
  // grab the element
  event.preventDefault()
  const $inputBox = $('#input-box')
  // get the value store in a variable - just text not a jQuery element
  const toBuy = $inputBox.val()
  // change the value to an empty string to make it clear
  $inputBox.val('')
  // make a div
  const $div = $('<div>')
    // add the class of to-buy-item
    .addClass('to-buy-item')
    // inside the div add an h3 with the text of our toBuy
    .html('<h3>' + toBuy + '</h3>')

  // append the div
  $('.to-buy-list').append($div)

  // add a button to our div
  const $button = $('<button>')
    // text say 'completed'
    .text('Complete')
    // add an event listner
    .on('click', moveToBuy)
    // append to div
    .appendTo($div)
}

// move to do div to completed
const moveToBuy = () => {
  // get the parent of the button we clicked on
  const $toDoDiv = $(event.currentTarget).parent()

  $toDoDiv
    // remove the class of to-buy-item
    .removeClass('to-buy-item')
    // add the class of bought-item
    .addClass('bought-item')
    // detach from current container and append to completed div (appendTo does both detach and append! Hooray!)
    .appendTo($('.bought'))
    // target the children of this div
    .children()
    // access the button
    .eq(1)
    // change the text from complete to remove
    .text('REMOVE')
    // add event listner to this button
    .on('click', removeToBuy)
}

// remove the to do from the page entirely
const removeToBuy = () => {
  // target the clicked button's parent and remove it
  $(event.currentTarget).parent().remove()
}
