import React,{useContext,useState} from 'react'
import "./cartCard.css"
import DeleteIcon from '@mui/icons-material/Delete';
import { AppContext } from '../../Context/AppContext';
export default function CartCard({
  id,
  productImage,
  productName,
  productQuantity,
  productPrice,
  productDiscount
}) {
const {increase}=useContext(AppContext)
  return (
    <>
    <div style={{width:"60vw",height:"22vh",display:"flex",margin:"20px 0 0 3vw"}}>
      <div className='imgCart'><img src={productImage} alt='/'></img></div>
      <div style={{height:"20vh",width:"10vw",display:"flex",justifyContent:"end",alignItems:"center"}}><div className='text'>{productName}</div></div>
      <div className='quantityCart' >
        <div className='quantityCart-div'>
        <div className='plus el'>+</div>
        <div className='quantityy el'>1</div>
        <div className='minus el' >-</div>
        </div>
      </div>
      <div style={{height:"20vh",width:"5vw",display:"flex",justifyContent:"end",alignItems:"center"}}><div className='text text1'>{productPrice}</div></div>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"20vw"}}>
      <div className='delete el'><DeleteIcon style={{color:"black"}}/></div>
      </div>
    </div> 
    <hr style={{margin:"20px 0 0 2vw",width:"55vw"}}></hr>
    </>
  ) 
}
