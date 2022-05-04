import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Product from "../../Component/Product/Product";
import useProducts from "../../Hooks/useProducts";

const Inventory = () => {
  const [products] = useProducts();
  const navigate = useNavigate();
  const handleAddItem = ()=>{
    navigate('/add');
  }
  return (
    <div className="d-grid container">
      <div className="d-flex justify-content-between mt-5">
        <h1 className="text-center text-info">Our Inventory</h1>
        <Button onClick={handleAddItem} className="text-white fw-bold" variant="info">
          Add Items
        </Button>
      </div>
      <div className="row">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Inventory;
