import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ManageInventory from "./Component/ManageInventory/ManageInventory";
import ManageItem from "./Component/ManageItem/ManageItem";
import Footer from "./Component/Shared/Footer/Footer";
import NavBar from "./Component/Shared/Navbar/NavBar";
import About from "./Pages/About/About";
import AddItems from "./Pages/AddItems/AddItems";
import Article from "./Pages/Article/Article";
import Login from "./Pages/Authentication/Login/Login";
import Register from "./Pages/Authentication/Register/Register";
import RequireAuth from "./Pages/Authentication/RequireAuth/RequireAuth";
import Home from "./Pages/Home/Home";
import Inventory from "./Pages/Inventory/Inventory";
import NotFound from "./Pages/NotFound/NotFound";
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route
          path="/inventory/:productId"
          element={
            <RequireAuth>
              <ManageItem />
            </RequireAuth>
          }
        />
        <Route path="/blogs" element={<Article />}/>
        <Route
          path="/manage"
          element={
            <RequireAuth>
              <ManageInventory />
            </RequireAuth>
          }
        />
        <Route
          path="/add"
          element={
            <RequireAuth>
              <AddItems />
            </RequireAuth>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
