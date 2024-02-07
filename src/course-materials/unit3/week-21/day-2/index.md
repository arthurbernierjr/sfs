---
track: "Unit 3"
title: "Week 21 - Day 2"
week: 21
day: 2
type: "homepage"
topics: "Algorithmic Thinking with Sorting"
---

## The Make it Make Sense Unit
![mern architecture](https://i.imgur.com/uoJvBRK.jpg)

| Time  | Activity |
| ----- | ------ |
| 6:30 - 8:30 | Watching Videos |
| 8:30 - 10:45 pm | Testing & Divide and Conquer Sorting Algorithms |
| 10:45pm | Exit Tickets |


- [Testing Slides](/unit3/week-21/day-2/slides)
-  `If the below links does not take you to the correct module, you can find the lesson in your myGA dashboard.`
- [myGA module: Intro to Sorting Algorithms](https://my.generalassemb.ly/activities/818)
- [myGA module: Basic Sorting Algorithms](https://my.generalassemb.ly/activities/778)
- [myGA module: Divide-and-Conquer Sorting Algorithms](https://my.generalassemb.ly/activities/882)

## Once you complete the videos and testing, try to take what you learned and complete Merge Sort and Quick Sort

```js
function mergeSort(arr) {
  // YOUR CODE HERE

}


// HELPER FUNCTION: merge two sorted arrays
function merge(arr1, arr2) {
  var result = [];

  while (arr1.length && arr2.length) {
    if(arr1[0] <= arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }

  return result.concat(arr1, arr2);
}


function quickSort(arr){
  // YOUR CODE HERE

}
```