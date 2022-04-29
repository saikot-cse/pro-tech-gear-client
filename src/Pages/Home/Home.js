import React from 'react';
import AboutIntroHome from '../../Component/AboutIntro/AboutIntroHome';
import Bannar from '../../Component/Banner/Banner';

const Home = () => {
  return (
    <div>
      <Bannar/>
      <AboutIntroHome />
      <div>
      <h1 className='text-center'>Our <span className='text-info d-block'>Inventory</span></h1>
      <div className='bg-info mx-auto mb-5 rounded-3' style={{width: '175px', height: '4px'}}>.</div>
      </div>
    </div>
  );
};

export default Home;