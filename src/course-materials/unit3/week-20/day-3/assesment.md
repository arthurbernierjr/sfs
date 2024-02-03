---
track: "HW"
title: "Javascript Assesment"
week: 20
day: 3
type: "homework"
topics: "Due Saturday 2/10/2024 "
---
# Assesment

## Submission Guidelines

- Navigate to the `software_homework/unit_3` folder in your local machine.
- Create a new folder named `assessment2`.
- Inside `assessment2`, create a file named `solutions.js`.
- Initialize the folder as an npm project by running `npm init -y`.
- Initialize the folder as a git repository by running `git init`.
- Answer the verbal questions in `solutions.js` as comments.
- Solve the coding challenges in `solutions.js`.
- Commit your changes with meaningful commit messages.
- Push your changes to your forked repository on GitHub.
- Submit a pull request to the original repository with the title `Week 20 practical hw`.

## Verbal Questions

1. What is the difference between a **parameter** and an **argument**?
2. Within a function, what is the difference between **return** and **console.log**?

### Palindrome

1. Convert the input string to lowercase to ensure the comparison is case-insensitive.
2. Split the string into an array of characters, reverse the array, and then join it back into a string.
3. Compare the original lowercase string with the reversed string.
4. If they are the same, the function should return `true`; otherwise, it returns `false`.
5. **Commit your work** with the message "palindrome completed".

### Sum Array

1. Initialize a variable to store the sum of the array elements.
2. Use a for loop to iterate through the array.
3. In each iteration, add the current element to the sum variable.
4. After the loop, return the sum variable.
5. **Commit your work** with the message "sum array completed".

### Prime Numbers

#### checkPrime

1. Check if the number is less than or equal to 1. If so, return `false` because it's not prime.
2. Use a for loop to iterate from 2 up to the square root of the number.
3. If the number is divisible by any number in this range, return `false`.
4. If no divisors are found, return `true`.
   
#### printPrimes

1. Use a for loop to iterate through numbers from 2 up to the specified limit.
2. For each number, use the `checkPrime` function to check if it's prime.
3. If `checkPrime` returns `true`, console.log the number.
4. **Commit your work** with the message "prime numbers completed".

### Calculate the Cube

1. Calculate the cube of the number by multiplying the number by itself twice.
2. Return the result.
3. **Commit your work** with the message "calculate the cube completed".

### Is a Vowel?

1. Check if the input character is included in a string of vowels (both lowercase and uppercase).
2. Return `true` if the character is a vowel, otherwise return `false`.
3. **Commit your work** with the message "is a vowel completed".

### Get Two Lengths

1. Return an array containing the lengths of the two input strings.
2. **Commit your work** with the message "get two lengths completed".

### Get Multiple Lengths

1. Use the `map` function to transform each string in the input array into its length.
2. Return the resulting array of lengths.
3. **Commit your work** with the message "get multiple lengths completed".

### Maximum of Three Numbers

1. Use the `Math.max` function to find the maximum of the three numbers.
2. Return the maximum number.
3. **Commit your work** with the message "maximum of three numbers completed".

### Print Longest Word

1. Use the `reduce` method to find the longest string in the array.
2. In case of a tie, the first word in the array order is returned.
3. **Commit your work** with the message "print longest word completed".

### Transmogrify the Numbers

1. Calculate the product of the first two numbers.
2. Raise the product to the power of the third number.
3. Return the result.
4. **Commit your work** with the message "transmogrify the numbers completed".

### Project Euler Problem 2

1. Initialize two variables to store the first two numbers of the Fibonacci sequence.
2. Use a while loop to generate Fibonacci numbers up to the specified limit.
3. Within the loop, check if the current number is even. If so, add it to the sum.
4. Update the Fibonacci sequence variables for the next iteration.
5. Return the sum of even Fibonacci numbers.
6. **Commit your work** with the message "Project Euler Problem 2 completed".

### A Needle in the Haystack

1. Use the `indexOf` method to find the index of the `"needle"` in the array.
2. Return a string that includes the index of the needle.
3. **Commit your work** with the message "a needle in the haystack completed".

### Sum the Positive

1. Use the `filter` method to create a new array containing only positive numbers.
2. Use the `reduce` method to sum the values of the filtered array.
3. Return the sum.
4. **Commit your work** with the message "sum the positive completed".


## Identifying Problem Solving Patterns

