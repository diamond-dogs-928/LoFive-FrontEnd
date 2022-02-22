import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/editPage.css';
import {
  useLogin,
  useLoginUpdate,
  useUsername,
  useUsernameUpdate,
  useBackendUrl,
} from './UserContext';

const EditCard = () => {
  const backendUrl = useBackendUrl();
  const navigate = useNavigate();
  console.log('hello');
  const initialState = { name: '', note: '', tags: [] };
  const [formState, setFormState] = useState(initialState);
  //const [doc, setDoc] = useState()
  const { id } = useParams();

  let handleChange = (e) => {
    //e.preventDefault()
    setFormState({ ...formState, [e.target.id]: e.target.value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    editCard(formState);
  };

  let getNote = async (id) => {
    let data = await fetch(backendUrl + 'notes/' + id);
    let json = await data.json();
    if (json) {
      console.log(json);
      await setFormState(json);
      await console.log(formState);
    }
  };

  useEffect(() => {
    getNote(id);
  }, []);

  //---------------------Good up to here 2/19 @ 11:30

  const options = {
    method: 'PUT',
    body: JSON.stringify({
      owner: formState.owner,
      post: formState.post,
      tags: formState.tags,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  let editCard = async () => {
    let data = await fetch(backendUrl + 'notes/edit/' + id, options);
    let json = await data.json();
    if (json) {
      console.log(json);
      navigate('/' + id);
      //addNote(resJson);
      // setFormState(initialState);
    }

    //.catch((error) => console.error({ Error: error }));
  };

  console.log(formState);

  return (
    <>
      <h1 id='editPageTitle'>Edit Your Post</h1>

      <form onSubmit={handleSubmit} id='editPost'>
        <label htmlFor='note' id='editText'>
          Say Something:
        </label>
        <textarea
          rows='5'
          type='text'
          id='post'
          name='note'
          //value={formState.note}
          value={formState.post}
          placeholder='Say something'
          onChange={handleChange}
          className='editPostInput'
        />
        <label htmlFor='tags' id='editText'>
          Tags:
        </label>
        <textarea
          rows='5'
          type='text'
          id='tags'
          name='tags'
          //value={formState.tags}
          value={formState.tags}
          placeholder='Tag IT!'
          onChange={handleChange}
          className='editPostInput'
        />

        <button
          onSubmit={handleSubmit}
          type='submit'
          value='Post'
          class='button-56'
          id='editButton'
        >
          <strong>Confirm Edit</strong>
        </button>
      </form>
    </>
  );
};

export default EditCard;
