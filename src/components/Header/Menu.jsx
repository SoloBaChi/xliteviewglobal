import React from "react";
import { Link } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";

function Menu() {
  return (
    <div className="menu-container">
      <ul className="list-menu">
        <div className="close-icon">
          <span>
            <RiCloseLine />
          </span>
        </div>
        <li>
          <Link to="/">home</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
