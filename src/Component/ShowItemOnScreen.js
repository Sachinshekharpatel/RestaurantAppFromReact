import React from "react"
import './ShowItems.css'

function ShowItems(params) {
  const menu = [
    {Name:'Samosa',Id:'1',Price:29,Description:'Rewa speciality'},
    {Name:'Pizza',Id:'2',Price:399,Description:'Blue Toppin'},
    {Name:'Maggie',Id:'3',Price:99,Description:'Hotel speciality'}
  ]   
   
    return(
        <React.Fragment>
            <div className='ItemsVisibleDiv'>Menu Below
             <div className="VisibleItemParent">
             {menu.map((item) => {
              return (
                <React.Fragment>
                 <div key={item.Id}>
                    <div>
                        <h3>{item.Name}</h3>
                        <i>{item.Description}</i>
                        <h3 className='PriceOfItem'>Rs-{item.Price}</h3>
                    </div>
                    <div className='AmountAndAddButton'>
                        <label>Amount <input min='0' type='number'></input></label>
                        <button className='AddButton'>+Add</button>
                    </div>
                 </div>
                </React.Fragment>
                  )
              })}
             </div>
            </div>
        </React.Fragment>
    )
}

export default ShowItems