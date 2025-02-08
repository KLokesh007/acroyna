import Footer from "@/components/Footer/layout";
import Navbar from "@/components/Navbar/layout";
import ProjectBanner from "@/components/ProjectBanner/layout";
import ScrollToTop from "@/components/ScrollTop/layout";
import Automation from "@/components/Services/Business/layout";
import React from "react";




const cyber: React.FC = () => {

    return (
       <div>
             <Navbar/>
             <Automation/>
             <ProjectBanner/>
             <ScrollToTop/>
             <Footer/>
             

       </div>

        
    );
};

export default cyber;