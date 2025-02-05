# Lesson: Understanding and Applying BEM Style to HTML and CSS

## Terminal Objectives:

1. Understand what BEM (Block Element Modifier) is and why it's used in modern web development.
2. Comprehend the structure of HTML code written in BEM style.
3. Create animations using the @keyframes CSS at-rule.
4. Implement basic CSS styling with BEM methodology.
5. Develop a header with unique styling.
6. Build a styled button with BEM.
7. Create a navigation menu with a pure CSS popup.
8. Discuss REM Scaling

---

# [Lets write some CSS click here for codesandbox](https://codesandbox.io/s/liberty-sfs-bem-gxmmf7?file=/css/style.css:3-6158) 

Fork the codesandbox by clicking the `fork` button link and lets begin writing this with a brief look at all the code first before we write it ourselves.

## What is BEM and Why Use It?

BEM stands for Block, Element, Modifier. It is a methodology that helps you to create reusable and maintainable code. It divides the user interface into independent blocks to help improve project scalability. Think of BEM as a filing system for your code; everything has its right place, making it easier to locate and manage styles.

This helps us incredibly once we learn the concept of component driven development in Unit 3.

---

## HTML Code Structure Using BEM

Let's explore the HTML code:

```html
<body>
      <div class="navigation"> <!-- Block: navigation -->
        <!-- Elements and Modifiers within the navigation block -->
        <input
            type="checkbox"
            class="navigation__checkbox"
            id="navi-toggle"
          />
          <label for="navi-toggle" class="navigation__button">
            <span class="navigation__icon">&nbsp;</span>
          </label>
          <div class="navigation__background">&nbsp;</div>
          <nav class="navigation__nav">
            <ul class="navigation__list">
              <li class="navigation__item">
                <a href="#" class="navigation__link"
                  ><span>01</span>About Liberty</a
                >
              </li>
              <li class="navigation__item">
                <a href="#" class="navigation__link"
                  ><span>02</span>Visit Liberty</a
                >
              </li>
              <li class="navigation__item">
                <a href="#" class="navigation__link"
                  ><span>03</span>Popular Stories About Liberty
                </a>
              </li>
              <li class="navigation__item">
                <a href="#" class="navigation__link"><span>04</span>Stories</a>
              </li>
              <li class="navigation__item">
                <a href="#" class="navigation__link"
                  ><span>05</span>Sign Up Now</a
                >
              </li>
            </ul>
          </nav>
      </div>
      <header class="header"> <!-- Block: header -->
        <div class="header__logo-box"> <!-- Element: logo-box within Block: header -->
          <span class="heading-tertiary"> LIBERTY </span> <!-- Modifier: 'tertiary' for heading class -->
        </div>
        <!-- Other Elements and Modifiers -->
        <div class="header__text-box">
            <h1 class="heading-primary">
              <span class="heading-primary--main">Liberty</span
              ><span class="heading-primary--sub">
                is where prosperity happens<br />coming soon...</span
              >
            </h1>
            <a class="btn btn--white btn--animated">Discover Liberty</a>
          </div>
      </header>
</body>
```

Notice how the class names are descriptive and focused, helping you immediately understand their purpose and where they belong.

---

Let's break down the provided CSS code:

**Keyframe Animations:**

```css
@keyframes moveInLeft {
  0% {
    opacity: 0;
    transform: translateX(-10rem);
  }
  80% {
    transform: translateX(1rem);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}

@keyframes moveInRight {
  0% {
    opacity: 0;
    transform: translateX(10rem);
  }
  80% {
    transform: translateX(-1rem);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}

@keyframes moveInBottom {
  0% {
    opacity: 0;
    transform: translateY(3rem);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}
```
1. `@keyframes moveInLeft`: This defines an animation with the name `moveInLeft`.
   - At the start (0%), the element has 0 opacity and is moved to the left by 10rem.
   - At 80%, it moves slightly to the right by 1rem.
   - By the end (100%), it is fully opaque and in its original position.

