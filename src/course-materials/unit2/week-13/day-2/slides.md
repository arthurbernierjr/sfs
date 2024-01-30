---
track: "Unit 2"
title: "Intro to Basics of Server Side JS Programming"
week: 13
day: 2
type: "lecture"
---

# Intro to Basics of Server Side JS Programming


<br>
<br>
<br>


## Beginning with the End in Mind

1. List the Fundamental Capabilities of Web Frameworks
1. Create a Basic Express Web App
1. Define Basic Routes
1. Respond to HTTP Requests
1. Render Dynamic Views


<br>
<br>




#### Setup

This unit we will be building 2 applications together `The Fruits Server Side Rendered App` and `The Blog API`. Then you will build a `Pokemon SSR` & `Todo List API` in breakout rooms and Culminate with an `API Project ` that you will present. Fruits, Blog API, Pokemon and TodoList will all have to be turned in at the end of the Unit so make sure you follow along.

### In class we will learn how to make Server Side Rendered REST Apps and Restful API Services we will start with Server Side Rendered Apps

## Soooo What the heck are we learning the next 6 weeks Arthur?

<center>

![](https://media.git.generalassemb.ly/user/15881/files/c8fa3780-92ec-11ea-8b7c-8bf723456c19)

![](https://media.git.generalassemb.ly/user/15881/files/c2cf4100-2e61-11eb-913c-d8b656fd9709)

![mvc-meme](https://media.git.generalassemb.ly/user/15881/files/24990200-9460-11ea-8f91-a81163b612d5)

![rest](/images/rest.png)

</center>

1. **CRUD**: CRUD stands for Create, Read, Update, Delete. It's a way of remembering the four basic functions that you need for working with any data in a system. Think of CRUD like a to-do list. You can create a new task, read the tasks you already have, update a task you've already created, and delete a task you no longer need.

2. **REST**: Representational State Transfer, or REST, is an architectural style for creating web services. A RESTful API uses HTTP requests to GET, PUT, POST, and DELETE data. It's like a menu at a restaurant. Each endpoint (or "dish") represents a specific resource that can be accessed and manipulated using standard HTTP methods.

3. **MVC**: MVC stands for Model-View-Controller. It's an architectural pattern used in software development. The model represents the data, the view is the user interface, and the controller handles the logic and communication between the model and the view. MVC is like a chef in a kitchen. The chef separates the different aspects of preparing a meal (the model, the view, and the controller) and assigns specific tasks to each aspect.

4. **Server-side Rendering (SSR)**: Server-side rendering is when your webpage is built on the server each time someone makes a request for a page. This is how many traditional webpages work. It's like a chef preparing a dish in the kitchen before bringing it out to the customers.

5. **Client-side Rendering (CSR)**: Client-side rendering is when the webpage is created in the browser using JavaScript. The server sends a response with an HTML file that's practically empty and then JavaScript kicks in to load the content. It's like a customer at a habachi restaurant ordering a dish and then being able to see the food prepared in front of them.

6. **Consuming an API**: Consuming an API is like ordering food at a restaurant. You make a request to an API to retrieve or manipulate data. The API then sends back the appropriate response, just like a server bringing your dish to the table.

7. **Separation of Concerns**: Separation of concerns is about keeping different parts of your code separate so that they each do one thing. It's like a chef having different stations in the kitchen. Each station is responsible for a specific task.

8. **Component-Driven Development**: Component-driven development is a method in which the application is built from individual, reusable components. Each component has its own logic and controls its own rendering. It's like building with LEGOs. Each LEGO piece represents a component, and you can use different components to build different things.

9. **Client-Server Model**: The client-server model is a communication structure that separates tasks or workloads between providers (servers) and service requesters, called clients. It's similar to a game of chess where the client, like the player, makes requests and the server, like the opponent, receives requests and responds.

10. **IP Address**: An IP address is a unique string of numbers separated by periods that identifies each computer using the Internet Protocol to communicate over a network. It's like the street address for your computer on the vast internet neighborhood.

11. **Port**: A port on a computer is like a doorway. It provides access to specific services or applications running on the device. Each port corresponds to a specific function and directs different types of internet traffic to the appropriate service or application.

12. **DNS**: DNS stands for Domain Name System. It's like the phone book of the internet. Instead of remembering IP addresses, DNS servers give us human-friendly names like 'google.com'. 

Remember, these are quite simplified definitions. Each of these topics is much deeper when you dig into them, but this gives you a basic understanding.

- Create a folder called `fruits` and then change into it

```shell
$ mkdir fruits
$ cd fruits
```

- Create a file inside this folder called `server.js`

```shell
$ touch server.js
```

- Make three folders

```shell
$ mkdir models views controllers
```

- Then create a `package.json` and accept the defaults using this command:

```shell
$ npm init -y
```

- Open the project's folder in VS Code.

<br>
<br>

#### The Three Fundamental Capabilities of Web Application Frameworks


- Web Application Frameworks have three capabilities fundamental to writing a back-end web application:
	1. The ability to define routes
	2. The ability to process HTTP requests using middleware
	3. The ability to use a view engine to render dynamic templates

- Over the next few lessons, you will learn about how the Express framework implements these three fundamental capabilities.


<br>
<br>
<br>


#### Express Framework - Intro


- [Express](https://expressjs.com/) is the most popular web framework for Node.js.

- It is minimalistic and lightweight, especially when compared to massive frameworks like Django and Rails.

- Express uses Node's built-in HTTP module to listen for, and respond to, HTTP requests - Express simply adds those three web application capabilities on top of Node

<br>
<br>

#### Install the Express Module


- Let's use `npm` to install the Express module in this project:

	```shell
	$ npm i express
	```
	Note that `i` is a shortcut for `install`


<br>
<br>

#### Express - Hello World!

- Let's write the obligatory "Hello World!" application:

	```javascript
	// Load express
	const express = require('express');

	// Create our express app
	const app = express();

	// Define a "root" route directly on app
	// Tomorrow, we'll use best practice routing
	app.get('/', function (req, res) {
	  res.send('<h1>Hello World!</h1>');
	});

	// Tell the app to listen on port 3000
	// for HTTP requests from clients
	app.listen(3000, function () {
	  console.log('Listening on port 3000');
	});
	```

<br>
<br>

- Run the app:

	```shell
	$ npm start
	```

- Browsing to `localhost:3000` will hit our app's root route that we defined and return "Hello World!".



- Using DevTools, we will find that despite just sending back the text of `<h1>Hello World!</h1>`, the browser "built" a minimal HTML document to display it in.

- The `send` method is a general purpose way to respond to the request, however, soon we'll be using more specific methods.

<br>
<br>

#### Basic Structure of Express App

- Here is a helpful outline of what a typical Express app does - let's put this guide right in our `server.js`:

```javascript
// Require modules
const express = require('express');

// Create the Express app
const app = express();

// Configure the app (app.set)


// Mount middleware (app.use)


// Mount routes
app.get('/', (req, res) => {
  	res.send('<h1>Hello World!</h1>');
});

// Tell the app to listen on port 3000
app.listen(3000, function() {
 console.log('Listening on port 3000');
});
```

<br>
<br>

#### Our First Route


- Let's replace the content we just sent from our route with something else.

	```javascript
	// Mount routes
	app.get('/', (req, res) => {
	  res.send('<h1>Hello Express</h1>');
	});
	```

- Refreshing the page will reveal that it didn't work!  This is because we have to restart the server, or...


<br>
<br>

#### Nodemon

- `nodemon` is a popular development tool used for automatically restarting our Express app when we save changes.

-  lets go to `package.json` and update the `scripts` object

- lets add a new key to the object that says `"dev": "nodemon"`

- Now, thanks to the `main` key in `package.json`, we can start the server by simply typing `npm run dev`.

- Now lets stop the server currently running with `npm start` by typing `ctrl + c` and then run `npm run dev`

- Let's move on to routing...

<br>
<br>

#### Our First Route (Cont)


- Like most web frameworks, Express uses the `HTTP Method` and the `Path` of the HTTP request to match a route defined in the application.

- In our first route, we defined a route using the `get` method on the Express `app` object.

- The `get` method defines a route that listens for a `GET` request. There are other methods such as `post`, `put` and `delete`, that map to the other HTTP verbs.


- The first argument provided to `app.get`, `/`, defines the path for the route. In this case the root of the application, i.e., just the host name like `localhost:3000`.

- In Express, all strings used to define a path should start with a forward-slash character (`/`).

- In tomorrow's Express lesson, we'll learn a preferred way of defining routes using the Express `Router` object, but you need to be aware of defining routes this way as well.


<br>
<br>

#### The Route's Callback


- The second argument provided to `app.get()` is a callback function:

	```javascript
	app.get('/', (req, res) => {
	  res.send('<h1>Hello From Fruits App</h1>');
	});
	```

- Express will execute route's callback function only when a matching HTTP request (HTTP Method + Path) is received.


- The route's callback function:

	```javascript
	app.get('/', (req, res) => {
	  res.send('<h1>Hello From Fruits App</h1>');
	});
	```
	defines two parameters: `req` & `res`

- `req`: Represents Express's [request object](https://expressjs.com/en/4x/api.html#req), and

- `res`: Represents Express's [response object](https://expressjs.com/en/4x/api.html#res)

- Express provides those two objects as arguments when it invokes the callback.



- The `request` object has properties and methods used to access information regarding the current HTTP request, including any data being sent from the browser.

- The `response` object contains properties and methods used to end the request/response cycle - like we've done so far using the  `res.send` method.

<br>
<br>

#### Practice - Define Another Route (3 mins)


- Define another route that matches a `get` request to a path of `/home` that sends a text response of `<h1>Home Page</h1>`.

- Test it by browsing to `localhost:3000/home`.

<br>
<br>

#### Review Question - Routing


- **Is it okay to define more than one route on the same path? <br>For example:**

```javascript
app.get('/fruits', (req, res) => {
  res.send("Here's a list of fruit...");
});

app.post('/fruits', (req, res) => {
  res.send('Thanks for buying a fruit!');
});
```

<br>
<br>

#### Ways to Respond to a Request


- So far we have responded in our route handler (callback) code by using the `res.send` method.

- The [Express docs for the Response object](https://expressjs.com/en/4x/api.html#res) explains the other ways to respond to the HTTP request.

- Here are the methods we'll use the most:
  - `res.render()` - Render a view template and send the resulting HTML to the browser.
  - `res.redirect()` -	Tell the browser to issue another `GET` request.
  - `res.json()` - Send a JSON response (used when we build an API).

<br>
<br>


## Rendering A View

```js
const fs = require('fs') // this engine requires the fs module like we did Saturday
app.engine('liberty', (filePath, options, callback) => { // define the view engine called liberty
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    // this is an extremely simple view engine we'll be more complex later
    const rendered = content.toString()
      .replace('#title#', `<title>${options.title}</title>`)
      .replace('#message#', `<h1>${options.message}</h1>`).replace('#content#',`<div>${Array.isArray(options.content)? options.content.map(item => `<li>${item}</li>`) : options.content }</div>` )
    return callback(null, rendered)
  })
})
app.set('views', './views') // specify the views directory
app.set('view engine', 'liberty') // register the liberty view engine

```

### After the code above
- Make a file called `template.liberty` in the `views` folder
```
<head>
	#title#
</head>
<body>
	<header>#message#</header>
	#content#
</body>
```

### Then in the server.js

```js
app.get('/', (req, res) => {
  res.render('template', { title: 'I am DJ Khaled', message: 'We The Best!', content: 'All I Do is Win' })
})

app.get('/about-me', (req, res) => {
  res.render('template', { title: 'DJ KHALED', message: 'It Breaks My Heart!', content: 'They Ain\'t Believe in Us But God Did' })
})

app.get('/another-one', (req, res) => {
  res.render('template', { title: 'We The Best', message: 'Who The Best! We!!!', content: 'We Taking Over, Major Key Alert, Y\'all know who it is, All I do is win, God Did!!!' })
})

```

## View the following links in the browser
1. `http://localhost:3000/`
2. `http://localhost:3000/about-me`
3. `http://localhost:3000/another-one`


#### Essential Questions Back to The Professionalism

**❓ When we define routes in a web app, we are mapping HTTP requests to ________.**

**❓ What method do we call to render a view and on what object does that method exist?**
