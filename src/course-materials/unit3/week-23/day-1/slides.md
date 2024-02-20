---
track: "Unit 3"
title: "Mern Stack"
week: 23
day: 1
type: "lecture"
topics: "Mern Stack"
---

# Agenda

1. We will build a Blog Application that will allow us to Create a new Blog, See A List of Blogs We Created, Update an Individual Blog, Delete the Blog Bost
1. First we will create a Model with Mongoose Schema and Mongoose model
1. We will then create a Blog Controller with our Model that will contain 5 Rest API Routes Create, Index, Show, Delete and Update
1. We will update our server to have a catch all that will allow us to always send our React App to the user when they hit a route that the server doesn't have
1. Then we will build a React FrontEnd with React Router, We will create a HomePage that has all the Blogs Listed, A ShowPage to show each individual Blog Post, An EditPage that lets us edit a Blog Post, A New Page That Lets Us Actually Create New Blogs
1. Edit Page will also let us Delete the Blog Post

## Getting Started
1. if you haven't already `sudo npm i -g big-poppa-code-react-starter`
1. cd into software_classwork/unit_3
1. run `lets-code` and follow prompts
1. use what you already know to setup your .env with your MONGO_URI and SECRET
1. create model for blogs and user in a one to many relationship (User has many blogs)
1. create router for blogs and user
1. create controller for blogs and user
1. update `app-server.js` for your app object
1. update your `server.js` to require your app-server.js and database
1. do not delete your catch all route for your public/index.html or your static public code.
1. Build the components on the frontend
1. Then do the same work for Comments and make the Comments children of Blog, comments should be an array on the Blog model and it should be in a One To Many relationship
1. For this iteration people who leave comments are not logged in users (this just makes it faster to complete this task)

## Adding Comments

![](https://www.dropbox.com/s/lpk32aya3fv6a86/Screen%20Shot%202021-02-05%20at%208.19.57%20PM.png?dl=1)

`name` is the name of the person leaving a comment

## Part 1: The Backend - Breakout Rooms(no instructor help will be provided, you and your group should be able to do this with NO ASSISTANCE, and solve your own bugs)

**Learn:** We are starting with the backend, an integral part of the MERN stack, which includes MongoDB, Express.js, React.js, and Node.js. This is where our web application's data will be stored, managed, and interacted with via a database and a server. 

**Apply:** Start by following the 'Getting Started' instructions to set up the backend. Your first task is to create a Mongoose Schema and a Mongoose Model, which will serve as the blueprint for your blog application's data.

**Develop:** Now, you will develop a Blog Controller using your Model. This controller should contain five REST API routes: Create, Index, Show, Delete, and Update.

- `GET /api/blogs`: Get all blogs items.
- `POST /api/blogs`: Create a new blog item.
- `GET /api/blogs/:id`: Get a specific blog item.
- `PUT /api/blogs/:id`: Update a specific blog item if the user is who made the blog.
- `DELETE /api/blogs/:id`: Delete a specific blog item if the user is who made the blog.

**Practice:** Test all your routes to ensure they're functioning as they should. Remember, errors in the backend can lead to significant issues in your web application's overall functionality.

## Part 2: The Components and Web App - Live with Instructor

**Learn:** After setting up the backend, we move to the frontend, where we'll use React to create the pages and components that form our web application.

**Apply:** Together, we will set up React Router to manage the navigation within our application. We'll create a HomePage to display all blogs, a ShowPage for each individual blog post, an EditPage to modify blog posts, and a NewPage for crafting new blog entries.

**Develop:** As a team, we'll begin building these components. Consider how each component will interact with the backend and how it will manage state.

**Practice:** Together, we'll fine-tune these components, ensuring each works as intended, and that our application as a whole is interactive and functional.

### Rendering Dynamic Routes

<details><summary>View Rendering Dyanmic Routes</summary>
We were able to get our basic routing structure down! Go us! Now we want to make dynamic routes. What are dynamic routes?

Think about a blog. With a blog a user should be able to create a blog post and the blog post will be able to be accessed from a unique URL. In our application, we need to mirror this concept by allowing dynamic routes to be created.

Can you think of how we might do this?

If you said `.map()` then you are correct! Let’s take for instance the mock data below:

```js

let mockBlog = [
    {
        title: 'First Blog Post',
        description: 'My first blog post!'
    },
    {
        title: 'Second Blog Post',
        description: 'My Second blog post!'
    },
    {
        title: 'Third Blog Post',
        description: 'My Third blog post!'
    }
];

```

If we wanted to turn this data into routes and dynamically display each blog posts data, we could map over the array and render Routes!

Then we could pass each newly rendered component a prop with the content for the blog post! We will need to create a new component for the blog posts. We could title it `BlogPost`.

Finally, we would have to use map again to create the navigational links!


```js
{state.data.map((post,index) => {
    return <Route path={`/${post.title}`} component={() => <BlogPost content={post} />} />
})}
```


</details>

1. __Edit/Update__ , __Show__ and __Delete__ will all happen on the same page.
1. __Index__ and __Create__ will both happen on the same page

## Using the Update Functionality with UseRef
```js
  const titleInput = useRef(null);
	const bodyInput = useRef(null);


const handleUpdate = async e => {
		e.preventDefault();
		try {
			const response = await fetch(`/api/blogs/${props.match.params.id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					title: titleInput.current.value,
					body: bodyInput.current.value
				})
			});
			const data = await response.json();
			setBlog(data);
		} catch (error) {
			console.error(error);
		}
	};
