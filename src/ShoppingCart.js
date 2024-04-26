import React, { useContext, useState } from 'react'

export default function ShoppingCart() {
  const [itemName, setItemName] = useState('');

  const handleRemoveItem = (id) => {}

  const handleAdjustQuantity = (id, quantity) => {}

  const handleAddNewItem = () => {}

  return (
    <div className='shopping-cart'>
      <h2>Shopping Cart</h2>
      <div className='item'>
        <span>item-name</span>
        <div>
          <button>-</button>
          <span> Quantity: item-quantity </span>
          <button>+</button>
        </div>
        <button>Remove</button>
      </div>
      <input type='text' />
      <button className='add-button'>Add New Item</button>
    </div>
  )
}
