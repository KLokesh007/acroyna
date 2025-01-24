import Footer from "@/components/Footer/layout";
import HeroSection from "@/components/Hero/layout";
import CaseStudy from "@/components/HomeCase/layout";
import ServicesSection from "@/components/HomeService/layout";
import Navbar from "@/components/Navbar/layout";
import ScrollToTop from "@/components/ScrollTop/layout";
import Testimonials from "@/components/Testimonials/test";
import React, { Children } from "react";




const Page: React.FC = () => {

    return (
       <div>
             <Navbar/>
             <HeroSection/>
             <ServicesSection/>
             <CaseStudy/>   
             <Testimonials/>
             {/* Add valid children elements here if needed */}
             <ScrollToTop/>
             
             <Footer/>

       </div>

        
    );
};

export default Page;