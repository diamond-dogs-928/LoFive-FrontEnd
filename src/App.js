<<<<<<< HEAD

import { useState, useEffect } from 'react';

import SignUp from './Users/UserSignup';

=======
import { useState } from 'react';
import SignUp from './Users/UserSignup';
>>>>>>> bd11e13 (front end signup)
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
<<<<<<< HEAD
    <div className='bg-dark container-flex' id='backgroundColor'>

=======
  <div className='bg-dark container-flex' id="backgroundColor">
>>>>>>> b14f74d (88% of top bar done. Added lines, Added font-family, Fixed Logo. Added back in index.html)
=======
    <div className='bg-dark container-flex' id='backgroundColor'>
>>>>>>> f8c18d5 (cleaning up changes with correct files)
      <TopBar />
      <div className='row'>
        <div className='col-2'>
          <Navigation />
          {/* <Header /> */}
        </div>
        <div className='col-6'>
          <Feed />
        </div>
        <div className='col-3'>
          <Sidebar />
        </div>
      </div>
<<<<<<< HEAD
    <div className="App">
        <SignUp/>
=======
      {/* <div className="App"> */}
      <SignUp />
>>>>>>> bd11e13 (front end signup)
    </div>
    // </div>
  );
}

export default App;
