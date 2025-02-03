<img src='https://i.imgur.com/hjrS1e6.jpg'>

# JavaScript Objects Lab

## Introduction

This lab provides an opportunity to practice working with JavaScript objects and arrays (which, of course, are considered objects).

## Setup

- Create a new JS-based repl in [repl.it](https://repl.it)

- Title your repl **JS Objects Lab**.

- This lab is a **DELIVERABLE**.

## Instructions

- Copy the code below into the repl that you created.

- Solve each exercise as described.

- Do not change any of the existing code.

```js
const album1 = {
  title: 'Talking Heads',
  albumDetails: {
    released: new Date('September 16, 1977'),
    label: 'Sire',
    formats: ['LP']
  }
};

// Exercise 1:  Update the title property of album1 from 'Talking Heads' to 'Talking Heads - 77', then assign that property to a variable named title




// Exercise 2: Assign the string 'Sire' from album1 to a variable named label




const album2 = {
  title: 'More Songs About Buildings and Food',
  albumDetails: {
    released: new Date('July 14, 1978'),
    label: 'Sire',
    formats: ['LP', '8-track']
  }
};

const album3 = {
  title: 'Fear of Music',
  albumDetails: {
    released: 'August 3, 1979',
    label: 'Sire',
    formats: ['Cassette']
  }
};

// Exercise 3: Accessing the string 'LP' from album2's formats array, add it to the end of album3's formats array.




// Exercise 4:  Update the released property of album3 from a string into a Date object using that string




const album4 = {
  title: 'Remain in Light',
  albumDetails: {
    released: new Date('October 8, 1980'),
    formats: ['Cassette', 'LP']
  }
};

// Exercise 5:  Add a property named label with the value 'Sire' to album4's albumDetails property




const album5 = {
  title: 'Little Creatures',
  albumDetails: {
    released: new Date('June 10, 1985'),
    labels: ['Sire', 'emi'],
    formats: ['CD', 'cassette', 'LP']
  }
};

// Exercise 6:  Update the value 'emi' within album5's labels array to 'EMI'




const album6 = {
  title: 'True Stories',
  albumDetails: {
    released: new Date('October 7, 1986'),
    labels: ['Sire, EMI'],
    formats: ['CD', 'cassette', 'LP']
  }
};

// Exercise 7:  Assign album6's formats array to a variable named formats




const album7 = {
  title: 'Naked',
  albumDetails: {
    released: new Date('March 15, 1988'),
    labels: ['Sire', 'EMI'],
    formats: ['CD', 'cassette', 'LP']
  }
};

const talkingHeadsAlbums = [
  album1,
  album2,
  album3,
  album4,
  album5,
  album6,
  album7
];

// Exercise 8:  Using the talkingHeadsAlbums array, assign album5's labels property to a variable named labels




// Exercise 9:  Using the talkingHeadsAlbums array, assign album7's released property to album6's released property




// Exercise 10:  Using the pre-defined variable named albumIdx below, assign the albumDetails object of the album located within the talkingHeadsAlbums array at the index represented by the value of albumIdx to a variable named albumDetails

let albumIdx = 4;




/********** Don't look below here **********/

console.log('Exercise 1:', title);
console.log('Exercise 2:', label);
console.log('Exercise 3:', album3.albumDetails.formats[1]);
console.log('Exercise 4:', album3.albumDetails.released.toLocaleDateString());
console.log('Exercise 5:', album4.albumDetails.label);
console.log('Exercise 6:', album5.albumDetails.labels[1]);
console.log('Exercise 7:', formats);
console.log('Exercise 8:', labels);
console.log('Exercise 9:', talkingHeadsAlbums[5].albumDetails.released.toLocaleDateString());
console.log('Exercise 10:', albumDetails);
```

## When ran, the console should show the following:

```
Exercise 1: Talking Heads - 77
Exercise 2: Sire
Exercise 3: LP
Exercise 4: 8/3/1979
Exercise 5: Sire
Exercise 6: EMI
Exercise 7: [ 'CD', 'cassette', 'LP' ]
Exercise 8: [ 'Sire', 'EMI' ]
Exercise 9: 3/15/1988
Exercise 10: {
  released: 1985-06-10T00:00:00.000Z,   // Format of date/time may vary due to browser & timezone
  labels: [ 'Sire', 'EMI' ],
  formats: [ 'CD', 'cassette', 'LP' ]
}
```

### Solution Code

[Try not to peek!](https://replit.com/@jim_clark/JS-Objects-Lab?v=1#index.js)

## Additional Resources

- [MDN Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

- [MDN Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)


# Hungry For More

## Datatypes Refresher 

So far we have seen:

* Strings
* Numbers
* Booleans
* Arrays
* Objects

When these datatypes are combined, we get a **data structure**, for example, an array that contains objects that each contain booleans.

Let's say you are tasked with creating some software, and it is up to **you** to determine which datatypes and what data structure to use.

### Answer the Following
For each of the following, write which **datatypes** you would use to represent the data, and then give a small example of the **data structure**:

```
e.g. A computer that can be either on or off. 
=> datatype: boolean 
=> data structure example: const computer = true; 
```

1. A light switch that can be either on or off.
2. A user's email address.
3. A spaceship with a hull, laser blasters, tractor beam, and warp drive.
4. A list of student names from our class.
5. A list of student names from our class, each with a location.
6. A list of student names from our class, each with a location and each with a list of favorite tv shows.


## Take it Easy

1. Make an array that holds all of the colors of the rainbow.
2. Write code that will access "blue" from the rainbow array.
3. Make an object that is called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype.
4. Write code that will access your hobby from the object that you just created.


## Crazy Object!

```js
const crazyObject = {
  taco: [{meat: 'steak',
         cheese: ['panela', 'queso', 'chihuahua']},
         {meat: 'chicken',
          salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
        ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [{
      name: "Jeff",
      occupation: "manager"
    },
    {
      name: "funkhauser",
      occupation: "tv dude"
    },
    {
      name: "susie",
      occupation: "jeffs wife",
      favourtieHobby: "Swearing at Larry and Jeff"
    },
    ]
  }
}
```

Use crazy Object to log the following.

1. "omg my mouth is burning"

2. "Pretty pretty prettayyyyy good"

3. "Swearing at Larry and Jeff"

4. "Chicken Teriyaki Boyyyyyy"

5. The object the contains the name `funkhauser`

6. Add the quote "I'm trying to elevate small talk to medium talk" to Larry's quote array. Confirm that it was added.


# Object-ception

With the following object:

```js
const inception = {
   reality: {
       dreamLayer1: {
           dreamLayer2: {
               dreamLayer3: {
                   dreamLayer4: {
                       dreamLayer5: {
                           dreamLayer6: {
                               limbo: "Joseph Gordon Levitt"
                          }
                       }
                   }
               }
           }
       }
   }
}
```

1. Change the value of `limbo` to `null`.



## Bond Films

### Array of objects:

```js
const bondFilms = [
  { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
  { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
  { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
  { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
  { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
  { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
  { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
  { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
  { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
  { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
  { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
  { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
  { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
  { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
  { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
  { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
  { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
  { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
  { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
  { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
  { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
  { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
  { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
];
```

Yikes. Well, copy the bondFilms **array** of **objects** above into your js file. Use **for loops** and conditionals and methods in order to complete the below:

1. Create a new array called `bondTitles` with only the titles of the Bond films, and console.log the new array.

1. Create a new array `oddBonds`, of only the Bond films released on odd-numbered years.

1. Determine the total cumulative gross of the Bond franchise, and console.log the result. _hint_ To make the grosses into usable numbers, look into the `.replace` Javascript method (there are many ways to do this, however). Look into `parseInt` also.

---

### Bond Films Challenge

1. Console log the single movie **object** that contains the actor who starred in the least number of films.

Expected result:

```js
{ "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" }
```

You should arrive at this result by comparing the frequency of actors.

_hint:_ Objects by definition have **unique** keys. Later in the problem you could create a new object wherein all the Bond actors are keys, and unique, with no doubles.

_another hint:_ You might come to a place where you will want to iterate over an object. You can iterate over arrays, but did you know you can iterate over objects?

You can either use `Object.keys()`, documentation [here - Object.keys](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)

Or, you can use a `for ... in` loop, documentation [here - for ... in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)

### More on `for ... in`

The syntax for iterating over an object with `for ... in` is:

```js
for (let key in obj) {
	// stuff, such as console.log(key)
}
```

Where `key` is a variable that instantiates for the keys in object, and `obj` is the name
of the object you are iterating over. So, if you just wanted to console.log all the **keys** in the first bondFilms object, you could write:

```js
for (let key in bondFilms[0]) {
	console.log(key);
}
```

Also remember, you can use a variable to access a key in an object, with bracket notation:

`obj[key]` will look for the property in the object that corresponds to whatever the
variable `key` is. This is very different to the syntax `obj['key']` (notice the quotes) that will look for a key _named_ key, rather than a variable.

To print all of the **values** in the first bondFilms object, you could write:

```js
for (let key in bondFilms[0]) {
	console.log(bondFilms[0][key]);
}
```
Good luck!
