import { useParams } from 'react-router-dom';
import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';


const EditCard = () => {

  const navigate = useNavigate()
  console.log("hello")
  const initialState = { name: '', note: '', tags: [] };
  const [formState, setFormState] = useState(initialState);
  //const [doc, setDoc] = useState()
  const { id } = useParams()
  

  let handleChange = (e) => {
    e.preventDefault()
    setFormState({ ...formState, [e.target.id]: e.target.value });
  };

  let handleSubmit = (e) => {
    e.preventDefault()
    editCard()
  }

  let getNote = async (id) => {
  let data = await fetch('http://localhost:4000/notes/' + id);
    let json = await data.json();
    if (json) {
      console.log(json)
      await setFormState(json);
      await console.log(formState)
    }
  };

  useEffect(() => {
    getNote(id);
  }, []);

//---------------------Good up to here 2/19 @ 11:30

  const options = {
    method: 'PUT',
    body: JSON.stringify({ owner: formState.name, post: formState.note, tags: formState.tags }),
    headers: {
      'Content-Type': 'application/json',
    },
  }
  
  let editCard = async () => {
    let data = await fetch('http://localhost:4000/notes/edit/' + id, options) 
    let json = await data.json()
    if (json) {
      console.log(json)
      navigate('/' + id)
      //addNote(resJson);
      // setFormState(initialState);
    }

    //.catch((error) => console.error({ Error: error }));
  };

  return (
    <>
    <form onSubmit={handleSubmit} id='createPost'>
      <label htmlFor='name'></label>
      <textarea
        type='text'
        id='name'
        name='name'
        value={ formState.owner }
        placeholder='Name'
        onChange={handleChange}
        className='createPostNameInput'
      />

      <label htmlFor='note'></label>
      <textarea
        rows='5'
        type='text'
        id='note'
        name='note'
        //value={formState.note}
        value={ formState.post }
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
        //value={formState.tags}
        value={ formState.tags }
        placeholder='Tag IT!'
        onChange={handleChange}
        className='createPostInput'
      />



      <button onSubmit={ handleSubmit } type='submit' value='Post' class='button-56'>
        <strong>Post</strong>
      </button>
    </form>
  </>
  )
}

export default EditCard;