### Step 1: Read and understand the pattern, and the code given in the example
### Step 2: Make sure you did step 1 it will just be confusing if you don't do step 1
### Step 3: Re-write the example in psuedo-code like the problems you were given above
### Step 4: Use the SOP we created in Outcomes to now try to solve the problems that are given
1. Read the problem
1. Understand the problem
1. Explore Concrete Examples
1. Break it down
1. Simplify/Solve Loop
1. Look Back and Refactor

### Step 5: After taking thirty minutes on each question, look up the answer online
### Step 6: Analyze the solution you found and compare it to yours
### Step 7: Write out the solution you found in psuedocode form and add it as comments in `solutions.js` and then try to solve it again as many times as you like using the psuedocode.
### Step 8: Doing it this way above is not the most fun way and may cause you're brain to hurt just a tad, this is good, this is an approved method no matter if you are nuerotypical or nuerodivergent
### Step 9: Trust the process and do not deviate to get the best benefit

## Frequency Counter

The Frequency Counter pattern is a common technique used in coding challenges and algorithms to track the frequencies of specific elements in one or more collections (like arrays or strings). Instead of using nested loops, which often result in O(n²) time complexity, the Frequency Counter pattern uses objects (or sets/maps in languages other than JavaScript) to achieve O(n) time complexity, making it more efficient for large datasets.

### How It Works

1. **Initialization**: Create one or more objects to keep track of the frequencies of elements.
2. **Population**: Iterate through the collection(s) and populate the object(s) with each element's frequency.
3. **Comparison**: Perform the necessary operations or comparisons using the populated object(s).

This pattern is particularly useful for solving problems related to anagrams, duplicates, or any scenario where you need to compare the number of occurrences of elements across data structures.

### Example Questions

#### Question 1: Valid Anagram

Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word or phrase formed by rearranging the letters of another, such as "cinema", formed from "iceman".

**Solution Steps for Question 1:**

1. **Check Lengths**: If the two strings have different lengths, they cannot be anagrams, return `false`.
2. **Create Frequency Counters**: Initialize two objects to count the frequencies of each letter in both strings.
3. **Populate the First Counter**: Iterate through the first string, increasing the count for each letter in the corresponding object.
4. **Populate the Second Counter**: Iterate through the second string, doing the same.
5. **Compare Counters**: Iterate through one counter object, and for each letter, check if the letter exists in the second counter with the same frequency. If not, return `false`.
6. **Return True**: If all letters match in frequency, return `true`.

**Solution Code for Question 1:**

```javascript
function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }

    const lookup = {};

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        // If letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        // Can't find letter or letter is zero then it's not an anagram
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return true;
}
```


### Question 2: Same Frequency

**Problem Statement**: Given two positive integers, find out if the two numbers have the same frequency of digits.

**Solution Steps**:
1. Convert both numbers to string representations to easily iterate over the digits.
2. Initialize two frequency counter objects for each number.
3. Populate the frequency counters by iterating over each digit of the two numbers.
4. Compare the two frequency counters. If they have the same keys with the same values, the numbers have the same frequency of digits; otherwise, they do not.
5. Return `true` if the frequencies match, otherwise return `false`.

**Examples**:
- `sameFrequency(182, 281)` should return `true`.
- `sameFrequency(34, 14)` should return `false`.
- `sameFrequency(3589578, 5879385)` should return `true`.
- `sameFrequency(22, 222)` should return `false`.

### Question 3: Are There Duplicates

**Problem Statement**: Implement a function called `areThereDuplicates`, which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.

**Solution Steps**:
1. Use a frequency counter object to count the occurrences of each argument.
2. Populate the frequency counter by iterating over the arguments.
3. Iterate through the values of the frequency counter. If any value is greater than 1, it means a duplicate exists.
4. Return `true` if any duplicates are found, otherwise return `false`.

**Examples**:
- `areThereDuplicates(1, 2, 3)` should return `false`.
- `areThereDuplicates(1, 2, 2)` should return `true`.
- `areThereDuplicates('a', 'b', 'c', 'a')` should return `true`.



## Sliding Window

The Sliding Window pattern is an efficient way to solve problems involving arrays or sequences in a continuous subset or subarray. It is particularly useful when you need to calculate something among all contiguous subarrays of a fixed size or find the longest/shortest sequence that meets certain criteria. This pattern can help reduce the time complexity from O(n²) to O(n) by avoiding unnecessary re-computation.

### How It Works

1. **Window Initialization**: Start with an initial "window" of elements, which could be a single element or a subset of the array, depending on the problem.
2. **Window Expansion**: Expand the window until it reaches the desired condition or size.
3. **Window Sliding**: Once the window is at its maximum size or meets a certain condition, slide the window over by one element at a time, adjusting calculations as necessary to reflect the current window's contents.
4. **Condition Checking**: At each step, check for the condition you're trying to satisfy (e.g., maximum sum, longest sequence) and update your answer accordingly.

