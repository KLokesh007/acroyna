import Footer from "@/components/Footer/layout";
import Navbar from "@/components/Navbar/layout";
import ProjectBanner from "@/components/ProjectBanner/layout";
import ScrollToTop from "@/components/ScrollTop/layout";
import SoftwareDevelopment from "@/components/Services/Softwaredevelopment/layout";
import React from "react";




const Itservice: React.FC = () => {

    return (
       <div>
             <Navbar/>
             <SoftwareDevelopment/>
             <ProjectBanner/>
             <ScrollToTop/>
             <Footer/>
             

       </div>

        
    );
};

export default Itservice;