![](/ga_cog.png)

# Castle Battle

For this assignment, you will be utilizing JavaScript Classes and alerts/prompts to create a mini game. 

### Example

This is how a basic game might look like when you run it: 

![](https://imgur.com/jlFYvGz.gif)

---

## Classes

Create the following two classes: 

### Castle

- This is a two Player game (one human and one computer)
- Each Castle has a name (input by the user)
- Each Castle has a Barracks (see below)
- Each Castle starts with 10 hit points
- Each Castle has a method to generate peons
- Each Castle has a place to store peons


### Peon

- A Peon has a name (input by the user)
- A Peon has a job, one of the following (choice given to user):
    - nothing (this is the initial value upon creating a peon)
    - repair
    - attack

---

## Flow of game:

1. Name your castle
2. At the start of player's turn, ask what the user wants to do (one of the following)

    - Create a peon
        1. If chosen give the player a choice to make the peon an attacker or repairer
        1. Ask what the peon's name should be (You can set default names for each if you'd like)
        1. Have the player's barracks generate a peon and store it

    - Deploy Peons
        1. If chosen, have the peons do their designated action and adjust each castle's health accordingly (see section 3)

    - Quit the game

3. Once this is complete, start the computer's turn
    - Choose a random number from 0-1
    - If Greater than 0.84: computer creates an repair peon
    - If Greater than 0.72: computer creates an attack peon
    - If Greater than 0.5: deploys peons to attack/repair
        - decrease player hit points/increase computer hp
4. Evaluate the state of the game:
    - If the computer has 0 or fewer hit points, you win
    - If you have 0 or fewer hit points, the computer wins
    - If you both have 0 or fewer hit points, it's a tie
    - If you both have more than 0 hit points, start player's turn over again (step 1)

---

## Hungry for more?

### Make it in the DOM
- if you've written your game well and it fully functions in the console, you should be able to make new functions like `message` that will print a message in the DOM, rather than making an alert
- And be able to swap `prompts` for either an input box, or specific buttons for your user to use.
- So you still be passing in the same text, and getting the same response from your prompts, but it'll render in the DOM.


1. Make it so that the computer doesn't randomly attack/repair/do nothing itself.  Instead, it will act like a player and either create a peon or, if a peon already exists, select a random peon and tell it to either attack or repair
1. Make the 2nd player optionally be either the computer (random decisions) or another human
1. Repairs increase hit points a random number between 0-3
1. Attacks decrease hit points a random number between 0-3
