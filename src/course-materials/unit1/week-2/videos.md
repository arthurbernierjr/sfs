Welcome to **Lesson 1** of this full-stack TodoList application series. In this lesson, we’re going to lay the foundation by answering two key questions: what are we building, and what technologies are we using to build it?

By the end of this project, you’ll have built a feature-rich TodoList application with powerful AI tools integrated. The app will allow users to add tasks, view tasks, and delete tasks at any time. Tasks will be displayed in a clean two-column layout—one side for completed tasks, and the other for tasks yet to be done.

Beyond the basics, we’re adding some intelligence to this app. Using OpenAI’s API, the app will be able to automatically generate task descriptions as you create new tasks. You’ll also be able to build a schedule for your day based on how long each task takes and how much time you have available. If you’re tackling a large task, the AI will break it down into smaller, manageable subtasks to make it easier to get started.

To bring this all together, we’re using a modern full-stack tech stack. On the frontend, we’re working with React to build the user interface, TypeScript to add type safety and reduce errors, React Query for efficient data fetching and caching, and React Router to navigate seamlessly between pages. To design beautiful and functional components, we’ll use Radix UI along with Phosphor Icons.

On the backend, we’re building a RESTful API using Express and storing our data in MongoDB with Mongoose. For AI-powered features, we’re integrating OpenAI’s API to enhance the app’s functionality.

The purpose of this lesson is to give you an overview of what we’re building and why we’re using these technologies. I’ll briefly demonstrate how each tool works so you can understand the role it plays in the overall project. But don’t worry—these examples are for demonstration only. You don’t need to write or test any code just yet.

Finally, this lesson will outline the roadmap for the project. Step by step, we’ll build this app together, and along the way, you’ll learn how to use these concepts to create other applications. By the end of this course, you’ll have the tools and confidence to build apps like a Notes App, a Blog Platform, or even a Bookmarks Manager.

Get ready to dive in. We’re building something amazing together. Let’s get started.  
---
Welcome to **Lesson 2** of this full-stack TodoList application series. In this lesson, we’re going to break down the technologies we’ll be using to build this app and explain why each one is important.

We’ll start with **React**, the JavaScript library we’re using to build the user interface. React allows us to break the UI into reusable components, making it easier to build, manage, and scale complex interfaces. Components are at the heart of React and allow us to create dynamic, interactive user experiences.

Next is **TypeScript**, which adds static typing to JavaScript. TypeScript helps us catch errors early during development, which makes the code more reliable and easier to understand. By defining types for our data and components, we reduce bugs and make our app easier to maintain as it grows.

For managing data and fetching from the backend, we’re using **React Query**. React Query simplifies how we handle server-side data. It automatically manages things like caching, loading states, and refetching, so we don’t have to do it manually. This makes working with data much smoother and more efficient.

To navigate between different pages in the app, we’re using **React Router**. React Router allows us to set up routes for different views in our app, like the Todo list page and the AI tools page. It handles navigation seamlessly and lets us build a multi-page experience that feels fast and responsive.

For styling and UI components, we’re using **Radix UI** and **Phosphor Icons**. Radix UI provides prebuilt components like checkboxes, buttons, and forms that are accessible, customizable, and save us development time. Phosphor Icons is a lightweight icon library that will add a polished look to the interface.

On the backend, we’re using **Express** to create a REST API. Express allows us to build the server that handles requests from the frontend and interacts with our database. It’s lightweight, flexible, and perfect for building backend services that power modern web applications.

For storing our data, we’re using **MongoDB** with Mongoose. MongoDB is a document-based database, which makes it easy to store and retrieve data like tasks and their status. Mongoose is a library that helps us define the structure of our data and interact with the database more efficiently.

To enhance the app with intelligent features, we’re integrating the **OpenAI API**. This will allow us to generate task descriptions, schedules, and subtasks automatically. By sending prompts to OpenAI, we’ll add AI-powered functionality that makes this app far more powerful than a traditional Todo list.

The goal of this lesson is to introduce you to each of these tools and explain why they’re part of our tech stack. By the end of the project, you’ll not only know how to use them, but you’ll understand how they work together to build scalable, intelligent applications.

In the next lesson, we’ll dive into **TypeScript fundamentals**, giving you a solid foundation before we start writing any code. Let’s get started!