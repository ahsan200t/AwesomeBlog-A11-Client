import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Root = () => {
    return (
        <div className="container mx-auto">
            {/* Navbar */}
             <Navbar></Navbar>
            {/* Outlet */}
            <div className="min-h-[calc(100vh-270px)]"><Outlet></Outlet></div>
            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default Root;