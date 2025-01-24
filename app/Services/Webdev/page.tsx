import FAQLayout from "@/components/FAQs/layout";
import Footer from "@/components/Footer/layout";
import Navbar from "@/components/Navbar/layout";
import ScrollToTop from "@/components/ScrollTop/layout";
import WebDevelopment from "@/components/Services/Webdevelopment/layout";
import TechStack from "@/components/TechStack/layout";
import React from "react";




const web: React.FC = () => {

    return (
       <div>
             <Navbar/>
             <WebDevelopment/>
             <TechStack/>
             <FAQLayout/>
             <ScrollToTop/>
             <Footer/>
             

       </div>

        
    );
};

export default web;