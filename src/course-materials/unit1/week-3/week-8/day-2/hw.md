---
track: "HW"
title: "Week 8 - HW"
week: 8
day: 3
type: "homework"
topics: "Reading, Maintaining and Understanding Code in Practice"
---


## Terminal Objectives:
By the end of this homework, students will be able to:
1. Answer questions related to DOM manipulation.
2. Apply practical knowledge to enhance the interactivity of a web application.
3. Solve a coding challenge involving string manipulation.
4. Collaborate to complete a Space Battle Challenge using their programming skills.

---

### Section 1: Written Homework

**Objective**: Answer the following 10 questions about DOM manipulation:

1. What is the Document Object Model (DOM) and how is it represented in a web browser?
2. How can you select an element with the ID 'unique-element' using JavaScript?
3. Describe how to change the text content of a paragraph element using JavaScript.
4. What is the difference between `innerHTML` and `textContent` properties?
5. Explain how to add a new class to an HTML element using JavaScript.
6. How can you attach an `onclick` event to a button with JavaScript?
7. Describe the steps to remove an element from the DOM.
8. What is event propagation and how can you stop it?
9. How do you change the style of an element, for example, to make the text color red using JavaScript?
10. Explain how to toggle the visibility of an HTML element using JavaScript.

---

### Section 2: Practical Homework Instructions

**Objective**: Implement the following enhancements to the "Barbie's Wardrobe" application:

1. **Career Change Feature**: 
   - Add a dropdown list that allows Barbie to select a new career from the available `careers` array.
   - Update Barbie's `career` property when a new option is selected and reflect the change in income.
   - Update the UI to show the new career and income.

2. **Sell Wardrobe Items**:
   - Implement a feature allowing Barbie to sell items from her wardrobe.
   - Add buttons next to each wardrobe item with the label "Sell".
   - When clicked, add the item's price back to Barbie's wallet and remove the item from the wardrobe.

3. **Asset Selling Feature**:
   - Introduce a new property `assets` for Barbie, representing additional items she can sell.
   - Create a function to sell these assets, updating the wallet balance and removing the asset.

4. **Incorporate Ken**:
   - Create a `ken` object with properties similar to `barbie`, such as `name`, `wardrobe`, and `wallet`.
   - Display Ken's wardrobe and wallet balance in the UI.
   - Add functionality to transfer items and money between Barbie and Ken.

5. **Interactivity Enhancements**:
   - Allow Barbie to change outfits based on her career choice.
   - Introduce the ability for Barbie and Ken to have a joint garage sale of their items, combining their wardrobes for the sale.
   - Enable interactive shopping experiences where users can drag and drop items to and from the wardrobe.

**Note**: Ensure that all new features have proper error handling and user feedback for a smooth user experience.

---

### Section 3: Theoretical Homework Problem

**String Manipulation Challenge**: 

**Task**: Write a function in JavaScript that takes a sentence as input and reverses the order of the words. 

**Requirements**:
- Do not use the `reverse()` method.
- Preserve the original whitespace between words.

**Example**:

Input: `"Hello world! This is a test."`  
Output: `"test. a is This world! Hello"`

**Instructions**:

1. Split the sentence into an array of words.
2. Create a new array to hold the reversed sentence.
3. Iterate through the original array from the end to the beginning, adding each word to the new array.
4. Join the words in the new array into a string, preserving whitespace.

Submit your solution as a function named `reverseSentence`. Include at least 3 test cases with your submission.

### Section 4: In-Class Group Challenge
**Objective**: Complete the Space Battle Challenge.

In this group activity, students will utilize their coding skills in JavaScript and DOM manipulation to bring a space battle game to life. They will follow the technical requirements to ensure the game is fully functional.

---

## Space Battle: Homework Completion

**Technical Requirements for Homework Completion**:
- A game that initializes by opening an HTML file in the browser and operates through DOM manipulation.
- A syntax-error-free game on load.
- A player's battleship that can engage in combat with an alien ship at least once.
- At least one alien ship with defined hitpoints and damage points that can counter-attack the player's ship.
- A battle sequence where ships engage until one is destroyed, with a win/lose message displayed accordingly.

Alright, star navigators and code warriors, it's time to buckle up for an epic journey through the galaxies of code in a thrilling **space battle** adventure! Today, we're diving into the cosmic ocean of Object-Oriented Programming, looping through the event horizons, and triggering functions that will bring your stellar visions to life. Get ready to command your digital spacecraft with the might of DOM manipulation and orchestrate an interstellar showdown where objects don't just interact—they go full photon torpedoes on each other!

Remember, as you forge your celestial saga, bind your methods if they're moonlighting as event listeners! Just like this cosmic snippet right here:

