import { useState } from 'react'

const CreatePost = () => {

  const NewForm = () => {
    const [name, setName] = useState('')

  }

  return (
    <>
      <form action='' id='createPost'>

        <label htmlFor='name'>Name</label>
        <input type='text' id="name" name="name" placeholder='Name' />

        <label htmlFor='note'>Post</label>
        <input type='text' id="note" name="note" placeholder='say something' />

        <input type="submit" value="Post" />
        
      </form>
    </div>
  );
};

export default CreatePost;
