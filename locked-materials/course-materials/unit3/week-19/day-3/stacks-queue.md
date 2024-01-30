# Stacks & Queues

## Overview

This lesson covers an introduction to the concept of Stacks and Queues.

## Learning Objectives

By the end of this lesson, you will be able to:

- Distinguish between the behavior of a stack and a queue.
- Determine situations in which you’d use a stack or queue versus another data structure.
- Build a stack and a queue using a linked list or an array.


## What are Stacks & Queues?

Stacks and queues in computer science are a lot like stacks and queues in real life. It helps if you think of stacks of pancakes and queues, or lines, of people.

### Queues

Let’s take a look. It’s Saturday morning, and out of the kindness of your heart you decide to make pancakes for your family. You’re gathering all the ingredients when you check the fridge and discover you’re out of eggs! You rush to the grocery store, grab the eggs, and of course the line to check out — the queue — is five-people deep. You move to the back and wait your turn.

Waiting in line for the cash register mirrors how a queue works in computer science. They’re defined by first-in, first-out behavior. That is, the first thing that’s added to a queue will be the first thing removed; the first person in line will be the first person who gets to check out.

#### Queues operate on "first-in, first-out" (aka, FIFO) behavior. Items are removed in the order they were added, from first to last.

![Queues](https://www.dropbox.com/s/xnmhr9akmyfoq5u/6-Enqueue.png?dl=1)

Computer processing unit (CPU) scheduling is based on a queue. Tasks are executed in the order in which they were called, while the execution of tasks further down in the queue is put on hold until resources are available, on a first in, first out basis.

### Stacks

Now for stacks. You’ve made it home and the pancakes are coming together beautifully. As you cook, you flip the pancakes off the griddle and onto a plate. You finish up the last batch and bring the pancakes to the table to serve your family. Which pancakes are going to be taken first? The hot, fresh pancakes on the top of the stack? Or the pancake on the bottom that’s now cold and getting smushed? We know which one we’d take — the hot one on the top.

Watching your family take the fresh pancakes off the top of the plate is how a stack works. A stack is defined by last-in, first-out behavior — the opposite of how a queue works. The last thing added to the stack — the freshest pancake — is the first thing to be removed.

#### Stacks operate on “last-in, first-out” (aka, LIFO) behavior. The last, most recently added item, is the first to be removed.

![Stacks](https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/intro-data-structures/5-Push-Pop.png)

The function call stack is a common example of stacks in programming. When you call a function to execute, it’s pushed to the top of the stack and runs until we add another function to the stack, which then runs until it returns (or another function is pushed to the top), on a last in, first out basis. You can keep adding functions until you’ve run out of space in the stack, in which case you’ve reached stack overflow. (Mmm, pancake stack overflow... 😋)

**❓ What data structure would be represented by the 'back' button in the browser?**

**❓ What data structure would be represented by sending documents to the printer?**

**❓ What data structure would be represented by the 'undo' or Cmd-Z function?**

## Operations in Stacks & Queues

Stacks and queues might seem totally different, but they actually have a lot in common.

One important similarity is that we can perform the same relatively limited set of actions on them.

The trade-off for limited functionality? Great runtimes, which are the same for stacks and queues! Check it out:

| Function    | Name in a Stack | Name in a Queue | Complexity |
| ----------- | --------------- | --------------- | ---------- |
| Access      | Peek            | Peek            | O(1)       |
| Insert      | Push            | Enqueue         | O(1)       |
| Delete      | Pop             | Dequeue         | O(1)       |
| Check empty | isEmpty         | isEmpty         | O(1)       |

##### ❓ Imagine that you started with an empty stack and perform the following operations:

1. `PUSH 0`
1. `POP`
1. `PUSH 2`
1. `PUSH 4`
1. `PUSH 6`
1. `POP`
1. `PUSH 8`

##### ...What would the stack look like at the end? (Hint: It might help to sketch this out on a piece of paper!)

##### ❓ Imagine that you start with an empty queue and perform the following operations:

1. `ENQUEUE 15`
1. `DEQUEUE`
1. `ENQUEUE "Popcorn"`
1. `ENQUEUE 515`
1. `ENQUEUE "GA"`
1. `DEQUEUE`
1. `ENQUEUE "Smile!"`

##### ...What would your queue end up looking like?

## Implementing Stacks & Queues

The other thing that stacks and queues have in common is that they can both be implemented as an array or as a linked list.

Other than using different underlying data structures, there’s no major difference between array and linked list implementation. Which you use depends on how your data is already structured and how you expect to be inserting or removing elements.

> For the implementations in this exercise, we'll be using array-based implementations.

##### ❓ Quick refresher: The major difference between a linked list and an array is how they store data in a computer’s memory.

##### Which of the following statements is true about how linked lists and arrays store data? 🧐

- Linked lists store data in one continuous block of memory.
- Arrays store data in one continuous block of memory.
- Linked lists can store data anywhere in a computer's memory using pointers.
- Arrays can store data anywhere in a computer's memory using the index.

## Queue Variations

Queues have a couple of unique implementations that we'll touch on.

### Priority Queues

These have three rules in addition to regular queues:

1. Every item has a priority associated with it.
1. An element with high priority is dequeued before an element with low priority.
1. If two elements have the same priority, they are served according to their order in the queue.

Examples: Airport priority boarding, CPU scheduling

### Double-Ended Queues

A double-ended queue, or "deque", perform insertions and deletions at both ends of the queue. They're usually implemented with doubly-linked lists or dynamic arrays.

Have you ever been last in a long line at the grocery store only to see a cashier one lane over open up their register? Typically, that cashier will beckon to you to jump into their lane so you can be checked out right away. That’s basically what happens in a deque.

Example: spreading tasks between different servers as equally as possible

## Essential Questions

**❓ You're working on building a message board and want to display only the 10 most recent messages a user posted, in the order they were posted. Which data structure should you use?**

**❓ You and your partner are going out for your anniversary dinner. When you arrive, you ask the host for a table for two and your name goes on the waiting list. While you’re waiting, a group of seven people walks right in and gets seated. What gives?!**

## Interviews

If stacks or queues come up in an interview, you’ll likely be asked to perform operations such as sorting, inserting, and finding values — and it only gets more complicated from there.

- [This article](https://www.geeksforgeeks.org/stack-data-structure/) on stacks outlines some standard problems that could come up in interviews.
- The same [article](https://www.geeksforgeeks.org/queue-data-structure/), but for queues.
- Don’t forget to review [priority queues](https://www.geeksforgeeks.org/priority-queue-set-1-introduction/) and [deques](https://www.geeksforgeeks.org/deque-set-1-introduction-applications/). (You might not be asked to build one of these, mostly to explain how they work and their uses.)

Use these visualization tools to practice building stacks and queues:

- Stacks: [array implementation](https://www.cs.usfca.edu/~galles/visualization/StackArray.html) and [linked list implementation](https://www.cs.usfca.edu/~galles/visualization/StackLL.html).
- Queues: [array implementation](https://www.cs.usfca.edu/~galles/visualization/QueueArray.html) and [linked list implementation](https://www.cs.usfca.edu/~galles/visualization/QueueLL.html).


## Array Implementation

## stack
```js
// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    this.data.push(record);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

module.exports = Stack;
```

## Queue

```js
// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'enqueue' and 'dequeue'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.enqueue(1);
//     q.dequeue(); // returns 1;

class Queue {
  constructor() {
    this.data = [];
  }

  enqueue(record) {
    this.data.unshift(record);
  }

  dequeue() {
    return this.data.pop();
  }
}

module.exports = Queue;
```