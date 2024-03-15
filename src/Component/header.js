import React, { useEffect,useContext, useState } from 'react';
import CartContext  from './cart-context';

function Header(props) {
   
  const cartCtx = useContext(CartContext);
  const [numberOfCartItem,setNumOfCartItem] = useState(cartCtx.items.length)
  
 useEffect(()=>{
  setNumOfCartItem(cartCtx.items.length)
  console.log(cartCtx.items.length,cartCtx)
 },[cartCtx.items])

  return ( 
    <React.Fragment>
      <div style={{ display: 'flex', padding: '5px', justifyContent: 'space-between', fontWeight: "", backgroundColor: 'brown', height: '60px', width: 'auto' }}>
        <h3 style={{ color: 'white', margin: '10px', marginRight: '300px' }}>ReactMeals</h3>
        <button onClick={() => props.cartmodalOpen()} style={{ display: 'flex', margin: '5px', width: '200px', justifyContent: 'space-between', border: '0px solid green', borderRadius: '20px', cursor: 'pointer', padding: '10px' }}>
          <img src='https://icons8.com/icon/9671/shopping-cart' alt="Shopping Cart"></img>
          Your Cart
          <h3 style={{ margin: '2px' }}>{numberOfCartItem}</h3>
        </button>
      </div>
    </React.Fragment>
  );
}

export default Header;
