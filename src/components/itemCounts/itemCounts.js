import React from "react";
import { useState, useContext } from "react";
import "./itemCounts.css";
import { dataContext } from "../../context/context";

const ItemCounts = (props) => {
  const [contador, setearContador] = useState(1);
  const { addProduct } = useContext(dataContext);
  const sumarItem = () => {
    setearContador(contador + 1);
  };
  const restarItem = () => {
    if (contador > 1) {
      setearContador(contador - 1);
    }
  };

  const handleClick = () => {
    let product = {
      image: props.props.image,
      price: props.props.price,
      title: props.props.title,
      count: contador,
      id: props.props.id,
    };
    addProduct(product);
  };

  return (
    <>
      <div className="d-flex justify-content-center contadorStock">
        <button onClick={restarItem}>-</button>
        <div className="align-self-end">
          <h3>{contador}</h3>
        </div>
        <button onClick={sumarItem}>+</button>
      </div>
      <div>
        <button className="button" onClick={handleClick}>
          Agregar
        </button>
      </div>
    </>
  );
};

export default ItemCounts;
