import React from 'react';
import Post from './Post';
import CreatePost from './CreatePost';

const Feed = () => {
  return (
    <div>
      <h3 className='text-muted'>Username</h3>
      <div>
        <CreatePost />
      </div>
      <ul>
        <li>
          <Post />
        </li>
        <li>
          <Post />
        </li>
        <li>
          <Post />
        </li>
        <li>
          <Post />
        </li>
        <li>
          <Post />
        </li>
        <li>
          <Post />
        </li>
        <li>
          <Post />
        </li>
        <li>
          <Post />
        </li>
      </ul>
    </div>
  );
};

export default Feed;
