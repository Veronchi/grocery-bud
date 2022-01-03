import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

const List = ({ items, onChangeItem, onDeleteItem }) => {

  return (
    <ul className='grocery-list'>
      {items.map((item, id) => {
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
  )
}

export default List
