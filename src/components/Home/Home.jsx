import React from "react";
// import Header from "../Header/Header";
import HeroSection from "./HeroSection";
import ContactUs from "./ContactUs";
import MainContents from "./MainContents";

function Home() {
  return(
  <div>
     {/* <Header /> */}
     <HeroSection/>
     <MainContents/>
     <ContactUs/>
  </div>
  );
} 


export default Home;
