import React ,{useState, useEffect, createContext, useContext} from "react";
import "./ShowItems.css";
import CartContext from "./cart-context";


function ShowItemsOnScreen() {
  const menu = [
    { Name: "Samosa", Id: "1", Price: 29, Description: "Rewa speciality" },
    { Name: "Pizza", Id: "2", Price: 399, Description: "Blue Toppin" },
    { Name: "Maggie", Id: "3", Price: 99, Description: "Hotel speciality" },
  ];

 const cartCtx = useContext(CartContext)

const[itemInCart ,setItemInCart] = useState(0);
const[numberOfItem , setNumberOfItem] = useState({});

 const itemAdded = (itemId,itemName,item)=>{
  
  console.log(itemName)
  
  const updatedNumberOfItem = {
    ...numberOfItem,
    [itemId]: (numberOfItem[itemId] || 0) + 1
  }; 
  setNumberOfItem(updatedNumberOfItem);
  
    updateCartItem();
  
    // cartCtx.items.push(item)
    cartCtx.addItem(item)
    // console.log(cartCtx);
 }


 const updateCartItem = ()=>{
  setItemInCart(itemInCart+1);
  // console.log(itemInCart+1);
 }


  return (
    
    <React.Fragment>
      <div className="ItemsVisibleDiv">
        Menu Below
        <div className="VisibleItemParent">
          {menu.map((item) => {
            return (
                <div key={item.Id}>
                  <div>
                    <h3>{item.Name}</h3>
                    <i>{item.Description}</i>
                    <h3 className="PriceOfItem">Rs-{item.Price}</h3>
                  </div>
                  <div className="AmountAndAddButton">
                    <label>
                      Amount <input min='0' type="number" readOnly value={numberOfItem[item.Id] || 0}></input>
                    </label>
                    <button onClick={()=>itemAdded(item.Id,item.Name,item)} className="AddButton">+Add</button>
                  </div>
                </div>        
            );
          })}
        </div>
       </div>
    </React.Fragment>
    
  );
}

export default ShowItemsOnScreen;
