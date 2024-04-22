import React from "react";
import { Banner } from "../components/shared/Banner";
import { BannerPub } from "../components/shared/BannerPub";
import { TwoGender } from "../components/shared/TwoGender";
import { Story } from "../components/shared/Story";


const Home = () => {
  return (
    <>
      <Banner />
      <BannerPub />
      <TwoGender />
      <Story />

    </>
  );
};

export default Home;
