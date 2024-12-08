Absolutely! Let me provide the **complete tree structure** for both the **backend** and **frontend** with all files organized by folders. I’ll ensure no files are left out this time.

---

# **Full Project Directory Tree**

## **Backend Folder Structure**  
```
backend/
│
├── src/
│   ├── config/
│   │   └── db.ts                           # MongoDB Connection
│   │
│   ├── controllers/
│   │   ├── todoController.ts               # CRUD Logic for Todos
│   │   └── openaiController.ts             # AI API Logic
│   │
│   ├── models/
│   │   └── Todo.ts                         # Mongoose Schema for Todos
│   │
│   ├── routes/
│   │   ├── todoRoutes.ts                   # Routes for Todos
│   │   └── openaiRoutes.ts                 # Routes for AI Features
│   │
│   ├── services/
│   │   └── openaiService.ts                # OpenAI Helper Logic
│   │
│   ├── tests/
│   │   ├── todo.test.ts                    # Tests for CRUD Operations
│   │   └── openai.test.ts                  # Tests for AI API
│   │
│   ├── app.ts                              # Main Express Application
│   └── server.ts                           # Entry Point for the Backend
│
├── .env                                    # Environment Variables
├── tsconfig.json                           # TypeScript Configuration
└── package.json                            # Dependencies and Scripts
```

---

## **Frontend Folder Structure**  
```
frontend/
│
├── src/
│   ├── api/
│   │   └── todoApi.ts                      # API Calls for Todos and AI
│   │
│   ├── components/
│   │   ├── AddTodo.tsx                     # Form to Add a New Todo
│   │   ├── TodoItem.tsx                    # Individual Todo Component
│   │   ├── TodoList.tsx                    # Todo List Component
│   │   └── __tests__/
│   │       ├── AddTodo.test.tsx            # Tests for AddTodo Component
│   │       ├── TodoItem.test.tsx           # Tests for TodoItem Component
│   │       └── TodoList.test.tsx           # Tests for TodoList Component
│   │
│   ├── pages/
│   │   ├── TodoPage.tsx                    # Main Todo Page
│   │   └── AiToolsPage.tsx                 # AI Features Page
│   │
│   ├── routes.tsx                          # Application Routes
│   ├── queryClient.ts                      # React Query Client Setup
│   ├── App.tsx                             # Application Layout & Navigation
│   ├── index.tsx                           # React App Entry Point
│   └── setupTests.ts                       # Jest Setup for Tests
│
├── .env                                    # Environment Variables
├── tsconfig.json                           # TypeScript Configuration
└── package.json                            # Dependencies and Scripts
```

---

## **Listing of All Folders and Files**

Here is the folder-by-folder listing of all files for both **backend** and **frontend**:

---

### **Backend Folder Breakdown**

#### **1. Folder: `src/config/`**  
- `db.ts`  

#### **2. Folder: `src/controllers/`**  
- `todoController.ts`  
- `openaiController.ts`  

#### **3. Folder: `src/models/`**  
- `Todo.ts`  

#### **4. Folder: `src/routes/`**  
- `todoRoutes.ts`  
- `openaiRoutes.ts`  

#### **5. Folder: `src/services/`**  
- `openaiService.ts`  

#### **6. Folder: `src/tests/`**  
- `todo.test.ts`  
- `openai.test.ts`  

#### **7. Root of `src/`**  
- `app.ts`  
- `server.ts`  

#### **8. Backend Root Files**  
- `.env`  
- `tsconfig.json`  
- `package.json`  

---

### **Frontend Folder Breakdown**

#### **1. Folder: `src/api/`**  
- `todoApi.ts`  

#### **2. Folder: `src/components/`**  
- `AddTodo.tsx`  
- `TodoItem.tsx`  
- `TodoList.tsx`  

#### **3. Folder: `src/components/__tests__/`**  
- `AddTodo.test.tsx`  
- `TodoItem.test.tsx`  
- `TodoList.test.tsx`  

#### **4. Folder: `src/pages/`**  
- `TodoPage.tsx`  
- `AiToolsPage.tsx`  

#### **5. Root of `src/`**  
- `routes.tsx`  
- `queryClient.ts`  
- `App.tsx`  
- `index.tsx`  
- `setupTests.ts`  

#### **6. Frontend Root Files**  
- `.env`  
- `tsconfig.json`  
- `package.json`  

---

### **Backend: Example `.env` File**  
Here is the example `.env` file for the **backend**, including variables used across the code. This file matches all the environment variables referenced in the project.

---

#### **`.env` File**
```env
# Server Port
PORT=5000

# MongoDB Connection String
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/todolist

# OpenAI API Key
OPENAI_API_KEY=your_openai_api_key_here
```

---

### **Explanation of Variables**

1. **`PORT`**  
   - Specifies the port on which the backend server will run.  
   - **Usage**: In `server.ts`, the server listens on this port.  
     ```typescript
     const PORT = process.env.PORT || 5000;
     app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
     ```

2. **`MONGO_URI`**  
   - Connection string for **MongoDB Atlas** (or a locally hosted MongoDB database).  
   - It includes the `<username>` and `<password>` placeholders, which need to be replaced with your actual MongoDB credentials.  
   - **Usage**: In `db.ts`, Mongoose uses this to connect to MongoDB.  
     ```typescript
     const conn = await mongoose.connect(process.env.MONGO_URI!);
     ```

