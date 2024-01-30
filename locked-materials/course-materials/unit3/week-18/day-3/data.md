---
track: "Unit 3"
title: "Linked Lists"
week: 18
day: 3
type: "hw"
---

# Part 1: Linked Lists

## Learning Objectives
<br>

- Students Will Be Able To:
	- Define linked lists
    - Explain the time complexity of linked list operations
    - Compare and contrast linked lists to Arrays
    - Visualize a linked list
    - Traverse a singly linked list
    - Remove nodes from a singly linked list

---
## Roadmap

* Setup
* Defining a linked list
* Linked list operation time complexity
* Comparing linked lists to arrays
* Review JS class syntax
* Linked list visualization
* Meet the walker
* Use the walker to remove nodes
___

## Defining a Linked List

<br>

![Linked List Meme](https://imgur.com/L9KOlSx.jpeg)

<br>
<br>

Linked lists are a foundational, "array-like" data structure which appears in other complex data structures

* Linked lists are a collection of **nodes**

    * nodes are also seen in other data structures, but for linked lists, they contain:
    * a ``data`` property, that stores the node's value
    * a ``next`` property, also known as the "pointer", which points to the next item in the linked list
    * the last node will have a ``next`` property set to ``null``, so it is sometimes referred to as the "null next node", or the "tail"

Because of the pointers, the *order* of nodes within a linked list are not given by their physical placement in memory

---

## Linked List Operation Time Complexity

Operation | Worst Case Time Complexity
------------ | -------------
Indexing (Access) | O(N)
Insert/delete at beginning | O(1)
Insert/delete at end | O(1) when last element is known
Insert/delete in middle | search time + O(1)

---

## Comparing Linked Lists to Arrays

It seems that linked lists are very similar to arrays, but have natural drawbacks

* **❓ What is the time complexity of indexing for an array?**
* **❓ Is it possible for us to look backwards through a linked list where each node only has a *data* and *next* property?**

But for us to understand the advantages of linked lists, we'll have to do a bit of a review of arrays

*For this lesson, we'll be discussing dynamic arrays, instead of static arrays*

* A dynamic array stores all elements *consecutively* in memory, and keeps a count of the current number of elements
    * arrays are allocated space when defined
    * if the space reserved for the dynamic array is exceeded, it is reallocated and (possibly) copied

![array graphic](https://www.mathcs.emory.edu/~cheung/Courses/170/Syllabus/09/FIGS/array02x.gif)

* If we want to insert something into an array, we have to make space by "scooting over" every element, starting at the index we want to insert at

* **❓ What must we do if we want to delete an element in the middle of the array?**

* **❓ What are some of the advantages of linked lists over arrays?**

---


## Visualizing a Linked List

* When we create a linked list, we initialize it with a ``head`` property, which will refer to the first node
    * When you initialize a linked list, head will not point to anything yet, so it will point to ``null``
* The easiest place to add more nodes to the linked list is at the end of the list
    * **❓ How do we know if you have reached the end of a linked list?**

![Linked list visualization](https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/linked-lists/english/3-Head-Node-Null.png)

We will be referring to this graphic for the below sections

---

![linked-list](https://media.git.generalassemb.ly/user/15881/files/c1409700-692a-11ea-98b9-15dab7ba6fff)



<div>
  <h1>Node Class API</h1>
  <table class="table">
    <thead>
      <tr>
        <td>Function</td>
        <td>Arguments</td>
        <td>Returns</td>
        <td>Directions</td>
        <td>Example</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>constructor</td>
        <td>(data, next)</td>
        <td>Node</td>
        <td>
          Creates a class instance to represent a node.  The node should
          have two properties, 'data' and 'next'.  Accept both
          of these as arguments to the 'Node' constructor, then
          assign them to the instance as properties 'data' and 'next'.
          If 'next' is not provided to the constructor, then default its
          value to be 'null'.
        </td>
        <td>
          <pre>
            const n = new Node('Hi');
            n.data // 'Hi'
            n.next // null
            const n2 = new Node('There', n);
            n2.next // returns n
          </pre>
        </td>
      </tr>
    </tbody>
  </table>

  <h1>LinkedList Class API</h1>
  <table class="table">
    <thead>
      <tr>
        <td>Function</td>
        <td>Arguments</td>
        <td>Returns</td>
        <td>Directions</td>
        <td>Example</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>constructor</td>
        <td>-</td>
        <td>(LinkedList)</td>
        <td>
          Create a class to represent a linked list.  When created,
          a linked list should have *no* head node associated with it.
          The LinkedList instance will have one property, 'head', which
          is a reference to the first node of the linked list.  By default
          'head' should be 'null'.
        </td>
        <td>
          <pre>
            const list = new LinkedList();
            list.head // null
          </pre>
        </td>
      </tr>
      <tr>
        <td>insertFirst</td>
        <td>(data)</td>
        <td>-</td>
        <td>
          Creates a new Node from argument 'data' and assigns the resulting
          node to the 'head' property.  Make sure to handle the case in which
          the linked list already has a node assigned to the 'head' property.
        </td>
        <td>
          <pre>
            const list = new LinkedList();
            list.insertFirst('Hi There'); // List has one node
          </pre>
        </td>
      </tr>
      <tr>
        <td>size</td>
        <td>-</td>
        <td>(integer)</td>
        <td>
          Returns the number of nodes in the linked list.
        </td>
        <td>
          <pre>
            const list = new LinkedList();
            list.insertFirst('a');
            list.insertFirst('b');
            list.insertFirst('c');
            list.size(); // returns 3
          </pre>
        </td>
      </tr>
      <tr>
        <td>getFirst</td>
        <td>-</td>
        <td>(Node)</td>
        <td>
          Returns the first node of the linked list.
        </td>
        <td>
          <pre>
            const list = new LinkedList();
            list.insertFirst('a');
            list.insertFirst('b');
            list.getFirst(); // returns Node instance with data 'a'
          </pre>
        </td>
      </tr>
      <tr>
        <td>
          getLast
        </td>
        <td>
          -
        </td>
        <td>
          (Node)
        </td>
        <td>
          Returns the last node of the linked list
        </td>
        <td>
          <pre>
            const list = new LinkedList();
            list.insertFirst('a');
            list.insertFirst('b');
            list.getLast(); // returns node with data 'a'
          </pre>
        </td>
      </tr>
      <tr>
        <td>
          clear
        </td>
        <td>
          -
        </td>
        <td>
          -
        </td>
        <td>
          Empties the linked list of any nodes.
        </td>
        <td>
          <pre>
            const list = new LinkedList();
            list.insertFirst('a');
            list.insertFirst('b');
            list.clear();
            list.size(); // returns 0
          </pre>
        </td>
      </tr>
      <tr>
        <td>
          removeFirst
        </td>
        <td>
          -
        </td>
        <td>
          -
        </td>
        <td>
          Removes only the first node of the linked list.  The list's head should
          now be the second element.
        </td>
        <td>
          <pre>
            const list = new LinkedList();
            list.insertFirst('a');
            list.insertFirst('b');
            list.removeFirst();
            list.getFirst(); // returns node with data 'a'
          </pre>
        </td>
      </tr>
      <tr>
        <td>
          removeLast
        </td>
        <td>
          -
        </td>
        <td>
          -
        </td>
        <td>
          Removes the last node of the chain
        </td>
        <td>
          <pre>
            const list = new LinkedList();
            list.insertFirst('a');
            list.insertFirst('b');
            list.removeLast();
            list.size(); // returns 1
            list.getLast(); // returns node with data of 'b'
          </pre>
        </td>
      </tr>
      <tr>
        <td>
          insertLast
        </td>
        <td>
          (Data)
        </td>
        <td>
          -
        </td>
        <td>
          Inserts a new node with provided data at the end of the chain
        </td>
        <td>
          <pre>
            const list = new LinkedList();
            list.insertFirst('a');
            list.insertFirst('b');
            list.insertLast('c');
            list.getLast(); // returns node with data 'C'
          </pre>
        </td>
      </tr>
      <tr>
        <td>
          getAt
        </td>
        <td>
          (integer)
        </td>
        <td>
          (Node)
        </td>
        <td>
          Returns the node at the provided index
        </td>
        <td>
          <pre>
            const list = new List();
            list.insertFirst('a');
            list.insertFirst('b');
            list.insertFirst('c');
            list.getAt(1); // returns node with data 'b'
          </pre>
        </td>
      </tr>
      <tr>
        <td>
          removeAt
        </td>
        <td>
          (integer)
        </td>
        <td>
          -
        </td>
        <td>
          Removes node at the provided index
        </td>
        <td>
          <pre>
            const list = new List();
            list.insertFirst('a');
            list.insertFirst('b');
            list.insertFirst('c');
            list.removeAt(1);
            list.getAt(1); // returns node with data 'a'
          </pre>
        </td>
      </tr>
      <tr>
        <td>
          insertAt
        </td>
        <td>
          (Data, integer)
        </td>
        <td>
          -
        </td>
        <td>
          Create an insert a new node at provided index.
          If index is out of bounds, add the node to the end
          of the list.
        </td>
        <td>
          <pre>
            const list = new List();
            list.insertFirst('a');
            list.insertFirst('b');
            list.insertFirst('c');
            list.insertAt('Hi', 1)
            list.getAt(1); // returns node with data 'Hi'
          </pre>
        </td>
      </tr>
    </tbody>
  </table>
</div>


```javascript
// Linked list

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    const last = this.getLast();

    if (last) {
      // There are some existing nodes in our chain
      last.next = new Node(data);
    } else {
      // The chain is empty!
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }
 // If your hungry for more
  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }
// If your absolutely starving
  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

```

Linked Lists are a fundamental data structure and come up frequently in coding interviews, particularly at technology companies. They provide an excellent test of understanding about pointers, recursion, and object-oriented design. They are also useful in problems where constant time insertions and deletions are needed.

Here are a few example questions that may be asked in a coding interview:

1. **Reversing a Linked List**: Given the head of a singly linked list, return the list in reverse order.

2. **Finding the Middle Element**: Given the head of a singly linked list, return the middle element of the list. If the list has an even number of elements, return the second middle element.

3. **Detecting a Cycle**: Given the head of a singly linked list, determine whether or not there is a cycle in the list.

4. **Intersection of Two Linked Lists**: Given the heads of two linked lists, find the node at which the lists intersect, if any.

5. **Remove Nth Node From End of List**: Given the head of a singly linked list, remove the nth node from the end of the list and return the head of the modified list.

6. **Merge Two Sorted Lists**: Given the heads of two sorted linked lists, merge them into a new, sorted linked list.

7. **Palindrome Linked List**: Given the head of a singly linked list, determine whether or not the list is a palindrome.

8. **Copy List with Random Pointer**: A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null. Return a deep copy of the list.

Solving these problems requires a solid understanding of linked list mechanics and sometimes a combination of multiple pointers, recursion, or extra space. It's important to not only be able to code the solutions but also to explain the logic behind your approach, including time and space complexity.

1. **Linked List Mechanics**: This means understanding how a linked list works. A linked list is a linear data structure where each element is a separate object (or 'node'). Each node contains a pointer to the next node in the sequence. Operations include insertion, deletion, traversal, searching, etc.

2. **Multiple Pointers**: This strategy involves using more than one pointer to traverse through the linked list. For instance, in the problem of finding the middle of the linked list, you can use two pointers moving at different speeds (a "slow" pointer and a "fast" pointer) to solve the problem in one pass. The slow pointer moves one node at a time, while the fast pointer moves two nodes at a time. When the fast pointer reaches the end, the slow pointer will be at the middle.

3. **Recursion**: Recursion involves a function calling itself to solve smaller instances of the same problem. In a linked list, you might use recursion to reverse a linked list, for instance. You can recursively travel to the end of the list, and as the recursive calls return, you can swap the current node with the previous one to reverse the list. However, recursion uses extra space on the call stack to keep track of the recursive calls, which could be significant in the case of a long linked list.

4. **Extra Space**: Sometimes you might need to use additional data structures to solve a problem. For instance, in the problem of detecting a cycle in a linked list, you can use a hash set to store nodes that you've already seen. If you come across a node that's already in the set, then there's a cycle. This strategy uses extra space proportional to the number of nodes in the list.

In summary, solving linked list problems often involves understanding these techniques and knowing when to use each one. Which one to use depends on the specific problem and any constraints on time and space complexity.