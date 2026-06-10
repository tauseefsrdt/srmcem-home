import React from 'react';

import TopBar from './TopBar';
import NavBar from './NavBar';
import Hero from './Hero';
import Medals from './Medals';
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

const Home = () => {
  return (
    <>
      <TopBar />
      <NavBar />
      <Hero />
      {/* <Medals /> */}
      <Placements />
      <WorldStage />
      <GovtPlacements />
      <CompanyLogos />
      <Programs />
      <IEEE />
      <News />
      <Alumni />
      <Facilities />
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
