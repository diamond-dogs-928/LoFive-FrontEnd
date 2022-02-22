import { useState } from 'react';
import '../CSS/createPost.css';
import {
  useLogin,
  useLoginUpdate,
  useUsername,
  useUsernameUpdate,
  useBackendUrl,
} from './UserContext';

const CreatePost = ({ addNote }) => {
  const currentUsername = useUsername();
  const backendUrl = useBackendUrl();
  const initialState = { name: '', note: '', tags: [] };
  const [formState, setFormState] = useState(initialState);
  // const [name, setName] = useState('')
  // const [note, setNote] = useState('')

  let handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:4000/notes', {
      method: 'POST',
      body: JSON.stringify({
        owner: currentUsername,
        post: formState.note,
        tags: formState.tags,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        addNote(resJson);
        //console.log(resJson)
        setFormState(initialState);
      })

      .catch((error) => console.error({ Error: error }));
  };

  let handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit} id='createPost'>
        <label htmlFor='name'></label>
        <textarea
          type='text'
          id='name'
          name='name'
          value={formState.name}
          placeholder='Name'
          onChange={handleChange}
          className='createPostNameInput'
        />

        <label htmlFor='note'></label>
        <textarea
          rows='100'
          cols='30'
          type='text'
          id='note'
          name='note'
          value={formState.note}
          placeholder='Say something'
          onChange={handleChange}
          className='createPostInput'
        />

        <label htmlFor='tags'></label>
        <textarea
          rows='5'
          type='text'
          id='tags'
          name='tags'
          value={formState.tags}
          placeholder='Tag IT!'
          onChange={handleChange}
          className='createPostInput'
        />

        <button type='submit' value='Post' class='button-56'>
          <strong>Post</strong>
        </button>
        {/* <button class='button-56' role='button'>
          Button 56
        </button> */}
      </form>
    </>
  );
};

export default CreatePost;
