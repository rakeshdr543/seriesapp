import React from 'react'

const Search = ({handleSubmit,selectHandler,keyword,handleChange}) => {
    return (
        <div>
             <ul>
      <li>
      <form onSubmit={handleSubmit}>
      <input type='text'  placeholder='Search...' value={keyword} onChange={handleChange}/>
      <input type='submit' />
    </form>

      </li>
      <li>
        <select onChange={selectHandler}>
          <option value='characters'>Characters</option>
          <option value='episodes'>Episodes</option>
        </select>
      </li>
    </ul>
        </div>
    )
}

export default Search