2. `@keyframes moveInRight`: A similar animation as above but from the right side.
   - At the start, the element is off to the right by 10rem.
   - At 80%, it slightly moves to the left by 1rem.
   - Ends in its original position with full opacity.

3. `@keyframes moveInBottom`: This animation moves the element from below.
   - Starts with 0 opacity and is moved down by 3rem.
   - Ends in its original position with full opacity.

**Global Styles:**
4. The `*, *::after, *::before` selector resets margin and padding for all elements and ensures that padding and border are included in an element's total width and height (box-sizing).
  
5. `html`: Sets a base font-size of 10px, often used in a technique called "REM scaling" for easier responsive design.

6. `body`: Sets basic styles for the entire body content - font properties, padding, and color.

```css
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 10px;
}

body {
  box-sizing: border-box;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  line-height: 1.7;
  color: #777;
  padding: 3rem;
}

```

**Header Styles:**
7. `.header`: Styles for the header section. It includes a linear gradient background, height, and a unique clipping path for a custom shape.

8-10. `.header__logo-box`, `.header__logo`, `.header__text-box`: These are positioning and sizing styles for logo and text within the header.

**Typography:**
11-15. `.heading-primary`, `.heading-primary--main`, and `.heading-primary--sub`: These are styles for the primary headings. They also incorporate the keyframe animations (`moveInLeft` and `moveInRight`) defined at the top.

16-17. `.heading-secondary`: Styles for secondary headings. It includes a hover effect that skews and scales the text and adds a text shadow.

18. `.heading-tertiary`: Styles for tertiary headings.

```css
.header {
  height: 95vh;
  background-image: linear-gradient(
    to right bottom,
    rgba(255, 221, 255, 0.1),
    rgba(153, 50, 204, 0.8)
  );
  background-size: cover;
  background-position: top;
  position: relative;
  -webkit-clip-path: polygon(0% 0%, 100% 100%, 100% 50%, 50% 100%, 0% 50%);
  clip-path: polygon(0% 0%, 100% 0%, 100% 50%, 50% 100%, 0% 50%);
}
.header__logo-box {
  position: absolute;
  top: 4rem;
  left: 4rem;
}
.header__logo {
  height: 3.5rem;
}
.header__text-box {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.heading-primary {
  color: #fff;
  text-transform: uppercase;
  backface-visibility: hidden;
  margin-bottom: 6rem;
}
.heading-primary--main {
  display: block;
  font-size: 6rem;
  font-weight: 400;
  letter-spacing: 3.5rem;
  animation-name: moveInLeft;
  animation-duration: 10s;
  animation-timing-function: ease-out;
}
.heading-primary--sub {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 1.75rem;
  animation: moveInRight 10s ease-out;
}

.heading-secondary {
  font-size: 3.5rem;
  text-transform: uppercase;
  font-weight: 700;
  display: inline-block;
  background-image: linear-gradient(to right, #fdf, #9932cc);
  color: transparent;
  letter-spacing: 0.2rem;
  transition: all 0.2s;
}
.heading-secondary:hover {
  transform: skewY(2deg) skewX(15deg) scale(1.1);
  text-shadow: 0.5rem 1rem 2rem rgba(0, 0, 0, 0.2);
}

.heading-tertiary {
  font-size: 1.6rem;
  font-weight: 700;
  text-transform: uppercase;
}
```

**Button Styles:**
19-26. `.btn`, `.btn--white`, `.btn:link`, `.btn:visited`, `.btn:hover`, etc.: These are styles for buttons. The code includes base styles, hover effects, and focus/active styles.

