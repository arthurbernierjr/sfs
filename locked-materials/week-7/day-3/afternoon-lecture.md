---
track: "Frontend Fundamentals"
title: "Intro to the DOM"
week: 7
day: 3
type: "lecture"
---


## Specificity Broken Down
![specifishity](https://media.git.generalassemb.ly/user/15881/files/cfd18e00-7e97-11ea-8f5e-a38930f30cf5)

## Specificity: How it works
- 0-0-0: Global selector
- 1-0-0: ID selector
- 0-1-0: Class selector (Also attribute selector & pseudoclass)
- 0-0-1: Element Selector

- Descendant Selector Combinator (' ')
- Child Selector Combinator ('>')
- Sibling Selector Combinator ('~')
- Adjacent Sibling Selector Combinator ('+')

---------

| Selector  | Example | Description |
| ----- | ------ |  ------ |
element element | div p | Selects all `<p>` elements inside `<div>` elements |
element > element | div > p | Selects all `<p>` elements where the parent is a `<div>` element |
element + element | div + p | Selects the first `<p>` element that are placed immediately after `<div>` elements|
element ~ element | p ~ ul | Selects every `<ul>` element that are preceded by a `<p>` element |


## EACH ONE TEACH ONE AGAIN :)
### Methods - each group presents
### What is it?
### Demonstrate yourself using document.querySelector or document.querySelectorAll to select an element or elements with it or use it inside of css to style the page
### share code in slack


GROUP 1
1. `:first-child`
1. `:last-child`
1. `:only-child`
1. `:invalid`

Group 2
1. `:hover`
1. `:checked`
1. `:not`

Group 3
1. `::before`
1. `::after`
1. `::first-line`

Group 4
1. `:nth-of-type`
1. `:first-of-type`
1. `:only-of-type`
