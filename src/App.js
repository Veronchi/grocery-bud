import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [inputValue, setInputValue] = useState('');
  // const [isSubmit, setIsSubmit] = useState(false);
  const [listItems, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...listItems, inputValue]);
    setInputValue('');
  }

  const handleInputState = (e) => {
    e.preventDefault();
    setInputValue(e.target.value)
  }

  const onChangeItem = (id) => {
    console.log(id)
  }

  const onDeleteItem = (id) => {
    listItems.splice(id, 1);
    
    setList([...listItems]);
  }

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            type='text' className='grocery'
            placeholder='e.g. eggs'
            value={inputValue}
            onChange={handleInputState}
          />
          <button type='submit' className='submit-btn'>submiit</button>
        </div>
      </form>
      <div className='grocery-container'>
        {listItems.length ? <List items={listItems} onChangeItem={onChangeItem} onDeleteItem={onDeleteItem}/> : null}
      </div>
    </section>
  )
}

export default App
