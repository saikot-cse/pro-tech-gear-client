import React from "react";
import { Card } from "react-bootstrap";
import { FaUserPlus,FaLowVision } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
import { motion } from "framer-motion";
const AboutUs = () => {
  return (
    <div className="container">
      <h2 className="text-center">
        Our <span className="text-info">Goals</span>
      </h2>
      <div className="bg-info mx-auto rounded-3 mb-3" style={{ width: "175px", height: "4px" }}>
        .
      </div>
      <div className="row">
      <motion.div whileHover={{ scale: 1.1 }} className="col-md-4 col-sm-12 g-lg-5 g-sm-3">
        <Card border="info" >
          <Card.Header className="text-center fw-bold fs-4 text-info">Our Mission</Card.Header>
          <Card.Body>
            <Card.Title><FaUserPlus className="text-info mx-auto d-block fs-1"/></Card.Title>
            <Card.Text>Serving our suppliers through mutually rewarding relationships which we live and work.</Card.Text>
          </Card.Body>
        </Card>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="col-md-4 col-sm-12 g-lg-5 g-sm-3 ">
        <Card border="info" >
          <Card.Header className="text-center fw-bold fs-4 text-info">Our Planning</Card.Header>
          <Card.Body>
            <Card.Title><BsSearch className="text-info mx-auto d-block fs-1"/></Card.Title>
            <Card.Text>Don't just find. Be found. Make the biggest electrical warehouse for the clients.</Card.Text>
          </Card.Body>
        </Card>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="col-md-4 col-sm-12 g-lg-5 g-sm-3">
        <Card border="info" >
          <Card.Header className="text-center fw-bold fs-4 text-info">Our Vision</Card.Header>
          <Card.Body>
            <Card.Title><FaLowVision className="text-info mx-auto d-block fs-1"/></Card.Title>
            <Card.Text>Our vision is to be the best place to work and to do business in the electrical industry, period.</Card.Text>
          </Card.Body>
        </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
