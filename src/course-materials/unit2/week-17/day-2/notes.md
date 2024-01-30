---
track: "Unit 2"
title: "Completion of API with testing"
week: 17
day: 2
type: "lesson"
topics: "Completion of API with testing"
---

## Testing the API 

To set up testing for the API, start by configuring Jest in your `package.json`:

```json
"scripts": {
  "start": "node server.js",
  "test": "jest",
  "dev": "nodemon",
  "load": "artillery run artillery.yml"
},
"jest": {
  "testEnvironment": "node"
}
```



Create a new file `tests/user.test.js`:

```js
const request = require('supertest')
const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')
const app  = require('../app')
const server = app.listen(8080, () => console.log('Testing on PORT 8080'))
const User = require('../models/user')
let mongoServer

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create()
  await mongoose.connect(mongoServer.getUri(), { useNewUrlParser: true, useUnifiedTopology: true })
})

afterAll(async () => {
  await mongoose.connection.close()
  mongoServer.stop()
  server.close()
})


describe('Test the users endpoints', () => {
  test('It should create a new user', async () => {
    const response = await request(app)
      .post('/users')
      .send({ name: 'John Doe', email: 'john.doe@example.com', password: 'password123' })
    
    expect(response.statusCode).toBe(200)
    expect(response.body.user.name).toEqual('John Doe')
    expect(response.body.user.email).toEqual('john.doe@example.com')
    expect(response.body).toHaveProperty('token')
  })

  test('It should login a user', async () => {
    const user = new User({ name: 'John Doe', email: 'john.doe@example.com', password: 'password123' })
    await user.save()

    const response = await request(app)
      .post('/users/login')
      .send({ email: 'john.doe@example.com', password: 'password123' })
    
    expect(response.statusCode).toBe(200)
    expect(response.body.user.name).toEqual('John Doe')
    expect(response.body.user.email).toEqual('john.doe@example.com')
    expect(response.body).toHaveProperty('token')
  })

  test('It should update a user', async () => {
    const user = new User({ name: 'John Doe', email: 'john.doe@example.com', password: 'password123' })
    await user.save()
    const token = await user.generateAuthToken()

    const response = await request(app)
      .put(`/users/${user._id}`)
      .set('Authorization', `Bearer ${token}`)
      .send({ name: 'Jane Doe', email: 'jane.doe@example.com' })
    
    expect(response.statusCode).toBe(200)
    expect(response.body.name).toEqual('Jane Doe')
    expect(response.body.email).toEqual('jane.doe@example.com')
  })

  test('It should delete a user', async () => {
    const user = new User({ name: 'John Doe', email: 'john.doe@example.com', password: 'password123' })
    await user.save()
    const token = await user.generateAuthToken()

    const response = await request(app)
      .delete(`/users/${user._id}`)
      .set('Authorization', `Bearer ${token}`)
    
    expect(response.statusCode).toBe(200)
    expect(response.body.message).toEqual('User deleted')
  })
})
```

## Performance Analysis

Morgan is a middleware for logging HTTP requests, and Artillery is a modern, powerful, easy-to-use load-testing framework. Both are useful for understanding the behavior and performance of your API.

add to your `app.js`:

```js
const morgan = require('morgan')

// ... existing code ...

app.use(morgan('combined'))
```


Create a `artillery.yml` file in your root directory and populate it with the following:

```yml
config:
  target: 'http://localhost:3000'
  phases:
    - duration: 60
      arrivalRate: 20
scenarios:
  - flow:
      - post:
          url: "/users"
          json:
            name: "Test"
            email: "test@example.com"
            password: "Password123"
```

Then, run the test:

```js
  "scripts": {
    "test": "jest",
    "start": "node server.js",
    "load": "artillery run artillery.yml",
    "dev": "nodemon"
  }
```

```bash
npm run load
```

That's all! With this setup, you can easily build APIs using Express and Mongoose following the MVC architecture, have a secure way to store passwords, authenticate users, log HTTP requests, and test the performance of your API under load. You also have a testing setup with a MongoDB in-memory server for faster feedback.

Alright, let's start with the file overview in a markdown table:

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

Now, let's follow up with the code for each of these files:

## `server.js`

```js
require('dotenv').config()
const app = require('./app')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => console.log('Mongo is showing love'))

app.listen(PORT, () => {
    console.log(`We in the building ${PORT}`)
})


```

## `app.js`

```js
const express = require('express')
const morgan = require('morgan')
const userRoutes = require('./routes/userRoutes')
const app = express()

app.use(express.json())
app.use(morgan('combined'))
app.use('/users', userRoutes)

module.exports = app
```

