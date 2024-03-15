
import { useContext,useState,useEffect } from "react";
import classes from "./Cart.module.css";
import Modal from "./Modal";
import CartContext from "./cart-context";

const CartModal = (props) => {
  
  const [amount,setAmount] = useState(0);
  const cartCtx = useContext(CartContext);
  const cartItems = cartCtx.items.map(
    (item) => { 
      return <li>{item.Name} = Rs-{item.Price}</li>;
    }
  );
  useEffect(()=>{
    let sum = 0
    const a = cartCtx.items.map(
      (item) => {
        sum = sum+item.Price
      }
    );
   setAmount(sum)
  },[cartCtx])

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>Rs-{amount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={()=>props.cartModalClosed()} className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default CartModal;
