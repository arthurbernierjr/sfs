let input = ''
let value1 = 0
let value2 = 0
let whichVal = true

$(() => {
  $('.action').on('click', (event) => {
    const operator = $(event.currentTarget).text()
    value1 = parseInt(input)
    input = ''
    $('#output').text(operator)
    whichVal = !whichVal
    console.log(operator, value1, value2)
  })

  $('.num').on('click', (event) => {
    input += $(event.currentTarget).text()
    console.log(input) // all strings
    $('#output').text(input)
  })

  $('#equals').on('click', (event) => {
    value2 = parseInt(input)
    input = ''
    const sum = value1 + value2
    $('#output').text(sum)
    // need to deal with our operation
    // right now it is always summed
  })
})
