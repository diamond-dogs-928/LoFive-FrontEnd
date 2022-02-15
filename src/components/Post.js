import { useState, useEffect } from 'react';
import '../CSS/post.css';

const Post = ({ note, name, likes, tags, addLike, date }) => {
  // const [postDate, setPostDate] = useState('');

  // use
  // setPostDate(date);
  // console.log(postDate);

  return (
    <div className='card bg-dark textmuted post'>
      <h4 className='text-muted'>Author: {name}</h4>
      <p className='text-muted'>{note}</p>

      {tags.map((value, index) => {
        return (
          <button key={index}>
            <a href='#'>{value}</a>
          </button>
        );
      })}

      {/* <p className='text-muted'>
        <button>
          <a href=''>tag</a>
        </button>{' '}
        <button>
          <a href=''>tag</a>
        </button>{' '}
        <button>
          <a href=''>tag</a>
        </button>{' '}
        <button>
          <a href=''>tag</a>
        </button>{' '}
        <button>
          <a href=''>tag</a>
        </button>{' '}
        <button>
          <a href=''>tag</a>
        </button>{' '}
      </p> */}
      <div className='postBottom'>
        {date}
        <span className='likeBlock'>
          <p className='likeButton' onClick={() => addLike(note)}>
            ⬆️ <span>Likes: {likes}</span>
          </p>{' '}
        </span>
        {/* Date &amp; Time <span><button onClick={ incrementLikes }>⬆️</button> Likes: {likes}</span> */}
      </div>
    </div>
  );
};

export default Post;
