# Lesson: Understanding Arrow Functions, Callbacks, and Async in JavaScript then applying it / reviewing it with fruits.

---

## 1. Arrow Functions
### Definition and Syntax
- **Arrow functions** are a concise way to write functions in JavaScript.
- Syntax: `const functionName = (parameters) => { body }`
- No `function` keyword needed.

### When to Use
- For short, single-operation functions.
- When `this` keyword needs to reference the surrounding scope, not the function itself.

### When Not to Use
- Not ideal for methods in objects if you need to access other properties via `this`.
- Cannot be used as constructors.

### Example
```javascript
const add = (a, b) => a + b
```

##### Arrow functions have a more terse syntax than regular functions (`function` keyword):

```js
// regular function
let squares = [1, 2, 3].map(function (x) { return x * x })
// arrow function
let squares = [1, 2, 3].map(x => x * x)
```

##### A single parameter need not be wrapped in parens:

```js
x => { ... }  // one parameter
() => { ... }  // no parameters
(x, y) => { ... }  // two or more parameters
```

However, even though we can skip wrapping a single parameter with parens, many style guides recommend using them anyway:

```js
(x) => { ... }  // one parameter
```

##### The statement block of an arrow function behaves just like that of a regular function:

```js
const getGrade = (score) => {
  if (score === 100) return 'A+'
  score = Math.floor(score / 10)
  return ['F', 'F', 'F', 'F', 'F', 'F', 'D', 'C', 'B', 'A'][score]
}
```

##### If there's only a single **expression** (not a statement), curly braces are optional:

```js
const logThis = () => { console.log(this) }
const logThis = () => console.log(this)
```

##### Arrow functions will implicitly return the result of an **expression** without a block (braces):

```js
const add = (x, y) => { return x + y }

// Ideal single-statement arrow function
const add = (x, y) => x + y

// Returns undefined (blocks are like reg functions)
const add = (x, y) => { x + y }

// Syntax error, must be an expression
const add = (x, y) => return x + y
```

##### To implicitly return a JS object, wrap it in parens to avoid the curly braces of the object being interpreted as a statement block:

```js
let todos = ['Buy milk', 'Mow lawn']

// Below line of code won't work - looks like a statement block
// let todoObjects = todos.map(todo => {todo: todo, done: false})

// Wrap the implicit returned object in parens
let todoObjects = todos.map((todo) => ({todo: todo, done: false}))
```

##### All arrow functions are expressions.  There's no such thing as an arrow function definition/declaration.

```js
// Nope, syntax error (no declarations for arrow functions)
add(x, y) => x + y

// This is what you want - a function expression
const add = (x, y) => x + y
```

##### Arrow functions do not have an `arguments` "array-like" object:

```js
function checkArgs() { console.log(arguments) }
checkArgs(1, 'abc') // outputs [1, "abc"]

const checkArgs = () => console.log(arguments)
checkArgs(1, 'abc') // outputs Uncaught ReferenceError: arguments is not defined
```

##### `this` Keyword Binding

`this` in an arrow function is always set to the same _context_ value as its enclosing function (or the global object if not within a function).

```js
const userRoom = {
  users: [],
  loadUsers: function() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      // below will work
      .then((users) => {
        this.users = users
      })
      // below will not work
      // .then(function(users) {
      //   this.users = users
      // })
  }
}
```

> Due to security policy, test the above code in a tab browsed to if you want to see it actually run [https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/).
  
Note that it's not possible to **explicitly set** `this` in an arrow-function using the `call`, `apply` or `bind` methods.

#### Because of the binding rules of `this` in arrow functions, **do not** use arrow functions for:

- Methods in objects that need to access other properties within the object.

  For example, this works as expected:
 
	```js
	const ticket = {
	  airlines: 'Air SEI',
	  flight: '0116',
	  seat: 'C19',
	  print: function() {
	    console.log(`${this.airlines}: flight ${this.flight} / seat ${this.seat}`)
	  }
	}
	```
	
	But the following doesn't because `this` within the `print` method is bound to window or undefined (in strict mode):
	
	```js
	const ticket = {
	  airlines: 'Air SEI',
	  flight: '0116',
	  seat: 'C19',
	  print: () => {
	    console.log(`${this.airlines}: flight ${this.flight} / seat ${this.seat}`)
	  }
	}
	```

- Constructor functions also are not a use case for arrow functions because they do not allow JS to set `this` to the shiny new object being created.


---

## 2. What's a Callback Function?
### Definition
- A **callback function** is a function passed into another function as an argument.

### Identification
- Often used in asynchronous operations.
- Can be identified as parameters in function calls.

### Example
```javascript
const logResult = (result) => console.log(result)
```

**A callback function is a function that's passed to another function as an argument.**


```js
function higherOrderFunction(callbackFunction) {
  // Sooner or later...
  callbackFunction()
}
```

A bit more vocabulary... A function that **accepts** a function as input and/or returns a function is known as a **higher-order function**.

**Callback functions** are not a new type of function, they are defined just like any other function (as a declaration, expression or arrow function).

Typically, the higher-order function accepts a callback for the purpose of invoking it - at least **once**, at some point in time.

Since you've previously used the array `forEach` method, you've actually already passed a callback function...

```js
colors.forEach(function(color, idx) {
   ...
})
```

Although using **anonymous functions** as callbacks is convenient, it's not uncommon to use a **named function** for code organization:

```js
document.getElementById('todo-container')
  .addEventListener('click', handleTodoClick)
```
Or when the callback might be called from more than just one point in the code:

```js
/*-- Event Listeners --*/
document.getElementById('replay-btn').addEventListener('click', init)

/*-- Functions --*/
init()

function init() {
  // Initialize state and call render
}
```

