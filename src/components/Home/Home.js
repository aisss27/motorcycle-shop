import React from "react";
import { Main } from "../Main/Main";
import { AboutUs } from "../AboutUs/AboutUs";
import { LatestMotorcycles } from "../LatestMotorCycles/LatestMotorcycles";
import { Testimonials } from "../Testimonials/Testimonials";
import { MapAndSubscribe } from "../MapAndSubscribe/MapAndSubscribe";

const Home = () => {
  return (
    <>
      <Main />
      <AboutUs />
      <LatestMotorcycles />
      <Testimonials />
      <MapAndSubscribe />
    </>
  );
};

export default Home;
