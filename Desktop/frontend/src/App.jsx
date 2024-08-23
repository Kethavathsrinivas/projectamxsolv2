import React from "react";
import Navbar from "./pages/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/Aboutus/About";
import { Route, Router, Routes } from "react-router-dom";
import Footer from "./pages/Footer/footer";
import Newsroom from "./pages/Newsroom/Newsroom";
import BusinessSolution from "./business-home/BusinessSolution";
import LegalSolutions from "./legalSolutions/LegalSolutions";
import TalentServicesMain from "./talentServices/TalentServicesMain";
import TechnologySolutions from "./technology-solutions/TechnologySolutions";
import Healthcare from "./healthcare/Healthcare";
import Ai from "./ai/Ai";
import Ml from "./ml/Ml";
import CloudServices from "./cloud services/CloudServices";
import CyberSecurity from "./cyber-security/CyberSecurity";
import BusinessIntelligence from "./business-intelligence/BusinessIntelligence";
import Academy from "./academysrc/Academy";
import Careers from "./career/Careers";
import Aerospace from "./industry/Aerospace";
import Automotive from "./industry/Automotive";
import Banking from "./industry/Banking";
import Chemical from "./industry/Chemical";
import Industries from "./industry/Industries";
import Construction from "./industry/Construction";
import People from "./pages/OurPeople/People";
import Education from "./industry/Education";
import Energy from "./industry/Energy";
import Finance from "./industry/Finance";
import HealthCare from "./industry/HealthCare";
import Insurance from "./industry/Insurance";
import Manufacturing from "./industry/Manufacturing";
import Pharma from "./industry/Pharma";
import RealEstate from "./industry/RealEstate";
import RetailStore from "./industry/RetailStore";
import Software from "./industry/Software";
import Technology from "./industry/Technology";
import Telecom from "./industry/Telecom";
import Transportation from "./industry/Transportation";
import DA from "./data-analytics/DA";
import Emp from "./pages/OurEmp/Emp";
import FoundationApp from "./pages/foundation/foundation";
import ContactApp from "./pages/contact/contact";
import ContactUsnew from "./pages/contactnew/ContactUs";
import Digital from "./digitalsrc/Digital";
import MitServices from "./mit-services/MitServices";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/who-we-are/About-us" element={<About />} />
        <Route path="/newsroom" element={<Newsroom />} />
        <Route path="/Businesssolution" element={<BusinessSolution />} />
        <Route path="/legal" element={<LegalSolutions />} />
        <Route path="/techsolutions" element={<TechnologySolutions />} />
        <Route path="/talent" element={<TalentServicesMain />} />
        <Route path="/health" element={<Healthcare />} />
        <Route path="/ai" element={<Ai />} />
        <Route path="/ml" element={<Ml />} />
        <Route path="/cloud" element={<CloudServices />} />
        <Route path="/cyber" element={<CyberSecurity />} />
        <Route path="/data" element={<DA />} />
        <Route path="/intellige" element={<BusinessIntelligence />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/career" element={<Careers />} />
        <Route path="/aerospace" element={<Aerospace />} />
        <Route path="/automotive" element={<Automotive />} />
        <Route path="/banking" element={<Banking />} />
        <Route path="/chemical" element={<Chemical />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/construction" element={<Construction />} />
        <Route path="/People" element={<People />} />
        <Route path="/education" element={<Education />} />
        <Route path="/energy" element={<Energy />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/healthcare" element={<HealthCare />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/manufacture" element={<Manufacturing />} />
        <Route path="/pharma" element={<Pharma />} />
        <Route path="/estate" element={<RealEstate />} />
        <Route path="/store" element={<RetailStore />} />
        <Route path="/software" element={<Software />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/telecom" element={<Telecom />} />
        <Route path="/transportation" element={<Transportation />} />
        <Route path="/employee" element={<Emp />} />
        <Route path="/foundation" element={<FoundationApp />} />
        <Route path="/contact" element={<ContactApp />} />
        <Route path="/contactmain" element={<ContactUsnew />} />
        <Route path="/digital" element={<Digital/>}/>
        <Route path="/mitservices" element={<MitServices/>}/>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
