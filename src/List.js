import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

const List = ({ items, onChangeItem, onDeleteItem }) => {
  debugger
  return (
    <div className='grocery-container'>
      <ul className='grocery-list'>
        {items.map(({item, id}) => {
          return (
            <li key={`item${id}`} className='grocery-item'>
              <p className='title'>{item}</p>
              <div className='btn-container'>
                <button type='button' className='edit-btn' onClick={() => onChangeItem(id)}>
                  <FaEdit />
                </button>
                <button type='button' className='delete-btn' onClick={() => onDeleteItem(id)}>
                  <FaTrash />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <button className='clear-btn'>clear items</button>
    </div>
  )
}

export default List
