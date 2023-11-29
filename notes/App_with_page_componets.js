import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../react-router/src/components/Home";
import About from "../react-router/src/components/About";
import Contact from "../react-router/src/components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
