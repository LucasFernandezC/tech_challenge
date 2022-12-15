import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "../itemDetail/itemDetail";

const ItemDetailContainer = () => {
  const [detailProduct, setDetailProduct] = useState();
  const { id } = useParams(":id");

  useEffect(() => {
    getProduct().then((data) => {
      setDetailProduct(data);
    });
  }, []);

  // se va a utilizar cuando funcione la API
  const getProduct = async () => {
    return await fetch("https://fakestoreapi.com/products/" + id, {
      method: "GET",
      headers: {
        Accept: "aplication/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        return json;
      })
      .catch(() => {
        console.log("fetch error");
      });
  };

  /*  const getProduct = async () => {
    return products.find((el) => el.id == id);
*/

  return (
    <article id="results" className="container ">
      <h2 className="my-3 text-start">Detalle del producto</h2>
      {detailProduct && <ItemDetail props={detailProduct}></ItemDetail>}
    </article>
  );
};

export default ItemDetailContainer;
