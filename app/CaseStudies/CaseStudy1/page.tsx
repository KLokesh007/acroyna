import AlbaMart from "@/components/CaseStudies/AlbaMartapp/layout";
import Footer from "@/components/Footer/layout";
import Navbar from "@/components/Navbar/layout";
import ScrollToTop from "@/components/ScrollTop/layout";
import React from "react";



const case1: React.FC = () => {

    return (
       <div>
             <Navbar/>
             <AlbaMart/>
             <ScrollToTop/>
             <Footer/>             

       </div>

        
    );
};

export default case1;