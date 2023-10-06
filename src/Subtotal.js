import React ,{useContext}from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { StateContext } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Subtotal(){
    const [{basket} ,dispatch]=useContext(StateContext); 

    return (

             <div className="subtotal">

                  <CurrencyFormat
                    renderText= {(value) => (
                        <>
                        <p>
                            Subtotal ({basket.length} items) :<strong>${value}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" />
                                This order contains a gift
                        </small>
                        </>
                    )}
                  
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thounsedSeparator={true}
                  

                  />
                 <button className="btn">Proceed to checkout</button>
             </div>



    )
}
export default Subtotal