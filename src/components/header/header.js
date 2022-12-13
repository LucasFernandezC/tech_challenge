import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../cartWidget/cartWidget";

const Header = () => {
  return (
    <header className="row bg-secondary">
      <div className="col-8 d-flex justify-content-start">
        <Link
          to="/"
          className="animate__animated animate__zoomInDown mx-5 my-2"
        >
          <img
            src="/img/logo.jpg"
            className="rounded"
            alt="Logo de la empresa"
            title="Logo"
          ></img>
        </Link>
      </div>
      <div className="d-flex col-4 justify-content-end align-self-center">
        <CartWidget />
      </div>
    </header>
  );
};

export default Header;
