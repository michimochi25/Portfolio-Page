import React, { useState } from 'react';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { createPost } from '../api.js';
import Button from '@mui/material/Button';

function PostForm({ isDarkMode }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [password, setPassword] = useState('');

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost({ title: title, content: content, password: password });
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col'>
      <input
        className='text-[15px] p-1 rounded-lg mb-1'
        placeholder='Title'
        value={title}
        onChange={handleTitleChange}
      />
      <textarea
        className='text-[15px] p-1 mb-1 rounded-lg'
        placeholder='Content'
        value={content}
        onChange={handleContentChange}
      />
      <input
        className='text-[15px] p-1 mb-1 rounded-lg'
        placeholder='Password'
        value={password}
        onChange={handlePasswordChange}
      />
      <Button type='submit' color='inherit'>
        <AddCircleRoundedIcon />
      </Button>
    </form>
  );
}

export default PostForm;
