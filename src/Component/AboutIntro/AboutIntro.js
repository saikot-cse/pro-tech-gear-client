import React from "react";
import about1 from "../../Assets/Images/about-images/about-1.jpg";
const AboutIntro = () => {
  return (
    <div className="d-grid container my-5">
      <div className="row">
        <div className="col-md-6 col-sm-12 my-5">
          <img className="img-fluid" src={about1} alt="" />
        </div>
        <div className="col-md-6 col-sm-12">
          <h1 className="my-5">
            We provide <span className="text-info">unique products</span> for business and consumers
          </h1>
          <article className="lh-lg ">We at Pro Tech Gear are proud to introduce you to our unique products. All of our products are Original and Authentic. We have Worlds best Company products. We can assure Best Quality products. We would like to provide you with an introductory offer on Wholesale.</article>
          <article className="lh-lg my-3">You can start selling online with us without any investment and create a full-fledged customizable store for free. Design & launch a mobile app of your own with upgrading Growth Plan. Moreover, you can link your sales channels, integrate social platforms like Facebook, Instagram, Google to promote your products and services. Manage your business single-handedly</article>
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;
