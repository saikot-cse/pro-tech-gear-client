import React from "react";
import { Button, Card } from "react-bootstrap";
import { motion } from "framer-motion";
const Product = ({ product }) => {
  const { name, price, image, desc, supplierName, quantity } = product;
  return (
    <motion.div whileHover={{scale: 1.10}} className="col-md-6 col-sm-12 g-lg-5 g-sm-3">
      <Card className="mb-3">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title><span className="text-info fw-bold"></span></Card.Title>
          <div className="d-flex justify-content-between">
            <Card.Text className="fw-bold">Price: ${price}</Card.Text>
            <Card.Text className="fw-bold">Quantity: {quantity}</Card.Text>
          </div>
          <Card.Text className="fw-bold">Supplier Name: <span className="text-info fw-bold">{supplierName}</span></Card.Text>
          <Card.Text className="lh-lg">{desc}</Card.Text>
          <div className="d-flex justify-content-between">
            <Button className="font-weight-bolder" variant="info">
              Manage
            </Button>
            <Button className="font-weight-bolder" variant="danger">
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default Product;
