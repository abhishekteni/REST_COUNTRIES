import React from 'react'

const FilterCountry = () => {
  return (
    <select onChange={selectHandler}>
        <option>Filter By Continent</option> 
        <option value="Africa">Africa</option> 
        <option value="America">America</option> 
        <option value="Asia">Asia</option> 
        <option value="Europe">Europe</option> 
        <option value="Australia">Australia</option> 
    </select>
  )
}

export default FilterCountry
