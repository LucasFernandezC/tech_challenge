import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { dataContext } from "../../context/context";

const ItemDetail = ({ props }) => {
  const { setCart, cart } = useContext(dataContext);
  const handleClick = () => {
    console.log("aqui va la llamada a la api");
    setCart(cart + 1);
  };

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
            <div>
              <button className="button" onClick={handleClick}>
                Agregar
              </button>
            </div>
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