## `models/user.js`

```js
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
})

userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 8)
  }
  next()
})

userSchema.methods.generateAuthToken = async function() {
  const token = jwt.sign({ _id: this._id }, 'secret')
  return token
}

const User = mongoose.model('User', userSchema)

module.exports = User
```

## `controllers/userController.js`

```js
const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '')
    const data = jwt.verify(token, 'secret')
    const user = await User.findOne({ _id: data._id })
    if (!user) {
      throw new Error()
    }
    req.user = user
    next()
  } catch (error) {
    res.status(401).send('Not authorized')
  }
}

exports.createUser = async (req, res) => {
  try{
    const user = new User(req.body)
    await user.save()
    const token = await user.generateAuthToken()
    res.json({ user, token })
  } catch(error){
    res.status(400).json({message: error.message})
  }
}

exports.loginUser = async (req, res) => {
  try{
    const user = await User.findOne({ email: req.body.email })
    if (!user || !await bcrypt.compare(req.body.password, user.password)) {
      res.status(400).send('Invalid login credentials')
    } else {
      const token = await user.generateAuthToken()
      res.json({ user, token })
    }
  } catch(error){
    res.status(400).json({message: error.message})
  }
}

exports.updateUser = async (req, res) => {
  try{
    const updates = Object.keys(req.body)
    const user = await User.findOne({ _id: req.params.id })
    updates.forEach(update => user[update] = req.body[update])
    await user.save()
    res.json(user)
  }catch(error){
    res.status(400).json({message: error.message})
  }
  
}

exports.deleteUser = async (req, res) => {
  try{
    await req.user.deleteOne()
    res.json({ message: 'User deleted' })
  }catch(error){
    res.status(400).json({message: error.message})
  }
}
```

## `routes/userRoutes.js`

```js
const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.post('/', userController.createUser)
router.post('/login', userController.loginUser)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.auth, userController.deleteUser)

module.exports = router
```

## `package.json`

Your `package.json` should list all the project dependencies and metadata. It would look something like this after installing all the necessary dependencies mentioned in the lesson:

```json
{
  "name": "express-api-ex",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "test": "jest",
    "start": "node server.js",
    "load": "artillery run artillery.yml",
    "dev": "nodemon"
  },
  "jest": {
    "testEnvironment": "node"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
   
    "bcrypt": "^5.1.0",
    "dotenv": "^16.1.3",
    "express": "^4.18.2",
    "jsonwebtoken": "^9.0.0",
    "mongoose": "^7.2.2",
    "morgan": "^1.10.0"
  },
  "devDependencies": {
    "artillery": "^1.7.9",
    "jest": "^29.5.0",
    "mongodb-memory-server": "^8.12.2",
    "supertest": "^6.3.3"
  }
}

```

## `tests/user.test.js`

```js
const request = require('supertest')
const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')
const app  = require('../app')
const server = app.listen(8080, () => console.log('Testing on PORT 8080'))
const User = require('../models/user')
let mongoServer

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create()
  await mongoose.connect(mongoServer.getUri(), { useNewUrlParser: true, useUnifiedTopology: true })
})

afterAll(async () => {
  await mongoose.connection.close()
  mongoServer.stop()
  server.close()
})

afterAll((done) => done())

describe('Test the users endpoints', () => {
  test('It should create a new user', async () => {
    const response = await request(app)
      .post('/users')
      .send({ name: 'John Doe', email: 'john.doe@example.com', password: 'password123' })
    
    expect(response.statusCode).toBe(200)
    expect(response.body.user.name).toEqual('John Doe')
    expect(response.body.user.email).toEqual('john.doe@example.com')
    expect(response.body).toHaveProperty('token')
  })

  test('It should login a user', async () => {
    const user = new User({ name: 'John Doe', email: 'john.doe@example.com', password: 'password123' })
    await user.save()

    const response = await request(app)
      .post('/users/login')
      .send({ email: 'john.doe@example.com', password: 'password123' })
    
    expect(response.statusCode).toBe(200)
    expect(response.body.user.name).toEqual('John Doe')
    expect(response.body.user.email).toEqual('john.doe@example.com')
    expect(response.body).toHaveProperty('token')
  })

  test('It should update a user', async () => {
    const user = new User({ name: 'John Doe', email: 'john.doe@example.com', password: 'password123' })
    await user.save()
    const token = await user.generateAuthToken()

    const response = await request(app)
      .put(`/users/${user._id}`)
      .set('Authorization', `Bearer ${token}`)
      .send({ name: 'Jane Doe', email: 'jane.doe@example.com' })
    
    expect(response.statusCode).toBe(200)
    expect(response.body.name).toEqual('Jane Doe')
    expect(response.body.email).toEqual('jane.doe@example.com')
  })

  test('It should delete a user', async () => {
    const user = new User({ name: 'John Doe', email: 'john.doe@example.com', password: 'password123' })
    await user.save()
    const token = await user.generateAuthToken()

    const response = await request(app)
      .delete(`/users/${user._id}`)
      .set('Authorization', `Bearer ${token}`)
    
    expect(response.statusCode).toBe(200)
    expect(response.body.message).toEqual('User deleted')
  })
})
```

