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
- Each Castle has a method to generate workers
- Each Castle has a place to store workers


### worker

- A worker has a name (input by the user)
- A worker has a job, one of the following (choice given to user):
    - nothing (this is the initial value upon creating a worker)
    - repair
    - attack

---

## Flow of game:

1. Name your castle
2. At the start of player's turn, ask what the user wants to do (one of the following)

    - Create a worker
        1. If chosen give the player a choice to make the worker an attacker or repairer
        1. Ask what the worker's name should be (You can set default names for each if you'd like)
        1. Have the player's barracks generate a worker and store it

    - Deploy workers
        1. If chosen, have the workers do their designated action and adjust each castle's health accordingly (see section 3)

    - Quit the game

3. Once this is complete, start the computer's turn
    - Choose a random number from 0-1
    - If Greater than 0.84: computer creates an repair worker
    - If Greater than 0.72: computer creates an attack worker
    - If Greater than 0.5: deploys workers to attack/repair
        - decrease player hit points/increase computer hp
4. Evaluate the state of the game:
    - If the computer has 0 or fewer hit points, you win
    - If you have 0 or fewer hit points, the computer wins
    - If you both have 0 or fewer hit points, it's a tie
    - If you both have more than 0 hit points, start player's turn over again (step 1)

---