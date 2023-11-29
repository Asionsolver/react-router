import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const goToContact = () => {
    navigate("/contact");
  };

  const goToAbout = () => {
    navigate("/about");
  }

  return (
    <>
      <section>
        <h1>This is Home page</h1>
        <button onClick={()=> goToAbout()}>Go to About Page</button>
        <br/>
        <br/>
        <button onClick={()=> goToContact()}>Go to Contact Page</button>
        
      </section>
    </>
  );
}
