import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/Home");
  };
  return (
    <>
      
      <section>
        <h1>This is About Us page</h1>
        <button onClick={()=> goHome()}>Go to Home Page</button>
      </section>
    </>
  );
};
export default About;
