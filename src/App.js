import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Hero/>
        <br/>
        <hr className="hrFooter"/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
