import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import About from "../components/About";
import Sip from "../components/Sip";
import Seeq from "../components/Seeq";
import Studio from "../components/Studio";
import Initiatives from "../components/Initiatives";
import More from "../components/More";
import Footer from "../components/Footer";

const Asin5 = () => {
  return (
    <div className="bg-custom-graywhite">
      <Navbar />
      <Slider />
      <About />
      <Sip />
      <Seeq />
      <Studio/>
      <Initiatives/>
      <More/>
      <Footer/>
    </div>
  );
};

export default Asin5;
