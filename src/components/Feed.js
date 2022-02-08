import React from 'react';
import Post from './Post';

const Feed = () => {
  return (
    <div>
      <h3>Username's Feed</h3>
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
