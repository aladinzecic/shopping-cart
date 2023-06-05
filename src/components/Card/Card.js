import React, { useContext, useEffect, useState } from "react";
import Kartica from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import "./Card.css";
import { AppContext } from "../../Context/AppContext";
import { Toaster } from 'react-hot-toast'

export default function Card({
  id,
  productName,
  productPrice,
  productImage,
  productQuantity,
  productDiscount,
  addToCart,
  removeFromCart
}) {
  const { cart, onSale } = useContext(AppContext);
  const [isAdded, setIsAdded] = useState(false);
  useEffect(() => {
    if (!!cart.find((product) => product.id === id)) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  }, [id, cart]);

  return (
    <div className="around">
      <div><Toaster    position="bottom-right"
/></div>
      {productQuantity > 20 && (
        <div className="sale-div">
          <h5>Sale!</h5>
        </div>
      )}
      <div className="card-div">
        <Kartica
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
          <CardContent
            style={{
              display: "flex",
              flexDirection: "column",
              padding: 0,
              fontFamily: "Varela Round",
            }}
          >
            <Typography variant="h6" component="div" className="product-name">
              {productName}
            </Typography>
            <Typography variant="h4" component="div" className="product-price">
              {onSale(productQuantity, productDiscount, productPrice)}
            </Typography>
            <CardActions>
              {!isAdded ? (
                <Button
                  sx={{
                    width: "100%",
                    fontSize: "15px",
                    backgroundColor: "black",
                    padding: "8 0 8 0",
                    borderRadius: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "Varela Round",
                    ":hover": {
                      backgroundColor: "#7ad03a",
                      color: "white",
                    },
                  }}
                  onClick={() => {
                    addToCart(id);
                  }}
                  size="large"
                  className="btn-add"
                  variant="contained"
                >
                  <LocalGroceryStoreIcon
                    style={{ fontSize: "large", height: "19px", width: "19px" }}
                  />{" "}
                  ADD TO CART
                </Button>
              ) : (
                <Button
                  sx={{
                    width: "100%",
                    fontSize: "15px",
                    backgroundColor: "red",
                    padding: "8 0 8 0",
                    borderRadius: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "Varela Round",
                    ":hover": {
                      backgroundColor: "#970707;",
                      color: "white",
                    },
                  }}
                  onClick={
                    removeFromCart
                  }
                  size="large"
                  className="btn-add"
                  variant="contained"
                >
                  <LocalGroceryStoreIcon
                    style={{ fontSize: "large", height: "19px", width: "19px" }}
                  />{" "}
                  REMOVE FROM CART
                </Button>
              )}
            </CardActions>
          </CardContent>
        </Kartica>
      </div>
    </div>
  );
}
