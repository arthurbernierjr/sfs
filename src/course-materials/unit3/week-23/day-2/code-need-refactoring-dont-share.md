Below are the updated versions of all four pages (`HomePage`, `ShowPage`, `LoginPage`, and `SignupPage`) with the modifications discussed, including token storage in `localStorage` for the `LoginPage` and `SignupPage`.

### HomePage Component (HomePage.js)

This component displays all blog posts and provides links to their detailed views. It remains unchanged from the initial example.

```jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/api/blogs')
      .then(response => response.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <div>
      <h1>Blogs</h1>
      {blogs.map(blog => (
        <div key={blog._id}>
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
          <Link to={`/blogs/${blog._id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
```

### ShowPage Component (ShowPage.js)

This component displays a specific blog post, allowing for modifications and deletions if the user has permission. It remains unchanged from the initial example.

```jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ShowPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`/api/blogs/${id}`)
      .then(response => response.json())
      .then(data => setBlog(data));
  }, [id]);
  return (
    <div>
      {blog && (
        <>
    <button onClick={() => setShowUpdate(!showUpdate) }>{
      showUpdate? 'View Blog Post' : 'Update Blog Post'
    }</button>
  {
    showUpdate? <BlogPost blog={blog} handleDelete={handleDelete} /> : <UpdateForm blog={blog}/>
  }
        </>
      )}
    </div>
  );
};

export default ShowPage;
```
## Update Form
```js

export default function UpdateForm(){
    const titleInput = useRef(null);
	const bodyInput = useRef(null);
    const navigate = useNavigate();
    
    const handleDelete = () => {
    fetch(`/api/blogs/${id}`, { method: 'DELETE' })
      .then(() => navigate('/'))
      .catch(error => console.error('Error:', error));
    };

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
 return(
    <>
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
    <button onClick={handleDelete}>Delete Post</button>
  </>)
}
```

### LoginPage Component (LoginPage.js)

This component allows users to log in. It has been updated to store the authentication token in `localStorage`.

```jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      if (data.token) {
        localStorage.setItem('token', data.token);
        navigate('/');
      } else {
        console.error('Token not provided');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={credentials.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
```

### SignupPage Component (SignupPage.js)

This component allows new users to register. It has been updated to store the authentication token in `localStorage` if provided upon signup.

```jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      if (data.token) {
        localStorage.setItem('token', data.token);
        navigate('/');
      } else {
        console.error('Token not provided');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupPage;
```

These components form the core of a simple blog application, allowing for user registration, login, viewing blog posts, and detailed post interaction. Remember to expand upon these examples with additional security measures, error handling, and user feedback for a complete and robust application.

```css
div {
  background: lightgrey;
}

.container {
  background: rgb(232, 232, 232);
  display: flex;
  justify-content: space-around;
  margin: 10px;
  padding: 20px;
}

.main-container {
  background: 0;
  display: flex;
}

.main-container div {
  padding: 20px;
  margin-left: 20px;
}
```