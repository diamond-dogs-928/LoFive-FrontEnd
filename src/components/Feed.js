import React from 'react';
import Post from './Post';
import CreatePost from './CreatePost';
import '../CSS/feed.css';
import '../CSS/card.css';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import ShowCard from './ShowCard';

const Feed = () => {
  const [notes, setNotes] = useState([]);

  // Function to pull Notes from backend
  let getNotes = async () => {
    let data = await fetch('http://localhost:4000/notes');
    let json = await data.json();
    if (json) {
      setNotes(json);
    }
  };

  // useEffect here to populate Notes/Posts section with Notes from backend on component mounting
  useEffect(() => {
    getNotes();
  }, []);

  let addNote = (note) => {
    setNotes([...notes, note]);
  };

  let addLike = async (note) => {
    //console.log(note)
    let data = await fetch('http://localhost:4000/notes/' + note._id, {
      method: 'PUT',
      body: JSON.stringify({ likes: note.likes + 1 }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    let json = await data.json();
    if (json) {
      let data = notes.map((datum) => {
        if (datum._id === note._id) {
          return json;
        }
        return datum;
      });
      setNotes(data);
    }
    //console.log('add like function ran.')
  };

  let deleteNote = async (note) => {
    console.log(note);
    let data = await fetch('http://localhost:4000/notes/' + note._id, {
      method: 'DELETE',
      body: null,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    let json = await data.json();
    if (json) {
      let data = notes.map((datum) => {
        if (datum._id === note._id) {
          console.log('json: ' + json);
          return json;
        }
        console.log('datum: ' + datum);
        return datum;
      });
      setNotes(data);
    }
    console.log('delete function ran.');
  };

  return (
    <div>
      <div id="createPostDiv">
        <CreatePost addNote={addNote} />
      </div>
      <div className="postsContainer">
        <ul className="postUl">
          {notes
            .map((note) => {
              return (
                <li key={note._id} className="postLi">
                  <Post
                    post={note}
                    note={note.post}
                    name={note.owner}
                    likes={note.likes}
                    comments={note.comments}
                    tags={note.tags}
                    date={note.createdAt}
                    addLike={addLike}
                    deleteNote={deleteNote}
                  />
                </li>
              );
            })
            .reverse()}
        </ul>
      </div>
      <Routes>
        <Route element={<ShowCard addLike={addLike} deleteNote={deleteNote}/>}>
          {' '}
        </Route>
      </Routes>
    </div>
  );
};

export default Feed;
