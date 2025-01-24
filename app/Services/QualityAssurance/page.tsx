import Footer from "@/components/Footer/layout";
import Navbar from "@/components/Navbar/layout";
import ProjectBanner from "@/components/ProjectBanner/layout";
import ScrollToTop from "@/components/ScrollTop/layout";
import QualityAssurance from "@/components/Services/Quality/layout";
import React from "react";




const Itservice: React.FC = () => {

    return (
       <div>
             <Navbar/>
             <QualityAssurance/>
             <ProjectBanner/>
             <ScrollToTop/>
             <Footer/>
             

       </div>

        
    );
};

export default Itservice;