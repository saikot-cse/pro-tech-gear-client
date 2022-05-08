import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Helmet } from "react-helmet-async";
import AboutIntroHome from "../../Component/AboutIntro/AboutIntroHome";
import Bannar from "../../Component/Banner/Banner";
import Benifits from "../../Component/Benifits/Benifits";
import Clients from "../../Component/Clients/Clients";
import Homeinventory from "../../Component/HomeInventory/Homeinventory";
import Loading from "../../Component/Loading/Loading";

import Strength from "../../Component/Strength/Strength";
import useProducts from "../../Hooks/useProducts";
const Home = () => {
  const [products] = useProducts();
  return (
    <div>
      {products?.length === 0 && <Loading />}
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
