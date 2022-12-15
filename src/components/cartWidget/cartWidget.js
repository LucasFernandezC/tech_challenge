import React from "react";
import "./cartWidget.css";
import { useContext } from "react";
import { NavDropdown } from "react-bootstrap";
import { dataContext } from "../../context/context";

const CartWidget = () => {
  const { cart, cartProducts, deleteProduct, clear } = useContext(dataContext);

  return (
    <div className="cart-widget mx-5">
      <NavDropdown
        title={
          <span>
            <h2>
              <i className="bi bi-cart-fill carritoIcon"></i>
            </h2>
          </span>
        }
        id="collasible-nav-dropdown"
      >
        {cartProducts.map((product) => {
          return (
            <NavDropdown.Item key={product.id}>
              <div className="item-cart-product" key={product.id}>
                <img src={`${product.image}`} alt="" />
                <div className="cart-product__details">
                  <p>{product.title.substring(0, 10)}</p>
                </div>
                <div className="cart-product__details">
                  <p>${product.price} </p>
                </div>
                <div className="cart-product__details">
                  <p> Cant.: {product.count}</p>
                </div>
                <div className="cartwidget-product__action">
                  <div onClick={() => deleteProduct(product)}>
                    <i className="bi bi-trash"></i>
                  </div>{" "}
                </div>
              </div>
            </NavDropdown.Item>
          );
        })}
        {cart > 0 ? (
          <div className="container__btn">
            <NavDropdown.Item>
              <button
                onClick={() => clear()}
                className={"btn-delete-all cart-product__borrar"}
              >
                Vaciar carrito
              </button>
            </NavDropdown.Item>
          </div>
        ) : (
          <p>El carrito esta vacio</p>
        )}
      </NavDropdown>
      {cart > 0 ? <p className="">{cart}</p> : ""}
    </div>
  );
};

export default CartWidget;