### Example: MaxSubarraySum

**Problem Statement**: Write a function called `maxSubarraySum` which accepts an array of integers and a number called `n`. The function should calculate the maximum sum of `n` consecutive elements in the array.

**Solution Steps**:

1. **Edge Case Check**: If `n` is greater than the array length, return `null` because it's not possible to find a subarray of length `n`.
2. **Initial Sum Calculation**: Calculate the sum of the first `n` elements to initialize the max sum.
3. **Sliding the Window**: 
   - Start a loop from the `n`th element of the array.
   - Subtract the element at the start of the window and add the element at the end of the window to the sum. This effectively slides the window over by one position.
   - Update the max sum if the new sum is greater than the current max sum.
4. **Return Max Sum**: After sliding through the entire array, return the max sum found.

**Solution Code**:

```javascript
function maxSubarraySum(arr, n) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < n) return null;
    
    // Initial window sum
    for (let i = 0; i < n; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    
    // Slide the window
    for (let i = n; i < arr.length; i++) {
        tempSum = tempSum - arr[i - n] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    
    return maxSum;
}
```

This function first checks if the array has enough elements to form a subarray of length `n`. It then calculates the sum of the first `n` elements and uses this as the initial max sum. As it iterates through the array, it updates the sum to reflect the current window by subtracting the element that was left behind and adding the new element. This way, it maintains the sum of `n` consecutive elements throughout the array with only one addition and subtraction per iteration, achieving O(n) time complexity.

### Practice Problems

After understanding the MaxSubarraySum problem and solution, try applying the Sliding Window pattern to solve similar problems:

### Question 1: MinSubArrayLen

**Problem Statement**: Write a function called `minSubArrayLen` which accepts two parameters - an array of positive integers and a positive integer. This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

**Solution Steps**:
1. Initialize two pointers at the start of the array and a variable to track the minimum length of the subarray.
2. Initialize a sum variable to accumulate the sums of the subarrays.
3. Expand the window by moving the end pointer, adding the values to the sum until it is greater than or equal to the target sum.
4. Once the sum is greater than or equal to the target, try to shrink the window from the beginning to find the smallest subarray by moving the start pointer forward and subtracting values from the sum.
5. Update the minimum length each time a smaller subarray that satisfies the condition is found.
6. Return the minimum length if found; otherwise, return 0.

**Examples**:
- `minSubArrayLen([2,3,1,2,4,3], 7)` should return `2`, because `[4,3]` is the smallest subarray.
- `minSubArrayLen([2,1,6,5,4], 9)` should return `2`, because `[5,4]` is the smallest subarray.
- `minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)` should return `1`, because `[62]` is greater than 52.
- `minSubArrayLen([1,4,16,22,5,7,8,9,10], 39)` should return `3`.
- `minSubArrayLen([1,4,16,22,5,7,8,9,10],55)` should return `5`.
- `minSubArrayLen([4,3,3,8,1,2,3], 11)` should return `2`.
- `minSubArrayLen([1,4,16,22,5,7,8,9,10],95)` should return `0`.

### Question 2: FindLongestSubstring

**Problem Statement**: Write a function called `findLongestSubstring` which accepts a string and returns the length of the longest substring with all distinct characters.

**Solution Steps**:
1. Initialize a variable to keep track of the longest substring length.
2. Use a pointer or index to track the start of the current substring.
3. Create a map or object to store characters and their positions within the string.
4. Iterate through the string with another pointer or index to represent the end of the current substring.
5. As you encounter each character, check if it is already in the map/object. If it is, and its index is greater than or equal to the current start of the substring, move the start to the index after the repeated character.
6. Update the map/object with the current character's latest index.
7. Calculate the length of the current substring and update the longest length if necessary.
8. Return the longest length found.

**Examples**:
- `findLongestSubstring('')` should return `0`.
- `findLongestSubstring('thisisawesome')` should return `6`.
- `findLongestSubstring('thecatinthehat')` should return `7`.
- `findLongestSubstring('bbbbbb')` should return `1`.
- `findLongestSubstring('longestsubstring')` should return `8`.
- `findLongestSubstring('thisishowwedoit')` should return `6`.



## Multiple Pointers

The Multiple Pointers pattern involves creating pointers or values that correspond to an index or position and move towards the beginning, end, or middle based on a certain condition. This technique is efficient for solving problems with minimal space complexity, often in linear time.

### How It Works

