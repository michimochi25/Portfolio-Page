const express = require('express');
const app = express();

// Middleware
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

// Post model (for demonstration)
const posts = [
  { id: 1, title: 'First Post', content: 'This is the first post' },
  { id: 2, title: 'Second Post', content: 'This is the second post' },
];

// Get all posts
app.get('/posts', (req, res) => {
  res.json(posts);
});

// Get a single post by ID
app.get('/posts/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).send('Post not found');
  res.json(post);
});

// Create a new post
app.post('/posts', (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content,
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

// Update an existing post
app.put('/posts/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).send('Post not found');

  post.title = req.body.title || post.title;
  post.content = req.body.content || post.content;
  res.json(post);
});

// Delete a post
app.delete('/posts/:id', (req, res) => {
  const postIndex = posts.findIndex(p => p.id === parseInt(req.params.id));
  if (postIndex === -1) return res.status(404).send('Post not found');

  posts.splice(postIndex, 1);
  res.status(204).send();
});
