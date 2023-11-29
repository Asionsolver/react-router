import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>This is home page</h1>} />
        <Route path="/about" element={<h1>This is about us page</h1>} />
        <Route path="contact" element={<h1>This is contact us page</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
