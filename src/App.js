import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import NavbarResponsive from "./components/NavbarResponsive/NavbarResponsive";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  const [hamActive, setHamActive] = useState(false);
  return (
    <div className="App">
      <Router>
        <Navbar hamActive={hamActive} setHamActive={setHamActive} />
        <NavbarResponsive hamActive={hamActive} />
        <Hero />
        <br />
        <hr className="hrFooter" />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
