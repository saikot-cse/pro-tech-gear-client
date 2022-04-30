import React from "react";
import benifits from "../../Assets/Images/benifits.jpg";
import {MdPeople, MdDeliveryDining, MdVerifiedUser} from "react-icons/md"
import {GiEarthAsiaOceania} from "react-icons/gi"
const Benifits = () => {
  return (
    <div className="d-grid container">
      <div className="row">
        <div className="col-md-6 col-sm-12 my-5">
          <h2 className="mt-5">
            Customer <span className="text-info">Benefits</span>
          </h2>
          <div className="bg-info rounded-3" style={{ width: "275px", height: "4px" }}>
            .
          </div>
          <p className="mt-3 mb-5">Our objective is to Reduce our clients overall Logistics Cost and Increase their Customer Order Servicability.</p>
          <div className="d-grid">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <MdPeople className="fs-2 mb-1 text-info"/>
                <h5 className = "text-info">PROFESSIONAL STAFF</h5>
                <p>Successful businesses tend to provide a high level of customer service through professional staff.</p>
              </div>
              <div className="col-md-6 col-sm-12">
                <MdDeliveryDining className="fs-2 mb-1 text-info"/>
                <h5 className = "text-info">DISTRIBUTION & DELIVERY</h5>
                <p>Direct distribution allows brands to build genuine relationships with the end users of their products.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <MdVerifiedUser className="fs-2 mb-1 text-info"/>
                <h5 className = "text-info">EFFECTIVE USE</h5>
                <p>A well managed database should lead to sales and customer relationship gains that will more than cover its costs.</p>
              </div>
              <div className="col-md-6 col-sm-12">
                <GiEarthAsiaOceania className="fs-2 mb-1 text-info"/>
                <h5 className = "text-info">CONTINOUS FOCUS</h5>
                <p>This approach is used to enhance the quality of a product or service, and to improve safety.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 my-5">
          <img className="w-100 h-100 my-5" src={benifits} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Benifits;