## `artillery.yml`

```yaml
config:
  target: 'http://localhost:3000'
  phases:
    - duration: 60
      arrivalRate: 20
scenarios:
  - flow:
      - post:
          url: "/users"
          json:
            name: "Test"
            email: "test@example.com"
            password: "Password123"
```

## Conclusion: API Testing and Best Practices

In conclusion, it is vital to remember that the core job of a server is to respond to HTTP requests. These requests are composed of a method and a path. The method, such as GET or POST, indicates the type of operation to be executed. The path, which follows the domain in the URL, provides the specific location of the data or resource.

HTTP defines five primary methods, each corresponding to one of the CRUD functionalities. GET retrieves data, POST adds data, PUT and PATCH modify existing data (with PUT replacing all data and PATCH modifying only certain fields), and DELETE removes data. Understanding these methods and their differences is essential for effective API operation and testing.

A crucial part of web development is crafting RESTful routes, which pair a method and a path to define an action. These routes offer a clear, standardized way to manage resources, making them easier to test and debug.

Testing is crucial for ensuring the robustness and reliability of your API. Functional testing, which includes both positive and negative tests, verifies that the API operates as expected under different conditions. These tests should evaluate the status code, payload, headers, and performance of the API, as well as the system's data state. Additionally, functional testing should include destructive testing to assess how the API handles failures and errors.

However, passing functional tests, while indicating a good level of maturity for an API, is not enough to ensure high quality and reliability. Testing should go beyond the functional to include aspects such as performance, security, and usability.

As you continue to develop and test your APIs, always keep these principles and best practices in mind. They will guide you towards creating robust, efficient, and reliable web services.


### RESTful HTTP Methods 

| Method | Crud Functionality | DB Action            |
| ------ | ------------------ | -------------------- |
| GET    | read               | retrieve data        |
| POST   | create             | add data             |
| PUT    | update             | modify existing data |
| PATCH  | update             | modify existing data |
| DELETE | delete             | delete existing data |

### RESTful Routes 

| Action | Method | Path           | Action                                                               |
| ------ | ------ | -------------- | -------------------------------------------------------------------- |
| index  | GET    | `/engineers`   | Read information about all engineers                                 |
| create | POST   | `/engineers`   | Create a new engineer                                                |
| show   | GET    | `/engineers/1` | Read information about the engineer whose ID is 1                    |
| update | PUT    | `/engineers/1` | Update the existing engineer whose ID is 1 with all new content      |
| update | PATCH  | `/engineers/1` | Update the existing engineer whose ID is 1 with partially new content|
| destroy| DELETE | `/engineers/1` | Delete the existing engineer whose ID is 1                           |

### Types of Bugs that API testing detects  

#### Functional Testing

| Testing Category | Action Category | Action Description |
| ---------------- | --------------- | ------------------ |
| Positive Test Category | | |
| Execute Api with valid required parameters | | |
| | Validate Status Code | All requests should return 2XX HTTP response depending on spec|
| | Validate Payload | Response should be valid JSON response and the response matches the data model |
| | Validate State of Data/System | GET Requests should not change any data, POST, DELETE, PUT, PATCH should modify system as expected |
| | Validate Headers | Verify that HTTP Headers have valid information, verify nothing is leaked in the headers that doesn't belong |
| | Performance Sanity Check | Verify that data is received in a timely manner | 
| Positive + optional parameters | | |
| Execute API call with valid required parameters AND valid optional parameters | | |
| | Validate Status Code | As in group 1|
| | Validate Payload | As in group 1 |
| | Validate State | As in group 1 |
| | Validate Headers | As in group 1 |
| | Performance Sanity | As in group 1 |
| Negative Testing - valid input | | |
| Execute API calls with valid input that attempts illegal operations | | |
| | Validate Status Code | Verify that an erroneous HTTP status code is sent (NOT 2XX) |
| | Validate payload | Verify that error response is received |
| | Validate Headers | As in group 1 |
| | Performance Sanity | Make sure errors are received in a timely and safe way |
| Negative testing – invalid input | | |
| Execute API calls with invalid input | | |
| | Validate Status Code | As in group 1 |
| | Validate State | As in group 1 |
| | Validate Headers | As in group 1 |
| | Performance Sanity | As in group 1 |
| Destructive Testing | | |
| Intentionally attempt to fail the API to check its robustness | | |
| | Validate Status Code | API should fail gracefully |
| | Validate State | API should fail gracefully |
| | Validate Headers | API should fail gracefully |
| | Performance Sanity | API should fail gracefully |



