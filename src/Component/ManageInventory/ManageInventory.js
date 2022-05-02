import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useProductDetails from "../../Hooks/useProductDetails";
const ManageInventory = () => {
  const { productId } = useParams();
  const [product] = useProductDetails(productId);
  const handleDelivered = (quantity) => {
    
  };
  return (
    <div>
      <h2 className="text-info text-center my-5">Details of: {product.name}</h2>
      <div className="col-md-6 col-sm-12 g-lg-5 g-sm-3 mx-auto d-block">
        <Card className="mb-3">
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>
              <span className="text-info fw-bold">{product.name}</span>
            </Card.Title>
            <div className="d-flex justify-content-between">
              <Card.Text className="fw-bold">Price: ${product.price}</Card.Text>
              <Card.Text className="fw-bold">Quantity: {product.quantity}</Card.Text>
            </div>
            <Card.Text className="fw-bold">
              Supplier Name: <span className="text-info fw-bold">{product.supplierName}</span>
            </Card.Text>
            <Card.Text className="lh-lg">{product.desc}</Card.Text>
            <div className="d-flex justify-content-between">
              <Button onClick={() => handleDelivered(product.quantity)} className="font-weight-bolder mx-auto d-block" variant="success">
                Delivered
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ManageInventory;
