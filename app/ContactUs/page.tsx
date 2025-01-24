import ContactForm from "@/components/Contact/layout";
import Footer from "@/components/Footer/layout";
import Navbar from "@/components/Navbar/layout";
import ScrollToTop from "@/components/ScrollTop/layout";
import React from "react";




const contactform: React.FC = () => {

    return (
       <div>
             <Navbar/>
             <ContactForm/>
             <ScrollToTop/>
             <Footer/>
             

       </div>

        
    );
};

export default contactform;