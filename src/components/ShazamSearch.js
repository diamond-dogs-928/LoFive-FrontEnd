import { useState, useEffect } from 'react';
import '../CSS/dog.css';

const ShazamSearch = () => {
  const [imgUrl, setImgUrl] = useState();

  let getImgUrl = async () => {
    let data = await fetch('https://dog.ceo/api/breeds/image/random');
    let json = await data.json();
    setImgUrl(json.message);
  };

  useEffect(() => {
    getImgUrl();
  }, []);

  return (
    <div>
      <img src={imgUrl} alt='' className='dogImage' />
    </div>
  );
};

export default ShazamSearch;