3. **`OPENAI_API_KEY`**  
   - API key for authenticating requests to the **OpenAI API**.  
   - You must obtain this key from [OpenAI's platform](https://platform.openai.com/signup).  
   - **Usage**: In `openaiService.ts`, this key is passed to the OpenAI client configuration.  
     ```typescript
     const configuration = new Configuration({
       apiKey: process.env.OPENAI_API_KEY,
     });
     ```

---

---

### **Frontend: Example `.env` File**  

The **frontend** also requires an `.env` file for configuring API URLs.

#### **`frontend/.env` File**
```env
# Backend API URL
REACT_APP_BACKEND_URL=http://localhost:5000
```

---

### **Explanation of Variables**

1. **`REACT_APP_BACKEND_URL`**  
   - Specifies the base URL of the **backend server**.  
   - React uses this to send API requests for tasks and AI-powered features.  
   - **Usage**: In `todoApi.ts`, the API calls append routes to this URL.  
     ```tsx
     const API_URL = process.env.REACT_APP_BACKEND_URL + '/api/todos';
     ```

---

### **Key Notes**
1. Both backend and frontend `.env` files are loaded via respective libraries:  
   - **Backend**: `dotenv` library (automatically reads `.env` files).  
   - **Frontend**: React uses `REACT_APP_` as a prefix for environment variables.  

2. Replace placeholders like `<username>` and `<password>` in `MONGO_URI` with real credentials.  

---
### **1. File: `src/app.ts`**  
**Purpose**: Sets up the **main Express application** with middleware and routes for both Todo API and AI API.

```typescript
import express from 'express';
import cors from 'cors';
import todoRoutes from './routes/todoRoutes';
import openaiRoutes from './routes/openaiRoutes';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health Check Route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// API Routes
app.use('/api/todos', todoRoutes); // Routes for CRUD operations
app.use('/api/ai', openaiRoutes);  // Routes for AI-powered features

export default app;
```

---

### **Explanation**:
1. **`express.json()`**: Middleware to parse incoming JSON requests.  
2. **`cors()`**: Middleware to allow Cross-Origin Resource Sharing (useful for frontend-backend communication).  
3. **Routes**:  
   - `'/api/todos'` → Handles CRUD operations using `todoRoutes.ts`.  
   - `'/api/ai'` → Handles AI-related operations using `openaiRoutes.ts`.  
4. **Health Check**: A simple `GET /` route to verify the server is running.  

---

### **2. File: `src/server.ts`**  
**Purpose**: Entry point for the backend server. It connects to MongoDB, imports the main Express app, and starts the server.

```typescript
import dotenv from 'dotenv';
import app from './app';
import connectDB from './config/db';

// Load environment variables
dotenv.config();

// Server Configuration
const PORT = process.env.PORT || 5000;

// Connect to MongoDB and Start the Server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch((error) => {
  console.error('Database connection failed:', error);
});
```

---

### **Explanation**:
1. **Environment Variables**: `dotenv.config()` loads the `.env` file to access variables like `PORT` and `MONGO_URI`.  
2. **`connectDB()`**: Connects to the MongoDB database defined in `src/config/db.ts`.  
3. **`app.listen(PORT)`**: Starts the Express server on the specified port.  
4. **Error Handling**: If MongoDB fails to connect, the server logs an error and exits.  

---

### **How It Works**:
- **`server.ts`** is the entry point of the backend.  
- It first connects to the MongoDB database.  
- If the connection succeeds, it starts the Express server and makes the APIs available.  
- `app.ts` is imported as the core app configuration (routes, middleware).

---

### **1. File: `src/config/db.ts`**  
**Purpose**: Establishes the connection to the MongoDB database using Mongoose.

---

```typescript
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const connectDB = async () => {
  try {
    // Connect to MongoDB using MONGO_URI from .env
    const conn = await mongoose.connect(process.env.MONGO_URI!);

    // Log a success message if connection is successful
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    // Log the error message and exit the process
    console.error(`Error: ${(error as Error).message}`);
    process.exit(1);
  }
};

export default connectDB;
```

---

### **Explanation**:  
1. **`dotenv.config()`**:  
   Loads environment variables from the `.env` file, ensuring `MONGO_URI` is available.

2. **`mongoose.connect()`**:  
   Connects to the MongoDB database using the connection string provided in `MONGO_URI`.

3. **Error Handling**:  
   If the connection fails, the server logs the error message and exits the process (`process.exit(1)`).

4. **Success Log**:  
   On a successful connection, it logs the **host** to indicate which MongoDB instance was connected.

---

### **How It Works**:
- This function is imported into `server.ts`.  
- Before starting the server, `connectDB()` ensures a successful MongoDB connection.  
- The `MONGO_URI` is defined in the `.env` file as:  
   ```env
   MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/todolist
   ```

---
### **File: `src/models/Todo.ts`**  
**Purpose**: Defines the **Mongoose schema** and model for the Todo items.

---

```typescript
import mongoose, { Schema, Document } from 'mongoose';

// Define the interface for a Todo document
export interface ITodo extends Document {
  title: string;
  completed: boolean;
}

// Create the Mongoose schema for Todos
const TodoSchema: Schema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required'], // Validation: Title is mandatory
  },
  completed: {
    type: Boolean,
    default: false, // Default value for "completed" is false
  },
});

// Export the Mongoose model for Todo
export default mongoose.model<ITodo>('Todo', TodoSchema);
```

---

### **Explanation**:

1. **`ITodo` Interface**:  
   - Defines the structure of a Todo document.  
   - Ensures type safety when using Todo objects in TypeScript.

2. **`TodoSchema`**:  
   - **`title`**:  
     - Type: `String`.  
     - Validation: Required field.  
   - **`completed`**:  
     - Type: `Boolean`.  
     - Default: `false` (new tasks are incomplete by default).

3. **`mongoose.model<ITodo>`**:  
   - Creates a Mongoose model named `Todo`.  
   - The model will interact with the `todos` collection in MongoDB.

---

### **Usage in Controllers**:
The `Todo` model is imported in `src/controllers/todoController.ts` for performing CRUD operations:

```typescript
import Todo from '../models/Todo';

// Example: Creating a new Todo
const todo = new Todo({ title: 'Learn TypeScript' });
await todo.save();
```

---
### **1. File: `src/controllers/todoController.ts`**  
**Purpose**: Handles CRUD operations for Todo items.

---

```typescript
import { Request, Response } from 'express';
import Todo from '../models/Todo';

// @desc    Get all todos
// @route   GET /api/todos
export const getTodos = async (req: Request, res: Response) => {
  try {
    const todos = await Todo.find(); // Fetch all todos from the database
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch todos' });
  }
};

// @desc    Create a new todo
// @route   POST /api/todos
export const createTodo = async (req: Request, res: Response) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: 'Title is required' });
  }

  try {
    const todo = new Todo({ title }); // Create a new Todo instance
    await todo.save(); // Save the todo to the database
    res.status(201).json(todo); // Return the created todo
  } catch (error) {
    res.status(500).json({ message: 'Failed to create todo' });
  }
};

// @desc    Delete a todo by ID
// @route   DELETE /api/todos/:id
export const deleteTodo = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const todo = await Todo.findByIdAndDelete(id); // Find and delete by ID
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.status(200).json({ message: 'Todo deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete todo' });
  }
};
```

---

### **Explanation**:
1. **`getTodos`**:  
   - Fetches all Todos from the database.  
   - Returns status `200` with the list of todos.

2. **`createTodo`**:  
   - Validates the request body for a `title`.  
   - Creates and saves a new Todo document.  
   - Returns status `201` with the created Todo.

3. **`deleteTodo`**:  
   - Deletes a Todo document based on the `id` passed in the URL.  
   - Returns status `200` if successful, or `404` if not found.

---

### **2. File: `src/controllers/openaiController.ts`**  
**Purpose**: Provides AI-powered features like task descriptions using the OpenAI API.

---

```typescript
import { Request, Response } from 'express';
import { generateTaskDescription, generateTaskSchedule, suggestSubtasks } from '../services/openaiService';

// @desc    Generate a task description using OpenAI
// @route   POST /api/ai/description
export const getTaskDescription = async (req: Request, res: Response) => {
  const { task } = req.body;

  if (!task) return res.status(400).json({ message: 'Task is required' });

  try {
    const description = await generateTaskDescription(task);
    res.status(200).json({ description });
  } catch (error) {
    res.status(500).json({ message: 'Failed to generate task description' });
  }
};

// @desc    Generate a task schedule using OpenAI
// @route   POST /api/ai/schedule
export const getTaskSchedule = async (req: Request, res: Response) => {
  const { tasks, totalTime } = req.body;

  if (!tasks || !totalTime) return res.status(400).json({ message: 'Tasks and totalTime are required' });

  try {
    const schedule = await generateTaskSchedule(tasks, totalTime);
    res.status(200).json({ schedule });
  } catch (error) {
    res.status(500).json({ message: 'Failed to generate task schedule' });
  }
};

// @desc    Suggest subtasks for a main task using OpenAI
// @route   POST /api/ai/subtasks
export const getSubtasks = async (req: Request, res: Response) => {
  const { task } = req.body;

  if (!task) return res.status(400).json({ message: 'Task is required' });

  try {
    const subtasks = await suggestSubtasks(task);
    res.status(200).json({ subtasks });
  } catch (error) {
    res.status(500).json({ message: 'Failed to generate subtasks' });
  }
};
```

---

### **Explanation**:
1. **`getTaskDescription`**:  
   - Takes a task description input (`task`) from the user.  
   - Uses the **OpenAI API** (via `openaiService.ts`) to generate a detailed description.  
   - Returns the generated description.

2. **`getTaskSchedule`**:  
   - Accepts a list of tasks and available time (`totalTime`) from the user.  
   - Calls OpenAI to generate a schedule.  
   - Returns the structured schedule.

3. **`getSubtasks`**:  
   - Takes a main task as input.  
   - Calls OpenAI to generate **subtasks** that help complete the main task.  
   - Returns the suggested subtasks as an array.

---

### **Usage in Routes**:
Both controllers are imported into their respective route files:  
- `todoController.ts` → `todoRoutes.ts`  
- `openaiController.ts` → `openaiRoutes.ts`  

---
### **1. File: `src/routes/todoRoutes.ts`**  
**Purpose**: Defines the routes for CRUD operations related to the Todo items.

---

```typescript
import { Router } from 'express';
import { getTodos, createTodo, deleteTodo } from '../controllers/todoController';

const router = Router();

/**
 * @route   GET /api/todos
 * @desc    Fetch all todos
 * @access  Public
 */
router.get('/', getTodos);

/**
 * @route   POST /api/todos
 * @desc    Create a new todo
 * @access  Public
 */
router.post('/', createTodo);

/**
 * @route   DELETE /api/todos/:id
 * @desc    Delete a todo by ID
 * @access  Public
 */
router.delete('/:id', deleteTodo);

export default router;
```

---

### **Explanation**:
1. **`router.get('/')`**:  
   - Maps the `GET` request to fetch all Todos.  
   - Handler: `getTodos` from `todoController.ts`.

2. **`router.post('/')`**:  
   - Maps the `POST` request to create a new Todo.  
   - Handler: `createTodo` from `todoController.ts`.

3. **`router.delete('/:id')`**:  
   - Maps the `DELETE` request to remove a Todo by its `id`.  
   - Handler: `deleteTodo` from `todoController.ts`.

---

### **2. File: `src/routes/openaiRoutes.ts`**  
**Purpose**: Defines routes for AI-powered features using the OpenAI API.

---

```typescript
import { Router } from 'express';
import { getTaskDescription, getTaskSchedule, getSubtasks } from '../controllers/openaiController';

const router = Router();

/**
 * @route   POST /api/ai/description
 * @desc    Generate a task description
 * @access  Public
 */
router.post('/description', getTaskDescription);

/**
 * @route   POST /api/ai/schedule
 * @desc    Generate a schedule based on tasks and available time
 * @access  Public
 */
router.post('/schedule', getTaskSchedule);

/**
 * @route   POST /api/ai/subtasks
 * @desc    Generate subtasks for a main task
 * @access  Public
 */
router.post('/subtasks', getSubtasks);

export default router;
```

---

### **Explanation**:
1. **`router.post('/description')`**:  
   - Maps the `POST` request to generate a task description.  
   - Handler: `getTaskDescription` from `openaiController.ts`.

2. **`router.post('/schedule')`**:  
   - Maps the `POST` request to generate a task schedule based on available time.  
   - Handler: `getTaskSchedule` from `openaiController.ts`.

3. **`router.post('/subtasks')`**:  
   - Maps the `POST` request to generate subtasks for a given main task.  
   - Handler: `getSubtasks` from `openaiController.ts`.

---

### **Usage in `app.ts`**:
Both route files are connected to the Express app in `src/app.ts`:

```typescript
import todoRoutes from './routes/todoRoutes';
import openaiRoutes from './routes/openaiRoutes';

app.use('/api/todos', todoRoutes);
app.use('/api/ai', openaiRoutes);
```

---

### **How They Work Together**:
1. The **`todoRoutes.ts`** file manages CRUD operations for Todo items.  
2. The **`openaiRoutes.ts`** file handles AI-powered functionalities like generating descriptions, schedules, and subtasks.  
3. Both are mounted on the `/api` prefix via the Express app configuration.

---
### **File: `src/services/openaiService.ts`**  
**Purpose**: Handles the logic for interacting with the **OpenAI API** to generate task descriptions, schedules, and subtasks.

---

```typescript
import { Configuration, OpenAIApi } from 'openai';
import dotenv from 'dotenv';

dotenv.config();

// Initialize OpenAI API with the API key from environment variables
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

/**
 * @desc Generates a description for a given task
 * @param task The task for which a description is needed
 * @returns A string containing the task description
 */
export const generateTaskDescription = async (task: string): Promise<string> => {
  const prompt = `Write a brief and concise description for the following task: "${task}"`;

  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt,
    max_tokens: 50,
    temperature: 0.7,
  });

  return response.data.choices[0]?.text?.trim() || 'No description generated.';
};

/**
 * @desc Generates a task schedule based on tasks and available time
 * @param tasks An array of tasks
 * @param totalTime The total time (in hours) available to complete the tasks
 * @returns A string containing the suggested task schedule
 */
export const generateTaskSchedule = async (tasks: string[], totalTime: number): Promise<string> => {
  const taskList = tasks.join(', ');
  const prompt = `Given the following tasks: ${taskList}, and ${totalTime} hours available, create a simple and efficient schedule.`;

  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt,
    max_tokens: 150,
    temperature: 0.7,
  });

  return response.data.choices[0]?.text?.trim() || 'No schedule generated.';
};

/**
 * @desc Generates a list of subtasks for a given main task
 * @param task The main task that needs to be broken into subtasks
 * @returns An array of strings containing suggested subtasks
 */
export const suggestSubtasks = async (task: string): Promise<string[]> => {
  const prompt = `List 3 subtasks to complete the following main task: "${task}"`;

  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt,
    max_tokens: 100,
    temperature: 0.7,
  });

  const suggestions = response.data.choices[0]?.text?.trim().split('\n') || [];
  return suggestions.map((subtask) => subtask.replace(/^\d+\.\s/, '').trim());
};
```

---

### **Explanation**:
1. **Initialization**:  
   - The `Configuration` object is initialized with the `OPENAI_API_KEY` from the `.env` file.  
   - The `OpenAIApi` client is created to communicate with OpenAI's API.

2. **`generateTaskDescription`**:  
   - Accepts a single task as input.  
   - Sends a prompt to OpenAI to generate a concise description.  
   - **Example Input**: `"Clean the kitchen"`  
   - **Example Output**: `"This task involves tidying up the counters, washing dishes, and sweeping the floor."`

3. **`generateTaskSchedule`**:  
   - Accepts a list of tasks and the total time available.  
   - Sends a structured prompt to OpenAI to generate a suggested task schedule.  
   - **Example Input**:  
     - Tasks: `["Clean the kitchen", "Read a book", "Exercise"]`  
     - Time: `2` hours  
   - **Example Output**:  
     ```
     1. Clean the kitchen - 30 minutes
     2. Read a book - 1 hour
     3. Exercise - 30 minutes
     ```

4. **`suggestSubtasks`**:  
   - Breaks a main task into a list of subtasks.  
   - Sends a prompt to OpenAI asking for subtasks.  
   - **Example Input**: `"Prepare for a presentation"`  
   - **Example Output**:  
     - `["Create slides", "Practice speech", "Gather supporting data"]`

---

### **How It’s Used**:
The functions are imported into the `openaiController.ts` file to handle the OpenAI routes:

**Example**:
```typescript
import { generateTaskDescription, generateTaskSchedule, suggestSubtasks } from '../services/openaiService';

// Used in routes like POST /api/ai/description
const description = await generateTaskDescription("Clean the kitchen");
```

---

### **Dependencies**:
1. **OpenAI Node.js SDK**: Installed via:
   ```bash
   npm install openai
   ```
2. **Environment Variable**:  
   - `OPENAI_API_KEY` → Defined in the `.env` file.  
   - Ensure it is valid for the OpenAI API.

---

### **1. File: `src/tests/todo.test.ts`**  
**Purpose**: Tests the CRUD operations for the **Todo API** endpoints.

---

```typescript
import request from 'supertest';
import app from '../app';
import mongoose from 'mongoose';
import Todo from '../models/Todo';
import dotenv from 'dotenv';

dotenv.config();

beforeAll(async () => {
  // Connect to a test database
  await mongoose.connect(process.env.MONGO_URI!);
});

afterAll(async () => {
  // Clean up the test database and close the connection
  await Todo.deleteMany();
  await mongoose.connection.close();
});

describe('Todo API Endpoints', () => {
  let todoId: string;

  // Test GET /api/todos
  it('should fetch all todos (initially empty)', async () => {
    const res = await request(app).get('/api/todos');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual([]);
  });

  // Test POST /api/todos
  it('should create a new todo', async () => {
    const newTodo = { title: 'Test Todo Item' };
    const res = await request(app).post('/api/todos').send(newTodo);

    expect(res.statusCode).toEqual(201);
    expect(res.body.title).toBe(newTodo.title);
    expect(res.body.completed).toBe(false);

    todoId = res.body._id; // Save the ID for future tests
  });

  // Test GET /api/todos after adding a todo
  it('should fetch all todos (contains one item)', async () => {
    const res = await request(app).get('/api/todos');
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBe(1);
    expect(res.body[0].title).toBe('Test Todo Item');
  });

  // Test DELETE /api/todos/:id
  it('should delete a todo by ID', async () => {
    const res = await request(app).delete(`/api/todos/${todoId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('Todo deleted successfully');
  });

  it('should fetch all todos (should now be empty)', async () => {
    const res = await request(app).get('/api/todos');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual([]);
  });
});
```

---

### **Explanation**:
1. **Setup and Teardown**:  
   - **`beforeAll`**: Connects to the MongoDB test database.  
   - **`afterAll`**: Cleans up the database and closes the connection.

2. **Tests**:  
   - `GET /api/todos`: Verifies that the endpoint returns an empty array initially.  
   - `POST /api/todos`: Tests creating a new Todo item.  
   - `GET /api/todos`: Verifies the new Todo was added.  
   - `DELETE /api/todos/:id`: Tests deleting the Todo item and ensures the database is empty afterward.

---

### **2. File: `src/tests/openai.test.ts`**  
**Purpose**: Tests the AI-powered routes for generating task descriptions, schedules, and subtasks.

---

```typescript
import request from 'supertest';
import app from '../app';
import dotenv from 'dotenv';

