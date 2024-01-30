$(() => {
  $('.button').on('click', (event) => {
    event.preventDefault()
    $('.reports').empty()
    const userInput = $('input[type="text"]').val() || 10
    const borough = $(event.target).attr('id')
    const link = `https://data.cityofnewyork.us/resource/fhrw-4uyv.json?borough=${borough}&agency=NYPD`
    console.log(userInput)
    $.ajax({
      url: link,
      type: 'GET',
      data: {
        $limit: userInput
      }
    }).then((data) => {
      for (let i = 0; i < userInput; i++) {
        const $descriptor = $('<dd>').attr('class', 'descriptor' + [i])
        $('.reports').append($descriptor)
        $descriptor.html('INCIDENT: ' + data[i].descriptor)
        const $policeButton = $('<button>').attr('class', 'policeButton')
        $policeButton.append('Check Police Response')
        $('.reports').append($policeButton)
        const $allPoliceButtons = $('.policeButton')
        const newText = $('<p>')
        newText.append('POLICE RESPONSE: ' + data[i].resolution_description)
        $descriptor.append(newText)
        newText.hide()
        $($allPoliceButtons).eq(i).on('click', (event) => {
          event.preventDefault()
          newText.toggle()
        })
      }
    })
  })
})
