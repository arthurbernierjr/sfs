---
track: "Unit 1"
title: "Week 2 - Day 1"
week: 2
day: 1
type: "lesson"
topics: "HTML, CSS & JS Part 1"
---


# HTML, CSS & JS
     
<center>

## Review How the Internet Works

![](/images/ciad1.png)


## HTML, CSS & JavaScript

![](https://bigpoppacode.io/img/htmlcssjs.gif)

![](/images/ciad5.png)

</center>

  Developing websites is similar to baking a cake. The Hypertext Markup Language (HTML) serves as the structure and content, akin to flour in the recipe – it's considered the backbone of a website and conveys what kind of information users will find on each page. 
  
  To create an inviting aesthetic design, Cascading Style Sheets (CSS), like sugar or spices found in any delicious dish, adds colors, fonts and spacing for visual appeal. Finally JavaScript rounds out this web development trifecta comparable to eggs that help bind all other ingredients together; making dynamic effects possible without refreshing pages every time new content appears or elements need changing.
  
  Together, HTML, CSS, and JavaScript are used to create the overall look and feel of a website, and make it interactive for users.
  

## Writing in HTML

The first language we’ll be writing in is HTML (Hypertext Markup Language). 
HTML will create the objects that will appear on your page before applying any kind of style or establishing any kind of functionality. 



💡Think of it this way: If HTML were a part of the body, it would be the bones. 

HTML is composed of logically named tags
The tags can also have attributes applied to them, to further specify what’s inside of them.
Some tags are self-closing*, meaning they don’t have an ending tag. 

```html
<div></div>
<p></p>
<br>
<title></title>
<body></body>
<h1></h1>
<img>
```


![](/images/ciad6.png)
![](/images/ciad7.png)
![](/images/ciad8.png)
![](/images/ciad9.png)
![](/images/ciad10.png)
![](/images/ciad11.png)

  
## CSS Under The Hood




## CSS REFRESHER Intro


When the web started, monitors were all fairly similar. Even when CSS was created and implemented, the way people viewed websites was still quite similar.

Because of this, CSS was designed to have features similar to print and newspaper layouts and many things were set by pixel size and the goal was to have a design be 'pixel perfect'

As monitor technology improved, more widths and sizes became available. Browser technology also advanced in many ways, including allowing for browsers to be resized to nearly any size. Finally, mobile devices were introduced that were not only  much smaller than a typical monitor, they also had two possible orientations.

## Can I use?

As new technologies arise in HTML and CSS, some browsers are faster to adopt them than others. In the past, IE was often the least able to adapt changes.

To check whether a certain feature is compatible in a browser, we can check a web site called [`Can I use`](https://caniuse.com)

Let's search for `flexbox` (you'll learn about it in a later lesson). As you can see it is fully compatible in all browsers except for IE, where it is partially supported.  


## Should I Prefix?

If you find a feature that is not supported, or not fully supported, you can go to [`Should I Prefix`](http://shouldiprefix.com/)

There is a list of CSS features that either no longer require a prefix (coded in green). Or are in blue. If they are blue, you can expand them and see how you would write the vendor prefixes, so you can have compatibility across browsers.

Things are always changing, but right now a feature called `appearance` requires vendor prefixing. You can see an example below.

For the appearance feature, you would write the property three times. Two times would include the vendor prefix so that it can be used in different browsers.

As you look at older code, you may see vendor prefixes for features that no longer require it. It's ok! It won't break anything. But you won't need to include those vendor prefixes on new work.

![vendor prefix](https://i.imgur.com/OCHkMlT.png)

You can also use a CSS prefixer to write the prefixes for you, then just copy paste [Pleaeease.io](http://pleeease.io/play/)


## How CSS works

<center>

### The breakdown of a CSS Selector

![](/images/ciad14.png)

![css-selector](https://media.git.generalassemb.ly/user/15881/files/d3651500-7e97-11ea-8931-de69a2b6003c)

### How CSS is read by the browser
![css-works-1](https://media.git.generalassemb.ly/user/15881/files/c9431680-7e97-11ea-8a3c-4b96c1d8e1f2)

</center>

When a webpage is loaded in the browser first the page is loaded, then <br>
the html page is parsed, then the css is loaded and the Dom is created ( more on the Dom next week),<br>
then the CSS is Parsed and the browser decides how to resolve conflicting CSS and processes final values, <br>
Once that happens we then create the CSS Object Model, then we get the render tree, then we render the website with the visual formatting model, <br>
Then we get our website.

## Forget Everything I just Said
1. You don't need to understand all of that to write good CSS
1. Main takeaway is this , the CSS gets parsed and resolves conflicts between your styles
1. The way css figures out what CSS should be valued as more important is know as CSS Selector Specificity
1. Specificity is what you need to understand

![importance-specificity-sourceorder](https://media.git.generalassemb.ly/user/15881/files/ccd69d80-7e97-11ea-8762-f23952dd1fec)



## Specificity Broken Down
![specifishity](https://media.git.generalassemb.ly/user/15881/files/cfd18e00-7e97-11ea-8f5e-a38930f30cf5)

## Specificity: How it works
- 0-0-0: Global selector
- 1-0-0: ID selector
- 0-1-0: Class selector (Also attribute selector & pseudoclass)
- 0-0-1: Element Selector

- Descendant Selector Combinator (' ')
- Child Selector Combinator ('>')
- Sibling Selector Combinator ('~')
- Adjacent Sibling Selector Combinator ('+')

---------

| Selector  | Example | Description |
| ----- | ------ |  ------ |
element element | div p | Selects all `<p>` elements inside `<div>` elements |
element > element | div > p | Selects all `<p>` elements where the parent is a `<div>` element |
element + element | div + p | Selects the first `<p>` element that are placed immediately after `<div>` elements|
element ~ element | p ~ ul | Selects every `<ul>` element that are preceded by a `<p>` element |

```
Specificity: The less than obvious
The * selector, or global selector, has a specifity of 0.

Combinators, like ~, >, space, and + have no value

ul li {} 0-0-2
ul > li {} 0-0-2
:not has no value, but parameter selector does
```


## Lets write some Code and experiment with this

- Go to repl.it instead of JS we will now use it to write some HTML & CSS together with our JS

- Lets play with specifity

- Use document.querySelector

- Display an object in the browser

- Descendant Selector Combinator (' ')
- Child Selector Combinator ('>')
- Sibling Selector Combinator ('~')
- Adjacent Sibling Selector Combinator ('+')

----------------------------------


JavaScript's event-driven architecture is a programming model in which the flow of the program is determined by events such as user actions, sensor outputs, or messages from other programs. In this architecture, the program sets up event listeners that wait for specific events to occur, and then triggers a callback function to handle the event when it occurs.

 Event-driven programming is at the heart of JavaScript development, enabling developers to respond quickly and efficiently to user actions. An apt analogy for this can be found in a traffic cop - constantly listening out for events such as cars or pedestrians approaching an intersection then triggering appropriate responses like changing lights or activating walk signals. This event-driven architecture allows us to create powerful applications that react seamlessly with our environment!

This type of architecture allows for a non-blocking and asynchronous flow of the program, meaning that the program can continue to execute other tasks while waiting for events to occur, rather than being blocked or held up by a single task. This can greatly improve the performance and responsiveness of the program.

This is also why Brendan Eichs is a genius... literally.

<center>

  ![](/images/js.png)    

</center>

## Variables in Js

Variables are like containers that we use in Javascript to store information. They help us remember things, like the name of our favorite color or the number of toys we have. Variables are like labels that allow us to easily access and use the information they contain.


## The DOM

The DOM stands for Document Object Model. It is a way for computers to understand and organize information on the internet. It is kind of like a map that shows computers where different parts of a website are located. With the help of the DOM, computers can quickly access and display the information on a website.


Let’s switch back to our HTML view and direct it to look for our JS file. 
Add a link to our JS file inside the header. This tells our HTML page to look in the JS folder first, then to find a file called “script.js” inside of that folder.

```html
<head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="/css/style.css">
    <script src="/js/script.js" defer></script>
</head>
```

![](/images/ciad15.png)

## Integrating the JService API

The JService API is a way to access trivia questions from the popular game show Jeopardy! It allows you to search for questions based on categories, air dates, and certain words in the questions or answers. You can use this database to play the game at home, or just to test your knowledge of trivia.


# If time permits...
## Build A Simple App Using HTML, CSS & JS

### Let’s make a button that calls an API and displays the data on the page.
- Make A Button in HTML
- Style the Button in CSS
- In JS Let’s make it so that when we click the button it fetches some data from the J Service API
- Then Let’s take that data we fetched and display it on the screen 
### Let’s also make a Hamburger Menu
- We need a checkbox
- A Label
- A Menu
- When the checkbox is checked we will show the menu
- When it’s unchecked we won’t show anything
