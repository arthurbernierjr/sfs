---
track: "Frontend Fundamentals"
title: "Lord of The Objects"
week: 10
day: 1
type: "lecture"
---

![GA Cog](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Lord of the Objects

![LOTR](https://wallpapercave.com/wp/KzQhmyc.jpg)



# Step 1
1. We have to go to https://github.com/bigpoppacode/lord-of-the-objects and fork the repository to our own github account
1. Then we navigate to our software_classwork/unit-1 folder and clone this repository to our local machine
1. Then we need open up this folder in vs code
1. Then we need to open the index.html file in the browser
1. Then we need to go back to vs code and begin to edit the js/app.js file


# Step 2 - Check if file is linked
### At the very top of the file add `console.log("Linked")` or `alert("Linked")` just to verify everything is connected

```js
console.log("Linked.");
```

# Step 3 - Review all the data that you have been given and the html file

```js
// Dramatis Personae
const hobbits = [
  `Frodo Baggins`,
  `Samwise "Sam" Gamgee`,
  `Meriadoc "Merry" Brandybuck`,
  `Peregrin "Pippin" Took`
];

const buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

const baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];

const lands = [
  'The-Shire',
  'Rivendell',
  'Mordor'
];
```

# Step 4 - Review the functions at the bottom of the file and see how they coinside with the JS
```js
...
// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================


document.getElementById('chapter-1').addEventListener('click', makeMiddleEarth);
document.getElementById('chapter-2').addEventListener('click', makeHobbits);
document.getElementById('chapter-3').addEventListener('click', keepItSecretKeepItSafe);
document.getElementById('chapter-4').addEventListener('click', makeBaddies);
document.getElementById('chapter-5').addEventListener('click', makeBuddies);
document.getElementById('chapter-6').addEventListener('click', leaveTheShire);
document.getElementById('chapter-7').addEventListener('click', beautifulStranger);
document.getElementById('chapter-8').addEventListener('click', forgeTheFellowShip);
document.getElementById('chapter-9').addEventListener('click', theBalrog);
document.getElementById('chapter-10').addEventListener('click', hornOfGondor);
document.getElementById('chapter-11').addEventListener('click', itsDangerousToGoAlone);
document.getElementById('chapter-12').addEventListener('click', weWantsIt);
document.getElementById('chapter-13').addEventListener('click', thereAndBackAgain);
document.getElementById('all-chapters').addEventListener('click', () => {
  makeMiddleEarth();
  makeHobbits();
  keepItSecretKeepItSafe();
  makeBaddies();
  makeBuddies();
  leaveTheShire();
  beautifulStranger();
  forgeTheFellowShip();
  theBalrog();
  hornOfGondor();
  itsDangerousToGoAlone();
  weWantsIt();
  thereAndBackAgain();
});

```

# Step 5 Chapter 1

```js
// 1. create a section tag with an id of middle-earth

// 2. use a for loop to iterate over the lands array that does the following:

//   2a. creates an article tag (there should be one for each land when the loop is done)

//   2b. gives each land article an `id` tag of the corresponding land name

//   2c. includes an h1 with the name of the land inside each land article

//   2d. appends each land to the middle-earth section

// 3. append the section to the body of the DOM.
```

## 1
```js
// 1. create a section tag with an id of middle-earth
const sectionMiddleEarth = document.createElement("section");

sectionMiddleEarth.setAttribute('id', 'middle-earth')
```
## 2

```js
// 2. use a for loop to iterate over the lands array that does the following:
for (land of lands) {
  ...
}
```
## 2a
```js
//   2a. creates an article tag (there should be one for each land when the loop is done)
const newArticle = document.createElement("article");
```

## 2b
```js
//   2b. gives each land article an `id` tag of the corresponding land name
newArticle.setAttribute("id", land.toLowerCase());
```

## 2c
```js
//   2c. includes an h1 with the name of the land inside each land article
newArticle.innerHTML = `<h1>${land}</h1>`;
```

## 2d
```js
//   2d. appends each land to the middle-earth section
sectionMiddleEarth.appendChild(newArticle);
```

## 3
```js
// 3. append the section to the body of the DOM.
document.body.appendChild(sectionMiddleEarth);
```
## Altogether
```js
// ============
// Chapter 1
// ============

function makeMiddleEarth() {
  console.log("1: makeMiddleEarth");

  // 1. create a section tag with an id of middle-earth
  const sectionMiddleEarth = document.createElement("section");

  sectionMiddleEarth.setAttribute('id', 'middle-earth')

  // 2. use a for loop to iterate over the lands array that does the following:
  for (land of lands) {
    //   2a. creates an article tag (there should be one for each land when the loop is done)
    const newArticle = document.createElement("article");
    //   2b. gives each land article an `id` tag of the corresponding land name
    newArticle.setAttribute("id", land.toLowerCase());
    //   2c. includes an h1 with the name of the land inside each land article
    newArticle.innerHTML = `<h1>${land}</h1>`;
    //   2d. appends each land to the middle-earth section
    sectionMiddleEarth.appendChild(newArticle);
  }
  // 3. append the section to the body of the DOM.
  document.body.appendChild(sectionMiddleEarth);
}
```

## We can test it by visiting the page reloading and clicking the button


## Add and Commit with GIT
1. `git add js/app.js`
1. `git commit -m "Chapter 1 complete - Made Middle Earth".`


# Step 6 - Chapter 2
```js
// ============
// Chapter 2
// ============

function makeHobbits() {
  console.log("2: makeHobbits");

  // display an `unordered list` of hobbits in the shire

  // give each hobbit a class of `hobbit`

  // hint: create a 'ul' outside the loop into which to append the 'li's

  // hint: get 'The-Shire' by using its id

}
```

```js
function makeHobbits() {
  console.log("2: makeHobbits");
  const hobbitsContainer = document.createElement("ul");
  // display an `unordered list` of hobbits in the shire
  for (hobbit of hobbits) {
    const hobbitLI = document.createElement("li");
    // give each hobbit a class of `hobbit`
    hobbitLI.classList.add("hobbit");
    hobbitLI.innerText = hobbit;
    hobbitsContainer.appendChild(hobbitLI);
  }

  // hint: create a 'ul' outside the loop into which to append the 'li's

  // hint: get 'The-Shire' by using its id
  document.querySelector("#the-shire").appendChild(hobbitsContainer);
}
```
## Add and Commit with GIT
1. `git add js/app.js`
1. `git commit -m "Chapter 2 complete - Made the Hobbits".`


# Step 7 - Chap 3

```js
// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
  console.log("3: keepItSecretKeepItSafe");

  // create a div with an id of `'the-ring'`

  // give the div a class of `'magic-imbued-jewelry'`

  // add the ring as a child of `Frodo`

}
```

```js
function keepItSecretKeepItSafe() {
  console.log("3: keepItSecretKeepItSafe");

  // create a div with an id of `'the-ring'`
  const div = document.createElement("div");
  div.setAttribute("id", "the-ring");
  // give the div a class of `'magic-imbued-jewelry'`
  div.classList.add("magic-imbued-jewelry");
  // add the ring as a child of `Frodo`
  document.querySelectorAll(".hobbit")[0].appendChild(div);
}
```

## Add and Commit with GIT
1. `git add js/app.js`
1. `git commit -m "Chapter 3 complete - Made the ring and gave it to Frodo".`


# Step 8 - Chap 4

```js
// ============
// Chapter 4
// ============

function makeBaddies() {
  console.log("4: makeBaddies");

  // display an unordered list of baddies in Mordor

  // give each of the baddies a class of "baddy"

  // remember to append them to Mordor

}

```

```js
function makeBaddies() {
  console.log("4: makeBaddies");
  const baddiesContainer = document.createElement("ul");

  // display an unordered list of baddies in Mordor
  for (baddie of baddies) {
    const li = document.createElement("li");
    // give each of the baddies a class of "baddy"
    li.classList.add("baddy");
    li.innerText = baddie;
    baddiesContainer.appendChild(li);
  }
  // remember to append them to Mordor
  document.querySelector("#mordor").appendChild(baddiesContainer);
}
```
## Add and Commit with GIT
1. `git add js/app.js`
1. `git commit -m "Chapter 4 complete - Made the Baddies".`



# Step 9 - Complete the rest and commit as you go
```js
// ============
// Chapter 5
// ============

function makeBuddies() {
  console.log("5: makeBuddies");

  // create an `aside` tag
  const buddiesContainer = document.createElement("aside");
  const buddiesUl = document.createElement("ul");

  // put an `unordered list` of the `'buddies'` in the aside

  // insert your aside as a child element of `rivendell`

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".


// ============
// Chapter 6
// ============

function leaveTheShire() {
  console.log("6: leaveTheShire");

  // assemble the `hobbits` and move them to `rivendell`

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"


// ============
// Chapter 7
// ============

function beautifulStranger() {
  console.log("7: beautifulStranger");

  // change the `'Strider'` text to `'Aragorn'`

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"


// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
  console.log("8: forgeTheFellowShip");
  // create a new div called `'the-fellowship'` within `rivendell`

  // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`

  // after each character is added make an alert that they // have joined your party

  // NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
  console.log("9: theBalrog");
  // change the `'Gandalf'` text to `'Gandalf the White'`

  // apply the following style to the element, make the // background 'white', add a grey border

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"


// ============
// Chapter 10
// ============

function hornOfGondor() {
  console.log("10: hornOfGondor");
  // pop up an alert that the horn of gondor has been blown

  // Boromir's been killed by the Uruk-hai!
  // Remove `Boromir` from the Fellowship

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"


// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
  console.log("11: itsDangerousToGoAlone");
  // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`

  // add a div with an id of `'mount-doom'` to `Mordor`

}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"


// ============
// Chapter 12
// ============

function weWantsIt() {
  console.log("12: weWantsIt");
  // Create a div with an id of `'gollum'` and add it to Mordor

  // Remove `the ring` from `Frodo` and give it to `Gollum`

  // Move Gollum into Mount Doom
}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
  console.log("13: thereAndBackAgain");
  // remove `Gollum` and `the Ring` from the document

  // Move all the `hobbits` back to `the shire`

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".
```
