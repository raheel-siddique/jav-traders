import React, { useEffect } from "react";

import Footer_v1 from "../../global-components/footer";

import AboutV1 from '../../section-components/about-v1';
import ServiceV5 from "../../section-components/service-v1";
import OwnNav from "../../global-components/OwnNav";
import "./Home.css";
import ContactUs from "../../section-components/ContactUs";
// import PortfolioV1 from "../../section-components/portfolio-v2";

import Client from "../marketplace/Client";

import Slider from "./Slider";
import ProfileCompany from "./ProfileCompany";

const Home = () => {
 

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  
 

  return (
    <>

    <div className="home_main_box" >


       
      <OwnNav />
      {/* <AnimatePresence initial={false} mode={"wait"}> */}
      
     
      <Slider />
      {/* </AnimatePresence> */}
      {/* <Banner/> */}
      

      {/* <Counter /> */}

      {/* <Featuresv1 customClass="ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---" /> */}
      {/* <Testimonial /> */}
      <br />
      <br />
      <br />
      <br />

      <ProfileCompany />
    <ServiceV5 />
      <AboutV1 />
      <Client />

      {/* <Properties limit={3} /> */}
      <ContactUs />

      </div>

      {/* <ContactForm /> */}
  
      {/* <PropertySlider /> */}
      {/* <BlogSlider customClass="section-subtitle-2" /> */}
      {/* { */}
        {/* // eslint-disable-next-line */}
        <Footer_v1 />
      {/* } */}
    </>
  );
};

export default Home;
