import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
// import { Card } from 'react-bootstrap';
=======
import { Card } from 'react-bootstrap';
import '../CSS/post.css';
>>>>>>> 9a4c628 (updated icon to show, added accordian, partially styled text color)
=======
// import { Card } from 'react-bootstrap';
>>>>>>> 80cb701 (Point at which I took out the header component. Added Basis of accordian on the side. Still playing around with Navigation bar.)
=======
import '../CSS/post.css';
>>>>>>> f8c18d5 (cleaning up changes with correct files)

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
