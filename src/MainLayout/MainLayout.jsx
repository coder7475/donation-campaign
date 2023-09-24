import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="max-w-[1320px] mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>      
        </div>
    );
};

export default MainLayout;