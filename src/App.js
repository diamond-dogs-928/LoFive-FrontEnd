import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';

import TopBar from './components/TopBar';

function App() {
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
    </div>
  );
}

export default App;
