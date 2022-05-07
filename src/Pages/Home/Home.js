import React from "react";
import { Helmet } from "react-helmet-async";
import AboutIntroHome from "../../Component/AboutIntro/AboutIntroHome";
import Bannar from "../../Component/Banner/Banner";
import Benifits from "../../Component/Benifits/Benifits";
import Clients from "../../Component/Clients/Clients";
import Homeinventory from "../../Component/HomeInventory/Homeinventory";
import Strength from "../../Component/Strength/Strength";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - Pro Tech Gear</title>
      </Helmet>
      <Bannar />
      <AboutIntroHome />
      <Homeinventory />
      <Clients />
      <Strength />
      <Benifits />
    </div>
  );
};

export default Home;
