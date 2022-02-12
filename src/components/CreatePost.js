import { useState } from 'react';

const CreatePost = ({ addNote }) => {
  // addNote is a function passed as props from the "Feed" component

  const initialState = { name: '', note: '' };
  const [formState, setFormState] = useState(initialState);
  // const [name, setName] = useState('')
  // const [note, setNote] = useState('')

  let handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:4000/notes', {
      method: 'POST',
      body: JSON.stringify({ owner: formState.name, post: formState.note }),
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
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          name='name'
          value={formState.name}
          placeholder='Name'
          onChange={handleChange}
        />

        <label htmlFor='note'>Post</label>
        <input
          type='text'
          id='note'
          name='note'
          value={formState.note}
          placeholder='say something'
          onChange={handleChange}
        />

        <input type='submit' value='Post' />
      </form>
    </>
  );
};

export default CreatePost;
