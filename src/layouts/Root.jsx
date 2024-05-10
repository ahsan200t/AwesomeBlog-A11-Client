import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Root = () => {
    return (
        <div className="container mx-auto">
            {/* Navbar */}
             <Navbar></Navbar>
            {/* Outlet */}
            <div><Outlet></Outlet></div>
            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default Root;