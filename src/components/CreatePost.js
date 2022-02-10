import { useState } from 'react'

const CreatePost = () => {

    const [name, setName] = useState('')
    const [note, setNote] = useState('')

    let handleSubmit = (e) => {

      e.preventDefault()

      fetch('http://localhost:4000/notes')

    }

    let handleChange = (e) => {
      setName(e.target.value)
    }

  return (
    <>
      <form action='' id='createPost'>

        <label htmlFor='name'>Name</label>
        <input 
          type='text' 
          id="name" 
          name="name" 
          value={name} 
          placeholder='Name' 
          onChange={ handleChange }
        />

        <label htmlFor='note'>Post</label>
        <input type='text' id="note" name="note" placeholder='say something' />

        <input type="submit" value="Post" />

      </form>
    </div>
  );
};

export default CreatePost;
