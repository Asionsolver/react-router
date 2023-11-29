import React from "react";
import { NavLink } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
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

      <section>
        <h1>This is Contact Us page</h1>
      </section>
    </>
  );
}
