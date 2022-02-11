import React from 'react';

const CreatePost = () => {
  return (
    // <div className='create-post'>
    //   <form action=''>
    //     <input type='text' placeholder='say something' />
    //   </form>
    <div>
      <form className='CreatePost' action=''>
        <input id='SearchBox' type='text' placeholder='Search LoFive' />
        <input type='button' value='submit' />
      </form>
    </div>
  );
};

export default CreatePost;
