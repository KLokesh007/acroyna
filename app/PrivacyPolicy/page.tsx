import Footer from "@/components/Footer/layout";
import Navbar from "@/components/Navbar/layout";
import PrivacyPolicy from "@/components/Privacy/layout";
import ScrollToTop from "@/components/ScrollTop/layout";


import React from "react";

const refundpolicys: React.FC = () => {

    return (
       <div>
             <Navbar/>
             <PrivacyPolicy />
             <ScrollToTop/>
             <Footer/>
             

       </div>

        
    );
};

export default refundpolicys;