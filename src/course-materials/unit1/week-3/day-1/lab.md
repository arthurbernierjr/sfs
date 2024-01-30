# Lab Activity: Create Your Own Keyframe Animations

## Objective

In this lab, you will put into practice what you've learned about keyframe animations in CSS. You will create three unique animations for text elements.

---

## Terminal Objectives

1. Understand how to create custom keyframe animations.
2. Successfully implement the animations on text elements.
3. Experiment with various properties and values in keyframe definitions.

---

## Instructions

### Step 1: Set Up Your Environment

Create a new HTML file and a corresponding CSS file. Link the CSS file in your HTML document. Add three text elements in the HTML file to which you'll apply the animations. For example:

```html
<h1 class="text-animation-one">Hello, World!</h1>
<h2 class="text-animation-two">Learning is Fun!</h2>
<p class="text-animation-three">CSS animations are awesome.</p>
```

### Step 2: Create Your First Animation

1. Create a keyframe animation called `textGlow`. This animation should make the text element glow by changing the `text-shadow` property over a span of time.
2. Apply this keyframe animation to `.text-animation-one`.

### Step 3: Create Your Second Animation

1. Create a keyframe animation called `textSlide`. This animation should slide the text from left to right.
2. Apply this keyframe animation to `.text-animation-two`.

### Step 4: Create Your Third Animation

1. Create a keyframe animation called `textRotate`. This animation should rotate the text 360 degrees.
2. Apply this keyframe animation to `.text-animation-three`.

### Step 5: Implement and Test

1. Implement the CSS for these animations.
2. Refresh your HTML file in the browser to test each animation. Make sure they are working as expected.

Here's an example for one of the animations:

```css
@keyframes textGlow {
    0% {
        text-shadow: none;
    }
    50% {
        text-shadow: 0 0 10px #00ff00;
    }
    100% {
        text-shadow: none;
    }
}

.text-animation-one {
    animation: textGlow 3s infinite;
}
```

Change this however you want to make it `glow` the way you like. Repeat this process for the other two animations, adjusting properties and durations as desired.

---

### Key Takeaways:

- You've created custom keyframe animations for text elements.
- You've explored the creative possibilities of keyframe animations in CSS.

After completing this lab, you should have a deeper understanding of how to create and apply keyframe animations. Make sure to test your animations and adjust any values as necessary.


# Submission
Use the thread in slack to submit this lab assignment