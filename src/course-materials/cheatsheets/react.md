---
track: "Cheatsheets"
week: 1
day: 2
type: "homepage"
topics: "React"
title: "react cheatsheet"
category: "CLI"
---

# React Cheat Sheet

Welcome to your go-to guide for React development! This cheat sheet is designed to provide you with a quick reference to React concepts, making your coding journey smoother and more efficient. Let's dive in.

## Table of Contents

1. **React Elements**
2. **React Element Attributes**
3. **React Element Styles**
4. **React Fragments**
5. **React Components**
6. **React Props**
7. **React Children Props**
8. **React Conditionals**
9. **React Lists**
10. **React Context**
11. **React Hooks**
    - useState Hook
    - useEffect Hook
    - useRef Hook
    - useContext Hook
    - useCallback Hook
    - useMemo Hook
    - useReducer

### React Elements

React elements are the building blocks of your React applications. They are written using JSX, which allows you to write elements that look like HTML but are actually JavaScript objects under the hood. For example:

```jsx
<h1>My Header</h1>
<p>My paragraph</p>
<button>My button</button>
```

Remember, JSX is not HTML. For instance, self-closing tags must end with a slash (`<img src="my-image.png" />`), and attributes follow the camelCase convention (`className` instead of `class`).

### React Element Attributes

In JSX, you'll use camelCase for attribute names instead of the kebab-case used in HTML. The most notable example is `className`:

```jsx
<div className="container"></div>
```

### React Element Styles

Inline styles in JSX are passed as objects with camelCased properties, not strings:

```jsx
<h1 style={{ fontSize: 24, margin: '0 auto', textAlign: 'center' }}>My header</h1>
```

### React Fragments

Fragments let you group a list of children without adding extra nodes to the DOM:

```jsx
<>
  <h1>My header</h1>
  <p>My paragraph</p>
</>
```

### React Components

Components allow you to split the UI into independent, reusable pieces. They must start with a capital letter and return JSX:

```jsx
function App() {
  return <div>Hello world!</div>;
}
```

### React Props

Props are how components talk to each other. They are read-only and passed from parent to child:

```jsx
function User({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```

### React Children Props

Children props let you pass components as data between the opening and closing tags of a component:

```jsx
<User>
  <h1>Hello, John Doe!</h1>
</User>
```

### React Conditionals

Use conditionals to control what gets rendered:

```jsx
function App() {
  const isAuthUser = useAuth();
  return <>{isAuthUser ? <AuthApp /> : <UnAuthApp />}</>;
}
```

### React Lists

Render lists by mapping over an array of data:

```jsx
function SoccerPlayers() {
  const players = ["Messi", "Ronaldo", "Laspada"];
  return <div>{players.map(playerName => <SoccerPlayer key={playerName} name={playerName} />)}</div>;
}
```

### React Context

Avoid prop drilling by using Context to share data across the component tree:

```jsx
const NameContext = createContext('');
<NameContext.Provider value="John Doe">
  <Body />
</NameContext.Provider>
```

### React Hooks

Hooks let you use state and other React features without writing a class:

- **useState**: Manage state in functional components.
- **useEffect**: Perform side effects in function components.
- **useRef**: Access DOM nodes directly within functional components.
- **useContext**: Access the value from a context provider.
- **useCallback**: Memoize functions to prevent unnecessary re-renders.
- **useMemo**: Memoize values to prevent expensive recalculations.

### React Hooks Detailed Overview

#### useState Hook

`useState` is the first hook you'll likely encounter. It lets you add state to function components. When the state changes, the component re-renders, reflecting the new state.

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count is: {count}
    </button>
  );
}
```

#### useEffect Hook

`useEffect` is used for side effects in function components, such as data fetching, subscriptions, or manually changing the DOM. It runs after every render by default but can be configured to run only when certain values change.

```jsx
import { useEffect } from 'react';

function User({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://api.example.com/users/${userId}`)
      .then(response => response.json())
      .then(data => setUser(data));
  }, [userId]); // Only re-run the effect if userId changes

  return (
    <div>{user ? `User: ${user.name}` : 'Loading...'}</div>
  );
}
```

#### useRef Hook

`useRef` returns a mutable ref object whose `.current` property is initialized to the passed argument (`initialValue`). The object persists for the full lifetime of the component.

```jsx
import { useRef } from 'react';

