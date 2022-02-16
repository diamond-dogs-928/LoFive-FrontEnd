import { useState, useEffect } from 'react';
import '../CSS/post.css';

const Post = ({ post, note, name, likes, tags, addLike, date, deleteNote }) => {
  // const [postDate, setPostDate] = useState('');

  // use
  // setPostDate(date);
  // console.log(postDate);

  return (
    <div>
      <a href='' class='data-card'>
      {/* Make the href the users profile --- Show route goes here*/}
        <div className="postBottom">
          {/* Date &amp; Time <span><button onClick={ incrementLikes }>⬆️</button> Likes: {likes}</span> */}
        </div>
        <h4>{note}</h4>
        <p>
          {' '}
          {tags.map((value, index) => {
            return (
              <button key={index}>
                <a href="#">{value}</a>
              </button>
            );
          })}
          <span className="likeBlock">
            {/* <p className="likeButton" onClick={() => addLike(note)}> */}
            <p className="likeButton" onClick={() => addLike(post)}>
              ⬆️ <span>Likes: {likes}</span>
            </p>{' '}
            {/* <p className="likeButton" onClick={() => addLike(note)}>
              <button onClick={() => addLike(note) }>⬆️</button><span>Likes: {likes}</span>
            </p>{' '} */}
          </span>
        </p>
        <span class="link-text">
          Edit
          <svg
            width="25"
            height="16"
            viewBox="0 0 25 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z"
              fill="#701555"
            />
          </svg>
        </span>
        <span onClick={() => deleteNote(post)} class="link-text">
          Delete
          <svg
            width="25"
            height="16"
            viewBox="0 0 25 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z"
              fill="#701555"
            />
          </svg>
        </span>
        <div className="cardDateDiv">{date}</div>
      </a>
    </div>
  );
};

export default Post;

// <div className="card bg-dark textmuted post">
//   <h4 className="text-muted">Author: {name}</h4>
//   <p className="text-muted">{note}</p>

//   {tags.map((value, index) => {
//     return (
//       <button key={index}>
//         <a href="#">{value}</a>
//       </button>
//     );
//   })}

//   {/* <p className='text-muted'>
//   <button>
//     <a href=''>tag</a>
//   </button>{' '}
//   <button>
//     <a href=''>tag</a>
//   </button>{' '}
//   <button>
//     <a href=''>tag</a>
//   </button>{' '}
//   <button>
//     <a href=''>tag</a>
//   </button>{' '}
//   <button>
//     <a href=''>tag</a>
//   </button>{' '}
//   <button>
//     <a href=''>tag</a>
//   </button>{' '}
// </p> */}
//   <div className="postBottom">
//     {date}
//     <span className="likeBlock">
//       <p className="likeButton" onClick={() => addLike(note)}>
//         ⬆️ <span>Likes: {likes}</span>
//       </p>{' '}
//     </span>
//     {/* Date &amp; Time <span><button onClick={ incrementLikes }>⬆️</button> Likes: {likes}</span> */}
//   </div>
// </div>;