dotenv.config();

describe('OpenAI API Endpoints', () => {
  // Test POST /api/ai/description
  it('should generate a task description', async () => {
    const res = await request(app)
      .post('/api/ai/description')
      .send({ task: 'Clean the kitchen' });

    expect(res.statusCode).toEqual(200);
    expect(res.body.description).toBeDefined();
    expect(typeof res.body.description).toBe('string');
  });

  // Test POST /api/ai/schedule
  it('should generate a task schedule', async () => {
    const res = await request(app)
      .post('/api/ai/schedule')
      .send({ tasks: ['Clean the kitchen', 'Read a book'], totalTime: 2 });

    expect(res.statusCode).toEqual(200);
    expect(res.body.schedule).toBeDefined();
    expect(typeof res.body.schedule).toBe('string');
  });

  // Test POST /api/ai/subtasks
  it('should generate subtasks for a main task', async () => {
    const res = await request(app)
      .post('/api/ai/subtasks')
      .send({ task: 'Prepare for a presentation' });

    expect(res.statusCode).toEqual(200);
    expect(res.body.subtasks).toBeDefined();
    expect(Array.isArray(res.body.subtasks)).toBe(true);
    expect(res.body.subtasks.length).toBeGreaterThan(0);
  });

  // Test Error: Missing Input
  it('should return a 400 error if task is missing', async () => {
    const res = await request(app).post('/api/ai/description').send({});
    expect(res.statusCode).toEqual(400);
    expect(res.body.message).toBe('Task is required');
  });
});
```

---

### **Explanation**:
1. **Test Cases**:  
   - **`POST /api/ai/description`**: Verifies that OpenAI generates a valid task description.  
   - **`POST /api/ai/schedule`**: Ensures OpenAI provides a structured schedule.  
   - **`POST /api/ai/subtasks`**: Checks that OpenAI returns subtasks as an array.  
   - **Error Test**: Ensures the server returns a `400` error if the input is invalid.

2. **Dependencies**:  
   - The tests rely on a valid **`OPENAI_API_KEY`** being set in the `.env` file.  
   - The **OpenAI API** is tested with actual API calls.

---

### **Test Execution**:
Run the tests with the following command:

```bash
npm test
```

---

### **1. File: `tsconfig.json`**  
**Purpose**: Configures the TypeScript compiler settings for the backend project.

---

```json
{
  "compilerOptions": {
    "target": "es6",                        // ECMAScript target version
    "module": "commonjs",                   // Output module format
    "rootDir": "./src",                     // Root directory of source files
    "outDir": "./dist",                     // Output directory for compiled files
    "esModuleInterop": true,                // Enables compatibility with ES Modules
    "strict": true,                         // Enable all strict type-checking options
    "skipLibCheck": true,                   // Skip checking of declaration files
    "forceConsistentCasingInFileNames": true // Ensures consistent file casing
  },
  "include": ["src/**/*"],                  // Include all files under src/
  "exclude": ["node_modules", "dist"]       // Exclude compiled and dependency directories
}
```

---

### **Explanation**:
1. **`target`**: Specifies the JavaScript version (`es6`) for the compiled code.
2. **`module`**: Sets the module system to `commonjs` for Node.js compatibility.
3. **`rootDir`**: The directory containing source TypeScript files.
4. **`outDir`**: The directory where compiled JavaScript files will be output (`dist`).
5. **`esModuleInterop`**: Allows importing ES Modules in a CommonJS environment.
6. **`strict`**: Enables strict mode for better type-checking and safety.
7. **`skipLibCheck`**: Speeds up the compilation process by skipping `.d.ts` files.
8. **`include`/`exclude`**: Specifies which files TypeScript should include or ignore.

---

### **2. File: `package.json`**  
**Purpose**: Manages project dependencies, scripts, and metadata for the backend.

---

```json
{
  "name": "todolist-backend",
  "version": "1.0.0",
  "description": "A full-stack TodoList backend server using Express, MongoDB, and OpenAI API.",
  "main": "dist/server.js",
  "scripts": {
    "dev": "ts-node-dev --respawn --transpile-only src/server.ts", // Development server
    "build": "tsc",                                               // Build TypeScript files
    "start": "node dist/server.js",                               // Start compiled server
    "test": "jest"                                                // Run tests with Jest
  },
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "mongoose": "^7.0.0",
    "openai": "^3.2.1"
  },
  "devDependencies": {
    "@types/cors": "^2.8.12",
    "@types/express": "^4.17.15",
    "@types/jest": "^29.0.3",
    "@types/node": "^18.0.0",
    "jest": "^29.0.0",
    "supertest": "^6.3.0",
    "ts-node-dev": "^2.0.0",
    "typescript": "^5.0.0"
  },
  "keywords": ["todo", "express", "mongodb", "openai", "typescript"],
  "author": "Your Name",
  "license": "MIT"
}
```

---

### **Explanation**:
1. **`scripts`**:
   - **`dev`**: Runs the development server using `ts-node-dev` for hot-reloading.  
   - **`build`**: Compiles TypeScript files into JavaScript using `tsc`.  
   - **`start`**: Runs the compiled server from the `dist` folder.  
   - **`test`**: Runs Jest tests.

2. **Dependencies**:
   - **`express`**: Web framework for building the server.  
   - **`mongoose`**: ODM (Object-Document Mapper) for MongoDB.  
   - **`openai`**: SDK for interacting with OpenAI's API.  
   - **`cors`**: Middleware for handling Cross-Origin Resource Sharing.  
   - **`dotenv`**: Manages environment variables.

3. **Dev Dependencies**:
   - **`typescript`**: TypeScript compiler.  
   - **`ts-node-dev`**: Development tool for running TypeScript files with hot-reloading.  
   - **`jest`** and **`supertest`**: Testing tools.  
   - **`@types/...`**: Type definitions for libraries to enable TypeScript support.

4. **`main`**: Entry point for the production server.

5. **`keywords`, `author`, `license`**: Metadata fields for the project.

---

### **How It Works**:
1. **Development**: Use `npm run dev` to start the server with TypeScript hot-reloading.  
2. **Production**: Use `npm run build` to compile TypeScript and `npm start` to run the production server.  
3. **Testing**: Use `npm test` to run unit tests.

---

### **File: `src/api/todoApi.ts`**  
**Purpose**: Handles API calls from the frontend to interact with the backend's Todo API and AI-powered endpoints.

---

```typescript
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_BACKEND_URL; // Defined in frontend `.env` file

