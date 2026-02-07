import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { FaFacebookF, FaPinterestP, FaInstagram, FaWhatsapp, FaTwitter, FaTiktok } from "react-icons/fa";
import NewsletterCTA from "./Newsletter";


const Footer = () => {
    const [showImportantLinks, setShowImportantLinks] = useState(false);
    const [showInformation, setShowInformation] = useState(false);
    const [showFollowUs, setShowFollowUs] = useState(false)

    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between mt-10 py-10 px-5 md:px-10 text-white">
                <div className="space-y-6">
                    <h1 className="text-4xl font-semibold">Let's get in touch</h1>
                    <p className="w-4/5">
                        Sign up to get exclusive deals and discounts straight to your inbox!
                    </p>
                    <NewsletterCTA/>
                </div>

                <div className="mt-6 md:mt-0">
                    <div
                        className="flex items-center justify-between cursor-pointer md:cursor-default"
                        onClick={() => setShowImportantLinks(!showImportantLinks)}
                    >
                        <h4 className="uppercase text-lg font-semibold text-yellow-400">Important Links</h4>
                        <FaChevronDown
                            className={`transition-transform ${showImportantLinks ? "rotate-180" : "rotate-0"
                                } md:hidden`}
                        />
                    </div>
                    <div className={`md:block ${showImportantLinks ? "block" : "hidden"}`}>
                        <Link to="/" className="block hover:text-yellow-200 mt-2 group relative w-fit">
                            Blog
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link to="/" className="block hover:text-yellow-200 mt-2 group relative w-fit">
                            FAQs
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span></Link>
                        <Link to="/" className="block hover:text-yellow-200 mt-2 group relative w-fit">
                            Track Order
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span></Link>
                        <Link to="/" className="block hover:text-yellow-200 mt-2 group relative w-fit">
                            Contact us
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span></Link>
                    </div>
                </div>

                <div className="mt-6 md:mt-0">
                    <div
                        className="flex items-center justify-between cursor-pointer md:cursor-default"
                        onClick={() => setShowInformation(!showInformation)}
                    >
                        <h4 className="uppercase text-lg font-semibold text-yellow-400">Information</h4>
                        <FaChevronDown
                            className={`transition-transform ${showInformation ? "rotate-180" : "rotate-0"
                                } md:hidden`}
                        />
                    </div>
                    <div className={`md:block ${showInformation ? "block" : "hidden"}`}>
                        <Link to="/" className="block hover:text-yellow-200 mt-2 group relative w-fit">
                            Terms of Service
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span></Link>
                        <Link to="/" className="block hover:text-yellow-200 mt-2 group relative w-fit">
                            Return Policy
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span></Link>
                        <Link to="/" className="block hover:text-yellow-200 mt-2 group relative w-fit">
                            Delivery Policy
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span></Link>
                        <Link to="/" className="block hover:text-yellow-200 mt-2 group relative w-fit">
                            Privacy Policy
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span></Link>
                    </div>
                </div>

                <div className="space-y-6 mt-6 md:mt-0 mb-0 md:mb-0">
                    <div className=" flex items-center justify-between cursor-pointer md:cursor-default text-white capitalize text-lg font-semibold"
                        onClick={() => setShowFollowUs(!showFollowUs)}
                    >
                        <h1 className="uppercase text-yellow-400">Follow Us</h1>
                        <FaChevronDown
                            className={`transition-transform ${showFollowUs ? "rotate-180" : "rotate-0"
                                } md:hidden`} />
                    </div>
                    <div className={`md:flex gap-3 ${showFollowUs ? "flex" : "hidden"}`}>
                        {/* <Link to={'/'} className="  p-4 rounded-full bg-white/80 text-black transition-colors duration-[0.5s] hover:bg-yellow-500 hover:text-white"><FaPinterestP /></Link> */}
                        <Link to={'https://www.tiktok.com/@dunni4260?_r=1&_t=ZS-93fFOTK3Vy9'} className=" p-4 rounded-full bg-white/80 text-black transition-colors duration-[0.5s] hover:bg-yellow-500 hover:text-white"><FaTiktok /></Link>
                        <Link to={'https://www.instagram.com/13juneventure?igsh=eHdiZHprcjdyNXNx&utm_source=qr'} className=" p-4 rounded-full bg-white/80 text-black transition-colors duration-[0.5s] hover:bg-yellow-500 hover:text-white"><FaInstagram /></Link>
                        {/* <Link to={'/'} className=" p-4 rounded-full bg-white/80 text-black transition-colors duration-[0.5s] hover:bg-yellow-500 hover:text-white"><FaTwitter /></Link> */}
                        <Link to={'https://wa.me/message/2HOUB5LR7YCLH1'} className=" p-4 rounded-full bg-white/80 text-black transition-colors duration-[0.5s] hover:bg-yellow-500 hover:text-white"><FaWhatsapp /></Link>
                    </div>
                </div>
            </div>
                <div className="text-white text-center">
                    <p>&copy; Fax Collections {new Date().getFullYear()}</p>
                </div>
        </div>
    );
};

export default Footer;