import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="mt-12 flex justify-center lg:justify-between items-center font-inter flex-col lg:flex-row gap-5 mx-2">
            <figure className="text-center">
                <img src="/Resources/Logo.png" alt="logo" />
            </figure>
            <nav className="flex flex-col justify-center md:flex-row gap-4 md:gap-12 text-[#0B0B0B] text-lg font-normal">
                <NavLink>Home</NavLink>
                <NavLink>Donation</NavLink>
                <NavLink>Statistics</NavLink>
            </nav>
        </div>
    );
};

export default Navbar;