// API endpoint for Todo operations
const TODOS_API_URL = `${API_BASE_URL}/api/todos`;
// API endpoint for AI operations
const AI_API_URL = `${API_BASE_URL}/api/ai`;

/**
 * @desc Fetch all todos
 * @returns A list of todos from the backend
 */
export const fetchTodos = async () => {
  const response = await axios.get(TODOS_API_URL);
  return response.data;
};

/**
 * @desc Create a new todo
 * @param title - Title of the todo item
 * @returns The created todo object
 */
export const createTodo = async (title: string) => {
  const response = await axios.post(TODOS_API_URL, { title });
  return response.data;
};

/**
 * @desc Delete a todo by ID
 * @param id - ID of the todo to be deleted
 * @returns A success message from the backend
 */
export const deleteTodo = async (id: string) => {
  const response = await axios.delete(`${TODOS_API_URL}/${id}`);
  return response.data;
};

/**
 * @desc Generate a description for a task using OpenAI
 * @param task - The task description to enhance
 * @returns Generated task description from the backend
 */
export const generateTaskDescription = async (task: string) => {
  const response = await axios.post(`${AI_API_URL}/description`, { task });
  return response.data.description;
};

/**
 * @desc Generate a task schedule based on available time
 * @param tasks - Array of tasks
 * @param totalTime - Total time (in hours) available to complete tasks
 * @returns Generated schedule from the backend
 */
export const generateTaskSchedule = async (tasks: string[], totalTime: number) => {
  const response = await axios.post(`${AI_API_URL}/schedule`, { tasks, totalTime });
  return response.data.schedule;
};

