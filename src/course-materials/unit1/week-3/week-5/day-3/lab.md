# Lab: Functions, Loop, Scope & Closure in Practice

In this lab activity, you'll have a chance to practice your understanding of functions, loops, scope, and closures through hands-on exercises.

## Task 1: Palindrome Function

Write a function called isPalindrome that takes a string as a parameter and returns true if the string is a palindrome and false otherwise. A palindrome is a word that reads the same backward as forward.

```js
// Example:
// isPalindrome("racecar") === true
// isPalindrome("apple") === false

function isPalindrome(word) {
  // Your code here
}

```

## Task 2: Square Function
Write a function called square that takes a number as a parameter and returns the square of the number.

```js
function square(num) {
  // Your code here
}

```

## Task 3: Minus One Function

Write a function called minusOne that takes a number as a parameter and returns the number minus one.

```js
function minusOne(num) {
  // Your code here
}
```

## Task 4: Make Sentence Function

Write a function called makeSentence that takes three parameters and concatenates them into a fully formed sentence.

```js
function makeSentence(word1, word2, word3) {
  // Your code here
}
```

## Task 5: Get Last Element Function

Write a function called getLastElement that takes an array as a parameter and returns the last element in the array.

```js
function getLastElement(arr) {
  // Your code here
}
```

## Task 6: Divide Three Numbers Function

```js
function divideThreeNums(a, b, c) {
  // Your code here
}

```

# HARD MODE ACTIVATED PROCEED WITH CAUTION


## Task 7: Capitalize Function

Write a function called capitalize that takes a string as a parameter, capitalizes the first letter of each word in the string, and returns the capitalized string.

```js
function capitalize(sentence) {
  // Your code here
}
```

## Task 8: Sum and Convert Function
Write a function called sumAndConvert that takes three numbers as parameters, sums them, converts the sum into a string, and returns the string.

```js
function sumAndConvert(a, b, c) {
  // Your code here
}

```

# If You here you are way way deep in the weeds
### The below functions require additional research and include things we have not yet covered

## Task 9: Create a Function to Generate an Array of Random Numbers

Create a function called `generateRandomNumbers` that takes two arguments: `count` and `range`. The function should return an array of `count` random numbers, each between 0 and `range`.

```javascript
function generateRandomNumbers(count, range) {
  // Your code here
}
```

## Task 10: Implement the forEach Loop

Use a forEach loop to iterate over the array of random numbers generated in Task 1 and print each number to the console.

```js
// Your code here

```

## Task 11: Practice Scope

Using the concepts of var, let, and const, demonstrate the differences in scope by creating variables inside and outside of a function or loop.

```js

// Code

```

## Task 12: Implement a Debounce Function

Create a debounce function that takes two arguments: func and wait. The function should return a new function that, when called, will clear any existing timeout and set a new one to call the original function after the specified wait time has passed.

```js
function debounce(func, wait) {
  // Your code here
}
```

## Task 13: Test the Debounce Function

To test the debounce function, create a simple function called logUserInput that prints "User input detected" to the console. Then, create a debounced version of the logUserInput function using the debounce function you implemented in Task 4.

Create an input field in your HTML file and add an event listener for the input event. Use the debounced version of the logUserInput function as the event listener. Test the debounce function by typing into the input field and observing the console output.

