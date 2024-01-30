// Get localStorage items or start as empty array if does not exist

const toBuyItems = localStorage.toBuy && JSON.parse(localStorage.toBuy) || []

const boughtItems = localStorage.bought && JSON.parse(localStorage.bought) || []

const addToLocalStorage = (listName, itemsArr, item) => {
  itemsArr.push(item)
  localStorage.setItem(listName, JSON.stringify(itemsArr))
}

const updateLocalStorage = (listName, itemsArr, index, item) => {
  // console.log(listName, itemsArr, index, item)
  if (item) {
    itemsArr.splice(index, 1, item)
  } else {
    itemsArr.splice(index, 1)
  }
  localStorage.setItem(listName, JSON.stringify(itemsArr))
}

const handleAddSubmit = (event) => {
  event.preventDefault()
  const $inputBox = $('#input-box')
  const item = $inputBox.val()
  $inputBox.val('')
  addToList('to-buy-item', toBuyItems, null, item)
}

const addToList = (listName, itemsArr, index, item, fromLocalStorage) => {
  const classForItem = listName === 'to-buy-item' ? 'to-buy-item' : 'bought-item'
  const classForList = listName === 'to-buy-item' ? 'to-buy-list' : 'bought-list'
  const storageListUpdate = listName === 'to-buy-item' ? 'toBuy' : 'bought'
  const storageListAdd = listName === 'to-buy-item' ? 'bought' : 'toBuy'
  console.log(item, classForItem, true)
  $(classForList).append(makeItemDiv(item, classForItem, true))

  // if not from local storage be sure to add it
  // this function can trigger on page load
  if (!fromLocalStorage) {
    addToLocalStorage(storageListAdd, boughtItems, item)
  }
}

// this function should never load on page load
const removeFromList = (listName, itemsArr, index) => {
  const classForItem = listName === 'to-buy-item' ? 'to-buy-item' : 'bought-item'
  const listToUpdate = listName === 'to-buy-item' ? toBuyItems : boughtItems
  const storageListUpdate = listName === 'to-buy-item' ? 'toBuy' : 'bought'
  updateLocalStorage(storateListUpdate, listToUpdate, index, item)
}

const makeItemDiv = (item, listName, isNew) => {
  const $div = $('<div>')
    .addClass(listName)
    .html('<h3>' + item + '</h3>')

  const buttonText = listName === 'to-buy-item' ? 'Purchase' : 'Remove'
  const itemsArr = listName === 'to-buy-item' ? toBuyItems : boughtItems
  if (listName === 'bought-item') {
    const $backToBuy = $('<i>')
      .addClass('far fa-hand-point-left')
      .appendTo($div)
      .on('click', () => {
        // on click remove from to buy
        // add to bought list
      })
  }

  const $button = $('<button>')
    .text(buttonText)
    .on('click', (event) => {
      // remove from current list
      const index = $(event.currentTarget).parent().index()
      if (buttonText === 'to-buy-item') {
        addToList('boughtItem', itemsArr, null, item, fromLocalStorage).appendTo($('.boughtList'))
        removeFromList(listName, itemsArr, index, null, fromLocalStorage)
      } else {
        addToList(listName, itemsArr, index, null, fromLocalStorage)
        removeFromList('boughtItem', itemsArr, null, item, fromLocalStorage)
      }
    })
    // append to div
    .appendTo($div)

  const $editIcon = $('<i>')
    .addClass('far fa-edit')
    .appendTo($div)
    .on('click', flipToEdit)

  return $div
}

const moveToBuy = () => {

}
// const moveToBought = (event) => {
//   // two prevs is back button
//   const item = $(event.currentTarget).prev().text()
//   const index = $(event.currentTarget).parent().index()
//   updateLocalStorage('toBuy', boughtItems, index )
//   addToLocalStorage('bought', boughtItems, item)
//   $(event.currentTarget).parent().remove()
//   makeItemDiv(item, 'bought')
// }
const removeBought = () => {

}
const removeItem = () => {
  $(event.currentTarget).parent().remove()
  const index = boughtItems.indexOf($(event.currentTarget).prev().text())
  const item = $(event.currentTarget).prev().text()
  updateLocalStorage('bought', boughtItems, index)
}

const flipToEdit = () => {}

const moveBought = () => {

}
$(() => {
  $('form').on('submit', handleAddSubmit)
  // item cannot be empty string/null/undefined or else bugs!
  let i = 0
  for (item of toBuyItems) {
    if (item) {
      console.log('start me up')
      addToList('to-buy-item', toBuyItems, i, item, true)
      i++
    }
  }
  let j = 0
  for (item of boughtItems) {
  // item cannot be empty string/null/undefined or else bugs!
    if (item) {
      addToList('bought-item', boughtItems, j, item, true)
      j++
    }
  }
})
