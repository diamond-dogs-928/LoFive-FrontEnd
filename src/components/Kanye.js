import { useState, useEffect } from 'react';

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
    <div>
      <p>{quote.quote}</p>
      <p>-Kanye</p>
    </div>
  );
};

export default Kanye;
