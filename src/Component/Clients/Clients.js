import React from "react";
import { motion } from "framer-motion";
import client1 from "../../Assets/Images/client-images/apple.jpg";
import client2 from "../../Assets/Images/client-images/hp.png";
import client3 from "../../Assets/Images/client-images/lenovo.png";
import client4 from "../../Assets/Images/client-images/oneplus.png";
import client5 from "../../Assets/Images/client-images/oppo.png";
import client6 from "../../Assets/Images/client-images/samsung.png";
const Clients = () => {
  return (
    <div>
      <h2 className="text-center">
        Our <span className="text-info d-block">Reputed Clients</span>
      </h2>
      <div className="bg-info mx-auto rounded-3" style={{ width: "275px", height: "4px" }}>
        .
      </div>
      <p className="text-center mt-3 mb-5">We are currently servicing clients across the sectors of FMCG, Consumer Goods, Retail, B2B and Technology.</p>
      <div className="d-grid container g-5 mb-5">
        <div className="row">
          <motion.div whileHover={{ scale: 1.1 }} className="col-md-2 col-sm-6 mb-3">
            <img className="rounded-circle img-fluid mx-auto d-block" src={client1} alt="" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="col-md-2 col-sm-6 mb-3">
            <img className="rounded-circle img-fluid mx-auto d-block" src={client2} alt="" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="col-md-2 col-sm-6 mb-3">
            <img className="rounded-circle img-fluid mx-auto d-block" src={client3} alt="" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="col-md-2 col-sm-6 mb-3">
            <img className="rounded-circle img-fluid mx-auto d-block" src={client4} alt="" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="col-md-2 col-sm-6 mb-3">
            <img className="rounded-circle img-fluid mx-auto d-block" src={client5} alt="" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="col-md-2 col-sm-6 mb-3">
            <img className="rounded-circle img-fluid mx-auto d-block" src={client6} alt="" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
