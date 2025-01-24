import Footer from "@/components/Footer/layout";
import Navbar from "@/components/Navbar/layout";
import CancellationPolicy from "@/components/Refund/layout";
import ScrollToTop from "@/components/ScrollTop/layout";

import React from "react";

const refundpolicys: React.FC = () => {

    return (
       <div>
             <Navbar/>
             <CancellationPolicy/>
             <ScrollToTop/>
             <Footer/>
             

       </div>

        
    );
};

export default refundpolicys;