function TextInputWithFocusButton() {
  const inputEl = useRef(null);

  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

#### useContext Hook

`useContext` lets you subscribe to React context without introducing nesting. It's a way to pass data deeply throughout your component tree without manually passing props at every level.

```jsx
import React, { useContext } from 'react';

const ThemeContext = React.createContext('light');

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button theme={theme}>I am styled by theme context!</button>;
}
```

#### useCallback Hook

`useCallback` returns a memoized version of the callback that only changes if one of the dependencies has changed. It's useful for passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.

```jsx
import { useCallback, useState } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);
  const memoizedCallback = useCallback(
    () => {
      console.log(count);
    },
    [count],
  );

  return <ChildComponent action={memoizedCallback} />;
}
```

#### useMemo Hook

`useMemo` will only recompute the memoized value when one of the dependencies has changed. This optimization helps to avoid expensive calculations on every render.

```jsx
import { useMemo, useState } from 'react';

function ExpensiveComponent({ count }) {
  const computedValue = useMemo(() => {
    return computeExpensiveValue(count);
  }, [count]);

  return <div>{computedValue}</div>;
}
```

#### useReducer Hook

`useReducer` is another hook that is particularly useful for managing complex state logic in React components. It's an alternative to `useState` that's more suited for cases where the next state depends on the previous one or when you have multiple values that need to be updated together. It also makes it easier to centralize state logic when a component handles complex state actions or when you're managing a state that could be considered global.

The `useReducer` hook accepts a reducer function and an initial state. The reducer function receives the current state and an action, and returns the next state. It's similar to how reducers work in Redux, if you're familiar with that library.

Here's a basic example:

```jsx
import React, { useReducer } from 'react';

// Define the initial state
const initialState = {count: 0};

// Reducer function that handles state updates based on actions
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  // useReducer returns the current state and a dispatch function
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
```

In this example, `useReducer` is used to manage the state of a counter. The `reducer` function handles two actions: `increment` and `decrement`. The `dispatch` function is used to send actions to the reducer, which updates the state based on the action type.

### Key Benefits of useReducer

- **Predictable state transitions**: Actions sent to the reducer make state changes predictable and traceable.
- **Centralized state logic**: Reducer functions can be kept outside of the component, making the state logic easier to manage and reuse.
- **Optimized for complex state**: When state logic becomes complex, `useReducer` keeps it more organized and manageable than `useState`.
- **Supports lazy initialization**: You can pass an `init` function as the third argument to `useReducer` for lazy state initialization. This is useful for computing the initial state based on props or for expensive calculations.

`useReducer` is especially powerful in combination with context, allowing you to manage and share state across multiple components in a more efficient and scalable way than `useState` alone. This pattern is often used in larger applications to mimic some of the capabilities of state management libraries like Redux, but with the simplicity and ease of use of React's built-in hooks.

By mastering these hooks, you'll be well-equipped to build dynamic and efficient React applications. Each hook serves a specific purpose, helping you manage state, effects, context, and more in a functional approach.

### Key Takeaways

- **JSX**: Looks like HTML but is actually JavaScript. Remember the differences in syntax, especially for attributes and styles.
- **Components**: Build reusable pieces of your UI with function components.
- **Props**: Pass data from parent to child components to make your components dynamic.
- **Hooks**: Use built-in hooks for state management, side effects, and more, making your components more versatile and clean.
- **useState**: Introduces state management in functional components.
- **useEffect**: Handles side effects in components.
- **useRef**: Accesses DOM elements directly and stores mutable values across renders.
- **useContext**: Consumes context values with ease, avoiding prop drilling.
- **useCallback**: Memoizes callbacks to optimize child component rendering.
- **useMemo**: Memoizes expensive calculations to improve performance.
- **useReducer**: Is an alternative to `useState` that's more suited for cases where the next state depends on the previous one or when you have multiple values that need to be updated together.

This cheat sheet is your companion in navigating the React landscape, helping you to write efficient and effective code. Happy coding!