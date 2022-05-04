import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import useProducts from '../../Hooks/useProducts';
const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const [setProducts] = useProducts();
  const onSubmit = (data,e) => {
    const url = `http://localhost:5000/product`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => setProducts(result));
      toast("Items Added Successfully");
      e.target.reset();
  }
  return (
    <div className='w-50 d-block mx-auto'>
      <h1 className='text-info text-center my-3'>Add Items</h1>
      <form className='d-flex flex-column shadow-none' onSubmit={handleSubmit(onSubmit)}>
      <input style={{borderColor: "#0DCAF0"}} className='mb-3 rounded-3 p-2 text-info' placeholder='Product Name' {...register("name")} />
      <input style={{borderColor: "#0DCAF0"}} className='mb-3 rounded-3 p-2 text-info' placeholder='Supplier Name' {...register("supplierName")}/>
      <input style={{borderColor: "#0DCAF0"}} className='mb-3 rounded-3 p-2 text-info' placeholder='Enter Price Amount' type="number" {...register("price")} />
      <input style={{borderColor: "#0DCAF0"}} className='mb-3 rounded-3 p-2 text-info' placeholder='Enter Quantity' type="number" {...register("quantity")} />
      <input placeholder='Enter Image URL' style={{borderColor: "#0DCAF0"}}  className='mb-3 rounded-3 p-2 text-info' {...register("image")} />
      <textarea style={{borderColor: "#0DCAF0"}} className='mb-3 rounded-3 p-2 text-info' placeholder='Product Description' {...register("desc")}/>
      <input className='p-2 bg-info border-0 text-white w-50 rounded-3 mx-auto d-block' type="submit" value="Add Item" />
    </form>
    </div>
  );
};

export default AddItems;