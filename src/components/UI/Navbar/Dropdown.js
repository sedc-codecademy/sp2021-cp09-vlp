import React from "react";
import classes from "./Navbar.module.scss";
import { Link } from "react-router-dom";

function Dropdown({ subitem, nextLinks }) {
  return (
    <div className={classes.dropdown}>
      <ul>
        {subitem.map(subitem =>
          nextLinks ? (
            <Link to={subitem.target} key={subitem.target}>
              <li>{subitem.linkTitle}</li>
            </Link>
          ) : (
            <li>
              <a href={subitem.target}>{subitem.linkTitle}</a>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default Dropdown;
