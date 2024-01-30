---
track: "Unit 1"
title: "Week 1 - Day 2"
week: 1
day: 2
type: "lesson"
topics: "Icebreaker"
---


## INTRO to ICEBREAKER!

Two truths and a lie with Instructor Demo

- Write two truths and a lie about yourself in slack

```
1. I have never seen the Godfather
2. I am barefoot right now! 
3. I make my bed every morning without fail
```

Did it work? It'll look like this:

![](https://i.imgur.com/mj6I4i6.png)

- If you made a mistake go ahead and fix it and send it to yourself again
- When you've got it, send it out to the `partytime` channel
- Everyone will click on 1, 2 or 3
- Once everyone in the group posts we'll find out if the class guessed your lie!
- We'll do a few rounds, everyone will get a chance

To add the 1,2 and 3 emojis
Hover over a message and look for the more menu

![](https://i.imgur.com/EIF6Uat.png)

then click on the smiley face, you can narrow your choices by typing in the search bar

![](https://i.imgur.com/rhSrDG8.png)

# Datatypes


## Lesson Objectives
- Be able to identify the basic datatypes in JavaScript
- Be able to write some basic JavaScript following proper syntax and conventions



### Strings

A string is made up of characters, it is wrapped in quotes or backticks

Here are some examples:

- "Hello, world"
- 'Hello, galaxy'
- \`Hello, universe\`

**GOTCHA** - many word applications (including Slack) convert dumb quotes `""` or `''` into smart quotes `“...”` - JavaScript doesn't recognize smartquotes as valid code

#### Activity
- Console log Hello, World - in the three different ways listed above

### Numbers

Numbers, in JavaScript can be both integers and floating point numbers (numbers with decimals).

- `1` - integer (whole number)
- `1.1` - floating point number (number with a decimal)
- `Infinity` (must be capital I) and `-Infinity`
- NaN - not a number a value that arises when one attempts mathematical operations on one or more things that are not numbers

![](/SubwayNaN.jpeg)


#### Activity
Console log the following:
- 100
- 1 + 1

### Variables

A variable can be made up of letters, numbers and some characters (like `_` and `$`). It cannot start with a number. It is capable of holding any kind of data. Variables are case sensitive: blackCat is not the same as backcat or BlackCat or BLACKCAT etc.

It is **NOT** wrapped in quotes - this is how JavaScript distinguishes a string (has quotes) versus a variable (no quotes)

It must be declared using `let` or `const`. You can use `var`, but `var` is an older syntax.

JavaScript convention for variable names is to use camelCase, this is different from snake_case (though languages like ruby and python use this), and sausage-case (or kebab-case) which you'll see in HTML.

```js
  const a = 'the letter a'
  let bB8 = 8
  var c3po = 'cool robot'
```

#### Activity

Without running the following code, try to determine:
```js
let a = '';
let b = 'bongos';
let c = 'get your';

a = b;
b = c;
c = a;
```

### Semicolons

¯\\_(ツ)_/¯

Most of the time, you do not need a semi-colon for JavaScript.

Should you always use a semi-colon? This is hotly debated and will vary depending on your company/team.

Be open minded, try out different styles - but do try to be consistent within a lab/hw/project.

### Concatenating Values
Sometimes (oftentimes), you need to put expressions together.

JavaScript let's us add strings and numbers together with `+`

```javascript
console.log('hello' + ' world');
```

> => 'hello world'

We can insert values of variables into our strings:

```javascript
const adjective = 'beautiful';

console.log('What a ' + adjective + ' day!!');
```

> => "What a beautiful day!!"

```javascript
const adjective = 'crummy';

console.log('What a ' + adjective + ' day!!');
```

> => "What a crummy day!!"

### Activity (5 mins)

* Use the `+` operator to **concatenate** these strings together within a console.log: "Please", "squeeze", "the", "cheese". Make sure there are spaces in-between each word.

	> => "Please squeeze the cheese"

* Extra

	With the variable `const word = 'believe'`, replace the string "squeeze" with the `word` variable.

	> => "Please believe the cheese"

* Extra

	Output a console log "The sum of 5 and 10 is 15" where the values for 5 and 10 are saved to variables, and where 15 comes from those variables being summed.


### Booleans & Operators

The values `true` and `false`

Additionally, in the next lesson we'll cover Boolean operators and checks for equivalency  like `||`, `&&`, `===`, `>` etc.

### Null, Undefined

These values mean that the value is not assigned


### Arrays and Objects

Arrays (called lists in other languages) can hold many items  and different types of items - these items can be numbers, strings, variables, and even other arrays!

An array is represented with square brackets `[]` and each item is separated by commas. We'll have an entire lesson dedicated to them!

```js
[1,2,3,4]
```

Objects (sometimes called dictionaries or hashes in other languages) can hold many items, but they have key and value pairs. We'll have an entire lesson dedicated to them!

An object is represented with curly braces `{}` and each key is separated from its value with a `:` and each key value pair is separated by a comma.

```js
{
  school: 'General Assembly',
  class: 'Software Engineering Immersive',
}
```

### typeof

If you need to figure out the type of something you can use `typeof`

Let's try it:

```js
console.log(typeof 1)
console.log(typeof 'hello')
console.log(typeof true)
```

### A Deeper Look: Pass By Value vs Pass By Reference

1. **Introduction to Pass by Value and Pass by Reference**
   - Define pass by value and pass by reference
   - Explain how each method affects function arguments and variables

2. **Pass by Value in JavaScript**
   - Explain how JavaScript handles primitive data types (e.g., numbers, strings, booleans) when passed as arguments to functions
   - Demonstrate a simple example of pass by value in JavaScript

3. **Pass by Reference in JavaScript**
   - Explain how JavaScript handles non-primitive data types (e.g., objects, arrays) when passed as arguments to functions
   - Demonstrate a simple example of pass by reference in JavaScript

4. **Comparing Pass by Value and Pass by Reference**
   - Compare and contrast the behavior of pass by value and pass by reference in JavaScript
   - Discuss scenarios in which each method is useful or preferable

5. **Hands-on Activity**
   - Guide students through implementing functions that demonstrate pass by value and pass by reference behavior in JavaScript
   - Encourage students to experiment with different data types and function arguments to gain a deeper understanding of these concepts

