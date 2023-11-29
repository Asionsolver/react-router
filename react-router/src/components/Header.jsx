import React from "react";

import { NavLink, Outlet } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
    <Outlet/>
    </>
  );
}

export default Header;
