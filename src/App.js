import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Feed from './components/Feed';

function App() {
  return (
    <div className='bg-dark col-12'>
      <div className='col-2'>
        <Header />
      </div>
      <div className='col-6'>
        <Feed />
      </div>
    </div>
  );
}

export default App;
