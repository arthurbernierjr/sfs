# Lab: Anagram Checker

## Objective

The goal of this lab is to create a React application that accepts two user-inputted strings and checks if they are anagrams of each other.

## Instructions

1. Go to [CodeSandbox](https://codesandbox.io/) and sign in with your account. If you do not have an account, you can create one for free.

2. Click on the 'Create Sandbox' button at the bottom of the page.

3. In the modal that pops up, choose the 'React' option to create a new React project.

4. In the newly created sandbox, you'll see a file explorer on the left side. Within the `src` folder, create a new file called `AnagramChecker.js`.

5. In `AnagramChecker.js`, write a functional component that:

   - Has two pieces of state, `text1` and `text2`, to store the user's inputs. Initialize these with useState.
   - Has a function, `handleChange1` and `handleChange2`, to update `text1` and `text2` whenever the user types into the corresponding input fields.
   - Has a function, `checkAnagram`, that:
     - Sorts the characters in `text1` and `text2`.
     - Compares the sorted strings to determine if they are identical.
     - If they are identical, it should set a piece of state, `isAnagram`, to true. If they're not, it should set `isAnagram` to false.
   - Renders two forms that each:
     - Has an input field for the user to type a string. These input fields should be controlled by `text1` and `text2` respectively.
     - Has a button to submit the form.
   - Renders a paragraph below the forms that:
     - If `isAnagram` is true, displays "These strings are anagrams."
     - Otherwise, displays "These strings are not anagrams."

6. Use the `AnagramChecker` component in your App component, which is defined in `src/App.js`.

7. Test your application to ensure it functions as expected.

## Tips

- You can sort the characters in a string in JavaScript by turning it into an array, sorting the array, and then turning it back into a string: `str.split('').sort().join('')`.
- You can also solve this with a frequency counter
- Two strings are identical if they're equal according to the `===` operator.

## Deliverables

- A public link to your completed project on CodeSandbox. To make your sandbox public, click on the 'Change Privacy' option in the sidebar and select 'Public'.