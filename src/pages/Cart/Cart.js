import React, { useState } from "react";
import "./Cart.css";
import { useContext } from "react";
import CartCard from "../../components/cartCard/cartCard";
import { AppContext } from "../../Context/AppContext";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
export default function Cart() {
  const navigation = useNavigate();
  const { products, cart, onSale, removeFromCart, increase, decrease } =
    useContext(AppContext);
  let [fullPrice, setFullPrice] = useState("0");
  fullPrice = cart.reduce((prev, curr) => {
    const product = products.find((p) => p.id === curr.id);
    if (product.totalQuantity > 20) {
      return (
        prev +
        (curr.price - (curr.price * curr.discount) / 10) * curr.quantityInCart
      );
    } else {
      return prev + curr.price * curr.quantityInCart;
    }
  }, 0);
  const [promo, setPromo] = useState(false);
  const [placeholder, setPlaceholder] = useState("HAVE A PROMO CODE?");
  const [discount, setDiscount] = useState("");
  const handleDiscount = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (discount == "promo code") {
        setPromo(true);
        setDiscount("");
        setPlaceholder("COUPON APPROVED!");
        toast.success("Coupon approved!")
      }
    }
  };
  return (
    <>
      {cart.length !== 0 ? (
        <div style={{ display: "flex" }}>
          <div>
            <div style={{ display: "flex", justifyContent: "start" }}>
              <h3 style={{ margin: "20px 0 0 3vw", alignSelf: "start" }}>
                {cart.length} {cart.length === 1 ? "ITEM" : "ITEMS"}
              </h3>
            </div>
            <hr className="hr2"></hr>
            {cart.map(
              (product) => (
                console.log(product.quantityInCart),
                (
                  <CartCard
                    key={product.id}
                    id={product.id}
                    productImage={product.image_url}
                    productPrice={onSale(
                      product.totalQuantity,
                      product.discount,
                      product.price
                    )}
                    productName={product.title}
                    productQuantity={product.quantityInCart}
                    onKeyDown={handleDiscount}
                    removeFromCart={() => {
                      removeFromCart(product.id);
                    }}
                    increase={() => {
                      increase(product.id);
                    }}
                    decrease={() => {
                      decrease(product.id);
                    }}
                  />
                )
              )
            )}
          </div>
          <div className="buy-component">
            <div style={{ display: "flex", justifyContent: "start" }}>
              <h2>ORDER SUMMARY</h2>
            </div>
            <hr className="hr"></hr>
            <div style={{ position: "relative" }}>
              <input
                type="text"
                id="discount"
                disabled={promo}
                name="discount"
                value={discount}
                onKeyDown={handleDiscount}
                onChange={(event) => setDiscount(event.target.value)}
                placeholder={placeholder}
              ></input>
              <LoyaltyIcon className="loyalty" />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "15px",
              }}
            >
              <h4 style={{ fontWeight: "600" }}>Price:</h4>
              <h4 style={{ fontWeight: "600" }}>${fullPrice}</h4>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "15px",
              }}
            >
              <h4 style={{ fontWeight: "600" }}>Coupon:</h4>
              <h4 style={{ fontWeight: "600" }}>-${promo ? "5" : "0"}</h4>
            </div>
            <hr className="hr hr1"></hr>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "15px",
              }}
            >
              <h3 style={{ fontWeight: "800" }}>ORDER TOTAL:</h3>
              <h4 style={{ fontWeight: "800" }}>
                ${promo ? fullPrice - 5 : fullPrice}{" "}
              </h4>
            </div>
            <Button
              variant="contained"
              onClick={() => navigation("/order", { state: { fullPrice } })}
              style={{
                width: "100%",
                marginTop: "15px",
                backgroundColor: "black",
                color: "#fff",
                borderRadius: "0",
                fontFamily: "Varela Round",
              }}
            >
              CHECKOUT
            </Button>
          </div>
        </div>
      ) : (
        <div
          style={{
            width: "100vvw",
            height: "75vh",
            backgroundColor: "#F6F6F6",
          }}
        >
          <div className="img-div">
            <img
              src="https://www.pngkey.com/png/detail/322-3224343_empty-cart-icon-png-empty-shopping-cart-icon.png"
              alt="/"
            ></img>
            <h2
              style={{
                position: "absolute",
                top: "73vh",
                left: "0",
                right: "0",
                margin: "auto",
                cursor:"pointer"
              }}
              onClick={()=>navigation("/Products")}
            >
              CART IS EMPTY
            </h2>
          </div>
        </div>
      )}
    </>
  );
}
