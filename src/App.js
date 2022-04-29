import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Component/Shared/Navbar/NavBar";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </div>
  );
}

export default App;
