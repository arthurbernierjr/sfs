---
track: "HW"
title: "Week 13 - HW"
week: 13
day: 3
type: "homework"
topics: "First Express HW & Big O Notation"
---
# Week 13 HW - What's inside
## Synopsis You have 2 deliverables:
1. A Github Repo with 2 seperate express apps with simple yet tricky functionality 
1. An exercise that requires you watch/complete a module from MYGA and then answer some questions about some code that is provided. 

[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly)
# Practical Homework: First Express Homework(build 2 express apps in the same git repo)

Practice the Basics of Express

#### Learning Objectives

- Set up some express servers for practice
- make some get routes
- use url/query parameters

#### Prerequisites

- Nodejs
- npm packages
- Introduction to expressjs
- Request/response/ how the internet works basics
- Basic understanding of routing
- JavaScript, HTML fundamentals

---

## Technical Requirements
1. Must be able run without syntax errors (ok if it breaks after the user tries to do something, though do try to comment on the code that isn't working)
2. Must get functionality required for each section working


## Learning Objectives
* Practice setting up express applications.
* Practice creating custom routes.
* Practice using parameters from a request.


## Getting Started

In the `software_homework/unit_2/week-13` directory run `git init`, then create a file called `hw-part-one` Javascript file `server.js`. Write your answers inside this one js file for `Greetings, Tip Calculator & Magic 8 Ball`

* `npm init -y`. You should receive a `package.json`.

Install express. `npm i express`. Check your files.

:elephant: _Hint_: You can check to make sure your installation was successful in one of the following places:

- Your `package.json` file should have `express` listed in the dependencies.
- You could also check in your `node_modules` folder to see an`express` folder.
- Require `express` and set the `app`. (look back to the markdown from today if you need more help on how to do this).
- Tell the server where to listen for requests (the port).

## Greetings

2. Make a route `'/greeting'` that sends a generic greeting to the screen like "Hello, stranger".

3. Give the `greeting` route a param `/:name`

4. When hitting the route, the page should display a message such as "Hello, <name>", or "What's up, `<name>`", or "`<name>`! It's so great to see you!" (ex. hitting `'/greeting/Jimmy-boy'` should display `Wow! Hello there, Jimmy-boy` on the page).

&#x1F534; **Commit** <br>
<hr>
"Greeting express application created."
<hr>

## Tip Calculator

2. Your app should have a route of `'/tip'` and it should expect *2 params*. One should be `total` and one should be `tipPercentage`.

3. When hitting the route, the page should *display how much your tip will be* based on the total amount of the bill and the tip percentage. (ex. hitting `'/tip/100/20'` should display `20` on the page).

&#x1F534; **Commit** <br>

<hr>
"Tip Calculator express application created."
<hr>


## Magic 8 Ball

2. Create a route of `'/magic'` that should expect a phrase in the URL that ask the Magic 8 ball a question.

3.  So if the user hits that route and asks a question of "Will I be a Millionaire" (ex. `'/magic/Will%20I%20Be%20A%20Millionaire'`) he should have return to him his question AND a random Magic 8 ball response (see the array below) on the  screen.

4. We can't use spaces in the url, so we use `%20` to express a space in the url.

5. So if the user hits that route and asks a question of "Will I be a Millionaire" he should get his question asked and a random Magic 8 ball quote on the  screen.
- Send the magic 8 ball response back between html `<h1>` tags
- Use this array of Magic 8 ball responses.....

```
["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
```

&#x1F534; **Commit** <br>
<hr>
"Magic 8 Ball express application created."
<hr>

## Take one Down and Pass it Around

In a folder parallel to `hw-one` You will now Build a second express application that enables users to count down the number
of bottles of beer. Don't like beer? Pass around bottles of soda, kombucha, or milk etc.

## Instructions
- `cd ..` (you are trying to go back to `sowftare_homework/unit-2/week-13`)
- `mkdir pass-it-around`
- `cd pass-it-around`
- `npm init -y`
- build a basic express server (this is the second part of the hw)
- You will now have 2 `node js` apps inside the same git repo.


### Requirements

- On the home page (`get "/"`), users should see:
  - "99 Bottles of beer on the wall"
  - a link that says "take one down, pass it around"
  - this should link to `/98`, where the number represents the number of bottles left.
- When a number is given in the url (`get "/:number_of_bottles"`), users should see:
  - The number of bottles of beer on the wall (i.e. `98 Bottles of beer on the wall.`)
  - a link to "take one down, pass it around", where the href is number of bottles in the parameter minus 1.
- If there are 0 bottles left, do not show a link to "take one down"
  - Add a link to start over, which directs the user back to the home page.

#### Hints
 - You should use an `anchor` tag with an `href` to link to the next 'page'

#### Bonus

- Have some more fun

Update your page to be something like

```
99 little bugs in the code
99 little bugs
Take on down
Patch it around
127 bugs in the code
```

Make the bugs go down by one, but then have some sort of functionality where the bug count can `randomly` go up

You have a lot of freedom to make it work how you want!

## Hungry for more?(bonus)

### Fibonacci

Back in your main app:

1.  Add `Fibonnaci` as a comment in your application.

2. Create a route 'fibonacci'

3. This route will take one param, the number we will operate on.

4. If the number param is not a [fibonacci number](https://en.wikipedia.org/wiki/Fibonacci_number), print out "I can tell this is not a fibonacci number."

5. If the number is a Fibonacci number print out "Very good. It is Fibonacci."

&#x1F534; **Commit** <br>
<hr>
"Fibonacci."
<hr>


**Deliverables:** 

- A GitHub repository containing your project code on github.com

**Evaluation Criteria:**

- Correctness and completeness of your code.

Happy coding!




# Theoretical HW(Big O Notation)

![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) 

# Big O Notation

## Overview
This lesson covers the basics of Big O notation.

There are two components to this lesson:
1. [myGA module: Big O Notation](https://my.generalassemb.ly/activities/511)
2. Delevirable Exercise: **Analyzing Algorithms** shown at the bottom

## If the link doesn't work follow these instructions
1. Log into myGA Dashboard
2. Look for Introduction to Computer Science and open it
3. Go to the `Big O Notation Lesson`

## Learning Objectives
By the end of this lesson, you'll be able to:
- Explain how Big O notation is used to describe algorithms.
- Define constant, linear, quadratic, logarithmic, and factorial Big O runtimes.
- Analyze algorithms to determine their Big O runtime.

## Prerequisites
* None

## Duration
1.5 hours total:
* 0.5 hour myGA
* 1 hour in exercise

## Additional Resources
- [The Big O Cheat Sheet](http://bigocheatsheet.com/) is the authority on Big O complexities.

# Big-O Notation Exercises

## Instructions
1. Read each function below and analyze it
2. In a Codepen describe what the function does and then answer `What is the worst-case time complexity for the algorithm aka the Big O?`

#### #1

```javascript
function wordOccurrence(word, phrase){
  let result = 0
  const array  = phrase.split(' ')
  for(let i = 0; i < array.length; i++){
    if(word.toLowerCase() === array[i].toLowerCase()){
      result++;
    }
  }
  return result
}
```

#### #2

```javascript
function bubble_sort(list){
  for(let i = 0; i < list.length - 1; i++){
    for(let j  = 0; j < list.length - 2; j++){
      if(list[j+1] < list[j]){
        const temp = list[j];
        list[j] = list[j+1];
        list[j+1] = temp;
      }
    }
  }
  return list;
}
```

#### #3
```javascript
function factorial(n){
  if(n === 0){
    return 1;
  }else{
    return n * factorial(n-1);
  }
}
```

#### #4

```javascript
function bobIsFirst(people){
  return people[0] == 'bob'
}
```

#### #5

```javascript
function isPalindrome(input){
  const stack = [];
  let output = "";
  for(let i = 0; i < input.length; i++){
    stack.push(input[i]);
  }
  while(stack.length){
    output += stack.pop();
  }
  return output == input
}
```

#### #6
```javascript
function sumOfDivisors(n){
  let result = 0;
  let i = 1;
  while(i < n){
    if( n % i == 0){
      result += i;
    }
    i++;
  }
  return result
}
```

#### #7
```javascript
function printAllNumbersThenSumPairs(numArray){
  numArray.forEach((num)=>{
    console.log(num);
  });
  numArray.forEach((num, index)=>{
    if(index < numArray.length - 1){
      console.log(num + numArray[index+1])
    }
  });
}
```

#### #8
```javascript
function isPrime(num){
  if(num == 1 || num == 2){
    return false
  }
  for(let i = 2; i < num - 1; i++){
    if(num % i == 0){
      return false
    }
  }
  return true
}
```
**Deliverables:** 

- A GitHub repository containing your project code on github.com

**Evaluation Criteria:**

- Correctness and completeness of your code.


---
