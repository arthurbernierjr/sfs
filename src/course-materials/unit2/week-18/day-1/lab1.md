# Group Deliverable Task: Building an Optimized API with Express, Mongoose, and User Authentication

## Objectives

- Create an API using Express.js and Mongoose that follows the MVC architecture.
- Implement user authentication in your API.
- Serve some static files using `express.static`.
- Write tests for your API using Jest and Supertest.
- Analyze your API's Latency & Throughput and find ways to optimize it.
- Document your findings and the steps you took to optimize your API's performance.
- Fix any bugs or issues that come up when you run your tests.
 
## Instructions

1. **Set up your project**: Create a new Node.js project and install the necessary dependencies: `Express`, `Mongoose`, `bcryptjs`, `jsonwebtoken`, `Jest`, `Supertest`, `morgan`, and any other packages you think you'll need.

2. **Design your API**: Your API should have at least the following endpoints: `GET /users`, `POST /users`, `PUT /users/:id`, `DELETE /users/:id`, `POST /users/login`, and `POST /users/logout`. Feel free to add more endpoints if you'd like.

3. **Follow the MVC architecture**: Structure your project following the Model-View-Controller (MVC) architecture. 

4. **Implement user authentication**: Use JWT (JSON Web Tokens) for authentication. Make sure the `PUT`, `DELETE`, and `POST /users/login` routes require authentication.

5. **Serve static files**: Add a route in your API that serves static files using `express.static`. This could be an `images` directory with some pictures, a `public` directory with an HTML file and a CSS file, or something similar.

6. **Write tests for your API**: Create a test file for your user routes and use Jest and Supertest to write tests for each endpoint. Remember to test both success and failure cases.

7. **Analyze and optimize your API's performance**: Use `morgan` or another middleware to log the Latency & Throughput of your API. Try to find ways to optimize its performance, and document your findings and the steps you took.

8. **Fix any issues**: Run your tests and fix any bugs or issues that come up. Make sure all your tests pass before you submit your project.

## Submission

Commit your source code, tests, and a brief report (as a PDF or Markdown file) to a GitHub repository. Your report should include:

- An overview of your API.
- A description of how you implemented user authentication.
- An explanation of how you structured your project following the MVC architecture.
- A summary of your findings when analyzing and optimizing your API's performance.
- Any challenges you faced during the project and how you overcame them.

Submit the GitHub repository in via google form as week 17 theoretical.

## Evaluation Criteria

- Proper implementation of the MVC architecture.
- Correct use of Express.js and Mongoose to build an API.
- Successful implementation of user authentication.
- Serving static files using `express.static`.
- Clear and thorough tests for your API using Jest and Supertest.
- Detailed analysis and optimization of your API's Latency & Throughput.
- Well-structured, clear, and concise report.
- All tests should pass.



# Static Files

## Create a static files folder for CSS/JS

- CSS/JS code doesn't change with server-side data
- We can toss any static files into a 'public' directory
    - static means unchanging
    - dynamic means changing depending on data

Let's set up a directory for our static code:

1. Create a directory called `public`
1. Inside the `public` directory create a directory called `css`
1. Inside the `css` directory, create an `app.css` file
1. Put some CSS in the `app.css` file
1. Inside server.js place the following near the top:


## CSS

```css
@import url('https://fonts.googleapis.com/css?family=Comfortaa|Righteous');

body {
  background: url(https://images.clipartlogo.com/files/istock/previews/8741/87414357-apple-seamless-pastel-colors-pattern-fruits-texture-background.jpg);
  margin: 0;
  font-family: 'Comfortaa', cursive;
}

h1 {
  font-family: 'Righteous', cursive;
  background: antiquewhite;
  margin:0;
  margin-bottom: .5em;
  padding: 1em;
  text-align: center;
}

a {
  color: orange;
  text-decoration: none;
  text-shadow: 1px 1px 1px black;
  font-size: 1.5em;
  background: rgba(193, 235, 187, .9);
}

a:hover {
  color: ghostwhite;
}

li {
  list-style: none;
}

li a {
  color: mediumseagreen;
}

input[type=text] {
  padding: .3em;
}

input[type=submit] {
  padding: .3em;
  color: orange;
  background: mediumseagreen;
  font-size: 1em;
  border-radius: 10%;
}
```
## Add to server.js or app.js depending on how you arranged your application

```javascript
app.use(express.static('public')); //tells express to try to match requests with files in the directory called 'public'
```

You then could access this file by going to `http://localhost:3000/app.css` if your server is running

## Resources

- [Express.js Documentation](https://expressjs.com/)
- [Mongoose Documentation](https://mongoosejs.com/docs/guide.html)
- [JWT Authentication Tutorial](https://jwt.io/introduction/)
- [Jest Documentation](https://jestjs.io/)
- [Supertest Documentation](https://github.com/visionmedia/supertest)
- [Morgan Middleware](https://www.npmjs.com/package/morgan)
- [Express.js Static Files](https://expressjs.com/en/starter/static-files.html)