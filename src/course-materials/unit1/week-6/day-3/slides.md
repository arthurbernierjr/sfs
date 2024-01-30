---
track: "Unit 1"
title: "Week 6 - Day 3"
week: 6
day: 3
type: "lecture"
topics: "Objects & Orcs"
---

## Lets Play Objects and Orcs


## Lesson Objectives

1. Objects what are they
1. Explain why we need classes in Object Oriented Programming
1. Create a class to define the blueprint for creating objects
1. Add methods to a class
1. Set properties on an instance of a class
1. What is `this`? Why do we need it?
1. Make an instance of each class customizable
1. Create methods to alter the properties of an instance

## Set Up

 - in `repl.it`

**Objects** are simply a collection of zero or more **properties** separated by a comma.

So what's a _property_? A _property_ consists of a **key: value** pair, where the:
- **key** is a _string_ or _symbol_ (other types will be coerced into strings), and the
- **value** is any JS expression (code that evaluates to a single value or object).

> Note:  It is not necessary, nor customary to wrap the key names with quotes, however, they will indeed be strings.

### Why Objects?

**In OOP, we often model the purpose of our application using real-world objects.**

The following is just a small example of what is modeled using objects:
- The browser window and the elements it visualizes are all represented in memory as JS objects.
- Those elements and most of their properties, including their styling, are represented as JS objects.
- Data submitted from the browser will be accessed on the backend server as objects.
- Data retrieved from a database will be stored in objects.

As you can see, there are objects everywhere - guess that's why they call it **Object Oriented Programming** 😀

## Creating Objects

There are three different ways we can create objects:
1. By using _Object Literal Notation_ (also called an Object Initializer)
2. By invoking a _Class_ (also known as a *Constructor Function*)
3. By using the `Object.create` method

Today, we're going to focus on using _Object Literals_ to create objects.

In a future lesson, we'll learn how _Classes_ are used.

Using `Object.create` is not very common and won't be used during SEI, but as always, you're encouraged to research it if interested.

### Creating Objects using Object Literal Notation

Now let's create an object by using **Object Literal notation**, also known as an [Object Initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer):
	
```js
const game = {};
console.log(typeof game); // "object"
```

As you can see, _Object Literal notation_ consists of a set of opening  and closing curly braces, `{}`, used as a JS expression vs. when defining a statement/code block.

We just used curly braces to create an empty `game` object.

<details>	
<summary>
❓ An object is an <em>empty</em> object when it contains zero _________.
</summary>
<hr>

**properties (`key: value` pairs)**

<hr>
</details>

Let's update our code so that `game` has a property:

```js
const game = {title: 'Guess the Number!'};
console.log(game);
```

Stylistically, defining an object with a single property or a couple of "short" properties on a single line of code like...

```js
const point = {x: 10, y: -5};
```

isn't a problem (unless it is with your boss).<br>**It's all about readability.**

Properties are separated by commas:

```js
const game = {
  title: 'Guess the Number!',
  // Add this second property
  biggestNum: 100
};
```

Syntactically, [a trailing comma](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas) is permitted after the last property:

```js
const game = {
  title: 'Guess the Number!',
  biggestNum: 100,  // trailing comma
};
```

## Explain why we need classes

As we can see we need to repetitively create new objects with the same attributes alot.  Imagine we wanted to create a bunch of characters.

We'd need at least:
- name
- health
- power
- stamina

### Imagine if we had 500 players would this be okay.....
  - What if the structure changed
  - What if we needed to upgrade the players

```js
	const player = {
	  name: 'Josh the great',
	  health: 1000,
	  power: 1000,
	  stamina: 1000
	}

	const bigBadBoss = {
	  name: 'Magnardo the Merciless',
	  health: 1000000000000000000,
	  power: 10000000000000000,
	  stamina: Infinity
	}
```
### What about a function?????
```js

const createEnemy = (nameIs, healthIs, powerIs, staminaIs) => {
  const newEnemy = {
    name: nameIs,
    health: healthIs,
    power: powerIs,
    stamina: staminaIs
  }
  return newEnemy
}
const createPlayer = (nameIs, healthIs, powerIs, staminaIs) => {
  const newPlayer = {
    name: nameIs,
    health: healthIs,
    power: powerIs,
    stamina: staminaIs
  }
  return newPlayer
}

```

Great! A Function that returns objects. How can we create another one? How about copy pasting, then changing all the details? Typing it all from scratch? What if someone makes a typo with a key?

There is a better way! We can create a class, which will be a blueprint or template for similar objects. Not only can we add data, we can also include functionality.


### Introduction
Objects and classes in JavaScript are essential concepts that help us structure and manage data in our programs. To make it more relatable, we will use 5E Dungeons and Dragons as an example. In the D&D world, characters have various attributes, abilities, and equipment. We can model these aspects of a character using objects and classes.



