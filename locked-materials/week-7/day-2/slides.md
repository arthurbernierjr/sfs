# Lesson: Frequency Counters, Closure, Classes, and OOP in JavaScript

## Part 1: Closure with Counter Function

### Code Review

Let's start by reviewing this block of code:

```javascript
const counterValue = document.getElementById("counterValue");
const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");

function createCounter() {
  let count = 0;

  return function (action) {
    if (action === "increment") {
      count++;
    } else if (action === "decrement") {
      count--;
    }
    return count;
  };
}

const counter = createCounter();

incrementBtn.addEventListener("click", () => {
  counterValue.textContent = counter("increment");
});

decrementBtn.addEventListener("click", () => {
  counterValue.textContent = counter("decrement");
});
```

### Section 1: Variable Declarations
```javascript
const counterValue = document.getElementById("counterValue");
const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");
```

1. `const counterValue = document.getElementById("counterValue");`: This line accesses the HTML element with the ID `counterValue`. It stores this reference in the `counterValue` constant.
2. `const incrementBtn = document.getElementById("incrementBtn");`: Similarly, this line captures the button element with the ID `incrementBtn`.
3. `const decrementBtn = document.getElementById("decrementBtn");`: This line captures the button element designated to decrement the counter.

### Section 2: Creating the Counter Function
```javascript
function createCounter() {
  let count = 0;

  return function (action) {
    if (action === "increment") {
      count++;
    } else if (action === "decrement") {
      count--;
    }
    return count;
  };
}
```

4. `function createCounter() {`: This function declaration begins the logic for a counter function.
5. `let count = 0;`: Inside `createCounter`, a `let` variable called `count` is initialized to 0.
6. `return function (action) {`: A function is returned that takes an argument `action`.
7. `if (action === "increment") { count++; }`: This checks if the action is "increment" and, if so, increments `count`.
8. `else if (action === "decrement") { count--; }`: Alternatively, if the action is "decrement," `count` is decreased.
9. `return count;`: Finally, the updated `count` value is returned.

### Section 3: Function Invocation and Event Listeners
```javascript
const counter = createCounter();

incrementBtn.addEventListener("click", () => {
  counterValue.textContent = counter("increment");
});

decrementBtn.addEventListener("click", () => {
  counterValue.textContent = counter("decrement");
});
```

10. `const counter = createCounter();`: Invokes `createCounter` and stores the returned function in `counter`.
11. `incrementBtn.addEventListener("click", () => {`: Adds a click event listener to the increment button.
12. `counterValue.textContent = counter("increment");`: Invokes `counter` with "increment" and updates the DOM element to show the new count.
13. `decrementBtn.addEventListener("click", () => {`: Adds a click event listener to the decrement button.
14. `counterValue.textContent = counter("decrement");`: Invokes `counter` with "decrement" and updates the DOM to reflect this.

## Section 4: `getElementById` vs `querySelector`

### Explanation

1. `document.getElementById`: Direct and fast but only works with IDs.
1. `document.querySelector`: More flexible, can use any CSS selector, but slightly slower.
1. **Speed**: `getElementById` is generally faster.
1. **Flexibility**: `querySelector` is more flexible.


### Key Takeaways

1. **Closure**: The `createCounter` function leverages closures. It encapsulates the `count` variable, providing controlled access to it.
2. **Event Listeners**: `addEventListener` attaches behavior (`increment` and `decrement`) to buttons.
3. **DOM Manipulation**: `document.getElementById` is used for selecting elements to manipulate.

---

## Part 2: Frequency Counter with "Is Anagrams" Challenge

### Code Snippet

```javascript
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const counter1 = {};
  const counter2 = {};

  for (let char of str1) {
    counter1[char] = (counter1[char] || 0) + 1;
  }

  for (let char of str2) {
    counter2[char] = (counter2[char] || 0) + 1;
  }

  for (let key in counter1) {
    if (counter1[key] !== counter2[key]) {
      return false;
    }
  }

  return true;
}
```

### Section 1: Function Declaration and Input Length Check
```javascript
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
```

15. `function isAnagram(str1, str2) {`: This function takes two strings as arguments to check if they are anagrams.
16. `if (str1.length !== str2.length) { return false; }`: An immediate length check, if they're different lengths, they can't be anagrams.

### Section 2: Counting the Frequency
```javascript
  const counter1 = {};
  const counter2 = {};

  for (let char of str1) {
    counter1[char] = (counter1[char] || 0) + 1;
  }

  for (let char of str2) {
    counter2[char] = (counter2[char] || 0) + 1;
  }
```

17. `const counter1 = {};`: Initializes an empty object to count characters for `str1`.
18. `const counter2 = {};`: Similarly, for `str2`.
19-20. The two `for` loops iterate through each string, counting occurrences of each character.

### Section 3: Frequency Comparison
```javascript
  for (let key in counter1) {
    if (counter1[key] !== counter2[key]) {
      return false;
    }
  }

  return true;
}
```

21. `for (let key in counter1) {`: Iterates through the keys in `counter1`.
22. `if (counter1[key] !== counter2[key]) { return false; }`: Compares each key's value in `counter1` and `counter2`.
23. `return true;`: If the function hasn't returned false by now, the strings are anagrams.


### Refactored Version Using More Readable `if` Statements

