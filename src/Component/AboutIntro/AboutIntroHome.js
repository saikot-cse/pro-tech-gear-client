import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import about1 from "../../Assets/Images/about-images/about-1.jpg";
const AboutIntroHome = () => {
  const navigate = useNavigate();
  const navigateToAboutIntro = ()=>{
    navigate('/about')
  }
  return (
    <div className="d-grid container my-5">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <h1 style={{fontSize: '48px'}} className="my-5">We provide <span className="text-info">unique products</span> for business and consumers</h1>
          <article className="lh-lg ">
            We at Pro Tech Gear are proud to introduce you to our unique products. All of our products are Original and Authentic. We have Worlds best Company products.  We can assure Best Quality products. We would like to provide you with an introductory offer on Wholesale. 
          </article>

          <Button onClick={navigateToAboutIntro} className="text-white my-3" variant="info">Read More</Button>
        </div>
        <div className="col-md-6 col-sm-12 my-5">
          <img className="img-fluid" src={about1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutIntroHome;