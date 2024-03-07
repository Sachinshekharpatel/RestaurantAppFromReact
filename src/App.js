import Summary from "./Component/RestaurantSummary";
import ShowItems from "./Component/ShowItemOnScreen";
import Header from "./Component/header";
import CartModal from "./Component/CartModal";
import { useState } from "react";
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
    <div style={{margin:'10px'}}>
      
      <Header cartmodalOpen={cartmodalOpen}></Header>
      <Summary></Summary>
      <ShowItems></ShowItems>
      {CartClicked && 
        <CartModal cartModalClosed={cartModalClosed}></CartModal>
      }
    </div>
  );
}

export default App;
