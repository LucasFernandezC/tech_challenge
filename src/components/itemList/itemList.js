import React from "react";
import ItemCard from "../itemCard/itemCard";

const ItemList = ({ dataProducts }) => {
  return (
    <>
      <div className=" row ">
        {dataProducts.map((el) => {
          return <ItemCard props={el} />;
        })}
      </div>
    </>
  );
};

export default ItemList;
