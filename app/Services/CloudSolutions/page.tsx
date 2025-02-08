import Footer from "@/components/Footer/layout";
import Navbar from "@/components/Navbar/layout";
import ProjectBanner from "@/components/ProjectBanner/layout";
import ScrollToTop from "@/components/ScrollTop/layout";
import Ccloud from "@/components/Services/Cloud/layout";
import React from "react";




const AI: React.FC = () => {

    return (
       <div>
             <Navbar/>
             <Ccloud/>
             <ProjectBanner/>
             <ScrollToTop/>
             <Footer/>
             

       </div>

        
    );
};

export default AI;