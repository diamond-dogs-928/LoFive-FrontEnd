// import { useParams } from 'react-router-dom';
// import {useEffect, useState} from 'react'



// const EditCard = () => {

//   const initialState = { name: '', note: '', tags: [] };
//   const [formState, setFormState] = useState(initialState);
//   const [doc, setdoc] = useState(null)
//   const { id } = useParams()

//   let handleChange = (e) => {
//     setFormState({ ...formState, [e.target.id]: e.target.value });
//   };

//   let getNote = async (id) => {
//     let data = await fetch('http://localhost:4000/notes/' + id);
//     let json = await data.json();
//     if (json) {
//       console.log(json)
//       setdoc(json);
//     }
//   };

  // useEffect(() => {
  //   getNote();
  // }, []);

  // const options = {
  //   method: 'PUT',
  //   body: JSON.stringify({ owner: doc.name, post: doc.note, tags: doc.tags }),
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // }
  
  // let editCard = async (note) => {
  //   let data = await fetch('http://localhost:4000/notes/' + id, options) 
  //   let json = await data.json()
  //   if (json) {
      //addNote(resJson);
      //console.log(resJson)
      //setFormState(initialState);
    // }

      //     .catch((error) => console.error({ Error: error }));
      // };

  // return (
  //   <>
  //   <form onSubmit={editCard} id='createPost'>
  //     <label htmlFor='name'></label>
  //     <textarea
  //       type='text'
  //       id='name'
  //       name='name'
  //       value={formState.name}
  //       placeholder='Name'
  //       onChange={handleChange}
  //       className='createPostNameInput'
  //     />

  //     <label htmlFor='note'></label>
  //     <textarea
  //       rows='5'
  //       type='text'
  //       id='note'
  //       name='note'
  //       value={formState.note}
  //       placeholder='Say something'
  //       onChange={handleChange}
  //       className='createPostInput'
  //     />

  //     <label htmlFor='tags'></label>
  //     <textarea
  //       rows='5'
  //       type='text'
  //       id='tags'
  //       name='tags'
  //       value={formState.tags}
  //       placeholder='Tag IT!'
  //       onChange={handleChange}
  //       className='createPostInput'
  //     />



  //     <button type='submit' value='Post' class='button-56'>
  //       <strong>Post</strong>
  //     </button>
  //   </form>
  // </>
  // )
   //}}

// export default EditCard;