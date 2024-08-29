import axios from 'axios';

// Set the base URL to your Express backend
const PORT = 3000;
const api = axios.create({
  baseURL: 'http://localhost:' + PORT, // Ensure this matches your Express server URL
});

export const getPosts = () => {
  return api.get('/posts');
}

export const createPost = (post) => {
  return api.post('/posts', post);
}

export const likePost = (id) => {
  return api.put(`/posts/${id}/like`);
}
