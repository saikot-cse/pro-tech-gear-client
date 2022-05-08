import { motion } from "framer-motion";
import { Button, Card } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { BsFillCartCheckFill } from "react-icons/bs";
import { CgTrashEmpty } from "react-icons/cg";
import { MdManageSearch } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useProductDetails from "../../Hooks/useProductDetails";
import useProducts from "../../Hooks/useProducts";
const ManageItem = () => {
  const { productId } = useParams();
  const [product, setProduct] = useProductDetails(productId);
  const [products, setProducts] = useProducts();
  console.log(products);
  const handleDelivered = (p) => {
    const newQuantity = parseInt(p.quantity) - 1;

    const newItem = {
      name: p.name,
      desc: p.desc,
      price: p.price,
      image: p.image,
      supplierName: p.supplierName,
      quantity: newQuantity,
    };

    const url = `https://aqueous-refuge-27157.herokuapp.com/product/${productId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        toast("Item Delivered Successfully");
      });
  };
  const IncreaseStock = (p, number) => {
    const newQuantity = parseInt(p.quantity) + parseInt(number);

    const newItem = {
      name: p.name,
      desc: p.desc,
      price: p.price,
      image: p.imgage,
      supplierName: p.supplierName,
      quantity: newQuantity,
    };

    const url = `https://aqueous-refuge-27157.herokuapp.com/product/${productId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  };

  const handleRestock = (event) => {
    event.preventDefault();
    const number = parseInt(event.target.number.value);
    IncreaseStock(product, number);
    event.target.reset();
    toast("Item Re-Stocked Successfully");
  };
  const navigate = useNavigate();
  const navigateToInventory = () => {
    navigate("/manage");
  };
  return (
    <div>
      <Helmet>
        <title>Item Details - Pro Tech Gear</title>
      </Helmet>
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
              {parseInt(product.quantity) <= 0 ? (
                <Button disabled onClick={() => handleDelivered(product)} className="font-weight-bolder mx-auto d-block" variant="danger">
                  Stock Out <CgTrashEmpty className="fs-5 mb-1 ms-1" />
                </Button>
              ) : (
                <Button onClick={() => handleDelivered(product)} className="font-weight-bolder mx-auto d-block" variant="success">
                  Delivered
                  <BsFillCartCheckFill className="fs-5 mb-1 ms-1" />
                </Button>
              )}
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="w-50 rounded-3 p-5 container">
        <div>
          <h2 className="text-info mb-5 text-center">Restock Inventory</h2>
          <form onSubmit={handleRestock}>
            <div>
              <input style={{ borderColor: "#0DCAF0", width: "100%" }} className=" mb-3 rounded-3 p-2  d-block mx-auto" placeholder="Re-Stock Quantity" name="number" type="number" required />
            </div>
            <input className="d-block mx-auto btn btn-info text-white" type="submit" required value="Restock" />
          </form>
        </div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Button onClick={navigateToInventory} className="text-white d-block mx-auto mt-4 mb-5" variant="info">
            <MdManageSearch className="fs-4 mb-1" />
            Manage Inventories
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default ManageItem;
