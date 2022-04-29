
import React from "react";
import AboutIntroHome from "../../Component/AboutIntro/AboutIntroHome";
import Bannar from "../../Component/Banner/Banner";
import Product from "../../Component/Product/Product";
import useProducts from "../../Hooks/useProducts";
const Home = () => {
  const [products] = useProducts();
  return (
    <div>
      <Bannar />
      <AboutIntroHome />
      <div>
        <h1 className="text-center">
          Our <span className="text-info d-block">Inventory</span>
        </h1>
        <div className="bg-info mx-auto mb-5 rounded-3" style={{ width: "175px", height: "4px" }}>
          .
        </div>
        <div className="d-grid container">
          <div className="row">
            {products.slice(0, 6).map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
