import { useState, useEffect } from 'react';
import '../CSS/post.css';
import { Link } from 'react-router-dom';
import heart from '../images/heart-removebg-preview.png';

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

  // console.log(addLike)

  const postDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date(date));

  return (
    <div
      post={post}
      note={note}
      name={name}
      likes={likes}
      // comments={comments}
      tags={tags}
      date={date}
      addLike={addLike}
      deleteNote={deleteNote}
      className='data-card'
      getNote={getNote}
    >
      <div className='postCard'>
        <Link to={`/${post._id}`} addLike={addLike}>
          <p style={{ marginTop: '0' }}>View Post</p>
          {/* Make the href the users profile --- Show route goes here*/}
          <div className='postBottom'>
            {/* Date &amp; Time <span><button onClick={ incrementLikes }>⬆️</button> Likes: {likes}</span> */}
          </div>
          <h4>{name}</h4>
          <h4>{note}</h4>
          <p>
            <div className='buttonTagDiv'>
              {' '}
              {tags
                .join()
                .split(',')
                .map((value, index) => {
                  return (
                    <button className='tagButton' key={index}>
                      <div className='tagDiv'>{value} </div>
                    </button>
                  );
                })}
            </div>
          </p>

          <div className='cardDateDiv'>{postDate}</div>
        </Link>
        <span className='likeBlock'>
          <p className='likeButton' onClick={() => addLike(post)}>
            <span>
              {' '}
              <span className='heartEmoji'>♡</span> Likes: {likes}{' '}
              <span className='heartEmoji'>♡</span>{' '}
            </span>
          </p>{' '}
        </span>
      </div>
    </div>
  );
};
export default Post;
