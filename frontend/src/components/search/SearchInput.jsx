import React,{useState} from 'react'

const SearchInput = ({onSearch}) => {
    const[input,setInput]=useState('')

    const submitHandler =(event)=>{
        event.preventDefault()
        console.log(input)
        onSearch(input);
    }
  return (
    <form onSubmit={submitHandler}>
        <input type='text' placeholder='search a country...' value={input} onChange={(event)=>setInput(event.target.value)} role='input'/>
    </form>
  )
}

export default SearchInput
