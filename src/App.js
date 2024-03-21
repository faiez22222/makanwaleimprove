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
import MainLayoutBelow720px from "./Component/MainKayoutBelow720px";
import { useMediaQuery } from "@chakra-ui/react";
import ArchitectureProjectDetails from "./Component/ArchitectureProjectDetails";
import ArchitectureDesignForm from "./Component/Architecturedesignform";
import KitchenCalculator from "./Component/KitchenCalculator";
import WardrobeCalculator from "./Component/WardrobeCalculator";


const App = () => {
 
  const [isBelow720px] = useMediaQuery("(max-width: 720px)");
  return (
    <>
           {isBelow720px ? (
        <MainLayoutBelow720px />
      ) : (
        <MainLayout />
      )}
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
              <Route path="/architecture-portfolio-details" element={<ArchitectureProjectDetails/>} />
              <Route path="/architecture-portfolio-form" element={<ArchitectureDesignForm/>} />
              <Route path="/home-kitchen-price-calculator" element={<KitchenCalculator/>} />
              <Route path="/home-wardrobe-price-calculator" element={<WardrobeCalculator/>} />
        </Routes>
   
        {/* <Footer/> */}

    </>
  );
};

export default App;
