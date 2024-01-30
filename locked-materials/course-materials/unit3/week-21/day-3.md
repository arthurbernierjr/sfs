---
track: "Unit 3"
title: "Week 21 - Day 3"
week: 21
day: 3
type: "homepage"
topics: "Become A Full Stack Engineer Project Helper"
---

## Guided Videos
1. Note the videos below are just a guide, they are using `Create React App` which has been deprecated
1. This only effects how you `start` that app and how the development environment works
1. It does not change how you write react code, and definitely doesn't change how you write express code
1. Also in `Mongoose 7`, remove has been replaced with `deleteOne`
1. To proceed with the project with the notes please go to [the project markdown here](/unit3/week-20/day-3/project)

## Part 1
 <iframe
  src="https://player.cloudinary.com/embed/?public_id=MERN_Shopping_Cart_Pt_1_1_3_wdsof0&cloud_name=seventh-ave-inc&source[sourceTypes][0]=webm%2Fvp9&source[sourceTypes][1]=mp4%2Fh265&source[sourceTypes][2]=mp4&source[sourceTypes][3]=mp4%2Fh264"
  width="640"
  height="360" 
  style="height: auto; width: 100%; aspect-ratio: 640 / 360;"
  allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
  allowfullscreen
  frameborder="0"
></iframe>

## Part 2

 <iframe
  src="https://player.cloudinary.com/embed/?public_id=MERN_Cart_Pt_1_2_3_ngexra&cloud_name=seventh-ave-inc&source[sourceTypes][0]=webm%2Fvp9&source[sourceTypes][1]=mp4%2Fh265&source[sourceTypes][2]=mp4&source[sourceTypes][3]=mp4%2Fh264"
  width="640"
  height="360" 
  style="height: auto; width: 100%; aspect-ratio: 640 / 360;"
  allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
  allowfullscreen
  frameborder="0"
></iframe>


## Part 3

 <iframe
  src="https://player.cloudinary.com/embed/?public_id=MERN_Cart_Pt_1_2_3_1_eczhn8&cloud_name=seventh-ave-inc&source[sourceTypes][0]=webm%2Fvp9&source[sourceTypes][1]=mp4%2Fh265&source[sourceTypes][2]=mp4&source[sourceTypes][3]=mp4%2Fh264"
  width="640"
  height="360" 
  style="height: auto; width: 100%; aspect-ratio: 640 / 360;"
  allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
  allowfullscreen
  frameborder="0"
></iframe>

<img src="https://i.imgur.com/zXD7MO1.jpg" width="100%">

# MERN-Stack Shopping Cart - Part 1

## finished code in the below format [here](https://github.com/arthurbernierjr/sei-cafe)

## Learning Objectives

|Students Will Be Able To:|
|---|
| Use Virtual Properties on Mongoose Documents |
| Use Instance Methods on Mongoose Documents |
| Use Static Methods on Mongoose Models |

## Road Map

1. Setup
2. Review the Starter Code
3. Define the `Order` Model
4. Define the `lineItemSchema`
5. Define the Virtual Properties for `orderSchema` and `lineItemSchema`
6. Get the User's Cart - Client-Side
7. Define the `getCart` Static Model Method
8. Get the User's Cart - Server-Side
9. Render the `<OrderDetail>` Component
10. References

## 1. Setup

The starter code has several time savers added, so please be sure to complete the following setup:

1. Move into the code-along repo: `cd ~/code/sei-cafe-codealong`
2. Sync with starter code: `git fetch --all` then `git reset --hard origin/main`
3. Open VS Code: `code .`
4. Open a terminal and start the Express server: `nodemon server`
5. Open another terminal and start React's dev server: `npm start`

## 2. Review the Starter Code

So that we can spend more time during the lesson on new topics, the following has been added to avoid wasting time on tasks you're already familiar with:

- The `<OrderDetail>` component's JSX is now ready and waiting for an order to render!  However, we will have to refactor to accept some event handlers as props later when we code them. Conveniently, `<OrderDetail>` is used to render BOTH the "cart" (a user's unpaid order) as well as previously placed orders - allowing it to be reused in the `<OrderHistoryPage>`!
- A `<LineItem>` component used to render an order's line items has been included.
- An **orders-api.js** API module is ready to rock!  No new concepts, but we'll review each endpoint when we implement each feature.
- A route module for the orders resource has been coded and mounted in server.js with a _starts with_ path of `/api/orders`.
- A controller module for the orders resource has been stubbed up but there's no code in the controller actions.
- A new `<Route>` has been added to **App.jsx** that performs a client-side redirect using a `<Navigate>` component from `react-router-dom`.

## 3. Define the `Order` Model

Once again, here's the high-level ERD for SEI CAFE:

<img src="https://i.imgur.com/weiVjYB.png">

As you can see, we'll need an `Order` model.

We won't need a model for `LineItem` because line items will be embedded within the order it belongs to.

<details><summary>❓ But we still need to create something for <code>LineItem</code> - what is it?</summary>
<p>

