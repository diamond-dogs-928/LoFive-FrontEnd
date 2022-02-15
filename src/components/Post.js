import { useState, useEffect } from 'react';
import '../CSS/post.css';

const Post = ({ note, name, likes, tags, addLike, date }) => {
  // const [postDate, setPostDate] = useState('');

  // use
  // setPostDate(date);
  // console.log(postDate);

  return (
    <div className='post'>
    
          <div className="card">
                  <div className="card-header">
                      <img src="icon2Solo.png" alt="###"/>
                      <div>
                          <p>Author: {name} {/* (username)*/}</p> 
                          <p>{note} {/*(Name? Name of song?)*/}</p>
                      </div>
                  </div>
                  <div className="card-body">
                    {/* Song Cover? */}
                      <img src="/../images/icon2Solo.png" alt=""/>
                  </div>
                  <div className="card-footer">
                      <i className="fas fa-heart" >{/* LIKES*/}</i>
                      <i className="fas fa-comment"> {/* Comments*/}</i>
                      <i className="fas fa-bookmark"> {/* SHARE*/}</i>

                  </div>
              </div>


  </div>







  );
};

export default Post;




// <h4 className='text-muted'>Author: {name}</h4>
// <p className='text-muted'>{note}</p>

// {tags.map((value, index) => {
//   return (
//     <button key={index}>
//       <a href='#'>{value}</a>
//     </button>
//   );
// })}

// <div className='postBottom'>
//   {date}
//   <span className='likeBlock'>
//     <p className='likeButton' onClick={() => addLike(note)}>
//     <span>Likes: {likes}</span>
//     </p>{' '}
//   </span>
//   {/* Date &amp; Time <span><button onClick={ incrementLikes }>⬆️</button> Likes: {likes}</span> */}
// </div>
















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