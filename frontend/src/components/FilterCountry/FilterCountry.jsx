import React from 'react'

const FilterCountry = ({onSelect}) => {

  const selectHandler=(e)=>{
    const regionName=e.target.value
    onSelect(regionName)
  }
  return (
    <select onChange={selectHandler}>
        <option>Filter By Continent</option> 
        <option className='option' value="Africa">Africa</option> 
        <option className='option' value="America">America</option> 
        <option className='option' value="Asia">Asia</option> 
        <option className='option' value="Europe">Europe</option> 
        <option className='option' value="Oceania">Australia</option> 
    </select>
  )
}

export default FilterCountry
