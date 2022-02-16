import { useState } from 'react';
import SignUp from './Users/UserSignup';
import UserLogin from './Users/UserLogin';
import './App.css';
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Navigation from './components/Navigation';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [setPosts, posts] = useState([]);

  return (
    <div className='bg-dark container-flex' id='backgroundColor'>
      <TopBar />
      <div className='row'>
        <div className='col-2'>
          <Navigation />
          {/* <Header /> */}
        </div>
        <div className='col-6'>
          <Routes>
            <Route path='/signup' element={<SignUp />}></Route>
            <Route path='/' element={<UserLogin />}></Route>
            <Route path='/feed' element={<Feed />}></Route>
          </Routes>
          {/* <Feed /> */}
        </div>
        <div className='col-3'>
          <Sidebar />
        </div>
      </div>
      {/* <div className="App"> */}
    </div>
    // </div>
  );
}

export default App;
