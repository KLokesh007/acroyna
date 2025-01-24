import Footer from "@/components/Footer/layout";
import Navbar from "@/components/Navbar/layout";
import ScrollToTop from "@/components/ScrollTop/layout";
import TermsOfService from "@/components/Termsservice/layout";
import React from "react";




const Termservice: React.FC = () => {

    return (
       <div>
             <Navbar/>
             <TermsOfService/>
             <ScrollToTop/>
             <Footer/>
             

       </div>

        
    );
};

export default Termservice;