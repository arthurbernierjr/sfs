
# **JavaScript Basics**

### **Lesson Objective**
By the end of this lesson, you will understand how to use JavaScript to add interactivity to a webpage. We’ll cover variables, data types, control flow, and functions, focusing on essential JavaScript concepts for beginners.

---

### **1. JavaScript Variables and Data Types**

Variables store data values, and JavaScript allows for several types:
- **`let`**: Declares a variable that can be updated.
- **`const`**: Declares a variable that cannot be updated.
- **`var`**: The older way to declare variables (now less common).

#### **Data Types**
- **String**: Text data, enclosed in quotes. E.g., `"Hello, World!"`.
- **Number**: Numeric data. E.g., `42`, `3.14`.
- **Boolean**: True or false values. E.g., `true`, `false`.
- **Array**: A list of values, defined with square brackets. E.g., `[1, 2, 3]`.
- **Object**: A collection of key-value pairs. E.g., `{ name: "Alice", age: 25 }`.

**Example: Declaring Variables**
```javascript
let name = "Alice";
const age = 25;
var isStudent = true;
```

#### **Practice Exercise: Declaring Variables**
1. Create variables to store your name, age, and favorite color.
2. Use `console.log()` to print each variable’s value to the console.

---

### **2. Control Flow**

Control flow structures help JavaScript make decisions and repeat actions.

#### **If Statements**
The `if` statement checks a condition and runs code if the condition is true.
```javascript
let score = 85;

if (score >= 90) {
    console.log("A grade");
} else if (score >= 80) {
    console.log("B grade");
} else {
    console.log("C grade or below");
}
```

#### **Loops**
- **For Loop**: Repeats a block of code a specified number of times.
  ```javascript
  for (let i = 0; i < 5; i++) {
      console.log(i);
  }
  ```
- **While Loop**: Repeats as long as a condition is true.
  ```javascript
  let count = 0;
  while (count < 5) {
      console.log(count);
      count++;
  }
  ```

#### **Practice Exercise: Control Flow**
1. Write an if statement to check if a number is even or odd.
2. Create a for loop that counts down from 10 to 1.

---

### **3. Functions**

Functions are blocks of code designed to perform specific tasks and can be reused. They take inputs (parameters) and can return a value.

#### **Defining and Using Functions**
```javascript
function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Alice"));  // Output: Hello, Alice!
```

#### **Practice Exercise: Writing Functions**
1. Write a function named `add` that takes two numbers and returns their sum.
2. Create a function named `multiply` that takes two numbers and returns their product.

---

### **4. JavaScript in the DOM**

JavaScript interacts with HTML through the Document Object Model (DOM). This allows JavaScript to manipulate HTML elements.

#### **Selecting and Modifying Elements**
- **`document.getElementById`**: Selects an element by its `id`.
- **`document.querySelector`**: Selects the first matching element for a given CSS selector.

**Example: Changing Text with JavaScript**
```html
<p id="message">Original Text</p>
<button onclick="changeText()">Change Text</button>

<script>
    function changeText() {
        document.getElementById("

message").innerText = "New Text";
    }
</script>
```

#### **Practice Exercise: DOM Manipulation**
1. Create an HTML button and a paragraph.
2. Write a JavaScript function that changes the paragraph’s text when the button is clicked.

---

### **Summary and Reflection**

- **CSS Flexbox and Grid**: Learned how to use Flexbox for one-dimensional layouts and Grid for two-dimensional layouts.
- **JavaScript Basics**: Covered variables, data types, control flow, functions, and DOM manipulation.

**Text 404-962-0908 with feedback and questions.**

**Reminder**: After completing each two-week block, schedule a one-on-one session to review progress and address questions.