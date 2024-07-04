import { Link } from "react-router-dom";
import logo from "../../assets/logo light.png";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";


const Footes = () => {
    return (
        <div className="bg-[#020043] py-20 text-white font-Inter">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                    <div className="col-span-2">
                        <img src={logo} alt="Logo" className="w-28 h-auto mb-8" />
                        <p className="text-base pb-5 font-normal">123 Main Street Anytown, USA <br />Postal Code: 12345</p>
                        <p className="text-base font-normal">Support: support@oyolloo.com</p>
                        <div className="text-base font-normal">Available : 10:00am to 07:00pm</div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex  flex-col space-y-2 mt-14">
                            <Link>Home</Link>
                            <Link>About Us</Link>
                            <Link>Sucess Page</Link>
                            <Link>Terms and condition</Link>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex  flex-col space-y-2 mt-14">
                            <Link>Services</Link>
                            <Link>Scheduling</Link>
                            <Link>Contact Us</Link>
                            <Link>Patient Portal</Link>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <nav className="flex flex-col">
                            <header className="text-lg font-bold mt-14  mb-6">Follow Us On</header>

                            <div className="flex items-center gap-8 text-xl text-white mb-5">
                                <p className=" rounded-full p-2"><FaFacebook /></p>
                                <p className="rounded-full p-2"><FaLinkedin /></p>
                                <p className=" rounded-full p-2"><FaTwitter /></p>
                            </div>
                            <p className="font-Roboto">Copyright © 2020 Doctors</p>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footes;