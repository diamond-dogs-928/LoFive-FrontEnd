import '../CSS/navigation.css';
import { Route, Link } from 'react-router-dom';

const Navigation = () => {
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

          <Link to='/' className='NavBarLink'>
            <li className='NavBarLi effect-underline'> Logout</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
