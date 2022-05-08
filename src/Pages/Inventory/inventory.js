import React from "react";
import { Button } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { IoAddCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Loading from "../../Component/Loading/Loading";
import Product from "../../Component/Product/Product";
import useProducts from "../../Hooks/useProducts";
import { motion } from "framer-motion";
const Inventory = () => {
  const [products, setProducts, loading] = useProducts();
  const navigate = useNavigate();
  let hideDelete = 1;
  const handleAddItem = () => {
    navigate("/add");
  };
  return (
    <div className="d-grid container">
      <Helmet>
        <title>Inventory - Pro Tech Gear</title>
      </Helmet>
      <div className="d-flex justify-content-between mt-5">
        <h1 className="text-center text-info">Our Inventory</h1>
        <motion.div whileHover={{scale: 1.1}}>
          <Button onClick={handleAddItem} className="text-white fw-bold" variant="info">
            Add Items <IoAddCircle className="fs-5 ms-1" />
          </Button>
        </motion.div>
      </div>
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div className="row">
            {products.map((product) => (
              <Product key={product._id} product={product} hideDelete = {hideDelete}/>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Inventory;
