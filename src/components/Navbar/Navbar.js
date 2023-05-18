import React from 'react'
import "./Navbar.css"
export default function Navbar() {
  return (
    <header className="navbar">
        <img src={require("../../assets/images/logo.png")} className='logo'></img>
        <div className='links'>
        <h2>PRODUCTS</h2>
        <h2>CART</h2>
        </div>
    </header>
  )
}
