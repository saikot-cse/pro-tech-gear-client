import React from "react";
import { Button, Card } from "react-bootstrap";

const Product = ({ product }) => {
  const { name, price, image, desc, supplierName, quantity } = product;
  return (
    <div className="col-md-6 col-sm-12 g-lg-5 g-sm-3">
      <Card className="mb-3">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title className="font-weight-bolder">{name}</Card.Title>
          <div className="d-flex justify-content-between">
            <Card.Text className="font-weight-bolder">Price: ${price}</Card.Text>
            <Card.Text className="font-weight-bolder">Quantity: {quantity}</Card.Text>
          </div>
          <Card.Text className="font-weight-bolder">Supplier Name: {supplierName}</Card.Text>
          <Card.Text>{desc}</Card.Text>
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
    </div>
  );
};

export default Product;
