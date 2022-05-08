import { motion } from "framer-motion";
import React from "react";
import { Button, Card } from "react-bootstrap";
import { MdCollections, MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
const Product = ({ product, hideDelete, loading }) => {
  const { _id, name, price, image, desc, supplierName, quantity } = product;
  const navigate = useNavigate();

  const handleManageItem = (id) => {
    navigate(`/inventory/${id}`);
  };
  const [products, setProducts] = useProducts();
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      fetch(`https://aqueous-refuge-27157.herokuapp.com/product/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = products.filter((product) => product._id !== id);
            setProducts(remaining);
          }
        });
    }
  };
  return (
    <motion.div whileHover={{ scale: 1.1 }} className="col-md-6 col-sm-12 g-lg-5 g-sm-3">
      <Card className="mb-3">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>
            <span className="text-info fw-bold">{name}</span>
          </Card.Title>
          <div className="d-flex justify-content-between">
            <Card.Text className="fw-bold">Price: ${price}</Card.Text>
            <Card.Text className="fw-bold">Quantity: {quantity}</Card.Text>
          </div>
          <Card.Text className="fw-bold">
            Supplier Name: <span className="text-info fw-bold">{supplierName}</span>
          </Card.Text>
          <Card.Text className="lh-lg">{desc}</Card.Text>
          <div className="d-flex justify-content-between">
            {hideDelete !== undefined ? (
              <>
              <motion.div whileHover={{ scale: 1.1 }}>

              </motion.div>
                <Button onClick={() => handleManageItem(_id)} className="font-weight-bolder text-white mx-auto d-block" variant="info">
                  <MdCollections className="fs-5 mb-1" /> Stock Update
                </Button>
              </>
            ) : (
              <>
                <Button onClick={() => handleManageItem(_id)} className="font-weight-bolder text-white" variant="info">
                  <MdCollections className="fs-5 mb-1" /> Stock Update
                </Button>
                <Button onClick={() => handleDelete(_id)} className="font-weight-bolder" variant="danger">
                  <MdDelete className="fs-5 mb-1" /> Delete
                </Button>
              </>
            )}
          </div>
        </Card.Body>
      </Card>
      </motion.div>
  );
};

export default Product;
