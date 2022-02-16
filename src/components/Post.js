import { useState, useEffect } from 'react';
import '../CSS/post.css';
import { Link } from 'react-router-dom';


const Post = ({ post, note, name, likes, tags, addLike, date, deleteNote }) => {
  // const [postDate, setPostDate] = useState('');

  // use
  // setPostDate(date);

  let getNote = async (id) => {
    let data = await fetch('http://localhost:4000/notes/' + id);
    let json = await data.json();
    if (json) {
    }
  };

  return (
  <div post={post}
  note={note}
  name={name}
  likes={likes}
  // comments={comments}
  tags={tags}
  date={date}
  addLike={addLike}
  deleteNote={deleteNote}
  className='data-card'
  getNote={getNote}>

    <div className='postCard'>
      <Link
        to={`/${post._id}`}
      >
       <p style={{marginTop: '0'}}>View Post</p> 
        {/* Make the href the users profile --- Show route goes here*/}
        <div className='postBottom'>
          {/* Date &amp; Time <span><button onClick={ incrementLikes }>⬆️</button> Likes: {likes}</span> */}
        </div>
        <h4>{name}</h4>
        <h4>{note}</h4>
        <p>
          {' '}
          {tags.map((value, index) => {
            return (
              <button className='tagButton' key={index}>
                <div className='tagDiv'>{value} </div>
              </button>
            );
          })}
  
          <span className='likeBlock'>
            <p className='likeButton' onClick={() => addLike(post)}>
             <span> <img src='/images/heart.jpg' alt='like'/> Likes: {likes}</span>
            </p>{' '}

          </span>
        </p>
        
        <div className='cardDateDiv'>{date}</div>
        </Link>
        <span className='likeBlock'>
            <p className='likeButton' onClick={() => addLike(post)}>
             <span> <img src='/images/heart.jpg' alt='like'/> Likes: {likes}</span>
            </p>{' '}

          </span>
    </div>
  </div>
  );
};

export default Post;