**👀 Be careful not to invoke the callback when passing it**, i.e., do not put parentheses after the function! Otherwise, you'll be passing the result returned by that function **instead** of the function itself. 

**Don't** Do This:

```js
document.getElementById('todo-container')
  .addEventListener('click', handleTodoClick())
  //                       No parens please ^^
```

---

## 3. Why are Callbacks Needed?
### Purpose
- Enable asynchronous operations.
- Allow for operations to complete in the background.
- Essential for dealing with operations that take time, like file reading.

---

## 4. Using Callbacks with Array Iterator Methods
### Concept
- Callbacks are extensively used in array methods for operations on each element.

### Example
```javascript
const numbers = [1, 2, 3]
const doubled = numbers.map(number => number * 2)
```

---

## 5. Practice Exercise - Using the `filter` Iterator Method
### Objective
- Use `filter` to create a new array based on a condition.

### Exercise
```javascript
// Filter out numbers less than 10
const numbers = [5, 10, 15, 20]
const filtered = numbers.filter(number => number >= 10)
```

---

## 6. Using Callbacks with Asynchronous Functions
### Concept
- Callbacks handle the result of an asynchronous operation.
- Common in Node.js for handling I/O operations.

### Example
```javascript
const fs = require('fs')

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err
    console.log(data)
})
```

---

## 7. Async Functions with Try and Catch
### Async Functions
- Declared with `async` keyword.
- Automatically return a promise.

### Try and Catch
- `try` block executes code that might fail.
- `catch` handles the error.

### Example
```javascript
const asyncOperation = async () => {
    try {
        const result = await someAsyncFunction()
        console.log(result)
    } catch (error) {
        console.error('There was an error:', error)
    }
}
```

When working with express, mongoose, fetch and react we will use async functions repeatedly

---

## 8. Essential Questions
- How do arrow functions differ from traditional functions?
- What scenarios are not suitable for arrow functions?
- How do callbacks contribute to asynchronous programming in JavaScript?
- Why is `try...catch` important in async functions?

---

## 9. Further Study
- Explore ES6 features in JavaScript.
- Deep dive into Promises and async/await.
- Understand the Event Loop in Node.js.

---

### Key Takeaways
- Arrow functions offer a concise syntax for defining functions.
- Callbacks are central to handling asynchronous operations.
- Async functions simplify working with promises and error handling.

## Lets Practice


```js
// Exercise 1

// A fellow student shows you this code.  When he runs it, he expects it to
// wait three seconds, then write "Ding!" to the console.  Instead, it writes
// "Ding!" immediately.  Find the bug and fix it.

function writeDing() {
  console.log('Ding!')
}

let timerId = setTimeout(writeDing(), 3000)
```

```js
// Exercise 2

// Javascript arrays have a built-in sort method that can take
// a callback to tell it how to compare the things you want to sort.

// Research the array sort method.

// Write the sorting callback as a named function declaration

// Write the callback function to provide to the sort method so that
// the following code sorts the words from shortest to longest.

const words = ['short', 'medium', 'delicious', 'nice', 'lengthy']

// The sort method sorts "in place", that is, it modifies the array
words.sort(/* pass in a named callback here */)

// Check that logging words now outputs
// ["nice", "short", "medium", "lengthy", "delicious"]
```

```js
// Exercise 3
//
// Filter the words array from above to create a new array
// named longWords that includes only the words with 7 or more
// characters

const longWords = words.filter(/* write an anonymous inline function here */)

// Check that logging longWords outputs
// ["lengthy", "delicious"]
```

```js
// Exercise 4

// Code a forEach method:
// 		1. Write a function named forEach.
//		2. The forEach function accepts two args, an array & a callback.
//		3. Code the forEach method such that it iterates over each element in the array arg (use a for loop).
//		4. For each iteration, invoke the callback arg, passing to it, the element and the index of the element.

// Test with this array
const colors = ['red', 'green', 'blue', 'purple']
// and this callback
function log(elem, idx) {
  console.log(`Index: ${idx} / Element Value: ${elem}`)
}

// calling forEach(colors, log) should resulting in this output:
// Index: 0 / Element Value: red
// Index: 1 / Element Value: green
// Index: 2 / Element Value: blue
// Index: 3 / Element Value: purple
```

```js
// Exercise 5

function step1(cb) {
  setTimeout(function() {
    console.log('STEP 1 COMPLETE')
    cb()
  }, 750)
}

function step2(cb) {
  setTimeout(function() {
    console.log('STEP 2 COMPLETE')
    cb()
  }, 500)
}
	
function step3(cb) {
  setTimeout(function() {
    console.log('STEP 3 COMPLETE')
    cb()
  }, 250)
}

/*
The above functions are working asynchronous functions - DO NOT
change any of their code. They are what we call "black boxes"
because we do not need to know anything that goes on inside of them.

Each of the three functions accept a single argument - a callback function.

Write the code that invokes the three functions such that the output in the console will be:

STEP 1 COMPLETE
STEP 2 COMPLETE
STEP 3 COMPLETE
FINISHED

Hints: 
- Call `step1` first.
- You cannot call `step2` until after `step1` has "finished", similarly, you cannot call `step3` until `step2` has "finished".
- You must console.log the last line of the output, `FINISHED`, after `step3` has "finished".
*/
```

### Bonus

Write function named `countdown` that accepts as an arg the starting number of seconds and console.logs the count down to zero one second apart from each other.

For example:

`countdown(3)`

console.logs something like the following:

```
Count: 3
Count: 2
Count: 1
Count: 0
```

