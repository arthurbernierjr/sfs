
// ===============COMBINING DATATYPES ===============

// 1. Create an object, called crayonBox, that has a property that is an array. The array should have the names of some crayons. Log one of the elements of that array.

const crayonBox = {
  colors: ['red', 'orange', 'yellow', 'green', 'blue', 'brown', 'black']
}

// console.log(crayonBox.colors[3]); // green

// 2. Create an object bottle that has a property that is an object: cap. cap can have properties like material: 'metal' or 'plastic', color: blue or white etc. Log one of the properties of that inner object.

const bottle = {
  cap: {
    material: 'plastic',
    color: 'white'
  }
}

// console.log(bottle.cap.material); // plastic

// 3. Create an array called receipt that has at least one object in it. The inner objects should be items that have a name and a price. Log one of the properties of that inner object.

const receipt = [
  {
    name: 'apple',
    price: 2
  }
]

// console.log(receipt[0].name); // apple

// 4. Create an array called apartmentBuilding that has an array as one of its elements, the inner array should be the names of the tenants. Log one of the elements of the inner array.

const apartmentBuilding = [
  ['Arthur', 'Ayla'],
  ['Alex', 'Jerrica']
]

// console.log(apartmentBuilding[1][1]); // Jerrica

// COMBINE OBJECTS, ARRAYS, AND FUNCTIONS MORE THAN ONE LEVEL DEEP ===============

// 1. Create a function knit that returns an object that has the following kinds of properties item: scarf, size : 6ft etc. Log a value of that object (hint: call the function and then call a property on the return value).

const object = {
  item: 'scarf',
  size: '6ft'
}

const knit = (property) => {
  return object[property]
}

// console.log(knit('item')); // scarf

// 2. Create a function crayonSelector that returns an object that has an array (you can reuse your crayonBox object). Log one of the elements of that array.

// using the crayonBox object defined on line 7
const crayonSelector = (index) => {
  return crayonBox.colors[index]
}

// console.log(crayonSelector(1)); // orange

// 3. Create a function powerButton that returns a function called options - options should console.log a simple message like select a song. Call that inner function

const options = () => {
  console.log('select a song')
}

const powerButton = () => {
  return options()
}

// powerButton(); // 'select a song'

// VENDING MACHINE ================

const vendingMachine = {
  snacks: [
    {
      name: 'candybar',
      price: 3
    },
    {
      name: 'chips',
      price: 5
    },
    {
      name: 'gum',
      price: 1
    }
  ],

  vend (input) {
    console.log('vending', vendingMachine.snacks[input])
  }
}

// vendingMachine.vend(1) // {name: 'chips', price 5}

// CALLBACKS ================

const add = (num1, num2) => {
  return num1 + num2
}

const subtract = (num1, num2) => {
  return num1 - num2
}

const multiply = (num1, num2) => {
  return num1 * num2
}

const divide = (num1, num2) => {
  return num1 / num2
}

const calculate = (num1, num2, operates) => {
  return operates(num1, num2)
}

// console.log(calculate(2, 2, multiply));

// Function Definition Placement =================
// Clean up this code, so that it works and has function definitions in the correct place:

// bar();
// const bar = () => {
//     console.log('bar here');
// }
// foo();

// const foo = () => {
//     console.log('foo here');
// }

//  ReferenceError: Cannot access 'bar' before initialization

// const bar = () => {
//     console.log('bar here');
// }
// bar();

// foo();
// const foo = () => {
//     console.log('foo here');
// }

// ReferenceError: Cannot access 'foo' before initialization

// const bar = () => {
//     console.log('bar here');
// }
// bar();

// const foo = () => {
//     console.log('foo here');
// }
// foo();

// Error Reading ===============
// What is meant by the error(s) this produces?

// foo();
// const foo ()=>{
//     console.log('hi');
// }

// SyntaxError: Missing initializer in const declaration
// This error means you're missing the equals sign between foo and ()

// const foo = () => {
//     console.log('hi');
// }
// foo();
