---

track: "Unit 1"  
title: "Week 1 - CSS Fundamentals and JavaScript Basics"  
week: 1  
day: 1  
type: "lesson"  
topics: "CSS Flexbox & Grid, JavaScript Fundamentals"  

---

# **CSS Fundamentals: Flexbox and Grid**

### **Lesson Objective**
By the end of this lesson, you will understand how to use CSS Flexbox and Grid to create flexible, responsive layouts. You’ll learn the core concepts of each layout method, how to choose between them, and how to create practical layouts for web pages.

---

### **1. CSS Flexbox**

Flexbox is a CSS layout module designed to make it easier to design flexible and responsive layout structures. It’s especially useful for aligning items within a container or for dynamically adjusting item sizes within a row or column.

#### **Core Flexbox Concepts**
1. **Flex Container**: The parent element containing flex items. Set with `display: flex;`.
2. **Flex Items**: The children within the flex container, which will automatically arrange themselves based on the flex properties.

#### **Basic Flex Properties**
- **`display: flex;`**: Defines a flex container.
- **`flex-direction`**: Determines the main axis (row or column).
  - `row` (default), `row-reverse`, `column`, `column-reverse`.
- **`justify-content`**: Aligns items along the main axis.
  - Options include `flex-start`, `center`, `space-between`, `space-around`, etc.
- **`align-items`**: Aligns items along the cross-axis (perpendicular to the main axis).
  - Options include `flex-start`, `center`, `stretch`, etc.
- **`flex-wrap`**: Controls whether items wrap onto multiple lines.
  - Options: `nowrap` (default), `wrap`, `wrap-reverse`.

#### **Example: Simple Flexbox Layout**
```html
<div class="flex-container">
    <div class="flex-item">Item 1</div>
    <div class="flex-item">Item 2</div>
    <div class="flex-item">Item 3</div>
</div>
```

```css
.flex-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 200px;
    background-color: #f1f1f1;
}

.flex-item {
    width: 100px;
    height: 100px;
    background-color: #4CAF50;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}
```

In this example, the items are evenly spaced within the container and centered vertically.

#### **Practice Exercise: Flexbox Layout**
1. Create a flex container with four items.
2. Use `flex-direction: column` to arrange items in a vertical stack.
3. Experiment with `justify-content` and `align-items` to observe how items move within the container.

---

### **2. CSS Grid**

CSS Grid is a powerful layout system that allows you to create two-dimensional layouts with rows and columns. It’s ideal for creating more complex layouts that require both horizontal and vertical alignment.

#### **Core Grid Concepts**
1. **Grid Container**: The parent element that contains the grid items. Set with `display: grid;`.
2. **Grid Items**: The children within the grid container, which are placed within defined rows and columns.

#### **Basic Grid Properties**
- **`display: grid;`**: Defines a grid container.
- **`grid-template-columns`**: Defines the number and size of columns.
  - Example: `grid-template-columns: 1fr 1fr 1fr;` creates three equal columns.
- **`grid-template-rows`**: Defines the number and size of rows.
  - Example: `grid-template-rows: 200px auto 100px;`.
- **`gap`**: Sets the spacing between rows and columns.
  - Example: `gap: 10px;`.
- **`grid-column`** and **`grid-row`**: Specifies an item’s span across columns and rows.

#### **Example: Simple Grid Layout**
```html
<div class="grid-container">
    <div class="grid-item">Item 1</div>
    <div class="grid-item">Item 2</div>
    <div class="grid-item">Item 3</div>
    <div class="grid-item">Item 4</div>
</div>
```

```css
.grid-container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto;
    gap: 15px;
}

.grid-item {
    background-color: #2196F3;
    color: white;
    padding: 20px;
    text-align: center;
}
```

In this layout, `grid-template-columns` creates two columns of different widths, while `gap` defines spacing between items.

#### **Practice Exercise: CSS Grid Layout**
1. Create a 3x2 grid (3 columns, 2 rows) with six items.
2. Experiment with `grid-template-columns` and `grid-template-rows` to adjust item sizing.
3. Use `grid-column` and `grid-row` to make one item span multiple columns and rows.

---

### **When to Use Flexbox vs. Grid**
- **Flexbox**: Best for simple, one-dimensional layouts (either row or column).
- **Grid**: Best for more complex, two-dimensional layouts (both rows and columns).

---
