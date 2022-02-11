import { useState } from 'react';

const ShazamSearch = () => {
  const [shazamResult, setShazamResult] = useState([]);

  fetch('https://shazam.p.rapidapi.com/auto-complete?term=tool&locale=en-US', {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'shazam.p.rapidapi.com',
      'x-rapidapi-key': 'de91e903e1msh0087fa72dd2b24fp138b95jsnf50fd45612e1',
    },
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });

  return (
    <div>
      {' '}
      <form className='CreatePost' action=''>
        <input id='SearchBox' type='text' placeholder='Search Shazam' />
        <input type='button' value='submit' />
      </form>
    </div>
  );
};

export default ShazamSearch;
