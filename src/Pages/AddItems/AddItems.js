import React from 'react';
import { useForm } from "react-hook-form";
const AddItems = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div className='w-50 d-block mx-auto'>
      <h1 className='text-info text-center my-3'>Add Items</h1>
      <form className='d-flex flex-column shadow-none' onSubmit={handleSubmit(onSubmit)}>
      <input style={{borderColor: "#0DCAF0"}} className='mb-3 rounded-3 p-2 text-info' placeholder='Product Name' {...register("name")} />
      <input style={{borderColor: "#0DCAF0"}} className='mb-3 rounded-3 p-2 text-info' placeholder='Supplier Name' {...register("supplierName")}/>
      <input style={{borderColor: "#0DCAF0"}} className='mb-3 rounded-3 p-2 text-info' placeholder='Enter Price Amount' type="number" {...register("price")} />
      <input style={{borderColor: "#0DCAF0"}} className='mb-3 rounded-3 p-2 text-info' placeholder='Enter Quantity' type="number" {...register("quantity")} />
      <input style={{borderColor: "#0DCAF0"}}  className='mb-3 rounded-3 p-2 text-info' type="file" name= "image" {...register("image")} />
      <textarea style={{borderColor: "#0DCAF0"}} className='mb-3 rounded-3 p-2 text-info' placeholder='Product Description' {...register("desc")}/>
      <input className='p-2 bg-info border-0 text-white w-50 rounded-3 mx-auto d-block' type="submit" value="Add Item" />
    </form>
    </div>
  );
};

export default AddItems;