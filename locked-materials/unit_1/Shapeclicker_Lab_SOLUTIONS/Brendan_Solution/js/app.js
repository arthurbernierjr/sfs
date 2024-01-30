$(() => {
  const shapes = ['triangle', 'circle', 'square', 'triangle-down', 'octagon', 'heart']

  let index = 1

  const $shapes = $('.row > div')

  $shapes.on('click', () => {
    if (index >= shapes.length) {
      index = 0
    }

    $(event.target).removeClass().addClass(shapes[index])

    index++
  })

  $shapes.on('mouseenter', () => {
    const $className = $(event.target).attr('class')
    console.log($className)
    if ($className === 'triangle') {
      $(event.target).addClass('triangle-color-change')
    } else if ($className === 'circle') {
      $(event.target).addClass('circle-color-change')
    } else if ($className === 'square') {
      $(event.target).addClass('square-color-change')
    } else if ($className === 'triangle-down') {
      $(event.target).addClass('triangle-down-color-change')
    } else if ($className === 'octagon') {
      $(event.target).addClass('octagon-color-change')
    } else if ($className === 'heart') {
      $(event.target).addClass('heart-color-change')
    }
  })
})
