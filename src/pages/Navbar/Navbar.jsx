import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoArrowUpSharp } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo dark.png";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const links = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/'>About</NavLink>
        <NavLink to='/'>Services</NavLink>
    </>

    return (
        <div className="bg-white shadow-md md:shadow-none pb-10">
            <div className="container flex justify-between items-center p-4 font-Inter">
                <NavLink to={'/'}>
                    <img src={logo} className="" alt="Logo" />
                </NavLink>

                <div className="flex-1 flex justify-center">
                    <div className={`md:flex gap-8 md:static absolute duration-300 ease-in-out ${open ? 'top-16' : 'top-[-200px]'} right-0 md:right-auto md:bg-transparent bg-gray-200 w-full md:w-auto`}>
                        {/* {
                            routes.map(route => (
                                <NavLink
                                    key={route.path}
                                    to={route.path}
                                    className="flex items-center justify-center text-base font-normal p-2"
                                >
                                    {route.name}
                                </NavLink>
                            ))
                        }
                         */}
                        <div className="flex flex-col md:flex-row gap-3 md:gap-6 font-Inter items-center justify-center text-base font-normal ">
                            {links}
                        </div>

                        {open && (
                            <div className="flex justify-center mt-4 md:hidden">
                                <button className="text-base font-semibold border border-PrimaryColor px-7 py-2 rounded-xl flex items-center gap-2 hover:bg-yellow-400 hover:border-yellow-400">
                                    Appointment <span className="rotate-45"><IoArrowUpSharp /></span>
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <button className="hidden md:flex text-base font-semibold border border-PrimaryColor px-7 py-2 rounded-xl items-center gap-2 hover:bg-yellow-400 hover:border-yellow-400">
                    Appointment <span className="rotate-45"><IoArrowUpSharp /></span>
                </button>

                <div className="text-4xl md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
                    {open ? <IoMdClose /> : <RiMenu3Fill />}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
