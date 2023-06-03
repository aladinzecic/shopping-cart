import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';import "./Card.css";






function onSale(quantity,discount,price){
  if (quantity>20){
    const discountPrice=price-(price*discount/10)
    return(
      <>
      <span style={{textDecoration: "line-through",textDecorationColor: "gray",color:"gray"}}>{price}$</span><span style={{fontSize:"32px",fontWeight:"600"}}>        {discountPrice}$</span>
      </>
    )
  }
  else{
    return(
      <h4>{price}$</h4>
    )
  }
}


export default function Kartica({
  productName,
  productPrice,
  productImage,
  productQuantity,
  productDiscount,
  onClick,
})
{
  return (
    <div className="around">
      {productQuantity>20&&<div className="sale-div"><h5>Sale!</h5></div>}
      <div className="card-div">
      
        <Card
          sx={{
            minWidth: 270,
            height: 400,
            backgroundColor: "#ece6ff",
            border: 0,
            boxShadow: 0,
          }}
        >
          <CardMedia
            className="card-img"
            sx={{ height: 250, width: "100%" }}
            image={productImage}
            title=""
          />
          <CardContent style={{ display: "flex", flexDirection: "column",padding:0,fontFamily:"Varela Round" }}>
            <Typography
            
              gutterBottom
              variant="h6"
              component="div"
              className="product-name"
              
               
            >
              {productName}
            </Typography>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              className="product-price"
            >
              {onSale(productQuantity,productDiscount,productPrice)}
            </Typography>
            <CardActions>
              <Button
              sx={{ width:"100%",fontSize:"15px",backgroundColor:"black",padding:"8 0 8 0",borderRadius:0,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"Varela Round",":hover": {
                backgroundColor: "#7ad03a",
                color: "white"
              } }}
                onClick={onClick}
                size="large"
                className="btn-add"
                gutterBottom
                variant="contained"
              >
                <LocalGroceryStoreIcon style={{fontSize:"large",height:"19px",width:"19px"}}/>   ADD TO CART
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
