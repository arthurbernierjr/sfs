$(() => {
  // dom elements
  $boroughBtn = $('.borough-btn')
  $limitInput = $('.limit-input')

  // event handlers
  const togglePoliceResponse = (e) => {
    $(e.currentTarget).siblings().eq(0).toggle()
  }

  // helper methods
  // makes the get request to open nyc data based on the borough and how many (limit) the user wants
  const ajaxCall = (borough, limit) => {
    $.ajax({
      url: `https://data.cityofnewyork.us/resource/fhrw-4uyv.json?agency=NYPD&borough=${borough}`,
      type: 'GET',
      data: {
        $limit: limit
      }
    }).then(
      (data) => {
        console.log(data)
        const $complaintList = $('<ul>')
        // loop through all the data (the complaints)
        data.forEach((complaint) => {
          // making the complaint a list item
          const $li = $('<li>').text(complaint.descriptor)

          // adding the police response toggle button onto the complaint
          const $policeToggle = $('<button>').text('what did the police do?')
          $policeToggle.on('click', togglePoliceResponse)
          $li.append($policeToggle)

          // adding the police response
          const $policeResponse = $('<p>').addClass('police-response').text(complaint.resolution_description)
          $li.append($policeResponse)

          // appending the li to the ul
          $complaintList.append($li)
        })
        // once all the data is created as list items, add the complaint list onto the empty output div on the index
        $('.output').html($complaintList)
      },
      (err) => {
        // if there's an error from the get request, log it
        console.log(err)
      }
    )
  }

  // event handlers
  // find complaints when the user enters a number and clicks on a button
  const setBorough = (e) => {
    // set borough to button they clicked on
    const borough = e.currentTarget.innerText.toUpperCase()
    // set limit to whatever's inside the input form, if none, default to 10
    let limit = ''
    $inputVal = $limitInput.val()
    if ($inputVal === '') {
      limit = 10
    } else {
      limit = $limitInput.val()
    }
    // call on the ajaxCall method to make the actual ajax request to open nyc data
    ajaxCall(borough, limit)
  }

  // event listeners
  // borough buttons
  $boroughBtn.on('click', setBorough)
})
