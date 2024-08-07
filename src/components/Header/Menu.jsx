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
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/services">services</Link>
        </li>
        <li>
          <Link to="https://wa.me/2347049668561" target="_blank">contact us</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
