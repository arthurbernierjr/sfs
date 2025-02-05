# Lesson: Understanding Keyframe Animations in CSS

## Terminal Objectives

1. Understand what keyframe animations are in CSS.
2. Learn how to define a keyframe animation.
3. Implement a simple button animation using keyframes.

---

## What Are Keyframe Animations?

Keyframes in CSS allow you to create smooth animations by gradually changing from one set of CSS styles to another. The animation is broken down into frames, like a flipbook, and CSS styles are applied at specific points during the animation timeline.

Imagine you're filming a ball rolling across a table. Instead of filming, you take photos at different stages: just as it starts, midway, and when it stops. These stages are your "keyframes," and the ball's movement between these frames is your animation.

---

## Code Explanation

``` css
@keyframes moveInLeft {
    0% {
        opacity: 0;
        transform: translateX(-10rem); }
    80% {
        transform: translateX(1rem); }
    100% {
        opacity: 1;
        transform: translate(0); } }

@keyframes moveInRight {
    0% {
        opacity: 0;
        transform: translateX(10rem); }
    80% {
        transform: translateX(-1rem); }
    100% {
        opacity: 1;
        transform: translate(0); } }

@keyframes moveInBottom {
    0% {
        opacity: 0;
        transform: translateY(3rem); }
    100% {
        opacity: 1;
        transform: translate(0); } }

```

Let's break down the given keyframe animations:

### `moveInLeft`
1. `0%`: The element starts with 0 opacity and is shifted 10rem to the left.
2. `80%`: It moves 1rem to the right.
3. `100%`: It becomes fully opaque and settles into its final position.

### `moveInRight`
- Similar to `moveInLeft`, but the initial and 80% positions are reversed.

### `moveInBottom`
- Starts from the bottom with 0 opacity and moves to its final position.

---

## Implementing Keyframe Animations on a Simple Button

1. Create an HTML file and add the following button code:

```html
<button class="animated-button-left">Left</button>
<button class="animated-button-right">Right</button>
<button class="animated-button-bottom">Bottom</button>
```

2. In the same HTML file, link to a CSS file where you'll add the provided keyframes and class styles.

```css
/* Add the given keyframes here */

.animated-button-left {
    animation: moveInLeft 2s ease-out;
}

.animated-button-right {
    animation: moveInRight 2s ease-out;
}

.animated-button-bottom {
    animation: moveInBottom 2s ease-out;
}
```

In this example, each button is animated over 2 seconds using an 'ease-out' timing function.

---

### Key Takeaways:

- Keyframes help create animations by defining styles at various points.
- You've successfully applied keyframe animations to simple buttons.

By the end of this lesson, you should be able to explain what a keyframe animation is and implement one on a basic element like a button.