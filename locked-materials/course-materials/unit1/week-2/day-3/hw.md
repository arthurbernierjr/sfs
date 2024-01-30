# Week 2 Homework due Week 3 Saturday

## Written HW
- What are the three main types of loops in JavaScript and what is the main difference between them?

- What are the three ways to declare a variable in JavaScript, and which of them have block scope?

- In JavaScript, what is a closure, and what is its primary use case?

- What is the main difference between a for loop and a forEach loop in JavaScript?

- What is the main difference between passing a variable by value and passing it by reference in JavaScript?

- What is the event loop in JavaScript, and how does it help manage asynchronous code execution?

- If I want to create a directory called `drawers` in the root directory (symbolized by `~`) how do i do that? Use the exact command.

- Now how would I then change into that directory?

- How would i check that I am in the right directory?

- How do we create a directory named `socks`in `drawers`

- How do we create a `dress.socks` file in socks.

- How would we create this directory: `~/drawers/pjs`? Pay attention to the `~` that's not an accident.

- How woulde we create two files in the new `pjs` folder named `warm.pjs` and `favorite.socks`?

- So since we have a messy `drawers/pjs`, let's move our `favorite.socks` file out of the `pjs` folder and into the `drawers/socks` folder where it belongs! How do we do that?


Answer these questions in an html file using an ordered list `ol` and `li` and style the page to your liking.

## Practical Homework Assignment: Create a simple counter application that incorporates Functions, Scope, Loops, and Closure.



### Goal

Build a simple counter application using HTML, CSS, and JavaScript to reinforce the concepts of Functions, Scope, Loops, and Closure. 
You'll be working on this project in CodeSandbox.io, an online code editor that allows you to create and share live projects.

### Instructions

***Step 1: Set up the project in CodeSandbox.io***

Go to CodeSandbox.io.
Click "Create Sandbox" in the lower right corner.
Choose the "Static" template.
Create styles.css, and index.js files ready for you to work on and properly link them.

Step 2: Set up the HTML structure

In the index.html file, add a heading, a paragraph to display the counter value, and two buttons to increment and decrement the counter.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="index.js" defer></script>
  <link rel="stylesheet" href="styles.css" />
  <title>Counter Application</title>
</head>
<body>
  <h1>Simple Counter</h1>
  <p id="counterValue">0</p>
  <button id="incrementBtn">Increment</button>
  <button id="decrementBtn">Decrement</button>


</body>
</html>

```

***Step 3: Add basic CSS styles***

In the styles.css file, add some basic styles for the heading, paragraph, and buttons.

```css
body {
  font-family: Arial, sans-serif;
  text-align: center;
}

h1 {
  color: darkblue;
}

button {
  background-color: darkblue;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin: 10px;
}

button:hover {
  background-color: blue;
}

```

***Step 4: Create the JavaScript file***

In the index.js file, you'll implement the counter functionality using Functions, Scope, Loops, and Closure.

***Step 5: Implement the counter functionality***

First, use DOM manipulation to select the necessary elements from the HTML file.

```js
const counterValue = document.getElementById("counterValue");
const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");
```

Next, create a function that returns another function to handle the increment and decrement actions. This function will demonstrate the concept of Closure.


```js
function createCounter() {
  let count = 0;

  return function (action) {
    if (action === "increment") {
      count++;
    } else if (action === "decrement") {
      count--;
    }
    return count;
  };
}
```
Now, create an instance of the createCounter function to be used for updating the counter value.

```js
const counter = createCounter();
```

Finally, add event listeners to the increment and decrement buttons to update the counter value on the page.

```js
incrementBtn.addEventListener("click", () => {
  counterValue.textContent = counter("increment");
});

decrementBtn.addEventListener("click", () => {
  counterValue.textContent = counter("decrement");
});

```
Save your files, and you can see your simple counter application in action within CodeSandbox.io. This homework should help reinforce the concepts of Functions, Scope, Loops, and Closure.

### Requirements

- Follow all instructions
- Application Works without error

### Submission

When you're finished, copy the URL of your sandbox and submit it to your instructor.


## Theoretical Homework Assignment: MaxChar

### Goal
Given a string, return the character that is most commonly used in the string.
#### Examples
```js
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1
// Hint use an object as a frequency counter (google it)
// {a: 1, b: 1, c: 7, d:1}
// For of loops are for array, for in loops are for objects
```

### Instructions

1. Go to [CodePen](https://codepen.io/) and create a new pen.
2. Create a new JavaScript file by clicking on the "JS" tab at the bottom of the screen.
3. Write a JavaScript program that solves the above problem.
4. Test your program by running it using the "Console" feature in CodePen.
5. Submit your CodePen URL to your instructor.


### Tips

- You can use an object as a frequency counter look up how
- You can just use a loop??? How?

### Submission

When you're finished, copy the URL of your CodePen and submit it to your instructor.



