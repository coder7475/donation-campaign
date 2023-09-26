import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex justify-center lg:justify-between items-center font-inter flex-col lg:flex-row gap-5 max-w-[1320px] mx-auto px-1">
            <figure className="text-center">
                <img src="/Resources/Logo.png" alt="logo" />
            </figure>
            <nav className="flex flex-col items-center justify-center md:flex-row gap-4 md:gap-12 text-[#0B0B0B] text-lg font-normal">
                <NavLink
                    to={`/`}
                    className={({ isActive, isPending }) =>
                        isActive
                            ? "active text-[#FF444A] font-bold"
                            : isPending
                                ? "pending"
                                : ""
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to={`donation`}
                    className={({ isActive, isPending }) =>
                        isActive
                            ? "active text-[#FF444A] font-bold"
                            : isPending
                                ? "pending"
                                : ""
                    }
                >
                    Donation
                </NavLink>
                <NavLink
                    to={`statistics`}
                    className={({ isActive, isPending }) =>
                        isActive
                            ? "active text-[#FF444A] font-bold"
                            : isPending
                                ? "pending"
                                : ""
                    }
                >
                    Statistics
                </NavLink>
            </nav>
        </div>
    );
};

export default Navbar;