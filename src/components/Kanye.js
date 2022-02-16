import { useState, useEffect } from 'react';
import '../CSS/sideBar.css';

const Kanye = () => {
  const [quote, setQuote] = useState('');

  let getKanye = async () => {
    let data = await fetch('https://api.kanye.rest');
    let json = await data.json();
    setQuote(json);
    console.log(json.quote);
  };

  useEffect(() => {
    getKanye();
  }, []);
  return (
    <div className='kanyeQuoteDiv'>
      <p>{quote.quote}</p>
      <p>-Kanye</p>
    </div>
  );
};

export default Kanye;
