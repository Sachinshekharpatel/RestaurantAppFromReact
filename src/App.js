import Summary from "./Component/RestaurantSummary";
import ShowItemsOnScreen from "./Component/ShowItemOnScreen";
import Header from "./Component/header";
import CartModal from "./Component/CartModal";
import { useState } from "react";
import CartProvider from "./Component/CartProvider";

function App() {

  const [CartClicked,setCartClicked]= useState(false);
  

  const cartmodalOpen = ()=>{
    console.log("Header Section Cart Button Clicked That Will Open Modal")
    setCartClicked(true);
  }
  const cartModalClosed = () =>{
    console.log('Cart Modal Closed')
    setCartClicked(false);
  }
  return (
    <CartProvider>
      <div style={{margin:'10px'}}> 
        <Header cartmodalOpen={cartmodalOpen}></Header>
        <Summary></Summary>
        <ShowItemsOnScreen></ShowItemsOnScreen>
        {CartClicked && 
          <CartModal cartModalClosed={cartModalClosed}></CartModal>
        }
      </div>
    </CartProvider>
  );
}

export default App;
