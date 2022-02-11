import React from 'react';

const CreatePost = () => {
  return (
    <div>
      <form className='CreatePost' action=''>
        <input id='SearchBox' type='text' placeholder='Search LoFive' />
        <input type='button' value='submit' />
      </form>
    </div>
  );
};

export default CreatePost;
