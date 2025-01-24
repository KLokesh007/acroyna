import Footer from "@/components/Footer/layout";
import Navbar from "@/components/Navbar/layout";
import ProjectBanner from "@/components/ProjectBanner/layout";
import ScrollToTop from "@/components/ScrollTop/layout";
import Consulting from "@/components/Services/Consulting/layout";
import React from "react";




const Consult: React.FC = () => {

    return (
       <div>
             <Navbar/>
             <Consulting/>
             <ProjectBanner/>
             <ScrollToTop/>
             <Footer/>
             

       </div>

        
    );
};

export default Consult;