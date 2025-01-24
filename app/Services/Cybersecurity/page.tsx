import Footer from "@/components/Footer/layout";
import Navbar from "@/components/Navbar/layout";
import ProjectBanner from "@/components/ProjectBanner/layout";
import ScrollToTop from "@/components/ScrollTop/layout";
import CYBER from "@/components/Services/Cybersecurity/layout";
import React from "react";




const cyber: React.FC = () => {

    return (
       <div>
             <Navbar/>
             <CYBER/>
             <ProjectBanner/>
             <ScrollToTop/>
             <Footer/>
             

       </div>

        
    );
};

export default cyber;