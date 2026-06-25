import React from "react";

import TopBar from "./TopBar";
import NavBar from "./NavBar";
import Hero from "./Hero";
import HiringNetwork from "./HiringNetwork";
import Accreditation from "./Accreditation";
import WhySRMCEM from "./WhySRMCEM";
import AcademicExcellence from "./AcademicExcellence";
import LegacyStats from "./LegacyStats";
import IndustryOutcomes from "./IndustryOutcomes";
import Placements from "./Placements";
import GovtPlacements from "./GovtPlacements";
import ProgramsOffered from "./ProgramsOffered";
import AppliedLearning from "./AppliedLearning";
import IEEE from "./IEEE";
import CampusInfrastructure from "./CampusInfrastructure";
import Clubs from "./Clubs";
import WorldStage from "./WorldStage";
import AlumniOutcomes from "./AlumniOutcomes";
import News from "./News";
import Events from "./Events";
import TestmonialSlider from "./TestmonialSlider";
import CSR from "./CSR";
import CTA from "./CTA";
import Footer from "./Footer";
import Course from "./Programs";
import CompanyLogos from "./CompanyLogos";
import AcademicPrograms from "./AcademicPrograms";
import Reels from "./Reels";

const Home = () => {
  return (
    <>
      <TopBar />
      <NavBar />
      {/* ---- Reference-design sequence + retained original sections ---- */}
      <Hero />
      {/* <HiringNetwork /> */}
      {/* <Accreditation /> */}
      <AcademicExcellence />
      <Placements />
      <WorldStage />
      <GovtPlacements />
      <CompanyLogos />
      <AcademicPrograms />
      <IEEE />
      <News />
      <TestmonialSlider />
      <CampusInfrastructure />
      {/* <Events /> */}
      <Reels />
      <CSR />
      <Clubs />
      <CTA />
      <Footer />
    </>
  );
};

export default Home;
