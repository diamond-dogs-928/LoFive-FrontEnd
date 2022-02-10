<<<<<<< HEAD
import '../CSS/navigation.css';
=======
// import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import '../CSS/navigation.css';


>>>>>>> 8e43293 (Point at which I took out the header component. Added Basis of accordian on the side. Still playing around with Navigation bar.)

const Navigation = () => {
  // const PopupExample = () => (
  //   <Popup trigger={<button>Trigger</button>} position='top left'>
  //     {(close) => (
  //       <div>
  //         Content here
  //         <a className='close' onClick={close}>
  //           &times;
  //         </a>
  //       </div>
  //     )}
  //   </Popup>
  // );

  return (
<<<<<<< HEAD
    <div className='LiAndBar'>
      <div id='navBar'>
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
=======
    
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
>>>>>>> 8e43293 (Point at which I took out the header component. Added Basis of accordian on the side. Still playing around with Navigation bar.)
    </div>
    <div id='sideBar'></div>
  </div>
    
  );
};

export default Navigation;
