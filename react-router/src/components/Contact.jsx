import React from "react";
import { useNavigate } from "react-router-dom";


export default function Contact() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/Home");
  };
  return (
    <>
     
      <section>
        <h1>This is Contact Us page</h1>
        <button onClick={()=> goHome()}>Go to Home Page</button>
      </section>
    </>
  );
}
