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
        <article className="col-12 col-lg-4  ">
          <img
            src={props.imagen}
            className="w-100"
            alt="Producto en venta"
          ></img>
        </article>
        <article className="col-12 col-lg-8">
          <div className="text-center ">
            <h2>
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
