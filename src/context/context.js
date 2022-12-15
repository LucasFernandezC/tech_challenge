import React from "react";
import { createContext, useState, useEffect } from "react";
//Mock de datos
//import products from "../utils/products";
import moment from "moment/moment";

const dataContext = createContext();

const DataProvider = ({ children }) => {
  //informacion completa de productos
  const [listProducts, setListProducts] = useState([]);
  const [localTimestamp, setLocalTimestamp] = useState();
  const [passHour, setPassHour] = useState(false);
  //valor de busqueda
  const [search, setSearch] = useState("");
  //informacion que paso para ser renderizada
  const [filtered, setFiltered] = useState([]);
  //constante de cart
  const [cart, setCart] = useState(0);

  /*version con Mock hasta que funciono la api
  const getProducts = async () => {
    return products;
  };*/

  /* En esta funcion lo que hago es verificar si la informacion almacenada en local storage esta vigente 
  o vencio el plazo de 1 hora. En caso de que se cumpla el tiempo hago un refetch y actualizo local storage*/
  const checkProvider = (call) => {
    if (
      localTimestamp &&
      moment().unix().toString() < localTimestamp.toString()
    ) {
      if (call == 0) {
        const data = JSON.parse(localStorage.getItem("data"));
        setListProducts(data);
      }
    } else {
      getProducts().then((data) => {
        setListProducts(data);
        localStorage.setItem("data", JSON.stringify(data));
        localStorage.setItem("timestamp", moment().add(1, "h").unix());
        setLocalTimestamp(moment().add(1, "h").unix());
      });
    }

    setPassHour(false);
  };

  //Verifico si tengo informacion en local storage
  useEffect(() => {
    setLocalTimestamp(localStorage.getItem("timestamp"));
    checkProvider(0);
    setCart(0);
  }, []);

  //verifico cada 1 minuto si se ha cumplido el plazo de vigencia de la informacion
  useEffect(() => {
    checkProvider(1);
    setTimeout(() => {
      setPassHour(true);
    }, 60000);
  }, [passHour]);

  // Cuando la API funcione se tomaran los datos desde el endpoint
  const getProducts = async () => {
    return fetch("https://fakestoreapi.com/products", {
      method: "GET",
      headers: {
        Accept: "aplication/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data;
      });
  };

  useEffect(() => {
    search != "" ? filterItems() : setFiltered(listProducts);
  }, [search, listProducts]);

  //aplico filtro sobre el listado de productos por titulo o categoria en lugar de marca y modelo

  const filterItems = () => {
    search &&
      setFiltered(
        listProducts.filter(
          (product) =>
            product.title.toLowerCase() == search.toLowerCase() ||
            product.category.toLowerCase() == search.toLowerCase()
        )
      );
  };
  const data = {
    filtered,
    setSearch,
    cart,
    setCart,
  };

  return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
};

export default DataProvider;

export { dataContext };
