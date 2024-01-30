<img src='https://media.git.generalassemb.ly/user/15881/files/c2cf4100-2e61-11eb-913c-d8b656fd9709'/>


#### Our First Route (Continued from Wed)


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

# Intro to REST , URL and Query Parameters

1. Read URL parameters
1. Common error: two responses
1. Common error: Place routes in correct order
1. Multiple Params
1. Request Object
1. URL Queries
1. Extra: Environment Variables

## Read URL parameters

Most of the time, we'll use segments in the path section of the URL to modify how our application works.

To do this, we'll use request parameters. To the user, it'll just look like an extension of the url path.

Let's think of Amazon again. With 300 million products and counting, hard coding a route for each product and keeping track of it all would be nightmarish.

We'll work with a simplified example. Imagine a store: `The Botany Express` that sells a few plants. Rather than having a dedicated route for each plant, the plants are stored as data (in our case an array of strings). We can access the data by passing in the index as a part of the request URL.

To set URL parameters in your `server.js` , just add a colon after the forward slash and then a variable name.

'Regular' URL:
`/plants`

URL parameter:
`/:indexOfPlantsArray`

The entire route:

```js
app.get('/:indexOfPlantsArray', (req, res) => {
    res.send(plants[req.params.indexOfPlantsArray]);
});
```

We can access the value of `:indexOfPlantsArray` with `req.params.indexOfPlantsArray`

Let's code together to see this in action.

In `classwork`:
- `mkdir express_plants`
- `cd express_plants`
- `touch server.js`
- `npm init`
- `npm i express`

```javascript
const express = require('express');
const app = express();
const port = 3000;

const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter",];

app.get('/:indexOfPlantsArray', (req, res) => {
    res.send(plants[req.params.indexOfPlantsArray]);
});

app.listen(port,() => {
    console.log('listening on port' , port);
});
```

Start up your server in terminal

Now visit http://localhost:3000/0 in your browser
> Monstera Deliciosa

Now visit http://localhost:3000/3 in your browser
> Witch's Butter

