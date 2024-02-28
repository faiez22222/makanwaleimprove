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

const App = () => {
 

  return (
    <>

        <Routes>
        
            
              <Route path="/" element={<Layout />} />
              <Route path="/construction-packages" element={<Glow />} />
              <Route path="/cost-plus-contract-house-construction" element={<Cost/>} />
              <Route path="/about-us" element={<About/>} />
              <Route path="/contact-us" element={<Contact_Us/>} />
              <Route path="/construction" element={<Construction/>} />
              <Route path="/home-interior-price-calculator" element={<InteriorCalculator/>} />
              <Route path="/drawer" element={<DrawerExample/>} />
              
             
             
        
        </Routes>
   


    </>
  );
};

export default App;
