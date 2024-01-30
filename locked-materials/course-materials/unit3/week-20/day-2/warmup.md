![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) 

# Stacks and Queues

## Overview
Peanut butter and jelly, Batman and Robin, Rick and Morty... stacks and queues are another iconic duo.

There are two components to this lesson:
1. [myGA module: Stacks and Queues](https://my.generalassemb.ly/activities/803)
2. [In-Class Exercise: Bracket Matching](#exercise)


## Learning Objectives
By the end of this lesson, you'll be able to:
- Distinguish between a stack and a queue.
- Determine situations in which you’d use a stack or queue over another data structure.
- Build a stack and a queue using a linked list or an array.
- THIS IS A DELIVERABLE PUT IN THE CLASS THREAD

## Prerequisites
* Big O notation
* Arthur's Linked List Lesson and Stacks & Queues overview

## Duration
1.5 hours total:
* 0.5 hour myGA
* 1 hour in class


## Exercise

```js
// STACK IMPLEMENTATION
class Stack {
    constructor() {
      this.items = []
    }
    push(item){
      this.items.push(item)
    }
    pop(){
      return this.items.pop()
    }
    peek(){
      return this.items[this.items.length - 1]
    }
    isEmpty(){
      return this.items.length === 0
    }
}

// this function will take in a string as input
// it will return true or false based on whether the brackets are properly matched
// the valid brackets it will scan for are {}, [], and ()
// you must use a Stack in your implementation of this function
// refer to the bracket matching readMe.md for more details
function bracketMatching(input){

}


class Node{
    constructor(data, priority){
        this.data = data;
        this.priority = priority;
        this.next = null;
    }
}

// This priority queue is implemented as a Linked List
// Your challenge is to implement the insert method of the priority queue
class priorityQueue{
    constructor(){
        this.head = null;
    }
    enqueue(data, priority){
        // Insert the new data into the proper place in the queue
        // the lowest priority number should be the head node
        // the priorities should remain in order
        // if two nodes have the same priority, put the new one first
    }
    peek(){
        // return the highest priority node in the queue
    }
    dequeue(){
        // remove and return the highest priority node in the queue
    }
}

module.exports = {
    bracketMatching,
    priorityQueue
}
```


## Additional Resources
* Here are visualizations for the two implementations of stacks: the [array implementation](https://www.cs.usfca.edu/~galles/visualization/StackArray.html) and [linked list implementation](https://www.cs.usfca.edu/~galles/visualization/StackLL.html).
* Same thing for queues: the [array implementation](https://www.cs.usfca.edu/~galles/visualization/QueueArray.html) and [linked list implementation](https://www.cs.usfca.edu/~galles/visualization/QueueLL.html).
* Common interview questions about [stacks](https://www.geeksforgeeks.org/stack-data-structure) and [queues](https://www.geeksforgeeks.org/queue-data-structure).
* Don’t forget to review [priority queues](https://www.geeksforgeeks.org/priority-queue-set-1-introduction) and [deques](https://www.geeksforgeeks.org/deque-set-1-introduction-applications).
