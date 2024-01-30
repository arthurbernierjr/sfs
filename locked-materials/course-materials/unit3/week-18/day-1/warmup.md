# Lab: Palindrome Checker

## Objective

The goal of this lab is to create a React application that accepts a user-inputted string, reverses it, and checks if it's a palindrome.

## Instructions

1. Go to [CodeSandbox](https://codesandbox.io/) and sign in with your account. If you do not have an account, you can create one for free.

2. Click on the 'Create Sandbox' button at the bottom of the page.

3. In the modal that pops up, choose the 'React' option to create a new React project.

4. In the newly created sandbox, you'll see a file explorer on the left side. Within the `src` folder, create a new file called `PalindromeChecker.js`.

5. In `PalindromeChecker.js`, write a functional component that:

   - Has a piece of state, `text`, to store the user's input. Initialize this with useState.
   - Has a piece of state, `reversedText`, to store the reversed string.
   - Has a function, `handleChange`, to update `text` whenever the user types into an input field.
   - Has a function, `handleSubmit`, to:
     - Prevent the form from being submitted in the default way.
     - Reverse the string stored in `text` and update `reversedText` with the reversed string.
     - Determine whether the original string and the reversed string are identical. If they are, it should set a piece of state, `isPalindrome`, to true. If they're not, it should set `isPalindrome` to false.
   - Renders a form that:
     - Has an input field for the user to type a string. This input field should be controlled by `text`.
     - Has a button to submit the form.
   - Renders a paragraph below the form that:
     - If `reversedText` is not empty, displays the reversed string.
     - If `isPalindrome` is true, additionally displays, "This is a palindrome."
     - Otherwise, displays, "Here is your reversed string: ..."

6. Use the `PalindromeChecker` component in your App component, which is defined in `src/App.js`.

7. Test your application to ensure it functions as expected.

## Tips

- You can reverse a string in JavaScript by turning it into an array, reversing the array, and then turning it back into a string: `str.split('').reverse().join('')`.
- Two strings are identical if they're equal according to the `===` operator.

## Deliverables

- A public link to your completed project on CodeSandbox. To make your sandbox public, click on the 'Change Privacy' option in the sidebar and select 'Public'.