## Create a class to define the blueprint for creating objects

When creating a class, it's custom to capitalize the first letter of the variable, so we know it's a `class`.  This follows customs in other programming languages.

```javascript
class Character {

}
```

Now we can "instantiate" or create new objects using this class.  We do this by adding the `new` keyword before calling the class name like a function.

```javascript
const me = new Character();
const you = new Character();
console.log(me);
console.log(you);
console.log(typeof me);
console.log(typeof you);
```

## Add methods to a class

Right now, our object doesn't do anything.  Let's have it do some stuff;

```javascript
class Character {
  greet () {
    console.log('hi!');
  }
}

const me = new Character();
const you = new Character();

me.greet();
you.greet();
```

These methods can, of course, take parameters:

```javascript
class Character {
  greet (otherCharacter) {
    console.log('hi ' + otherCharacter + '!');
  }
}
const me = new Character();
const you = new Character();
me.greet('you');
you.greet('me');
```

We only had to update our code in one place, and then every instance of the class now has the updated functionality. Dope!

If we have multiple methods, don't put commas between them:

```javascript
class Character {
  greet (otherCharacter) {
    console.log('hi ' + otherCharacter + '!');
  }
  smite () {
    console.log('I smite thee you vile person');
  }
}

const me = new Character();
const you = new Character();
me.greet('bob');
me.walk();
you.greet('bob');
you.walk();
```


## Set properties on an instance of a class

If we log the instances of our class, we'll see they don't have any properties:

```js
class Character {
  greet (otherCharacter) {
    console.log('hi ' + otherCharacter + '!');
  }
  smite () {
    console.log('I smite thee you vile person');
  }
}

const me = new Character();
const you = new Character();
console.log(me);
console.log(you);
```

### Explain
An object in JavaScript is a collection of key-value pairs, where the keys are strings, and the values can be any data type. In D&D, a character can have attributes like name, race, class, level, hit points, and equipment. We can represent a character as an object in JavaScript:

```javascript
const character = {
  name: "Gandalf",
  race: "Wizard",
  class: "Maiar",
  level: 10,
  hitPoints: 50,
  equipment: ["Staff", "Robe", "Hat"]
};
```

A class in JavaScript is a blueprint for creating objects with specific properties and methods. It allows us to create multiple instances of a character with the same structure but different values. For example, we can create a Character class for our D&D game:

```js
class Character {
  constructor(name, race, charClass, level, hitPoints, equipment) {
    this.name = name;
    this.race = race;
    this.charClass = charClass;
    this.level = level;
    this.hitPoints = hitPoints;
    this.equipment = equipment;
  }

  levelUp() {
    this.level++;
    this.hitPoints += 5;
  }

  equip(item) {
    this.equipment.push(item);
  }
}
```

`constructor` is a special function. Try misspelling `constructor` (ie `constr`) and see if you still get the same results.


## Create methods to alter the properties of an instance

We can of course, alter the properties of an instance, after it is created:

```js
levelUp() {
    this.level++;
    this.hitPoints += 5;
  }
```

This method updates the hitpoints and level of the character everyt time it is called

In OOP we never update an object directly we always use the methods provided by the class

- This way, everything is done with methods
- Other developers can quickly scan the class definition to determine what you'd like them to be able to do with the class


## Imitation
In this lab activity, you will create a few D&D characters using the Character class and perform some actions on them.

1. Create two instances of the Character class with different values for their properties.
Example:

```js
const gandalf = new Character("Gandalf", "Wizard", "Maiar", 10, 50, ["Staff", "Robe", "Hat"]);
const legolas = new Character("Legolas", "Ranger", "Elf", 8, 40, ["Bow", "Arrows", "Dagger"]);
```

2. Create a method called attack in the Character class that takes another character as a parameter and reduces their hit points by a random number between 1 and 6.
Example:

```js
attack(target) {
  const damage = Math.floor(Math.random() * 6) + 1;
  target.hitPoints -= damage;
}
```

3. Make one of your characters attack the other and print out their updated hit points.
Example:

```js
gandalf.attack(legolas);
console.log(legolas.hitPoints);
```

4. Make one of your characters equip a new item and print out their updated equipment.
Example:
```js
legolas.equip("Longbow");
console.log(legolas.equipment);
```

5. Make one of your characters level up and print out their updated level and hit points.
Example:

```js
gandalf.levelUp();
console.log(gandalf.level);
console.log(gandalf.hitPoints);
```

## Extending the Character Classes and Applying SOLID Principles

### Inheritance and Parent Classes
Inheritance is an important concept in object-oriented programming. It allows a class to inherit properties and methods from a parent class, promoting code reusability and organization. Let's create a `Creature` parent class that our `Character` class will inherit from:

