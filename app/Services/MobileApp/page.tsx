import FAQLayout from "@/components/FAQs/layout";
import Footer from "@/components/Footer/layout";
import Navbar from "@/components/Navbar/layout";
import ScrollToTop from "@/components/ScrollTop/layout";
import MobileApp from "@/components/Services/Mobileapp/layout";
import React from "react";




const Itservice: React.FC = () => {

    return (
       <div>
             <Navbar/>
             <MobileApp/>
             <FAQLayout/>
             <ScrollToTop/>
             <Footer/>
             

       </div>

        
    );
};

export default Itservice;