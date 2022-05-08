import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import axiosPrivate from "../../Api/AxiosPrivate";
import Product from "../../Component/Product/Product";
import auth from "../../firebase.init";
const MyItems = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  useEffect(() => {
    const getMyItems = async () => {
      const email = user?.email;
      const url = `https://aqueous-refuge-27157.herokuapp.com/myitems?email=${email}`;
      try {
        const { data } = await axiosPrivate.get(url);
        setItems(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getMyItems();
  }, [user, items, navigate]);
  return (
    <div className="d-grid container">
      <Helmet>
        <title>My Items - Pro Tech Gear</title>
      </Helmet>
      <h2 className="text-center mt-5">
        My
        <span className="text-info"> Items</span>
      </h2>
      <div className="bg-info mx-auto rounded-3 mb-5" style={{ width: "175px", height: "4px" }}>
      </div>
      <div className="row">
        {items.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default MyItems;
