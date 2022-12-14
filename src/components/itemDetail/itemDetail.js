import React from "react";
import { Link } from "react-router-dom";

const propsDetail = ({ props }) => {
  const handleClick = () => {
    console.log("aqui va la llamada a la api");
  };

  return (
    <div className="container py-5">
      <div className="row ">
        <article className="col-12 col-lg-5 border-end border-bottom ">
          <img
            src={props.imagen}
            className="w-100"
            alt="Producto en venta"
          ></img>
        </article>
        <article className="col-lg-2"></article>
        <article className="col-12 col-lg-5 ">
          <div className="text-start border-top border-bottom  ">
            <h3>
              {props.marca} {props.modelo}{" "}
            </h3>
            <p>
              <strong>CPU:</strong> {props.cpu}
            </p>
            <p>
              <strong>Memoria:</strong> {props.ram}
            </p>
            <p>
              <strong>Sistema Operativo:</strong>
              {props.sistemaoperativo}
            </p>
            <p>
              <strong>Resolucion de Pantalla:</strong>{" "}
              {props.resolucionpantalla}
            </p>
            <p>
              <strong>Dimensiones:</strong> {props.dimensiones}
            </p>
            <p>
              <strong>Bateria:</strong> {props.bateria}
            </p>
            <p>
              <strong>Camaras:</strong> {props.camaras}
            </p>
            <p>
              <strong>Peso: </strong>
              {props.peso}
            </p>
            <p>
              <strong>Precio:</strong> {props.precio}
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

export default propsDetail;
