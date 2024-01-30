### 1. Terminal Learning Objectives

By the end of this lesson, students should be able to:

1. Understand the importance of clean code in JavaScript.
2. Apply JavaScript Standard Style guidelines to their code.
3. Refactor existing code to follow the JavaScript Standard Style.

### 2. Explanation

Clean code is essential for maintainability, readability, and collaboration in software development. JavaScript Standard Style is a set of rules that ensure your JavaScript code is consistent and easy to read. By following these rules, you can make your code more accessible to others and reduce potential errors.

Key principles of JavaScript Standard Style include:

- Using 2 spaces for indentation.
- Using single quotes for strings except to avoid escaping.
- No unused variables.
- Adding a space after keywords (if, else, for, etc.) and before the opening brace.
- Adding a space before a function declaration's parentheses.
- Always using strict equality (=== and !==).
- Infix operators must be spaced.
- No semicolons at the end of statements.

### 3. Demonstration

Let's take a look at a simple example of code that is not following JavaScript Standard Style and refactor it to meet the guidelines:

```javascript
// Non-standard style
function add(x,y){
return x+y;
};
console.log("The sum is "+add(5, 10));
```

Refactored using JavaScript Standard Style:

```javascript
// JavaScript Standard Style
function add (x, y) {
  return x + y
}
console.log('The sum is', add(5, 10))
```

### 4. Imitation

Now that you've seen an example of refactoring code to follow JavaScript Standard Style, try to refactor the following code snippet on your own:

```javascript
function greet(name){
console.log("Hello, "+name+"!");
};
greet("Alice");
```

### 5. Practice

To practice applying JavaScript Standard Style, refactor the code below to meet the guidelines:

```javascript
function calculateBMI(weight_kg,height_m){
var bmi=weight_kg/(height_m*height_m);
return bmi.toFixed(1);
};
console.log("Your BMI is: "+calculateBMI(75, 1.78));
```

Remember to keep the guidelines in mind as you work through the imitation and practice sections. Ensure you follow the rules, such as using two spaces for indentation, single quotes for strings, and no semicolons at the end of lines.