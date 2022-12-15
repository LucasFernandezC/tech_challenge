import React from "react";
import "./cartWidget.css";
import { useContext } from "react";
import { dataContext } from "../../context/context";

const CartWidget = () => {
  const { cart } = useContext(dataContext);

  return (
    <div className="cart-widget mx-5">
      <span>
        <h2>
          <i className="bi bi-cart-fill"></i>
        </h2>
      </span>

      {cart > 0 ? <p className="">{cart}</p> : ""}
    </div>
  );
};

export default CartWidget;
