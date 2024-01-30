# Mongoose - Many-to-Many Relationship API Practice

## Introduction

In this lab on _Mongoose - Referencing Related Data_, we will explore the implementation of a many-to-many data relationship using referencing, focusing on a JSON API approach. This lesson will create a mongoose-movies app built by establishing a many-to-many relationship between `Movie` and `Performer`.

Implementing many-to-many relationships revolves around **associating existing data**. In this context, when a movie and performer are linked, both entities must pre-exist in the database. This differs from one-to-many relationships, where new child entities are often created alongside the association.

Given that many-to-many relationships hinge on the existence of both associated entities, our app needs independent creation capabilities for both Movies and Performers.

Previously, we added functionality to create _todos_ and _logs_ and _users_. Now, we will extend our knowledge with the mongoose-movies app to include the creation of a relationship between _movies_ and  _performers_, providing a practical exercise in repetition and expansion.

## Setup Instructions

1. **Prepare Your Workspace**:
   - Navigate to your `software-classwork` folder folder.
   - create `mongoose-movies` project 
   - Move into the new project folder and follow the process for setting up a node project, and linking that node project to github (don't forget the .gitignore)

2. **Configure Your Environment**:
   - Open the project in the vs code editor.
   - Modify your MongoDB connection string to point to a new database, ensuring isolation from your other projects.

3. **Initial Data Entry**:
   - Start your application and add a few movie entries to set the stage for this exercise.

## Building the API

### Structuring the Application

#### Remember this example from the app we built in class and use it to determine what files you need for Movies and Performers

| Filename           | Path             | Purpose                                                           |
|------------------  |----------------- |----------------------------------------------------------------- |
| `server.js`           | `./server.js`       | Entry point for the application.                                 |
| `app.js`           | `./app.js`       | Express Application Object.                                 |
| `user.js`          | `./models/user.js` | Defines the User model schema for MongoDB/Mongoose.                      |
| `userController.js` | `./controllers/userController.js` | Handles the logic related to user actions.                   |
| `userRoutes.js`     | `./routes/userRoutes.js` | Defines the endpoints for user-related operations.            |
| `package.json`      | `./package.json` | Lists the project dependencies and metadata.                      |
| `user.test.js`      | `./tests/user.test.js` | Contains the tests related to user operations.                 |
| `artillery.yml`     | `./artillery.yml` | Configuration file for Artillery load tests.                      |
| `.env`     | `./.env` | Enviorment variable files.                      |
| `.gitignore`     | `./.gitignore` | List paths to files and folders we want git not to track for privacy or configuration reasons.                      |

### First 
- Build a `Movie` Model, Controller and Router

The movie should be structured like this

```
title: String,
releaseYear: Number,
mpaaRating: String
cast: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Performer'}]
```

Add required where necessary

Create dedicated modules for the new _performers_ resource, including:

- **Model**: Define a `Performer` model with appropriate properties and validations.
- **Router**: Set up a router module to handle performer-related routes.
- **Controller**: Develop a controller module to manage the business logic for performer operations.

### Implementing Routes

Establish API routes for performer functionality:

1. **List Performers**: A GET route to retrieve existing performers.
2. **Create Performer**: A POST route to add a new performer to the database.
3. **Associate Performer with Movie**: Additional routes to create and manage the many-to-many relationships between movies and performers.

### Developing the Performer Model

The `Performer` model should include at least the following properties:

- `name`: A string that is required and unique.
- `born`: A date field.
- `credits`: An array of movies they have been included in
Remember to enable timestamps for record-keeping purposes.

### API Endpoints

Develop the following endpoints:

1. **GET `/performers`**: Returns a list of all performers.
2. **POST `/performers`**: Accepts performer data and creates a new performer.
3. **POST `/movies/:movieId/performers/:performerId`**: Associates a performer with a movie. (This will add performer to the movies cast array and the movie to the performers credits array). A frontend using this api endpoint might look something like this with the movie being pre-selected.

<img src="https://i.imgur.com/Yi6ZiI4.png"/>

### Testing Your API

Ensure to write comprehensive tests for your API using Jest and Supertest. Test each endpoint

for functionality, including successful responses and handling of any errors. Your tests should cover:

- Retrieving all performers.
- Creating a new performer with valid and invalid data.
- Associating a performer with a movie, ensuring both entities exist.
- Handling cases where either the movie or performer does not exist.

## Stretch Goals

As an additional challenge, consider implementing features to enhance the management of the many-to-many relationship:

- **Preventing Duplicates**: Implement logic to prevent the same performer from being added to a movie multiple times. Hint `addToSet` check docs on Mongoose.
- **Removing Associations**: Create an endpoint to remove an association between a movie and a performer.
- **Listing Movies for a Performer**: Develop a route to list all movies associated with a specific performer.

Hint its all about pushing to an array and remove items from an array, still the same JS from Unit 1 but now its just `real` stuff.

## Conclusion

This exercise provides a practical application of many-to-many relationships in a JSON API context, emphasizing the importance of existing data associations. By building upon the mongoose-movies app, you'll gain hands-on experience in expanding an application's functionality and understanding the intricacies of data relationships in MongoDB using Mongoose.