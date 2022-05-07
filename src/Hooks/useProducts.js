import { useEffect, useState } from "react";

const useProducts = ()=>{
  const [products,setProducts] = useState([]);
  const [loading,setLoading] = useState(true);
  useEffect(()=>{
    fetch('http://localhost:5000/product')
    .then(res=>res.json())
    .then(data=>{
      setProducts(data)
      setLoading(false)
    })
    
  },[products])
  return [products, setProducts,loading];
}

export default useProducts;