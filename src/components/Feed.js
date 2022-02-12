import React from 'react';
import Post from './Post';
import CreatePost from './CreatePost';
import '../CSS/feed.css';
import { useState, useEffect } from 'react';

const Feed = () => {

  const [notes, setNotes] = useState([])

  useEffect(() => {

    fetch('http://localhost:4000/notes')  

    .then(data => data.json())

    .then((parsedData) => {
      console.log(parsedData);
      setNotes(parsedData)
    })

  }, [])

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
