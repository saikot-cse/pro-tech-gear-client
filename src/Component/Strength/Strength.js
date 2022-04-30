import React from "react";
import strength from "../../Assets/Images/strength.jpg";
import { FaCheck } from "react-icons/fa";
const Strength = () => {
  return (
    <div className="d-grid container">
      <div className="row">
        <div className="col-md-6 col-sm-12 my-5">
          <img className="w-100 h-100 mt-5" src={strength} alt="" />
        </div>
        <div className="col-md-6 col-sm-12 my-5 gx-5">
          <h2 className="mt-5">
            Our <span className="text-info">Strength</span>
          </h2>
          <div className="bg-info rounded-3" style={{ width: "200px", height: "4px" }}>
            .
          </div>
          <p className="mt-3 mb-5">Our objective is to Reduce our clients overall Logistics Cost and Increase their Customer Order Servicability.</p>
          <div>
            <p className="lh-sm"><FaCheck className="text-success me-2" /> Well established and highly regarded in the electronics market.</p>
            <p className="lh-sm"><FaCheck className="text-success me-2" /> A dedicated group of engineers working to give the highest quality.</p>
            <p className="lh-sm"><FaCheck className="text-success me-2" /> Efficient production methods WEAKNESSES</p>
            <p className="lh-sm"><FaCheck className="text-success me-2" /> Building new relations with suppliers.</p>
            <p className="lh-sm"><FaCheck className="text-success me-2" /> The target group can choose cheaper models if they want.</p>
            <p className="lh-sm"><FaCheck className="text-success me-2" /> Low debt equity rating. Lower risk.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strength;
