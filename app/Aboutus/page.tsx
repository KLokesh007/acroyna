import Us from "@/components/About/layout";
import Footer from "@/components/Footer/layout";
import Navbar from "@/components/Navbar/layout";
import ScrollToTop from "@/components/ScrollTop/layout";
// import Testimonials from "@/components/Testimonials/layout";
import React from "react";




const About: React.FC = () => {

    return (
       <div>
             <Navbar/>
             <Us/>
             {/* <Testimonials/> */}
             <ScrollToTop/>
             <Footer/>
             

       </div>

        
    );
};

export default About;