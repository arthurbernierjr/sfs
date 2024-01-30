// SECTION 1 - TERMS ===============

// 1. What does DRY stand for?
// Don't repeat yourself

// 2. Why should we pay attention to it?
// It helps reduce repetition and makes our code more manageable and maintainable.

// 3. What programming tools have we learned to write DRY code?
// Variables, Loops, etc...

// 4. What is the difference between 'const' and 'let' and 'var'?
// - Const defines a variable with block scope that cannot be updated or redeclared.
// - Let defines a variable with block scope that cn be updated but cannot be redeclared.
// - Var is an outdated way of declaring a function scope variable that can be updated or redeclared. While var may be found in legacy code, it should not be used in new code.

// SECTION 2 - BOOLEAN EXPRESSIONS AND VARIABLE ASSIGNMENTS ===============

// Using the provided variable definitions, replace the blanks (underscores) with a mathematical or boolean operator that evaluates the expression to true (some may have more than one right answer, just choose one)

const a = 4
const b = 53
const c = 57
const d = 16
const e = 'Kevin'
const f = false

// Answers to this part will vary. Just make sure the answers evaluate to true based on the provided info above.

// Set a new variable g to 0
// console.log g
// Then set the variable g to be equal to b + c
// console.log g

// 1. Did you use 'const' 'let' or 'var'? Why did you use the one you chose?
// 'let' so the variable can be reassigned. Var would also work, but it's outdated and should not be used in new code.

// 2. What happens if you don't use 'const' 'let' or 'var'? Do you get an error?
// If you use nothing, 'let' or 'var', you do not get an error, it automatically assumes it's var.
// If you use const -> TypeError: Assignment to constant variable.

// SECTION 3 - WHILE LOOPS ===============

// 1. Infinite loop #1
// Yes, this is an infinite loop. There is nothing present to tell it when to stop running.

// 2. Infinite loop #2
// No, this is not an infinite loop. It will run once and then runProgram will be updated to false, which will stop the loop.

// 3. Reading Code

let letters = 'A'
let i = 0

// start a while loop that will run as long as the value of the variable 'i' is less than 20.
while (i < 20) {
  // concatenate the letter A to the letters varaible
  letters += 'A'
  // incriment the value of the 'i' variable by one
  i++
  // closes the while loop
}

console.log(letters)

// SECTION 4 - FOR LOOPS ===============
// 1. A for loop performs the same operation as a while loop. But what are the key differences, if any? What are the similarities?
// Both types of loops run until the exit condition has been met. While loops are best when you don't know how many time you need the loop to run. For loops are best when you know exactly how many times you want the loop to run.

//  2. What are the three components of the control panel?
// 1. The first part initializes a variable with the starting value.
// 2. The second part is the exit condition - the loop will run until this evaluates to false.
// 3. The third part incriments the value of the variable.

// 3. Write a for loop that will console.log the numbers 0 to 999.
for (let i = 0; i < 1000; i++) {
  console.log(i)
}

// 4. For loop in reverse
for (let i = 999; i >= 0; i--) {
  console.log(i)
}

// 5. More counting - write a for loop that uses string concatenation or template literals to send a message to the console as well as the current value of 'i'. The loop should run from 1 to 10.
for (let i = 1; i <= 10; i++) {
  console.log('The value of i is: ' + i + ' of 10') // or
  // console.log(`The value of i is: ${i} of 10`);
}

// 6. Iteration

const StarWars = ['Han', 'C3PO', 'R2D2', 'Luke', 'Leia', 'Anakin']

// 1. Iterate over the StarWars array and print each element to the console.
for (let i = 0; i < StarWars.length; i++) {
  console.log(StarWars[i])
}

// 2. Iterate over the StarWars array and print each character's name as well as the value of 'i'
for (let i = 0; i < StarWars.length; i++) {
  console.log(StarWars[i] + ' ' + i) // or
  // console.log(StarWars[i], i); // or
  // console.log(`${StarWars[i]} ${i}`);
}

// SECTION 5 - TERMINAL PRACTICE ===============
// see the terminal_homework.bash solutions file
