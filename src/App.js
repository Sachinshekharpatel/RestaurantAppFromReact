import Summary from "./Component/RestaurantSummary";
import ShowItems from "./Component/ShowItemOnScreen";
import Header from "./Component/header";
import CartModal from "./Component/CartModal";
function App() {
  return (
    <div style={{margin:'10px'}}>
      
      <Header></Header>
      <Summary></Summary>
      <ShowItems></ShowItems>
      <CartModal></CartModal>
    </div>
  );
}

export default App;
