import React from "react";
import { GoogleLoginBtn, GoogleLogoutBtn } from "../components/GoogleBtn/Google";
import signinPic from "../../src/assets/signin.png";
import Footer from "../components/footer/Footer";
import { useContext, useEffect } from "react";
import googleUser from "../context/googleUser";
import { MdOutlineDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

const Signin = () => {
    const { userData } = useContext(googleUser);
    useEffect(() => {}, [userData]);
    return (
        <>
            <section className="md:min-h-screen flex flex-col md:flex-row justify-center md:justify-between items-center">
                <div className="flex flex-col justify-center my-20 md:my-0 w-full md:w-1/2 text-center items-center">
                    <h2 className="text-6xl font-bold text-gray-700 mb-10">{userData.googleId ? "Google Account" : "Continue with Google"}</h2>
                    <div className="hs-dropdown relative">
                        {userData.email ? (
                            <>
                                <button id="hs-dropdown-custom-trigger" type="button" className="hs-dropdown-toggle py-1 pl-1 pr-3 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blueColor transition-all text-sm dark:bg-gray-800 dark:hover:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                                    <img className="w-8 h-auto rounded-full" src={userData.imageUrl} alt={""} referrerPolicy="no-referrer" />
                                    <span className="text-gray-600 font-medium truncate max-w-[7.5rem] dark:text-gray-400">Account</span>
                                    <svg className="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </button>
                                <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700" aria-labelledby="hs-dropdown-custom-trigger">
                                    <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blueColor-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to={"/dashboard"}>
                                        <MdOutlineDashboard className="float-left mr-1 text-lg" />
                                        Dashboard
                                    </Link>
                                    <GoogleLogoutBtn />
                                </div>
                            </>
                        ) : (
                            <GoogleLoginBtn />
                        )}
                    </div>
                </div>
                <div className="w-full md:w-1/2 h-[24rem] md:h-screen">
                    <img src={signinPic} className="object-cover w-full h-full" alt="signin xLinks.Pro" />
                </div>
            </section>
            <Footer />
            {/* <div className="flex flex-row justify-center items-center">
                <div className="w-1/2"></div>
                <div className="w-1/2">
                </div>
            </div> */}
        </>
    );
};

export default Signin;
