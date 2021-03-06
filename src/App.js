import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'


function App() {
  const storageInputValue = JSON.parse(localStorage.getItem('inputValue'));
  const storageListItems = JSON.parse(localStorage.getItem('listItems'));
  const storageEditMode = JSON.parse(localStorage.getItem('editMode'));

  const inputDefaultState = { id: '', text: '' };
  const [inputValue, setInputValue] = useState(storageInputValue || inputDefaultState);
  const [listItems, setListItems] = useState(storageListItems || []);
  const [submit, setSubmit] = useState(storageEditMode || 'submit');
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    const stateJSON = JSON.stringify(inputValue);
    localStorage.setItem('inputValue', stateJSON);
  }, [inputValue]);

  useEffect(() => {
    const stateJSON = JSON.stringify(listItems);
    localStorage.setItem('listItems', stateJSON);
  }, [listItems]);

  useEffect(() => {
    const stateJSON = JSON.stringify(submit);
    localStorage.setItem('editMode', stateJSON);
  }, [submit]);

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
    setInputValue({ ...inputValue, text: e.target.value });
  }

  const onEditItem = (idx) => {
    let { id, text } = listItems.find((item) => item.id === idx);
    setInputValue({ id: id, text: text });
    setSubmit('edit');
  }

  const onDeleteItem = (id) => {
    const newItemList = listItems.filter((item) => item.id !== id);

    setListItems(newItemList);
    setAlert(
      {status: 'danger', messageText: 'item removed'}
    );
  }

  const onClearList = () => {
    setListItems([]);
    setAlert(
      {status: 'danger', messageText: 'empty list'}
    );
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