In the refactored version, I've replaced the shorthand syntax with explicit `if` statements to make the logic more apparent for those getting tripped up with the shorter syntax using the `||` aka the `or` operator

```javascript
const counter1 = {};
const counter2 = {};

for (let char of str1) {
  if (counter1[char]) {
    counter1[char] += 1;
  } else {
    counter1[char] = 1;
  }
}

for (let char of str2) {
  if (counter2[char]) {
    counter2[char] += 1;
  } else {
    counter2[char] = 1;
  }
}
```

### Comparison with Original Code

#### Original Code
```javascript
counter1[char] = (counter1[char] || 0) + 1;
```

#### Refactored Code
```javascript
if (counter1[char]) {
  counter1[char] += 1;
} else {
  counter1[char] = 1;
}
```

1. **Clarity**: The refactored code explicitly checks whether a character already exists in the counter object. If so, it increments by one. Otherwise, it sets it to one. This makes the logic easier to follow, especially for those who are new to programming or not familiar with JavaScript shorthand.

2. **Length**: The refactored code is longer, which might be seen as a downside if you're aiming for brevity. However, the increase in lines is justified by the enhanced readability.

3. **Performance**: Both versions are equally efficient, but the original one-liner could be considered more "elegant" by those who favor concise code.

---

**Key Takeaways**
1. **Frequency Counter**: `counter1` and `counter2` store the frequency of each character.
1. **Comparison**: After counting, it compares the frequency tables.
1. DOM elements can be manipulated through JavaScript.
1. Closures enable data encapsulation and local state.
1. Frequency counters are a powerful tool for comparing data sets.
1. Conditional logic and loops are core parts of these mechanisms.
1. While shorthand expressions can be concise, they may sacrifice readability.
1. Explicit `if` statements make the code easier to understand at a glance.
1. The best approach often depends on the audience; if your audience values clarity, the refactored version is better suited.


---

## Part 3: Object-Oriented Programming with Animals & Pokemon

### Code Snippet

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
  makeSound() {
    return 'Some generic sound';
  }
}

class Dog extends Animal {
  makeSound() {
    return 'Woof!';
  }
}

class Cat extends Animal {
  makeSound() {
    return 'Meow!';
  }
}

class Bird extends Animal {
  makeSound() {
    return 'Tweet!';
  }
}
```


# Pokémon Lab Precursor

## Introduction

This advanced version of the Pokémon Lab dives into constructors, multiple methods, and the concept of prototypical inheritance in JavaScript. By the end, you should have a well-rounded understanding of these critical OOP components.

## Constructors and Methods

### Base Pokémon Class

We start with a `Pokemon` base class that has a constructor and three methods: `attack`, `defend`, and `speak`.

```javascript
class Pokemon {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
  }

  attack() {
    return `${this.name} used a generic attack!`;
  }

  defend() {
    this.health -= 10;
    return `${this.name} now has ${this.health} health left.`;
  }

  speak() {
    return `${this.name} says hello!`;
  }
}
```

### Pokémon Subclasses

Now, we create subclasses for different Pokémon types: Water, Fire, and Grass. Each subclass has its own constructor and overrides the `attack` method.

```javascript
class WaterPokemon extends Pokemon {
  constructor(name) {
    super(name, 'Water');
  }

  attack() {
    return `${this.name} used Water Gun!`;
  }
}

class FirePokemon extends Pokemon {
  constructor(name) {
    super(name, 'Fire');
  }

  attack() {
    return `${this.name} used Ember!`;
  }
}

class GrassPokemon extends Pokemon {
  constructor(name) {
    super(name, 'Grass');
  }

  attack() {
    return `${this.name} used Vine Whip!`;
  }
}
```

## Protypical Inheritance

In JavaScript, inheritance works through prototypes. When we use `extends` to create a subclass, JavaScript sets up a prototype chain. The subclass prototype points to the base class prototype, allowing the subclass to inherit properties and methods from the base class. 

For instance, a `WaterPokemon` object will have access to both its own methods and those defined in the `Pokemon` class. This is because `WaterPokemon.prototype.__proto__` will point to `Pokemon.prototype`.

## Example

Let's create some instances and call their methods:

```javascript
const squirtle = new WaterPokemon('Squirtle');
const charmander = new FirePokemon('Charmander');

console.log(squirtle.attack());  // Output: "Squirtle used Water Gun!"
console.log(charmander.defend());  // Output: "Charmander now has 90 health left."
console.log(charmander.speak()); // Output: "Charmander says hello!"
```

Here, `squirtle` and `charmander` are instances of `WaterPokemon` and `FirePokemon`, respectively. They inherit properties and methods from the base `Pokemon` class due to prototypical inheritance, and can also use methods that are overridden in their own subclasses.



### Key Takeaways

1. **Inheritance**: `Dog`, `Cat`, and `Bird` are subclasses of `Animal`.
1. **Polymorphism**: Each subclass overrides the `makeSound` method.
1. Constructors initialize the properties of an object.
1. Subclasses can override base class methods.
1. Prototypical inheritance allows objects to inherit properties and methods from their prototype chain.
1. Methods can perform actions and update an object's internal state.

---

Remember, understanding these concepts isn't just about writing code; it's about writing efficient, maintainable, and scalable code. In the lab you will look deeper into OOP by practicing creating classes.