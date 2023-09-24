import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="mt-12 flex justify-between items-center font-inter">
            <figure>
                <img src="/Resources/Logo.png" alt="logo" />
            </figure>
            <nav className="flex flex-col md:flex-row gap-12 text-[#0B0B0B] text-lg font-normal">
                <NavLink>Home</NavLink>
                <NavLink>Donation</NavLink>
                <NavLink>Statistics</NavLink>
            </nav>
        </div>
    );
};

export default Navbar;