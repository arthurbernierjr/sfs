## Written HW

1. What is Express in Node.js and why is it used?
2. How does Mongoose help in using MongoDB with Node.js?
3. Can you explain the role of Mongoose in managing relationships between data?
4. What is a software design pattern? Give an example.
5. Can you explain the MVC architecture in detail?
6. What roles do Model, View, and Controller play in the MVC architecture?
7. Define Latency and Throughput in the context of APIs.
8. Why is it important to minimize latency and maximize throughput in APIs?
9. What is Authentication in terms of web development?
10. How does the authorization process start?
11. What is `express.static` used for in Express?
12. Can you give an example of serving static files using `express.static`?
13. What is Jest and why is it used?
14. How can Supertest be helpful when working with Jest?
15. Can you describe how manual and automated tests are executed?
16. What is the difference between unit testing, integration testing, and end-to-end testing?
17. Can you provide examples of functional, regression, smoke, and performance tests?
18. What is meant by positive testing and negative testing in a functional testing context?
19. How does load testing assess the behavior of software?
20. What aspects does usability testing assess in a software application?
21. Why is security testing crucial in a software development life cycle?
22. Can you explain what compatibility testing is?
23. What is the aim of recovery testing and why is it important?
24. What is User Acceptance Testing (UAT) and who typically performs it?
25. Can you describe a scenario in which you would use each of the different testing types mentioned in the notes?

## Practical HW

# Homework Assignment: Building a Todo API and Testing with Jest, Supertest, and Artillery

Your task for this assignment is to develop a Todo API using Express and Mongoose. You will then be required to write unit tests for your API using Jest and Supertest, and finally perform load testing using Artillery.

## Part 1: Building the Todo API

1. Initialize a new Node.js project and install the necessary dependencies: Express, Mongoose, Morgan.

2. Design your `Todo` schema using Mongoose. Each todo item should have the following fields:
    - `title`: String, required
    - `description`: String
    - `completed`: Boolean, default: false
    - `created_at`: Date, default: Date.now

3. Implement the following API endpoints:
    - `GET /todos`: Get all todo items.
    - `POST /todos`: Create a new todo item.
    - `GET /todos/:id`: Get a specific todo item.
    - `PUT /todos/:id`: Update a specific todo item.
    - `DELETE /todos/:id`: Delete a specific todo item.

4. Make sure to handle any potential errors and return appropriate HTTP status codes and messages.

## Part 2: Unit Testing with Jest, Supertest and Mongodb Memory Server

1. Install MongoDB Memory Server Jest and Supertest.

2. Write unit tests for each of your API endpoints. Your tests should cover both successful cases and edge cases such as invalid inputs or todo item not found.

3. Run your tests and make sure all of them pass.

## Part 3: Load Testing with Artillery

1. Install Artillery.

2. Define a basic scenario for Artillery to simulate multiple users interacting with your API:
    - Users should send a `POST /todos` request to create a new todo item.
    - Users should send a `GET /todos` request to fetch all todo items.

3. Run the load test and observe the results. If there are any performance issues, try to identify possible causes and make improvements to your API.

**Deliverables:** 

- A GitHub repository containing your project code.
- A `README.md` file in the root of your repository, explaining the design of your Todo API, instructions for how to run and test your API, and a brief discussion of your load testing results.

**Evaluation Criteria:**

- Correctness and completeness of your Todo API.
- Quality and thoroughness of your unit tests.
- Appropriateness and execution of your load tests.
- Clarity and thoroughness of your `README.md` file.

Happy coding!


## Theoretical HW

![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) 

# Recursion

## Overview
This assignment introduces the wonders of recursion.

There are two components to this assignemnt:
1. [myGA module: Recursion](https://my.generalassemb.ly/activities/773) // Look under algorithms if the link doesn't work
2. [Writing Recursive Functions](#additional-resources)

> **Note**: The myGA module contains a link to an exercise in CodePen. **The code in CodePen is the exact same as the code for the exercises.** Try out the exercise in CodePen and see how far you can get with it. Leave off where you get stuck and i'll share the solution in class.

## Learning Objectives
By the end of this lesson, you will be able to:
- Define recursion. 
- Write the base case and recursive cases of a recursive function. 
- Identify functions that use recursion and explain why it’s used.

## Duration
1.5 hours total:
* 0.5 hour myGA
* 1 hour in on your own

## Prerequisites
* Big O Notation

## Additional Resources
- How recursion comes up in [job interviews](https://hackernoon.com/coding-interview-recursion-f0d60c9dbb60).
- More thoughts on recursion in [job interviews](https://www.byte-by-byte.com/recursion/).
- Sketching out a [recursive function](https://www.youtube.com/watch?v=bGC2fNALbNU).
- Just for fun: The [recursion subreddit](https://www.reddit.com/r/recursion).

## Code
```js
// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function lengthOfString(str, len = 0) {
  // If the length is 0 (base case), return len (0).
  // if (str.length === 0) return len;
  if (!str.length) return len;

  // Remove the first letter of the string
  let restOfString = str.substring(1);

  // Call function again, with updated string and len
  return lengthOfString(restOfString, ++len);
}

function sumOfArray() {
  // This function returns the sum of all of the numbers in a given array.
}

function findMax() {
  // This function returns the largest number in a given array.
}

function factorial() {
  // This function returns the factorial of a given number.
}

function fibonacci() {
  // This function returns the Nth number in the fibonacci sequence.
  // https://en.wikipedia.org/wiki/Fibonacci_number
  // For this function, the first two fibonacci numbers are 1 and 1
}

function coinFlips() {
  // This function returns an array of all possible outcomes from flipping a coin N times.
  // Input type: Integer
  // For example, coinFlips(2) would return the following:
  // ["HH", "HT", "TH", "TT"]
  // H stands for Heads and T stands for tails
  // Represent the two outcomes of each flip as "H" or "T"
}

function letterCombinations() {
  // This function returns an array of all combinations of the given letters
  // Input type: Array of single characters
  // For example, letterCombinations(["a","b","c"]) would return the following:
  // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
}

module.exports = {
  lengthOfString,
  sumOfArray,
  findMax,
  factorial,
  fibonacci,
  coinFlips,
  letterCombinations,
};
```

## HUNGRY FOR MORE

Unit Test this see this lesson - [**Bonus Testing Unit1 Apps**](/unit2/week-11/day-1-and-2/bonus) ***Arthur Bernier Jr Former CTO, Technical Lead Ground Software at Astranis Space Technologies***