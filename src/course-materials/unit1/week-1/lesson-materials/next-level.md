---
track: "Unit 1"  
title: "Week 1"  
week: 1  
day: 1 
type: "lesson"  
topics: "Advanced HTML, CSS, and JavaScript Fundamentals"  

---

# **Advanced HTML, CSS, and JavaScript Fundamentals**

### **Lesson Objective**
In this lesson, we’ll expand on the foundational skills learned in Week 1. We’ll explore how HTML, CSS, and JavaScript work together to create responsive and interactive web pages. Students will build a simple trivia game app using HTML, CSS, and JavaScript, pulling data from the JService API.

---

## **Lesson Outline**

### **Review and Build on HTML, CSS, and JavaScript Basics**

The HTML and CSS foundation set up in Week 1 taught us how to create structured and styled content for a static web page. This week, we will focus on how to:
1. Add greater styling control with CSS specificity.
2. Enhance the structure and semantic value of HTML.
3. Use JavaScript to bring dynamic, real-time functionality to a web page.

Let’s get started by diving deeper into each of these elements.

---

### **1. HTML: Adding Structure and Semantic Value**

In Week 1, we used basic HTML tags like `<h1>`, `<p>`, `<img>`, and `<a>` to structure a webpage. Now, we’ll look at how **semantic elements** such as `<header>`, `<nav>`, `<main>`, and `<footer>` improve content organization, accessibility, and search engine optimization (SEO).

#### **Semantic HTML Tags**
- **Header**: Contains introductory content or navigational links.
- **Nav**: Encloses a section of navigation links.
- **Main**: Wraps the primary content of the page.
- **Footer**: Contains footer content like copyright information.

**Example: Semantic HTML Layout**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Advanced HTML Structure</title>
</head>
<body>
    <header>
        <h1>My Portfolio</h1>
        <nav>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>

    <main>
        <section id="about">
            <h2>About Me</h2>
            <p>This is the about section.</p>
        </section>

        <section id="projects">
            <h2>My Projects</h2>
            <p>This section will showcase projects.</p>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 My Portfolio</p>
    </footer>
</body>
</html>
```

### **2. CSS: Specificity and Styling Control**

In Week 1, we learned basic CSS rules for styling HTML elements. Today, we’ll dive into **CSS specificity**, which helps CSS determine which styles to apply when multiple rules target the same element.

#### **CSS Specificity Levels**
- **0-0-0**: Global selector `*` – lowest specificity.
- **1-0-0**: ID selectors, e.g., `#mainContent` – highest specificity for individual elements.
- **0-1-0**: Class selectors, attribute selectors, and pseudoclasses, e.g., `.highlight`.
- **0-0-1**: Element selectors, e.g., `p`, `h1`.

#### **CSS Selector Types**
| Selector  | Example | Description |
| --------- | ------- | ----------- |
| element element | `div p` | Selects all `<p>` elements inside `<div>` elements |
| element > element | `div > p` | Selects all `<p>` elements directly under a `<div>` element |
| element + element | `div + p` | Selects the first `<p>` after a `<div>` |
| element ~ element | `p ~ ul` | Selects every `<ul>` element that appears after a `<p>` element |

#### **Exercise: Practice CSS Specificity**
- **Task**: Use IDs, classes, and element selectors to apply specific styles to elements within your HTML structure.
- **Goal**: Understand how specificity affects which styles are applied, especially when multiple styles target the same element.

Example:
```css
/* Element selector */
p {
    color: blue;
}

/* Class selector */
.text-highlight {
    color: green;
}

/* ID selector */
#unique-section {
    color: red;
}
```

---

### **3. JavaScript: Event-Driven Programming and DOM Manipulation**

JavaScript’s event-driven model allows us to create interactive, dynamic web pages that respond to user actions. We’ll use JavaScript to add functionality to our HTML structure and make the page interactive.

#### **The Event-Driven Model**
JavaScript can “listen” for events (e.g., clicks, mouse movements, form submissions) and trigger code to respond. This is the basis of event-driven programming.

#### **The Document Object Model (DOM)**
The DOM is a structured representation of HTML content. It allows JavaScript to access and modify page elements, adding interactivity to static content.

**Example**: Adding a Button Click Event
```html
<button id="greetButton">Greet</button>
<p id="greetingText"></p>

<script>
    document.getElementById("greetButton").addEventListener("click", function() {
        document.getElementById("greetingText").innerText = "Hello, World!";
    });
</script>
```

In this example, clicking the button changes the text inside the `<p>` element. JavaScript makes this real-time update without reloading the page.

---

### **4. Hands-On Project: Building a Trivia Game with HTML, CSS, and JavaScript**

For this project, we’ll build a basic trivia game app using the [JService API](https://jservice.io) for data. The app will:
1. Fetch a trivia question when a button is clicked.
2. Display the question in the HTML.
3. Style the button and displayed question using CSS.

#### **Step 1: HTML Structure**
Start by creating a basic HTML structure with a button and a placeholder for the trivia question.

```html
<h1>Trivia Game</h1>
<button id="fetchTrivia">Get a Trivia Question</button>
<p id="triviaQuestion">Click the button for a question!</p>
```

#### **Step 2: CSS Styling**
Style the button and question text for a more engaging experience.

```css
body {
    font-family: Arial, sans-serif;
    text-align: center;
}

#fetchTrivia {
    background-color: #007BFF;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

#triviaQuestion {
    margin-top: 20px;
    font-size: 1.2em;
    color: #333;
}
```

#### **Step 3: JavaScript and API Integration**
Add JavaScript to fetch trivia questions from the JService API and display them on the page when the button is clicked.

```javascript
document.getElementById("fetchTrivia").addEventListener("click", fetchTrivia);

function fetchTrivia() {
    fetch("https://jservice.io/api/random")
        .then(response => response.json())
        .then(data => {
            const question = data[0].question;
            document.getElementById("triviaQuestion").innerText = question;
        })
        .catch(error => console.error("Error fetching trivia:", error));
}
```

**Explanation**:
1. **Event Listener**: When the button is clicked, `fetchTrivia` is called.
2. **API Fetch**: Fetches a random trivia question from the API.
3. **Display Question**: Updates the content of `#triviaQuestion` with the trivia question.

---

### **5. Additional JavaScript Feature: Hamburger Menu**

Add a simple hamburger menu for a more interactive interface. This menu will display or hide links based on the checkbox’s checked state.

#### **HTML for Hamburger Menu**
```html
<input type="checkbox" id="menuToggle">
<label for="menuToggle">☰ Menu</label>
<nav id="menu">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
</nav>
```

#### **CSS Styling for Hamburger Menu**
```css
#menuToggle {
    display: none;
}

#menuToggle:checked + label + #menu {
    display: block;
}

#menu {
    display: none;
    background: #333;
    color: white;
    padding: 10px;
}

#menu a {
    color: white;
    display: block;
    padding: 5px 0;
}
```

This menu uses a checkbox as a toggle, displaying the menu when checked and hiding it when unchecked.

---

### **Summary and Reflection**

In this lesson, we took our understanding of HTML, CSS, and JavaScript further:
1. **HTML Structure**: Enhanced with semantic elements for improved organization.
2. **CSS Specificity**:

 Learned to control styling priority using selectors.
3. **JavaScript Event-Driven Programming**: Added interactivity to the page, responding to user actions.
4. **API Integration**: Built a simple trivia app using JavaScript to fetch and display data from an external API.

**Text 404-962-0908 with feedback and questions.**

### **Reminder**: After completing each two-week block, schedule a one-on-one session with your instructor to review progress, ask questions, and receive personalized feedback.