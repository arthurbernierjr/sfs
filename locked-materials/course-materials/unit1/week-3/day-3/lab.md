---
track: "Unit 1"
title: "Week 3 - Day 3"
week: 3
day: 3
type: "lab"
topics: "Objects & Orcs Character Interaction and NPC Generation"
---

## Lab Activity: Objects & Orcs Character Interaction and NPC Generation

**Objective:**
In this lab activity, you will build upon the Objects and Orcs character classes from the lesson. You will create new classes that extend the `Character` class, create methods for instances of these classes to interact with other objects, and write a function that generates non-player characters (NPCs) with random properties.

**Instructions:**

1. Create new classes that extend the `Character` class. Use your creativity to build unique derived classes based on Objects and Orcs characters. Some examples could be `Warrior`, `Mage`, or `Rogue`.

2. Add methods to your classes that allow instances of the classes to interact with other objects, such as attacking or casting spells on other characters. For example, you could create a method called `attack(target)` that decreases the target's health based on the attacker's strength.

3. Create a function called `generateNPCs(n, characterClass)` that takes an integer `n` and a `characterClass` as arguments. This function should generate `n` number of NPCs with random properties and attributes for the given `characterClass`. For instance, if the `characterClass` is `Warrior`, the function should generate `n` warriors with random strengths, health, etc.

**Example:**
```javascript
class Warrior extends Character {
  // ...
  attack(target) {
    // ...
  }
}

class Mage extends Character {
  // ...
  castSpell(target) {
    // ...
  }
}

function generateNPCs(n, characterClass) {
  // ...
}

const npcWarriors = generateNPCs(5, Warrior);
```

Requirements:

- Create at least three unique derived classes that extend the Character class.
- Implement methods for instances of these classes to interact with other objects.
- Write a function that generates n number of NPCs with random properties and attributes.