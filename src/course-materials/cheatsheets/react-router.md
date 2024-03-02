---
track: "Cheatsheets"
week: 1
day: 3
type: "homepage"
topics: "React Router"
title: "react router cheatsheet"
category: "CLI"
---
# React Router v6 Cheat Sheet

React Router v6 introduces several enhancements and new features to improve client-side routing in React applications. This cheat sheet covers the essentials, including `BrowserRouter`, `Routes`, `Route`, `useParams`, `useNavigate`, `Link`, and more.

## Table of Contents

1. **BrowserRouter**
2. **Routes**
3. **Route**
4. **useParams**
5. **useNavigate**
6. **Link**
7. **And More**

## Client-Side Routing Basics

Client-side routing enables navigation within a single-page application (SPA) without the need for full page reloads. React Router v6 facilitates this with a more streamlined and intuitive API.

### `BrowserRouter`

`BrowserRouter` is a React Router component that uses the HTML5 history API to keep your UI in sync with the URL.

```jsx
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      {/* Your route configuration goes here */}
    </BrowserRouter>
  );
}
```

### `Routes` and `Route`

`Routes` replaces the `Switch` component from v5, determining which component to render based on the URL. `Route` specifies the mapping between the URL path and the component.

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
  );
}
```

### `Link`

`Link` is used to navigate between pages. It renders an anchor tag (`<a>`) that updates the URL without a page reload.

```jsx
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
```

### `useParams`

`useParams` is a hook that allows you to access the parameters of the current route. It's useful for fetching data based on URL parameters.

```jsx
import { useParams } from 'react-router-dom';

function ProductPage() {
  let { productId } = useParams();
  return <div>Now showing product {productId}</div>;
}
```

### `useNavigate`

`useNavigate` is a hook that lets you programmatically navigate. You can use it to redirect users after certain actions, such as form submissions.

```jsx
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  let navigate = useNavigate();
  
  function handleLogin() {
    // Perform login logic
    navigate('/dashboard');
  }

  return <button onClick={handleLogin}>Log in</button>;
}
```

## Advanced Features

### Nested Routes

Nested routes allow you to structure your application UI as nested components based on the URL path. This is useful for creating layouts with common elements like headers, footers, and sidebars.

```jsx
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path="about" element={<AboutPage />} />
  </Route>
</Routes>
```

### Dynamic Segments

Dynamic segments in the URL path can be captured and used as parameters within your components. This is useful for creating detail pages based on IDs or other unique identifiers.

```jsx
<Route path="users/:userId" element={<UserPage />} />
```

### Ranked Route Matching

React Router v6 automatically ranks routes based on specificity. This means you don't have to worry about the order of your routes as much as in previous versions.

### Active Links

`NavLink` is a special version of the `Link` component that can style itself as "active" when its path matches the current URL.

```jsx
import { NavLink } from 'react-router-dom';

<NavLink to="/about" style={({ isActive }) => ({
  color: isActive ? 'red' : 'blue'
})}>
  About
</NavLink>
```

### Relative Links

Relative links allow you to create links relative to the current URL path, making it easier to navigate nested routes.

```jsx
<Link to="edit">Edit</Link> // Navigates to /current/path/edit
```

## Key Takeaways

- **`BrowserRouter`** uses the HTML5 history API for SPA routing.
- **`Routes`** and **`Route`** define URL paths and their corresponding components.
- **`Link`** enables navigation without page reloads.
- **`useParams`** and **`useNavigate`** are hooks for accessing URL parameters and programmatically navigating.
- Nested routes, dynamic segments, and ranked route matching offer powerful tools for building complex applications.
- **`NavLink`** and relative links enhance navigation within your application.

React Router v6 simplifies routing in React applications, providing a more intuitive API and powerful features for building modern web applications.