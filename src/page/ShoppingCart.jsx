import React, { useContext, useState } from 'react'
import Model from '../component/common/Model'
import { globalContext } from '../utils/GlobalContext'
import ShoppingProvider, { shoppingContext } from '../utils/ShoppingContext'

export default function ShoppingCart() {
  const { setShowModel } = useContext(globalContext)

  const { shoppingList, setShoppingList} = useContext(shoppingContext)

  

  function handlerClosModel() {
    setShowModel(false)
  }

  // - button
  function onDecrease(index) {
    const updatedList = [...shoppingList]
    const item = updatedList[index]
    item.quantity -= 1

    if (item.quantity < 1){
      // its its quantity 0 remove it from the list
      onDelete(index)
    }
    else{
      setShoppingList(updatedList)
    }

  }
  // + button
  function onIncrease(index) {
    // Create a copy of the shoppingList array
    const updatedList = [...shoppingList]
     // Get the item at the specified index
    const item = updatedList[index]
    // Increment the quantity of the item (its a reference of updatedList )
    item.quantity += 1
    // Update the shoppingList state with the modified array
    setShoppingList(updatedList)

  }

  // delete items from the shopping list
  function onDelete(index) {
    //  if the index of the array !== index don't add to the new list
    const newShoppingList = shoppingList.filter((val, i) => i !== index)
    setShoppingList(newShoppingList)
  }

  function handleClearCart() {
    setShoppingList([])
  }
  console.log(shoppingList)
  return (
    <>
      <Model onClick={handlerClosModel}>
        {/* add card */}
        <div className='pt-6' style={{ maxHeight: '60vh', overflowY: 'auto' }}>
          {/* Header */}
          <div className='flex justify-between items-center mb-4'>
            <div className='flex items-center space-x-2'>
              <span>Items: {shoppingList.length}</span>
              <span >Total Price: {shoppingList.reduce((sum,val) => sum + (val.product_price * val.quantity ),0 )} $ </span>
            </div>
            <button onClick={handleClearCart} className='text-red-500'>Clear cart</button>
          </div>
          {shoppingList.length > 0 ? shoppingList.map((val, index) => (
            //  card
            <div key={index} className="border rounded-lg p-2 flex items-center space-x-4">
              <img
                className="w-20 h-20 object-contain"
                src={val.product_image}
                alt={val.product_name}
              />
              <div className="flex-grow">
                <h3 className="text-lg font-bold">{val.product_name}</h3>
                <p className="text-gray-600">${val.product_price}</p>
                <div className="flex items-center space-x-2 mt-2">
                  <button onClick={() => onDecrease(index)} className="px-2 py-1 bg-gray-200 text-gray-700 rounded">
                    -
                  </button>
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded">{val.quantity}</span>
                  <button onClick={() => onIncrease(index)} className="px-2 py-1 bg-gray-200 text-gray-700 rounded">
                    +
                  </button>
                </div>
                <button onClick={() => onDelete(index)} className="text-red-500 mt-2">Delete</button>
              </div>
            </div>
          )) :

            (<p>Shopping cart is empty.</p>)}
        </div>
      </Model>
    </>
  )
}
