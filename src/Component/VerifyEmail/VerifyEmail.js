import React from 'react';
import { motion } from "framer-motion";
import { AiFillCheckCircle } from 'react-icons/ai';
import verifyEmail from '../../Assets/Images/verify-email.png';
const VerifyEmail = () => {
  return (
    <div>
      <img className='d-block mx-auto' src={verifyEmail} alt="" />
      <h2 className='text-center text-info'>Verification Email Send<AiFillCheckCircle className='text-success mb-1 ms-2'/></h2>
      <p className='text-center fs-5'>Please check your email for the verification link. If you face any issues please try registering again with correct email address.</p>
      <p className='text-center'><span className='text-warning fw-bold'>N.B: </span>Please check the <span className='text-info fw-bold'>spam</span> forlder if you can't find the confirmation email.</p>
      <div className="text-center">
          <a href="https://www.gmail.com/" target="_blank" rel="noreferrer">
            <button className="text-white bg-info m-2 p-2 rounded-3 border-0">Go to Gmail</button>
          </a>
        </div>
    </div>
  );
};

export default VerifyEmail;