import Footer from "@/components/Footer/layout";
import Navbar from "@/components/Navbar/layout";
import ProjectBanner from "@/components/ProjectBanner/layout";
import ScrollToTop from "@/components/ScrollTop/layout";
import ITSupport from "@/components/Services/ITservices/layout";
import React from "react";




const Itservice: React.FC = () => {

    return (
       <div>
             <Navbar/>
             <ITSupport/>
             <ProjectBanner/>
             <ScrollToTop/>
             <Footer/>
             

       </div>

        
    );
};

export default Itservice;