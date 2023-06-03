import React, { useContext, useState } from "react";
import Card from '../../components/Card/Card'; // Importing 'Card' from a specific location
import { AppContext } from "../../Context/AppContext";
import "./Products.css";
import { Pagination } from "@mui/material";

export default function Products() {
  const { products } = useContext(AppContext);
  const [page, setPage] = useState(1);
  
  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo(0, 0); // Scroll to the top when the page changes.
  };
  
  const productPerPage = 12;
  const numOfPages = Math.ceil(products.length / productPerPage);
  
  return (
    <>
      <div className="card">
        {products
          .map((product) => (
            <Card
              key={product.id}
              productQuantity={product.quantity}
              productDiscount={product.discount}
              productName={product.title}
              productPrice={product.price}
              productImage={product.image_url}
              onPress={() => {}}
            />
          ))
          .slice((page - 1) * productPerPage, page * productPerPage)}
      </div>
      <div className="paginacija">
        <Pagination
          size="large"
          shape="rounded"
          color="error"
          count={numOfPages}
          page={page}
          onChange={handleChange}
        />
      </div>
    </>
  );
}
