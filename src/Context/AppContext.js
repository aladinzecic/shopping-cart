import React, { createContext, useState } from "react";
import productsJSON from "../common/products.json";
import { toast } from "react-hot-toast";
const AppContext = createContext();

function ContextProvider({ children }) {
  const [products, setProducts] = useState(productsJSON);
  const [cart, setCart] = useState([]);

  // const increase = (id) => {
  //   const product = products.find((product) => product.id === id);
  //   if (product.totalQuantity > 0) {
  //     setCart(
  //       cart.map((product)=>{
  //         if(product.id===id){
  //           return{
  //             ...product,
  //             totalQuantity: product.totalQuantity + 1,
  //           }
  //         }
  //         else{
  //           return product
  //         }
  //       })
  //     )
  //     setCart(
  //       cart.map((product)=>{
  //         if(product.id===id){
  //           return{
  //             ...product,
  //             quantityInCart: product.quantityInCart + 1,
  //           }
  //         }
  //         else{
  //           return product
  //         }
  //       })
  //     )
  //   }
  //   else{
  //     toast.error("There are no product in stock!")
  //   }
  // };
  const addToCart = (id) => {
    if (products.find((product) => product.id === id).totalQuantity === 0) {
      toast.error("There are no product in stock!");
    } else {
      setProducts(
        products.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              totalQuantity: product.totalQuantity + 1,
            };
          } else {
            return {
              ...product,
            };
          }
        })
      );
      setCart((prev) => [
        ...prev,
        {
          ...products.find((product) => product.id === id),
          quantityInCart: 1,
        },
      ]);
      toast.success("Successfully added to cart!");
    }
  };
  function onSale(quantity,discount,price){
    if (quantity>20){
      const discountPrice=price-(price*discount/10)
      return(
        <>
        <span style={{textDecoration: "line-through",textDecorationColor: "gray",color:"gray"}}>{price}$</span><span style={{fontSize:"32px",fontWeight:"600",marginLeft:"5px"}}>          {discountPrice}$</span>
        </>
      )
    }
    else{ 
      return(
        <h4>{price}$</h4>
      )
    }
  }

  const values = {
    products,
    setProducts,
    cart,
    setCart,
    addToCart,
    onSale
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}
export { AppContext, ContextProvider };
