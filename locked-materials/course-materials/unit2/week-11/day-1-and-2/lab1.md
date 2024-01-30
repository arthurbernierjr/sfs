# Vegetables Continued

<center>

# CRUD, MVC, REST, INDUCES and JSX: Remember where we are going

<div style="display: flex; justify-content: space-between;">

![arthur_node_jsx_diagram_photoshopped](https://media.git.generalassemb.ly/user/15881/files/c2cf4100-2e61-11eb-913c-d8b656fd9709)

![mvc-meme](https://media.git.generalassemb.ly/user/15881/files/24990200-9460-11ea-8f91-a81163b612d5)
</div>
</center>

#### Learning Objectives

- Practicing index and show, new and create routes with express

#### Prerequisites

- JavaScript
- Express
- Node
- JSX

# Build a Vegetable App with JSX-VIEW-ENGINE
- Continue Vegetables App


## Steps
1. Create Edit, Update, and Delete routes for Vegetables
1. Add method-override
1. Create Edit `jsx` Views and update Show.jsx to use delete and update 
1. Add 5 Vegetables using your New Page
1. Go to `http://localhost:3000/vegetables/new`
1. Create a new `vegetable`
1. See the vegetables at `http://localhost:3000/vegetables`
1. Make sure the Show page for vegetable works
1. make sure you can see vegetables in your MongoDB Atlas DB vegetables database
1. Edit & Delete various vegetables to ensure functionality works


## The User Stories

- When a user goes to the `/vegatables` route they will see an `index` of veggies on the page
- When a user clicks on the name of the vegetable, they will be taken to that vegetable's `show` page, and will see the vegatables's name and color and if its READYTOEAT and buttons to delete or edit the vegetable.
- When a user goes to `/vegetables/new` a user sees a form that allows them to create a brand new vegetable, and then redirects the user back to `/vegetables`
- When a user goes to `/vegetables/:id/edit` a user sees a form that allows them to update a pre-existing vegetable, and then redirects the user back to `/vegetables/:id` Show page for that fruit



## Hints
```js
/views/fruits/Index.jsx
/views/vegetables/Index.jsx

res.render('vegetables/Index', {...})

res.render('fruits/Index', {...})
```
