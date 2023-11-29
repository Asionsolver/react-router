import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <header>
        <h1>This is Home Page</h1>
        <nav>
          <ul>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
