---
track: "HW"
title: "Secure Bookmarks MERN Project with JWT Authentication"
week: 22
day: 3
type: "homework"
topics: "Due Monday 2/26/2024"
---

## The Secure Bookmarks App

You will be enhancing the Bookmarks App by adding user authentication using JWT (JSON Web Tokens). This app allows users to add, view, update, and delete bookmarks. Each bookmark will contain a title and a URL. With the addition of JWT authentication, users will need to sign up and log in to manage their bookmarks, ensuring that each user's bookmarks are private and secure.

_Example:_

![](https://i.imgur.com/yq9Ygeu.png)

✨ Fun Fact: Adding authentication to your app not only makes it secure but also gives you a glimpse into building real-world full-stack applications.

## MVP Requirements

Your Secure Bookmarks app should include all the MVP features of the original app, with the addition of user authentication. Here's a breakdown of the requirements:

### Backend: Express API + JWT Authentication

- **User Model**: In addition to the Bookmark model, implement a User model with at least `username`, `email`, and `password` fields.
- **Authentication Routes**: Implement routes for user authentication:
  - **Signup**: Registers a new user with a hashed password.
  - **Login**: Authenticates a user and returns a JWT.
- **Bookmark Model Update**: Associate bookmarks with users. Ensure that each bookmark belongs to a user who created it.
- **Protected Routes**: Use JWT to protect routes related to bookmarks. Users should be authenticated to create, delete, or update bookmarks.

### Frontend: React User Stories

- **User Authentication**: 
  - As a user, I can sign up for a new account.
  - As a user, I can log in to my account.
- **Bookmark Management**:
  - As a logged-in user, I can see a list of my bookmarks when I visit the page.
  - As a logged-in user, I can click on a bookmark to visit the linked website.
  - As a logged-in user, I can create, delete, and update bookmarks.

:red_circle: **Commit Often**: Your workflow and the way you decide to tackle this app is up to you, but remember to commit your changes frequently!

## Guidance for Getting Started

If you're unsure where to begin, here are some steps to guide you through the project:

<details>
<summary><strong>Backend Setup with JWT Authentication</strong></summary>

- Initialize your Express app and install necessary packages (`express`, `mongoose`, `bcrypt`, `jsonwebtoken`, etc.).
- Connect to MongoDB using Mongoose.
- Define your `User` and `Bookmark` models. Ensure bookmarks reference the `User` model.
- Implement authentication routes for signup and login, using `bcrypt` for password hashing and `jsonwebtoken` for generating tokens.
- Create middleware to verify JWTs and protect your bookmark routes.
- Test your routes and authentication using tools like Postman or Insomnia.

</details>

<details>
<summary><strong>Frontend Development</strong></summary>

- Initialize your React app.
- Create components for displaying bookmarks, as well as forms for signup, login, and bookmark management.
- Implement state management for handling user authentication status and bookmark data.
- Use `fetch` or `axios` to communicate with your backend API for authentication and CRUD operations.
- Ensure the UI reflects the user's authentication status (e.g., show login/signup forms or bookmarks based on whether the user is logged in).

</details>

## Hungry for More?

- **Advanced Features**:
  - Implement password reset functionality.
  - Add social login options (Google, Facebook, etc.).
- **UI/UX Enhancements**:
  - Implement responsive design for mobile and desktop views.
  - Add loading spinners for API requests.
- **Security Improvements**:
  - Add input validation both on the client-side and server-side.
  - Implement rate limiting on your API to prevent abuse.

Remember, this project is not just about fulfilling requirements but also about demonstrating your ability to build a full-stack application with authentication from scratch. Good luck!