**A `lineItemSchema`**

</p>
</details>

#### 💪 Practice Exercise - Stub Up the `Order` Model (3 minutes)

1. Create the module for the model.
2. Stub up the `Order` model all the way up to exporting the compiled model, however, don't define any properties.
3. Include the `timestamps: true` option.

    > Hint: If you get stuck, take a look at another model.

Now we can add the properties for an order:

```js
const orderSchema = new Schema({
  // An order belongs to a user
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  // Embed an order's line items is logical
  lineItems: [lineItemSchema],
  // A user's unpaid order is their "cart"
  isPaid: { type: Boolean, default: false },
}, {
  timestamps: true
});
```

You may be surprised not to find a `total` property, etc. However, a `total` property is calculated by its line items - and we'll see how we do that later in the lesson.

Of course, if this were a real e-commerce application, there certainly would be additional properties like shipping and payments.

Now let's define the `lineItemSchema` being used to embed line items in an order...

## 4. Define the `lineItemSchema`

The `Order --< LineItem` relationship is a perfect use case for embedding because every time we access an order, we need it's line items to compute the total, etc.

As always, the schema used for embedding must be defined before the schema that references it:

```js
// models/order.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Add schema below
const lineItemSchema = new Schema({
  // Set qty to 1 when new item pushed into lineItems
  qty: { type: Number, default: 1 },
  item: itemSchema
}, {
  timestamps: true
});
...
```

Remember that `itemSchema` was defined in it's own module to be DRY? It was previously used in the `Item` model and now its being re-used here:

```js
// models/order.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Require the itemSchema below
const itemSchema = require('./itemSchema');
...
```

Looking at `lineItemSchema`, again, there appears to be some "missing" properties such as the  "extended price" for a line item computed by multiplying the quantity times the price of the item.

These "computed" properties can best be implemented using **virtual properties**...

