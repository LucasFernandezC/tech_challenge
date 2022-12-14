import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../cartWidget/cartWidget";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";

const Header = () => {
  return (
    <header className="row bg-white border-bottom">
      <div className="col-8 d-flex justify-content-start">
        <Link
          to="/"
          className="animate__animated animate__zoomInDown mx-5 my-2"
        >
          <img
            src="/img/logo.png"
            className="rounded"
            alt="Logo de la empresa"
            title="Logo"
          ></img>
        </Link>
      </div>
      <div className="d-flex col-4 justify-content-end align-self-center">
        <CartWidget />
      </div>
      <div>
        <Breadcrumbs />
      </div>
    </header>
  );
};

export default Header;
