import React from 'react';
import '../CSS/post.css';

const Post = ({ note, name, likes, tags }) => {
  return (
    <div className='card bg-dark textmuted post'>
      <h4 className='text-muted'>Author: {name}</h4>
      <p className='text-muted'>{note}</p>

      
      


      { tags.map((value, index) => {

        return(

          <button key={ index }>
            <a href='#'>{ value }</a>
          </button>

        )} 
      )}
        
      
      
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
        Date &amp; Time <span><button>⬆️</button> Likes: {likes}</span>
        {/* Date &amp; Time <span><button onClick={ incrementLikes }>⬆️</button> Likes: {likes}</span> */}
      </h5>
    </div>
  );
};

export default Post;
