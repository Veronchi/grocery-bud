import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

const List = ({ items, onEditItem, onDeleteItem }) => {
  return (
    <div className='grocery-container'>
      <ul className='grocery-list'>
        {items.map(({text, id}) => {
          return (
            <li key={id} className='grocery-item'>
              <p className='title'>{text}</p>
              <div className='btn-container'>
                <button type='button' className='edit-btn' onClick={() => onEditItem(id)}>
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
