import React from "react";
import { createContext, useState, useEffect } from "react";
import products from "../utils/products";
import moment from "moment/moment";

const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [listProducts, setListProducts] = useState([]);
  const [localTimestamp, setLocalTimestamp] = useState();
  const [passHour, setPassHour] = useState(false);

  const getProducts = async () => {
    return products;
  };

  const checkProvider = () => {
    if (
      localTimestamp &&
      moment().unix().toString() < localTimestamp.toString()
    ) {
      const data = JSON.parse(localStorage.getItem("data"));
      setListProducts(data);
    } else {
      getProducts().then((res) => {
        setListProducts(res);
        localStorage.setItem("data", JSON.stringify(res));
        localStorage.setItem("timestamp", moment().add(1, "h").unix());
        setLocalTimestamp(moment().add(1, "h").unix());
      });
    }
    setPassHour(false);
  };

  useEffect(() => {
    setLocalTimestamp(localStorage.getItem("timestamp"));
    checkProvider();
  }, []);

  useEffect(() => {
    checkProvider();
    setTimeout(() => {
      setPassHour(true);
    }, 60000);
  }, [passHour]);

  /* Cuando la API funcione se tomaran los datos desde el endpoint
  const getProducts = async () => {
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
  const data = {
    listProducts,
  };

  return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
};

export default DataProvider;

export { dataContext };
