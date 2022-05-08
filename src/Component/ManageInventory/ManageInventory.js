import React from "react";
import { Button } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Product from "../../Component/Product/Product";
import useProducts from "../../Hooks/useProducts";
import Loading from "../Loading/Loading";
import { IoAddCircle } from "react-icons/io5";
const ManageInventory = () => {
  const [products, setProducts, loading] = useProducts();
  const navigate = useNavigate();
  const handleAddItem = () => {
    navigate("/add");
  };
  return (
    <div className="d-grid container">
      <Helmet>
        <title>Manage Inventory - Pro Tech Gear</title>
      </Helmet>
      <div className="d-flex justify-content-between mt-5">
        <h1 className="text-center text-info">Manage Inventory</h1>
        <Button onClick={handleAddItem} className="text-white fw-bold" variant="info">
          Add Items<IoAddCircle className="fs-5 ms-1"/>
        </Button>
      </div>
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div className="row">
            {products.map((product) => (
              <Product key={product._id} product={product} loading={loading} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageInventory;
