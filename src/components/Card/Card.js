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
  currencySign,
  onClick,
}) {
  return (
    <Card sx={{ maxWidth: 450 }}>
      <CardMedia sx={{ height: 250 }} image={productImage} title="" />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="product-name"
        >
          {productName}
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="product-price"
        >
          {productPrice}
          {currencySign}
        </Typography>
        <CardActions>
          <Button onClick={onClick} size="small" className="btn-add">
            ADD TO CART
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}