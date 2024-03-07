import React from 'react'
import CartModal from './CartModal';

function Header(props){


 return(
   <React.Fragment>
      <div style={{display:'flex',padding:'5px',justifyContent:'space-between',fontWeight:"",backgroundColor:'brown',height:'60px',width:'auto'}}>
          <h3 style={{color:'white',margin:'10px',marginRight:'300px'}}>ReactMeals</h3>
          <button onClick={()=>props.cartmodalOpen()} style={{display:'flex',margin:'5px',width:'200px',justifyContent:'space-between',border:'0px solid green',borderRadius:'20px',cursor:'pointer',padding:'10px'}}>
            <img src='https://icons8.com/icon/9671/shopping-cart'></img>
              Your Cart
            <h3 style={{margin:'2px'}}>0</h3>
           </button>
      </div>
   </React.Fragment>
 )
}
export default Header
