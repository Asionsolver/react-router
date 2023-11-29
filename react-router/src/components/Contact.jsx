import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <header>
        <h1>This is Contact Us page</h1>
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
