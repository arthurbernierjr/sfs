# Express Testing Lab

Today, you will be adding automated testing to an Express API. You should have tests for each of the endpoints:

* GET `/gifs` which will list out all gifs
* GET `/gifs/:id` which will get a gif with a specific ID
* POST `/gifs` which will add a new gif and return that new gif
* PUT `gifs/:id` which will update a gif and return that gif
* DELETE `gifs/:id` which will delete a gif

Since this is an `API` do not add views and jsx and also use `res.json` instead of `res.render` render is for view engines and server side rendering, and res.json is for returning json for an api.

Also do not use `express.urlencoded` use `express.json` as your middleware.

You can also use postman.

Remember API ====> JSON, SERVER-SIDE-RENDERED HTML =====> Some View Engine (EJS, JSX, Handlebars, PUG) etc


same code your used to see index route below

```js
app.get('/gifs', async (req, res) => {
  try{
    const gifs = await Gif.find({})
    res.json(gifs)
  }catch(error){
    res.status(200).json({ message: error.message })
  }
})
```