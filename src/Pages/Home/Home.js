import React from "react";
import AboutIntroHome from "../../Component/AboutIntro/AboutIntroHome";
import Bannar from "../../Component/Banner/Banner";
import Clients from "../../Component/Clients/Clients";
import Homeinventory from "../../Component/HomeInventory/Homeinventory";
import Strength from "../../Component/Strength/Strength";
const Home = () => {
  return (
    <div>
      <Bannar />
      <AboutIntroHome />
      <Homeinventory />
      <Clients />
      <Strength />
    </div>
  );
};

export default Home;
