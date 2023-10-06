import React, { useContext } from "react";
import "./Checkout.css";
import visa from "./assets/visa.jpg"
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { StateContext } from "./StateProvider";




function Checkout (){

    const [{basket} ,dispatch]=useContext(StateContext);



    
    return (
     <div className="checkout">
        <div className="checkout_left">
            <img src={visa } alt="" className="checkout_ad" />
            <div >
                <h2 className="checkout_title">
                    Your shopping basket
                </h2>
                {basket.map(item => (
                    <CheckoutProduct
                       id={item.id}
                       title={item.title}
                       image={item.image}
                       price={item.price}
                       rating={item.rating}
                       />
                ))}
               
                
            </div>
        </div>
        <div className="checkout_right">
           <Subtotal/>
        </div>
     </div>
    )
}
export default Checkout
