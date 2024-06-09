import React from "react";
import About from '../Components/aboutComponent/about'
import Divider from '../Components/divider/divider.js'
import Contact from '../Components/contactComponent/Contact.js'
import HeroImage from '../Components/heroImageComponent/heroImage.js'
const homePage = () => {
  return (
    <>
      <HeroImage />
      <About />
      <Divider />
      <Contact />
    </>
  );
};

export default homePage;