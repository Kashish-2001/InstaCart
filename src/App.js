import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Components import
import Navbar from "./components/Navbar/Navbar";
import NavbarResponsive from "./components/NavbarResponsive/NavbarResponsive";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features"
// import Footer from "./components/Footer/Footer";

const App = () => {
  const [hamActive, setHamActive] = useState(false);

  return (
    <div className="App">
      <Router>
        <Navbar hamActive={hamActive} setHamActive={setHamActive} />
        <NavbarResponsive hamActive={hamActive} />
         <Hero />
         <Features/>
        {/*<br />*/}
        {/*<hr className="hrFooter" />*/}
        {/*<Footer />*/}
      </Router>
    </div>
  );
};

export default App;
