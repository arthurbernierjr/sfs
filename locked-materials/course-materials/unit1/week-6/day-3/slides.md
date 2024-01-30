# Lesson: Reviewing the Basics of JavaScript

## Introduction

In this lesson, we will review the basics of JavaScript, covering essential concepts like variables, control flow, loops, arrays, objects, functions, classes, scope, closure, pass by value vs. pass by reference, and DOM manipulation. We will culminate the lesson by building a simple web application that demonstrates these concepts in action.

## Lesson Outline

1. **Variables**
   - Declare variables using `let`, `const`, and `var`
   - Assign values to variables
   - Data types: `string`, `number`, `boolean`, `null`, `undefined`, and `object`

2. **Control Flow: if-else**
   - Write conditional statements using `if`, `else if`, and `else`
   - Understand truthy and falsy values in JavaScript

3. **Loops**
   - `for` loop
   - `while` loop
   - `do-while` loop
   - `for...of` loop
   - `for...in` loop

4. **Arrays**
   - Create arrays
   - Access array elements
   - Add, remove, and modify elements
   - Array methods: `push`, `pop`, `shift`, `unshift`, `splice`, `slice`, `concat`, `forEach`, `map`, `filter`, and `reduce`

5. **Objects**
   - Create objects
   - Access and modify object properties
   - Object methods

6. **Functions**
   - Declare functions
   - Function expressions
   - Arrow functions
   - Function parameters and arguments
   - Return values

7. **Classes & Object-Oriented Programming**
   - Create classes
   - Instantiate objects using classes
   - Inheritance and `extends` keyword
   - Constructors and methods

8. **Scope**
   - Global and local scope
   - Block scope
   - Lexical scope

9. **Closures**
   - Understand closure concept
   - Practical use cases for closures

10. **Pass by Value vs. Pass by Reference**
    - Understand the difference between pass by value and pass by reference
    - Know which data types are passed by value and which are passed by reference

11. **DOM Manipulation**
    - Select DOM elements
    - Modify DOM elements
    - Create and append elements
    - Add event listeners

By the end of this lesson, students should have a solid understanding of the fundamentals of JavaScript and be able to apply these concepts to build simple web applications.

1. Variables

```js
// // LOGGING OUTPUT
alert('Hello World') // Do not use for debugging. Stops script and only strings
console.log('Hello World')
console.error('This is an error')
console.warn('This is a warning')

// // VARIABLES - var, let, const
let age = 30

// // let can be re-assigned, const can not
age = 31

// // DATA TYPES - String, Number, Boolean, null, undefined
const name = 'Arthur'
const age = 37
const rating = 3.5
const isCool = true
const x = null
const y = undefined
let z // undefined

let message = "Hello, World!" 
const pi = 3.14159 
```


2. **If else control flow**

```javascript
let age = 18 

if (age >= 18) {
  console.log("You are an adult") 
} else {
  console.log("You are a minor") 
}
```

3. **Loops**

```javascript
// For loop
for (let i = 0;  i < 5; i++) {
  console.log(i) 
}

// While loop
let j = 0 
while (j < 5) {
  console.log(j) 
  j++ 
}
```

4. **Arrays**

```javascript
let fruits = ["apple", "banana", "orange"] 
fruits.push("grape") 
console.log(fruits[1])  // Output: "banana"
```

5. **Objects**

```javascript
let person = {
  name: "John",
  age: 30,
  greet: function() {
    console.log("Hello, " + this.name) 
  }
} 
person.greet()  // Output: "Hello, John"
```

6. **Functions**

```javascript
function add(a, b) {
  return a + b 
}
console.log(add(3, 4))  // Output: 7
```

7. **Classes & OOP**

```javascript
class Animal {
  constructor(name) {
    this.name = name 
  }
  speak() {
    console.log(this.name + " makes a noise.") 
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + " barks.") 
  }
}

let dog = new Dog("Rex") 
dog.speak()  // Output: "Rex barks."
```

8. **Scope**

```javascript
function exampleFunction() {
  const localVariable = "I'm local!"  // Local scope
}
const globalVariable = "I'm global!"  // Global scope
```

9. **Closure**

```javascript
function outer() {
  let count = 0 
  function inner() {
    count++ 
    console.log(count) 
  }
  return inner 
}
const counter = outer() 
counter()  // Output: 1
counter()  // Output: 2
```

10. **Pass by value vs pass by reference**

```javascript
// Pass by value (primitives)
let a = 10 
let b = a 
a = 20 
console.log(b)  // Output: 10

// Pass by reference (objects)
let obj1 = { value: 10 } 
let obj2 = obj1 
obj1.value = 20 
console.log(obj2.value)  // Output: 20
```

11. **DOM manipulation**

```javascript
// Select an element
const element = document.querySelector("#example") 

// Change the content
element.textContent = "New content" 

// Add a class
element.classList.add("new-class") 

// Create a new element and append it
const newElement = document.createElement("div") 
newElement.textContent = "I am a new element" 
document.body.appendChild(newElement) 
```