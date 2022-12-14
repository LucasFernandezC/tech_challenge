import React from "react";
import ItemCard from "../itemCard/itemCard";

const ItemList = ({ dataProducts }) => {
  return (
    <>
      <div className=" row mx-5">
        {dataProducts.length > 0 &&
          dataProducts.map((el) => {
            return <ItemCard key={el.id} props={el} />;
          })}
        {dataProducts.length == 0 && (
          <p>No hay productos con los criterios de busqueda seleccionados</p>
        )}
      </div>
    </>
  );
};

export default ItemList;
