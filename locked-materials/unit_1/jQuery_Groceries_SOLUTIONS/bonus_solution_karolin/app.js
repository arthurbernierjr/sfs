// wait until web page loads

const toBuyitems = localStorage.toBuy && JSON.parse(localStorage.toBuy) || []

const boughtItems = localStorage.bought && JSON.parse(localStorage.bought) || []

let isEditing = false

$(() => {
  $('form').on('submit', addToBuy)
  // item cannot be empty string/null/undefined or else bugs!
  for (item of toBuyitems) {
    if (item) {
      addToBuy(event, item)
    }
  }
  for (item of boughtItems) {
  // item cannot be empty string/null/undefined or else bugs!
    if (item) {
      localStorageBought(event, item)
    }
  }
}) // closing document on ready

// get the value and display it on the page

const addToBuy = (event, lSItem) => {
  // grab the element
  !lSItem && event && event.preventDefault()
  const $inputBox = $('#input-box')
  // get the value store in a variable - just text not a jQuery element
  const toBuy = lSItem || $inputBox.val()
  // change the value to an empty string to make it clear
  $inputBox.val('')
  // make a div
  // append the div
  $('.to-buy-list').append(makeItemDiv(toBuy, 'to-buy-item'))
  // deal with local storage
  if (!lSItem) {
    addToLocalStorage('toBuy', toBuyitems, toBuy)
  }
}

const makeItemDiv = (toBuy, list) => {
  const $div = $('<div>')
    // add the class of to-buy-item
    .addClass(list)
    // inside the div add an h3 with the text of our toBuy
    .html('<h3>' + toBuy + '</h3>')
  // add a button to our div\

  const buttonText = list === 'to-buy-item' ? 'Purchase' : 'Remove'
  const actionFunc = list === 'to-buy-item' ? moveToBuy : removeBought
  const $button = $('<button>')
    // text say 'completed'
    .text(buttonText)
    // add an event listner
    .on('click', actionFunc)
    // append to div
    .appendTo($div)

  const $editIcon = $('<i>')
    .addClass('far fa-edit')
    .appendTo($div)
    .on('click', flipToEdit)

  return $div
}

const flipToEdit = (event) => {
  const $div = $(event.currentTarget).parent()
  const index = $div.index()
  item = $div.children().eq(0).text()
  $div.empty()
  const $form = makeEditForm()
  $form.children().eq(1).val(item)
  $div.append($form)
  isEditing = true
}

const localStorageBought = (e, boughtItem) => {
  $('.bought').append(makeItemDiv(boughtItem, 'bought-item'))
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
    .on('click', removeBought)
    // deal with Local Storage

  // local storage, udate array replace it with new array
  const item = $(event.currentTarget).prev().text()
  const index = toBuyitems.indexOf($(event.currentTarget).prev().text())

  addToLocalStorage('bought', boughtItems, item)
  updateLocalStorage('toBuy', toBuyitems, index)
}

// remove the to do from the page entirely
const removeBought = () => {
  // target the clicked button's parent and remove it
  $(event.currentTarget).parent().remove()
  console.log('remove to buy')
  const index = boughtItems.indexOf($(event.currentTarget).prev().text())
  const item = $(event.currentTarget).prev().text()
  updateLocalStorage('bought', boughtItems, index)
}

const addToLocalStorage = (listName, itemsArr, item) => {
  itemsArr.push(item)
  localStorage.setItem(listName, JSON.stringify(itemsArr))
}

const updateLocalStorage = (listName, itemsArr, index, item) => {
  console.log(listName, itemsArr, index, item)
  if (item) {
    letitemsArr.splice(index, 1, item)
    console.log('elsy')
  } else {
    itemsArr.splice(index, 1)
  }
  console.log('dis iz now', listName, itemsArr)
  // update local storage to new array
  localStorage.setItem(listName, JSON.stringify(itemsArr))
}

const makeEditForm = (editItem, thisDiv) => {
  const $form = $('<form>')
  const $label = $('<label>')
    .attr('for', 'edit-input')
  const $input = $('<input>')
    .attr('id', 'edit-input')
    .attr('type', 'text')
    .attr('required', true)
    .val(editItem)
  const $button = $('<button>')
    .attr('type', 'submit')
    .attr('id', 'edit-submit')
    .text('edit')
  $form
    .append($label, $input, $button)
    .on('submit', (event) => {
      event.preventDefault()
      // which list
      const $editInput = $('#edit-input')

      listClass = $(event.currentTarget).parent().attr('class')

      const item = $editInput.val()
      const index = $editInput.parent().parent().index()
      $(event.currentTarget).parent().replaceWith(makeItemDiv(item, listClass))
      console.log(index)
      isEditing = false
      // to-buy or bought
      if (listClass === 'to-buy-item') {
        console.log(item, index)
        updateLocalStorage('toBuy', toBuyitems, index, item)
      } else {
        updateLocalStorage('bought', boughtItems, index, item)
      }
    })
  return $form
}
