import React from 'react'

const Search = ({selectHandler}) => {
    return (
        <div >
      {/* <li>
      <form onSubmit={handleSubmit}>
      <input type='text'  placeholder='Search...' value={keyword} onChange={handleChange}/>
      <input type='submit' />
    </form>

      </li> */}
  
        <select onChange={selectHandler} className='filter'>
          <option value='characters'>Characters</option>
          <option value='episodes'>Episodes</option>
        </select>
     
        </div>
    )
}

export default Search
