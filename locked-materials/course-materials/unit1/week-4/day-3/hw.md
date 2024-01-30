---
track: "Unit 1"
title: "Week 4 - Day 3"
week: 4
day: 3
type: "hw"
topics: "Lord of the Objects HW"
---
# Written HW

1. What is the Document Object Model (DOM)?
2. What is the difference between HTML and the DOM?
3. What are the main types of DOM nodes?
4. How can you traverse the DOM tree and access specific elements or nodes?
5. What are some common methods for adding, modifying, or deleting elements in the DOM?
6. What are events and event listeners in the context of the DOM?
7. What is the difference between a "live" NodeList and a "static" NodeList? When would you use each?
8. What is event delegation, and why is it useful when working with the DOM?
9. How can you use the DOM to apply CSS styles to elements dynamically?
10. What are some performance considerations and best practices when working with the DOM?


Answer these questions in an html file using an ordered list `ol` and `li` and style the page to your liking.

# Practical HW: Creating Classes & Factories
In this homework assignment, you will practice creating classes and a factory in JavaScript. You will create a story using the Person and Hamster classes, and then create a Chef factory to make Dinner instances.

## Instructions

### Setup
#### Easy Mode
- Build this homework using repl.it.

#### Hard Mode (Practice Command Line and Git)
Follow the instructions provided to set up your local environment for this homework assignment.
- mkdir in your `software_homework/unit_1` folder you made on saturday called `w04d03`
- cd into that folder and run the command `git init`
- touch a file called `homework.js`
- open the file up in vs code
- do your homework in this file
- run your code periodically when you want by opening the terminal/hyper/vscode terminal and running `node ~/software_homework/unit_1/w03d01/homework.js` this assumes you followed all commands correctly
- if for some reason you have an issue and you cannot do this successfully it's fine you made a mistake somewhere, you can get help at office hours, just submit your hw with repl.it, this is just a bonus, we'll be practicing this workflow in class during the upcoming weeks.
- Follow the prompts to commit your work with `git add -A` && `git commit -m "Message Here"`
- When you are done with your hw, make an empty repository on `github.com` or `git.generalassemb.ly` and then go through the steps to push your local git repository.
- Remember again this a bonus
- Your link to your github is what you submit
- If at any point you get stuck and can't get unstuck, copy and paste your code to repl.it and submit that.
- Git issues is not an acceptable reason to not turn in this assignment, the git work is a bonus.
- submit the assignment with repl.it, codepen, etc if you mess up with git



### Task 1: Create Hamster Class
Create a Hamster class with the following attributes and methods:

***Attributes***:
- owner: a string, initially set as an empty string
- name: a string, set the name from parameter in constructor method
- price: an integer, set as 15

***Methods***:
- wheelRun(): log "squeak squeak"
- eatFood(): log "nibble nibble"
- getPrice(): return the price

Save and test your code.

### Task 2: Create Person Class
Create a Person class with the following attributes and methods:

***Attributes***:
- name: set name from parameter in constructor method
- age: initially 0
- height: initially 0
- weight: initially 0
- mood: integer starting at 0 initially
- hamsters: empty array initially
- bankAccount: initially set to 0

***Methods***:
- getName(): returns name
- getAge(): returns age
- getWeight(): returns weight
- greet(): logs a message with person's name
- eat(): increment weight, increment mood
- exercise(): decrement weight
- ageUp(): increment age, increment height, increment weight, 
- decrement mood, increment bank account by 10 (birthday money)
- buyHamster(hamster): push the hamster object onto the hamster array, increment mood by 10, decrement bankAccount by the value of the hamster (hint: use getPrice())

Save and test your code.

### Task 3: Create a Story with Person Class
Using the Person class, create a story following these steps:

- Instantiate a new Person named Timmy.
- Age Timmy five years.
- Have Timmy eat five times.
- Have Timmy exercise five times.
- Age Timmy nine years.
- Create a Hamster named "Gus".
- Set Gus's owner to the string "Timmy".
- Have Timmy "buy" Gus.
- Age Timmy 15 years.
- Have Timmy eat twice.
- Have Timmy exercise twice.

Feel free to update or add methods to automate some of these tasks. Save and test your code.

### Task 4: Create Chef Factory and Dinner Class
Create a Dinner class and a Chef factory class:

```js
class Dinner {
}

class Chef {
}
```

- Add a constructor to Dinner that sets the string properties appetizer, entree, and dessert.
- Add a method to Chef that takes three arguments and returns a new Dinner instance based on those arguments.
- Have the Chef create 3 Dinner instances and log the dinners.


Save and test your code.

## Submission Guide
When you have completed your homework, submit the appropriate link to your work depending on the mode you chose:

### Easy Mode
Submit the link to your repl.it project.

### Hard Mode
Submit the link to your GitHub repository.

Remember, if you encountered any issues with Git or setting up your local environment, copy and paste your code into repl.it and submit that link. Git issues are not an acceptable reason to not turn in this assignment. You can always submit your work using repl.it, CodePen, or another platform if you are having trouble with Git.

Good luck and happy coding!

# Theoretical HW: charCount

In this homework, you will be practicing working with frequency counters by creating a function called `charCount` that counts the occurrences of each character in a given string.

## Instructions

- Build this homework in repl.it.
- Write a function named `charCount` that accepts a single string argument and returns an object that represents the count of each character in the string.
- The returned object should have keys that represent the character with its value set to the how many times the character appears in the string argument.
- Upper and lower case characters should be counted as the same character. (Hard part)
- Space characters should be completely ignored. (Hard part)

## Examples

- `charCount('hello')` should return `{ h: 1, e: 1, l: 2, o: 1 }`.
- `charCount('Today is fantastic!')` should return `{ t: 3, o: 1, d: 1, a: 3, y: 1, i: 2, s: 2, f: 1, n: 1, c: 1, '!': 1 }`.

## Submission

- Submit the link to your repl.it solution.
