import React from "react";
import { motion } from "framer-motion";
import { Card } from "react-bootstrap";
import { BiMessageRounded } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";
const Blogs = ({ blog }) => {
  const { name, image, desc1, desc2, date, comment } = blog;
  
  return (
    <motion.div whileHover={{ scale: 1.1 }} className="col-md-6 col-sm-12 g-lg-5 g-sm-3">
      <Card className="mb-3">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>
          <h2 className="text-info fw-bold">{name}</h2>
        </Card.Title>
        <div className="d-flex justify-content-between">
        <Card.Text className="lh-lg"><BiMessageRounded className="fs-5 me-1 mb-1" />{comment}</Card.Text>
        <Card.Text className="lh-lg"><AiOutlineCalendar className="fs-5 me-1 mb-1"/>{date}</Card.Text>
        </div>
        <Card.Text className="lh-lg">{desc1}</Card.Text>
        <Card.Text className="lh-lg">{desc2}</Card.Text>
      </Card.Body>
    </Card>
  </motion.div>
  );
};

export default Blogs;
