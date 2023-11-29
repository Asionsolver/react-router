import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <header>
        <h1>This is About Us page</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            
          </ul>
        </nav>
      </header>
    </>
  );
}
