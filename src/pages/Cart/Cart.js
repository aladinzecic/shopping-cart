import React from 'react'
import "./Cart.css"
import { useContext } from "react";
import CartCard from '../../components/cartCard/cartCard'
import { AppContext } from "../../Context/AppContext";
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import Button from '@mui/material/Button';
export default function Cart() {
  const { products, cart,onSale } = useContext(AppContext);
  return (
    <>
      {
        cart.length!==0?(
          <div style={{display:"flex"}}>
          <div>
    <div style={{display:"flex",justifyContent:"start"}} ><h3 style={{margin:"20px 0 0 3vw",alignSelf:"start"}}>{cart.length} {cart.length ===1?"ITEM":"ITEMS"}</h3></div>
      <hr className='hr2'></hr>
      {
        cart.map((product)=>(
          <CartCard
          key={product.id}
          id={product.id}
          productImage={product.image_url}
          productPrice={onSale(product.totalQuantity,product.discount,product.price)}
          productName={product.title}
          productQuantity={product.totalQuantity}
          />
        ))
      }
      
      </div>
      <div className='buy-component'>
      <div style={{display:"flex",justifyContent:"start"}} ><h2>ORDER SUMMARY</h2></div>
        <hr className='hr'></hr>
        <div style={{position:"relative"}}>
        <input type='text' placeholder='HAVE A PROMO CODE?'></input><LoyaltyIcon className='loyalty'/>
        </div>
        <div style={{display:"flex",justifyContent:"space-between",marginTop:"15px"}}>
          <h4 style={{fontWeight:"600"}}>Price:</h4>
          <h4 style={{fontWeight:"600"}}>66$</h4>
        </div>
        <div style={{display:"flex",justifyContent:"space-between",marginTop:"15px"}}>
          <h4 style={{fontWeight:"600"}}>Estimated shipping:</h4>
          <h4 style={{fontWeight:"600"}}>FREE</h4>
        </div>
        <hr className='hr hr1'></hr>
        <div style={{display:"flex",justifyContent:"space-between",marginTop:"15px"}}>
          <h3 style={{fontWeight:"800"}}>ORDER TOTAL:</h3>
          <h4 style={{fontWeight:"800"}}>$104  </h4>
        </div>
        <Button variant="contained" style={{width:"100%",marginTop:"15px",backgroundColor:"black",color:"#fff",borderRadius:"0",fontFamily:"Varela Round"}}>CHECKOUT</Button>
      </div>
      </div>
      
        ):""
      }
    </>
  )
  
}
