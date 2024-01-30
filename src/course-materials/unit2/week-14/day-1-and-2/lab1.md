<img src="https://i.imgur.com/vUOu9NW.jpg">

# Express Practice/Lab (yes i know its the same thing as the hw thats the point lol)
---

## Intro

The Intro to Express lesson, with all of that new information, can be mind-blowing for sure.

It's natural, in fact, **expected**, to feel "uncomfortable" and confused by Node.js & Express at this point.

As always, the journey toward competence requires practice - so let's get on with it!

##### This Lab is Not a Deliverable

## Exercise

The goal of the exercise is to put in a rep doing everything that you did during the Intro to Express lesson!

You should look at the week 13 HW and talk about it with your classmates and see if you can come up with how to start the hw together.

How do you start it?
What files do you need?
Are there things that you don't get?
How do you think MongoDB will fit into that?

***Then after you do that do this activity below (its easy but tricky), use res.send for everything, you don't need any views (unless your group wants to).***

Remember you can send as much html as you want in res.send and you can use template literals.

## Take one Down and Pass it Around

Build an express application that enables users to count down the number
of bottles of beer. Don't like beer? Pass around bottles of soda, kombucha, or milk etc.

## Instructions

- `mkdir pass-it-around`
- `cd pass-it-around`
- `npm init -y`
- build a basic express server


### Requirements

- On the home page (`get "/"`), users should see:
  - "99 Bottles of beer on the wall"
  - a link that says "take one down, pass it around"
  - this should link to `/98`, where the number represents the number of bottles left.
- When a number is given in the url (`get "/:number_of_bottles"`), users should see:
  - The number of bottles of beer on the wall (i.e. `98 Bottles of beer on the wall.`)
  - a link to "take one down, pass it around", where the href is number of bottles in the parameter minus 1.
- If there are 0 bottles left, do not show a link to "take one down"
  - Add a link to start over, which directs the user back to the home page.

#### Hints
 - You should use an `anchor` tag with an `href` to link to the next 'page'

#### Bonus

- Have some more fun

Update your page to be something like

```
99 little bugs in the code
99 little bugs
Take on down
Patch it around
127 bugs in the code
```

Make the bugs go down by one, but then have some sort of functionality where the bug count can `randomly` go up

You have a lot of freedom to make it work how you want!

