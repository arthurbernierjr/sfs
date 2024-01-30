$(() => {
  // GIVEN TODOS ARRAY - DO NOT ERASE!
  const givenToDos = [
    'buy some sand',
    'comb the unicorn',
    'brush my fang',
    'water the hardwoods'
  ]
  // ================================
  // EVENT HANDLERS
  // ================================
  const removeTodo = (e) => {
    // remove the todo from the dom
    $(e.currentTarget).parent().remove()
  }

  const completeTodo = (e) => {
    // move the todo item to the completed list
    $(e.currentTarget).parent().css('background-color', '#ED6495').attr('class', 'done-item').appendTo('#completed')
    // change the button text to REMOVE
    $(e.currentTarget).text('REMOVE').attr('class', 'remove-item').on('click', removeTodo)
  }

  // ================================
  // HELPER METHOD
  // ================================
  // create a new todo item
  const createTodo = (todoText) => {
    // create the todo div with a class of to-do-item
    const $newTodo = $('<div>').addClass('to-do-item').text(todoText)
    // create a "COMPLETED" button onto the todo item
    $completedButton = $('<button>').addClass('completed-button').text('COMPLETED')
    // add an event listener to the completed button
    $completedButton.on('click', completeTodo)
    // append the button
    $newTodo.append($completedButton)
    // append the newTodo to the to-do-list
    $('#to-do-list').append($newTodo)
  }

  // ================================
  // PART ONE: ADD GIVEN DATA TO LIST
  // ================================
  // loop through the given todos array and append each one to the toDoList
  givenToDos.forEach(todo => {
    createTodo(todo)
  })

  // ================================
  // PART TWO: HANDLING USER INPUT
  // ================================
  // event listener and handler for "ADD" button
  $('#submit').on('click', (e) => {
    // prevent default form behavior that refreshes the page
    e.preventDefault()
    // create the new todo using the user input
    createTodo($('#input-box').val())
    // reset the input box
    $('#input-box').val('')
  })
})
