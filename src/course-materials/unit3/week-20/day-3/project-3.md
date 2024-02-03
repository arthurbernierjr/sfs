---
track: "Unit 3"
title: "Week 20 - Day 3"
week: 20
day: 3
type: "homework"
topics: "Unit 3 Individual Project (MERN/SEI CAFE) Presentation Tuesday 3/5/2024"
---

# Application Technical Requirements/Deliverables

1. A **functioning** full-stack, single-page application hosted on  Digital Ocean .

2. Incorporate the technologies of the **MERN-stack**:
	- MongoDB/Mongoose
	- Express
	- React
	- Node

3. **Have a well-styled interactive front-end** that communicates with the **Express** backend via FETCH

4. Implement token-based **authentication** - *"...a user can sign-up, log in & log out"*.

5. Deploy to Digital Ocean and make live on the internet

6. This needs to be your own version of the MERN CAFE with the exact same functionality

## We will have 5-6 Lessons on REACT that we will do in class and you will be given Video helpers to help you solve your problems

## Code below


<center>

# The Flow of the code files

![mern architecture](https://i.imgur.com/uoJvBRK.jpg)


</center>

<hr/>

## A Full Stack Developer knows how to connect the frontend and backend together and understands the flow of data from FRONT to BACK and Back to Front


<center>

# JWT

![](https://i.imgur.com/IXByEPP.png)

# Browser & Server

![](https://i.imgur.com/3quZxs4.png)

</center>

## Help for backend setup

<iframe width="560" height="315" src="https://www.youtube.com/embed/WoIA2GkJGPg?si=JASz8gNh0uiApWL8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


# App Breakdown Structure
## ROOT
  1. config/
    - checkToken.js
    - database.js
    - ensureLoggedIn.js
  1. controllers/
    - api/
      - items.js
      - orders.js
      - users.js
  1. models/
    - category.js
    - item.js
    - itemSchema.js
    - order.js
    - user.js
    - readme.md
  1. public/
    - css
    - index.html
    - js/dist
  1. routes/
    - api/
      - items.js
      - orders.js
      - users.js
  1. src/
    - components/
      - CategoryList/
          - CategoryList.js
          - CategoryList.module.scss
      - LineItem/
          - LineItem.js
          - LineItem.module.scss
      - LoginForm/
          - LoginForm.js
          - LoginForm.module.scss
      - Logo/
          - Logo.js
          - Logo.module.scss
      - MenuList/
          - MenuList.js
          - MenuList.module.scss
      - MenuListItem/
          - MenuListItem.js
          - MenuListItem.module.scss
      - OrderDetail/
          - OrderDetail.js
          - OrderDetail.module.scss
      - OrderList/
          - OrderList.js
          - OrderList.module.scss
      - OrderListItem/
          - OrderListItem.js
          - OrderListItem.module.scss
      - SignUpForm/
          - SignUpForm.js
          - SignUpForm.module.scss
      - UserLogOut/
          - UserLogOut.js
          - UserLogOut.module.scss
    - pages/
      - App/
          - App.js
          - App.module.scss
      - AuthPage/
          - AuthPage.js
          - AuthPage.module.scss
      - NewOrderPage/
          - NewOrderPage.js
          - NewOrderPage.module.scss
      - OrderHistoryPage/
          - OrderHistoryPage.js
          - OrderHistoryPage.module.scss
    - scss
        - styles.scss
    - utilities/
      - items-api.js
      - order-api.js
      - send-request.js
      - users-api.js
      - users-service.js
    - index.css
    - index.js
  1. **.gitignore**
  1. **README.md**
  1. **seed.js**
  1. **server.js**
  1. **app-server.js**

<center>

# Building SEI CAFE


## SET Up Models
- User

```js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const SALT_ROUNDS = 6;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
    minlength: 3,
    required: true
  }
}, {
  timestamps: true,
  toJSON: {
    transform: function(doc, ret) {
      delete ret.password;
      return ret;
    }
  }
});

userSchema.pre('save', async function(next) {
  // 'this' is the use document
  if (!this.isModified('password')) return next();
  // update the password with the computed hash
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
  return next();
});

module.exports = mongoose.model('User', userSchema);
```

- Item Schema

```js
const item = require('./item');

const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },
  emoji: String,
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  price: { type: Number, required: true, default: 0 }
}, {
  timestamps: true
});

module.exports = itemSchema;
```

- Item

```js
const mongoose = require('mongoose');
// Ensure the Category model is processed by Mongoose
require('./category');

const itemSchema = require('./itemSchema');

module.exports = mongoose.model('Item', itemSchema);
```

- Category

```js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: { type: String, required: true },
  sortOrder: Number
}, {
  timestamps: true
});

module.exports = mongoose.model('Category', categorySchema);
```

- Order

```js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const itemSchema = require('./itemSchema');

const lineItemSchema = new Schema({
  qty: { type: Number, default: 1 },
  item: itemSchema
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

lineItemSchema.virtual('extPrice').get(function() {
  // 'this' is bound to the lineItem subdoc
  return this.qty * this.item.price;
});

const orderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  lineItems: [lineItemSchema],
  isPaid: { type: Boolean, default: false }
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

orderSchema.virtual('orderTotal').get(function() {
  return this.lineItems.reduce((total, item) => total + item.extPrice, 0);
});

orderSchema.virtual('totalQty').get(function() {
  return this.lineItems.reduce((total, item) => total + item.qty, 0);
});

orderSchema.virtual('orderId').get(function() {
  return this.id.slice(-6).toUpperCase();
});

orderSchema.statics.getCart = function(userId) {
  // 'this' is the Order model
  return this.findOneAndUpdate(
    // query
    { user: userId, isPaid: false },
    // update
    { user: userId },
    // upsert option will create the doc if
    // it doesn't exist
    { upsert: true, new: true }
  );
};

orderSchema.methods.addItemToCart = async function(itemId) {
  const cart = this;
  // Check if item already in cart
  const lineItem = cart.lineItems.find(lineItem => lineItem.item._id.equals(itemId));
  if (lineItem) {
    lineItem.qty += 1;
  } else {
    const item = await mongoose.model('Item').findById(itemId);
    cart.lineItems.push({ item });
  }
  return cart.save();
};

// Instance method to set an item's qty in the cart (will add item if does not exist)
orderSchema.methods.setItemQty = function(itemId, newQty) {
  // this keyword is bound to the cart (order doc)
  const cart = this;
  // Find the line item in the cart for the menu item
  const lineItem = cart.lineItems.find(lineItem => lineItem.item._id.equals(itemId));
  if (lineItem && newQty <= 0) {
    // Calling remove, removes itself from the cart.lineItems array
    lineItem.remove();
  } else if (lineItem) {
    // Set the new qty - positive value is assured thanks to prev if
    lineItem.qty = newQty;
  }
  // return the save() method's promise
  return cart.save();
};

module.exports = mongoose.model('Order', orderSchema);
```

### What are virtuals?
Virtuals are document properties that do not persist or get stored in the MongoDB database, they only exist logically and are not written to the document’s collection.

With the get method of virtual property, we can show the value of the virtual property from existing document field values, and it returns the virtual property value. Mongoose calls the get method every time we access the virtual property.

### What are Statics & Methods?

Each Schema can define instance and static methods for its model. This is essentially like adding another method to your Class

```js
class Animal {
  constructor(name, type){
    this.name = name
    this.type = type
  }
  findSimilarType(){
    // code here
  }
}
```

***in Mongoose***
```js
const AnimalSchema = new Schema({
    name: String
  , type: String
});

AnimalSchema.methods.findSimilarType = function findSimilarType (cb) {
  return this.model('Animal').find({ type: this.type }, cb);
};
```

***DO NOT USE ARROW FUNCTIONS HERE THEY WONT WORK This is one of those times***

Statics are pretty much the same as methods but allow for defining functions that exist directly on your Model. Not the instance of the model

## Psuedo Code Controller Actions

### Users
  - Login
  - SignUp

### Orders
 - Cart
 - AddToCart
 - Set Item Quantity in Cart
 - Checkout
 - History

### Items
  - Index
  - Show


## Set Up Controller Actions

### Users
```js
// /controllers/api/users.js

const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const checkToken = (req, res) => {
  console.log('req.user', req.user)
  res.json(req.exp)
}

const dataController = {
  async create (req, res, next) {
    try {
      const user = await User.create(req.body)
      console.log(req.body)
      // token will be a string
      const token = createJWT(user)
      // send back the token as a string
      // which we need to account for
      // in the client
      res.locals.data.user = user
      res.locals.data.token = token
      next()
    } catch (e) {
      console.log('you got a database problem')
      res.status(400).json(e)
    }
  },
  async login (req, res, next) {
    try {
      const user = await User.findOne({ email: req.body.email })
      if (!user) throw new Error()
      const match = await bcrypt.compare(req.body.password, user.password)
      if (!match) throw new Error()
      res.locals.data.user = user
      res.locals.data.token = createJWT(user)
      next()
    } catch {
      res.status(400).json('Bad Credentials')
    }
  }
}

const apiController = {
  auth (req, res) {
    res.json(res.locals.data.token)
  }
}

module.exports = {
  checkToken,
  dataController,
  apiController
}

/* -- Helper Functions -- */

function createJWT (user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  )
}
```
### Orders

```js
const Order = require('../../models/order');

module.exports = {
  cart,
  addToCart,
  setItemQtyInCart,
  checkout,
  history
};

// A cart is the unpaid order for a user
async function cart(req, res) {
  try{
    const cart = await Order.getCart(req.user._id);
    res.status(200).json(cart);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}

// Add an item to the cart
async function addToCart(req, res) {
  try{
    const cart = await Order.getCart(req.user._id);
    await cart.addItemToCart(req.params.id);
    res.status(200).json(cart);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }  
}

// Updates an item's qty in the cart
async function setItemQtyInCart(req, res) {
  try{
    const cart = await Order.getCart(req.user._id);
    await cart.setItemQty(req.body.itemId, req.body.newQty);
    res.status(200).json(cart);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}

// Update the cart's isPaid property to true
async function checkout(req, res) {
  try{
    const cart = await Order.getCart(req.user._id);
    cart.isPaid = true;
    await cart.save();
    res.status(200).json(cart);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }  
}

// Return the logged in user's paid order history
async function history(req, res) {
  // Sort most recent orders first
  try{
    const orders = await Order
      .find({ user: req.user._id, isPaid: true })
      .sort('-updatedAt').exec();
    res.status(200).json(orders);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }

}
```

### Items

```js
const Item = require('../../models/item');

module.exports = {
  index,
  show
};

async function index(req, res) {
  try{
    const items = await Item.find({}).sort('name').populate('category').exec();
    // re-sort based upon the sortOrder of the categories
    items.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
    res.status(200).json(items);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}

async function show(req, res) {
  try{
    const item = await Item.findById(req.params.id);
    res.status(200).json(item);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }  
}

```

## Set Up Routes

### Users

```js
// /routes/api/users.js
const express = require('express')
const router = express.Router()
const { checkToken, dataController, apiController } = require('../../controllers/api/users')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// POST /api/users
router.post('/', dataController.create, apiController.auth)
// POST /api/users/login
router.post('/login', dataController.login, apiController.auth)

// GET /api/users/check-token
router.get('/check-token', ensureLoggedIn, checkToken)

module.exports = router
```

### Orders

```js
const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');

// GET /api/orders/cart
router.get('/cart', ordersCtrl.cart);
// GET /api/orders/history
router.get('/history', ordersCtrl.history);
// POST /api/orders/cart/items/:id
router.post('/cart/items/:id', ordersCtrl.addToCart);
// POST /api/orders/cart/checkout
router.post('/cart/checkout', ordersCtrl.checkout);
// POST /api/orders/cart/qty
router.put('/cart/qty', ordersCtrl.setItemQtyInCart);

module.exports = router;
```

### Items

```js
const express = require('express');
const router = express.Router();
const itemsCtrl = require('../../controllers/api/items');

// GET /api/items
router.get('/', itemsCtrl.index);
// GET /api/items/:id
router.get('/:id', itemsCtrl.show);

module.exports = router;
```


## Add Routes to Server.js

```js
// Check if token and create req.user
app.use(require('./config/checkToken'));

// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));
// Protect the API routes below from anonymous users
const ensureLoggedIn = require('./config/ensureLoggedIn');
app.use('/api/items', ensureLoggedIn, require('./routes/api/items'));
app.use('/api/orders', ensureLoggedIn, require('./routes/api/orders'));
```

## Optionally: Test Routes in PostMan and Use Postman to create starter data

### But to save time lets set up a seed file in the config folder

```js
require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Sandwiches', sortOrder: 10},
    {name: 'Seafood', sortOrder: 20},
    {name: 'Mexican', sortOrder: 30},
    {name: 'Italian', sortOrder: 40},
    {name: 'Sides', sortOrder: 50},
    {name: 'Desserts', sortOrder: 60},
    {name: 'Drinks', sortOrder: 70},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Hamburger', emoji: '🍔', category: categories[0], price: 5.95},
    {name: 'Turkey Sandwich', emoji: '🥪', category: categories[0], price: 6.95},
    {name: 'Hot Dog', emoji: '🌭', category: categories[0], price: 3.95},
    {name: 'Crab Plate', emoji: '🦀', category: categories[1], price: 14.95},
    {name: 'Fried Shrimp', emoji: '🍤', category: categories[1], price: 13.95},
    {name: 'Whole Lobster', emoji: '🦞', category: categories[1], price: 25.95},
    {name: 'Taco', emoji: '🌮', category: categories[2], price: 1.95},
    {name: 'Burrito', emoji: '🌯', category: categories[2], price: 4.95},
    {name: 'Pizza Slice', emoji: '🍕', category: categories[3], price: 3.95},
    {name: 'Spaghetti', emoji: '🍝', category: categories[3], price: 7.95},
    {name: 'Garlic Bread', emoji: '🍞', category: categories[3], price: 1.95},
    {name: 'French Fries', emoji: '🍟', category: categories[4], price: 2.95},
    {name: 'Green Salad', emoji: '🥗', category: categories[4], price: 3.95},
    {name: 'Ice Cream', emoji: '🍨', category: categories[5], price: 1.95},
    {name: 'Cup Cake', emoji: '🧁', category: categories[5], price: 0.95},
    {name: 'Custard', emoji: '🍮', category: categories[5], price: 2.95},
    {name: 'Strawberry Shortcake', emoji: '🍰', category: categories[5], price: 3.95},
    {name: 'Milk', emoji: '🥛', category: categories[6], price: 0.95},
    {name: 'Coffee', emoji: '☕', category: categories[6], price: 0.95},
    {name: 'Mai Tai', emoji: '🍹', category: categories[6], price: 8.95},
    {name: 'Beer', emoji: '🍺', category: categories[6], price: 3.95},
    {name: 'Wine', emoji: '🍷', category: categories[6], price: 7.95},
  ]);

  console.log(items)

  process.exit();

})();
```

### This is just going to add all of Categories and Food Items by using the Models we created

Then we will make a script in package.json that we can call by running `npm run seed`
 ***What should this script say and where does it go? How do we run a file with node.js***

## Understand React Pages and Routing

### Review
1. What is Client Side Rendering?
1. What is Client Side Routing?
1. What is Ajax? What is the fetch API?

# SCSS Modules let you use the same CSS class name in different files without worrying about naming clashes. Learn more about CSS Modules [here](https://css-tricks.com/css-modules-part-1-need/).

## `Button.module.scss`

```css
.error {
  background-color: red;
}
```

## `another-stylesheet.css`

```css
.error {
  color: red;
}
```

## `Button.js`

```js
import React, { Component } from 'react';
import styles from './Button.module.scss'; // Import css modules stylesheet as styles
import './another-stylesheet.css'; // Import regular stylesheet

class Button extends Component {
  render() {
    // reference as a js object
    return <button className={styles.error}>Error Button</button>;
  }
}
```

## Result

No clashes from other `.error` class names

```html
<!-- This button has red background but not red text -->
<button class="Button_error_ax7yz">Error Button</button>
```

**This is an optional feature.** Regular `<link>` stylesheets and CSS files are fully supported. CSS Modules are turned on for files ending with the `.module.scss` extension.


### Index.js is the entrypoint of our React App
```js
// index.js
import './styles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App/App';

import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

```
### style.css
```css
    :root {
      --white: #FFFFFF;
      --tan-1: #FBF9F6;
      --tan-2: #E7E2DD;
      --tan-3: #E2D9D1;
      --tan-4: #D3C1AE;
      --orange: #F67F00;
      --text-light: #968c84;
      --text-dark: #615954;
    }

    *, *:before, *:after {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background-color: var(--tan-4);
      padding: 2vmin;
      height: 100vh;
    }

    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    #root {
      height: 100%;
    }

    .align-ctr {
      text-align: center;
    }

    .align-rt {
      text-align: right;
    }

    .smaller {
      font-size: smaller;
    }

    .flex-ctr-ctr {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .flex-col {
      flex-direction: column;
    }

    .flex-j-end {
      justify-content: flex-end;
    }

    .scroll-y {
      overflow-y: scroll;
    }

    .section-heading {
      display: flex;
      justify-content: space-around;
      align-items: center;
      background-color: var(--tan-1);
      color: var(--text-dark);
      border: .1vmin solid var(--tan-3);
      border-radius: 1vmin;
      padding: .6vmin;
      text-align: center;
      font-size: 2vmin;
    }

    .form-container {
      padding: 3vmin;
      background-color: var(--tan-1);
      border: .1vmin solid var(--tan-3);
      border-radius: 1vmin;
    }

    p.error-message {
      color: var(--orange);
      text-align: center;
    }

    form {
      display: grid;
      grid-template-columns: 1fr 3fr;
      gap: 1.25vmin;
      color: var(--text-light);
    }

    label {
      font-size: 2vmin;
      display: flex;
      align-items: center;
    }

    input {
      padding: 1vmin;
      font-size: 2vmin;
      border: .1vmin solid var(--tan-3);
      border-radius: .5vmin;
      color: var(--text-dark);
      background-image: none !important; /* prevent lastpass */
      outline: none;
    }

    input:focus {
      border-color: var(--orange);
    }

    button, a.button {
      margin: 1vmin;
      padding: 1vmin;
      color: var(--white);
      background-color: var(--orange);
      font-size: 2vmin;
      font-weight: bold;
      text-decoration: none;
      text-align: center;
      border: .1vmin solid var(--tan-2);
      border-radius: .5vmin;
      outline: none;
      cursor: pointer;
    }

    button.btn-sm {
      font-size: 1.5vmin;
      padding: .6vmin .8vmin;
    }

    button.btn-xs {
      font-size: 1vmin;
      padding: .4vmin .5vmin;
    }

    button:disabled, form:invalid button[type="submit"] {
      cursor: not-allowed;
      background-color: var(--tan-4);
    }

    button[type="submit"] {
      grid-column: span 2;
      margin: 1vmin 0 0;
    }
```

## App

```js
import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import styles from './App.module.scss';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className={styles.App}>
      { user ?
        <>
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/orders/new" element={<NewOrderPage user={user} setUser={setUser} />} />
            <Route path="/orders" element={<OrderHistoryPage user={user} setUser={setUser} />} />
            {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
            <Route path="/*" element={<Navigate to="/orders/new" />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
```
### App.module.scss

```css
.App {
  height: 100%;
}
```

### AuthPage

```js
import { useState } from 'react';
import styles from './AuthPage.module.scss';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Logo from '../../components/Logo/Logo';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className={styles.AuthPage}>
      <div>
        <Logo />
        <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</h3>
      </div>
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
    </main>
  );
}
```

```css
.AuthPage {
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--white);
  border-radius: 2vmin;
}

.AuthPage h3 {
  margin-top: 4vmin;
  text-align: center;
  color: var(--text-light);
  cursor: pointer;
}
```

## What is useRef?
- In React you aren't supposed to directly manipulate the dom with stuff like query selector etc.
- useRef lets us keep a ref of an element through react like querySelector and then we can manipulate it

## New Order Page

```js
import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';
import styles from './NewOrderPage.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import MenuList from '../../components/MenuList/MenuList';
import CategoryList from '../../components/CategoryList/CategoryList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function NewOrderPage({ user, setUser }) {
  const [menuItems, setMenuItems] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const [cart, setCart] = useState(null);
  const categoriesRef = useRef([]);
  const navigate = useNavigate();

  useEffect(function() {
    async function getItems() {
      const items = await itemsAPI.getAll();
      categoriesRef.current = items.reduce((cats, item) => {
        const cat = item.category.name;
        return cats.includes(cat) ? cats : [...cats, cat];
      }, []);
      setMenuItems(items);
      setActiveCat(categoriesRef.current[0]);
    }
    getItems();
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);
  // Providing an empty 'dependency array'
  // results in the effect running after
  // the FIRST render only

  /*-- Event Handlers --*/
  async function handleAddToOrder(itemId) {
    const updatedCart = await ordersAPI.addItemToCart(itemId);
    setCart(updatedCart);
  }

  async function handleChangeQty(itemId, newQty) {
    const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
    setCart(updatedCart);
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate('/orders');
  }

  return (
    <main className={styles.NewOrderPage}>
      <aside>
        <Logo />
        <CategoryList
          categories={categoriesRef.current}
          cart={setCart}
          setActiveCat={setActiveCat}
        />
        <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <MenuList
        menuItems={menuItems.filter(item => item.category.name === activeCat)}
        handleAddToOrder={handleAddToOrder}
      />
      <OrderDetail
        order={cart}
        handleChangeQty={handleChangeQty}
        handleCheckout={handleCheckout}
      />
    </main>
  );
}
```

```css
.NewOrderPage {
  height: 100%;
  display: grid;
  grid-template-columns: 1.6fr 3.5fr 3fr;
  grid-template-rows: 1fr;
  background-color: var(--white);
  border-radius: 2vmin;
}

.NewOrderPage aside {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 3vmin 2vmin;
}
```

## OrderHistory Page

```js
import styles from './OrderHistoryPage.module.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as ordersAPI from '../../utilities/orders-api';
import Logo from '../../components/Logo/Logo';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import OrderList from '../../components/OrderList/OrderList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';

export default function OrderHistoryPage({ user, setUser }) {
  /*--- State --- */
  const [orders, setOrders] = useState([]);
  const [activeOrder, setActiveOrder] = useState(null);

  /*--- Side Effects --- */
  useEffect(function () {
    // Load previous orders (paid)
    async function fetchOrderHistory() {
      const orders = await ordersAPI.getOrderHistory();
      setOrders(orders);
      // If no orders, activeOrder will be set to null below
      setActiveOrder(orders[0] || null);
    }
    fetchOrderHistory();
  }, []);

  /*--- Event Handlers --- */
  function handleSelectOrder(order) {
    setActiveOrder(order);
  }

  /*--- Rendered UI --- */
  return (
    <main className={styles.OrderHistoryPage}>
      <aside className={styles.aside}>
        <Logo />
        <Link to="/orders/new" className="button btn-sm">NEW ORDER</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <OrderList
        orders={orders}
        activeOrder={activeOrder}
        handleSelectOrder={handleSelectOrder}
      />
      <OrderDetail
        order={activeOrder}
      />
    </main>
  );
}
```

```css


```css
.OrderHistoryPage {
  height: 100%;
  display: grid;
  grid-template-columns: 1.6fr 3.5fr 3fr;
  grid-template-rows: 1fr;
  background-color: var(--white);
  border-radius: 2vmin;
}

.OrderHistoryPage .aside {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 3vmin 2vmin;
}

```

# Break for Lunch (20 minutes)

## Create React Components

<img src="https://i.imgur.com/Evv6VCx.png">

- components/
  - CategoryList/
      - CategoryList.jsx
      - CategoryList.module.scss

      ```js
      import styles from './CategoryList.css';

      export default function CategoryList({ categories, activeCat, setActiveCat }) {
          const cats = categories.map(cat =>
            <li
              key={cat}
              className={cat === activeCat ? styles.active : ''}
              // FYI, the below will also work, but will give a warning
              // className={cat === activeCat && 'active'}
              onClick={() => setActiveCat(cat)}
            >
              {cat}
            </li>
          );
          return (
            <ul className={styles.CategoryList}>
              {cats}
            </ul>
          );
        }
      ```

      ```css
      .CategoryList {
        color: var(--text-light);
        list-style: none;
        padding: 0;
        font-size: 1.7vw;
      }

      .CategoryList li {
        padding: .6vmin;
        text-align: center;
        border-radius: .5vmin;
        margin-bottom: .5vmin;
      }

      .CategoryList li:hover:not(.active) {
        cursor: pointer;
        background-color: var(--orange);
        color: var(--white);
      }

      .CategoryList li.active {
        color: var(--text-dark);
        background-color: var(--tan-1);
        border: .1vmin solid var(--tan-3);
      }
      ```
  - LineItem/
      - LineItem.jsx
      - LineItem.module.scss

      ```js
      import styles from './LineItem.module.scss';

      export default function LineItem({ lineItem, isPaid, handleChangeQty }) {
        return (
          <div className={styles.LineItem}>
            <div className="flex-ctr-ctr">{lineItem.item.emoji}</div>
            <div className="flex-ctr-ctr flex-col">
              <span className="align-ctr">{lineItem.item.name}</span>
              <span>{lineItem.item.price.toFixed(2)}</span>
            </div>
            <div className={styles.qty} style={{ justifyContent: isPaid && 'center' }}>
              {!isPaid &&
                <button
                  className="btn-xs"
                  onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty - 1)}
                >−</button>
              }
              <span>{lineItem.qty}</span>
              {!isPaid &&
                <button
                  className="btn-xs"
                  onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty + 1)}
                >+</button>
              }
            </div>
            <div className={styles.extPrice]}>${lineItem.extPrice.toFixed(2)}</div>
          </div>
        );
      }
      ```

      ```css
      .LineItem {
        width: 100%;
        display: grid;
        grid-template-columns: 3vw 15.35vw 5.75vw 5.25vw;
        padding: 1vmin 0;
        color: var(--text-light);
        background-color: var(--white);
        border-top: .1vmin solid var(--tan-3);
        font-size: 1.5vw;
      }

      .LineItem:last-child {
        border-bottom: .1vmin solid var(--tan-3);
      }

      .LineItem .qty {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.3vw;
      }

      .LineItem .extPrice {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: 1.3vw;
      }

      .LineItem button {
        margin: 0;
      }
      ```

  - LoginForm/
      - LoginForm.jsx
      - LoginForm.module.scss

      ```js
      import { useState } from 'react';
      import * as usersService from '../../utilities/users-service';

      export default function LoginForm({ setUser }) {
        const [credentials, setCredentials] = useState({
          email: '',
          password: ''
        });
        const [error, setError] = useState('');

        function handleChange(evt) {
          setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
          setError('');
        }

        async function handleSubmit(evt) {
          // Prevent form from being submitted to the server
          evt.preventDefault();
          try {
            // The promise returned by the signUp service method
            // will resolve to the user object included in the
            // payload of the JSON Web Token (JWT)
            const user = await usersService.login(credentials);
            setUser(user);
          } catch {
            setError('Log In Failed - Try Again');
          }
        }

        return (
          <div>
            <div className="form-container">
              <form autoComplete="off" onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
                <label>Password</label>
                <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
                <button type="submit">LOG IN</button>
              </form>
            </div>
            <p className="error-message">&nbsp;{error}</p>
          </div>
        );
      }
      ```

      ### **❓ BIG QUESTION How do you add styling to this form with a CSS Module?**

  - Logo/
      - Logo.jsx
      - Logo.module.scss

      ```js
      import styles from './Logo.css';

      export default function Logo() {
        return (
          <div className={styles.Logo}>
            <div>SEI</div>
            <div>CAFE</div>
          </div>
        );
      }
      ```

      ```css
      .Logo {
      height: 12vmin;
      width: 12vmin;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background-color: var(--orange);
      color: var(--tan-1);
      font-size: 2.7vmin;
      border: .6vmin solid var(--tan-2);
      }
      ```

  - MenuList/
      - MenuList.jsx
      - MenuList.module.scss

      ```js
        import styles from './MenuList.module.scss';
        import MenuListItem from '../MenuListItem/MenuListItem';

        export default function MenuList({ menuItems, handleAddToOrder }) {
          const items = menuItems.map(item =>
            <MenuListItem
              key={item._id}
              handleAddToOrder={handleAddToOrder}
              menuItem={item}
            />
          );
          return (
            <main className={styles.MenuList}>
              {items}
            </main>
          );
        }
      ```

      ```css
        .MenuList {
        background-color: var(--tan-1);
        border: .1vmin solid var(--tan-3);
        border-radius: 2vmin;
        margin: 3vmin 0;
        padding: 3vmin;
        overflow-y: scroll;
      }
      ```

  - MenuListItem/
      - MenuListItem.jsx
      - MenuListItem.module.scss

      ```js
        import styles from './MenuListItem.module.scss';

        export default function MenuListItem({ menuItem, handleAddToOrder }) {
          return (
            <div className={styles.MenuListItem}>
              <div className={styles.emoji + ' ' + 'flex-ctr-ctr'}>{menuItem.emoji}</div>
              <div className={styles.name}>{menuItem.name}</div>
              <div className={styles.buy}>
                <span>${menuItem.price.toFixed(2)}</span>
                <button className="btn-sm" onClick={() => handleAddToOrder(menuItem._id)}>
                  ADD
                </button>
              </div>
            </div>
          );
        }
      ```

      ```css
        .MenuListItem {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 3vmin;
          padding: 2vmin;
          color: var(--text-light);
          background-color: var(--white);
          border: .1vmin solid var(--tan-3);
          border-radius: 1vmin;
          font-size: 4vmin;
        }

        .MenuListItem .emoji {
          height: 8vw;
          width: 8vw;
          font-size: 4vw;
          background-color: var(--tan-1);
          border: .1vmin solid var(--tan-3);
          border-radius: 1vmin;
        }

        .MenuListItem .buy {
          display: flex;
          flex-direction: column;
        }

        .MenuListItem .buy span {
          font-size: 1.7vw;
          text-align: center;
          color: var(--text-light);
        }

        .MenuListItem .name {
          font-size: 2vw;
          text-align: center;
          color: var(--text-light);
        }
      ```

  - OrderDetail/
      - OrderDetail.jsx
      - OrderDetail.module.scss

      ```js
        import styles from './OrderDetail.module.scss';
        import LineItem from '../LineItem/LineItem';

        // Used to display the details of any order, including the cart (unpaid order)
        export default function OrderDetail({ order, handleChangeQty, handleCheckout }) {
            if (!order) return null;

            const lineItems = order.lineItems.map(item =>
              <LineItem
                lineItem={item}
                isPaid={order.isPaid}
                handleChangeQty={handleChangeQty}
                key={item._id}
              />
            );

            return (
              <div className={styles.OrderDetail}>
                <div className={styles.sectionHeading}>
                  {order.isPaid ?
                    <span>ORDER <span className="smaller">{order.orderId}</span></span>
                    :
                    <span>NEW ORDER</span>
                  }
                  <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
                </div>
                <div className={`${styles.lineItemContainer} flex-ctr-ctr flex-col scroll-y`}>
                  {lineItems.length ?
                    <>
                      {lineItems}
                      <section className={styles.total}>
                        {order.isPaid ?
                          <span className={styles.right}>TOTAL&nbsp;&nbsp;</span>
                          :
                          <button
                            className="btn-sm"
                            onClick={handleCheckout}
                            disabled={!lineItems.length}
                          >CHECKOUT</button>
                        }
                        <span>{order.totalQty}</span>
                        <span className={styles.right}>${order.orderTotal.toFixed(2)}</span>
                      </section>
                    </>
                    :
                    <div className={styles.hungry}>Hungry?</div>
                  }
                </div>
              </div>
            );
          }
      ```

      ```css
        .OrderDetail {
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          padding: 3vmin;
          font-size: 2vmin;
          color: var(--text-light);
        }

        .OrderDetail .sectionHeading {
          width: 100%
        }

        .OrderDetail .lineItemContainer {
          margin-top: 3vmin;
          justify-content: flex-start;
          height: calc(100vh - 18vmin);
          width: 100%;
        }

        .OrderDetail .total {
          width: 100%;
          display: grid;
          grid-template-columns: 18.35vw 5.75vw 5.25vw;
          padding: 1vmin 0;
          color: var(--text-light);
          border-top: .1vmin solid var(--tan-3);
        }

        .OrderDetail .total span {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.5vw;
          color: var(--text-dark);
        }

        .OrderDetail .total span.right {
          display: flex;
          justify-content: flex-end;
        }

        .OrderDetail .hungry {
          position: absolute;
          top: 50vh;
          font-size: 2vmin;
        }
      ```

  - OrderList/
      - OrderList.jsx
      - OrderList.module.scss

      ```js
      import OrderListItem from '../OrderListItem/OrderListItem';
      import styles from './OrderList.module.scss';

      export default function OrderList({ orders, activeOrder, handleSelectOrder }) {
        const orderItems = orders.map(o =>
          <OrderListItem
            order={o}
            isSelected={o === activeOrder}
            handleSelectOrder={handleSelectOrder}
            key={o._id}
          />
        );

        return (
          <main className={styles.OrderList}>
            {orderItems.length ?
              orderItems
              :
              <span className={styles.noOrders}>No Previous Orders</span>
            }
          </main>
        );
      }
      ```

      ```css
      .OrderList {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: var(--tan-1);
        border: .1vmin solid var(--tan-3);
        border-radius: 2vmin;
        margin: 3vmin 0;
        padding: 3vmin;
        overflow-y: scroll;
      }

      .OrderList .noOrders {
        color: var(--text-light);
        font-size: 2vmin;
        position: absolute;
        top: calc(50vh);
      }
      ```

  - OrderListItem/
      - OrderListItem.jsx
      - OrderListItem.module.scss

      ```js
      import styles from './OrderListItem.css';

      export default function OrderListItem({ order, isSelected, handleSelectOrder }) {
        return (
          <div className={`${styles.OrderListItem} ${isSelected ? styles.selected : ''}`} onClick={() => handleSelectOrder(order)}>
            <div>
              <div>Order Id: <span className="smaller">{order.orderId}</span></div>
              <div className="smaller">{new Date(order.updatedAt).toLocaleDateString()}</div>
            </div>
            <div className="align-rt">
              <div>${order.orderTotal.toFixed(2)}</div>
              <div className="smaller">{order.totalQty} Item{order.totalQty > 1 ? 's' : ''}</div>
            </div>
          </div>
        );
      }
      ```

      ```css
      .OrderListItem {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 3vmin;
        padding: 2vmin;
        color: var(--text-light);
        background-color: var(--white);
        border: .2vmin solid var(--tan-3);
        border-radius: 1vmin;
        font-size: 2vmin;
        cursor: pointer;
      }

      .OrderListItem > div> div:first-child {
        margin-bottom: .5vmin;
      }

      .OrderListItem.selected {
        border-color: var(--orange);
        border-width: .2vmin;
        cursor: default;
      }

      .OrderListItem:not(.selected):hover {
        border-color: var(--orange);
        border-width: .2vmin;
      }
      ```

  - SignUpForm/
      - SignUpForm.jsx
      - SignUpForm.module.scss

      ```js
      import { Component } from "react";
      import { signUp } from '../../utilities/users-service';

      export default class SignUpForm extends Component {
        state = {
          name: '',
          email: '',
          password: '',
          confirm: '',
          error: ''
        };

        handleChange = (evt) => {
          this.setState({
            [evt.target.name]: evt.target.value,
            error: ''
          });
        };

        handleSubmit = async (evt) => {
          evt.preventDefault();
          try {
            const formData = {...this.state};
            delete formData.confirm;
            delete formData.error;
            // The promise returned by the signUp service method
            // will resolve to the user object included in the
            // payload of the JSON Web Token (JWT)
            const user = await signUp(formData);
            // Baby step
            this.props.setUser(user);
          } catch {
            // An error happened on the server
            this.setState({ error: 'Sign Up Failed - Try Again' });
          }
        };

        // We must override the render method
        // The render method is the equivalent to a function-based component
        // (its job is to return the UI)
        render() {
          const disable = this.state.password !== this.state.confirm;
          return (
            <div>
              <div className="form-container">
                <form autoComplete="off" onSubmit={this.handleSubmit}>
                  <label>Name</label>
                  <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
                  <label>Email</label>
                  <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                  <label>Password</label>
                  <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                  <label>Confirm</label>
                  <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
                  <button type="submit" disabled={disable}>SIGN UP</button>
                </form>
              </div>
              <p className="error-message">&nbsp;{this.state.error}</p>
            </div>
          );
        }
      }
      ```

  - UserLogOut/
      - UserLogOut.jsx
      - UserLogOut.module.scss

      ```js
      import styles from './UserLogOut.module.scss';
      import { logOut } from '../../utilities/users-service';

      export default function UserLogOut({ user, setUser }) {
        function handleLogOut() {
          logOut();
          setUser(null);
        }

        return (
          <div className={styles.UserLogOut}>
            <div>{user.name}</div>
            <div className={styles.email}>{user.email}</div>
            <button className="btn-sm" onClick={handleLogOut}>LOG OUT</button>
          </div>
        );
      }
      ```

      ```css
        .UserLogOut {
        font-size: 1.5vmin;
        color: var(--text-light);
        text-align: center;
        }

        .UserLogOut .email {
          font-size: smaller;
        }
      ```

## Create Services

Services get used in our React Components

## Create API Helpers

Our API Helpers make the fetch calls to the backend

## Integrate API Helpers into Services and Services into REACT Components

- utilities/

  - send-request.js

    ```js
    import { getToken } from './users-service';

    export default async function sendRequest(url, method = 'GET', payload = null) {
      // Fetch takes an optional options object as the 2nd argument
      // used to include a data payload, set headers, etc.
      const options = { method };
      if (payload) {
        options.headers = { 'Content-Type': 'application/json' };
        options.body = JSON.stringify(payload);
      }
      const token = getToken();
      if (token) {
        // Ensure headers object exists
        options.headers = options.headers || {};
        // Add token to an Authorization header
        // Prefacing with 'Bearer' is recommended in the HTTP specification
        options.headers.Authorization = `Bearer ${token}`;
      }
      const res = await fetch(url, options);
      // res.ok will be false if the status code set to 4xx in the controller action
      if (res.ok) return res.json();
      throw new Error('Bad Request');
    }

    ```


  - items-api.js

  ```js
    import sendRequest from './send-request';

    const BASE_URL = '/api/items';

    export function getAll() {
      return sendRequest(BASE_URL);
    }

    export function getById(id) {
      return sendRequest(`${BASE_URL}/${id}`);
    }
  ```

  - order-api.js

  ```js
      import sendRequest from './send-request';

      const BASE_URL = '/api/orders';

      // Retrieve an unpaid order for the logged in user
      export function getCart() {
        return sendRequest(`${BASE_URL}/cart`);
      }

      // Add an item to the cart
      export function addItemToCart(itemId) {
        // Just send itemId for best security (no pricing)
        return sendRequest(`${BASE_URL}/cart/items/${itemId}`, 'POST');
      }

      // Update the item's qty in the cart
      // Will add the item to the order if not currently in the cart
      // Sending info via the data payload instead of a long URL
      export function setItemQtyInCart(itemId, newQty) {
        return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { itemId, newQty });
      }

      // Updates the order's (cart's) isPaid property to true
      export function checkout() {
        // Changing data on the server, so make it a POST request
        return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
      }

      // Return all paid orders for the logged in user
      export function getOrderHistory() {
        return sendRequest(`${BASE_URL}/history`);
      }

  ```


  - users-api.js

  ```js
    import sendRequest from './send-request';

    const BASE_URL = '/api/users';

    export function signUp(userData) {
      return sendRequest(BASE_URL, 'POST', userData);
    }

    export function login(credentials) {
      return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
    }
  ```


  - users-service.js

  ```js
  import * as usersAPI  from './users-api';

    export async function signUp(userData) {
      // Delete the network request code to the
      // users-api.js module which will ultimately
      // return the JWT
      const token = await usersAPI.signUp(userData);
      // Persist the token to localStorage
      localStorage.setItem('token', token);
      return getUser();
    }

    export async function login(credentials) {
      const token = await usersAPI.login(credentials);
      // Persist the token to localStorage
      localStorage.setItem('token', token);
      return getUser();
    }

    export function getToken() {
      const token = localStorage.getItem('token');
      // getItem will return null if no key
      if (!token) return null;
      const payload = JSON.parse(atob(token.split('.')[1]));
      // A JWT's expiration is expressed in seconds, not miliseconds
      if (payload.exp < Date.now() / 1000) {
        // Token has expired
        localStorage.removeItem('token');
        return null;
      }
      return token;
    }

    export function getUser() {
      const token = getToken();
      return token ? JSON.parse(atob(token.split('.')[1])).user : null;
    }

    export function logOut() {
      localStorage.removeItem('token');
    }
  ```
