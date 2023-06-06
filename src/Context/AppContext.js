import React, { createContext, useState } from "react";
import productsJSON from "../common/products.json";
import { toast } from "react-hot-toast";
const AppContext = createContext();

function ContextProvider({ children }) {
  const [products, setProducts] = useState(productsJSON);
  const [cart, setCart] = useState([]);
  const increase = (id) => {
    const product = products.find((product) => product.id === id);
    if (product.totalQuantity > 0) {
      setProducts(
        products.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              totalQuantity: product.totalQuantity - 1,
            };
          } else {
            return product;
          }
        })
      );
      setCart(
        cart.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              quantityInCart: product.quantityInCart + 1,
            };
          } else {
            return product;
          }
        })
      );
    } else {
      toast.error("There are no product in stock!");
    }
  };


  const decrease = (id) => {
    const product = cart.find((product) => product.id === id);
    if (product.quantityInCart === 1) {
      removeFromCart(id);
    } else {
      setProducts(
        products.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              totalQuantity: product.totalQuantity + 1,
            };
          } else {
            return product;
          }
        })
      );
      setCart(
        cart.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              quantityInCart: product.quantityInCart - 1,
            };
          } else {
            return product;
          }
        })
      );
    }
  };

  const addToCart = (id) => {
    if (products.find((product) => product.id === id).totalQuantity === 0) {
      toast.error("There are no product in stock!");
    } else {
      setProducts(
        products.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              totalQuantity: product.totalQuantity - 1,
            };
          } else {
            return product;
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

  const removeFromCart = (id) => {
    const productToRemove = cart.find((product) => product.id === id);
  
    if (!productToRemove) {
      // Product not found in cart
      return;
    }
  
    const quantityInCart = productToRemove.quantityInCart;
  
    setProducts((prevProducts) =>
      prevProducts.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            totalQuantity: product.totalQuantity - quantityInCart,
          };
        }
        return product;
      })
    );
  
    setCart((prevCart) => {
      const newCart = prevCart.filter((product) => product.id !== id);
      return newCart;
    });
    toast.error("Successfully removed from cart!");
  };
  const removeAllFromCart = () => {  
    setProducts(productsJSON)
    
  
    setCart(() => {
      const newCart = [];
      return newCart;
    });
  };
  function onSalePrice(quantity, discount, price){
    if (quantity > 20){
      return price-(price*discount/10)
    }
    else return price
  }
  function onSale(quantity, discount, price) {
    if (quantity > 20) {
      const discountPrice = price - (price * discount) / 10;
      return (
        <>
          <span
            style={{
              textDecoration: "line-through",
              textDecorationColor: "gray",
              color: "gray",
            }}
          >
            {price}$
          </span>
          <span
            style={{ fontSize: "32px", fontWeight: "600", marginLeft: "5px" }}
          >
            {" "}
            {discountPrice}$
          </span>
        </>
      );
    } else {
      return <h4>{price}$</h4>;
    }
  }

  const values = {
    products,
    setProducts,
    cart,
    setCart,
    addToCart,
    onSale,
    increase,
    removeFromCart,
    decrease,
    removeAllFromCart,
    onSalePrice,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}
export { AppContext, ContextProvider };
