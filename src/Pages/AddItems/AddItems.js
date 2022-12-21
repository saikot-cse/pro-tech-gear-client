import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import useProducts from "../../Hooks/useProducts";
const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const [user] = useAuthState(auth);
  const [products, setProducts] = useProducts();
  console.log(products);
  const onSubmit = (data, e) => {
    const newItem = {
      name: e.target.name.value,
      desc: e.target.desc.value,
      price: e.target.price.value,
      image: e.target.image.value,
      supplierName: e.target.supplierName.value,
      quantity: e.target.quantity.value,
      email: e.target.email.value,
    };
    const url = `https://pro-tech-gear-server.vercel.app/product`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((result) => setProducts(result));
    toast("Items Added Successfully");
    e.target.reset();
  };
  return (
    <div className="w-50 d-block mx-auto">
      <Helmet>
        <title>Add Item - Pro Tech Gear</title>
      </Helmet>
      <h1 className="text-info text-center my-3">Add Items</h1>
      <form className="d-flex flex-column shadow-none" onSubmit={handleSubmit(onSubmit)}>
        <input style={{ borderColor: "#0DCAF0" }} className="mb-3 rounded-3 p-2 text-info" name="email" disabled readOnly value={user?.email} placeholder="Your Email" {...register("email")} required />
        <input style={{ borderColor: "#0DCAF0" }} className="mb-3 rounded-3 p-2 text-info" name="name" placeholder="Product Name" {...register("name")} required />
        <input style={{ borderColor: "#0DCAF0" }} className="mb-3 rounded-3 p-2 text-info" name="supplierName" placeholder="Supplier Name" {...register("supplierName")} required />
        <input style={{ borderColor: "#0DCAF0" }} className="mb-3 rounded-3 p-2 text-info" name="price" placeholder="Enter Price Amount" type="number" {...register("price")} required />
        <input style={{ borderColor: "#0DCAF0" }} className="mb-3 rounded-3 p-2 text-info" name="quantity" placeholder="Enter Quantity" type="number" {...register("quantity")} required />
        <input name="image" placeholder="Enter Image URL" style={{ borderColor: "#0DCAF0" }} className="mb-3 rounded-3 p-2 text-info" {...register("image")} required />
        <textarea style={{ borderColor: "#0DCAF0" }} className="mb-3 rounded-3 p-2 text-info" name="desc" placeholder="Product Description" {...register("desc")} required />
        <input className="p-2 bg-info border-0 text-white w-50 rounded-3 mx-auto d-block" type="submit" value="Add Item" />
      </form>
    </div>
  );
};

export default AddItems;
