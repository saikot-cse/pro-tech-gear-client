import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import pageNotFound from "../../Assets/Images/pageNotFound.jpg";
const NotFound = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };
  return (
    <div>
      <img className="mx-auto d-block mt-3 rounded img-fluid" src={pageNotFound} alt="" />
      <Button onClick={navigateToHome} className="font-weight-bolder w-25 mx-auto d-block my-3 text-white" variant="info">
        Go back to Home
      </Button>
    </div>
  );
};

export default NotFound;