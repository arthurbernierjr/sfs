// if (typeof jQuery == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file!')};

$(() => {
  //  YEAR 1 ===============
  const $container = $('#container')
  // console.log($container);
  const $h1 = $('<h1>')
  // console.log($h1);
  $h1.text('Hogwarts')
  $($container).append($h1)

  // YEAR 2 ===============
  $('<h2>').text('Ayla').appendTo($container)
  $('<h3>').text('Hufflepuff').appendTo($container)
  $('<h4>').text('Emilie').addClass('cat').appendTo($container)
  $('<h4>').text('Holly Wand with Unicorn Hair Core').appendTo($container)

  // YEAR 3 ===============
  const $ul = $('<ul>').attr('storage', 'trunk')
  $('<li>').text('butter beer').appendTo($ul)
  $('<li>').text('invisibility cloak').addClass('secret').appendTo($ul)
  $('<li>').text('magic map').addClass('secret').appendTo($ul)
  $('<li>').text('time turner').addClass('secret').appendTo($ul)
  $('<li>').text('leash').addClass('cat').appendTo($ul)
  $('<li>').text('Bertie Bott\'s Every Flavor Beans').appendTo($ul)
  $($ul).appendTo($container)

  // YEAR 4 ===============
  $('<h5>').text('Spring 2017').appendTo($container)
  //  table =====
  const $table = $('<table>')
  $container.append($table)
  // thead =====
  const $thead = $('<thead>')
  $table.append($thead)
  $('<th>').text('Day').appendTo($thead)
  $('<th>').text('Classes').appendTo($thead)
  // table rows =====
  $table.append($('<tr>').append($('<td>').text('Monday')).append($('<td>').text('Herbology')))
  $table.append($('<tr>').append($('<td>').text('Tuesday')).append($('<td>').text('Divination')))
  $table.append($('<tr>').append($('<td>').text('Wednesday')).append($('<td>').text('History of Magic')))
  $table.append($('<tr>').append($('<td>').text('Thursday')).append($('<td>').text('Charms')))
  $table.append($('<tr>').append($('<td>').text('Friday')).append($('<td>').text('Potions')))

  //  YEAR 5 ===============
  $('h4').eq(1).remove()
  $('li').eq(0).remove()
  $('h4').after($('<h4>').text('Rosewood Wand with Warg Hair Core').css('color', 'indigo'))
  $('h4.cat').appendTo($container)
  $('h4').eq(0).before($('h4.cat'))

  //  YEAR 6 ===============
  $('.secret').hide('slow').delay('2000').show('slow')
  $('li.cat').addClass('cabbage')
  $('li.cat').removeClass('cabbage')

  //  YEAR 7 ===============
  $('h5').text('Fall 2018')
  $('ul').prepend($('<li>').text('Butter Beer'))
  $('ul').attr('storage', 'chest')
})