1. **Pointer Initialization**: Depending on the problem, pointers are typically initialized at the beginning, end, or sometimes the middle of a collection.
2. **Condition-Based Movement**: The pointers move based on a condition set by the problem. For example, if you're trying to find a pair of numbers that sum to zero, you might move the pointers closer together or further apart based on their sum.
3. **Solution Identification**: The movement continues until the solution is found or the pointers meet or pass each other, indicating that no solution exists.

### Example: SumZero

**Problem Statement**: Write a function called `sumZero` which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or `undefined` if a pair does not exist.

**Solution Steps**:

1. **Pointer Initialization**: Initialize two pointers, one at the beginning of the array (`left`) and one at the end (`right`).
2. **Iterate with Condition**: While the `left` pointer is less than the `right` pointer:
   - **Calculate Sum**: Calculate the sum of the values at the two pointers.
   - **Sum Zero Check**: If the sum is 0, return the pair of values as they are the first pair to sum to zero.
   - **Move Pointers Based on Sum**:
     - If the sum is less than 0, move the `left` pointer up (increment) to increase the sum.
     - If the sum is greater than 0, move the `right` pointer down (decrement) to decrease the sum.
3. **No Pair Found**: If the loop ends without finding a pair, return `undefined`.

**Solution Code**:

```javascript
function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum < 0) {
            left++;
        } else {
            right--;
        }
    }
    
    return undefined;
}
```

This function efficiently finds the first pair of numbers that sum to zero by moving two pointers towards each other based on the sum of their values. This approach takes advantage of the array being sorted, allowing for a linear time complexity solution.

### Practice Problems

To further understand and apply the Multiple Pointers pattern, consider solving these problems:

### Question 1: Count Unique Values

**Problem Statement**: Implement a function called `countUniqueValues`, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

**Solution Steps**:
1. If the array is empty, return 0.
2. Initialize a pointer or index (`i`) to start at the first element of the array.
3. Iterate through the array with another pointer or index (`j`), starting from the second element.
4. Compare the elements at `i` and `j`. If they are different, increment `i`, and set the value at `i` to the value at `j`. This effectively moves unique values to the front of the array without needing an auxiliary data structure.
5. The count of unique values will be `i + 1` since `i` represents the index, and indexes are zero-based.
6. Return `i + 1`.

**Examples**:
- `countUniqueValues([1,1,1,1,1,2])` should return `2`.
- `countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])` should return `7`.
- `countUniqueValues([])` should return `0`.
- `countUniqueValues([-2,-1,-1,0,1])` should return `4`.

### Question 2: Average Pair

**Problem Statement**: Write a function called `averagePair`. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

**Solution Steps**:
1. If the array is empty, return `false`.
2. Initialize two pointers: one at the start (`start`) of the array and the other at the end (`end`).
3. While the `start` pointer is less than the `end` pointer:
   - Calculate the average of the values at the `start` and `end` pointers.
   - If the calculated average is equal to the target average, return `true`.
   - If the calculated average is less than the target average, move the `start` pointer up (increment `start`) to try and increase the average.
   - If the calculated average is greater than the target average, move the `end` pointer down (decrement `end`) to try and decrease the average.
4. If no pair is found that matches the target average, return `false`.

**Examples**:
- `averagePair([1,2,3], 2.5)` should return `true` (because the pair [2, 3] has an average of 2.5).
- `averagePair([1,3,3,5,6,7,10,12,19], 8)` should return `true` (because the pair [7, 10] has an average of 8.5, and [6, 10] has an average of 8).
- `averagePair([-1,0,3,4,5,6], 4.1)` should return `false`.
- `averagePair([], 4)` should return `false`.



## Divide and Conquer

The Divide and Conquer strategy is an algorithm design paradigm that solves a problem by recursively breaking it down into two or more sub-problems of the same or related type, until these become simple enough to be solved directly. Solutions to the sub-problems are then combined to give a solution to the original problem.

### How It Works

1. **Divide**: The problem is divided into smaller sub-problems.
2. **Conquer**: Each sub-problem is solved recursively.
3. **Combine**: The solutions to the sub-problems are combined to solve the original problem.

### Example: Binary Search

**Problem Statement**: Given a sorted array of integers, write a function called `search`, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1.

**Solution Steps**:

1. **Initialize Pointers**: Start with two pointers, `left` set to the start of the array and `right` set to the end of the array.
2. **While Loop**: While the `left` pointer is less than or equal to the `right` pointer, perform the following steps:
   - **Find the Middle**: Calculate the middle index by taking the floor of the average of `left` and `right` pointers.
   - **Check Middle Value**: Compare the value at the middle index with the target value.
     - If the middle value is equal to the target, return the index of the middle.
     - If the middle value is less than the target, move the `left` pointer to `middle + 1`.
     - If the middle value is greater than the target, move the `right` pointer to `middle - 1`.
