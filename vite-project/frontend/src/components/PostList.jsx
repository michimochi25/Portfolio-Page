
import React, { useEffect, useState } from 'react';
import { getPosts, likePost } from '../api.js';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

function PostList({ isDarkMode }) {
  const [posts, setPosts] = useState([]);
  const [like, setLike] = useState(false);
  useEffect(() => {
    getPosts()
      .then(response => {
        console.log('posts', response.data.posts);
        setPosts(response.data.posts);
      })
      .catch(error => {
        console.error('There was an error fetching the posts!', error);
      });
  }, [like]);

  const convertDate = (timestamp) => {
    const date = new Intl.DateTimeFormat(['ban', 'id']).format(timestamp);
    return date;
  }

  const handleLike = (id) => {
    likePost(id)
      .then(response => {
        console.log('Post liked successfully:', response.data);
        // Optionally update UI or state here
        setLike(!like);
      })
      .catch(error => {
        console.error('Error liking post:', error);
      });
  }

  return (
    <div id='hide-scrollbar' className='m-2 flex flex-col overflow-y-auto h-[300px] rounded-lg justify-items-center'>
      {posts.length === 0
        ? <div></div>
        : posts.toReversed().map(post => (
          <div key={post.id} className={
            isDarkMode
              ? 'text-[15px] m-1 p-2 bg-[#0F1020] rounded-lg justify-center'
              : 'text-[15px] m-1 p-2 bg-white rounded-lg justify-center'
          }>
            <h1>{post.title}</h1>
            <p>{convertDate(post.timestamp)}</p>
            <p>{post.content}</p>
            <p>
              <button onClick={() => handleLike(post.id)}>
                <ThumbUpIcon fontSize='small' className='' />
              </button>
              <span> </span>
              {post.likes} Likes
            </p>
          </div>
        ))
      }

    </div>
  );
}

export default PostList;