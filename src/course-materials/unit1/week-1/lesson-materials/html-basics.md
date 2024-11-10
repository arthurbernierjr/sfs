
# **Self-Guided Lesson: HTML Basics**

### **Lesson Objective**
By the end of this lesson, you will understand the fundamental structure of HTML, including basic tags, document structure, and element nesting. You will be able to create a well-structured HTML page and understand the importance of semantic elements for accessibility and SEO.

### **Lesson Outline**

#### **1. Introduction to HTML**
- HTML stands for **HyperText Markup Language** and is the standard language used to create web pages.
- HTML provides structure to web content by using tags, which browsers interpret to render elements on the screen.
- HTML files are plain text files saved with the `.html` extension and can be viewed in any web browser.

#### **2. Basic HTML Document Structure**
The basic structure of an HTML document includes:
  - `<!DOCTYPE html>`: This declaration tells the browser to interpret the document as HTML5.
  - `<html>`: The root element of the document.
  - `<head>`: Contains metadata about the document, such as its title, links to stylesheets, and scripts.
  - `<title>`: Sets the page title displayed in the browser’s title bar or tab.
  - `<body>`: Contains all the visible content of the web page, like text, images, and links.

**Example: Basic HTML Document**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Web Page</title>
</head>
<body>
    <h1>Welcome to My Web Page</h1>
    <p>This is a simple HTML page with a heading and a paragraph.</p>
</body>
</html>
```

#### **3. Common HTML Tags**
- **Headings**: `<h1>` to `<h6>` tags define headings, with `<h1>` being the highest level.
  - Example: `<h1>Main Title</h1>`
- **Paragraphs**: `<p>` tag defines a paragraph.
  - Example: `<p>This is a paragraph.</p>`
- **Links**: `<a href="URL">` creates a clickable hyperlink.
  - Example: `<a href="https://www.example.com">Visit Example</a>`
- **Images**: `<img src="image.jpg" alt="Description">` displays an image.
  - Example: `<img src="profile.jpg" alt="Profile Picture">`
- **Lists**:
  - **Ordered List** (`<ol>`): Numbered list items using `<li>` tags.
  - **Unordered List** (`<ul>`): Bulleted list items using `<li>` tags.
  - Example:
    ```html
    <ul>
      <li>First Item</li>
      <li>Second Item</li>
    </ul>
    ```

#### **4. Semantic HTML Elements**
Semantic elements help convey the meaning and structure of the content. Some common semantic tags include:
  - `<header>`: Represents introductory content or a navigation section.
  - `<nav>`: Defines navigation links.
  - `<main>`: The primary content area of the page.
  - `<footer>`: Contains footer content, often with links or copyright information.

#### **5. Nesting and Closing Tags**
  - HTML elements can be nested within one another to create complex layouts.
  - Proper nesting is essential for HTML validity and accessibility.
  - Example of correct nesting:
    ```html
    <div>
      <h2>My Interests</h2>
      <ul>
        <li>Reading</li>
        <li>Traveling</li>
      </ul>
    </div>
    ```

### **Self-Check Questions**
1. What is the purpose of the `<html>` tag?
2. How do you add a clickable link in HTML?
3. What is the difference between ordered and unordered lists?

### **Practice Exercise**
1. Create a basic HTML document with:
   - A title in the `<head>` section.
   - A `<h1>` heading for the main title.
   - A paragraph describing yourself.
   - An unordered list of three of your favorite hobbies.
2. Save the file as `my_page.html` and open it in a browser to see your results.

---
