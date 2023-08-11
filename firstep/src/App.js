import React from "react"
import "./App.css"
import "./stylesheets/Cousine.css"
import "./stylesheets/Roboto.css"
import "./stylesheets/MRoboto.css"
import MyHeader from "./components/MyHeader/MyHeader";
import MyNav from "./components/MyNav/MyNav";
import TopSection from "./components/TopSection/TopSection";
import AboutSection from "./components/AboutSection/AboutSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import MyCard from "./components/MyCard/MyCard";
import TeamSection from "./components/TeamSection/TeamSection";
import PricingTablesSection from "./components/PricingTablesSection/PricingTablesSection";
import SubjectsSection from "./components/SubjectsSection/SubjectsSection"
import ContactSection from "./components/ContactSection/ContactSection";
import MyFooter from "./components/MyFooter/MyFooter"

import Bar from "./rozgrzewki/rozgrzewka 1/Bar";
import AnimatedBar from "./rozgrzewki/rozgrzewka 1/AnimatedBar";
import Indextation from "./rozgrzewki/rozgrzewka 2/Indextation"



function App() {

  return (
    <>
    
      <MyHeader />
      <MyNav />
      <TopSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection /> 
      <PricingTablesSection />
      <SubjectsSection />
      <ContactSection />
      <MyFooter />
      
      {/* <Bar width="25%" />
      <Bar width="50%" />
      <AnimatedBar /> */}

      {/* <Indextation /> */}
    </>
  );
}

export default App;