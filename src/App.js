import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={(e) => handleSubmit(e)}>
        <h3>grpcery bud</h3>
        <div className='form-control'>
          <input
            type='text' className='grocery'
            placeholder='e.g. eggs'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type='submit' className='submit-btn'>submiit</button>
        </div>
      </form>
    </section>
  )
}

export default App
