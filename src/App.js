import { useState, createContext } from 'react';
import SignUp from './Users/UserSignup';
import UserLogin from './Users/UserLogin';
import './App.css';
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Navigation from './components/Navigation';
import { Route, Routes } from 'react-router-dom';
import ShowCard from './components/ShowCard';
import EditCard from './components/EditCard';
import Footer from './components/Footer';
import Profile from './components/Profile';
import SearchResults from './components/SearchResults';
import { UserContext } from './components/UserContext';

function App() {
  const [setPosts, posts] = useState([]);

  return (
    <UserContext>
      <div className='body-container' id='backgroundColor'>
        <TopBar />
        <div className='row'>
          <div className='col-2'>
            <Navigation />
          </div>
          <div className='col-6'>
            <Routes>
              <Route path='/signup' element={<SignUp />}></Route>
              <Route path='/profile/:owner' element={<Profile />}></Route>
              <Route path='/*' element={<UserLogin />}></Route>
              <Route path='/feed//*' element={<Feed />}></Route>
              <Route path='/:id' element={<ShowCard />}></Route>
              <Route path='/edit/:id' element={<EditCard />}></Route>
              <Route
                path='/search/:keyword'
                element={<SearchResults />}
              ></Route>
            </Routes>
          </div>
          <div className='col-3'>
            <Sidebar />
          </div>
        </div>
        <Footer />
      </div>
    </UserContext>
  );
}

export default App;
