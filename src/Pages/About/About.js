import React from 'react';
import { Helmet } from 'react-helmet-async';
import AboutIntro from '../../Component/AboutIntro/AboutIntro';
import AboutUs from '../../Component/AboutUs/AboutUs';

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About - Pro Tech Gear</title>
      </Helmet>
      <h1 className='text-center text-info my-5'>About Us</h1>
      <AboutIntro/>
      <AboutUs />
    </div>
  );
};

export default About;