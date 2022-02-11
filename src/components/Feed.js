import React from 'react';
import Post from './Post';
import CreatePost from './CreatePost';
import '../CSS/feed.css';

const Feed = () => {
  return (
    <div>
      <div>
        <CreatePost/>
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
