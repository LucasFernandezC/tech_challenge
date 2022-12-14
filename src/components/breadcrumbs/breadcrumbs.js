import React from "react";
import { Link, useLocation } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

function Breadcrumbs() {
  const location = useLocation();
  const breadcrumbs = useBreadcrumbs();

  return (
    <nav className="d-flex justify-content-start mb-2">
      {breadcrumbs.map((breadcrumb) => {
        if (breadcrumb.match.pathname != "/product") {
          return (
            <Link
              to={breadcrumb.match.pathname}
              key={breadcrumb.key}
              className={
                location.pathname === breadcrumb.match.pathname
                  ? "breadcrumb-item active"
                  : "breadcrumb-item"
              }
            >
              {" > "}
              {isNaN(breadcrumb.breadcrumb.props.children)
                ? breadcrumb.breadcrumb.props.children
                : "Producto " + breadcrumb.breadcrumb.props.children}
            </Link>
          );
        }
      })}
    </nav>
  );
}

export default Breadcrumbs;