```css
.btn,
.btn:link,
.btn:visited {
  text-transform: uppercase;
  text-decoration: none;
  padding: 1.5rem 4rem;
  display: inline-block;
  border-radius: 10rem;
  transition: all 0.2s;
  position: relative;
  font-size: 1.6rem;
  border: none;
  cursor: pointer;
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
}
.btn:hover::after {
  transform: scaleX(1.4) scaleY(1.6);
  opacity: 0;
}

.btn:active,
.btn:focus {
  outline: none;
  transform: translateY(-1px);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
}

.btn--white {
  background-color: #ffffff;
  color: #777;
}
.btn--white::after {
  background-color: #fff;
}

.btn::after {
  content: "";
  display: inline-block;
  height: 100%;
  width: 100%;
  border-radius: 10rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: all 0.4s;
}

.btn--animated {
  animation: moveInBottom 0.5s ease-out 0.75s;
  animation-fill-mode: backwards;
}
```


**Navigation Styles:**
27-47. `.navigation__checkbox`, `.navigation__button`, `.navigation__background`, etc.: These styles pertain to the navigation menu, including its checkbox (often used in "hamburger" menus), button icons, and animated background.

```css
.navigation__checkbox {
  display: none;
}

.navigation__button {
  background-color: #fff;
  height: 7rem;
  width: 7rem;
  position: fixed;
  top: 6rem;
  right: 6rem;
  border-radius: 50%;
  z-index: 2000;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
}

.navigation__background {
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  position: fixed;
  top: 6.5rem;
  right: 6.5rem;
  background-image: radial-gradient(#fdf, #9932cc);
  z-index: 1000;
  transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);
}

.navigation__nav {
  height: 100vh;
  position: fixed;
  top: 0;
  left: -4rem;
  z-index: 1500;
  opacity: 0;
  width: 0;
  transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.navigation__list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
  text-align: center;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.navigation__item {
  margin: 1rem;
}

.navigation__link:link,
.navigation__link:visited {
  display: inline-block;
  font-size: 3rem;
  font-weight: 300;
  padding: 1rem 2rem;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #fff 50%
  );
  background-size: 220%;
  transition: all 0.4s;
}
.navigation__link:link span,
.navigation__link:visited span {
  margin-right: 1.5rem;
  display: inline-block;
}

.navigation__link:hover,
.navigation__link:active {
  background-position: 100%;
  color: #9400d3;
  transform: translateX(1rem);
}

.navigation__checkbox:checked ~ .navigation__background {
  transform: scale(80);
}

.navigation__checkbox:checked ~ .navigation__nav {
  opacity: 1;
  width: 100%;
  left:0;
}

.navigation__icon {
  position: relative;
  margin-top: 3.5rem;
}

.navigation__icon,
.navigation__icon::before,
.navigation__icon::after {
  width: 3rem;
  height: 2px;
  background-color: #333;
  display: inline-block;
}

.navigation__icon::before,
.navigation__icon::after {
  content: "";
  position: absolute;
  left: 0;
  transition: all 5s;
}

.navigation__icon::before {
  top: -0.8rem;
}
.navigation__icon::after {
  top: 0.8rem;
}
.navigation__button:hover .navigation__icon::before {
  top: -1rem;
}

.navigation__button:hover .navigation__icon::after {
  top: 1rem;
}

.navigation__checkbox:checked + .navigation__button .navigation__icon {
  background-color: transparent;
}

.navigation__checkbox:checked + .navigation__button .navigation__icon::before {
  top: 0;
  transform: rotate(135deg);
}

.navigation__checkbox:checked + .navigation__button .navigation__icon::after {
  top: 0;
  transform: rotate(-135deg);
}

```

**BEM (Block Element Modifier) Detailed Explanation:**
BEM is a naming convention for classes in HTML and CSS. Its primary goal is to help developers understand the relationship between the HTML and CSS in a given project. BEM stands for:
- **Block**: A standalone entity that is meaningful on its own. (e.g., `header`)
- **Element**: A part of a block that has no standalone meaning and is tied to its block. (e.g., `header__logo`)
- **Modifier**: A flag on a block or element used to change appearance or behavior. (e.g., `btn--white`)