# Review of Node, SSR, & API's The Pieces

## Section 1: Understanding APIs, Express, and Mongoose

Express is a fast, unopinionated, minimalist web framework for Node.js that is used for building web applications and APIs. 

Key Points:
- Express allows quick and easy setup of a web server.
- Express is used for building web applications and APIs.

Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. 

Key Points:
- Mongoose manages relationships between data.
- Provides schema validation.
- Translates between objects in code and representation of those objects in MongoDB.

## Section 2: MVC Architecture

Model-View-Controller (MVC) is a software design pattern commonly used for developing applications that divides the related program logic into three interconnected elements: 

- Model: Represents the data and rules governing access to and updates of this data.
- View: Renders the contents of the model. It specifies exactly how the model data should be presented.
- Controller: Handles user input and calls model and view methods accordingly.

## Section 3: Latency & Throughput in APIs

Latency is the delay before a transfer of data begins following an instruction for its transfer, whereas Throughput is the amount of data moved successfully from one place to another in a given time period.

Key Points:
- Minimizing latency and maximizing throughput are crucial for ensuring a smooth and fast user experience in terms of APIs.

## Section 4: Understanding Authentication

Authentication is the process of verifying the identity of a user by obtaining some sort of credentials and using those credentials to verify the user's identity. The authorization process starts if the credentials are valid.

## Section 5: Serving Static Files with express.static

`express.static` is a built-in middleware function in Express used to serve static files like images, CSS, and JavaScript directly to the client.

## Section 6: Testing with Jest and Supertest

Jest is a JavaScript testing framework with a focus on simplicity, and Supertest is a high-level abstraction for testing HTTP, built on top of `superagent`. 

Key Points:
- They can be used together to write tests for your Express APIs.
- Tests can be Manual (user runs test via the UI) or Automated (test scripts are executed that call into the code and compare results to expected values).
- Tests vary in granularity: Unit tests (focuses on individual components, functions or methods), Integration tests (set of components that are collaborating to perform a task), and End-to-end tests (complete application running in an environment that mimics a real-world production environment).
- Tests have different purposes: Functional (Positive - does it work when it is supposed to, Negative - does it fail when it is supposed to), Regression, Smoke, Performance / Load, Usability, Security, Compatibility, Recovery, and User Acceptance Testing (UAT).

### RESTful HTTP Methods 

| Method | Crud Functionality | DB Action            |
| ------ | ------------------ | -------------------- |
| GET    | read               | retrieve data        |
| POST   | create             | add data             |
| PUT    | update             | modify existing data |
| PATCH  | update             | modify existing data |
| DELETE | delete             | delete existing data |

### RESTful Routes 

| Action | Method | Path           | Action                                                               |
| ------ | ------ | -------------- | -------------------------------------------------------------------- |
| index  | GET    | `/engineers`   | Read information about all engineers                                 |
| create | POST   | `/engineers`   | Create a new engineer                                                |
| show   | GET    | `/engineers/1` | Read information about the engineer whose ID is 1                    |
| update | PUT    | `/engineers/1` | Update the existing engineer whose ID is 1 with all new content      |
| update | PATCH  | `/engineers/1` | Update the existing engineer whose ID is 1 with partially new content|
| destroy| DELETE | `/engineers/1` | Delete the existing engineer whose ID is 1                           |

## Setup For Server Side Rendered (SSR) Basic Restful Full CRUD APP

- [ ] Make a directory for the project
- [ ] Create a `server.js`
- [ ] Run `npm init -y` to initialize a Node project in the directory
- [ ] `npm install express`
- [ ] `npm install jsx-view-engine method-override mongoose dotenv`
- [ ] Require Express in `server.js`: `const express = require('express')`
- [ ] Create an instance of an express app: `const app = express()`
- [ ] Make your app listen on a certain port: `app.listen(3000, () => console.log("Running on port 3000!"))`
- [ ] Require all modules and configure all middleware including the view engine `urlencoded, locals, methodOverride, jsx-view-engine, static`
- [ ] Set up `.env` and `.gitignore` in your `.env` add your `MONGO_URI` and in `.gitignore` ignore your node_modules and .env file
- [ ] Set up your models and connect your database
- [ ] Set up your controller & router functions/handlers
- [ ] Create a `public/` folder with a `css/` subdirectory within it
- [ ] Create a `styles.css` file within `/public/css` and add your styling
- [ ] Host your `public/` folder: `app.use('/assets', express.static('public'))`
- [ ] Include your CSS in the head of your `views/layout.hbs` file: `<link rel="stylesheet" href="/assets/css/styles.css" />`
- [ ] Build your views `Index, Show, New, Create, Edit`
- [ ] Add any additional needed static files to public folder
- [ ] Check for Syntax errors
- [ ] setup package.json for deployment


