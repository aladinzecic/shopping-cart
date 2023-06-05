import React, { useContext, useState } from "react";
import "./cartCard.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { AppContext } from "../../Context/AppContext";
import { Toaster } from 'react-hot-toast'

export default function CartCard({
  productId,
  productImage,
  productName,
  productQuantity,
  productPrice,
  productDiscount,
  removeFromCart,
  increase,
  decrease
}) {
  const totalPrice = productPrice * productQuantity;
  return (
    <>
    <div><Toaster    position="bottom-right"/></div>
      <div
        style={{
          width: "60vw",
          height: "22vh",
          display: "flex",
          margin: "20px 0 0 3vw",
        }}
      >
        <div className="imgCart">
          <img src={productImage} alt="/"></img>
        </div>
        <div
          style={{
            height: "20vh",
            width: "10vw",
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <div className="text">{productName}</div>
        </div>
        <div className="quantityCart">
          <div className="quantityCart-div">
            <div className="plus el" onClick={increase}>
              +
            </div>
            <div className="quantityy el">{productQuantity}</div>
            <div className="minus el" onClick={decrease}>-</div>
          </div>
        </div>
        <div
          style={{
            height: "20vh",
            width: "5vw",
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <div className="text text1">{productPrice}</div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "20vw",
          }}
        >
          <div className="delete el" onClick={removeFromCart}>
            <DeleteIcon style={{ color: "black" }} />
          </div>
        </div>
      </div>
      <hr style={{ margin: "20px 0 0 2vw", width: "55vw" }}></hr>
    </>
  );
}
