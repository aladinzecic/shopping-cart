import React from 'react'
import "./cartCard.css"
export default function CartCard() {

  return (
    <div style={{width:"80vw",height:"18vh",backgroundColor:"black",display:"flex"}}>
      <div className='imgCart'><img src='https://cdn.britannica.com/72/170772-050-D52BF8C2/Avocado-fruits.jpg' alt='/'></img></div>
      <div className='quantityCart' >
        <div className='quantityCart-div' style={{display:"flex",width:"100px"}}>
        <div className='plus el'></div>
        <div className='quantity el'></div>
        <div className='minus el'></div>
        </div>
      </div>
    </div> 
  ) 
}