```

```js
  <form
    style={{ display: 'flex', flexDirection: 'column' }}
    onSubmit={handleUpdate}
  >
    <label>
      {' '}
      Title:{' '}
      <input type="text" ref={titleInput} defaultValue={blog.title} />
    </label>
    <label>
      {' '}
      Body: <input type="text" ref={bodyInput} defaultValue={blog.body} />
    </label>
    <input type="submit" value="Update MicroBlog" />
  </form>
```

### Use Ternary and Conditional Rendering to show either the UpdateForm or the Blog Post
### Create showUpdate State and BlogPost and UpdateForm Components

```js
<>
    <button onClick={() => setShowUpdate(!showUpdate) }>{
      showUpdate? 'View Blog Post' : 'Update Blog Post'
    }</button>
  {
    showUpdate? <BlogPost blog={blog} handleDelete={handleDelete} /> : <UpdateForm blog={blog}/>
  }
</>
```


## Part 3: The Styling with SASS - Solo by yourself (you can ask questions of instructor or teammates)

**Learn:** Styling is an essential part of web development, enhancing user experience and the overall aesthetic appeal of our application. For this part, we'll be using SASS, a robust CSS preprocessor.

**Apply:** Begin by organizing your SASS files. Create separate stylesheets for each component, utilizing the advanced features of SASS, like variables and mixins if you choose.

**Develop:** Apply the styles you've defined to your components, aiming to make your application both user-friendly and visually appealing.

**Practice:** Review your design and ensure it's responsive and consistent across all pages and components.

## Part 4: Deploying To Digital Ocean - Live with Instructor

**Learn:** The final step of our development process is deployment, where we make our application accessible to users by hosting it on a server. We'll use Heroku for this, a platform known for its streamlined deployment process.

**Apply:** We'll initiate the process by creating a new app on Heroku and linking it to our code repository. Then, we'll follow Heroku's deployment process to make our application live.

**Develop:** Now, let's work together to deploy your application. We'll guide you through setting up your Heroku app, linking it with your code, and deploying the application.

**Practice:** Once the app is deployed, it's time for a thorough test. Check every component, verify all pages display correctly, and that your application runs smoothly. Congratulations on successfully building and deploying a MERN stack application!