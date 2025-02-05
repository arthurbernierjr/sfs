# JavaScript: DataTypes, Variables, and Control Flow

---

## Lesson Structure

1. **Terminal Objectives**
2. **Variables, DataTypes, DRY Principle, and Control Flow Explained**
3. **Demonstration of Strings, Numbers, Booleans, Arrays, Objects**
4. **Demonstration of IF, Else, Else If**
5. **Demonstration of While Loops, Do While and For Loops**
6. **Frequently Asked Questions**

---



### Terminal Objectives (5 minutes)

- Understand basic JavaScript DataTypes (String, Number, Boolean, Array, Object)
- Learn how to declare and use variables
- Grasp the DRY (Don't Repeat Yourself) principle
- Master basic control flow: Conditional statements and loops

---

## 1. Intro to JavaScript

> _Atwood's Law:_<br>
> "Any application that can be written in JavaScript will eventually be written in JavaScript."<br>
> _\- Jeff Atwood, co-founder of Stack Overflow_

*Languages on GitHub - Percentage of Monthly Active Users:*
![](https://i.imgur.com/HJapAIF.png)

The popularity of JavaScript has grown with the growth of web-based applications because it is the only language included in web browsers.

> NOTE: The WebAssembly specification allows the browser to execute code from other languages such as C & C++, however, JavaScript is still required for WebAssembly to work. In other words, WebAssembly does not replace JavaScript.

<br>
<br>

#### JavaScript's Role

The primary responsibility of JavaScript is to allow developers to implement behavior in web applications via client-side script that runs in the browser.

![](https://i.imgur.com/FwvjQVO.jpg)

> The popularity of a technology known as _Node.js_ has made JavaScript popular outside the browser as well.

<br>
<br>

#### A Few Facts About JavaScript:

- Created in 10 days in 1995 by [Brendan Eich](https://en.wikipedia.org/wiki/Brendan_Eich)
- Not to be confused with Java (although both have syntaxes based upon the "C" programming language)
- JavaScript is an implementation of ECMAScript, a standard maintained by the European Computer Manufacturers Association)
- Modern browsers have fully implemented version ES2015 (formerly named ES6) [This website](http://kangax.github.io/compat-table/es6/) reports the implementation status in all major browsers. ES2015 was a major update that added numerous new features which we'll cover in SEI

<br>
<br>

### 2. Variables, DataTypes, DRY Principle, and Control Flow Explained (15 minutes)

- **Variables**: Temporary storage for data.
- **DataTypes**: The kind of data. Examples are Strings, Numbers, Booleans, Arrays, and Objects.
- **DRY Principle**: "Don't Repeat Yourself", a software development concept aimed at reducing duplication.
- **Control Flow**: The order in which individual statements are executed.
<br>
<br>

#### Purpose

The purpose of a **variable** in computer programming is to hold or reference data.

#### `var`, `let` or `const`?

Variables are declared using the `var`, `let` or `const` keywords.

Until ES2015 came along, `var` was our only option and has been for the past 25+ years - so obviously, it does the trick!

Why was `let` and `const` added to the language then?

<br>
<br>

##### scope

The difference between `var` and `let`/`const` is what we call _scope_. Scope involves the accessibility of variables & functions at a given point in the code.

`var` has _function scope_ (also known as _local scope_) and `let`/`const` have more limited _block scope_, which in computer programming, is considered a better practice because it reduces the chance of accidentally changing a variable's value.

<br>
<br>

##### `let` vs. `const`

The difference between `let` and `const` is that a `const` variable cannot be re-assigned to - you can assign data to it once, and that's it:

```javascript
let x = 25;
x = 100;  // no problem

const z = 25;
z = 100;  // Uncaught TypeError: Assignment to constant variable
```

As we'll learn later,  objects (or an object sub-type like array, function, etc.) is a reference type.

Objects are reference types because, if we assign an object to a variable, that variable does not actually hold the object, rather it holds a "reference" that points to the object in memory.  As such, when you assign an object to a `const`, you **can** make changes to the object itself, you just can't re-assign to the `const`:

```javascript
const person = {name: 'Fred'};
person.age = 25;  // no error
person = {name: 'Barney'}  // Uncaught TypeError: Assignment to constant variable
```

#### Identifiers & Defining Variables

_Identifiers_ are used to name variables, as well as named functions:

```javascript
let points;  // the identifier is "points" and names the variable "points"
```

We can also assign a value to a variable at the time we declare it by using the `=` (assignment) operator:

```javascript
let name = "Fred Flintstone";  // two birds with one stone!
```

and change it's value later...

```javascript
name = "Barney";  // note that we only declare a variable once
```

Multiple variables can be defined in a single statement, separated by commas:

```javascript
let name = 'Wilma', age, town = 'Bedrock';

// above is equivalent to
let name = 'Wilma';
let age;
let town = 'Bedrock';
```

##### Identifier Naming Rules

In JavaScript, when naming variables, the convention is to name the identifiers using lowerCamelCase, e.g.,  `numActivePlayers`.

Identifiers in JS:

- Are case-sensitive!
- Cannot begin with a number
- Can contain letters, digits, underscores, and dollar signs

❓ **Is `car-3` a valid variable identifier?**

**Any questions regarding variables?**


<br>
<br>
<br>

#### Dynamic vs. Static Typed Languages

Dynamically-typed languages such as JavaScript, Python and Ruby allows variables to be assigned different types of data during runtime (as the program executes).

For example, in JavaScript we can do this:

```javascript
// Declare variable named data and initialize with a number
var data = 123;

// Reassigning a different type of data is allowed
data = 'Hello';

```

However, statically-typed languages such as Java and C++ required a variable's type to be declared and cannot be changed:

```javascript
// Declare variable as an integer and initialize
int data = 123;

// Assigning anything other than an integer raises an error
data = "Hello";  // NOT ALLOWED
```

> There is a newer language called _TypeScript_ you might hear about - this language is a superset of JS and adds strong typing to JS.  Many developers agree that strong typing makes code less error prone and is worth the extra effort to code in.

<br>
<br>

#### Exploring JavaScript's Data Types

JavaScript has seven main data types:

- Six primitive data types which represent a **single** value
- One Object (reference) type that can contain any number of primitive values and/or other objects

Note that an object can be one of JavaScript's [built-in object sub-types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects) such as:

- Array
- Function (yes, functions are objects in JavaScript!)
- RegExp
- Date
- Error
- BigInt

<img src="https://i.imgur.com/02XLHjQ.png">

> **KEY POINT: If a variable does not hold one of the six primitive values, it is an object!**

Okay, let's briefly go through the data types...

---

### 3. Demonstration of Strings, Numbers, Booleans, Arrays, Objects (20 minutes)

- **Strings**: Text data.
    ```javascript
    const name = "Arthur";
    ```
- **Numbers**: Numeric data.
    ```javascript
    const age = 35;
    ```
- **Booleans**: True or false.
    ```javascript
    const isOnline = true;
    ```
- **Arrays**: Ordered collections.
    ```javascript
    const colors = ["red", "green", "blue"];
    ```
- **Objects**: Key-value pairs.
    ```javascript
    const user = {name: "Arthur", age: 35};
    ```
---

### 4. Demonstration of IF, Else, Else If (15 minutes)

- **IF Statement**: Basic condition.
    ```javascript
    if (age > 18) {
        // Code here
    }
    ```
- **Else Statement**: What to do when IF condition is false.
    ```javascript
    else {
        // Code here
    }
    ```
- **Else If Statement**: Additional conditions.
    ```javascript
    else if (age === 18) {
        // Code here
    }
    ```
---

### 5. Demonstration of While Loops, Do While and For Loops (20 minutes)

### Basic Types of Control Flow

- **Sequence**:
	- Statements execute one at a time in sequence.

- **Branching**:
	- Different code paths are executed based upon a conditional expression.

- **Looping**:
	- Code is repeatedly executed while a condition is truthy.


<br>
<br>


## Conditional Expressions


- In JavaScript, what is considered to be True/Truthy & False/Falsey?

- Comparison Expressions


<br>
<br>
<br>

### What is True/Truthy & What is False/Falsey?

- To test what is truthy and what is falsey, let's type the following code into `script.js` inside our `repl.it`:

	```javascript
	if (true) {
	  console.log('truthy!');
	} else {
	  console.log('falsey!');
	}
	```

- We can "run" this code using repl.it's built in JavaScript Engine by pressing the `[ run ]` button

- Now we can easily test expressions by typing it in the place of `true`   

- Why this _truthy_ and _falsey_ business? Why not just use _true_ and _false_?

- Answer: _Truthy_ and _falsey_ are conceptual and an attempt to treat non-boolean expressions as booleans (`true` or `false`) during runtime. The concept of truthiness/falseyness will often allow us to write code that is more concise

- For example, the number `3`, is considered to be _truthy_ - test it out

<br>
<br>
<br>



### What is True/Truthy & What is False/Falsey? (cont)

- Most things in JS are _truthy_, so it's easier to remember what's _falsey_...

- There are two data types that are always falsey:   `null` and `undefined`

- There are four values that are falsey:   `false`, `0` (zero), `NaN` (special value of number), and an _empty string_ (FYI, a string with a value of a space is not empty)

- Everything else is truthy!

- **Take a couple of minutes to test a few of the above**

<br>
<br>
<br>


### The Not Operator

- The _not operator_ (`!`), also known as the "bang" operator, "flips" a true or truthy expression to the boolean value of `false`, and vice-versa.  

- For example, test the following expressions:

	```javascript
	!false === true // true
	!null === true // true
	!3 === false // true
	!'' === true // true
	```

- A double `!` operator is a great way to force an expression into its actual boolean value of `true` or `false`:

	```javascript
	console.log(!!3); // outputs true
	```

<br>
<br>
<br>


### Boolean Logic   <small><em>Comparison Operators</em></small>

- Let's review these Comparison Operators that you saw in the pre-work:
	- **`===`** strict equality - best practice
	- **`==`** performs type conversion (called coercion) if necessary
	- **`!==`** strict inequality
	- **`!=`** inequality
	- **`<`** less than
	- **`>`** greater than
	- **`<=`** less than or equal
	- **`>=`** greater than or equal

- The logical operators **`||`** and **`&&`** are more powerful than meets the eye

- The logical `||` (OR) operator always returns the first operand if it is truthy, otherwise the second operand is returned:

	```javascript
	'hello' || 'goodbye'  // evaluates to 'hello'
	0 || null  // evaluates to null
	```


- The logical `&&` (AND) operator always returns the first operand if it is falsey, otherwise the second operand is returned:

	```javascript
	'hello' && 'goodbye'  // evaluates to 'goodbye'
	0 && null  // evaluates to 0
	```

<br>
<br>
<br>


### Conditional Expressions


- The `if`, `for` and `while` statements all require a _conditional expression_. For example:

	```javascript
	let x = 1;
	while (x <= 10) {
	  var msg = 'Item ' + x;
	  console.log(msg);
	  x++;
	}
	```
	Where, `x <= 10` is the conditional expression.

- **❓ If `x <= 10` was replaced with just `x`, would it still be considered a valid conditional expression?**

<br>
<br>
<br>

- **While Loops**: Loop based on a condition.
    ```javascript
    while (condition) {
        // Code here
    }
    ```
- **Do While Loop**: Executes at least once.
    ```javascript
    do {
        // Code here
    } while (condition);
    ```
- **For Loops**: Loop with initializer, condition, and iteration expression.
    ```javascript
    for (let i = 0; i < 10; i++) {
        // Code here
    }
    ```


---

### 6. Frequently Asked Questions (15 minutes)

- **Q1**: Can a variable's DataType change?
    - **A1**: Yes, JavaScript is dynamically typed.

- **Q2**: What is hoisting?
    - **A2**: JavaScript's behavior of moving variable and function declarations to the top of their scope before execution.

- **Q3**: Why use '===' instead of '=='?
    - **A3**: '===' checks both value and type, while '==' only checks value.

---

## Key Takeaways

- You've learned essential building blocks of JavaScript: DataTypes and Variables.
- You've seen how control flow structures your code.
- These fundamental skills pave the way for more advanced JavaScript tasks.