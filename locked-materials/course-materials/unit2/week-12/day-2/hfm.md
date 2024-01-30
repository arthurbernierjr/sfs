## Setup For Server Side Rendered Basic Restful Full CRUD APP

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
