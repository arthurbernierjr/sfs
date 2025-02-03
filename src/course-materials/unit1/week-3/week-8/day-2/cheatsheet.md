## DOM Manipulation Cheat Sheet

### Understanding the DOM
- The **Document Object Model (DOM)** is an interface for HTML and XML documents.
- It represents the page so that programs can change the document structure, style, and content.
- The DOM represents the document as nodes and objects.
- JavaScript can add, change, remove HTML elements/attributes, change CSS styles, and react/create events in the page.

### Element Selection
- `document.getElementById('id')`: Selects an element by its ID.
- `document.querySelector('selector')`: Selects the first element that matches the CSS selector.
- `document.querySelectorAll('selector')`: Selects all elements that match the CSS selector.

### Element Manipulation
- `element.innerHTML`: Get or set the HTML content of an element.
- `element.style.property`: Change the style of an element (e.g., `element.style.color = 'red'`).

### Creating & Removing Elements
- `document.createElement('tag')`: Create a new element.
- `element.appendChild(childElement)`: Add a child element to the parent element.
- `element.remove()`: Remove an element from the DOM.

### Classes and Styles
- `element.classList.add('class')`: Add a class to the element.
- `element.classList.remove('class')`: Remove a class from the element.
- `element.classList.toggle('class')`: Toggle a class on the element.

### Traversing the DOM
- `element.childNodes`: Returns a live NodeList of child nodes.
- `element.children`: Returns a live HTMLCollection of child elements.
- `element.parentElement`: Returns the parent element.
- `element.nextElementSibling`: Returns the next sibling element.

### Event Listeners
- `element.addEventListener('event', handlerFunction)`: Adds an event listener to an element.
- Events can be `click`, `mouseover`, `mouseout`, `keydown`, `keyup`, etc.
- Use `event.target` within the handler function to get the element that triggered the event.

### Common Tasks
- Change text: `element.textContent = 'New text'`.
- Change style: `element.style.backgroundColor = 'blue'`.
- Add an event: `element.onclick = function() { /* ... */ }`.
- Create new element with text: 
  ```javascript
  var newEl = document.createElement("div");
  var text = document.createTextNode("Hello");
  newEl.appendChild(text);
  document.body.appendChild(newEl);
  ```
- Remove an element: `document.getElementById('myId').remove()`.

### Event Propagation
- Use `event.stopPropagation()` to prevent the event from bubbling up or capturing down the DOM tree.
- Add `{ capture: true }` as the third argument to `addEventListener` to run the event handler in the capturing phase.

---

### Example Tasks for Homework Assistance:

1. **Select and Modify Element**:
   ```javascript
   // Select the element with id 'myId'
   var el = document.getElementById('myId');
   // Modify its text content
   el.textContent = 'Updated Text';
   ```

2. **Toggle a Class on Click**:
   ```javascript
   // Select the button element
   var btn = document.querySelector('button');
   // Add click event listener
   btn.addEventListener('click', function() {
     // Toggle the 'active' class on each click
     btn.classList.toggle('active');
   });
   ```

3. **Create and Append New Elements**:
   ```javascript
   // Function to add new list item
   function addNewItem(text) {
     // Create a new li element
     var newLi = document.createElement('li');
     // Set its text content
     newLi.textContent = text;
     // Append the new li to the ul element
     document.querySelector('ul').appendChild(newLi);
   }
   ```

Use this cheat sheet to quickly reference how to interact with the DOM using JavaScript. It can be a helpful tool for students to complete their homework and understand the concepts of DOM manipulation.