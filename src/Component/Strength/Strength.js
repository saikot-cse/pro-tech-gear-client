import React from "react";
import strength from "../../Assets/Images/strength.jpg";
const Strength = () => {
  return (
    <div className="d-grid">
      <div className="row">
        <div className="col">
          <img src={strength} alt="" />
        </div>
        <div className="col">
          <h1 className="text-center">
            Our <span className="text-info d-block">Strength</span>
          </h1>
          <div className="bg-info mx-auto rounded-3" style={{ width: "275px", height: "4px" }}>
            .
          </div>
          <p className="text-center mt-3 mb-5">Our objective is to Reduce our clients overall Logistics Cost and Increase their Customer Order Servicability.</p>
        </div>
        
      </div>
    </div>
  );
};

export default Strength;
