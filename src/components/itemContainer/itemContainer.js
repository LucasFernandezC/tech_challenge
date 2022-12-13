import React from "react";
import ItemList from "../itemList/itemList";
import SearchBar from "../searchBar/searchBar";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { dataContext } from "../../context/context";

const ItemContainer = ({ section }) => {
  //const [listProducts, setListProducts] = useState([]);
  const { listProducts } = useContext(dataContext);

  const [search, setSearch] = useState("");

  useEffect(() => {}, []);

  useEffect(() => {
    setSearch("");
  }, [search]);

  return (
    <article id="results" className="col-md-12">
      <h2 className="my-2 mx-2 text-start">Resultados</h2>
      <div
        id="resultadosBusqueda"
        className="busquedaresults col-lg-12 align-items-stretch"
      >
        <SearchBar setSearch={setSearch} />
        <ItemList dataProducts={listProducts}></ItemList>
      </div>
    </article>
  );
};

export default ItemContainer;
