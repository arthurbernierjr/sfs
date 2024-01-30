![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) 

# Binary Trees (Not Binary Search Trees)

## Overview
This lesson covers three similar, tree-based data structures:
- Binary trees.
- A self-balancing binary tree (aka, an AVL tree).
- THIS IS A DELIVERABLE PUT IN THE CLASS THREAD

There are four components to this lesson. We recommend tackling them in the order below:
1. [myGA Module 1: Binary Trees and Tries](https://my.generalassemb.ly/activities/8)
2. Binary Tree Exercise below
3. [myGA Module 2: Balancing a Binary Tree](https://my.generalassemb.ly/activities/263)
4. AVL Tree Exercise below

> The myGA modules contain a link to an exercise in CodePen. **The code in CodePen is the exact same as the code in the in-class exercises.** Try out the exercise in CodePen and see how far you can get with it. Stop when you get stuck and we'll review the solution in class.

## Learning Objectives
By the end of this lesson, you'll be able to:
- Describe how a binary tree is structured and what makes it powerful. 
- Describe how a trie is structured.
- Identify scenarios in which trees are used in programming. 
- Balance a binary tree.

## Prerequisites
* Big O notation
* Recursion
* Arthur's Binary Search Tree Lesson 

## Duration
2 hours total:
* 1 hour myGA
* 1 hours in class

# You should be able to use your knowledge of Binary Search Trees to help you with this

## Try to solve this coding challenges and if you have time try to solve for an AVL tree

```js
class BinaryNode {
    constructor(){
    // a node has data, left, and right pointers
    // left and right are intialized as null
    }
}
class BinaryTree {
    constructor(){
        // when a new Tree is made, it has a root property
    }
    insert(data){
        // add a new Node to the tree, with data as the Node's data
        // if the data is already in the tree, do not insert it
    }
    search(val){
        // search the Tree for a node with the given value
        // if the node exists, return true
        // if the node doesn't exist, return false
    }
    size(node){
        // calculate the number of nodes in the tree, starting from the given node
    }
    getMax(){
        // return the maximum value stored in the tree
    }
    height(node){
        // calculate the maximum amount of nodes in any one path from the given node
        // if not given a specific node, default to using the root node
    }
    isBalanced(node){
        // return true or false based on whether the sub-tree starting at the given node is balanced
        // A tree is imbalanced if the height of one branch exceeds the other side by more than one level
        // A tree is balanced if all branches end within one level of each other.
    }
}

module.exports = {
    BinaryNode,
    BinaryTree
}
```

## Hungry for more
```js
class Node {
    constructor(){
    // a node has data, left, and right pointers
    // a node also has a height property that starts at 1
    // left and right are intialized as null
    }
}
class AVLTree {
    constructor(){
        // when a new Tree is made, it has a root property
    }
    insert(data){
        // add a new Node to the tree, with data as the Node's data
        // insertion starts the same way as in a regular Binary Tree
        // once the node is inserted, however, check the heights for imbalance
        // if the new node causes imbalance, perform rotations to rebalance
    }
    setHeight(node){
        // calculate and set the height property of the given node
        // the height is the maximum between the left and right children heights plus 1
        // the height of a node without any further nodes is 1
    }
    rotateRight(node){
        // rotate the given node to the right
    }
    rotateLeft(node){
        // rotate the given node to the left
    }
}

module.exports = {
    Node,
    AVLTree
}
```