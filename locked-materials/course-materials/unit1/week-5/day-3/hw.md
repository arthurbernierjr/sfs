## Written HW
In your own words explain in no more than 1-2 paragraph each the functionality of:

1. Barbies Wardrobe
1. Tomagotchi
1. Connect Four

## Practical HW

1. Review the [project 1](/unit1/week-5/day-1-and-2/project) and [the guide to building a browser game](/unit1/week-5/day-1-and-2/guide)
1. Then You will make a repl or codesandbox describing:

	☐ Your choice of game.

	☐ A wireframe of your "main" game screen (you can write this on a piece of paper or use an online writing tool like excalidraw see below) and upload it to your codesandbox/repl or link it if its online.

	☐ Pseudocode for the overall game play(not the code, the psuedo-code). See example below.

### Confused about how to make a wireframe

**Creating a Wireframe Using Excalidraw**

1. **Access Excalidraw:** Navigate to Excalidraw's website at https://excalidraw.com/.

2. **Select drawing tools:** On the left side of the screen, you will find a toolbar with various drawing tools.

3. **Draw elements:** Click and drag on the canvas to draw elements using the selected tool.

4. **Add text:** To add text to your wireframe, click on the 'T' icon in the toolbar, and then click on the canvas where you want to add the text.

5. **Resize and reposition elements:** Select an element using the selection tool (the arrow icon in the toolbar) to move or resize it.

6. **Customize colors and styles:** In the top right corner, you will find options to change the color, background color, and stroke width of the selected element.

7. **Group elements:** Hold the Shift key and click on each element you want to group. Right-click and choose "Group" from the context menu.

8. **Layer elements:** Right-click on an element and select "Send to Back" or "Bring to Front" from the context menu to arrange the order of elements.

9. **Save your wireframe:** Click on the "Export" button in the top left corner to save your wireframe as a PNG, SVG, or Excalidraw file.

10. **Share your wireframe:** Click on the "Share" button in the top left corner to generate a unique link for sharing and collaborating on the wireframe in real-time.

### Issues with Psuedo Code here is some help

Lets start with something we know a loop

```js
let total = 0;
let count = 1;

while (count < 11) {
  total += count;
  count += 1;
}

console.log('total:', total);

```

To create pseudocode for the given problem, follow these steps:

1. Initialize the variables needed to keep track of the sum (total) and the current number (count).
2. Create a loop that continues until a specific condition is met (in this case, when count reaches 11).
3. Inside the loop, check if the current value of 'count' is equal to or greater than 11. If so, exit the loop.
4. If the condition in step 3 is not met, add the current 'count' to the 'total'.
5. Increment 'count' by 1 to move on to the next number.
6. Go back to the start of the loop and repeat steps 3-5 until the loop exit condition is met.
7. Once the loop is exited, output the 'total'.

Here's the really good pseudocode:

```js
Set 'total' to 0
Set 'count' to 1
[loop]
  If 'count' is 11 or more, continue at [end]
  Add 'count' to 'total'
  Add 1 to 'count'
Continue at [loop]
[end]
Output 'total'
```
And some bad psudeocode:

```
# here is some over detailed psuedo code (not good): 
1) Store the number 0 in memory location 0
2) Store the number 1 in memory location 1
3) Store the value of memory location 1 in location 2
4) Subtract the number 11 from the value in location 2
5) If the value in memory location 2 is the number 0, continue with instruction 9
6) Add the value of memory location 1 to location 0
7) Add the number 1 to the value of memory location 1
8) Continue with instruction 3
9) Output the value of memory location 0
```
```iced
# basically actual code (not too good but servicable):
total = 0
count = 1

while count <= 10
  total += count
  count += 1
output total
```


## Theoretical HW: Most Frequent Word in a Paragraph

In this coding challenge, you will use frequency counters to determine the most frequently used word in a given paragraph. Your task is to create a function called `mostFrequentWord(paragraph)` that takes a string as input and returns the most frequently used word, regardless of capitalization.

**Example:**

Input: "The quick brown fox jumped over the lazy dog. The fox was really quick."

Output: "the"

**Instructions:**

1. Go to repl.it (https://repl.it/) and create a new JavaScript repl.
2. Create a function called `mostFrequentWord(paragraph)` that takes a string as input and returns the most frequently used word.
3. To handle the capitalization, convert the input paragraph to lowercase using the `toLowerCase()` method.
4. Split the paragraph into an array of words and create a frequency counter object to keep track of the word occurrences.
5. Iterate through the words and update the frequency counter object accordingly.
6. Determine the word with the highest frequency and return it.

**Submission Guidelines:**

Once you have completed the challenge and tested your solution, click the "Share" button in the top right corner of repl.it.

Copy the link provided in the "Share" dialog box.

Submit your link as your code challenge solution.

**Important Notes:**

- Do not use any external libraries or packages in your solution.
- Your solution should handle edge cases and invalid inputs.
- Test your solution with various inputs to ensure its correctness.
- Do not forget to add comments to your code to explain your thought process and logic.

Good luck!

