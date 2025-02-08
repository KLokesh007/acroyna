
import CareersPage from "@/components/Career/layout";
import CHeroSection from "@/components/CareerHero/layout";
import Footer from "@/components/Footer/layout";
import Navbar from "@/components/Navbar/layout";
import ScrollToTop from "@/components/ScrollTop/layout";
import React from "react";



const careers: React.FC = () => {

    return (
       <div>
            <Navbar/>
            <CHeroSection/>
             <CareersPage/>
             <ScrollToTop/>
             <Footer/>
             

       </div>

        
    );
};

export default careers;