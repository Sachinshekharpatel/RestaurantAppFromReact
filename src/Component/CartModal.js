import React, { useContext, useState, useEffect } from "react";
import classes from "./Cart.module.css";
import Modal from "./Modal";
import CartContext from "./cart-context";

const CartModal = (props) => {
  const [amount, setAmount] = useState(0);
  let cartCtx = useContext(CartContext);
  
  const cartItems = cartCtx.items;

  const deleteItemFromCart = (key) => {
    cartCtx.removeItem(key);
    
    console.log(key);
  };

  const addSameItemToCart = (item)=>{
    const newItem= {...item, Key:Math.random()}
    cartCtx.addItem(newItem);
  }
 
  useEffect(() => {
    let sum = 0;
    cartItems.map((item) => {
      sum = sum + item.Price;
    });
    setAmount(sum);
    console.log(cartItems);
  }, [cartCtx, cartItems]);

  return (
    <Modal>
      {cartItems.map((item) => {
        return (
          <React.Fragment>
            <li>
              {item.Name} = Rs-{item.Price}
            </li>
            <button onClick={() => deleteItemFromCart(item.Key)}>-</button>
            <button onClick={() => addSameItemToCart(item)}>+</button>
          </React.Fragment>
        );
      })}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>Rs-{amount}</span>
      </div>
      <div className={classes.actions}>
        <button
          onClick={() => props.cartModalClosed()}
          className={classes["button--alt"]}
        >
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default CartModal;
