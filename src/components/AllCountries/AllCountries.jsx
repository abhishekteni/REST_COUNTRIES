import React, { useEffect, useState } from 'react'
import SearchInput from '../search/SearchInput'
import MoonLoader from "react-spinners/MoonLoader";
const override = {

  margin: "0px auto ",
  borderColor: "red",
};
const AllCountries = () => {

    const [countries,setCountries]=useState([])
    const [loading,setLoading]=useState(true) 
    const [err,setErr]=useState('')

    const getAllCountries= async()=>{

      try{
          const response=await fetch(`https://restcountries.com/v3.1/all`)
          if(!response.ok) throw new Error('Problem')
          const data = await response.json()
          console.log(data);
          setCountries(data)
          setLoading(false)

      }
      catch(error){
        setLoading(false);
        setErr(error.message)
      }
    }

    const getCountryByName= async(countryName)=>{
      console.log(countryName)
      try{
      const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      if(!response.ok) throw new Error('Unable to find') 
        const data = await response.json()
        setCountries(data)
        setLoading(false)
    }
    catch(error){
      setLoading(false)
      setErr(error.message)  
    }
  }


    useEffect(()=>{
      getAllCountries();

    },[])
  return (
    <div className="country__wrapper">
    <div className='country_top'>
      <div className='search'>
          <SearchInput onSearch={getCountryByName}/>
      </div>
    </div>
    <div className='country_bottom'>
    
    {
      loading && !err && <MoonLoader

      color="white"
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
      countries?.map((country)=>(
        <div className='country_card'>
            <div className='country_img'>
              <img src={country.flags.png} alt=''/>
            </div>

            <div className='country_data'>
              <h3>{country.name.common}</h3>
              <h6>Population: {country.population}</h6>
              <h6>Region : {country.region}</h6>
              <h6>Capital : {country.capital}</h6>

            </div>
        </div>
      ))
    }
    </div>
    </div>
  )
}

export default AllCountries
