import React from "react";
import "./itemCard.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const ItemCard = ({ props }) => {
  return (
    <div className="col-12 col-md-3 m-auto ">
      <article className="card mx-1 my-2">
        <img src={props.imagen} className="m-1" alt="producto en venta"></img>
        <div className="card-body text-center">
          <h5 className="card-title ">
            {props.marca} {props.modelo}
          </h5>
          <p className="card-text">{props.ram}</p>
          <p>
            <strong>SO: </strong>
            {props.sistemaoperativo}
          </p>
          <p>
            <strong>Precio: $ </strong>
            {props.precio}
          </p>

          <Link to={`/product/${props.id}`} className="link">
            <button className="button">Detalles</button>
          </Link>
        </div>
      </article>
    </div>
  );
};

export default ItemCard;
