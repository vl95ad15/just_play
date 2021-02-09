import React from "react";
import { Link } from "react-router-dom";

function RegBarMenu({ pathTo, title }) {
  return (
    <header className="RegBarMenu">
      <Link to={pathTo}>{title}</Link>
    </header>
  );
}

export default RegBarMenu;
