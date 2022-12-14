import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../../utils/products";
import ItemDetail from "../itemDetail/itemDetail";

const ItemDetailContainer = () => {
  const [detailProduct, setDetailProduct] = useState({});
  const { id } = useParams(":id");

  /* se va a utilizar cuando funcione la API
  const getProduct = async () => {
    const info = await fetch(
      "https://front-test-api.herokuapp.com/api/product",
      {
        method: "GET",
        mode: "no-cors",
      }
    )
      .then(() => {
        return info;
      })
      .catch(() => {
        console.log("fetch error");
      });
  };
*/

  const getProduct = async () => {
    return products.find((el) => el.id == id);
  };
  useEffect(() => {
    getProduct().then((data) => {
      setDetailProduct(data);
    });
  }, []);

  return (
    <article id="results" className="container ">
      <h2 className="my-3 text-start">Detalle del producto</h2>
      <ItemDetail props={detailProduct} />
    </article>
  );
};
//<ItemDetail dataProducts ={Product}></ItemDetail>
export default ItemDetailContainer;
