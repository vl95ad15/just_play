import { Link } from "react-router-dom";

import "./MenuItem.css";

function MenuItem({ title, pathTo }) {
  return (
    <span className="MenuItem">
      <Link to={pathTo}>{title}</Link>
    </span>
  );
}

export default MenuItem;
