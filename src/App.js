import React, { useEffect, useState } from "react";



import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Layout from "./Component/Layout";
import Glow from "./Component/glow";
import Cost from "./Component/cost-plus-contract-house-construction";
import About from "./Component/About";
import Contact_Us from "./Component/Contact-us";
import Construction from "./Component/Construction";
import InteriorCalculator from "./Component/InteriorCalculator";
import DrawerExample from "./Component/drawerExample";
import ImageUploader from "./Component/imageuploader";
import Projects from "./Component/Projects";
import ProjectsDetail from "./Component/ProjectDetail";
import ArchitectureDesign from "./Component/ArchitectureDesign";
import MainLayout from "./Component/MainLayout";
import Footer from "./Component/Footer";
const App = () => {
 

  return (
    <>
         <MainLayout/>
        <Routes>
        
            
              <Route path="/" element={<Layout />} />
              <Route path="/construction-packages" element={<Glow />} />
              <Route path="/cost-plus-contract-house-construction" element={<Cost/>} />
              <Route path="/about-us" element={<About/>} />
              <Route path="/contact-us" element={<Contact_Us/>} />
              <Route path="/construction" element={<Construction/>} />
              <Route path="/home-interior-price-calculator" element={<InteriorCalculator/>} />
              <Route path="/drawer" element={<DrawerExample/>} />
              <Route path="/image" element={<ImageUploader/>} />
              <Route path="/projects" element={<Projects/>} />
              <Route path="/projectsdetails" element={<ProjectsDetail/>} />
              <Route path="/architecture-portfolio" element={<ArchitectureDesign/>} />
              
             
             
        
        </Routes>
   
        <Footer/>

    </>
  );
};

export default App;
