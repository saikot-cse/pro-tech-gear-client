import { useEffect, useState } from "react";

const useDeliverProduct = ()=>{
  const [delivered,setDelivered] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/product')
    .then(res=>res.json())
    .then(data=>setDelivered(data))
  },[delivered])
  return [delivered,setDelivered];
}

export default useDeliverProduct;