Note: http://localhost:3000
> error cannot GET (we didn't write a route for this)

Let's breakdown the contents of our localhost URL:

```
    http://localhost:3000/2
    \___/  \_______/ \__/ \_/
  protocol    host   port   path*           
```

Path can be a URL or a URL parameter: it will look the same in the browser. The difference will be in the server.

## A Common Error

You can only have one response for every request. If you try to send multiple responses you'll get an error. Let's try it!

```js
app.get('/oops/:indexOfPlantsArray', (req, res) => {
    res.send(plants[req.params.indexOfPlantsArray]);
    // error cannot send more than one response!
    res.send('this is the index: ' + req.params.indexOfPlantsArray);
});

```

We can, however, have multiple statements if we use our `if` statements or other program logic correctly:


```js
app.get('/fixed/:indexOfPlantsArray', (req, res) => {
    if (plants[req.params.index]) {
          res.send(plants[req.params.indexOfPlantsArray]);
    } else {
      res.send('cannot find anything at this index: ' + req.params.indexOfPlantsArray);
    }

});

```



## Place routes in correct order

- Express starts at the top of your `server.js` file and attempts to match the url being used by the browser with routes in the order in which they're defined
- URL params (e.g. :foo, :example, :indexOfPlantsArray) can be anything, a number, or even a string
  - Therefore if you have these routes in this order in your `server.js`:
    - `/:color`
    - `/plants`
  - And you want to get to `/plants` - you'll always hit the `/:color` route because the URL parameter will accept _any_ string, it doesn't know that `plants` is something specific/special
  - To fix this, we put the more specific routes first
    - `/plants`
    - `/:color`
  Now, from top to bottom, the more specific route `/plants` will be triggered when the URL has `plants` and if it doesn't match `plants`, it will go to the next route.


Let's code an example of this together:



```javascript
const express = require('express');
const app = express();
const port = 3000;

const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam',  "Witches' Butter",];

app.get('/:indexOfPlantsArray', (req, res) => { //:indexOfPlantsArray can be anything, even awesome
    res.send(plants[req.params.indexOfPlantsArray]);
});

app.get('/awesome', (req, res) => { //this will never be reached
  res.send(`
    <h1>Plants are awesome!</h1>
    <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
  `);
});

app.listen(port,() => {
    console.log('listening on port' , port);
});
```

If this happens, reorder them so that more specific routes come before less specific routes (those with params in them)

```javascript
const express = require('express');
const app = express();
const port = 3000;

const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam',  "Witches' Butter",];

app.get('/awesome', (req, res) => {
  res.send(`
    <h1>Plants are awesome!</h1>
    <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
  `);
});

app.get('/:indexOfPlantsArray', (req, res) => {
    res.send(plants[req.params.indexofPlantsArray]);
});

app.listen(port,() => {
    console.log('listening on port' , port);
});
```

# Multiple Params

We can store multiple params in the `req.params` object:

&#x1F535; **Write in (5 min)**

```
app.get('/hello/:firstname/:lastname', (req, res) => {
	console.log(req.params);
	res.send('hello ' + req.params.firstname + ' ' + req.params.lastname);
});
```

* In your browser, go to `localhost:3000/hello/bob/bobbybob`

&#x1F535; **Check the req.params console.log in Terminal**

![](https://i.imgur.com/xrq5rSu.png)

* Try entering different firstnames and lastnames in your URL and check the results

<br>
<hr>


# req.query

A query is a key-value pair separated with an `=`, and added to the URL with a `?`.

`?someKey=someValue`

```
localhost:3000/howdy/bob?title=duke
```

```javascript
app.get('/howdy/:firstName', function(req, res) {
  console.log(req.params);
  console.log(req.query);
  res.send('hello ' + req.query.title + ' ' + req.params.firstName);
});
```

You can add multiple queries

```
localhost:3000/howdy/bob?title=duke&year=2001
```

Spaces are represented with a `%20`.


## Beginning with the End in Mind

1. Describe REST and list the various routes
1. Create an Index route
1. Install JSONView to make viewing JSON easier
1. Create a Show route
1. Enhance the data in your data array

# Explanation

## Remember where we are going


!![arthur_node_jsx_diagram_photoshopped](https://media.git.generalassemb.ly/user/15881/files/c2cf4100-2e61-11eb-913c-d8b656fd9709)


# What is CRUD?

CRUD stands for **C**`reate`, **R**`ead`, **U**`pdate` and **D**`elete`. Why and how is this important you ask? Well CRUD is in everything you interact with online on a daily basis. Browsing Instagram and looking at posts? Thats **R**`ead`. Are you posting something? Well that's **C**`reate`. Didn't like that picture you posted? **D**`elete` to the rescue and finally, liking pictures of adorable animals? Hello **U**`date`!

So now that we have a reference point, how does that relate to code?

Below you'll find a table that relates normal `HTTP` actions to our CRUD operators.

| HTTP Action | CRUD Operator |
| ----------- | ------------- |
| GET         | Read          |
| POST        | Create        |
| PUT         | Update        |
| DELETE      | Delete        |

## Breaking It Down

#### Create

---

A Create or `POST` creates a new entry in a database that either you or someone else created. When we perform a `POST` request, we send some amount of information to our data source, usually data from a form; and we create a new entry in the data source.

#### Read

---

The `Read` or `GET` operation is something that you interact with every day. Whenever you pull information from an api, you are performing a `GET` request. `GET` requests only allow users to view or read from a data source. This can be something as simple as you checking your email in the morning. We perform a `GET` request to a server and if everything goes OK we get some type of information or data back.

#### Update

---

Update or `PUT` works very similar to a `POST` request. We are still sending along some sort of data to our data source, but instead of creating a new entry, we are actually updating an existing entry. In order to this, we need to target that entry specifically, most of the times using an `id`. This allows us to send some new information to to our existing piece of data and overwrite it's existing attributes.

#### Delete

---

Delete does just as the name implies, it `DELETE`'s something from our data source. We target the specific piece of information in the same way we did with our `PUT` request. This sends a request to the server to `DELETE` this item.

<br>
<hr>

# Demonstration
## Describe REST and list the various routes

- REST stands for Representational state transfer
- It's just a set of principles that describe how networked resources are accessed and manipulated
- We have [7 RESTful routes](https://gist.github.com/alexpchin/09939db6f81d654af06b) that allow us basic operations for reading and manipulating a collection of data:

| **URL** | **HTTP Verb** |  **Action**| **Used For**|
|------------|-------------|------------|------------|
| /photos/         | GET       | index  | Displaying a list of all photos
| /photos/new         | GET       | new | Display HTML form for creating a new photo
| /photos          | POST      | create | Create a new photo  
| /photos/:id      | GET       | show   | Display a specific photo    
| /photos/:id/edit | GET       | edit   | Return an HTML form for editing a photo    
| /photos/:id      | PATCH/PUT | update | Update a specific photo   
| /photos/:id      | DELETE    | destroy | Delete a specific photo  

# What is Index and Show

![Screen Shot 2020-08-10 at 1 01 54 PM](https://media.git.generalassemb.ly/user/15881/files/cf759680-db09-11ea-87c0-d92b1c0002fb)

# Imitation
## Create an Index route

## Setup our fruits app (if you haven't already)

1.  Create a directory in classwork called `fruits` (you will be using this folder over the next few days)
2.  `npm init`
3.  Create a `server.js` file.
4.  install express
5.  require express and set up a basic server that logs listening when you start the app
6.  start the app with `nodemon` and make sure it is working

Let's have a set of resources which is just a javascript array.  To create an index route, we'd do the following:

```javascript
const express = require('express');
const app = express();

const fruits = ['apple', 'banana', 'pear'];

app.get('/fruits/', (req, res) => {
    res.send(fruits);
});

app.listen(3000, () => {
    console.log('listening');
});
```

Now go to http://localhost:3000/fruits/


## Create a Show route

To create a show route, we'd do this:

```javascript
const express = require('express');
const app = express();

const fruits = ['apple', 'banana', 'pear'];

app.get('/fruits/', (req, res) => {
    res.send(fruits);
});

//add show route
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    res.send(fruits[req.params.indexOfFruitsArray]);
});

app.listen(3000,() => {
    console.log('listening');
});
```

Now go to http://localhost:3000/fruits/1

## Enhance the data in your data array

- Right now are data array `fruits` is just an array of strings
- We can store anything in the array, though.
- Let's enhance our data a bit:

```javascript
const express = require('express');
const app = express();

const fruits = [
    {
        name:'apple',
        color: 'red',
        readyToEat: true
    },
    {
        name:'pear',
        color: 'green',
        readyToEat: false
    },
    {
        name:'banana',
        color: 'yellow',
        readyToEat: true
    }
];

app.get('/fruits/', (req, res) => {
    res.send(fruits);
});

app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    res.send(fruits[req.params.indexOfFruitsArray]);
});

app.listen(3000, () => {
    console.log('listening');
});
```

# MVC

## Beginning with the End In Mind

1. Define MVC and explain why it matters
1. Move our data into a separate file
1. Move our presentation code into an JSX file



# Explanation
## Remember where we are going

!![arthur_node_jsx_diagram_photoshopped](https://media.git.generalassemb.ly/user/15881/files/c2cf4100-2e61-11eb-913c-d8b656fd9709)

## Define MVC and explain why it matters

- One of the core tenants of good programming is to compartmentalize your code
- Already our code is getting a little messy
    - we have data, app instantiation (listening), and routes all in one file
- One way to keep an app from getting messy is to separate it out into three sections
    - Models
        - data (javascript variables)
    - Views
        - how the data is displayed to the user (HTML)
    - Controllers
        - the glue that connects the models with the views
- This allows various developers to divide up a large code base
    - minimizes likelihood of developers overwriting each others code
    - allows developers to specialize
        - one can focus just on getting good with dealing with data
        - one can focus just on getting good with html
        - one can focus just on getting good with connecting the two
- Think of MVC as a restaurant
    - Models are the cook
        - prepares food/data
    - Views are the customer
        - consumes food/data
    - Controllers are the waiter
        - brings food from cook to customer
        - has no idea how food/data is prepared
        - has no idea how the food/data is consumed

# All in all

![mvc-meme](https://media.git.generalassemb.ly/user/15881/files/24990200-9460-11ea-8f91-a81163b612d5)

# Demonstration

```js
// Show them an example Arthur use Blavity API or TN or A GA Project
```

# Imitation
## Move our data into a separate file

1. Create a directory called models inside our app directory
1. Inside /models, create your data file (fruits.js)
1. Put your fruits variable in there

    ```javascript
    const fruits = [
        {
            name:'apple',
            color: 'red',
            readyToEat: true
        },
        {
            name:'pear',
            color: 'green',
            readyToEat: false
        },
        {
            name:'banana',
            color: 'yellow',
            readyToEat: true
        }
    ];    
    ```

1. We now require that file in the original server.js

    ```javascript
    const fruits = require('./models/fruits.js'); //NOTE: it must start with ./ if it's just a file, not an NPM package
    ```

1. But, we could have multiple variables in our /models/fruits.js file.
    - How does javascript know which variable in /models/fruits.js to assign to the fruits const in server.js (the result of the `require()` statment)?
    - We must tell javascript which variable we want to be the result of the `require()` statement in server.js

        ```javascript
        //at the bottom of /models/fruits.js
        module.exports = fruits;
        ```

## On Tuesday presentation to JSX View Engine
