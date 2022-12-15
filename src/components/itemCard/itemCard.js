import React from "react";
import "./itemCard.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const ItemCard = ({ props }) => {
  return (
    <div className="col-12 col-md-3">
      <article className="card mx-1 my-2">
        <div className="d-flex" style={{ height: "300px" }}>
          <img
            src={props.image}
            className="m-2 img-fluid mx-auto"
            alt="producto en venta"
          ></img>
        </div>
        <div className="card-body text-center">
          <h5 className="card-title ">{props.title.substring(0, 15)}</h5>
          <p>{props.description.substring(0, 30)}...</p>
          <p>
            <strong>Precio: $ </strong>
            {props.price}
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
