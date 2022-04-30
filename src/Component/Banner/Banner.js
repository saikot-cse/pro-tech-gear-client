import React from "react";
import { Button, Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import slide1 from "../../Assets/Images/bannar-images/slider-1.jpg";
import slide2 from "../../Assets/Images/bannar-images/slider-2.jpg";
const Bannar = () => {
  const navigate = useNavigate();
  const navigateToInventory = ()=>{
    navigate('/inventory')
  }
  return (
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide2}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Welcome to Pro Tech Gear</h3>
      <p>You'll find one of the best and authentic product here.</p>
      <Button onClick={navigateToInventory} className="text-white" variant="info"><MdOutlineScreenSearchDesktop className="fs-5 mb-1 me-2" />Explore All</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide1}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Focused on Quality</h3>
      <p>Quality means doing it right when no one is looking.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  );
};

export default Bannar;
