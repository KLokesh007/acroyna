import AdminDashboard from "@/components/CaseStudies/Albaadmin/layout";
import Footer from "@/components/Footer/layout";
import Navbar from "@/components/Navbar/layout";
import ScrollToTop from "@/components/ScrollTop/layout";
import React from "react";



const case2: React.FC = () => {

    return (
       <div>
             <Navbar/>
             <AdminDashboard/>
             <ScrollToTop/>
             <Footer/>             

       </div>

        
    );
};

export default case2;