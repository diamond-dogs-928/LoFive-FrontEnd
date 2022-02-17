import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../CSS/post.css';





const ShowCard = ({
  post,
  note,
  name,
  likes,
  tags,
  addLike,
  date,
  deleteNote,
}) => {
  const [doc, setdoc] = useState();
  const { id } = useParams();

  // Testing if deletNote will work if I write the function in ShowCard.js
  // let deleteNote = async (doc) => {
  //   console.log(doc);
  //   let data = await fetch('http://localhost:4000/notes/' + doc._id, {
  //     method: 'DELETE',
  //     body: null,
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //   let json = await data.json();
  //   if (json) {
  //     let data = notes.map((datum) => {
  //       if (datum._id === note._id) {
  //         console.log('json: ' + json);
  //         return json;
  //       }
  //       console.log('datum: ' + datum);
  //       return datum;
  //     });
  //     setNotes(data);
  //   }
  //   console.log('delete function ran.');
  // };


  // let addLike = async (note) => {
  //   //console.log(note)
  //   let data = await fetch('http://localhost:4000/notes/' + note._id, {
  //     method: 'PUT',
  //     body: JSON.stringify({ likes: note.likes + 1 }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //   let json = await data.json();
  //   if (json) {
  //     let data = notes.map((datum) => {
  //       if (datum._id === note._id) {
  //         return json;
  //       }
  //       return datum;
  //     });
  //     setNotes(data);
  //   }
  //   //console.log('add like function ran.')
  // };



  let getNote = async (id) => {
    let data = await fetch('http://localhost:4000/notes/' + id);
    let json = await data.json();
    if (json) {
      setdoc(json);
    }
  };

  useEffect(() => {
    getNote(id);
  }, []);

  console.log(addLike)
  console.log(doc);

  return (
  <div className='showCardDiv'>
    <div className='test'>
    <div className='data-card' style={{
    display: 'flex',
    justifyContent: 'center',
    width: '500px',
    marginLeft: '8.5rem',
    marginTop: '5rem'
}}>
    {/* <h4>{note}</h4> */}
    <h4>{doc ? doc.owner : null}</h4>
    {/* <h4>{doc ? doc.post : null}</h4> */}
        {/* Make the href the users profile --- Show route goes here*/}
        <div className='postBottom'>
        
        </div>
        {/* <h4>{doc ? doc.owner : null}</h4> */}
        <h4>{doc ? doc.post : null}</h4>
        <p>
        <div className='buttonTagDiv'>
        {' '}
          { doc ? doc.tags.map((value, index) => {
            
            return (
            
              <button className='tagButton' key={index}>
                <div className='tagDiv'>{value} </div>
              </button>
            
            );
          }) : null}
          {/* Why can't it read map? Edit - it can now :) - justin*/}
          </div>
          <span className='likeBlock'>
            <p className='likeButton' onClick={() => addLike(doc ? doc : null)}>
              <span> <span className='heartEmoji'>♡</span> Likes: {doc ? doc.likes : null} <span className='heartEmoji'>♡</span> </span>
            </p>{' '}
          </span>




        </p>
        <Link
          to={`/edit/${id}`}

        >
        <span class='link-text'>
          Edit
          <svg
            width='25'
            height='16'
            viewBox='0 0 25 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z'
              fill='#701555'
            />
          </svg>
        </span>
        </Link>
        
        <span onClick={() => deleteNote(doc ? doc : null)} class='link-text'>
          <button className='deleteButton' onClick={() => deleteNote(doc ? doc : null)}>Delete</button>
          <svg
            width='25'
            height='16'
            viewBox='0 0 25 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z'
              fill='#701555'
            />
          </svg>
        </span>
        <div className='cardDateDiv'>{doc ? doc.date : null}</div>
    </div>
    </div>
  </div>
  );
};

export default ShowCard;
