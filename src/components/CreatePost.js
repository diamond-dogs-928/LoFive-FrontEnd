import { useState } from 'react'

const CreatePost = () => {

    const [name, setName] = useState('')
    const [note, setNote] = useState('')

    let handleSubmit = (e) => {

      e.preventDefault()

      fetch('http://localhost:4000/notes', {
        method: 'POST',
        body: JSON.stringify({name: name, note: note,}),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then (res => res.json())
      .then(resJson => {
        // addNote(resJson)
        console.log(resJson)

      })

      .catch (error => console.error({'Error': error}))

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
