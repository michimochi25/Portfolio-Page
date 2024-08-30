import { addPost, getPosts, likePost } from './posts.js';
import express from 'express';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // For parsing JSON bodies

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the blog!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Get all posts
app.get('/posts', (req, res) => {
  res.status(201).json(getPosts());
});

// Create a new post
app.post('/posts', (req, res) => {
  let ret;
  try {
    const { title, content, password } = req.body;
    ret = addPost(title, content, password);
  } catch (err) {
    return res.status(401).json(err);
  }
  res.status(201).json(ret);
});

app.put('/posts/:id/like', (req, res) => {
  let ret;
  try {
    const id = req.params;
    ret = likePost(id.id);
  } catch (err) {
    return res.status(400).json(err);
  }
  res.status(201).json(ret);
});

// Delete a post
// app.delete('/posts/:id', (req, res) => {
//   const postIndex = posts.findIndex(p => p.id === parseInt(req.params.id));
//   if (postIndex === -1) return res.status(404).send('Post not found');

//   posts.splice(postIndex, 1);
//   res.status(204).send();
// });
