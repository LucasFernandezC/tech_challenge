import React from "react";
import { Link } from "react-router-dom";
//import { useContext } from "react";
//import { dataContext } from "../../context/context";
import ItemCounts from "../itemCounts/itemCounts";

const ItemDetail = ({ props }) => {
  //const { setCart, cart, setCartProducts, cartProducts } =
  //  useContext(dataContext);
  /*const handleClick = () => {
    setCart(cart + 1);
    let producto = {
      image: props.image,
      price: props.price,
      title: props.title,
      id: props.id,
    };
    setCartProducts([...cartProducts, producto]);
  };
*/
  return (
    <div className="container py-5">
      <div className="row ">
        <article className="col-12 col-lg-5 border-end border-bottom ">
          <img
            src={props.image}
            className="w-100"
            alt="Producto en venta"
          ></img>
        </article>
        <article className="col-lg-2"></article>
        <article className="col-12 col-lg-5 ">
          <div className="text-start border-top border-bottom  ">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p>
              <strong>Categoria: </strong>
              <strong>{props.category}</strong>
            </p>
            <p>
              <strong>Calificación: </strong>
              {props.rating.rate}
            </p>

            <p>
              <strong>Precio:</strong> {props.price}
            </p>
          </div>
          <div className="d-flex flex-column border-top border-bottom">
            <h2>Acciones</h2>
            <ItemCounts props={props} />

            <Link to={"/"}>
              <button className="button button-grey my-1">Regresar</button>
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ItemDetail;
