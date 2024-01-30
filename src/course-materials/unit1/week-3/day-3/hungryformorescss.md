# Lesson: The Basics of SCSS

## Terminal Objectives:

1. Understand the fundamental differences between SASS and SCSS.
2. Learn the syntax of SCSS.
3. Discover the utility of variables in SCSS.
4. Understand the concept of nested rules.
5. Work with functions and mixins.
6. Learn about SCSS compilers and how to set up one.

---

## Introduction to SCSS and SASS

SCSS (Sassy Cascading Style Sheets) and SASS (Syntactically Awesome Style Sheets) are both pre-processors that compile down to CSS. They introduce advanced features like variables, nested rules, and mixins, making your stylesheet more maintainable and organized.

- **SASS**: Indentation-sensitive and omits braces and semicolons.
- **SCSS**: More like CSS, includes braces and semicolons.

---

## Getting Started with SCSS

To begin working with SCSS:

1. Fork and clone a sample repository.
2. Run `npm i` to install dependencies.
3. Run `npm start` to start the React server.
4. Open a new terminal tab and run:
   1. `npm i node-sass -S`
   2. Rename `App.css` to `App.scss`

You're now ready to write SCSS code in your project.

---

## Syntax Overview: SCSS vs CSS

### CSS Example

```css
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
```

### SCSS Example

```css
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
}
```

---

## Using Variables in SCSS

While CSS utilizes custom properties with `:root` and `var()`, SCSS allows the use of `$` for variable assignment.

```css
$primary-color: #3498db;

.nav-link {
  color: $primary-color;
}
```

---

## Nested Rules

In SCSS, you can nest styles within selectors.

⚠️ Keep nesting shallow to reduce complexity and bandwidth.

```css
.nav {
  ul {
    margin: 0;
    li { display: inline-block; }
  }
}
```

---

## Functions and Mixins

### Functions

SCSS provides built-in functions like darken, lighten, adjust-hue.

```css
button {
  background-color: darken($primary-color, 10%);
}
```

### Mixins

Reusable style blocks. You can even pass variables to mixins.

```css
@mixin flexCenter($direction) {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: $direction;
}
```

---

## SCSS Compilers

Since browsers can't interpret SCSS, you'll need a compiler. One such tool is [Live SASS Compiler for VS Code](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass).

---

### Key Takeaways

1. SCSS enhances CSS by adding features like variables, nested rules, and mixins.
2. Syntax matters: SASS and SCSS have different syntax but offer the same features.
3. Variables make your code more maintainable and readable.
4. Nesting should be done carefully to avoid complexity.
5. Functions and mixins provide reusable logic for styling.
6. Compilers are necessary to convert SCSS to browser-readable CSS.