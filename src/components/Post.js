import React from 'react';
import '../CSS/post.css';

const Post = ({ note, name, likes, tags }) => {
  return (
    <div className='card bg-dark textmuted post'>
      <h4 className='text-muted'>Author: {name}</h4>
      <p className='text-muted'>{note}</p>

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
      <h5 className='d-flex justify-content-between text-muted'>
        Date &amp; Time <span>⬆️ Likes: {likes}</span>
      </h5>
    </div>
  );
};

export default Post;
