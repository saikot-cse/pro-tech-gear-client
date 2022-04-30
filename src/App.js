import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./Component/Shared/Footer/Footer";
import NavBar from "./Component/Shared/Navbar/NavBar";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Inventory from "./Pages/Inventory/Inventory";
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/inventory" element={<Inventory />}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
