---
track: "Frontend Fundamentals"
title: "Lord of The Objects Solution"
week: 5
day: 1
type: "lecture"
---

```js
console.log("Linked.");

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


// ============
// Chapter 1
// ============

function makeMiddleEarth() {
  console.log("1: makeMiddleEarth");

  // 1. create a section tag with an id of middle-earth
  const sectionMiddleEarth = document.createElement("section");

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




// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

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

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".


// ============
// Chapter 3
// ============

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

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".


// ============
// Chapter 4
// ============

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

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..


// ============
// Chapter 5
// ============

function makeBuddies() {
  console.log("5: makeBuddies");

  // create an `aside` tag
  const buddiesContainer = document.createElement("aside");
  const buddiesUl = document.createElement("ul");

  // put an `unordered list` of the `'buddies'` in the aside
  for (buddie of buddies) {
    const li = document.createElement("li");
    li.classList.add("buddies");
    li.innerText = buddie;
    buddiesUl.appendChild(li);
  }
  buddiesContainer.appendChild(buddiesUl);
  // insert your aside as a child element of `rivendell`
  document.querySelector("#rivendell").appendChild(buddiesContainer);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".


// ============
// Chapter 6
// ============

function leaveTheShire() {
  console.log("6: leaveTheShire");

  // assemble the `hobbits` and move them to `rivendell`
  const hobbits = document.querySelector("#the-shire ul");
  document.querySelector("#rivendell aside").appendChild(hobbits);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"


// ============
// Chapter 7
// ============

function beautifulStranger() {
  console.log("7: beautifulStranger");

  // change the `'Strider'` text to `'Aragorn'`
  const ul = document.querySelector("#rivendell aside").firstChild.children[3];
  ul.innerText = "Aragorn";
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"


// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
  console.log("8: forgeTheFellowShip");
  // create a new div called `'the-fellowship'` within `rivendell`
  const fellowshipDiv = document.createElement("div");
  fellowshipDiv.classList.add("the-fellowship");
  document.querySelector("#rivendell").appendChild(fellowshipDiv);
  // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
  const allHobbitsAndBuddies = document.querySelectorAll("#rivendell li");

  // after each character is added make an alert that they // have joined your party
  for (element of allHobbitsAndBuddies) {
    fellowshipDiv.appendChild(element);
    alert(`${element.innerText} has joined the fellowship`)
  }
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
  const gandalf = document.querySelectorAll(".the-fellowship li")[0];

  gandalf.innerText = "Gandalf the White";
  // apply the following style to the element, make the // background 'white', add a grey border
  gandalf.style.backgroundColor = "white";
  gandalf.style.border = "1px solid grey";
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"


// ============
// Chapter 10
// ============

function hornOfGondor() {
  console.log("10: hornOfGondor");
  // pop up an alert that the horn of gondor has been blown
  alert("The horn of gondor has been blown, Boromir's been killed by the Uruk-hai!");
  // Boromir's been killed by the Uruk-hai!
  // Remove `Boromir` from the Fellowship
  document.querySelectorAll(".the-fellowship li")[4].remove();
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"


// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
  console.log("11: itsDangerousToGoAlone");
  // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
  const frodo = document.querySelectorAll(".the-fellowship li")[4];
  const sam = document.querySelectorAll(".the-fellowship li")[5];
  const mordor = document.querySelector("#mordor");
  mordor.appendChild(frodo);
  mordor.appendChild(sam);
  // add a div with an id of `'mount-doom'` to `Mordor`
  const mountDoom = document.createElement("div")
  mountDoom.setAttribute("id", "mount-doom");
  mordor.appendChild(mountDoom);
}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"


// ============
// Chapter 12
// ============

function weWantsIt() {
  console.log("12: weWantsIt");
  // Create a div with an id of `'gollum'` and add it to Mordor
  const gollum = document.createElement("div");
  gollum.setAttribute("id", "gollum");
  const mordor = document.querySelector("#mordor");
  mordor.appendChild(gollum);
  // Remove `the ring` from `Frodo` and give it to `Gollum`
  const ring = document.querySelector("#the-ring");
  gollum.appendChild(ring);
  // Move Gollum into Mount Doom
  document.querySelector("#mount-doom").appendChild(gollum);

}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
  console.log("13: thereAndBackAgain");
  // remove `Gollum` and `the Ring` from the document
  document.querySelector("#gollum").remove();
  // Move all the `hobbits` back to `the shire`
  const allHobbits = document.querySelectorAll(".hobbit");
  for (hobbit of allHobbits) {
    document.querySelector("#the-shire").appendChild(hobbit);
  }
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".


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
