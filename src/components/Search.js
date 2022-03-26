import React, { useState } from 'react'

function Search({handleFilterFood}) {

    const [input, setInput] = useState("")

    const handleSearch = (e) => {
        handleFilterFood(e.target.value)
        setInput(e.target.value)
    }

  return (
    <div>

        <input
          type='text'
          className='searchBar'
          onChange={handleSearch} // 1. run function on input change
          placeholder='search...'
          value={input} // 6. current value changes dinamically based on state
        />

    </div>
  )
}

export default Search