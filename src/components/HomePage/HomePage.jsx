import React from "react";
import ProductFeature from "../../features/Product";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import SliderAuto from "../SliderAuto/SliderAuto";
import Describe from "../Describe/Describe";

HomePage.propTypes = {};

function HomePage(props) {
  return (
    <div>
      {" "}
      <Banner />
      <Describe />
      <SliderAuto />
      <Contact />
    </div>
  );
}

export default HomePage;
