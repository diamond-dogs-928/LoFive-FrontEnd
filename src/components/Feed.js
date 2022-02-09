import React from 'react';
import Post from './Post';
import CreatePost from './CreatePost';

const Feed = () => {
  return (
    <div
      className='border-left border-right border-white'
      style={{ borderLeftColor: 'white' }}
    >
      {/* <h5 className='text-muted'>Username</h5> */}
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
