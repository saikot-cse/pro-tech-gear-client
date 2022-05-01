import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./Component/Shared/Footer/Footer";
import NavBar from "./Component/Shared/Navbar/NavBar";
import About from "./Pages/About/About";
import Register from "./Pages/Authentication/Register/Register";
import Login from "./Pages/Authentication/Login/Login";
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
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element= {<Login />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
