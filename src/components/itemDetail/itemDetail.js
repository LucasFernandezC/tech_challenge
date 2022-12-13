import React from "react";
import { Link } from "react-router-dom";

const propsDetail = ({ props }) => {
  const handleClick = () => {
    console.log("aqui va la llamada a la api");
  };

  return (
    <div className="container">
      <h2 className="my-3">Detalle del producto</h2>
      <div className="row">
        <article className="col-4 ">
          <img
            src={props.imagen}
            className="card-img-top mx-5"
            alt="Auto en venta"
          ></img>
        </article>
        <article className="col-7 ">
          <div className="text-center propsdetailcontainer__texto">
            <h2 className="">
              {props.marca} {props.modelo}{" "}
            </h2>
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
          <div className="d-flex flex-column">
            <h2>Acciones</h2>
            <div>
              <button className="btn btn-primary my-1" onClick={handleClick}>
                Agregar
              </button>
            </div>
            <Link to={"/"}>
              <button className="btn btn-secondary my-1">Regresar</button>
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
};

export default propsDetail;
