import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Card.css";
export default function Kartica({
  productName,
  productPrice,
  productImage,
  onClick,
}) {
  return (
    <div className="around">
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
          <CardContent style={{ display: "flex", flexDirection: "column",padding:0 }}>
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
              {productPrice} $
            </Typography>
            <CardActions>
              <Button
              sx={{ width:"100%",backgroundColor:"#2e5b36",padding:"8 0 8 0" }}
                onClick={onClick}
                size="large"
                className="btn-add"
                gutterBottom
                variant="contained"
              >
                ADD TO CART
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
