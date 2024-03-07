import React from 'react';
import classes from './Cart.module.css';  
import Modal from './Modal';


const CartModal = (props) => {

const cartItems = [{id:'c1',name:'sushi',amount:2,price:1299}].map((item)=>{
    return <li>{item.name}</li>
})

return (
    <Modal>
        {cartItems}
        <div className= {classes.total}>
            <span>Total Amount</span>
            <span>35.62</span>       
         </div>
        <div className={classes.actions}>
              <button className= {classes['button--alt']}>Close</button>
              <button className={classes.button}>Order</button>
        </div>
    </Modal>
)

};

export default CartModal;

