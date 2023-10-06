import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StoreIcon from '@mui/icons-material/Store';
import SearchIcon from '@mui/icons-material/Search';

import { StateContext } from "./StateProvider";





function Header(){

const [{basket} ,dispatch]=useContext(StateContext);




    return(
 <div className="header">
    <Link  to="/"  style={{textDecoration:"none"}}>
    <div className='header_logo'>
         <StoreIcon  className='header_logoImg' fontSize='large' />
         <h2 className="header_logotitle">eShop</h2>
       </div>
    </Link>
     
       <div className="header_search">
          <input type="text" className="header_searchInput" />
          <SearchIcon className='header_searchIcon'/>
       </div>
       <div className="header_nav">
       <Link to="/login"  style={{textDecoration:"none"}}>
       <div className="nav_item">
            <span className="nav_itemLineOne">hello</span>
            <span className="nav_itemLineTwo"><strong>sign in</strong></span> 
             </div>
        </Link>
           
        <Link  to="/checkout" style={{textDecoration:"none"}}>
        <div className="nav_item" >
          <ShoppingBasketIcon fontSize='large' className="itemBasket"/>
            <span className="nav_itemLineTwo  nav_basketCount">{basket.length}</span> 
        </div>
        </Link>
        
       </div>
        </div>
    )
}
export default Header