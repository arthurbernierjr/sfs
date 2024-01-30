// ARRAY METHODS WITH CALLBACKS ================

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

// Every =====
// console.log(nums.every(num => num >= 0));
// console.log(panagram.every(word => word.length < 8));

// Filter =====
// console.log(nums.filter(num => num < 4));
// console.log(panagram.filter(word => word.length % 2 == 0));

// Find =====
// console.log(nums.find(num => num % 5 == 0));
// console.log(panagram.find(word => word.length > 5));

// Find Index =====
// console.log(nums.findIndex(index => index % 3 == 0));
// console.log(panagram.findIndex(word => word.length < 2));

// For Each ======
// nums.forEach(num => console.log(num * 3));
// panagram.forEach(word => console.log(word + `!`));

// Map =====
// const newArray = nums.map(num => num * 100);
// console.log(newArray);
// const newArray = panagram.map(word => word.toUpperCase());
// console.log(newArray);

// Some =====
// console.log(nums.some(num => num % 7 == 0));
// console.log(panagram.some(word => word.includes(`a`)));
