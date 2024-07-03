import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo dark.png";
import { IoArrowUpSharp } from "react-icons/io5";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        {
            path: '/',
            name: 'Home'
        },
        {
            path: '/about',
            name: 'About'
        },
        {
            path: '/services',
            name: 'Services'
        },
        {
            path: '/contact',
            name: 'Contact'
        }
    ];

    return (
        <div className="bg-white shadow-md md:shadow-none">
            <div className="container flex justify-between items-center p-4 font-Inter">
                <NavLink to={'/'}>
                    <img src={logo} className="" alt="Logo" />
                </NavLink>

                <div className="flex-1 flex justify-center">
                    <div className={`md:flex gap-8 md:static absolute duration-300 ease-in-out ${open ? 'top-16' : 'top-[-200px]'} right-0 md:right-auto md:bg-transparent bg-gray-200 w-full md:w-auto`}>
                        {
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
                        {open && (
                            <div className="flex justify-center mt-4 md:hidden">
                                <button className="text-base font-semibold border border-PrimaryColor px-7 py-2 rounded-xl flex items-center gap-2">
                                    Appointment <span className="rotate-45"><IoArrowUpSharp /></span>
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <button className="hidden md:flex text-base font-semibold border border-PrimaryColor px-7 py-2 rounded-xl items-center gap-2">
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
