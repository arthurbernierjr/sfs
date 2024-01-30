$(() => {
  const clickFunction = () => {
    $('.triangle').on('click', (event) => {
      $(event.currentTarget).removeClass('triangle').addClass('circle')

      $('.circle').on('click', (event) => {
        $(event.target).removeClass('circle').addClass('square')

        $('.square').on('click', (event) => {
          $(event.currentTarget).removeClass('square').addClass('triangle-down')

          $('.triangle-down').on('click', (event) => {
            $(event.currentTarget).removeClass('triangle-down').addClass('octagon')

            $('.octagon').on('click', (event) => {
              $(event.currentTarget).removeClass('octagon').addClass('heart')

              $('.heart').on('click', (event) => {
                $(event.currentTarget).removeClass('heart').addClass('triangle')

                clickFunction()
              })
            })
          })
        })
      })
    })
  }

  clickFunction()
})
