import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="pt-12">
            <Navbar></Navbar>
            <Outlet></Outlet>      
        </div>
    );
};

export default MainLayout;