import React, { useEffect, useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
const [items,setItems] = useState([]);  
 
  const addItemToCartHandler = (item) => {
   setItems([...items,item]) 
  };
  useEffect(()=>{
    console.log(items)
  },[items.length])

  const removeItemFromCartHandler = (id) => {
    const updatedCartItems = items.filter(item => item.Key !== id);   
    setItems(updatedCartItems);
  };

  const cartContext = {
    items: items,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    msg:' I am unevitable'
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
