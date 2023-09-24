import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex justify-center lg:justify-between items-center font-inter flex-col lg:flex-row gap-5 mx-2">
            <figure className="text-center">
                <img src="/Resources/Logo.png" alt="logo" />
            </figure>
            <nav className="flex flex-col justify-center md:flex-row gap-4 md:gap-12 text-[#0B0B0B] text-lg font-normal">
                <NavLink to={`home`}>Home</NavLink>
                <NavLink to={`donation`}>Donation</NavLink>
                <NavLink to={`statistics`}>Statistics</NavLink>
            </nav>
        </div>
    );
};

export default Navbar;