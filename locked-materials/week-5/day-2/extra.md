# Hungry for more

Let's use branching and looping to code a simple number guessing game!

Before coding programs it's often beneficial to [pseudocode](https://en.wikipedia.org/wiki/Pseudocode), i.e., write down the logic/steps in plain language that are necessary to solve the problem at hand...

```js
// 1. Generate a random secret number
// 2. Declare a variable to hold the player's guess
// 3. Loop while the player's guess is not correct
  // 3.1. Prompt for the player's guess
  // 3.2. Convert the player's input into a number
  // 3.3. If the guess is lower or higher than the secret 
  //      number, print a message that informs the player as such
// 4. Print a message congratulating the player
```

Let's copy/paste the above pseudocode and use it as our guide as we implement the code.

<details>
<summary>
For reference, here's a potential solution...
</summary>

```js
// 1. Generate a random secret number
// Using a "constant" helps document the code
// and make it more maintainable
const MAX_NUM = 100;
// Adding 1 makes the number one-based instead of zero-based
const secretNum = Math.floor(Math.random() * MAX_NUM) + 1;
// 2. Declare a variable to hold the player's guess
let guessNum;
// 3. Loop while the player's guess is not correct
while (guessNum !== secretNum) {
  // 3.1. Prompt for the player's guess
  guessNum = prompt('Enter your guess: ');
  // 3.2. Convert the player's input into a number
  guessNum = parseInt(guessNum);
  // It's also possible to do the above on with a single line
  // guessNum = parseInt(prompt('Enter your guess: '));
  // 3.3. If the guess is lower or higher than the secret 
  //      number, print a message that informs the player as such
  if (guessNum < secretNum) {
    console.log('Your guess was too low - try again!');
  } else if (guessNum > secretNum) {
    console.log('Your guess was too high - try again!');
  }
}
// 4. Print a message congratulating the player
console.log('Congrats, you guessed the secret number!');
```
</details>


### Bonus Challenge

As a stretch bonus challenge, consider adding the following features on your own:

1. Let the player input the maximum value of the secret number.
2. Keep track of the number of wrong guesses and print a message if that number exceeds a predetermined maximum amount.


## Further Study

### Ternary Operator

The _ternary_ operator is ideal when you need to return one of two values depending upon a condition:

```js
let message = score > 100 ? "You rock!" : "Keep trying!";
```
	
The above one line of code replaces this code:
	
```js
let message;
if (score > 100) {
  message = "You rock!";
} else {
  message = "Keep trying!";
}
```

A ternary can also be used to evaluate one of two expressions, so you can actually run a method if you'd like:

```js
score > 100 ? gameWinner() : gameLoop();
```

> Note that unlike with `if` and `while`, ternary expressions do not require the conditional expression to be within parenthesis.

### `switch` Statement

Look into using the [switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) statement instead of `if...else` if you have more than three code paths and your conditionals always check the same variable.

### `do`...`while`

You may choose to use the `do...while` statement instead of `while` to force the code block to always execute at least once.  This is rarely used, but useful to recognize when reading other developer's code.

```js
let num = 0;
do {
  console.log(num + ' is even');
  num += 2;
} while (num <= 10);
```

**Do you see why the code block will always run at least once?**

Again, beware of infinite loops!

### The `break` & `continue` Statements

The [break statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break) is used to immediately exit a `while` or `for` loop. For example:

```js
let word = '';
let words = [];
while (true) {
  word = prompt('Enter a word ("end" to quit)');
  if (word === 'end') break;
  words.push(word);
  console.log("You've entered: " + words.join(', '));
}
```
> Note again how the `if` statement does not require braces since there's a single statement to execute.

The [continue statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue) skips remaining code in the current iteration and returns to the top of the `while` or `for` loop.
