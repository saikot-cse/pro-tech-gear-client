import { useEffect, useState } from "react";

const useProductDetails = (productId) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://aqueous-refuge-27157.herokuapp.com/product/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [productId, product]);
  return [product, setProduct, loading];
};
export default useProductDetails;