**Key Aspects of BEM:**
- **Flat Structure**: Instead of nesting CSS selectors, BEM uses a flat structure which makes it more performant and less prone to specificity conflicts.
- **Modularity**: BEM provides better modularity in your CSS, making it easier to maintain and scale.
- **Readability**: By quickly glancing at a BEM class, a developer can decipher the structure and function of a block of HTML/CSS.

In the provided CSS code, the BEM methodology is evident:
- `.header` is a block.
- `.header__logo-box` and `.header__text-box` are elements inside the `.header` block.
- `.btn--white` and `.btn--animated` are modifiers of the `.btn` block.

BEM ensures that styles don't inadvertently "leak" into other elements, reducing bugs and making the code more maintainable. It's especially beneficial in large projects with multiple developers.
### REM Scaling:

The concept of REM scaling revolves around the usage of the `rem` unit in CSS. `rem` stands for "root em," and it is a relative unit of measurement. A single `rem` is equivalent to the font-size of the root element, typically the `<html>` element. When you set a base font-size on the `<html>` element, all subsequent `rem` units in your stylesheet will be based on that size.

**Why is REM Scaling Used?**

1. **Responsive Design**: It makes scaling font sizes across different devices or screen sizes easier. By adjusting the root font-size with media queries, you can easily scale the entire layout proportionally.
  
2. **Consistency**: Using `rem` units ensures consistency. Instead of manually adjusting pixel values for various elements, you can adjust the base value, and all `rem` units will adapt accordingly.

3. **Accessibility**: Users can resize text in their browsers. Using `rem` units respects the user's settings, ensuring better accessibility.

In the provided CSS, the line `html { font-size: 10px; }` sets the base size. This technique simplifies calculations because `1rem` is now equivalent to `10px`, `1.5rem` is `15px`, and so on.

### Frequently Asked Questions (FAQs) from the Provided CSS:

1. **What are the `@keyframes` used for?**
   - `@keyframes` are used to define animations in CSS. In the provided code, there are animations like `moveInLeft`, `moveInRight`, and `moveInBottom` that define how elements transition between styles over a certain duration.

2. **Why is `box-sizing: border-box;` important?**
   - The `box-sizing: border-box;` declaration ensures that padding and borders are included in an element's total width and height, making layout calculations more predictable.

3. **What is the purpose of the global reset `*, *::after, *::before`?**
   - This reset ensures that all elements (and their pseudo-elements) have consistent margins, paddings, and box-sizing properties, preventing any default browser styles from interfering with the layout.

4. **What does the `clip-path` property do in the `.header` class?**
   - `clip-path` defines a region in which the content of the element is displayed. In the provided code, it creates a unique polygonal shape for the header.

5. **How does the "hamburger" menu animation work?**
   - The provided CSS uses a combination of a hidden checkbox (`navigation__checkbox`), labels (`navigation__button`), and sibling selectors to control the visibility and animation of the menu (`navigation__nav`). When the checkbox is checked (by clicking the label/button), styles are applied to the subsequent siblings, causing the menu to appear and the button icon to change.

6. **What's the difference between `em` and `rem` units?**
   - Both `em` and `rem` are relative units. While `em` is based on the font-size of its closest parent, `rem` is always based on the root element's font-size, ensuring more consistent sizing throughout the document.

7. **Why are hover and active pseudo-classes used?**
   - These pseudo-classes add interactivity to elements when a user hovers over them or activates them. In the provided code, they are used to create visual feedback, such as changing colors, moving elements, and adding shadows.

Understanding these concepts and answers will help in creating more effective and responsive web designs with CSS.
### Key Takeaways

1. BEM helps in writing reusable, maintainable code.
2. The `@keyframes` rule provides control over CSS animations.
3. CSS resets normalize styles across browsers.
4. Specific class naming in BEM enhances readability and project scalability.

----------------------------------

References:


[All About Floats](https://css-tricks.com/all-about-floats/)

[Solving Clearfix](https://css-tricks.com/snippets/css/clear-fix/)

[linear gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient)
