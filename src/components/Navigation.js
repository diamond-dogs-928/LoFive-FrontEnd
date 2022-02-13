import '../CSS/navigation.css';

const Navigation = () => {
  return (
    <div className='LiAndBar'>
      <div id='navBar'>
        {/* ROUTES NEED TO BE PUT IN HERE INSTEAD OF THE TEXT */}
        <ul className='NavBarUl'>
          <li className='NavBarLi'>Feed</li>
          <li className='NavBarLi'>Friends</li>
          <li className='NavBarLi'>Messages</li>
          <li className='NavBarLi'>Lists</li>
          <li className='NavBarLi'>Profile</li>
          {/* maybe make this into flex box column and space around? */}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