```javascript
class Creature {
  constructor(name, hitPoints) {
    this.name = name;
    this.hitPoints = hitPoints;
  }
}

class Character extends Creature {
  // The rest of the Character class implementation
}

```

Now, the Character class inherits the name and hitPoints properties from the Creature class.

## Static Properties
Static properties are class-level properties that belong to the class itself, rather than instances of the class. They can be useful for storing information that applies to all instances of a class. Let's add a static property to our Character class that keeps track of the total number of characters created:

```js
class Character extends Creature {
  static characterCount = 0;

  constructor(name, race, charClass, level, hitPoints, equipment) {
    super(name, hitPoints);
    this.race = race;
    this.charClass = charClass;
    this.level = level;
    this.equipment = equipment;
    Character.characterCount++;
  }

  // The rest of the Character class implementation
}

```

## Factory Pattern and Singleton
The Factory pattern is a design pattern that provides an interface for creating objects without specifying their concrete classes. This can be useful when we want to control the creation process or have an object create instances of different classes based on certain conditions. Let's create a CharacterFactory singleton class that generates Character instances:

```js
class CharacterFactory {
  constructor() {
    if (CharacterFactory.instance) {
      return CharacterFactory.instance;
    }

    CharacterFactory.instance = this;
  }

  createCharacter(name, race, charClass, level, hitPoints, equipment) {
    return new Character(name, race, charClass, level, hitPoints, equipment);
  }
}

const characterFactory = new CharacterFactory();

```

With the CharacterFactory, we can now create characters using the factory method:

```js
const gandalf = characterFactory.createCharacter("Gandalf", "Wizard", "Maiar", 10, 50, ["Staff", "Robe", "Hat"]);

```

# More Technical Information

# The 4 Pillars of OOP in terms of Objects and Orcs

1. **Encapsulation**: In Objects and Orcs, encapsulation can be represented by a character's abilities and attributes being hidden within the character object. For example, a character's hit points, strength, and inventory are contained within the character object, and other objects can only access or modify these attributes through methods provided by the character object.

2. **Inheritance**: Inheritance in Objects and Orcs can be illustrated by creating a base `Character` class and then creating derived classes for specific character types, such as `Warrior`, `Mage`, or `Rogue`. Derived classes inherit the properties and methods of the base class, allowing for code reusability and a more organized class hierarchy.

3. **Polymorphism**: Polymorphism in Objects and Orcs is demonstrated when a single interface is used to represent different types of objects or actions. For example, a `Character` class may have an `attack` method, which behaves differently depending on the character type (e.g., a warrior's melee attack vs. a mage's spell attack). Polymorphism allows for more flexible code and easier implementation of new features.

4. **Abstraction**: Abstraction in Objects and Orcs can be shown through the use of abstract classes or interfaces that define common properties and methods for related objects. For example, an `ICombatant` interface could define methods for attacking and defending, while a `Character` class would implement this interface, ensuring that all characters have consistent behavior.

# SOLID Principles in terms of Objects and Orcs

1. **Single Responsibility Principle (SRP)**: In the context of Objects and Orcs, SRP can be demonstrated by ensuring that each class or module in the game has a single responsibility or purpose. For example, a `Character` class should only handle character-related functionality, while a separate `Inventory` class would manage the character's items. This principle helps make the code more modular and easier to maintain.

2. **Open/Closed Principle (OCP)**: OCP can be illustrated in Objects and Orcs by ensuring that classes are open for extension but closed for modification. For example, if we want to add new character classes, we should be able to extend the base `Character` class without modifying its existing code. This promotes a more stable codebase and reduces the risk of introducing new bugs when adding features.

3. **Liskov Substitution Principle (LSP)**: LSP in the context of Objects and Orcs means that derived classes should be able to substitute for their base classes without altering the correctness of the program. For example, if we have a function that accepts a `Character` object as a parameter, it should also work correctly with any derived classes, such as `Warrior` or `Mage`. This principle ensures that inheritance is used correctly and promotes code reusability.

4. **Interface Segregation Principle (ISP)**: In Objects and Orcs, ISP can be demonstrated by creating small, focused interfaces instead of large, monolithic ones. For example, instead of having a single `CharacterActions` interface with methods for movement, combat, and inventory management, we could create separate interfaces like `IMovable`, `ICombatant`, and `IInventoryManager`. This allows classes to implement only the interfaces they require, promoting a more modular and flexible codebase.

5. **Dependency Inversion Principle (DIP)**: DIP in the context of Objects and Orcs means that high-level modules should not depend on low-level modules, but both should depend on abstractions. For example, a high-level `GameEngine` class should not directly depend on a low-level `Database` class for storing and retrieving game data. Instead, both the GameEngine and the Database classes should depend on an abstract IDataStorage interface, which could have multiple implementations (e.g., a file storage or a cloud storage implementation). This principle promotes flexibility and makes it easier to swap out different components without affecting the rest of the codebase.
