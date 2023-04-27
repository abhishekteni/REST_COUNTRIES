import React from 'react'
import { useEffect} from 'react'
import { useState } from 'react'
import MoonLoader from "react-spinners/MoonLoader";
import {Link, useParams} from 'react-router-dom'
import { override } from '../AllCountries/AllCountries';


// var sectionStyle=({countryimg}) = {
//   width: "100%",
//   height: "400px",
//   backgroundImage: countryimg
// };
const Countryinfo = () => {

  const[country,setCountry]=useState([])
  const [loading,setLoading]=useState(true)
  const [err,setErr]=useState('')

  const {countryName}= useParams()

  useEffect(()=>{
    
  const getCountryByName= async()=>{
    try{
        const res = await fetch(`https://restcountries-nqa2.onrender.com/api/countries/countryname/${countryName}`)
        if(!res.ok) throw new Error('could not Found')
        const data = await res.json()
        setCountry(data)
        setLoading(false)

    }
    catch(error){
      setErr(error.message)
    }
  }
    getCountryByName()
  },[countryName])
  return (
    <div className='country_info_wrapper' >
    <Link to="/">
      <button>
        Home
        </button>
        </Link>
      {
        loading && !err && <MoonLoader
  
        color="#2b3945"
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      }

      {
        err && !loading && <h4>{err}</h4>
      }
      {
        country?.map((country,index)=>(
          <div className='country_info_container' key={index} >
          
          <div className='country_info_img'>
          <img src={country.flags.png} alt=''/>
          </div>

          <div className='country_info'>
          <h3>{country.name.common}</h3>
            <div className='country_info_left'>
            
              <h5>Population: <span>{ new Intl.NumberFormat().format(country.population)}</span></h5>
              <h5>Region: {country.region}</h5>
              <h5>Sub Region: {country.subRegion}</h5>
              <h5>Capital: {country.capital}</h5>
              <h5>Currency:  {
                (() => {
                  let currencies = [];
    
                  for (let currency in country.currencies) {
                    currencies.push(country.currencies[currency].name);
                  }
    
                  return currencies.join(", ");
                })()
              }</h5> 
              
              <h5>languages:  {
                (() => {
                  let languages = [];
    
                  for (let language in country.languages) {
                    languages.push(country.languages[language]);
                  }
    
                  return languages.join(", ");
                })()
              }</h5>
      
            </div>
          </div>  


          </div>
        ))
      }


      </div>
  )
}

export default Countryinfo
