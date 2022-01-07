import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'


function App() {
  const inputDefaultState = { id: '', text: '' };
  const [inputValue, setInputValue] = useState(inputDefaultState);
  const [listItems, setListItems] = useState([]);
  const [submit, setSubmit] = useState('submit');
  const [alert, setAlert] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      submit: function () {
        setListItems([...listItems, { id: Date.now(), text: inputValue.text }]);
        setInputValue(inputDefaultState);
        setAlert(
          {status: 'success', messageText: 'item added to the list'}
        );
      },
      edit: function () {
        let listItem = listItems.map((item) => {
          if (inputValue.id === item.id) item.text = inputValue.text;
          return item;
        });
        setListItems(listItem);
        setSubmit('submit');
        setAlert(
          {status: 'success', messageText: 'value changed'}
        );
        setInputValue(inputDefaultState);
      }
    }
    if (inputValue.text === '') {
      setAlert(
        {status: 'danger', messageText: 'please enter value'}
      );
    } else {
      obj[submit]();
    }

  }

  const handleInputState = (e) => {
    setInputValue(
      { ...inputValue, text: e.target.value }
    );
  }

  const onEditItem = (idx) => {
    let { id, text } = listItems.find((item) => item.id === idx);
    setInputValue({ id: id, text: text });
    setSubmit('edit');
  }

  const onDeleteItem = (id) => {
    const newItemList = listItems.filter((item) => item.id !== id);

    setListItems(newItemList);
  }

  const onClearList = () => {
    setListItems([]);
  }

  const clearAlert = () => {
    setAlert(null);
  }

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {(alert) ? <Alert {...alert} clearAlert={clearAlert}/> : null}
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            type='text' className='grocery'
            placeholder='e.g. eggs'
            value={inputValue.text}
            onChange={handleInputState}
          />
          <button type='submit' className='submit-btn'>{submit}</button>
        </div>
      </form>
      {listItems.length ? <List items={listItems} onEditItem={onEditItem} onDeleteItem={onDeleteItem} onClearList={onClearList} /> : null}
    </section>
  )

}
export default App
