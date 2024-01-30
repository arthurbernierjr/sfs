# Week 9 HW

## Written

**Homework Assignment: Peer Code Review**

For this homework assignment, you are tasked with performing a peer code review. You will select one of your classmate's code repositories to evaluate, offering constructive feedback and suggestions for improvements. Here's how to proceed:

1. **Code Selection:** Choose a piece of code written by one of your classmates. This will be the unit 1 project. If you are not sure where to find this, refer to the shared project spreadsheet or reach out to your classmate directly. 

2. **Review the Code:** Spend some time understanding what the code is intended to do. Run it if possible, and inspect each part of the code. Consider factors like clarity, efficiency, functionality, and adherence to coding standards and best practices.(to the best of your knowledge) 

3. **Write Feedback:** Write a detailed review of the code. Your feedback should include:
   - What the code does well.
   - Suggestions for improvement. Be specific and explain why you believe your suggestion would improve the code.
   - Any parts of the code that were unclear to you, and suggestions for how they could be made more understandable.
   - Notable strengths of the coder's style or approach.

4. **Share Your Review:** Share your feedback directly with the classmate whose code you reviewed. This can be done through a document, an email, or through comments on the code itself.

5. **Follow Up:** Be prepared to engage in a discussion about your feedback. Remember, the goal is to help each other grow as developers, so be open and receptive to any questions or discussions that arise from your review.

6. **Additional Instructions:** If there are any additional steps required by the instructional team, be sure to complete these as well. (you know if we gave you additional steps)

Remember, the goal of a code review isn't to criticize, but to provide constructive feedback that helps all of us improve as programmers. Always be respectful and supportive in your feedback. Happy reviewing!


## Practical

***First Express Homework***

Practice the Basics of Express

#### Learning Objectives

- Set up some express servers for practice
- make some get routes
- use url/query parameters

---

## Technical Requirements
1. Must be able run without syntax errors (ok if it breaks after the user tries to do something, though do try to comment on the code that isn't working)
2. Must get functionality required for each section working


## Learning Objectives
* Practice setting up express applications.
* Practice creating custom routes.
* Practice using parameters from a request.


## Getting Started

In your `homework` directory for today, create a Javascript file `server.js`. Write your answers inside this one js file.

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

## Hungry for more?
### HackerRank

Sign up for [HackerRank](https://www.hackerrank.com/). Solve a few of the problems (this will help get you prepared for interviews! A lot of companies use this site for pre-screening interviews.). Some companies use hackarrank as part of an interview process, so getting familiar with the interface can be a good move

**Submission:**

Submit your code using GitHub. Include a README that explains how to run your application


## Theoretical

Watch [myGA module: Big O Notation](https://my.generalassemb.ly/activities/511)

What is the worst-case time complexity for the following algorithms?

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


# Week 10 HW (ANOTHER ONE)

## Written

1. Explain what a REST API is. What makes an API "RESTful"?
   
2. What is Node.js and why is it often used when building server-side applications?
   
3. Express.js is a popular framework used in conjunction with Node.js. What are some of the key features of Express.js that make it useful for building web servers?
   
4. In Express.js, what is middleware and how is it used?
   
5. In terms of HTTP verbs, what is the difference between `GET`, `POST`, `PUT`, `PATCH`, and `DELETE`? When would you use each in the context of a RESTful API?
   
6. How would you handle parameters in the URL with Express.js? Provide an example.
   
7. How can you handle error situations when building an Express.js API?
   
8. When building a RESTful API with Express.js, how would you structure your routes for a resource like `items`? What would the endpoints look like for performing CRUD (Create, Read, Update, Delete) operations?
   
9. How would you parse incoming request bodies in Express.js? Provide an example of how you might handle a JSON payload.
   
10. How can testing be implemented for a RESTful API built with Node and Express? Provide an example of a test case for one of your API endpoints.

For each question, provide a detailed response. Try to incorporate examples where possible to demonstrate your understanding. Once complete, submit your responses for review.

## Practical

**Homework: Creating a REST API with Express**

The goal of this assignment is to create a REST API using Express.js, which is a fast, unopinionated, and minimalist web framework for Node.js. This will strengthen your understanding of HTTP, REST, and Express.js.

**Tasks:**

1. Set up a new Node.js project and install Express.js.
2. Create a new Express.js application and set up a server that listens on port 3000.
3. Define routes for the following operations:
   - `GET /items`: This should return a list of items.
   - `POST /items`: This should accept a JSON body with `name` and `price` fields, add a new item to the list, and return the added item with a generated `id`.
   - `GET /items/:id`: This should return the item with the given `id`.
   - `PUT /items/:id`: This should accept a JSON body with `name` and `price` fields, update the item with the given `id`, and return the updated item.
   - `DELETE /items/:id`: This should delete the item with the given `id` and return the deleted item.
4. Implement error handling for the situations where an item with a given `id` does not exist, or the provided `name` or `price` fields are invalid.
5. Test your API using a tool like Postman or curl.

**Submission:**

Submit your code using GitHub. Include a README that explains how to run your application and how to use the API.

**Rubric:**

- Project Setup (20%)
- Route Implementation (50%)
- Error Handling (20%)
- Documentation (10%)



## Theoretical (This one is hard give yourself time, might be stolen)

```js
// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[undefined, undefined],
//     [undefined, undefined]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]
```