3. **Target Not Found**: If the loop ends and the target has not been found, return -1.

**Solution Code**:

```javascript
function search(array, val) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        let currentElement = array[middle];

        if (currentElement === val) {
            return middle;
        } else if (currentElement < val) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return -1;
}
```

This function implements a binary search algorithm, which is a classic example of the Divide and Conquer strategy. It efficiently searches for a target value within a sorted array by repeatedly dividing the search interval in half. If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. Otherwise, narrow it to the upper half. Repeatedly check until the value is found or the interval is empty.

### Practice Problems

To deepen your understanding of the Divide and Conquer strategy, you might try applying it to solve other problems, such as:

### Question 1: Find First and Last Position of Element in Sorted Array

**Problem Statement**: Given an array of integers sorted in ascending order, find the starting and ending position of a given target value. If the target is not found in the array, return `[-1, -1]`.

**Solution Steps**:
1. **Binary Search for First Position**: Implement a modified binary search to find the first occurrence of the target. If the target is found, instead of returning immediately, continue searching to the left (lower indices) to see if there are earlier occurrences.
2. **Binary Search for Last Position**: Implement a modified binary search to find the last occurrence of the target. If the target is found, continue searching to the right (higher indices) to see if there are later occurrences.
3. **Return Positions**: Use the results from the two modified binary searches to return the start and end positions of the target value in the array.

**Examples**:
- `findFirstAndLastPosition([5,7,7,8,8,10], 8)` should return `[3, 4]`.
- `findFirstAndLastPosition([5,7,7,8,8,10], 6)` should return `[-1, -1]`.
- `findFirstAndLastPosition([], 6)` should return `[-1, -1]`.

### Question 2: Pow(x, n)

**Problem Statement**: Implement `pow(x, n)`, which calculates `x` raised to the power `n` (i.e., `x^n`).

**Solution Steps**:
1. **Handle Base Case**: If `n` is 0, return 1.
2. **Handle Negative Power**: If `n` is negative, convert the problem into calculating `pow(x, -n)` and take the reciprocal at the end.
3. **Divide and Conquer**: Use the property that `x^n = x^(n/2) * x^(n/2)` for even `n`, and for odd `n`, it's `x * x^(n/2) * x^(n/2)`. This reduces the problem size by half with each recursive call.
4. **Combine Results**: Calculate `pow(x, n/2)` once and use it to compute the final result to avoid redundant calculations.

**Examples**:
- `pow(2, 10)` should return `1024`.
- `pow(2, -2)` should return `0.25`.
- `pow(2, 0)` should return `1`.

### Question 3: Merge Sort

**Problem Statement**: Implement Merge Sort, a sorting algorithm that follows the Divide and Conquer paradigm.

**Solution Steps**:
1. **Divide**: If the array has more than one element, split the array into two halves.
2. **Conquer**: Recursively apply merge sort to both halves.
3. **Combine**: Merge the two sorted halves into a single sorted array.
4. **Base Case**: If the array has only one element, it is already sorted.

**Merge Function**:
- The merge function takes two sorted arrays and merges them into a single sorted array by repeatedly taking the smaller of the two leading elements.

### Question 4: Quick Sort

**Problem Statement**: Implement Quick Sort, a sorting algorithm that follows the Divide and Conquer paradigm.

**Solution Steps**:
1. **Choose Pivot**: Select a pivot element from the array. The choice of pivot can affect the algorithm's performance but does not affect correctness. A common approach is to pick the last element as the pivot.
2. **Partition**: Rearrange the array so that all elements less than the pivot come before it, and all elements greater come after it. After this step, the pivot is in its final position.
3. **Recursively Apply**: Apply quick sort to the sub-arrays formed by dividing the array around the pivot.
4. **Base Case**: If the array has one or no elements, it is already sorted.

**Concrete Examples** for Merge Sort and Quick Sort are not provided due to the nature of these algorithms being applied to sort arrays rather than producing a single deterministic output for a given input. However, the effectiveness and efficiency of both algorithms can be observed by applying them to any unsorted array of integers.

i.e.
```js
sort([1,7,5,4]) // should return
// [1,4,5,7]
// for both quickSort and mergeSort
```

After completing each question, make sure to commit your changes to your local git repository with the specified commit message. This practice helps in tracking your progress and maintaining a clean version history of your work.