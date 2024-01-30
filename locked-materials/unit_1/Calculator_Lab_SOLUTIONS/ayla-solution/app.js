let num1 = ''
let num2 = ''
let operator = ''
let equals = false

$(() => {
  $('.num').on('click', (event) => {
    if (operator === '') {
      num1 += $(event.currentTarget).text()
      console.log(num1)
      $('#output').text(num1)
    } else {
      num2 += $(event.currentTarget).text()
      console.log(num2)
      $('#output').text(num2)
    }
  })

  $('.operator').on('click', (event) => {
    operator = $(event.currentTarget).text()
    console.log(operator)
  })

  $('#equals').on('click', (event) => {
    const showResult = (result) => {
      console.log(result)
      $('#output').text(result)
    }

    if (operator === '+') {
      const result = parseFloat(num1) + parseFloat(num2)
      showResult(result)
    } else if (operator === '-') {
      const result = parseFloat(num1) - parseFloat(num2)
      showResult(result)
    } else if (operator === 'x') {
      const result = parseFloat(num1) * parseFloat(num2)
      showResult(result)
    } else if (operator === '%') {
      const result = parseFloat(num1) / parseFloat(num2)
      showResult(result)
    }
  })

  $('#reset').on('click', () => {
    num1 = ''
    num2 = ''
    operator = ''
    equals = false
    $('#output').text('0')
  })
})
