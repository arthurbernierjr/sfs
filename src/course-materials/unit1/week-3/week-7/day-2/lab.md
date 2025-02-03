# Lab Activity: Deep Dive into Pokémon Classes and Protypical Inheritance

## Objective

To understand Object-Oriented Programming (OOP) in JavaScript through building a Pokémon simulator. The lab will focus on:
- Class Definitions
- Constructors and Properties
- Inheritance
- Method Overriding
- Instance Creation
- Prototypical Inheritance

---

## Lab Instructions

### Step 1: Create the Base Pokémon Class

1.1. Create a `Pokemon` class with a constructor that accepts `name` and `level` as parameters.
1.2. Add an `attack` method that outputs a basic attack message.

```javascript
class Pokemon {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }
  
  attack() {
    return `${this.name} used a basic attack!`;
  }
}
```

### Step 2: Extend the Pokémon Class to Subtypes

2.1. Create subclasses for Water, Fire, Electric, Grass, and Normal Pokémon.
2.2. Override the `attack` method in each subclass to have type-specific attacks.

```javascript
class WaterPokemon extends Pokemon {
  attack() {
    return `${this.name} used Water Gun!`;
  }
}
```

### Step 3: Add Type-Specific Methods

3.1. For each subclass, add at least one unique method.
3.2. For example, a Water Pokémon might have a `surf` method.

```javascript
class WaterPokemon extends Pokemon {
  surf() {
    return `${this.name} used Surf!`;
  }
}
```

### Step 4: Instantiate Pokémon Objects

4.1. Create instances of each Pokémon subtype.
4.2. Test the `attack` method for each instance.

```javascript
const squirtle = new WaterPokemon('Squirtle', 5);
console.log(squirtle.attack());
```

### Step 5: Test Type-Specific Methods

5.1. Invoke the unique methods added to each subclass.
5.2. Observe the output.

```javascript
console.log(squirtle.surf());
```

### Step 6: Add a `defend` Method to the Base Class

6.1. Create a `defend` method in the base `Pokemon` class.
6.2. This method should decrement the Pokémon's `health` by 10.

```javascript
defend() {
  this.health -= 10;
  return `${this.name} now has ${this.health} health left.`;
}
```

### Step 7: Test the `defend` Method

7.1. Invoke the `defend` method on different Pokémon instances.
7.2. Validate that their health decrements accordingly.

```javascript
console.log(squirtle.defend());
```

### Step 8: Add a `speak` Method to the Base Class

8.1. Create a `speak` method.
8.2. This method should return a greeting message from the Pokémon.

```javascript
speak() {
  return `${this.name} says hello!`;
}
```

### Step 9: Test the `speak` Method

9.1. Invoke the `speak` method on different Pokémon instances.
9.2. Validate their greetings.

```javascript
console.log(squirtle.speak());
```

### Step 10: Understand Protypical Inheritance

10.1. Look up `WaterPokemon.prototype.__proto__` in the console.
10.2. Confirm that it points to `Pokemon.prototype`.

### Step 11: Method Chain Lookup

11.1. Call the `defend` and `speak` methods on a subtype instance.
11.2. Confirm that it accesses methods from the base class.

```javascript
console.log(squirtle.defend());
console.log(squirtle.speak());
```

### Step 12: Reflection and Further Exploration

12.1. Can you add more features like evolutions or abilities?
12.2. Write down your thoughts or extend the codebase.
12.3. Try out your ideas don't be afraid to break the code, try things see if they work and if they don't try to find out why.

---

## Key Takeaways

- **Class Definitions and Constructors**: Central to OOP and help in initializing objects.
- **Inheritance**: Demonstrated by extending the base Pokémon class to various subtypes.
- **Method Overriding**: Enables specialization of behavior in subclasses.
- **Prototypical Inheritance**: The mechanism that allows JavaScript objects to inherit features from one another.

Feel free to take this foundational understanding of OOP and prototypical inheritance to extend the Pokémon simulator further. You can add more functionalities like evolving the Pokémon or including unique abilities for each type.