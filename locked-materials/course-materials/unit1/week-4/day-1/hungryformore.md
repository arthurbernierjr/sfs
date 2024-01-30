# Lab Activity: Dad Joke Generator

## Objective
In this lab activity, you will build a simple Dad Joke Generator using HTML, CSS, and JavaScript. The generator will fetch random Dad jokes from the dadjokes.io API through rapidapi.com or https://icanhazdadjoke.com/api. Alternatively get a bunch of dad jokes in an array and use that.

## Prerequisites
- Basic knowledge of HTML, CSS, and JavaScript
- A text editor (Visual Studio Code + github,  or CodeSandbox)

## Instructions

### Step 1: Create the HTML structure
Create a new HTML file called `index.html` and add the following code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dad Joke Generator</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1>Dad Joke Generator</h1>
    <p id="joke"></p>
    <button id="generate-btn">Generate Joke</button>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

## Step 2: Add CSS styles

Create a new CSS file called style.css and add the following code:

```js
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0;
}

.container {
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 1rem 0;
  cursor: pointer;
}

```

## Step 3: Add JavaScript functionality
Create a new JavaScript file called script.js and add the following code:

here is an example but do what you want here

```js
const jokeElement = document.getElementById("joke");
const generateBtn = document.getElementById("generate-btn");

generateBtn.addEventListener("click", generateJoke);

generateJoke();

async function generateJoke() {
  const jokeData = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });

  if (!jokeData.ok) {
    jokeElement.textContent = "Error fetching joke. Please try again!";
    return;
  }

  const joke = await jokeData.json();
  jokeElement.textContent = joke.joke;
}

```

### Use either:
1. https://icanhazdadjoke.com/api
1. https://dadjokes.io/documentation/endpoints/random-jokes

DadJokes.io requires you to get an api key from rapid API https://rapidapi.com/