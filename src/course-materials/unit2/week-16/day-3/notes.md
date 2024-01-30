# Study Notes Node JS

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