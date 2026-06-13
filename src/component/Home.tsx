import React from 'react';

import TopBar from './TopBar';
import NavBar from './NavBar';
import Hero from './Hero';
import HiringNetwork from './HiringNetwork';
import Accreditation from './Accreditation';
import Placements from './Placements';
import WorldStage from './WorldStage';
import GovtPlacements from './GovtPlacements';
import CompanyLogos from './CompanyLogos';
import Programs from './Programs';
import IEEE from './IEEE';
import News from './News';
import Alumni from './Alumni';
import Facilities from './Facilities';
import Events from './Events';
import CSR from './CSR';
import Clubs from './Clubs';
import CTA from './CTA';
import AdmissionInfo from './AdmissionInfo';
import Footer from './Footer';
import Innovation from './Innovation';

const Home = () => {
  return (
    <>
      <TopBar />
      <NavBar />
      <Hero />
      <HiringNetwork />
      <Accreditation />
      <WorldStage />
      {/* <Medals /> — disabled: its stat counters duplicate/contradict the Hero counters */}
      <Placements />
      <CompanyLogos />
      <GovtPlacements />
      <Programs />
      <Innovation />
      <Facilities />
      <IEEE />
      <Alumni />
      <News />
      <Events />
      <CSR />
      <Clubs />
      <CTA />
      <AdmissionInfo />
      <Footer />
    </>
  );
};

export default Home;
