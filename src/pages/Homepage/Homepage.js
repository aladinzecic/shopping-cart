import React from 'react'
import "./Homepage.css"
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const Navigation = useNavigate();

  return (
    <div className="home-container">
      <div className="home-text">
        <h1 className="home-title">
          Fresh Food<br></br> & Grocery shopping
        </h1>
        <p className="smaller-text">
          <a className="products" href='/Products' onClick={()=>{Navigation("/Products")}}>
            Check our products
          </a>
        </p>
      </div>
    </div>
  );
}
