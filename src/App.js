
import './App.css';
import { Routes,Route } from 'react-router-dom';
import AllCountries from './components/AllCountries/AllCountries';
import Countryinfo from './components/CountryInfo/Countryinfo';

function App() {
  return (
    <div className="App">
    <header className='header'>
    <div className='container'>
        <h5>Hello there</h5>
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
