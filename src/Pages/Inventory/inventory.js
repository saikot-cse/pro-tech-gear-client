import React from 'react';
import Product from '../../Component/Product/Product';
import useProducts from '../../Hooks/useProducts';

const Inventory = () => {
  const [products] = useProducts();
  return (
    <div className='d-grid container'>
      <h1 className='text-center text-info my-5'>Our Inventory</h1>
      <div className='row'>
        {
          products.map(product=><Product key={product.id} product ={product}/>)
        }
      </div>
    </div>
  );
};

export default Inventory;