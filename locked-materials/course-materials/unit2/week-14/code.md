## To Do with Auth API Example

 <iframe
  src="https://player.cloudinary.com/embed/?public_id=2023-06-19_21-37-44_mpwdzo&cloud_name=seventh-ave-inc&source[sourceTypes][0]=webm%2Fvp9&source[sourceTypes][1]=mp4%2Fh265&source[sourceTypes][2]=mp4&source[sourceTypes][3]=mp4%2Fh264"
  width="640"
  height="360" 
  style="height: auto; width: 100%; aspect-ratio: 640 / 360;"
  allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
  allowfullscreen
  frameborder="0"
></iframe>

[Youtube Video](https://youtu.be/75WNLOU6lNc)
This video is not an official GA Curriculum Video

# Gitignore
```
node_modules/
.env
```

# ENV
```
MONGO_URI=mongodb+srv://user:pass@cluster0.mauz5.mongodb.net/tododonna?retryWrites=true&w=majority
SECRET=be1c8e202b128582e2a76f88ca1c886eebb3c86ba793d7936e5978e9d9b0ae8c
```

# Models

## Todo
```js
const { model, Schema } = require('mongoose')

const todoSchema = new Schema ({
    title: { type: String, required: true },
    completed: { type: Boolean, required: true },
    user: { type: Schema.Types.ObjectId, required: true, ref: 'User' }
}, {
    timestamps: true
})

const Todo = model('Todo', todoSchema)

module.exports = Todo
```
## User
```js
require('dotenv').config()
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name: {type: String, required: true },
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    todos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Todo'}]
}, {
    timestamps: true
})

userSchema.pre('save', async function(next){
    this.isModified('password')? 
    this.password = await bcrypt.hash(this.password, 8):
    null;
    next()
})

userSchema.methods.generateAuthToken = async function(){
    const token = jwt.sign({ _id: this._id }, process.env.SECRET)
    return token
}

const User = mongoose.model('User', userSchema)

module.exports = User
```

# Controllers

## Todo
```js
const Todo = require('../models/todo')
const User = require('../models/user')


exports.create = async function (req, res){
    try {
        req.body.user = req.user._id
        const todo = await Todo.create(req.body)
        req.user.todos?
        req.user.todos.addToSet({ _id: todo._id }):
        req.user.todos = [{_id: todo._id }]
        await req.user.save()
        res.json(todo)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.show = async function (req, res){
    try{
        const todo = await Todo.findOne({ _id: req.params.id })
        res.json(todo)
    } catch(error){
        res.status(400).json({ message: error.message })
    }
}

exports.indexComplete = async function (req, res){
    try{
        const todos = await Todo.find({ completed: true, user: req.user._id })
        res.json(todos)
    } catch(error){
        res.status(400).json({ message: error.message })
    }
}

exports.indexNotComplete = async function (req, res){
    try{
        const todos = await Todo.find({ completed: false,  user: req.user._id })
        res.json(todos)
    } catch(error){
        res.status(400).json({ message: error.message })
    }
}

exports.update = async function(req, res){
    try{
        const todo = await Todo.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        res.json(todo)
    } catch(error){
        res.status(400).json({ message: error.message })
    }
}


exports.delete = async function(req, res){
    try{
        const todo = await Todo.findOneAndDelete({ _id: req.params.id })
        res.sendStatus(204)
    } catch(error){
        res.status(400).json({ message: error.message })
    }
}
```

## User
```js
require('dotenv').config()
const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


exports.auth = async (req, res, next) => {
    try{
        const token = req.header('Authorization').replace('Bearer ', '')
        const data = jwt.verify(token, process.env.SECRET)
        const user = await User.findOne({ _id: data._id })
        if(!user){
            throw new Error('bad credentials')
        }
        req.user = user 
        next()
    } catch(error){
        res.status(401).json({ message: error.message })
    }
}

exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body)
        await user.save()
        const token = await user.generateAuthToken()
        res.json({ user, token })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.loginUser = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if(!user || !await bcrypt.compare(req.body.password, user.password)){
            throw new Error('Invalid Login Credentials')
        } else {
            const token = await user.generateAuthToken()
            res.json({ user, token })
        }
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.updateUser = async (req, res) => {
    try {
        const updates = Object.keys(req.body)
        updates.forEach(update => req.user[update] = req.body[update])
        await req.user.save()
        res.json(user)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        await req.user.deleteOne()
        res.sendStatus(204)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

```

# Routes

## Todo
```js
const express = require('express')
const router = express.Router()
const todoCtrl = require('../controllers/todos')
const userController = require('../controllers/users')


// Index /todos
router.get('/', userController.auth, todoCtrl.indexNotComplete)
// Index /todos/completed
router.get('/completed', userController.auth, todoCtrl.indexComplete)
// Delete /todos/:id
router.delete('/:id', userController.auth, todoCtrl.delete)
// Update /todos/:id
router.put('/:id', userController.auth, todoCtrl.update)
// Create /todos
router.post('/', userController.auth, todoCtrl.create)
// Show /todos/:id
router.get('/:id', userController.auth, todoCtrl.show)

module.exports = router 
```

## User
```js
const express = require('express')
const router = express.Router()
const userController = require('../controllers/users')

router.post('/', userController.createUser)
router.post('/login', userController.loginUser)
router.put('/:id',userController.auth, userController.updateUser)
router.delete('/:id', userController.auth, userController.deleteUser)

module.exports = router
```


# App

```js
const express = require('express')
const morgan = require('morgan')
const userRoutes = require('./routes/users')
const todoRoutes = require('./routes/todos')
const app = express()

app.use(express.json())
app.use(morgan('combined'))
app.use('/users', userRoutes)
app.use('/todos', todoRoutes)

module.exports = app
```

# Server

```js
require('dotenv').config()
const app = require('./app')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => console.log('Mongo is showing love'))

app.listen(PORT, () => {
    console.log(`We in the building ${PORT}`)
})

```

