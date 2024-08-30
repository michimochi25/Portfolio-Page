import fs from 'fs';
import CryptoJS from "crypto-js";
import { v4 as uuidv4 } from 'uuid';

let dataStore = {
  posts: []
};

////////////////////////////////////////////////////////////////////////////////

function load() {
  if (fs.existsSync('posts.json')) {
    const data = fs.readFileSync('posts.json', { flag: 'r' });
    dataStore = JSON.parse(data.toString());
  } else {
    // if file doesn't exist
    save();
  }
}

function save() {
  const data = JSON.stringify(dataStore, null, 2);
  fs.writeFileSync('posts.json', data, { flag: 'w' });
}

////////////////////////////////////////////////////////////////////////////////

export function getPosts() {
  load();
  return dataStore;
}

export function addPost(title, content, password) {
  load();
  const hashedPass = CryptoJS.SHA256(password).toString();
  if (hashedPass !== '5d0ac304d9c7ca2a0360317bb5a685bcf7162b0d727386482bfb6120f829a5c7') {
    throw new Error('Access denied!');
  }
  if (title.length === 0 || content.length === 0) {
    throw new Error('Cannot be empty');
  }

  const id = uuidv4();
  const newPost = {
    id: id,
    timestamp: Date.now(),
    title: title,
    content: content,
    likes: 0
  }

  dataStore.posts.push(newPost);
  save();
  return id;
}

export function likePost(id) {
  load();
  const target = dataStore.posts.find(p => p.id === id);
  if (target === undefined) {
    throw new Error('Post does not exist!');
  }

  target.likes += 1;
  save();
  return {};
}