/**
 * @desc Generate subtasks for a given main task using OpenAI
 * @param task - The main task
 * @returns Array of subtasks generated from the backend
 */
export const generateSubtasks = async (task: string) => {
  const response = await axios.post(`${AI_API_URL}/subtasks`, { task });
  return response.data.subtasks;
};
```

---

### **Explanation**:

1. **`API_BASE_URL`**:  
   - The base URL for the backend API, loaded from the `.env` file:  
     ```env
     REACT_APP_BACKEND_URL=http://localhost:5000
     ```

2. **Todo API**:
   - **`fetchTodos`**: Sends a `GET` request to fetch all Todo items.  
   - **`createTodo`**: Sends a `POST` request to create a new Todo with the provided title.  
   - **`deleteTodo`**: Sends a `DELETE` request to remove a Todo by its ID.

3. **AI API**:
   - **`generateTaskDescription`**: Sends a `POST` request to generate a detailed description for a given task.  
   - **`generateTaskSchedule`**: Sends a `POST` request with tasks and time to get a schedule.  
   - **`generateSubtasks`**: Sends a `POST` request with a task to get a list of subtasks.

4. **Usage**:
   - Each function sends HTTP requests using **Axios**.  
   - They return the relevant **data** field from the backend response.

---

### **Example Usage in Components**:

1. **Fetching Todos**:
   ```tsx
   import { fetchTodos } from '../api/todoApi';

   const todos = await fetchTodos();
   console.log(todos);
   ```

2. **Creating a Todo**:
   ```tsx
   import { createTodo } from '../api/todoApi';

   const newTodo = await createTodo('Write a blog post');
   console.log(newTodo);
   ```

3. **Generating Task Description**:
   ```tsx
   import { generateTaskDescription } from '../api/todoApi';

   const description = await generateTaskDescription('Clean the kitchen');
   console.log(description);
   ```

---

### **Dependencies**:
1. **Axios**: Installed via:  
   ```bash
   npm install axios
   ```

2. **Environment Variable**:  
   Ensure the following is set in your `.env` file:
   ```env
   REACT_APP_BACKEND_URL=http://localhost:5000
   ```

---

This file serves as the **single source of truth** for all API interactions, keeping the frontend clean and organized.

### **1. File: `src/components/AddTodo.tsx`**  
**Purpose**: A form component for adding new todos to the list.

---

```tsx
import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createTodo } from '../api/todoApi';

const AddTodo: React.FC = () => {
  const [title, setTitle] = useState('');
  const queryClient = useQueryClient();

  // Mutation for adding a new todo
  const mutation = useMutation(createTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']); // Refetch the todos list
      setTitle(''); // Clear the input field
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      mutation.mutate(title); // Trigger the API call
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: '0.5rem', marginRight: '0.5rem', width: '250px' }}
      />
      <button
        type="submit"
        disabled={mutation.isLoading}
        style={{ padding: '0.5rem' }}
      >
        {mutation.isLoading ? 'Adding...' : 'Add Todo'}
      </button>
    </form>
  );
};

export default AddTodo;
```

---

### **Explanation**:
1. **State Management**:  
   - `title` tracks the value of the input field.  
   - Cleared after successfully adding a Todo.

2. **React Query**:  
   - **`useMutation`**: Handles the creation of a new Todo using the `createTodo` API call.  
   - **`onSuccess`**: Invalidates the `todos` query to refetch the updated list.

3. **Form Submission**:  
   - Prevents default behavior and triggers the mutation if input is not empty.  

---

### **2. File: `src/components/TodoItem.tsx`**  
**Purpose**: Renders a single todo item with a delete button and a checkbox for marking completion.

---

```tsx
import React from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { Check, Trash } from 'phosphor-react';

interface TodoItemProps {
  id: string;
  title: string;
  completed: boolean;
  onDelete: () => void;
  onToggle: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  title,
  completed,
  onDelete,
  onToggle,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.5rem 1rem',
        border: '1px solid #ddd',
        borderRadius: '5px',
        marginBottom: '0.5rem',
        backgroundColor: completed ? '#f0f0f0' : '#fff',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Checkbox.Root checked={completed} onCheckedChange={onToggle}>
          <Checkbox.Indicator>
            <Check size={18} />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
          {title}
        </span>
      </div>
      <button
        onClick={onDelete}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: 'red',
        }}
      >
        <Trash size={20} />
      </button>
    </div>
  );
};

export default TodoItem;
```

---

### **Explanation**:
1. **Props**:  
   - `id`, `title`, `completed`: Data for the todo item.  
   - `onDelete`, `onToggle`: Event handlers for deleting or toggling completion.

2. **Radix UI Checkbox**:  
   - Used for marking a task as completed.  
   - **`Checkbox.Indicator`**: Displays a check icon when the box is checked.

3. **Phosphor Icons**:  
   - **`Check`**: For the checkbox.  
   - **`Trash`**: For the delete button.

4. **Styling**:  
   - Highlights completed tasks with a grey background and strikethrough text.  

---

### **3. File: `src/components/TodoList.tsx`**  
**Purpose**: Fetches and displays the list of todos using React Query.

---

```tsx
import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchTodos, deleteTodo, createTodo } from '../api/todoApi';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
  const queryClient = useQueryClient();

  // Fetch Todos
  const { data: todos = [], isLoading, error } = useQuery(['todos'], fetchTodos);

  // Mutation for deleting a Todo
  const deleteMutation = useMutation(deleteTodo, {
    onSuccess: () => queryClient.invalidateQueries(['todos']),
  });

  // Mutation for toggling a Todo's completion status
  const toggleMutation = useMutation(
    async (todo: any) => {
      return createTodo({ ...todo, completed: !todo.completed });
    },
    {
      onSuccess: () => queryClient.invalidateQueries(['todos']),
    }
  );

  if (isLoading) return <p>Loading todos...</p>;
  if (error) return <p>Failed to load todos.</p>;

  return (
    <div>
      {todos.map((todo: any) => (
        <TodoItem
          key={todo._id}
          id={todo._id}
          title={todo.title}
          completed={todo.completed}
          onDelete={() => deleteMutation.mutate(todo._id)}
          onToggle={() => toggleMutation.mutate(todo)}
        />
      ))}
    </div>
  );
};

export default TodoList;
```

---

### **Explanation**:
1. **React Query**:  
   - **`useQuery`**: Fetches the list of Todos from the backend using `fetchTodos`.  
   - **`useMutation`**:  
     - Handles deletion with `deleteTodo`.  
     - Toggles the completion status by re-creating a Todo with modified `completed` status.

2. **Loading and Error States**:  
   - Shows a loading message while fetching data.  
   - Displays an error message if fetching fails.

3. **Mapping Todos**:  
   - Each todo is rendered using the `TodoItem` component.  
   - Handlers for deleting and toggling are passed as props.

---

### **How It All Connects**:
- **`AddTodo`**: Allows users to add new todos.  
- **`TodoList`**: Fetches and displays the list of todos.  
- **`TodoItem`**: Handles individual todo actions like delete and toggle.

---
### **1. File: `src/components/__tests__/AddTodo.test.tsx`**  
**Purpose**: Tests the `AddTodo` component to ensure it works as expected when adding new todos.

---

```tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AddTodo from '../AddTodo';
import { createTodo } from '../../api/todoApi';

jest.mock('../../api/todoApi'); // Mock the API calls

const queryClient = new QueryClient();

describe('AddTodo Component', () => {
  it('renders input and button', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <AddTodo />
      </QueryClientProvider>
    );

    expect(screen.getByPlaceholderText(/add a new task/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /add todo/i })).toBeInTheDocument();
  });

  it('calls createTodo API and clears input on submission', async () => {
    const mockedCreateTodo = createTodo as jest.Mock;
    mockedCreateTodo.mockResolvedValue({ title: 'Test Todo', completed: false });

    render(
      <QueryClientProvider client={queryClient}>
        <AddTodo />
      </QueryClientProvider>
    );

    const input = screen.getByPlaceholderText(/add a new task/i);
    const button = screen.getByRole('button', { name: /add todo/i });

    fireEvent.change(input, { target: { value: 'Test Todo' } });
    fireEvent.click(button);

    expect(mockedCreateTodo).toHaveBeenCalledWith('Test Todo');
    expect(input).toHaveValue('');
  });
});
```

---

### **Explanation**:
1. **Mocking**:  
   - The `createTodo` function is mocked to avoid real API calls.  

2. **Test Cases**:  
   - **Render Test**: Verifies the input and button render correctly.  
   - **Submission Test**: Ensures the API is called with correct data and the input clears after submission.

---

### **2. File: `src/components/__tests__/TodoItem.test.tsx`**  
**Purpose**: Tests the `TodoItem` component for toggling completion and deleting a todo.

---

```tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoItem from '../TodoItem';

