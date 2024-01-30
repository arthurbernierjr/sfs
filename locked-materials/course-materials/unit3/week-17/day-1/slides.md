<img src="https://i.imgur.com/sX12DTc.png">

# Self-Assessment: DOM Manipulation Refresher

## Introduction

Before we dive into the world of React, it's crucial to have a solid understanding of DOM (Document Object Model) manipulation. This self-assessment will refresh your understanding of DOM manipulation and test your skills on a simple yet effective web application project. We'll explore the foundations of creating a basic front-end web application with HTML, CSS, and JavaScript, which includes:

- Constructing the application's overall structure and content with HTML.
- Styling your application with CSS.
- Leveraging JavaScript to hold application state, cache DOM elements, hold lookup data, listen for and react to browser events, and manipulate a DOM element's content and style. 

Here's a snapshot of what your application will look like:

<img src="https://i.imgur.com/nsLfnoG.png">

Your time is precious, so we've structured this self-assessment to ensure maximum learning and retention within a reasonable time frame. You'll have one hour to complete the project independently, followed by another hour to review the solution with the aid of EDIP (Example, Demonstration, Imitation, Practice). 

After we have reviewed your performance and clarified your doubts, we'll introduce you to React and its key concepts such as useState, useEffect, useRef, and how to use the 'create-react-app' to simplify your journey with React. We'll even revisit DOM manipulation in a more simplified manner using React.

## Instructions

Your task is to follow the instructions provided below. 

The assessment steps include preparing, setting up the application, implementing the application's requirements, and optional bonus tasks. Be sure to read through all the instructions and understand what's required before you start coding. Also, don't forget to fork and clone the repository.

Upon completion, submit your project by pushing it to your own github repo.

### GOAL

The goal of this final assessment is to gauge your ability to develop a **minimal** front-end web application using HTML, CSS & JavaScript, including your ability to:

- Write HTML that provides the application's overall structure and content. 
- Use CSS to provide styling.
- Use JavaScript to:
	- Define variables that hold application state, cache DOM elements, hold lookup data (constants), etc.
	- Select elements in the DOM.
	- Listen for browser events, such as `click`, being dispatched by DOM elements.
	- Manipulate a DOM element's content and style. 

### OVERALL APPLICATION

This is what your application should look like:
<img src="https://i.imgur.com/nsLfnoG.png">

The application's UI consists of:

- A count display
- Two buttons ("+" & "-")
- An `<input>` element

Application requirements are expounded on in each section below. Make sure you read through the instructions completely.

Use the screenshots below as your "wireframes"; the styling does not have to be exact, however, the closer it is to the screenshots, the better!

### PROCESS

This assessment is an **individual** assignment - no collaboration please.

The good news is that it's "open book" - you may reference anything on your computer, Google, use notes, etc. 

However, don't spend too much time researching unless you're stuck - **do not over-think this application!!!**

It is estimated that this project assessment up to 90 minutes to complete.

## Instructions & Time Guidelines (You've Got This!)

Please follow the following steps in order:

- **STEP 1 - Prepare** (&asymp; 5 minutes)
- **STEP 2 - Set Up the App** (&asymp; 5 minutes)
- **STEP 3 - Implement the App's Requirements** (&asymp; 40 minutes)
- **STEP 4 - Bonus**

**The times above are just estimated guidelines.**

## Assessment Steps to Complete

### STEP 1 - Prepare (5 minutes)

Briefly read through the rest of this assignment to better understand what is required before starting to code.

### STEP 2 - Set Up the App (5 minutes)

Be sure to follow best practices when setting up the project:

- Create a folder named `project-1-assessment` outside of all repos.
- Touch `index.html`
- Touch `app.js`, and include it in `index.html` such that it runs after the DOM is ready.
- Touch `style.css` and link it in.
- Name them exactly like we told you to.

### STEP 3 - Implement the App's Requirements (40 minutes)

#### Upon Loading

When the application initially loads, the `<input>`'s value should be set to `1` and the initial count of `0` is rendered such that the display looks something like this:

<img src="https://i.imgur.com/nsLfnoG.png">

#### When the "+" Button is Clicked

When the "+" button is clicked, the value entered in the `<input>` is added to the count and the new count value displayed.

For example, if the "+" button is clicked immediately after the app loading, the display should look something like this:

<img src="https://i.imgur.com/xNdlBn2.png">

#### When the "-" Button is Clicked

When the "-" button is clicked, the value entered in the `<input>` is subtracted from the count and the new count value displayed.

Continuing from the previous example, if the number 200 is typed in the `<input>` and the "-" button is clicked, the display should look something like this:

<img src="https://i.imgur.com/QjtcAJT.png">

#### Hovering Over the "+" or "-" Button

When the mouse is over the "+" or "-" button, the button should reverse its background and text colors:

<img src="https://i.imgur.com/agT3aGX.png">

