import { useState } from 'react';
import SignUp from './Users/UserSignup';
import './App.css';
import Header from './components/Header';
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';

function App() {
  const [posts, setPosts] = useState([]);

  return (
  <div className='bg-dark container-flex' id="backgroundColor">
      <TopBar />
      <div className='row'>
        <div className='col-2'>
          <Header />
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
  </div>
  );
}

export default App;
