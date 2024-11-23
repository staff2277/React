import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero";
import Contact from "./pages/Contact";
import About from "./pages/About";

const App = () => {
  return (
    <div className='px-10 dee-only:px-2 bg-[#e7dfc6] '>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