**note**: It is important to understand what you are asking mongoose to do when you create a virtual field. Every time you fetch data using a scheme with a virtual field, mongoose is going to perform additional actions that are abstracted from the engineer to properly generate virtual fields as requested, this could mean performing additional synchronous actions; mongoose virtual fields must be synchronous, you cannot perform asynchronous actions inside of them. If you make complex synchronous behaviors in your virtual fields in a high volume system, you could unintentionally be adding substantial load to each request. It is best practice to keep your virtual fields as simple as possible and try and do any iteration type behaviors outside of the virtual field when possible. It is also encouraged that you explore mongoose features like lean when performing queries as to avoid unintentionally generating virtual fields you may not need as well as avoiding pulling mongoose models when you may not require them. See documentation on [mongoose lean](https://mongoosejs.com/docs/tutorials/lean.html).  

## 5. Define the Virtual Properties for `orderSchema` and `lineItemSchema`

When Mongoose was introduced, we briefly discussed one of its most useful features - **virtual properties**, or **virtuals** for short.

### What are Virtuals?

Simply put, [Virtuals](https://mongoosejs.com/docs/tutorials/virtuals.html) are computed properties that are not persisted in the document/database.

Let's look at an example of using a virtual property...

### Defining are Virtuals

Consider this simple schema for a `Person` model:

```js
const personSchema = new Schema({
  firstName: String,
  lastName: String
}, {
  timestamps: true
});
```

It's likely that any application using this model would want to regularly use the "full name" of a person.

Without virtuals, the following code snippet would be commonplace:

```js
const fullName = `${person.firstName} ${person.lastName}`;
```

There are downsides to computing values like the above:

- It's dull and boring code.
- It's not DRY, it's likely we would have to repeat the calculation multiple times throughout the app. 
- It's inconvenient because the computed value is not attached to the document itself - it would be more convenient to encapsulate such logic within the document itself, and that's what virtuals do!

Virtuals to the rescue!

```js
const personSchema = new Schema({
  firstName: String,
  lastName: String
}, {
  timestamps: true
});

// Define a getter function for the fullName virtual
personSchema.virtual('fullName').get(function() {
  // The this keyword is the document
  return `${this.firstName} ${this.lastName}`;
});
```

<details><summary>❓ Could we have used an arrow function above?</summary>
<p>

**No, because Mongoose could not have bound the document to `this`.**

</p>
</details>

With the `fullName` virtual now defined, any person document can access it as `personDoc.fullName`!

> Note: It's also possible to define [setter functions for virtuals](https://mongoosejs.com/docs/tutorials/virtuals.html#virtual-setters). 

### Serializing Virtuals

By default, a document's virtual properties are not included when the document is serialized, e.g., sent to the client using Express' `res.json(personDoc)`.

However, in most cases we indeed want the virtuals to be included, and all that takes is another schema option:

```js
const personSchema = new Schema({
  firstName: String,
  lastName: String
}, {
  timestamps: true,
  // Include virtuals when doc is serialized to JSON
  toJSON: { virtuals: true }
});
```

### Adding an `extPrice` Virtual to `lineItemSchema`

Now that we know what virtuals are, let's put them to work in SEI CAFE by adding an `extPrice` virtual that computes the "extended price" for a line item:

```js
// models/order.js

...
const lineItemSchema = new Schema({
  // Set qty to 1 when new item pushed into lineItems
  qty: { type: Number, default: 1 },
  item: itemSchema
}, {
  timestamps: true,
  // Add this to ensure virtuals are serialized
  toJSON: { virtuals: true }
});

// Add an extPrice to the line item
lineItemSchema.virtual('extPrice').get(function () {
  // 'this' is bound to the lineItem subdocument
  return this.qty * this.item.price;
});
...
```

Yes, we can dot into an embedded subdocument and access its properties as is being done with `this.item.price`.

### Adding Virtuals to the `orderSchema`

Here are a few virtuals that will prove helpful when working with order documents:

- `orderTotal`: Used to compute the total of the order.
- `totalQty`: Used to compute the total number of items in the order, taking quantity into consideration.
- `orderId`: Used to compute a user friendly order id from the lengthy `_id` of the order document.

Here they are!

```js
// models/order.js

...
const orderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  lineItems: [lineItemSchema],
  isPaid: { type: Boolean, default: false },
}, {
  timestamps: true,
  // Serialize those virtuals!
  toJSON: { virtuals: true }
});

// Add the following helpful virtuals to order documents
orderSchema.virtual('orderTotal').get(function () {
  return this.lineItems.reduce((total, item) => total + item.extPrice, 0);
});

orderSchema.virtual('totalQty').get(function () {
  return this.lineItems.reduce((total, item) => total + item.qty, 0);
});

orderSchema.virtual('orderId').get(function () {
  return this.id.slice(-6).toUpperCase();
});
...
```

> Note: The `reduce` method strikes again!

Before moving on to implementing code in the React app, now would be a good time to uncomment the `Order` model in **crud-helper.js**.

## 6. Get the User's Cart - Client-Side

**AAU, when viewing the new order page, I want to see my current cart**

### What is a "Cart"

One of the biggest mistakes made by developers when implementing an e-commerce app is thinking a user's shopping cart requires a separate `Cart` model.

Actually, the cart is nothing more than the **user's current unpaid order**! 

As usual, we'll start with the client when implementing "viewing the cart".

### Add the `cart` State

Where definitely going to need state to hold the user's cart within `<NewOrderPage>`.

#### 💪 Practice Exercise - Add `cart` State to `<NewOrderPage>` (1 minute)

- Initialize the `cart` state to `null`

  <details><summary>Just in case...</summary>
  <p>

  ```jsx
  const [cart, setCart] = useState(null);
  ```

  </p>
  </details>

### Fetching the User's Cart 

After the `<NewOrderPage>` component is rendered for the first time, that's the time to get the cart and set state.

<details><summary>❓ The above scenario requires that the code needs to be within a ________?</summary>
<p>

**`useEffect`**<br>**hook with a `[]` dependency array.**

</p>
</details>

We already have the hook we need that includes code that fetches the menu items.

We simply need to add similar code to the existing `useEffect` to get the cart:

```jsx
// NewOrderPage.jsx

...
useEffect(function() {
  async function getItems() {
    const items = await itemsAPI.getAll();
    categoriesRef.current = items.reduce((cats, item) => {
      const cat = item.category.name;
      return cats.includes(cat) ? cats : [...cats, cat];
    }, []);
    setMenuItems(items);
    setActiveCat(items[0].category.name);
  }
  getItems();

  // Load cart (a cart is the unpaid order for the logged in user)
  async function getCart() {
    const cart = await ordersAPI.getCart();
    setCart(cart);
  }
  getCart();
  ...
```

> There's no need to add a separate `useEffect` because the existing `useEffect` has the necessary empty array dependency (`[]`).

The React app isn't compiling because we need an additional `import`.

#### 💪 Practice Exercise - Add the Missing `import` (1 minute)

- Another slam dunk!

  <details><summary>Resist...</summary>
  <p>

  ```jsx
  /// NewOrderPage.jsx
  import * as itemsAPI from '../../utilities/items-api';
  // Add the following import
  import * as ordersAPI from '../../utilities/orders-api';
  ```

  </p>
  </details>

<hr>

The servers are happy, and check this out:

<img src="https://i.imgur.com/FTup22f.png">

Yes, `ordersAPI.getCart()` is already sending the AJAX request to server.

However, the server code is not quite finished...

## 7. Define the `getCart` Static Model Method

The business logic to retrieve the user's cart provides another opportunity to leverage an additional advanced feature of Mongoose - [static methods](https://mongoosejs.com/docs/guide.html#statics).

### What are Mongoose Static Methods?

Mongoose **static methods**, or **statics** for short, are methods callable on models (not documents).

Conceptually, Mongoose statics are no different than the static methods we defined on classes in JS and Python - no surprise since Mongoose models **are** classes.

### Add a `getCart` Static on the `Order` Model

Yes, we could write a Mongoose query in the controller, but it's a good practice to encapsulate business logic on the model itself whenever possible.

Let's add the `getCart` static:

```js
// models/order.js

...
// statics are callable on the model, not an instance (document)
orderSchema.statics.getCart = function(userId) {
  // 'this' is bound to the model (don't use an arrow function)
  // return the promise that resolves to a cart (the user's unpaid order)
  return this.findOneAndUpdate(
    // query
    { user: userId, isPaid: false },
    // update - in the case the order (cart) is upserted
    { user: userId },
    // upsert option creates the doc if it doesn't exist!
    { upsert: true, new: true }
  );
};

module.exports = mongoose.model('Order', orderSchema);
```

> Note: **Upserting** in database lingo means to insert (create) a record/document if it doesn't already exist when attempting an update. 

The comments in the above code say it all - other than "Wow!".

The [`findOneAndUpdate`](https://mongoosejs.com/docs/tutorials/findoneandupdate.html) Mongoose method is very flexible.

## 8. Get the User's Cart - Server-Side

There's already a server-side route defined that maps to a `cart` controller action that's stubbed up.

However, we need to uncomment the first line where the `Order` model is required:

```js
// controllers/api/orders.js

const Order = require('../../models/order');
// const Item = require('../../models/item');
```

Now let's put the fresh `Order.getCart` static method to work:

```js
async function cart(req, res) {
  // A cart is the unpaid order for a user
  const cart = await Order.getCart(req.user._id);
  res.json(cart);
}
```

Now that's what I call a skinny controller!

React Developer Tools confirms that we have our `cart` state!

<img src="https://i.imgur.com/W4tqw6E.png">

Look closely and you'll see that the virtual properties serialized nicely!

## 9. Render the `<OrderDetail>` Component

As discussed, the starter code included a `<OrderDetail>` component ready to display any order passed to it (we'll have some event handling to do later though).

This is what displays when the order is empty (has no line items):

<img src="https://i.imgur.com/Ot4D5yH.png">

#### 💪 Practice Exercise - Make `<OrderDetail>` Render the Cart (2 minutes)

- Take 2 minutes to make the `<OrderDetail>` display the `cart` state.

  > Hint: First examine **OrderDetail.jsx** to see what it expects and then give it up in **NewOrderPage.jsx**.

Excellent!  We're ready to start adding items to orders in Part 2!

## 10. References

- [Virtual Properties in Mongoose Schemas](https://mongoosejs.com/docs/tutorials/virtuals.html)

- [Static Methods on Mongoose Models](https://mongoosejs.com/docs/guide.html#statics)

- [Instance Methods on Mongoose Documents](https://mongoosejs.com/docs/guide.html#methods)

<img src="https://i.imgur.com/zXD7MO1.jpg" width="100%">

# MERN-Stack Shopping Cart - Part 2

## Learning Objectives

|Students Will Be Able To:|
|---|
| Change Client-Side Routes Programmatically |
| Implement "Shopping Cart" Functionality |

## Road Map

1. Setup
2. Review MERN-Stack CRUD Logic & Code Flow
3. Adding Items to the Cart
4. Changing the Quantity Ordered
5. Checking Out an Order
6. References

## 1. Setup

The starter code is the completed code from Part 1:

1. Move into the code-along repo: `cd ~/code/sei-cafe-codealong`
2. Sync with starter code: `git fetch --all` then `git reset --hard origin/main`
3. Open VS Code: `code .`
4. Open a terminal and start the Express server: `nodemon server`
5. Open another terminal and start React's dev server: `npm start`

## 2. Review MERN-Stack CRUD Logic & Code Flow

Prior to implementing adding items to the cart in the next step, let's review the typical logic and code flow when performing CRUD in the MERN-Stack...

<img src="https://i.imgur.com/7OQuhpN.png">

> Note: The code above is not meant to be complete.

### FEATURE A - Load & Display Posts Upon First Render

| STEP | DESCRIPTION |
|---|---|
| `A1` | After the `<PostListPage>` has rendered for the first time, the `useEffect` function runs calling `postsAPI.getAll()` in the **posts-api.js** API module. |
| `A2` | The `getAll()` function delegates making the AJAX request by calling the `sendRequest()` function. |
| `A3` & `A4` | The `sendRequest()` function uses the browser's `fetch` function to send the AJAX request to the server where the request flows through the Express app's middleware until it matches the route. |
| `A5` | The route calls the `postsCtrl.getAll()` controller action which uses the `Post` model to retrieve all posts for the logged in user. |
| `A6` | The controller action responds to the AJAX request using `res.json(posts)` sending back an array of the user's posts - completing the request initiated by `postsAPI.getAll()`. The connecting line is dashed because the posts actually flow back through the `fetch()`, `sendRequest()`, `postsAPI.getAll()` functions. |

### FEATURE B - Create Post When Form is Submitted in Child Component

| STEP | DESCRIPTION |
|---|---|
| `B1` | The user submits the form in `<PostForm>` which causes its `handleSubmit` event handler to execute. |
| `B2` | The event handler, after preventing the default action of the form being submitted to the server, calls the `handleAddPost()` function passed to it as a prop from `<PostListPage>` with an argument of the data for the new post (`content`). |
| `B3` | The `handleAddPost()` function calls `postsAPI.add(postData)` in the **posts-api.js** API module. |
| `B4` | The `add()` function in **posts-api.js** delegates making the AJAX request by calling the `sendRequest()` function. |
| `B5` & `B6` | The `sendRequest()` function uses the browser's `fetch` function to send the AJAX request to the server where the request flows through the Express app's middleware until it matches the route. |
| `B7` | The route calls the `postsCtrl.create()` controller action which uses the `Post` model to create the user's new post. |
| `B8` | The controller action responds to the AJAX request using `res.json(post)` sending back the user's new post - completing the request initiated by `postsAPI.add()`. The connecting line is dashed because the post actually flows back through the `fetch()`, `sendRequest()`, `postsAPI.add()` functions. |

Hungry?...

## 3. Adding Items to the Cart

If we take a look we'll see that `<OrderDetail>` is already mapping the order's line items into an array of `<LineItem>` components to be rendered in its JSX:

```jsx
const lineItems = order.lineItems.map(item =>
  <LineItem
    lineItem={item}
    isPaid={order.isPaid}
    key={item._id}
  />
);
```

<details><summary>❓ Why is the <code>isPaid</code> prop there?  In other words, why would a line item need to know if the order is paid or not? Browse to <a href="https://sei-cafe.herokuapp.com/orders/new">the deployed app</a> for a hint - be sure to have at least one item in your cart.</summary>
<p>

**`<LineItem>` should not allow the quantity to be changed if the order is already paid - so it should not render the `[-]` and `[+]` buttons.**

</p>
</details>

### Adding Items - Start with the UI

Each `<MenuListItem>` component is already rendering an **[ADD]** button that console.logs when clicked, so our work is done here...

### Stub Up a `handleAddToOrder` Function

When a menu item is added to the cart, we'll need to:

- Make an AJAX request to add the item.
- Update the order in the controller action on the server.
- Code the controller action to respond with the updated order.
- Update the `cart` state with the updated order.

Because the `cart` state is in `<NewOrderPage>`, and we need to do more than just update that state, `<NewOrderPage>` is where we should handle the click event of an **[ADD]** button:

```jsx
// NewOrderPage.jsx

...
/*--- Event Handlers --- */
async function handleAddToOrder(itemId) {
  // Baby step
  alert(`add item: ${itemId}`);
}

return (
  ...
```

#### 💪 Practice Exercise - `handleAddToOrder` (5 minutes)

1. Pass the `handleAddToOrder` function as a prop of the same name through the component hierarchy to the `<MenuListItem>` component.
2. In the `<button>` of `<MenuListItem>` invoke `handleAddToOrder` with an argument of `menuItem._id` instead of the `console.log('clicked')`.
3. Verify that the alert displays with the item's id when the **[ADD]** button is clicked.

    <img src="https://i.imgur.com/iRJbuF2.png">

### Adding Items - The Remaining Flow

Here's the remaining flow of logic when an **[ADD]** button is clicked:

- Make an AJAX request that lets the server know that we want to add a menu item to the user's cart. There's already an `addItemToCart` function ready for action in **orders-api.js**.
- A route has already been defined on the server to listen for the AJAX request:
  ```js
  router.post('/cart/items/:id', ordersCtrl.addToCart);
  ```
- The `addToCart` controller function mapped to by the route is stubbed up, however, we still need to write the code to update the user's cart and respond with the updated cart.

### Finish Coding the `handleAddToOrder` Function

Not much to do, so give it a shot...

#### 💪 Practice Exercise - Code `handleAddToOrder` (2 minutes)

- Finish the `handleAddToOrder` function in **NewOrderPage.jsx**:

  ```jsx
  async function handleAddToOrder(itemId) {
    // alert(`add item: ${itemId}`);
    // 1. Call the addItemToCart function in ordersAPI, passing to it the itemId, and assign the resolved promise to a variable named cart.
    // 2. Update the cart state with the updated cart received from the server
  }
  ```

### Add an `addItemToCart` Instance Method to the `orderSchema`

Mongoose schema instance methods are callable on documents - what a great place to add the logic for adding an item to a cart:

```js
// models/order.js

...
// Instance method for adding an item to a cart (unpaid order)
orderSchema.methods.addItemToCart = async function (itemId) {
  // this keyword is bound to the cart (order doc)
  const cart = this;
  // Check if the item already exists in the cart
  const lineItem = cart.lineItems.find(lineItem => lineItem.item._id.equals(itemId));
  if (lineItem) {
    // It already exists, so increase the qty
    lineItem.qty += 1;
  } else {
    // Get the item from the "catalog"
    // Note how the mongoose.model method behaves as a getter when passed one arg vs. two
    const item = await mongoose.model('Item').findById(itemId);
    // The qty of the new lineItem object being pushed in defaults to 1
    cart.lineItems.push({ item });
  }
  // return the save() method's promise
  return cart.save();
};
```

Good stuff in there with lots of comments.  Any questions?

### Code the `addToCart` Controller Action

All that's left is to code the `addToCart` controller action:

```js
// Add the item to the cart
async function addToCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  // The promise resolves to the document, which we already have
  // in the cart variable, so no need to create another variable...
  await cart.addItemToCart(req.params.id); 
  res.json(cart);
}
```

Again, skinny controllers, fat models.

My personal fav:

<img src="https://i.imgur.com/RlkoHhf.png">

## 4. Changing the Quantity Ordered

As you can see, each `<LineItem>` is rendering `[-]` and `[+]` buttons - but we need to implement their functionality.

Implementing this functionality is very similar to what we just did, so forgive me if I enter ninja mode as we enthusiastically write the following code...

### Code the `handleChangeQty` Function

The `handleChangeQty` function belongs in `<NewOrderPage>` just like `handleAddToOrder` we just coded:

```jsx
/*--- Event Handlers --- */
async function handleAddToOrder(itemId) {
  const updatedCart = await ordersAPI.addItemToCart(itemId);
  setCart(updatedCart);
}

// Add this function
async function handleChangeQty(itemId, newQty) {
  const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
  setCart(updatedCart);
}
```

The `setItemQtyInCart` function has already been coded in **orders-api.js**.

Now invoke it from the UI...

### Invoke the `handleChangeQty` Function

We need to:

1. Pass `handleChangeQty` down thru the hierarchy to the `<LineItem>` component - **let's do it and don't let me forget to destructure props all the way down!**
2. Invoke it in the existing `onClick` arrow functions in both the `[-]` and `[+]` buttons. Looking at the signature of `handleChangeQty`, we see that it expects the `itemId` and the `newQty` - let's oblige with the following refactor:

```jsx
// LineItem.jsx

...
<div className="qty" style={{ justifyContent: isPaid && 'center' }}>
  {!isPaid &&
    <button
      className="btn-xs"
      // Refactor
      onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty - 1)}
      >−</button>
    }
  <span>{lineItem.qty}</span>
  {!isPaid &&
    <button
      className="btn-xs"
      // Refactor
      onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty + 1)}
    >+</button>
  }
</div>
...
```

That does it on the client - the ninja is on the way to the server...

### Add the `setItemQty` Instance Method to the `orderSchema`

The `setItemQty` instance method is very similar to the `addItemToCart` we coded a bit ago:

```js
// models/order.js

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

Now let's put it to use...

### Code the `setItemQtyInCart` Controller Action

Just another clean controller action coming up:

```js
// Updates an item in the cart's qty
async function setItemQtyInCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.setItemQty(req.body.itemId, req.body.newQty); 
  res.json(cart);
}
```

Now we're talking!

<img src="https://i.imgur.com/maAYk5t.png">

## 5. Checking Out an Order

One last feature!

**AAU, I want to click a [CHECKOUT] button that pays the order and sends me to the Order History Page.**

Ninja chop!

### Client-Side Code

More of the same, well almost:

```jsx
// NewOrderPage.jsx

...
async function handleCheckout() {
  await ordersAPI.checkout();
  navigate('/orders');
}

return (
  ...
```

We'll discuss the `navigate('/orders')` in a bit, but let's first pass `handleCheckout` to the `<OrderDetail>` component.

Now we can invoke it:

```jsx
// OrderDetail.jsx

...
<button
  className="btn-sm"
  onClick={handleCheckout}
  disabled={!lineItems.length}
>CHECKOUT</button>
...
```

No reason to wrap it with an arrow function - you know why, right?

Onto that `navigate('/orders');` business...

### Programmatic Routing Using the `useNavigate` Hook

There will certainly be times when need to change client-side routes **programmatically**, i.e., using code, instead of in response to the user clicking a `<Link>`.

React Router makes changing client-side routes easy with its `useNavigate` hook...

First we need to import it:

```jsx
// NewOrderPage.jsx

// Update this import
import { Link, useNavigate } from 'react-router-dom';
```

The `useNavigate` hook is a function like all hooks are - invoking it returns a `navigate` function:

```jsx
// NewOrderPage.jsx

...
const categoriesRef = useRef([]);

// Use the navigate function to change routes programmatically
const navigate = useNavigate();
...
```

To change client-side routes, we just invoke the `navigate` function and provide it the path of where you want to go to like we just did to switch to the `/orders` path above:

```jsx
navigate('/orders');
```

We're done on the client, and not far from being done on the server...

### Code the `checkout` Controller Action

Not much logic necessary - all we have to do is update the cart document's `isPaid` property to `true` - so we'll forgo adding a new method to the schema and just put the logic in the controller action:

```js
// Update the cart's isPaid property to true
async function checkout(req, res) {
  const cart = await Order.getCart(req.user._id);
  cart.isPaid = true;
  await cart.save(); 
  res.json(cart);
}
```

> Note: If your future e-commerce apps have additional logic, be sure to code that logic on the model whenever possible.

### Payments

If you need to implement payments for an e-commerce site in the future, a popular to check out is [stripe](https://stripe.com/).

#### Good work hanging in there!!!

On to the hackathon!

<img src="https://i.imgur.com/pUDd9Pv.jpg">

# MERN-Stack Hackathon

## Intro

SEI CAFE has only one page-level component remaining to code: `<OrderHistoryPage>`

Your team has the know how to finish SEI CAFE, right here, right now!

## Setup

### Lightweight approach to git team workflow that will ease mob programming during the hackathon

**ONE Team Member needs to do the following:**

- Create a copy of your `~/code/sei-cafe-codealong` folder and name it something like `~/code/sei-cafe-save`.

- `cd ~/code/sei-cafe-codealong`

- Sync with the starter code in the repo as usual:  `git fetch --all` then `git reset --hard origin/main`

- Go to their **personal** GitHub account and create a new **Public** repo named `mern-hackathon`.

- Click the green **[Code]** button, copy the link, and slack it to the other Team Members.

- Add the other Team Members as Collaborators [following these instructions](https://docs.github.com/en/github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository).

- Once each Team Member (collaborator) accepts the invite emailed to them, they will be able to push directly to the repo - avoiding the necessity to fork the repo and issue pull requests when contributing code!

- Still in your `~/code/sei-cafe-codealong` folder that you synced with earlier, let's remove the current `origin` remote:  `git remote remove origin`.

- Now add a new remote that points to the URL of the new GH repo you provided the other Team Members:  `git remote add origin <paste url here>`

- Run this to push the starter code to the new repo: `git push -u --force origin main`.

- You can rename your `sei-cafe-codealong` folder to `mern-hackathon` if you wish.

Good job!

**All other Team Members do the following:**

- `cd ~/code`

- Clone the repo using the link slacked to them:  `git clone <paste url here>`

- Move into the repo's folder:  `cd mern-hackathon`

- Open the project in VS Code:  `code .`

- The project won't yet run because several required parts of projects are git ignored (**.env**, **node_modules**, etc.).  You'll need to do the following:
  - Copy your **.env** file from **~/code/sei-cafe-codealong** into your new project:  `cp ../sei-cafe-codealong/.env .`
  - **Don't** make any changes in the **.env**, otherwise you won't have menu items and you'll have an invalid token if you change the `SECRET`.
  - Install the Node modules: `npm i`
  - Finally, the Express server needs the **build** folder which holds the production React app that it references in **server.js**.  Build the React app:  `npm run build`

The project should now run - nice!

### Workflow

- Only one Team Member should make changes to the same file.  It's okay to work on DIFFERENT files or add new files.

- Any Team Member can make a commit and push to the repo. However, when any new commit is pushed, ALL other Team Members should immediately `git pull` to update their codebase to the latest version.

## Assignment

Code the `<OrderHistoryPage>` such that it looks (as close as possible) and functions like [the deployed SEI CAFE](https://sei-cafe.herokuapp.com/orders):

<img src="https://i.imgur.com/Evv6VCx.png">

Use the above wireframe/component hierarchy and the deployed app as a guide to implement the following user stories...

### AAU, I want to see a list of summary information for each of my prior orders.

You're basically being asked to implement the **index** functionality for the **orders** resource, .i.e., fetch and render all orders for the logged in user.

> This is a user-centric application, please be sure to render the orders that belong to the logged in user only. 

### AAU, I want to view the details of a previous order when I click on its summary information.

This functionality is similar to the selected category functionality we coded in `<NewOrderPage>`.

> Implementing this user story will be gravy - we already finished coding `<OrderDetail>` and used it in `<NewOrderPage>`. It includes the logic to render an unpaid order (cart in the `<NewOrderPage>`) and a paid order for you in `<OrderHistoryPage>`. 

## Starter Code

The starter code includes a partially coded `<OrderHistoryPage>` that correctly renders the left-hand pane:

<img src="https://i.imgur.com/9dIUV6V.png">

## Hints

- The code we've written together has taught you everything you need to know - be sure to examine the starter code because it provides similar code for everything you need to do.

- Refer to the models for the property names (including virtuals) being rendered. Some data might need to be formatted to match the wireframe.

- Follow the flow when implementing features:
    ```
                                        Order Model
                                             ⇵
    UI → API Module → Server Route → Controller Action
     ⬑ ⟵ ⟵ ⟵ ⟵ ⟵ ⟵ ⟵ ⟵ ⟵ ⟵ JSON Data ↲
    ```

- An `activeOrder` (selected order) functionality is like an `activeCat` (selected category) functionality.

- Don't prioritize the CSS early on. However, examining the CSS of other components will help when the time comes to polish things up.

- Do you remember Lake Arrowhead Homes for Sale where we copied the a `<tr>` element to use as a template for adding a new home to the DOM?  Copying and pasting the React Elements rendered by [the deployed SEI CAFE](https://sei-cafe.herokuapp.com/orders) provides a fantastic starting point for each new component's JSX!

  <img src="https://i.imgur.com/QYrCawZ.png">

## Have Fun!!!

<img src="https://i.imgur.com/pUDd9Pv.jpg">

# SEI Cafe Order History Lab

## Intro

SEI CAFE has only one page-level component remaining to code: `<OrderHistoryPage>`

You have the know how to finish SEI CAFE, right here, right now!

## Setup

We're going to continue to build out SEI CAFE from where the _MERN Shopping Cart Part 2_ lesson left off.

### If Not Finished with _MERN Shopping Cart Part 2_

If you have not yet had a chance to finish that lesson and would like to later, please make a copy of your sei-cafe project in its current state with these commands:

- `cd ~/code/sei-cafe`

- `cp -R sei-cafe sei-cafe-before-history`

### Optionally Sync With _MERN Shopping Cart Part 2_ Code

- `git fetch --all`

- `git reset --hard origin/sync-cafe-14-history-starter`

## 👉 New Starter Code

Let's prep the `<OrderHistoryPage>` so that it correctly renders the left-hand pane...

Update `src/pages/OrderHistoryPage/OrderHistoryPage.jsx` to:

```jsx
import { Link } from 'react-router-dom';
import './OrderHistoryPage.css';
import Logo from '../../components/Logo/Logo';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function OrderHistoryPage({ user, setUser }) {
  return (
    <main className="OrderHistoryPage">
      <aside>
        <Logo />
        <Link to="/orders/new" className="button btn-sm">NEW ORDER</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      {/* Render an OrderList component (needs to be coded) */}

      {/* Render the existing OrderDetail component */}

    </main>
  );
}
```

Create a new `src/pages/OrderHistoryPage/OrderHistoryPage.css` with the following CSS:

```css
.OrderHistoryPage {
  height: 100%;
  display: grid;
  grid-template-columns: 1.6fr 3.5fr 3fr;
  grid-template-rows: 1fr;
  background-color: var(--white);
  border-radius: 2vmin;
}

.OrderHistoryPage aside {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 3vmin 2vmin;
}
```

Finally, the new code depends on the `user` and `setUser` props being passed to `<OrderHistoryPage>` in `App.jsx` in the same way they are being passed to `<NewOrderPage>`:

```jsx
// App.jsx

...
        <Routes>
          <Route path="/orders/new" element={<NewOrderPage user={user} setUser={setUser} />} />
          {/* Add the user & setUser props to the line below */}
          <Route path="/orders" element={<OrderHistoryPage user={user} setUser={setUser} />} />
...
```

The Order History page should now we rendering like the following:

<img src="https://i.imgur.com/9dIUV6V.png">

## Exercises

Code the `<OrderHistoryPage>` such that it looks (as close as possible) and functions like [the deployed SEI CAFE](https://sei-cafe.herokuapp.com/orders):

<img src="https://i.imgur.com/Evv6VCx.png">

Use the above wireframe/component hierarchy and the deployed app as a guide to implement the following user stories...

### AAU, I want to see a list of summary information for each of my prior orders.

You're basically being asked to implement the **index** functionality for the **orders** resource, .i.e., fetch and render all orders for the logged in user.

> 👀 This is a user-centric application, please be sure to render the orders that belong to the logged in user only. 

### AAU, I want to view the details of a previous order when I click on its summary information.

This functionality is similar to the selected category functionality we coded in `<NewOrderPage>`.

> 👀 Implementing this user story will be gravy - we already finished coding `<OrderDetail>` and used it in `<NewOrderPage>`. It includes the logic to render an unpaid order (cart in the `<NewOrderPage>`) and a paid order for you in `<OrderHistoryPage>`. 

## Hints

- The code we've written together has taught you everything you need to know - be sure to examine the starter code because it provides similar code for everything you need to do.

- Refer to the models for the property names (including virtuals) being rendered. Some data might need to be formatted to match the wireframe.

- Follow the flow when implementing features:
    ```
                                        Order Model
                                             ⇵
    UI → API Module → Server Route → Controller Action
     ⬑ ⟵ ⟵ ⟵ ⟵ ⟵ ⟵ ⟵ ⟵ ⟵ ⟵ JSON Data ↲
    ```

- An `activeOrder` (selected order) functionality is like an `activeCat` (selected category) functionality.

- Don't prioritize the CSS early on. However, examining the CSS of other components will help when the time comes to polish things up.

- Use the Elements tab of Chrome DevTools to inspect the DOM elements being rendered by [the deployed SEI CAFE](https://sei-cafe.herokuapp.com/orders).  Copying and pasting the DOM elements rendered will provide a fantastic starting point for each new component's JSX!

  <img src="https://i.imgur.com/QYrCawZ.png">

### This lab is not a deliverable!

## Have Fun!!!

<details>
<summary>
Final Code of SEI CAFE!
</summary>
<hr>

<code>git reset --hard origin/sync-cafe-15-final</code>

<hr>
</details>