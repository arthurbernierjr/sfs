## Discussion Goals

- Clarify and demo the box model if there are questions
- Talk about selectors
- Discuss specificity


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

```
Specificity: The less than obvious
The * selector, or global selector, has a specifity of 0.

Combinators, like ~, >, space, and + have no value

ul li {} 0-0-2
ul > li {} 0-0-2
:not has no value, but parameter selector does
```