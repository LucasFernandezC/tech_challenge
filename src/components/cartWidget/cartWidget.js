import React from "react";
import "./cartWidget.css";

const CartWidget = () => {
  const cartCantidad = 5;

  return (
    <div className="cart-widget mx-5">
      <span>
        <h2>
          <i className="bi bi-cart-fill"></i>
        </h2>
      </span>

      {cartCantidad > 0 ? <p className="">{cartCantidad}</p> : ""}
    </div>
  );
};

export default CartWidget;