describe('TodoItem Component', () => {
  const mockOnDelete = jest.fn();
  const mockOnToggle = jest.fn();

  const todoProps = {
    id: '1',
    title: 'Test Todo',
    completed: false,
    onDelete: mockOnDelete,
    onToggle: mockOnToggle,
  };

  it('renders the todo item with title and delete button', () => {
    render(<TodoItem {...todoProps} />);

    expect(screen.getByText('Test Todo')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('calls onDelete when delete button is clicked', () => {
    render(<TodoItem {...todoProps} />);

    fireEvent.click(screen.getByRole('button'));
    expect(mockOnDelete).toHaveBeenCalled();
  });

  it('calls onToggle when checkbox is clicked', () => {
    render(<TodoItem {...todoProps} />);

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(mockOnToggle).toHaveBeenCalled();
  });
});
```

---

### **Explanation**:
1. **Mock Functions**:  
   - `mockOnDelete` and `mockOnToggle` simulate the handlers passed as props.  

2. **Test Cases**:  
   - **Render Test**: Ensures the title and delete button render correctly.  
   - **Event Tests**:  
     - Verifies the delete handler triggers when the button is clicked.  
     - Ensures the toggle handler triggers when the checkbox is clicked.

---

### **3. File: `src/components/__tests__/TodoList.test.tsx`**  
**Purpose**: Tests the `TodoList` component to verify data fetching and rendering behavior.

---

```tsx
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TodoList from '../TodoList';
import { fetchTodos } from '../../api/todoApi';

jest.mock('../../api/todoApi'); // Mock the API calls

const queryClient = new QueryClient();

describe('TodoList Component', () => {
  const mockTodos = [
    { _id: '1', title: 'Todo 1', completed: false },
    { _id: '2', title: 'Todo 2', completed: true },
  ];

  it('renders loading state initially', () => {
    (fetchTodos as jest.Mock).mockReturnValue(new Promise(() => {})); // Simulate pending promise

    render(
      <QueryClientProvider client={queryClient}>
        <TodoList />
      </QueryClientProvider>
    );

    expect(screen.getByText(/loading todos/i)).toBeInTheDocument();
  });

  it('renders todos after fetching data', async () => {
    (fetchTodos as jest.Mock).mockResolvedValue(mockTodos);

    render(
      <QueryClientProvider client={queryClient}>
        <TodoList />
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(screen.getByText('Todo 1')).toBeInTheDocument();
      expect(screen.getByText('Todo 2')).toBeInTheDocument();
    });
  });

  it('handles error state', async () => {
    (fetchTodos as jest.Mock).mockRejectedValue(new Error('Failed to fetch'));

    render(
      <QueryClientProvider client={queryClient}>
        <TodoList />
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(screen.getByText(/failed to load todos/i)).toBeInTheDocument();
    });
  });
});
```

---

### **Explanation**:
1. **Mocking**:  
   - `fetchTodos` is mocked to simulate data fetching.  

2. **Test Cases**:  
   - **Loading State**: Ensures "Loading todos..." is shown when data is still loading.  
   - **Success State**: Verifies that the list of todos renders correctly after fetching.  
   - **Error State**: Tests that an error message is displayed when fetching fails.

---

### **How to Run These Tests**:
1. Ensure **Jest** and **React Testing Library** are installed.  
2. Run the tests with the following command:  
   ```bash
   npm test
   ```

---

### **Summary**:
- **`AddTodo.test.tsx`**: Tests form behavior and API interaction.  
- **`TodoItem.test.tsx`**: Tests UI rendering and event handling for a single todo item.  
- **`TodoList.test.tsx`**: Tests data fetching, loading, success, and error states for the todo list.

### **1. File: `src/pages/TodoPage.tsx`**  
**Purpose**: This is the main page for managing todos. It integrates the `AddTodo` form and the `TodoList` components.

---

```tsx
import React from 'react';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';

const TodoPage: React.FC = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Todo List</h1>
      <AddTodo /> {/* Component for adding new todos */}
      <TodoList /> {/* Component for displaying the todo list */}
    </div>
  );
};

export default TodoPage;
```

---

### **Explanation**:
1. **Integration**: Combines two key components:  
   - **`AddTodo`**: Handles adding new todo items.  
   - **`TodoList`**: Fetches and displays the list of todos.

2. **Styling**:  
   - Basic inline styles to center content and add spacing.  
   - Title "Todo List" is centered with some margin.

3. **Purpose**: Serves as the primary page where users manage their tasks.

---

### **2. File: `src/pages/AiToolsPage.tsx`**  
**Purpose**: This page allows users to use AI-powered tools for generating task descriptions, schedules, and subtasks.

---

```tsx
import React, { useState } from 'react';
import { generateTaskDescription, generateTaskSchedule, generateSubtasks } from '../api/todoApi';

const AiToolsPage: React.FC = () => {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [subtasks, setSubtasks] = useState<string[]>([]);
  const [tasks, setTasks] = useState<string[]>([]);
  const [totalTime, setTotalTime] = useState<number>(0);
  const [schedule, setSchedule] = useState('');

  const handleGenerateDescription = async () => {
    if (task.trim()) {
      const result = await generateTaskDescription(task);
      setDescription(result);
    }
  };

  const handleGenerateSubtasks = async () => {
    if (task.trim()) {
      const result = await generateSubtasks(task);
      setSubtasks(result);
    }
  };

  const handleGenerateSchedule = async () => {
    if (tasks.length > 0 && totalTime > 0) {
      const result = await generateTaskSchedule(tasks, totalTime);
      setSchedule(result);
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>AI Tools</h1>

      {/* Task Description Section */}
      <div style={{ marginBottom: '2rem' }}>
        <h2>Generate Task Description</h2>
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={{ padding: '0.5rem', width: '80%' }}
        />
        <button
          onClick={handleGenerateDescription}
          style={{ marginLeft: '0.5rem', padding: '0.5rem' }}
        >
          Generate
        </button>
        {description && <p style={{ marginTop: '1rem' }}>Description: {description}</p>}
      </div>

      {/* Subtasks Section */}
      <div style={{ marginBottom: '2rem' }}>
        <h2>Generate Subtasks</h2>
        <button onClick={handleGenerateSubtasks} style={{ padding: '0.5rem' }}>
          Generate Subtasks
        </button>
        {subtasks.length > 0 && (
          <ul style={{ marginTop: '1rem' }}>
            {subtasks.map((subtask, index) => (
              <li key={index}>{subtask}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Schedule Section */}
      <div style={{ marginBottom: '2rem' }}>
        <h2>Generate Task Schedule</h2>
        <textarea
          placeholder="Enter tasks separated by commas..."
          onChange={(e) => setTasks(e.target.value.split(',').map((t) => t.trim()))}
          style={{ padding: '0.5rem', width: '80%', height: '80px' }}
        />
        <input
          type="number"
          placeholder="Enter total time (hours)..."
          onChange={(e) => setTotalTime(Number(e.target.value))}
          style={{ padding: '0.5rem', marginLeft: '0.5rem', width: '20%' }}
        />
        <button onClick={handleGenerateSchedule} style={{ marginTop: '1rem', padding: '0.5rem' }}>
          Generate Schedule
        </button>
        {schedule && <p style={{ marginTop: '1rem' }}>Schedule: {schedule}</p>}
      </div>
    </div>
  );
};

export default AiToolsPage;
```

---

### **Explanation**:

1. **State Management**:  
   - Tracks inputs and results for each AI tool:  
     - `task` → User input for descriptions or subtasks.  
     - `description` → Result from the AI-generated task description.  
     - `subtasks` → List of subtasks generated.  
     - `tasks` and `totalTime` → Inputs for generating a task schedule.  
     - `schedule` → Generated task schedule output.

2. **API Calls**:  
   - Uses the **`generateTaskDescription`**, **`generateSubtasks`**, and **`generateTaskSchedule`** functions from `todoApi.ts`.

3. **Input Fields**:  
   - Text inputs and a textarea allow users to provide tasks, subtasks, or schedules.  

4. **Output**:  
   - Displays the generated description, subtasks, or schedule dynamically.

5. **Styling**:  
   - Inline styles are used for simple layout and spacing.

---

### **Summary**:
- **`TodoPage.tsx`**: Main page for managing todos. Combines `AddTodo` and `TodoList` components.  
- **`AiToolsPage.tsx`**: Provides AI tools for task descriptions, subtasks, and schedules. Integrates with OpenAI endpoints via `todoApi.ts`.

---

### **1. File: `src/routes.tsx`**  
**Purpose**: Defines the application's routes using **TanStack/React Router**.

---

```tsx
import { createBrowserRouter, RouterProvider, Outlet } from '@tanstack/react-router';
import TodoPage from './pages/TodoPage';
import AiToolsPage from './pages/AiToolsPage';
import App from './App';

// Define the main routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <TodoPage /> },
      { path: '/ai-tools', element: <AiToolsPage /> },
    ],
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
```

---

### **Explanation**:
1. **`createBrowserRouter`**: Configures the React Router with routes for `TodoPage` and `AiToolsPage`.
2. **Parent Route** (`App`): The layout for shared elements like navigation.  
3. **Child Routes**:  
   - `/` → `TodoPage` (main Todo List).  
   - `/ai-tools` → `AiToolsPage` (AI-powered tools).  
4. **`RouterProvider`**: Makes the router available throughout the app.

---

### **2. File: `src/queryClient.ts`**  
**Purpose**: Configures **React Query** for managing server state.

---

```tsx
import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default queryClient;
```

---

### **Explanation**:
1. **`QueryClient`**: Initializes a React Query client instance.
2. **Usage**: The `queryClient` will be provided to the app via `QueryClientProvider` in `index.tsx`.

---

### **3. File: `src/App.tsx`**  
**Purpose**: Serves as the root layout for the app, including navigation and routing.

---

```tsx
import React from 'react';
import { Link, Outlet } from '@tanstack/react-router';

const App: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          padding: '1rem',
          borderBottom: '1px solid #ddd',
        }}
      >
        <Link to="/" style={{ textDecoration: 'none', fontWeight: 'bold' }}>
          Todo List
        </Link>
        <Link to="/ai-tools" style={{ textDecoration: 'none', fontWeight: 'bold' }}>
          AI Tools
        </Link>
      </nav>
      <main style={{ padding: '2rem' }}>
        <Outlet /> {/* Renders child components */}
      </main>
    </div>
  );
};

