import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";

export default function Navbar() {
  const {cart} =useContext(AppContext);

  return (
    <header className="navbar">
         
        <NavLink to="/" className={"classic"}><img src={require("../../assets/images/logo.png")} alt='/' className='logo'></img></NavLink>
        <div className='links'>
        <NavLink to={"/products"} className={({isActive})=>isActive?"active":"classic"}><h2>PRODUCTS</h2></NavLink>
        <NavLink to={"/cart"  }  className={({isActive})=>isActive?"active":"classic"}><div style={{position:"relative"}}><ShoppingCartIcon style={{color:"black",fontSize:"32px",position:"relative"}}/>{cart.length!==0?<div className='length'>{cart.length}</div>:<></>}</div></NavLink>
        </div>
    </header>
  ) 
}
