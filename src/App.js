import { useState } from 'react';
import SignUp from './Users/UserSignup';
import './App.css';
import Header from './components/Header';
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Navigation from './components/Navigation';

function App() {
  const [posts, setPosts] = useState([]);

  return (
<<<<<<< HEAD
    <div className='bg-dark container-flex' id='backgroundColor'>
=======
  <div className='bg-dark container-flex' id="backgroundColor">
>>>>>>> 7d23284 (88% of top bar done. Added lines, Added font-family, Fixed Logo. Added back in index.html)
      <TopBar />
      <div className='row'>
        <div className='col-2'>
<<<<<<< HEAD
          <Navigation />
=======
          <Navigation/>
>>>>>>> 8e43293 (Point at which I took out the header component. Added Basis of accordian on the side. Still playing around with Navigation bar.)
          {/* <Header /> */}
        </div>
        <div className='col-6'>
          <Feed />
        </div>
        <div className='col-3'>
          <Sidebar />
        </div>
      </div>
      {/* <div className="App"> */}
      <SignUp />
    </div>
<<<<<<< HEAD
    // </div>
=======
  </div>
>>>>>>> 7d23284 (88% of top bar done. Added lines, Added font-family, Fixed Logo. Added back in index.html)
  );
}

export default App;
