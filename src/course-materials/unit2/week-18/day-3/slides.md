# Review of Homework Assignment: Building a Todo API and Testing with Jest, Supertest, and Artillery

Your task for this assignment is to develop a Todo API using Express and Mongoose. You will then be required to write unit tests for your API using Jest and Supertest, and finally perform load testing using Artillery.

## Part 1: Building the Todo API

1. Initialize a new Node.js project and install the necessary dependencies: Express, Mongoose, Morgan.

2. Design your `Todo` schema using Mongoose. Each todo item should have the following fields:
    - `title`: String, required
    - `description`: String
    - `completed`: Boolean, default: false
    - `created_at`: Date, default: Date.now

3. Implement the following API endpoints:
    - `GET /todos`: Get all todo items.
    - `POST /todos`: Create a new todo item.
    - `GET /todos/:id`: Get a specific todo item.
    - `PUT /todos/:id`: Update a specific todo item.
    - `DELETE /todos/:id`: Delete a specific todo item.

4. Make sure to handle any potential errors and return appropriate HTTP status codes and messages.

## Part 2: Unit Testing with Jest, Supertest and Mongodb Memory Server

1. Install MongoDB Memory Server Jest and Supertest.

2. Write unit tests for each of your API endpoints. Your tests should cover both successful cases and edge cases such as invalid inputs or todo item not found.

3. Run your tests and make sure all of them pass.

## Part 3: Load Testing with Artillery

1. Install Artillery.

2. Define a basic scenario for Artillery to simulate multiple users interacting with your API:
    - Users should send a `POST /todos` request to create a new todo item.
    - Users should send a `GET /todos` request to fetch all todo items.

3. Run the load test and observe the results. If there are any performance issues, try to identify possible causes and make improvements to your API.

**Deliverables:** 

- A GitHub repository containing your project code.
- A `README.md` file in the root of your repository, explaining the design of your Todo API, instructions for how to run and test your API, and a brief discussion of your load testing results.

**Evaluation Criteria:**

- Correctness and completeness of your Todo API.
- Quality and thoroughness of your unit tests.
- Appropriateness and execution of your load tests.
- Clarity and thoroughness of your `README.md` file.

Happy coding!