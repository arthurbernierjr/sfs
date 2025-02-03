---
track: "HW"
title: "Week 1 - HW"
week: 1
day: 3
type: "homework"
topics: "How The Web Works"
---

# Week 1 Homework Assigned 9/23/2023 due October 2nd 2023

## Written HW
- What is HTML, and what does it stand for?
- What is CSS, and what does it stand for?
- What is the purpose of HTML, and what does it do?
- What is the purpose of CSS, and what does it do?
- How do you create a new HTML document, and what are some of the essential tags you need to include?
- How do you add styles to an HTML document using CSS, and what are some of the basic CSS properties you can use?
- What is the box model in CSS, and how does it work?
### Questions you need to research
- How do you create a responsive website using CSS media queries?
- What is the difference between inline, internal, and external CSS, and when should you use each one?
- What are some common accessibility issues to be aware of when designing and developing websites, and how can you address them using HTML and CSS?

### Instructions

1. Go to [CodePen](https://codepen.io/) and create a new pen.
1. Answer the above questions in the html tab 
1. Create an `ol`
1. Then create an `li` for each question
1. Inside each `li` place 2 `span` tags
1. In 1 `span` tag write the question
1. In the other `span` tag write the answer
1. Above the `ol` add a `h1` tag and put your name in the `h1`
1. Below the `h1` place an `h3` and inside here type the name of your class and the Week this homework was assigned.



## Practical Homework Assignment: Create a Clickable Button

### Goal

Create a clickable button that changes color and displays a message when clicked.

### Instructions

1. Go to [Codesandbox.io](https://codesandbox.io/) and create a new sandbox.
2. Add a new HTML file called `index.html` to your sandbox.
3. Inside the `body` element of `index.html`, create a `button` element with the text "Click Me!".
4. Add a CSS style to the `button` element that sets its background color to blue and text color to white.
5. Add a JavaScript event listener to the `button` element that changes the background color to green and displays the message "Button clicked!" when the button is clicked.

### Requirements

- The button should be centered horizontally on the page.
- The button should have a minimum width of 200 pixels and a height of 50 pixels.
- The button should have a cursor that changes to a pointer when hovered over.
- The button should change color and display the message "Button clicked!" when clicked.
- The HTML, CSS, and JS should be properly formatted and commented.

### Tips

- You can use the `text-align` property in CSS to center the button horizontally on the page.
- You can use the `cursor` property in CSS to change the cursor to a pointer when hovering over the button.
- You can use the `addEventListener()` method in JavaScript to add a click event listener to the button.
- You can use the `style` property in JavaScript to change the button's background color and display a message.

### Submission

When you're finished, copy the URL of your sandbox and submit it to your instructor.


## Theoretical Homework Assignment: FizzBuzz

### Goal

Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".

### Instructions

1. Go to [CodePen](https://codepen.io/) and create a new pen.
2. Create a new JavaScript file by clicking on the "JS" tab at the bottom of the screen.
3. Write a JavaScript program that prints the numbers from 1 to 100 following the rules above.
4. Test your program by running it using the "Console" feature in CodePen.
5. Submit your CodePen URL to your instructor.

### Requirements

- The program should print the numbers from 1 to 100.
- For multiples of three, the program should print "Fizz" instead of the number.
- For multiples of five, the program should print "Buzz" instead of the number.
- For numbers that are multiples of both three and five, the program should print "FizzBuzz".
- The program should be written in JavaScript and should be submitted as a CodePen URL.
- The program should be properly formatted and commented.

### Tips

- You can use a loop to iterate through the numbers from 1 to 100.
- You can use the modulus operator (`%`) to determine if a number is divisible by another number.
- You can use the `console.log()` method to print output to the console.

### Submission

When you're finished, copy the URL of your CodePen and submit it to your instructor.


## Hungry For More

#### Terminal Practice

Write the answer to each command in a codepen exactly like the written hw.

```
<ol>
  <li>
    <span>Part I: Set the Scene</span>
    <span>Commands for part 1 go here</span>
  </li>
</ol>
```


#### Episode X: A New Terminal

A long time ago in a unix environment far, far away, young Jedi padawans who
knew only of desktop software were seduced by the dark side of the Force to
enter… The Terminal.

Follow the instructions below using all the console commands introduced in
Fundamentals, class, or that you find on your own.

You can do each prompt/command one by one or

**Bonus Challenges (Optional)**

Try doing the following:

* Try applying one command to multiple files at once.
* Try applying one command to **all** files in a single directory (where necessery)
* Try applying one command to **all files that match a pattern**.
* Find and use command line shortcuts.
* Try using a mix of absolute and relative paths (there is a section on absolute pathing in today's Terminal lesson markdown).


#### Part I: Set the Scene


**Code and Copy your working code into the `terminal_homework.bash`** file
* Open the **Terminal app**

* Create a new directory on your `Desktop` called `galaxy_far_far_away` and enter it via terminal

* Create a directory called `death_star`, and make the following files inside of it:
  * **darth_vader.txt**
  * **princess_leia.txt**
  * **storm_trooper.txt**

* In `galaxy_far_far_away`, make a directory named `tatooine` and create the following files in it:
  * **luke.txt**
  * **ben_kenobi.txt**

* Inside of **tatooine** make a directory called `millenium_falcon`, and in it create:

  * **han_solo.txt**
  * **chewbaca.txt**

<br>

#### Part II: mv - rename

You can rename a file using the `mv` command.

For example, rename `file1.txt` to `file2.txt`

```bash
mv file1.txt file2.txt
```

* Rename **ben_kenobi.txt** to **obi_wan.txt**.

<br>

#### Part II: cp - copy

You can copy a file from one location to another using the `cp` command.

For example, copy **file1.txt** to its parent directory:

```bash
cp file1.txt ..
```

And, copy **file1.txt** to a sibling directory:

```bash
cp file1.txt ../some_directory
```

Finally, copy **file1.txt** to a child directory:

```bash
cp file1.txt some_directory
```

* Copy **storm_trooper.txt** from **death_star** to **tatooine**

<br>

#### Part IV: mv - move

You can use the `mv` command to move files from one location to another

For example, move a file from its current location to the parent directory:

```
mv file1.txt ..
```

And, move a file from its current location to a sibling directory:

```
mv file1.txt ../some_directory
```

Finally, move a file from its current location to a child directory:

```
mv file1.txt some_directory
```

You can also move directories into other directories using the same syntax



* Move **luke.txt** and **obi_wan.txt** to the `millenium_falcon`

* Move `millenium_falcon` out of `tatooine` and into `galaxy_far_far_away`

* Move `millenium_falcon` into `death_star`

* Move **princess_leia.txt** into the `millenium_falcon`

<br>


#### Part V: rm - remove

You can use `rm` to delete a file.

For example, delete a file:

```bash
rm file1.txt
```

* Delete **obi_wan.txt**

<br>

#### Part VI: all together

* In `galaxy_far_far_away`, make a directory called `yavin_4`

* Move the `millenium_falcon` out of the `death_star` and into `yavin_4`

* Make a directory in `yavin_4` called `x_wing`

* Move **princess_leia.txt** to `yavin_4` and **luke.txt** to `x_wing`


* Move the `millenium_falcon` and `x_wing` out of `yavin_4` and into `galaxy_far_far_away`

* In `death_star`, create directories for `tie_fighter_1`, `tie_fighter_2` and `tie_fighter_3`

* Move **darth_vader.txt** into `tie_fighter_1`

* Make a copy of **storm_trooper.txt** in both `tie_fighter_2` and `tie_fighter_3`

* Move all of the `tie_fighters` out of the `death_star` and into `galaxy_far_far_away`

<br>

#### Part VII: rm -r - remove directories

**Be careful with this command - cannot undo!**

Make sure you delete the right thing, or you could accidentally delete the contents of your computer (it has happened).

This command will typically not ask you if you really want to delete. It will just delete . . .

* Remove **tie_fighters** 2 and 3.

#### Part VIII: The Final Act

* Touch a file in `x_wing` called **the_force.txt**

* Destroy the `death_star` and anyone inside of it.

* Return `x_wing` and the `millenium_falcon` to `yavin_4`

* Celebrate!

<br>

<br>