Congrats, that's all there is to it!


**Make a github repo and push - congrats, you are done!**

### STEP 4 - Bonus

As a bonus, display the count in red if it is a negative value!

<img src="https://i.imgur.com/LCSG1Wg.png">

You can also code for edge cases (for example, if someone trys to put a letter in the input area)

## Hints

- **Prioritize functionality over layout/styling.** Once the functionality is complete, then work on styling to get the UI as close as possible to the wireframes/images (see the below hint for using flexbox for layout).

- Use CSS flexbox to ease horizontal and vertical centering:

	```css
	section {
		display: flex;  /* defaults to row layout */
		justify-content: center;  /* centers items horizontally in row layout */
		align-items: center;  /* centers vertically in row layout */
		/* flex-direction: column; will set layout to column instead of row */
	}
	```

## Conclusion

Remember, this self-assessment is designed to strengthen your knowledge of DOM manipulation, a crucial prerequisite before diving into React. As you transition to using React, you'll discover how its powerful features can make DOM manipulation even more straightforward and intuitive. 

Keep your learning cap on and stay ready to delve into the world of React right after this project. Happy coding!


<details>

<summary>SOLUTION</summary>


https://arthurbernierjr.github.io/p1-assesment-remix-vanilla-js/

```html
    <!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="style.css">
  <title>Arthur</title>
</head>

<body>
  <h1>Please add or Subtract</h1>
  <div class="board">
    <div id="value">
      0
    </div>
    <div class="container">
      <button id="increment">
        +
      </button>
      <form class="value-form">
        <input type="number" name="" value="0" id="number">
      </form>
      <button id="decrement">
        -
      </button>
    </div>

  </div>
  <script src="app.js" charset="utf-8"></script>
</body>

</html>
```

```css
body {
  background-color: #fdfcf1;
}

h1 {
  text-align: center;
  font-size: 6vw;
}

#value {
  text-decoration: underline;
  font-size: 8vw;
}

.board {
  margin: 10% auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
}

.container {
  display: flex;
}

#number {
  display: flex;
  width: 3rem;
  height: 3.75rem;
  justify-content: center;
  text-align: center;
  font-size: 2rem;
}

button {
  height: 4rem;
  width: 4rem;
  margin: 0 1rem;
  font-size: 2rem;
  text-align: center;
  border-radius: 15%;
  box-shadow: 0 4px 8px rgba(255, 0, 0, 0.5);
}

button:hover {
  background-color: white;
  color: #030303;
  box-shadow: 0 8px 24px rgba(255, 0, 0, 0.5);
}

.red {
  color: red;
}
```

```js
console.log('connected')
let value = 0
document.getElementById('increment').addEventListener('click', increment)
document.getElementById('decrement').addEventListener('click', decrement)

function increment(event) {
  value = value + parseInt(document.getElementById('number').value, 10)
  document.getElementById('value').innerHTML = `${value}`
  if (value < 0) {
    document.getElementById('value').classList.add('red')
  } else {
    document.getElementById('value').classList.remove('red')
  }
}

function decrement(event) {
  value = value - parseInt(document.getElementById('number').value, 10)
  document.getElementById('value').innerHTML = `${value}`

  if (value < 0) {
    document.getElementById('value').classList.add('red')
  } else {
    document.getElementById('value').classList.remove('red')
  }
}
```

This is a simple application that allows the user to increment or decrement a displayed value based on the value they input. The displayed value will change color to red when it becomes negative.

The HTML structure consists of two main parts:
1. A `div` with the id `value` which is used to display the current value.
2. A `div` with class `container` that contains the increment button, an input box, and the decrement button.

The CSS applies various styling properties to the HTML elements to arrange them properly and improve their visual appearance. The `.red` class is specifically designed to change the text color to red, which is applied when the value becomes negative.

The JavaScript code is responsible for the dynamic functionality of the app:

1. The variable `value` is declared at the top of the file and is initialized with `0`.

2. Event listeners are added to the buttons with the ids `increment` and `decrement`. When the increment button is clicked, it triggers the `increment` function. When the decrement button is clicked, it triggers the `decrement` function.

3. The `increment` function first retrieves the value from the input box, parses it into an integer (as input values are always strings), and adds it to `value`. Then it updates the display with the new value of `value`. After that, it checks if `value` is less than 0. If it is, it adds the `red` class to the display, causing the text to turn red. If `value` is not less than 0, it removes the `red` class from the display, ensuring the text is black.

4. The `decrement` function is similar to the `increment` function, but it subtracts the input box's value from `value` instead of adding it. It then updates the display and checks if `value` is less than 0, in which case it adds the `red` class to the display. If `value` is not less than 0, it removes the `red` class from the display.

In this way, the app allows the user to control the displayed value by inputting a number and clicking either the increment or decrement button, with the value changing color based on whether it is negative or not.

</details>


