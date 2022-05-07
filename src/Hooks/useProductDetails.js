import { useEffect, useState } from "react";

const useProductDetails = (productId) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/product/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [productId,product]);
  return [product, setProduct,loading];
};
export default useProductDetails;