export default App;
```

---

### **Explanation**:
1. **Navigation**: Provides links to `/` (Todo List) and `/ai-tools` (AI Tools).  
2. **`Outlet`**: Acts as a placeholder for child routes.  
3. **Styling**: Simple inline styles for layout and navigation bar.

---

### **4. File: `src/index.tsx`**  
**Purpose**: Entry point for the React application.

---

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import Routes from './routes';
import queryClient from './queryClient';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Routes /> {/* Provides the app's routing */}
    </QueryClientProvider>
  </React.StrictMode>
);
```

---

### **Explanation**:
1. **ReactDOM**: Mounts the app onto the DOM node with the ID `root`.
2. **`QueryClientProvider`**: Makes React Query's `queryClient` available throughout the app.
3. **`Routes`**: Wraps the app with routing configuration.

---

### **5. File: `src/setupTests.ts`**  
**Purpose**: Configures Jest for React Testing Library.

---

```tsx
import '@testing-library/jest-dom';
```

---

### **Explanation**:
1. **`@testing-library/jest-dom`**: Provides additional Jest matchers (e.g., `toBeInTheDocument()`).

---

### **Summary**:
- **`routes.tsx`**: Manages application routing using TanStack/React Router.  
- **`queryClient.ts`**: Configures React Query's client for managing server state.  
- **`App.tsx`**: Root layout with navigation and `Outlet` for routing child components.  
- **`index.tsx`**: Entry point for the React application, integrating React Query and routing.  
- **`setupTests.ts`**: Configures Jest with React Testing Library.

### **1. File: `tsconfig.json`**  
**Purpose**: Configures TypeScript compiler settings for the frontend.

---

```json
{
  "compilerOptions": {
    "target": "es6",                        // Target ECMAScript version
    "lib": ["dom", "dom.iterable", "esnext"], // Libraries to include
    "allowJs": true,                        // Allow JavaScript files
    "skipLibCheck": true,                   // Skip checking type declarations
    "esModuleInterop": true,                // Enable ES module compatibility
    "strict": true,                         // Enable strict type-checking options
    "forceConsistentCasingInFileNames": true, // Enforce consistent file casing
    "module": "esnext",                     // Use ES module syntax
    "moduleResolution": "node",             // Node.js-style module resolution
    "resolveJsonModule": true,              // Allow importing JSON files
    "isolatedModules": true,                // Emit files independently
    "jsx": "react-jsx",                     // Use React JSX syntax
    "baseUrl": "./",                        // Base directory for module resolution
    "paths": {
      "@/*": ["src/*"]                      // Alias for imports
    },
    "outDir": "./dist"                      // Output directory for compiled files
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```

---

### **Explanation**:
1. **`target`**: Sets the JavaScript version for compiled code to `es6`.
2. **`lib`**: Includes DOM libraries for browser compatibility.
3. **`strict`**: Enforces strict type-checking rules for safer code.
4. **`module`** and **`moduleResolution`**: Configures ES module usage and Node-style resolution.
5. **`jsx`**: Enables React JSX support.
6. **`paths`**: Allows the use of `@/` as an alias for `src/` to simplify imports.
7. **`include`/`exclude`**: Specifies which files TypeScript should include or ignore.

---

### **2. File: `package.json`**  
**Purpose**: Manages the frontend's dependencies, scripts, and metadata.

---

```json
{
  "name": "todolist-frontend",
  "version": "1.0.0",
  "description": "A frontend React application for a TodoList integrated with AI tools.",
  "scripts": {
    "start": "react-scripts start",       // Starts the development server
    "build": "react-scripts build",       // Builds the app for production
    "test": "react-scripts test",         // Runs tests
    "eject": "react-scripts eject"        // Ejects the app configuration
  },
  "dependencies": {
    "@radix-ui/react-checkbox": "^1.0.0", // UI component for checkboxes
    "@tanstack/react-query": "^4.0.0",    // React Query for state management
    "@tanstack/react-router": "^1.0.0",   // TanStack React Router
    "axios": "^1.0.0",                    // HTTP client for API calls
    "phosphor-react": "^1.4.1",           // Icon library for React
    "react": "^18.2.0",                   // React library
    "react-dom": "^18.2.0",               // React DOM for rendering
    "react-scripts": "5.0.1"              // React scripts for CRA
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.3.0",
    "@testing-library/user-event": "^14.4.3",
    "@types/jest": "^29.0.3",
    "@types/node": "^18.0.0",
    "@types/react": "^18.0.15",
    "@types/react-dom": "^18.0.6",
    "typescript": "^5.0.0"
  },
  "browserslist": {
    "production": [">0.2%", "not dead", "not op_mini all"],
    "development": ["last 1 chrome version", "last 1 firefox version", "last 1 safari version"]
  },
  "keywords": ["todo", "react", "ai", "typescript", "todolist"],
  "author": "Your Name",
  "license": "MIT"
}
```

---

### **Explanation**:

1. **Scripts**:
   - **`start`**: Starts the development server (`localhost:3000`).  
   - **`build`**: Builds the project for production.  
   - **`test`**: Runs unit tests using Jest.  
   - **`eject`**: Ejects the configuration (advanced usage).

2. **Dependencies**:
   - **Core Libraries**:  
     - `react` and `react-dom` → React framework.  
     - `react-scripts` → Tooling provided by Create React App.  
   - **State Management**:  
     - `@tanstack/react-query` → Fetch and manage server state.  
   - **Routing**:  
     - `@tanstack/react-router` → For handling routes.  
   - **API Calls**:  
     - `axios` → Simplifies HTTP requests.  
   - **UI & Icons**:  
     - `@radix-ui/react-checkbox` → Checkbox components.  
     - `phosphor-react` → Icons for buttons and visuals.

