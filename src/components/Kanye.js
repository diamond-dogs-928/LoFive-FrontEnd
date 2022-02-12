import { useState } from 'react';

const Kanye = () => {
  const [quote, setQuote] = useState('');

  fetch('https://api.kanye.rest')
    .then((response) => {
      response = response.json();
    })
    .then((response) => {
      console.log(response);
      setQuote(response);
    })
    .catch((err) => {
      console.error(err);
    });

  return (
    <div>
      <p>{quote}</p>
    </div>
  );
};

export default Kanye;
