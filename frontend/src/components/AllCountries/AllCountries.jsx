import React, { useEffect, useState } from 'react'
import SearchInput from '../search/SearchInput'
import MoonLoader from "react-spinners/MoonLoader";
import FilterCountry from '../FilterCountry/FilterCountry';
import {Link} from 'react-router-dom'
export const override = {

  margin: "0px auto ",
  borderColor: "red",
};
const AllCountries = () => {

    const [countries,setCountries]=useState([])
    const [loading,setLoading]=useState(true) 
    const [err,setErr]=useState('')

    const getAllCountries= async()=>{

      try{
          const response=await fetch('/api/countries')
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

    const getCountryByRegion=async(countryRegion)=>{
      console.log(countryRegion);
      try{
        const response = await fetch(`/api/countries/countryregion/${countryRegion}`)
        if(!response.ok) throw new Error('Unable to find') 
        const data = await response.json()
        setCountries(data)
        setLoading(false)
    }
    catch(error){
      setLoading(false)
      setErr(false)  
    }
    }
    const getCountryByName= async(countryName)=>{
      console.log(countryName)
      try{
      const response = await fetch(`/api/countries/countryname/${countryName}`)
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
    <h1>Home Page</h1>
    <div className='country_top'>
      <div className='search'>
          <SearchInput onSearch={getCountryByName}/>
      </div>
      <div className='filter'>
          <FilterCountry onSelect={getCountryByRegion}/>
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
        <Link to={`/country/${country.name.common}`}>
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
        </Link>
      ))
    }
    </div>
    </div>
  )
}

export default AllCountries