## Setup For API with Testing

- [ ] Create a directory for the project
- [ ] Create a `server.js` file
- [ ] Run `npm init -y` to initialize a Node project in the directory
- [ ] Install the necessary packages: `npm install express morgan jest supertest mongodb-memory-server artillery mongoose dotenv`
- [ ] Require Express in `server.js`: `const express = require('express')`
- [ ] Create an instance of an express app: `const app = express()`
- [ ] Make your app listen on a certain port: `app.listen(3000, () => console.log("Running on port 3000!"))`
- [ ] Require all middleware, including Morgan for logging: `const morgan = require('morgan')` and use it: `app.use(morgan('dev'))`
- [ ] Set up `.env` and `.gitignore` in your `.env` add your `MONGO_URI` and in `.gitignore` ignore your node_modules and .env file
- [ ] Set up your models and connect your database
- [ ] Set up your controllers and route handlers
- [ ] Install and configure Jest and Supertest for testing your API routes
- [ ] Write tests for your API routes using Jest and Supertest
- [ ] Install and configure mongodb-memory-server for running tests using a separate in-memory database
- [ ] Write and run tests against the in-memory database
- [ ] Install and configure Artillery for load testing your API
- [ ] Write and run Artillery tests to ensure your API can handle high loads
- [ ] Check for Syntax errors
- [ ] Update package.json scripts for running tests: `"test": "jest"`
- [ ] Update package.json scripts for running load tests: `"loadtest": "artillery run ./loadtest.yml"`
- [ ] Setup package.json for deployment


## Deployment

- [ ] Get a domain and add the nameservers for your cloud provider i.e Digital Ocean
- [ ] Create droplet/virtual machine and set up DNS
- [ ] SSH into VM and install `nodejs npm ranger neovim nginx` the install `npm i -g n pm2` and `snap install certbot --classic`
- [ ] Create an SSH Key for your vm and connect it to github
- [ ] Git clone your project to the vm
- [ ] install dependencies, set up .env and start project with pm2
- [ ] Set up nginx with proxypass to the port running your app
- [ ] Set up certbot for https
  

#### Functional Testing

| Testing Category | Action Category | Action Description |
| ---------------- | --------------- | ------------------ |
| Positive Test Category | | |
| Execute Api with valid required parameters | | |
| | Validate Status Code | All requests should return 2XX HTTP response depending on spec|
| | Validate Payload | Response should be valid JSON response and the response matches the data model |
| | Validate State of Data/System | GET Requests should not change any data, POST, DELETE, PUT, PATCH should modify system as expected |
| | Validate Headers | Verify that HTTP Headers have valid information, verify nothing is leaked in the headers that doesn't belong |
| | Performance Sanity Check | Verify that data is received in a timely manner | 
| Positive + optional parameters | | |
| Execute API call with valid required parameters AND valid optional parameters | | |
| | Validate Status Code | As in group 1|
| | Validate Payload | As in group 1 |
| | Validate State | As in group 1 |
| | Validate Headers | As in group 1 |
| | Performance Sanity | As in group 1 |
| Negative Testing - valid input | | |
| Execute API calls with valid input that attempts illegal operations | | |
| | Validate Status Code | Verify that an erroneous HTTP status code is sent (NOT 2XX) |
| | Validate payload | Verify that error response is received |
| | Validate Headers | As in group 1 |
| | Performance Sanity | Make sure errors are received in a timely and safe way |
| Negative testing – invalid input | | |
| Execute API calls with invalid input | | |
| | Validate Status Code | As in group 1 |
| | Validate State | As in group 1 |
| | Validate Headers | As in group 1 |
| | Performance Sanity | As in group 1 |
| Destructive Testing | | |
| Intentionally attempt to fail the API to check its robustness | | |
| | Validate Status Code | API should fail gracefully |
| | Validate State | API should fail gracefully |
| | Validate Headers | API should fail gracefully |
| | Performance Sanity | API should fail gracefully |




Remember to review these notes and understand each concept. Happy studying!