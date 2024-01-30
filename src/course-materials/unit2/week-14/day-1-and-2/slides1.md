---
track: "Backend Fundamentals"
title: "Express Fundamentals with CRUD, MVC, REST, INDUCES and JSX"
week: 14
day: 2
type: "lecture"
---

![](https://i.imgur.com/vUOu9NW.jpg)

 <iframe
  src="https://player.cloudinary.com/embed/?public_id=arthur_index_new_create_show_gf4ydr&cloud_name=seventh-ave-inc&source[sourceTypes][0]=webm%2Fvp9&source[sourceTypes][1]=mp4%2Fh265&source[sourceTypes][2]=mp4&source[sourceTypes][3]=mp4%2Fh264"
  width="640"
  height="360" 
  style="height: auto; width: 100%; aspect-ratio: 640 / 360;"
  allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
  allowfullscreen
  frameborder="0"
></iframe>



# Understanding Express Fundamentals with CRUD, MVC, REST, INDUCES and JSX

Terminal Objectives:

1. Understand JSX and jsx-view-engine.
2. Set up an Express server.
3. Configure Mongoose with MongoDB.
4. Create a Mongoose model.
5. Build Express routes to handle creating and viewing resources.

Topics Covered:

1. JSX and jsx-view-engine.
2. Express setup.
3. Mongoose configuration.
4. Creating a Mongoose model.
5. Building Views

<center>

<div style="display: flex; justify-content: space-between;">

![arthur_node_jsx_diagram_photoshopped](https://media.git.generalassemb.ly/user/15881/files/c2cf4100-2e61-11eb-913c-d8b656fd9709)

![mvc-meme](https://media.git.generalassemb.ly/user/15881/files/24990200-9460-11ea-8f91-a81163b612d5)

</div>
</center>

## Exploring JSX and Component Driven Development

# Overview

## What is JSX?
JSX is a syntax extension that allows the consolidation of HTML, CSS and JavaScript in the same file, simplifying the process of creating user interfaces. It's widely used in libraries such as React, Lit-HTML, and KofuJS.

## Understanding jsx-view-engine

jsx-view-engine is an Express view engine designed to render React components on a server. Its primary purpose is to serve as a substitute for server-side view solutions like jade, ejs or handlebars. It produces static markup and doesn't support client-side view mounting.

### Application of JSX
JSX can be employed as a template language, enabling your server to dynamically alter your HTML, which is the focus of this lesson. It's also capable of advanced DOM manipulation, a topic to be covered in subsequent lessons.

# Conceptual Representation

![components](https://media.git.generalassemb.ly/user/15881/files/c8fa3780-92ec-11ea-8b7c-8bf723456c19)


### Breaking down tasks into self-sufficient units
We can visualize this concept by imagining a game scenario where there are multiple jobs such as fighting, fishing, and healing. We can form groups focused on each task separately, or create smaller self-sufficient groups with all roles represented. Each approach has its advantages.

# Instructional Guide

| **URL** | **HTTP Verb** |  **Action**| **Used For**| **Mongoose Method** | **View** |
|------------|-------------|------------|-------------------------------| ---------------------| ------------- |
| /fruits/         | GET       | index  | Displaying a list of all fruits | Fruit.find | Index.jsx |
| /fruits/new         | GET       | new | Display HTML form for creating a new fruit | none | New.jsx |
| /fruits/:id      | DELETE    | destroy | Delete a specific photo  | Fruit.findByIdAndRemove or Fruit.findByIdAndDelete | none |
| /fruits/:id      | PATCH/PUT | update | Update a specific fruit   | Fruit.findByIdAndUpdate or Fruit.findOneAndUpdate | none |
| /fruits          | POST      | create | Create a new fruit | Fruit.create | none |
| /fruits/:id/edit | GET       | edit   | Return an HTML form for editing a fruit | Fruit.findOne or Fruit.findById | Edit.jsx |
| /fruits/:id      | GET       | show   | Display a specific fruit | Fruit.findOne or Fruit.findById | Show.jsx |     

***Note: Only GET Requests render a View In RESTful Routing***


## Setting up the environment

Here are step-by-step instructions to set up the development environment:

1. Create a new directory "fruits".
2. Initialize a new Node.js project using `npm init -y`.
3. Create necessary directories and files for our MVC architecture.
4. Open the project in your code editor.

## Steps to start
1. Go to your terminal
1. Go to a safe folder to work in
1. `mkdir fruits`
1. `cd fruits`
1. `touch server.js .env`
1. `mkdir models views controllers`
1. `mkdir views/fruits`
1. `npm init -y`
1. `code .`

## Implementing server.js and configuring Mongoose

The server.js file will be the entry point for our application. We'll use it to set up Express, configure Mongoose to connect to our MongoDB database, and start our server.

Remember to configure `.env` and `.gitignore` files properly to secure your database connection string.

## Creating the Fruit model

The Fruit model is a Mongoose model which will be used to create fruit documents in our MongoDB database. This model is defined by a schema which specifies the fields that a fruit document can have.

## Creating the New Route & Page

Express routes handle the logic for each request to our server. For creating a new fruit, we'll have a GET route that displays a form to the user, and a POST route that handles the form submission.

## Building the Create Route

The Create route will handle the logic for creating a new fruit and saving it in our MongoDB database using the Fruit model.

## Implementing the Show Route & Page

The Show route and page will handle displaying the details of a single fruit.

## Constructing the Index Route & Page

The Index route and page will handle listing all fruits in our database.

# Summing Up

By the end of this lesson, you will have gained an understanding of how JSX and the jsx-view-engine work together with Express to create server-rendered views. You will have also learned how to set up a basic Express server, how to configure a MongoDB database with Mongoose, and how to create a Mongoose model. Additionally, you'll be able to create routes for creating and viewing resources. This knowledge will provide a solid foundation for you to explore more advanced topics in server-side JavaScript development.

# Lets Do It

## Create server.js code

```js
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const jsxEngine = require('jsx-view-engine')
const Fruit = require('./models/fruit')
const PORT = process.env.PORT || 3000

const app = express()

app.use(express.urlencoded({ extended: true }))// build a ssr website
// app.use(express.json()) //build an api
app.listen(PORT, () =>{
    console.log(`Ayo the Port at ${PORT} is lit`)
})
```

## Add Mongoose Code
```js
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const jsxEngine = require('jsx-view-engine')
const Fruit = require('./models/fruit')
const PORT = process.env.PORT || 3000

const app = express()

app.use(express.urlencoded({ extended: true }))// build a ssr website
// app.use(express.json()) //build an api
mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => {
    console.log('connected to mongodb')
})

app.listen(PORT, () =>{
    console.log(`Ayo the Port at ${PORT} is lit`)
})
```

## Use the Connection String in Your App

- In the terminal in vs code `touch .env .gitignore`
- then in `.gitignore` add the following code

```
node_modules
.env
```

### You can now paste the connection string in the app's `.env` file, assigning it to a `MONGO_URI` environment variable:

```
MONGO_URI=mongodb+srv://sei:<THISISTHEPASSWORD___REMOVE___THE___LessThan_and_GreaterThan>@sei-w0kys.azure.mongodb.net/<THISISTHEDATABASENAME___REMOVE___THE___LessThan_and_GreaterThan>?retryWrites=true
```



You're almost done, but you need to update the connection string as follows:

1. Replace `<password>` with the password of the database user you created earlier.
2. **IMPORTANT** The connection string by default connects to a namespace (database) named `test` (`...mongodb.net/test?retryWrites=true...`).  However, the `test` namespace **must** be updated to your preferred namespace (database) name.  For example, "movies" (`...mongodb.net/movies?retryWrites=true...`) or for us now 'fruits' (`...mongodb.net/fruits?retryWrites=true...`).

***Remove the Less Than and Greater Than Signs aka Angle Brackets***

`<` and `>` must be removed do not put your password or database name in them

You're good to go!

<br>
<br>
<br>


<center>
<div style="display: flex; justify-content: space-between;">

![arthur_node_jsx_diagram_photoshopped](https://media.git.generalassemb.ly/user/15881/files/c2cf4100-2e61-11eb-913c-d8b656fd9709)

</div>
</center>


## Create The Model

in the models folder make a file called fruit.js and add the following code

```js
const mongoose = require('mongoose')

const fruitSchema = new mongoose.Schema({
    name: { type: String, required: true },
    color: { type: String, required: true },
    readyToEat: Boolean
})

const Fruit = mongoose.model('Fruit', fruitSchema)

module.exports = Fruit
```


## Create the New Route & Page

1. Now, instead of `res.send('some text')`, we can call `res.render('fruits/New')`
    - express will know to look inside the /views/fruits directory
    - it will send the html in the New file as a response

in server.js add this in appropriate location:

```js
// NEW
// show the user a form to fill out to create a fruit
app.get('/fruits/new', (req, res) => {
    res.render('fruits/New')
})
```

in views/fruits/New.jsx add this:

```js
const React = require('react')

function New (props) {
    return(
        <div>
            <h1>New Fruit Page</h1>
            <a href='/fruits'>Go back to Index Page</a>
            <form action="/fruits" method="POST">
                Name: <input type="text" name="name" /><br/>
                Color: <input type="text" name="color" /><br/>
                Is Ready To Eat: <input type="checkbox" name="readyToEat" /><br/>
                <input type="submit" value="Create Fruit" />
            </form>
        </div>
    )
}

module.exports = New
```

## Test page
- Go to `localhost:3000/fruits/new`

## It won't work
- add the view engine code

```javascript
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())
```

## Test page
- Go to `localhost:3000/fruits/new`

## It works


## Create the Create Route
```js
// CREATE
// backend only functionality that is used to create a fruit

app.post('/fruits', async (req, res) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    try{
        const createdFruit = await Fruit.create(req.body)
        res.send(createdFruit)
    }catch(error){
        res.status(400).send({message: error.message})
    }
})

```

## Try to create a fruits from new page now

## It should work

## Viewing & Editing Data

FYI, you can use the Atlas app to view and edit data by clicking on the `BROWSE COLLECTIONS` button.

## Create the Show Route & Page

in server.js add this to the appropriate location
```js
// SHOW
// shows you 1 individual fruit
app.get('/fruits/:id', async (req, res) => {
    try {
        const foundFruit = await Fruit.findOne({_id: req.params.id})
        res.render('fruits/Show', {
            fruit: foundFruit
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})
```

in views/fruits/Show.jsx add this:

```js
const React = require('react')

function Show(props){
    return(
        <div>
            <h1>{props.fruit.name}</h1>
            <a href='/fruits'>Go back to Index Page</a>
            <p>
                The {props.fruit.name} is {props.fruit.color} and 
                {props.fruit.readyToEat? 'It is ready to eat': 'It is not ready to eat'}
            </p>
        </div>
    )
}

module.exports = Show
```

## Update Create Route to Use The Show Route

```js
// CREATE
// backend only functionality that is used to create a fruit

app.post('/fruits', async (req, res) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    try{
        const createdFruit = await Fruit.create(req.body)
        res.redirect(`/fruits/${createdFruit._id}`)
    }catch(error){
        res.status(400).send({message: error.message})
    }
})

```

## Create a fruit from the New Page again
## Now you should redirect to an HTML Page

## Create the Index Route & Page

in server.js add this in the appropriate location

```js
const React = require('react')

function Index (props) {
    return (
        <div>
            <h1>Fruits Index Page</h1>
            <a href="/fruits/new">Create A new Fruit Here</a>
            <ul>
                {
                    props.fruits.map((fruit) => {
                        return (
                            <li key={fruit._id}>
                                <a href={`/fruits/${fruit._id}`}>{fruit.name}</a> is {fruit.color}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

module.exports = Index
```

in views/fruits/Index.jsx add this:

```js
const React = require('react')

function Index (props) {
    return (
        <div>
            <h1>Fruits Index Page</h1>
            <a href="/fruits/new">Create A new Fruit Here</a>
            <ul>
                {
                    props.fruits.map((fruit) => {
                        return (
                            <li key={fruit._id}>
                                <a href={`/fruits/${fruit._id}`}>{fruit.name}</a> is {fruit.color}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

module.exports = Index
```

## Check out the Index Page
## You should see all fruits you made

# Full server.js once done

```js
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const jsxEngine = require('jsx-view-engine')
const Fruit = require('./models/fruit')
const PORT = process.env.PORT || 3000

const app = express()

app.use(express.urlencoded({ extended: true }))// build a ssr website
// app.use(express.json()) //build an api
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => {
    console.log('connected to mongodb')
})

// INDUCES

// INDEX
// list all fruits
app.get('/fruits', async (req, res) => {
    try {
        const foundFruits = await Fruit.find({})
        res.render('fruits/Index', {
            fruits: foundFruits
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

// NEW
// show the user a form to fill out to create a fruit
app.get('/fruits/new', (req, res) => {
    res.render('fruits/New')
})
// DELETE
// backend only functionality that is used to delete a fruit

// UPDATE
// backend only functionality that is used to update a fruit

// CREATE
// backend only functionality that is used to create a fruit

app.post('/fruits', async (req, res) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    try{
        const createdFruit = await Fruit.create(req.body)
        res.redirect(`/fruits/${createdFruit._id}`)
    }catch(error){
        res.status(400).send({message: error.message})
    }
})

// EDIT
// show you a form that lets you edit the fruit

// SHOW
// shows you 1 individual fruit
app.get('/fruits/:id', async (req, res) => {
    try {
        const foundFruit = await Fruit.findOne({_id: req.params.id})
        res.render('fruits/Show', {
            fruit: foundFruit
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

app.listen(PORT, () =>{
    console.log(`Ayo the Port at ${PORT} is lit`)
})
```

<center>

<div style="display: flex; justify-content: space-between;">

![arthur_node_jsx_diagram_photoshopped](https://media.git.generalassemb.ly/user/15881/files/c2cf4100-2e61-11eb-913c-d8b656fd9709)

![mvc-meme](https://media.git.generalassemb.ly/user/15881/files/24990200-9460-11ea-8f91-a81163b612d5)

</div>
</center>


## Connections, Schema, Models, Document and Collections

1. The Connection connects your Node.js Server to MongoDB
1. Schema ensures the structure of your data that you put into the database
1. Models is the class that implements the schema and gives us javascript methods we can use to interact with MongoDb Database, it automatically makes a Collection in the DB, comprised of Documents that pass the Schema.
1. Document is an Instance of the Model and is represented by one Object In a collection
1. Collection is a group of documents of the same Model

## Where Does It Fit in With MVC

| **URL** | **HTTP Verb** |  **Action**| **Used For**| **Mongoose Method** | **View** |
|------------|-------------|------------|-------------------------------| ---------------------| ------------- |
| /fruits/         | GET       | index  | Displaying a list of all fruits | Fruit.find | Index.jsx |
| /fruits/new         | GET       | new | Display HTML form for creating a new fruit | none | New.jsx |
| /fruits/:id      | DELETE    | destroy | Delete a specific photo  | Fruit.findByIdAndRemove or Fruit.findByIdAndDelete | none |
| /fruits/:id      | PATCH/PUT | update | Update a specific fruit   | Fruit.findByIdAndUpdate or Fruit.findOneAndUpdate | none |
| /fruits          | POST      | create | Create a new fruit | Fruit.create | none |
| /fruits/:id/edit | GET       | edit   | Return an HTML form for editing a fruit | Fruit.findOne or Fruit.findById | Edit.jsx |
| /fruits/:id      | GET       | show   | Display a specific fruit | Fruit.findOne or Fruit.findById | Show.jsx |     

***Note: Only GET Requests render a View In RESTful Routing***


## Understanding Structure


| **Connections** | **Schema** |  **Models**| **Document**| **Collection** | **Database** | **Cluster** |
|---------------------|-------------|------------|-------------------------------| ---------------------| ------------ | --------------- |
| In server.js, or connection file Connect to DB using Connection URL | In model file identify the structure of your data | Use the schema to create a new Model that can connect to DB with JavaScript methods like `.find`, `create` and `.findOneAndUpdate` | An instance of the Model that passes the schema, residing in a collection | The group of documents that were added to the database by a specific Model | A collection of all your collections, every app should have it's own Database | All your databases in your Atlas Account live in your cluster, you only need one cluster and all your databases go in the cluster |



### For people that know SQL
1. ***Collection ====> Table***
1. ***Document ====> Row***
1. ***Key on Schema =====> Column***



# If you are ready for Part 2

![](https://i.imgur.com/vUOu9NW.jpg)

 <iframe
  src="https://player.cloudinary.com/embed/?public_id=arthur_edit_update_delete_mqmn3k&cloud_name=seventh-ave-inc&source[sourceTypes][0]=webm%2Fvp9&source[sourceTypes][1]=mp4%2Fh265&source[sourceTypes][2]=mp4&source[sourceTypes][3]=mp4%2Fh264"
  width="640"
  height="360" 
  style="height: auto; width: 100%; aspect-ratio: 640 / 360;"
  allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
  allowfullscreen
  frameborder="0"
></iframe>



# Understanding Express Fundamentals 2 with CRUD, MVC, REST, INDUCES and JSX

Terminal Objectives:

1. Understand JSX and jsx-view-engine.
2. Set up an Express server.
3. Configure Mongoose with MongoDB.
4. Create a Mongoose model.
5. Build Express routes to handle creating and viewing resources.

Topics Covered:

1. JSX and jsx-view-engine.
2. Express setup.
3. Mongoose configuration.
4. Creating a Mongoose model.
5. Building Views

<center>

<div style="display: flex; justify-content: space-between;">

![arthur_node_jsx_diagram_photoshopped](https://media.git.generalassemb.ly/user/15881/files/c2cf4100-2e61-11eb-913c-d8b656fd9709)

![mvc-meme](https://media.git.generalassemb.ly/user/15881/files/24990200-9460-11ea-8f91-a81163b612d5)

</div>
</center>

# Instructional Guide

| **URL** | **HTTP Verb** |  **Action**| **Used For**| **Mongoose Method** | **View** |
|------------|-------------|------------|-------------------------------| ---------------------| ------------- |
| /fruits/         | GET       | index  | Displaying a list of all fruits | Fruit.find | Index.jsx |
| /fruits/new         | GET       | new | Display HTML form for creating a new fruit | none | New.jsx |
| /fruits/:id      | DELETE    | destroy | Delete a specific photo  | Fruit.findByIdAndRemove or Fruit.findByIdAndDelete | none |
| /fruits/:id      | PATCH/PUT | update | Update a specific fruit   | Fruit.findByIdAndUpdate or Fruit.findOneAndUpdate | none |
| /fruits          | POST      | create | Create a new fruit | Fruit.create | none |
| /fruits/:id/edit | GET       | edit   | Return an HTML form for editing a fruit | Fruit.findOne or Fruit.findById | Edit.jsx |
| /fruits/:id      | GET       | show   | Display a specific fruit | Fruit.findOne or Fruit.findById | Show.jsx |     

***Note: Only GET Requests render a View In RESTful Routing***


## Setting back up the environment

Here are step-by-step instructions to set up the development environment:

1. Get into "fruits" directory.
2. Open the project in your code editor.

## Steps to start
1. Go to your terminal find your safe project folder
1. `cd fruits`
1. `code .`

## Implementing server.js and configuring the method-override package

## Creating Delete Route

Delete route will have backend functionality that deletes fruits from the database

## Creating Update Route

Update route will have backend functionality that will update existing fruits with new data

## Adding method Override

Browser based forms by default only can make either get or post requests, since we want to make PUT & Delete requests there are 2 possible solutions

1. Solution 1 use dom manipulation to prevent the form default and manually make a put or delete request via ClientSide JS (we will do this later with React in another lesson)
2. Intercept a post request on the backend and override it to a DELETE or PUT request

We will use an npm package called method-override to do this today with middleware


## Creating Edit Route & Edit.jsx

We will create a JSX template that shows the Edit Form and a route that properly renders it.

## Updating Show.jsx to have a delete and edit button

We will add buttons to Show.jsx, one that you can click on and will delete the the fruit and another one that will allow you to link to the edit page for that fruit

# Lets Do It

## Full server.js to start

```js
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const jsxEngine = require('jsx-view-engine')
const Fruit = require('./models/fruit')
const PORT = process.env.PORT || 3000

const app = express()

app.use(express.urlencoded({ extended: true }))// build a ssr website
// app.use(express.json()) //build an api
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => {
    console.log('connected to mongodb')
})

// INDUCES

// INDEX
// list all fruits
app.get('/fruits', async (req, res) => {
    try {
        const foundFruits = await Fruit.find({})
        res.render('fruits/Index', {
            fruits: foundFruits
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

// NEW
// show the user a form to fill out to create a fruit
app.get('/fruits/new', (req, res) => {
    res.render('fruits/New')
})
// DELETE
// backend only functionality that is used to delete a fruit

// UPDATE
// backend only functionality that is used to update a fruit

// CREATE
// backend only functionality that is used to create a fruit

app.post('/fruits', async (req, res) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    try{
        const createdFruit = await Fruit.create(req.body)
        res.redirect(`/fruits/${createdFruit._id}`)
    }catch(error){
        res.status(400).send({message: error.message})
    }
})

// EDIT
// show you a form that lets you edit the fruit

// SHOW
// shows you 1 individual fruit
app.get('/fruits/:id', async (req, res) => {
    try {
        const foundFruit = await Fruit.findOne({_id: req.params.id})
        res.render('fruits/Show', {
            fruit: foundFruit
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

app.listen(PORT, () =>{
    console.log(`Ayo the Port at ${PORT} is lit`)
})
```

## Delete

```js
app.delete('/fruits/:id', async (req, res) => {
    try{
        await Fruit.findOneAndDelete({'_id': req.params.id})
            .then(() => {
                res.redirect('/fruits')
            })
    }catch(error){
        res.status(400).send({ message: error.message })
    }
})

```


## Update

```js
app.put('/fruits/:id', async (req, res) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    try {
        await Fruit.findOneAndUpdate({'_id': req.params.id}, req.body, { new: true })
            .then(()=>{
                res.redirect(`/fruits/${req.params.id}`)
            })
    } catch(error){
        res.status(400).send({ message: error.message })
    }
})
```

## Method Override

1. install `method-override`
1. add it to the server.js and use it under the `express.urlencoded` middleware

```js
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const jsxEngine = require('jsx-view-engine')
const methodOverride = require('method-override')
const Fruit = require('./models/fruit')
const PORT = process.env.PORT || 3000

const app = express()

app.use(express.urlencoded({ extended: true }))// build a ssr website
// app.use(express.json()) //build an api
app.use(methodOverride('_method'))
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

/******** ROUTES and stuff below ******/
```

The line `app.use(methodOverride('_method'))` makes it so that the method override will check every request that comes into our app, and see if it uses the `_method` query paramater, if it does it will override the method of that request to whatever the `_method` has as it's value.


## Edit

### First lets make the route
```js
app.get('/fruits/:id/edit', async (req, res) => {
    try {
        const foundFruit = await Fruit.findOne({_id: req.params.id})
        res.render('fruits/Edit', {
            fruit: foundFruit
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})
```

### Now the lets make the JSX file by using the command line to touch a views/fruits/Edit.jsx file in our views folder, then opening it in VS Code:

```js
const React = require('react')

function Edit (props) {
    const { name, _id, readyToEat, color } = props.fruit
    return(
        <div>
            <h1>{name} Edit Page</h1>
            <a href='/fruits'>Go back to Index Page</a>
            <form action={`/fruits/${_id}?_method=PUT`} method="POST">
                Name: <input type="text" name="name" defaultValue={name} /><br/>
                Color: <input type="text" name="color" defaultValue={color}/><br/>
                Is Ready To Eat: {readyToEat? <input type="checkbox" name="readyToEat" defaultChecked />: <input type='checkbox' name="readyToEat"/>}<br/>
                <input type="submit" value="Update Fruit" />
            </form>
        </div>
    )
}

module.exports = Edit
```

In this line `const { name, _id, readyToEat color } = props.fruit` we use object destructuring.

Object destructuring in JavaScript is a feature that allows you to extract multiple properties from an object in a single line. The line `const { name, _id, readyToEat, color } = props.fruit` is using object destructuring to extract the `name`, `_id`, `readyToEat`, and `color` properties from the `props.fruit` object.

Here's how it works:

- `props.fruit` is an object that contains various properties. In this case, we're interested in the `name`, `_id`, `readyToEat`, and `color` properties.
- By using object destructuring, you're saying: "I want to create four new variables called `name`, `_id`, `readyToEat`, and `color`, and I want their values to be taken from the corresponding properties in the `props.fruit` object."

This means that after this line of code is executed, you can use `name`, `_id`, `readyToEat`, and `color` as standalone variables in your code.

Here's an analogy to illustrate object destructuring. Imagine you have a box (the object) full of different fruits (the properties). Object destructuring is like taking the fruits you want out of the box and placing them on your kitchen counter so you can use them directly without having to reach into the box each time.

In terms of code, instead of accessing properties with `props.fruit.name`, `props.fruit._id`, `props.fruit.readyToEat`, and `props.fruit.color`, you can now use `name`, `_id`, `readyToEat`, and `color` directly. This makes your code cleaner and more readable.


## Update the Show.jsx to link to the Edit Route and Delete Route

```js
const React = require('react')

function Show(props){
    return(
        <div>
            <h1>{props.fruit.name}</h1>
            <a href='/fruits'>Go back to Index Page</a>
            <p>
                The {props.fruit.name} is {props.fruit.color} and 
                {props.fruit.readyToEat? 'It is ready to eat': 'It is not ready to eat'}
            </p>
              <form action={`/fruits/${props.fruit._id}?_method=DELETE`} method="POST">
                <input type="submit" value={`Delete this ${props.fruit.name}`}/>
            </form>
            <div>
            <a href={`/fruits/${props.fruit._id}/edit`}><button>{`Edit this ${props.fruit.name}`}</button></a>
            </div>
        </div>
    )
}

module.exports = Show
```

## Test our work
1. Got to New Page
1. Make a fruit
1. Check Database
1. Edit something about the fruit
1. Check Database
1. Delete Fruit
1. Check Database


# Finished Server.js

```js
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const jsxEngine = require('jsx-view-engine')
const methodOverride = require('method-override')
const Fruit = require('./models/fruit')
const PORT = process.env.PORT || 3000

const app = express()

app.use(express.urlencoded({ extended: true }))// build a ssr website
// app.use(express.json()) //build an api
app.use(methodOverride('_method'))
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => {
    console.log('connected to mongodb')
})

// INDUCES

// INDEX
// list all fruits
app.get('/fruits', async (req, res) => {
    try {
        const foundFruits = await Fruit.find({})
        res.render('fruits/Index', {
            fruits: foundFruits
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

// NEW
// show the user a form to fill out to create a fruit
app.get('/fruits/new', (req, res) => {
    res.render('fruits/New')
})
// DELETE
// backend only functionality that is used to delete a fruit
app.delete('/fruits/:id', async (req, res) => {
    try {
        await Fruit.findOneAndDelete({'_id': req.params.id})
            .then(() => {
                res.redirect('/fruits')
            })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

// UPDATE
// backend only functionality that is used to update a fruit
app.put('/fruits/:id', async (req, res) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    try {
        await Fruit.findOneAndUpdate({ '_id': req.params.id }, 
            req.body, { new: true })
            .then(() => {
                res.redirect(`/fruits/${req.params.id}`)
            })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
} )

// CREATE
// backend only functionality that is used to create a fruit

app.post('/fruits', async (req, res) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    try{
        const createdFruit = await Fruit.create(req.body)
        res.redirect(`/fruits/${createdFruit._id}`)
    }catch(error){
        res.status(400).send({message: error.message})
    }
})

// EDIT
// show you a form that lets you edit the fruit
app.get('/fruits/:id/edit', async (req, res) => {
    try {
        const foundFruit = await Fruit.findOne({'_id': req.params.id})
        res.render('fruits/Edit', {
           fruit: foundFruit 
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

// SHOW
// shows you 1 individual fruit
app.get('/fruits/:id', async (req, res) => {
    try {
        const foundFruit = await Fruit.findOne({_id: req.params.id})
        res.render('fruits/Show', {
            fruit: foundFruit
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})




app.listen(PORT, () =>{
    console.log(`Ayo the Port at ${PORT} is lit`)
})
```
<center>

<div style="display: flex; justify-content: space-between;">

![arthur_node_jsx_diagram_photoshopped](https://media.git.generalassemb.ly/user/15881/files/c2cf4100-2e61-11eb-913c-d8b656fd9709)

![mvc-meme](https://media.git.generalassemb.ly/user/15881/files/24990200-9460-11ea-8f91-a81163b612d5)

</div>
</center>


## Connections, Schema, Models, Document and Collections

1. The Connection connects your Node.js Server to MongoDB
1. Schema ensures the structure of your data that you put into the database
1. Models is the class that implements the schema and gives us javascript methods we can use to interact with MongoDb Database, it automatically makes a Collection in the DB, comprised of Documents that pass the Schema.
1. Document is an Instance of the Model and is represented by one Object In a collection
1. Collection is a group of documents of the same Model

## Where Does It Fit in With MVC

| **URL** | **HTTP Verb** |  **Action**| **Used For**| **Mongoose Method** | **View** |
|------------|-------------|------------|-------------------------------| ---------------------| ------------- |
| /fruits/         | GET       | index  | Displaying a list of all fruits | Fruit.find | Index.jsx |
| /fruits/new         | GET       | new | Display HTML form for creating a new fruit | none | New.jsx |
| /fruits/:id      | DELETE    | destroy | Delete a specific photo  | Fruit.findByIdAndRemove or Fruit.findByIdAndDelete | none |
| /fruits/:id      | PATCH/PUT | update | Update a specific fruit   | Fruit.findByIdAndUpdate or Fruit.findOneAndUpdate | none |
| /fruits          | POST      | create | Create a new fruit | Fruit.create | none |
| /fruits/:id/edit | GET       | edit   | Return an HTML form for editing a fruit | Fruit.findOne or Fruit.findById | Edit.jsx |
| /fruits/:id      | GET       | show   | Display a specific fruit | Fruit.findOne or Fruit.findById | Show.jsx |     

***Note: Only GET Requests render a View In RESTful Routing***


## Understanding Structure


| **Connections** | **Schema** |  **Models**| **Document**| **Collection** | **Database** | **Cluster** |
|---------------------|-------------|------------|-------------------------------| ---------------------| ------------ | --------------- |
| In server.js, or connection file Connect to DB using Connection URL | In model file identify the structure of your data | Use the schema to create a new Model that can connect to DB with JavaScript methods like `.find`, `create` and `.findOneAndUpdate` | An instance of the Model that passes the schema, residing in a collection | The group of documents that were added to the database by a specific Model | A collection of all your collections, every app should have it's own Database | All your databases in your Atlas Account live in your cluster, you only need one cluster and all your databases go in the cluster |



### For people that know SQL
1. ***Collection ====> Table***
1. ***Document ====> Row***
1. ***Key on Schema =====> Column***





