3. **Dev Dependencies**:
   - **Testing Libraries**:  
     - `@testing-library/react` → Unit testing for React components.  
     - `@testing-library/jest-dom` → Extra Jest matchers.  
   - **TypeScript**:  
     - `typescript` → TypeScript compiler.  
     - `@types/*` → Type definitions for dependencies.

4. **`browserslist`**:
   - Specifies which browsers to support in production and development.

---

### **How to Install and Run**:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Run tests:
   ```bash
   npm test
   ```

---

### **Summary**:
- **`tsconfig.json`**: Configures TypeScript to support React and ESNext features.  
- **`package.json`**: Manages scripts, dependencies, and metadata for the React frontend.

## **Overview of Major Topics and Key Concepts**  
This section explains the major concepts covered in building the **TodoList with AI Tools** project and how these concepts can be generalized to build other applications using the modern stack of **React, TypeScript, React Query, React Router, Express, MongoDB, and OpenAI API**.

---

### **1. React and TypeScript Fundamentals**
#### **What You Learned**:  
- **React Components**: You used React functional components (`AddTodo`, `TodoItem`, `TodoList`) to structure the UI.  
- **Props and State**:  
   - Props allow data to flow from parent to child components.  
   - State is managed with React hooks like `useState` to handle input fields and UI states.  
- **TypeScript Integration**:  
   - TypeScript ensures type safety, reducing runtime errors.  
   - Interface declarations like `interface TodoItemProps` help define expected component props.  
   - Example:
     ```tsx
     interface TodoItemProps {
       id: string;
       title: string;
       completed: boolean;
       onDelete: () => void;
     }
     ```

#### **Why It’s Important**:  
Understanding React with TypeScript helps you build scalable and maintainable frontends. You can extend this knowledge to build other apps like a **notes app**, **bookmarks app**, or a **task tracker**.

---

### **2. React Query for State Management**
#### **What You Learned**:  
- **Fetching Data**: You used `useQuery` to fetch todos from the backend:
   ```tsx
   const { data: todos } = useQuery(['todos'], fetchTodos);
   ```
- **Mutating Data**: You used `useMutation` to add, delete, or update data:
   ```tsx
   const mutation = useMutation(createTodo, {
     onSuccess: () => queryClient.invalidateQueries(['todos']);
   });
   ```
- **Cache Invalidation**: When the data changes (e.g., adding a todo), you invalidated the query to trigger a refetch and sync the UI.

#### **Why It’s Important**:  
React Query simplifies data fetching and state management by caching data, reducing the need for manual state handling. Use it to fetch data from **REST APIs**, **GraphQL**, or any server-side endpoint for apps like **blogs**, **chat systems**, or **e-commerce stores**.

---

### **3. React Router for Navigation**
#### **What You Learned**:  
- **Routes Setup**: You created routes for different pages using `createBrowserRouter`:
   ```tsx
   const router = createBrowserRouter([
     { path: '/', element: <TodoPage /> },
     { path: '/ai-tools', element: <AiToolsPage /> },
   ]);
   ```
- **Outlet**: Used `<Outlet />` in the root layout to render nested routes dynamically.

#### **Why It’s Important**:  
React Router allows you to navigate between different pages in your app. You can use this for multi-page applications like **blogs**, **admin dashboards**, or **e-commerce sites**.

---

### **4. Building a Backend with Express and MongoDB**
#### **What You Learned**:  
- **Express Server**: You created a REST API with endpoints to handle CRUD operations.  
- **MongoDB Integration**: You used **Mongoose** to define schemas and interact with the MongoDB database:
   ```typescript
   const TodoSchema = new Schema({
     title: { type: String, required: true },
     completed: { type: Boolean, default: false },
   });
   ```
- **Routes and Controllers**:  
   - Routes define API endpoints: `/api/todos`.  
   - Controllers handle the logic: fetching, creating, and deleting todos.

#### **Why It’s Important**:  
Express and MongoDB allow you to create a scalable and flexible backend. You can reuse this knowledge to build APIs for apps like **user authentication**, **content management systems**, or **inventory trackers**.

---

### **5. OpenAI API Integration**
#### **What You Learned**:  
- **Interacting with OpenAI**: You used the OpenAI API to generate task descriptions, schedules, and subtasks:
   ```typescript
   const response = await openai.createCompletion({
     model: 'text-davinci-003',
     prompt: `Describe the task: ${task}`,
     max_tokens: 50,
   });
   ```
- **AI Tools**: You leveraged AI to enhance the app’s functionality by automating repetitive tasks.

#### **Why It’s Important**:  
Integrating third-party APIs like OpenAI opens doors for intelligent features such as:  
- **Chatbots** (e.g., FAQ bots).  
- **Content Generation** (e.g., blog posts).  
- **Task Automation** (e.g., AI scheduling and subtasks).

This approach can be extended to integrate other APIs like Stripe (payments), Twilio (SMS), or Google Maps.

---

### **6. Testing with Jest and React Testing Library**
#### **What You Learned**:  
- **Component Tests**: You tested components like `AddTodo`, `TodoItem`, and `TodoList` using Jest and Testing Library.  
- **Mocking**: You mocked API calls using Jest to simulate backend interactions.

#### **Why It’s Important**:  
Testing ensures your application works as expected. By writing unit and integration tests, you can confidently make changes without breaking existing functionality.

---

### **7. Frontend-Backend Communication**
#### **What You Learned**:  
- **API Calls**:  
   - You used Axios to communicate between the frontend and backend.  
   - Example:
     ```tsx
     const response = await axios.post(`${API_URL}/api/todos`, { title });
     ```
- **Error Handling**: You added error handling for failed requests and displayed messages accordingly.

#### **Why It’s Important**:  
Understanding how to integrate the frontend with a backend API is crucial. This can be extended to work with other backends like Firebase, Supabase, or GraphQL servers.

---

## **Key Concepts to Relate to Other Applications**
Here’s how you can generalize the concepts learned:

| **Concept**                  | **What You Can Build**                              |
|------------------------------|----------------------------------------------------|
| **React + TypeScript**       | Forms, CRUD-based dashboards, user interfaces.     |
| **React Query**              | Apps requiring data fetching (blogs, task apps).   |
| **React Router**             | Multi-page apps like blogs, portfolios, or stores. |
| **Express + MongoDB**        | REST APIs for CRUD apps, auth systems, and more.   |
| **Third-Party APIs**         | AI tools, payment systems, email/SMS notifications.|
| **Testing (Jest)**           | Ensure reliability in production-ready apps.       |

---

## **Frequently Asked Questions (FAQs)**  

### **1. How do I extend this stack to add user authentication?**  
- **Backend**: Add a user model with `bcrypt` for password hashing and `jsonwebtoken` for token-based authentication.  
- **Frontend**: Use React’s `useContext` or React Query to manage the authentication state.

### **2. How do I add more AI features using OpenAI?**  
- Explore OpenAI’s documentation to implement chatbots, content summaries, or language translations.  
- Example: Use a chatbot API to interact with a user’s queries.

### **3. How do I deploy this app?**  
- **Backend**: Deploy to **Heroku**, **Render**, or **Vercel**.  
- **Frontend**: Deploy to **Netlify**, **Vercel**, or **AWS S3**.  
- Use a CI/CD pipeline with GitHub Actions for automation.

### **4. How do I add real-time features?**  
- Use **Socket.IO** in your Express backend for real-time communication.  
- Example: Real-time task updates for multiple users.

### **5. Can I replace MongoDB with another database?**  
- Yes! You can use PostgreSQL, Firebase, or Supabase as alternatives. Replace Mongoose with an ORM like Prisma or Sequelize.

---

## **Conclusion**  
By completing this project, you’ve learned how to:  
1. Structure a modern **full-stack** application.  
2. Integrate **state management** (React Query) and **navigation** (React Router).  
3. Create a RESTful API with **Express** and **MongoDB**.  
4. Add intelligent features using **OpenAI API**.  
5. Write unit tests for components and APIs.

### **Next Steps**:
- Build a similar app like a **Bookmarks Manager** or **Blog Platform**.  
- Explore deployment to make your app live.  
- Add features like user authentication or real-time updates.

---