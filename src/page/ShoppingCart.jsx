import React, { useContext, useState ,useEffect} from 'react'
import Model from '../component/common/Model'
import { globalContext } from '../utils/GlobalContext'
import  { shoppingContext } from '../utils/ShoppingContext'
import axios from "axios";
import {useNavigate}  from "react-router-dom"

const url = "http://localhost:3000/client";

export default function ShoppingCart() {
  // const { setShowModel } = useContext(globalContext)

  const { shoppingList, setShoppingList, showModelCart, setShowModelCart, totalPrice,
    setTotalPrice } = useContext(shoppingContext)
  const {setShowModelProfile,setIsLogIn} = useContext( globalContext )
  const navigate  = useNavigate()

  function handlerClosModel() {
    setShowModelCart(false)
  }

  // - button
  function onDecrease(index) {
    const updatedList = [...shoppingList]
    const item = updatedList[index]
    item.quantity -= 1

    if (item.quantity < 1) {
      // its its quantity 0 remove it from the list
      onDelete(index)
    }
    else {
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

  
  
    async function handelCheckOut() {
      try {
        const { data } = await axios.get(`${url}/auth`, {
          withCredentials: true,
        });
        
        if(data.success){
          console.log(" valid user")
          navigate("/purchase")
        }
       
        // console.log(show, "token");
      } catch (error) {
        console.log("un valid user")
        //  to see only the login 
        setIsLogIn(true)
        setShowModelProfile(true)
      }
    }

  

    
   useEffect(() => {
    // the total price calculate
    const total = shoppingList.reduce((sum, val) => sum + (val.product_price * val.quantity), 0)
    setTotalPrice(total)
    
   }, [shoppingList]); //  only when i got  change in shopping list -  rerender
 
  return (
    <>
      <Model onClick={handlerClosModel} show={showModelCart}>
        {/* add card */}
        <div className='pt-6' style={{ maxHeight: '60vh', overflowY: 'auto' }}>
          {/* Header */}
          <div className='flex justify-between items-center mb-4'>
            <div className='flex items-center space-x-2'>
              <span>Items: {shoppingList.length}</span>
              {/* <span >Total Price: { shoppingList.reduce((sum, val) => sum + (val.product_price * val.quantity), 0)} $ </span> */}
              <span >Total Price: {totalPrice} $ </span>
            </div>
           {shoppingList.length > 0 && <button onClick={handleClearCart} className='text-red-500'>Clear cart</button> }
          </div>
          {/* loop on shoppingList card */}
          {shoppingList.length > 0 ? shoppingList.map((val, index) => (

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
          )
          ) :
            (<p>Shopping cart is empty.</p>)
          }
        </div>
        {shoppingList.length > 0 && <button
          className="mt-4 text-white bg-gray-900 hover:bg-customGold focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={ handelCheckOut}
        >
          Check out
        </button>}
      </Model>
    </>
  )
}
