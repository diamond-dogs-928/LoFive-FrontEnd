import React from 'react';
import '../CSS/post.css';

const Post = () => {
  return (
    <div className='card bg-dark textmuted post'>
      <h4 className='text-muted'>Author</h4>
      <p className='text-muted'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores fugiat
        facilis harum blanditiis ratione labore a quos autem quaerat. Corporis
        eligendi odio impedit pariatur. Voluptate, minus iste. Quaerat, at
        harum?
      </p>
      <p className='text-muted'>
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
      </p>
      <h5 className='d-flex justify-content-between text-muted'>
        Date &amp; Time <span>⬆️ Likes</span>
      </h5>
    </div>
  );
};

export default Post;
