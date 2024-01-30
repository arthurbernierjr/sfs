# Mongoose - Many-to-Many Relationship API: Code-Along Lesson

This exercise provides a practical application of many-to-many relationships in a JSON API context, emphasizing the importance of existing data associations. By building the mongoose-movies app, you'll gain hands-on experience in expanding an application's functionality and understanding the intricacies of data relationships in MongoDB using Mongoose.

Hint its all about pushing to an array and remove items from an array, still the same JS from Unit 1 but now its just `real` stuff.

We will be developing the following endpoints:
1. **POST `/movies`**: Accepst Movie Data and Creates A Movie
1. **GET `/movies`**: Returns a list of all movies.
1. **GET `/movies/:id`**: Gets An Individual Movie 
1. **GET `/performers`**: Returns a list of all performers.
1. **POST `/performers`**: Accepts performer data and creates a new performer.
1. **POST `/movies/:movieId/performers/:performerId`**: Associates a performer with a movie. (This will add performer to the movies cast array and the movie to the performers credits array). A frontend using this api endpoint might look something like this with the movie being pre-selected.

<img src="https://i.imgur.com/Yi6ZiI4.png"/>

## Introduction

Welcome to our code-along lesson on creating a `mongoose-movies` application. This session will focus on implementing a many-to-many relationship between `Movie` and `Performer` using Mongoose in a Node.js environment. We'll build this from scratch, ensuring you understand each component as we go.

## Step-by-Step Guide

### Step 1: Setting Up the Project

- **Workspace Preparation**: 
  - I'll guide you through setting up a new project folder, initializing a Node.js project, and linking it to a GitHub repository. 
  - We'll add a `.gitignore` file to exclude node_modules and environment files.

### Step 2: Environment Configuration

- **Setting up MongoDB**: 
  - We'll modify the MongoDB connection string in our application to point to a new database.
  - This step is crucial to keep our new project separate from other projects.

### Step 3: Initial Data Setup

- **Creating Movie Entries**: 
  - I'll show you how to start your application and add initial movie entries.
  - This step sets the stage for our many-to-many relationship.

### Step 4: Building the Movie Component

- **Creating the Movie Model**: 
  - Together, we'll write the schema for our `Movie` model, focusing on fields like `title`, `releaseYear`, `mpaaRating`, and `cast`.
  - I'll explain the importance of each field and how they relate to the Performer model.

- **Developing Movie Routes and Controllers**: 
  - We'll set up routes and controllers for movie-related operations.
  - I'll demonstrate how to handle requests and responses in these routes.

### Step 5: Implementing the Performer Component

- **Performer Model Creation**: 
  - We'll create the `Performer` model, defining properties such as `name`, `born`, and `credits`.
  - I'll explain how to set validations and why they're necessary.

- **Setting Up Performer Routes and Controllers**: 
  - We'll develop the routes and controllers for managing performer data.
  - I'll guide you through writing the logic to handle various requests.

### Step 6: Linking Movies and Performers

- **API Endpoints for Associations**: 
  - We'll create API endpoints to associate performers with movies.
  - I'll show you how to update both the `Movie` and `Performer` models to reflect these associations.

### Step 7: Testing

- **Writing Tests with Jest and Supertest**: 
  - We'll write tests for our API, ensuring all functionalities work as expected.
  - I'll guide you through testing each endpoint, both for successful operations and error handling.

### Step 8: Stretch Goals (Optional)

- **Enhanced Features**: 
  - If time allows, we'll explore additional features like preventing duplicate associations and removing associations.
  - I'll demonstrate the practical application of array manipulation in MongoDB.

## Conclusion

By the end of this lesson, you'll have a fully functional `mongoose-movies` application, showcasing a many-to-many relationship between movies and performers. This session will reinforce your understanding of data relationships in MongoDB using Mongoose, and you'll gain practical experience in expanding an application's functionality.

---

Remember, as we go through each step, feel free to ask questions and share your screen if you encounter any issues. This is a learning experience, and I'm here to help you understand each part of the process. Let's get started!


### Testing Your API

Ensure to write comprehensive tests for your API using Jest and Supertest. Test each endpoint

for functionality, including successful responses and handling of any errors. Your tests should cover:

- Retrieving all performers.
- Creating a new performer.
- Associating a performer with a movie, ensuring both entities exist.
- Handling cases where either the movie or performer does not exist.


## BONUS
If the MVC structure doesn't mesh with your brain that well there is another prevalent structure pattern that is taking the world by storm, and I will show you how to organize an app this way and you can choose which way you prefer.