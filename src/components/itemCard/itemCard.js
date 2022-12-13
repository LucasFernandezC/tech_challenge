import React from "react";
import "./itemCard.css";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

const ItemCard = ({ props }) => {
  const onAdd = () => {
    console.log("hice click");
  };

  return (
    <div className="col-3 ">
      <article className="card busquedaresults__card mx-1 my-2">
        <img
          src={props.imagen}
          className="card-img-top"
          alt="Repuesto en venta"
        ></img>
        <div className="card-body text-center">
          <h5 className="card-title titulotarjeta">
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

          <Link
            to={`/product/${props.id}`}
            className="btn btn-primary start"
            id="agregar1"
          >
            Detalles
          </Link>
        </div>
      </article>
    </div>
  );
};
//<ItemCounts inicial="1" stock={props.stock} onAdd={onAdd} />
export default ItemCard;
