import React from 'react';
<<<<<<< HEAD
import '../CSS/post.css';
=======
// import { Card } from 'react-bootstrap';
>>>>>>> 8e43293 (Point at which I took out the header component. Added Basis of accordian on the side. Still playing around with Navigation bar.)

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
        <a href=''>tag</a> <a href=''>tag</a> <a href=''>tag</a>{' '}
        <a href=''>tag</a> <a href=''>tag</a>
      </p>
      <h5 className='d-flex justify-content-between text-muted'>
        Date &amp; Time <span>⬆️ Likes</span>
      </h5>
    </div>
  );
};

export default Post;
