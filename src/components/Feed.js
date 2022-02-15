import React from 'react';
import Post from './Post';
import CreatePost from './CreatePost';
import '../CSS/feed.css';
import { useState, useEffect } from 'react';

const Feed = () => {
  const [notes, setNotes] = useState([]);

  // Function to pull Notes from backend
  let getNotes = async () => {
    let data = await fetch('http://localhost:4000/notes');
    let json = await data.json();
    setNotes(json);
    console.log(json);
  };

  // useEffect here to populate Notes/Posts section with Notes from backend on component mounting
  useEffect(() => {
    getNotes();
  }, []);

  let addNote = (note) => {
    setNotes([...notes, note]);
  };

  let addLike = async (note) => {
    // let data = await fetch('http://localhost:4000/notes/' + note._id, {
    //   method: 'PUT',
    //   body: JSON.stringify({ likes: (note.likes += 1) }),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });
    // let json = await data.json();
    // if (json) {
    //   let data = notes.map((datum) => {
    //     if (datum._id === note._id) {
    //       return json;
    //     }
    //     return datum;
    //   });
    //   setNotes(data);
    // }
    setNotes(note.likes++);
  };

  // Starting function to control liking comments
  // const incrementLikes = () => {
  //   setTotalLikes(totalLikes +1)
  // }

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
      <div id='createPostDiv'>
        <CreatePost addNote={addNote} />
      </div>

      <ul>
        {notes.map((note) => {
          return (
            <li key={note._id}>
              {/* { note.post } */}
              <Post
                note={note.post}
                name={note.owner}
                likes={note.likes}
                comments={note.comments}
                tags={note.tags}
                date={note.createdAt}
                addLike={addLike}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Feed;
