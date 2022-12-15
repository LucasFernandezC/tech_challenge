import React from "react";
import ItemList from "../itemList/itemList";
import SearchBar from "../searchBar/searchBar";
import { useContext } from "react";
import { dataContext } from "../../context/context";

const ItemContainer = () => {
  const { filtered, setSearch } = useContext(dataContext);
  return (
    <article id="results" className="container col-12">
      <h2 className="my-3 mx-2 text-start">Productos</h2>
      <div id="resultadosBusqueda" className="col-lg-12 align-items-stretch">
        <SearchBar setSearch={setSearch} />
        <ItemList dataProducts={filtered}></ItemList>
      </div>
    </article>
  );
};

export default ItemContainer;
