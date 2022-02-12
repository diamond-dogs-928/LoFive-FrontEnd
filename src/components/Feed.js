import React from 'react';
import Post from './Post';
import CreatePost from './CreatePost';
import '../CSS/feed.css';
import { useState, useEffect } from 'react';

const Feed = () => {

  const [notes, setNotes] = useState([])
  
  // Function to pull Notes from backend  
  let getNotes = async () => {
    let data = await fetch('http://localhost:4000/notes')
    let json = await data.json()
    setNotes(json)
    console.log(json)
  }

  // useEffect here to populate Notes/Posts section with Notes from backend on component mounting
  useEffect(() => {
    getNotes()
  }, [])

  let addNote = (note) => {
    setNotes([...notes, note])
  }

  // useEffect(() => {

  //   fetch('http://localhost:4000/notes')  

  //   .then(data => data.json())

  //   .then((parsedData) => {
  //     console.log(parsedData);
  //     setNotes(parsedData)
  //   })

  // }, [])

  return (
    <div>
      <div>
        <CreatePost addNote={ addNote }/>
      </div>

      <ul>
        { notes.map(note => {

          return(
            <li key={ note._id }>
              { note.post }
            </li>
          )
        })}
      </ul>

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
