import React, { useContext } from "react";

import { StateContext } from "./StateProvider";
import "./CheckoutProduct.css";



function CheckoutProduct({id,title,image,price,rating}) {
  const [ {basket},dispatch] =useContext(StateContext );

  const removeFromBasket =() =>{
    dispatch({
      type:"REMOVE_FROM_BASKET",
      id:id,
      
    });
  };



  return (
   
    <div className="checkoutproduct"> 
      <img src={image} alt="this pic" className="checkoutproduct_image" />
        <div className="checkoutproduct_info">
          <p className="checkoutproduct_title">{title}</p>
          <p className="checkoutproduct_price">
           <small>$</small>
           <strong>{price}</strong>
          </p>

          <div className="checkoutproduct_rating">
            {Array(rating)
            .fill()
            .map((_,i) => <p>⭐</p>
            )
            }
          </div>
          <button className="btn" onClick={removeFromBasket} >remove from the basket</button>
        </div>
    
       
    </div>
   
  );
}
//
export default CheckoutProduct;