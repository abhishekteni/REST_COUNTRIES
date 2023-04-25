
import './App.css';
import { Routes,Route,Link } from 'react-router-dom';
import AllCountries from './components/AllCountries/AllCountries';
import Countryinfo from './components/CountryInfo/Countryinfo';

function App() {
  return (
    <div className="App">
    <header className='header'>
    <div className='container'>
    <Link to="/"><h5>Hello there</h5></Link>
        </div>
        </header>
        <div className='container'>
          <Routes>
            <Route path='/' element={<AllCountries/>}></Route>
            <Route path='/country/:countryName' element={<Countryinfo/>}></Route>
          </Routes>
        </div>
    </div>
  );
}

export default App;
