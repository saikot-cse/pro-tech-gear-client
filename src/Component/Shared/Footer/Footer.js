import React from "react";
import { Button } from "react-bootstrap";
import { CgPhone } from "react-icons/cg";
import { MdArrowForward, MdOutlineMail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { TiLocation, TiSocialFacebook, TiSocialTwitter, TiSocialYoutube } from "react-icons/ti";
import { Link } from "react-router-dom";
import "../../Shared/Navbar/NavBar.css";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#0C1A32" }}>
      <div className="container d-grid mt-5">
        <div className="row my-3 text-white">
          <div className="col-md-3 col-sm-12 my-3">
            <h4 className="text-center text-info">About</h4>
            <p>We at Pro Tech Gear are proud to introduce you to our unique products. All of our products are Original and Authentic. We have Worlds best Company products. We can assure Best Quality products. </p>
            <p>You can start selling online with us without any investment and create a full-fledged customizable store for free. </p>
          </div>
          <div className="col-md-3 col-sm-12 my-3">
            <h4 className="text-center text-info">Quick Link</h4>
            <div className="d-flex justify-content-center flex-column align-items-center lh-lg">
              <Link to="/" className="text-decoration-none text-white ">
                <MdArrowForward className="text-info me-2" />
                Home
              </Link>
              <Link to="/" className="text-decoration-none text-white ">
                <MdArrowForward className="text-info me-2" />
                About
              </Link>
              <Link to="/" className="text-decoration-none text-white ">
                <MdArrowForward className="text-info me-2" />
                Inventory
              </Link>
              <Link to="/" className="text-decoration-none text-white ">
                <MdArrowForward className="text-info me-2" />
                Strength
              </Link>
              <Link to="/" className="text-decoration-none text-white ">
                <MdArrowForward className="text-info me-2" />
                Benifits
              </Link>
              <Link to="/" className="text-decoration-none text-white ">
                <MdArrowForward className="text-info me-2" />
                Reviews
              </Link>
              <Link to="/" className="text-decoration-none text-white ">
                <MdArrowForward className="text-info me-2" />
                Blogs
              </Link>
            </div>
          </div>
          <div className="col-md-3 col-sm-12 my-3">
            <h4 className="text-center text-info">Contact Info</h4>
            <div>
              <p>
                <TiLocation className="fs-5 me-2" />
                House-19, Road-23, Rupnagar Residencial, Mirpur-2, Dhaka, Bangladesh
              </p>
              <p>
                <CgPhone className="fs-5 me-2" />
                +(880) 1874-545580
              </p>
              <p>
                <MdOutlineMail className="fs-5 me-2" />
                saikot.cse.bubt@gmail.com
              </p>
              <div className="text-center">
                <span>
                  <TiSocialFacebook className="fs-2 me-2 social-fb" style={{ cursor: "pointer" }} />
                  <RiInstagramFill className="fs-2 me-2 social-in" style={{ cursor: "pointer" }} />
                  <TiSocialTwitter className="fs-2 me-2 social-twi" style={{ cursor: "pointer" }} />
                  <TiSocialYoutube className="fs-2 me-2 social-yt" style={{ cursor: "pointer" }} />
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-12 my-3">
            <h4 className="text-center text-info">Subscribe</h4>
            <p>Sign Up To Our Newsletter And Get The Latest Offers.</p>
            <input type="email" name="email" placeholder="Your Email" className="w-100 mx-auto border-0 p-2 rounded-3" />
            <Button className="text-white my-3 w-50 mx-auto d-block" variant="info">
              Get Notified
            </Button>
          </div>
        </div>
        <div className="row text-center text-white">
          <p>
            &copy; {new Date().getFullYear()} <span className="text-info">Pro Tech Gear</span> All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
