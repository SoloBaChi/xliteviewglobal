import React from "react";
// import Header from "../Header/Header";
import HeroSection from "./HeroSection";
import ContactUs from "./ContactUs";
import Services from "./Services";
import Products from "./Products";

function Home() {
  return(
  <div>
     {/* <Header /> */}
     <HeroSection/>
     <Services/>
     <Products/>
     <ContactUs/>
  </div>
  );
} 


export default Home;
