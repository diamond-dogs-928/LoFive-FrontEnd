// import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import '../CSS/navigation.css';



const Navigation = () => {
  return (
    
  <div className="liAndBar">
        <div id="navBar">
          {/* ROUTES NEED TO BE PUT IN HERE INSTEAD OF THE TEXT */}
          <ul className='NavBarUl'>
            <li> ROUTE TO Home</li>
            <li> ROUTE TO Friends</li>
            <li> ROUTE TO Home</li>
            <li> ROUTE TO Messages</li>
            <li> ROUTE TO Lists</li>
            <li> ROUTE TO Profile</li>
          </ul>
    </div>
    <div id='sideBar'></div>
  </div>
    
  );
};

export default Navigation;
