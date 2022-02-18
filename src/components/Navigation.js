import '../CSS/navigation.css';
import { Route, Link } from 'react-router-dom';

const Navigation = () => {
  const logOut = () => {
    console.log('login is running');
    // const options = {
    //   method: 'GET',
    //   headers: { 'content-type': 'application/json' },
    //   credentials: 'include',
    //   body: null
    // };
    fetch('http://localhost:4000/session/logout');
    console
      .log('logout is happening')
      // .then((data) => data.json())
      .then(() => {
        console.log('logged out');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    logOut();
  };

  return (
    <div className='LiAndBar'>
      <div id='navBar'>
        {/* ROUTES NEED TO BE PUT IN HERE INSTEAD OF THE TEXT */}
        <ul className='NavBarUl'>
          <Link to='/feed' className='NavBarLink'>
            <li className='NavBarLi effect-underline'>Feed</li>
          </Link>

          <li className='NavBarLi'>Profile</li>
          <li className='NavBarLi'>Friends</li>
          <li className='NavBarLi'>Messages</li>

          {/* <Link to='/' className='NavBarLink'> */}
          <li className='NavBarLi effect-underline' onClick={handleSubmit}>
            {' '}
            Logout
          </li>
          {/* </Link> */}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
