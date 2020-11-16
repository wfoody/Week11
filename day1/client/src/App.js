
import React, { useEffect, useState } from 'react'
import AddBook from './Components/AddBook'

function App() {

  
  const [value, setValue] = useState([])
  
  const handleOnChange = (value) => {
    setValue(value)
  }
  
  fetch('http://localhost:8080/api/books')
  .then(response => response.json())
  .then(result => { 

  })
  
  
  
  return (
          <div className='bookShelf'>
            <AddBook onUpdate={handleOnChange} />
            {/* < COMPONENT value = {value} /> */}
          </div>
  )
}

export default App;
