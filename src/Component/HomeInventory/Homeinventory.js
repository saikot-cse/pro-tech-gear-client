import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import Product from "../Product/Product";
import { MdManageSearch } from "react-icons/md";
const Homeinventory = () => {
  const [products] = useProducts();
  const navigate = useNavigate();
  const navigateToInventory = () => {
    navigate("/inventory");
  };
  return (
    <div>
      <h2 className="text-center">
        Our <span className="text-info d-block">Inventory</span>
      </h2>
      <div className="bg-info mx-auto rounded-3" style={{ width: "175px", height: "4px" }}>
        .
      </div>
      <p className="text-center my-3">Through our experienced operations team we can handle various kind of supply chain operations and services</p>
      <div className="d-grid container">
        <div className="row">
          {products.slice(0, 6).map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Button onClick={navigateToInventory} className="text-white d-block mx-auto mt-4 mb-5" variant="info">
        <MdManageSearch className="fs-4 mb-1" />Manage Inventories
      </Button>
    </div>
  );
};

export default Homeinventory;
