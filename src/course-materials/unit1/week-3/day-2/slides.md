# Lesson: Adding Images in HTML and Styling Cards in CSS

## Terminal Objectives

1. Understand how to embed images in HTML using the `img` tag.
2. Learn to create and style cards using CSS.
3. Combine HTML and CSS skills to create a card with an embedded image.

---

## Adding Images in HTML Using the `img` Tag

### What is the `img` Tag?

The `img` (image) tag is used to embed an image in an HTML page. It has several attributes like `src`, `alt`, and `width`/`height` for better control over how the image is displayed and accessed.

### How to Add an Image?

The `src` attribute specifies the path to the image you wish to display. 

```html
<img src="path/to/your/image.jpg" alt="Description of image">
```

The `alt` attribute provides a text description of the image, which is crucial for accessibility.

Think of adding an image like hanging a painting. The `src` tells you which painting to hang, and the `alt` text serves as a small description plaque beside it.

---

## Styling Cards in CSS

### What is a Card?

A card is a flexible container for holding a variety of content like images, text, and actions. Cards are useful for displaying information in a concise, easy-to-read format.

### Basic Card Structure

Your basic card structure in HTML might look something like this:

```html
<div class="card">
    <img class="card-img" src="image.jpg" alt="Card image">
    <div class="card-content">
        <h2>Title</h2>
        <p>Description</p>
    </div>
</div>
```

### Styling a Card with CSS

Since you're already familiar with the CSS box model, flexbox, and CSS Grid, let's dive right into styling the card.

```css
.card {
    width: 300px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.card-img {
    max-width: 100%;
    height: auto;
}

.card-content {
    padding: 15px;
}
```

Here, we've used `box-shadow` to give it a lifted appearance and `border-radius` to round the corners. The `flex-direction: column;` stacks the image and content vertically.

---

### Combined Example

Let's put it all together. Create an HTML page, add an image within a card, and then style it.

HTML:
```html
<div class="card">
    <img class="card-img" src="path/to/your/image.jpg" alt="A beautiful landscape">
    <div class="card-content">
        <h2>Landscape</h2>
        <p>This is a stunning landscape.</p>
    </div>
</div>
```

CSS:
```css
/* Include the card styles mentioned earlier */
```

---

### Key Takeaways

- You can easily embed images in HTML using the `img` tag.
- Cards offer a neat way to bundle different types of content.
- Combining these skills lets you create more visually appealing and functional web elements.

By the end of this lesson, you should be comfortable with adding images to HTML and creating styled cards in CSS.