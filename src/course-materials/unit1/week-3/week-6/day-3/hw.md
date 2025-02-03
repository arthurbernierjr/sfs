---
track: "HW"
title: "Week 6 - HW"
week: 6
day: 3
type: "homework"
topics: "OOP"
---
# Written HW

1. What is Object-Oriented Programming (OOP)? Briefly explain its main concepts.
1. Explain the difference between a class and an object. Provide an example for each.
1. What are the four fundamental principles of OOP? Provide a brief explanation for each principle.
1. What is inheritance in OOP? Provide a real-life example to illustrate the concept.
1. Explain the concept of encapsulation in OOP and why it is important. Provide an example.
1. What is the difference between an interface and an abstract class? When should you use each?
1. Explain the purpose of constructors in OOP. Provide an example of a constructor in a class.
1. What is polymorphism in OOP? Provide an example that demonstrates the concept.
1. Explain the concept of method overloading and method overriding in OOP. Provide an example for each.
1. What are the SOLID principles in OOP? Briefly explain each principle and its importance in designing maintainable and scalable software.

Answer these questions in an html file using an ordered list `ol` and `li` and style the page to your liking.

# Practical HW

```js

class Governor {

}

```

- There is only one Governor in the state, add static methods and properties you'd expect a Governor to have.

- log the properties and test the methods (don't instantiate)


### Inheritance

Your base class

```js

Person{
    constructor(){

    }
}
```

- Think of three properties all people share, set them with the constructor
- Think of three methods all people share
- Create a PostalWorker class that inherits from person, add some methods
- Create a Chef class that inherits from person, add some methods
- Create 2 PostalWorkers and 2 Chefs, log them and test all their methods

### Hungry for More
### Bank Accounts take it a step further

**`BankAccount`** class:

| Derived From | Properties | Methods |
| :---: | :---: | :---: |
| n/a | `ownerName`, `balance`, `acctNum` (generated in constructor - not passed in) | `deposit`, `withdraw` |

**`CheckingAccount`** class:

| Derived From | Additional Properties | Additional Methods |
| :---: | :---: | :---: |
| `BankAccount` | `overdraftEnabled` |  Override `withdraw` to implement overdraft feature |

**`SavingsAccount`** class:

| Derived From | Additional Properties | Additional Methods |
| :---: | :---: | :---: |
| `BankAccount` | None |  Override `withdraw` to disallow withdrawals completely :) |

### Requirements

- Follow all instructions
- Application Works without error

### Submission

When you're finished, copy the URL of your sandbox and submit it to your instructor.


# Theoretical HW: Find Anagrams

**Description:**  
In this code challenge, you will use frequency counters to identify anagrams within a list of words. An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. Your task is to create a function called `findAnagrams(words)` that takes an array of strings and returns an array of arrays containing anagrams.

**Example:**  
Input: `["eat", "tea", "tan", "ate", "nat", "bat"]`  
Output: `[["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]`

**HINT: USE FREQUENCY COUNTERS**

**Instructions:**

1. Go to repl.it (https://repl.it/) and create a new JavaScript repl.
2. Create a function called `findAnagrams(words)` that takes an array of strings as input and returns an array of arrays containing anagrams.
3. Use frequency counters to compare the letter frequencies of the words in the input array.

**Submission Guidelines:**

1. Once you have completed the challenge and tested your solution, click the "Share" button in the top right corner of repl.it.
2. Copy the link provided in the "Share" dialog box.
3. Submit your link as your code challenge solution.

**Important Notes:**

- Do not use any external libraries or packages in your solution.
- Your solution should handle edge cases and invalid inputs.
- Test your solution with various inputs to ensure its correctness.
- Do not forget to add comments to your code to explain your thought process and logic.

Good luck!