```javascript
class Example {
    constructor(name) {
        this.name = name;
        this.method = this.method.bind(this);
    }

    methodFromExample() {
        return this.name;
    }
}

const btnEl = document.querySelector('button');
btnEl.addEventListener('click', methodFromExample);
```

## 🚀 Mission Briefing

### Forge Your Space Epic

Humanity is under siege by a squadron of alien menaces, and you, the valiant captain of the USS Assembly, are humanity's last hope. With your coding prowess, you will craft the saga of space where your ship, armed with lasers and courage, battles through an onslaught of six uniquely programmed alien warcraft.

In this celestial ballet of destruction, the alien vessels have a fatal flaw—they're bound by logic, attacking one by one, observing the results before their comrades jump into the fray. But you? You've got the element of surprise and the first strike initiative!

Here's how the cosmic dance unfolds:

- You unleash your firepower on the first alien ship.
- If the extraterrestrial foe withstands your assault, it counterattacks.
- Survive, and you launch another round of space fury.
- Should you obliterate the ship, you face a choice: engage the next enemy or warp away to safety.

Claim victory by reducing all alien ships to space dust or face defeat if the USS Assembly falls.

### Crafting Your Starship

Every ship in this intergalactic conflict, including your USS Assembly, comes equipped with:
- **Hull**: Think of it as your shield level. Zero means game over.
- **Firepower**: This is the punch your lasers pack.
- **Accuracy**: Your odds of hitting the mark. 

Your trusty USS Assembly boasts a hull integrity of `20`, a firepower rating of `5`, and targeting accuracy of `.7`.

But beware, each alien adversary comes with variable stats ranging in hull strength (3-6), firepower (2-4), and targeting systems (.6-.8).

A taste of the space battle logic:

```javascript
if (Math.random() < alien[0].accuracy) {
    console.log('Your shields have taken a hit!');
}
```

## 🛸 Launch Prep

Before you rocket off:

- Understand the mission specs. If they're as clear as the vacuum of space, get clarity.
- Sketch your game plan with pseudo code.
- Keep it simple. Start with a single alien ship. Master that code before adding the armada.
- Dodge the "YAGNI" asteroid field—add features only when necessary.
- Commit your working code to your Git galaxy before piling on more.

## 🛸 Your Fleet and Arsenal

Begin with the USS Assembly and one alien ship. Give them the power to attack—perhaps with an `attack` method. Then, let them duel it out in a loop until one turns into cosmic dust.

Remember, start small, test often, commit when it's stellar, and avoid overcomplicating your code cosmos. And when all is coded and done, may you bask in the glow of a galaxy well-saved. Ready? Engage thrusters and code on!

**Submission Guidelines**:
- Submit the completed homework through a GitHub link added to the class project spreadsheet.


### Cheat codes &#x2B06; &#x2197; &#x27A1;

<details><summary> 👈&nbsp;&nbsp;<b>Don't read these steps if you want to figure this out on your own.</b></summary>

<br>
<br>
<hr>
Make A Ship Class

Make the Human Ship sub-class.

Make an Alien Ship sub-class.

Make an instance of each class

Simulate a battle between your ship and a single alien ship first.

Make a method for the USS Assembly that will attack a given target. The target can be an input to the method.

Run the method and pass it the alien ship.

Make it so the method reduces the target's hull by the firepower of the USS Assembly.

<hr>

Make a game object

Make a method in the game object that will run a 'check win' for the health of the alien(s) and/or the USS Assembly. If the hull is 0 or less, display a message that the ship went kabloo-ey.

Make it so the alien will only be hit if a Math.random call is below the accuracy threshold.

Make a method for the alien ship to attack a target.

At a status console log for the end of the round.

PROBLEM: If you make the alien ship go kabloo-ey, then the alien should not then be able to  attack you. Fix this.

Make it so the attacks will keep occuring until someone's hull is at 0. Isolate what it is that you want to repeat.

<hr>

Make many alien ships with a Class. Make each object slightly different . . .

hull between 3 and 6, firepower between 2 and 4, accuracy between 0.6 and 0.8.

**HUGE CLUE / ANSWER:**

```javascript
this.hull = Math.floor(Math.random() * 4) + 3;
this.firepower = Math.floor(Math.random() * 3) + 2;
this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
```

Make a loop that calls the Class and generates alien ships. Push those constructed objects into a predefined array. Start with 6 ships (the loop should run 6 times).

Try out the game with the first alien ship in the array.

Run the battle with all ships in turn.

<hr>

Move functions into the game object.

Move on to the bonuses.

<br>
<hr>


<i>These are just suggestions, not answers, and will change the nature of the game that you would have made had you not read these.</i>
