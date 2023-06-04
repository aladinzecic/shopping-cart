import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'
export default function Navbar() {
  return (
    <header className="navbar">
         
        <NavLink to="/" className={"classic"}><img src={require("../../assets/images/logo.png")} alt='/' className='logo'></img></NavLink>
        <div className='links'>
        <NavLink to={"/products"} className={({isActive})=>isActive?"active":"classic"}><h2>PRODUCTS</h2></NavLink>
        <NavLink to={"/cart"  }  className={({isActive})=>isActive?"active":"classic"}><h2>CART</h2></NavLink>
        </div>
    </header>
  ) 
}
