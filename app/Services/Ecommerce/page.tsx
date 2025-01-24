import Footer from "@/components/Footer/layout";
import Navbar from "@/components/Navbar/layout";
import ProjectBanner from "@/components/ProjectBanner/layout";
import ScrollToTop from "@/components/ScrollTop/layout";
import Ecommerce from "@/components/Services/Ecommerce/layout";
import React from "react";




const ecommerce: React.FC = () => {

    return (
       <div>
             <Navbar/>
             <Ecommerce/>
             <ProjectBanner/>
             <ScrollToTop/>
             <Footer/>
             

       </div>

        
    );
};

export default ecommerce;