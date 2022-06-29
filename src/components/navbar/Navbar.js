import React, { useState, useContext, useEffect } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { TbCoffee } from "react-icons/tb";
import { FiTwitter } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { RiGoogleLine } from "react-icons/ri";
import { Link, useParams } from "react-router-dom";
import googleUser from "../../context/googleUser";
import logo from "../../../src/assets/logo.png";

// import google login and logout buttons
import { GoogleLogoutBtn } from "../GoogleBtn/Google";
import axios from "axios";
import { TwitterShareButton } from "react-share";

const Navbar = () => {
    const { userData } = useContext(googleUser);
    const [user, setUser] = useState(null);

    const getUserData = async () => {
        // console.log(userData.googleId);
        const gettingUserData = await axios.get(`${process.env.REACT_APP_BACKEND_DOMAIN}/api/user/get/gId/${userData.googleId}`);
        setUser(gettingUserData.data.data[0]);
        // console.log("username:", user.username);
    };

    useEffect(() => {
        // console.log("running navbar useEffect");
        getUserData();
    }, [userData]);

    useEffect(() => {
        // console.log(`running navbar's empty useEffect`);
    }, [user]);

    return (
        <>
            <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-blue text-sm py-4 dark:bg-gray-800 text-white">
                <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
                    <div className="flex items-center justify-between">
                        <Link className="flex-none text-xl flex flex-row justify-center items-center font-semibold rounded-full px-3.5 py-1 ring-0 focus:ring-2 ring-offset-0 focus:ring-white/50 duration-300" to={"/"}>
                            <img src={logo} className="w-7 mr-2" alt="xLinks.Pro" />
                            xLinks.Pro
                        </Link>
                        <div className="sm:hidden">
                            <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-collapse="#navbar-collapse-slide-up" aria-controls="navbar-collapse-slide-up" aria-label="Toggle navigation">
                                <svg className="hs-collapse-open:hidden w-4 h-4" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                </svg>
                                <svg className="hs-collapse-open:block hidden w-4 h-4" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div id="navbar-collapse-slide-up" className="hidden basis-full grow sm:block">
                        <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
                            <TwitterShareButton className="font-medium text-white rounded-full flex flex-row justify-center items-center w-min !px-2 !py-1 ring-0 focus:ring-2 ring-offset-0 focus:ring-white/50 duration-300" title="Checkout xLinks.pro by @AbhiDadhaniya3 to create awesome bio profiles." hashtags={["xlinkspro", "profile"]} url={`https://xlinkspro.herokuapp.com/`}>
                                <FiTwitter className="text-xl mr-2" />
                                Share
                                {/* <div className=""> */}
                                {/* </div> */}
                            </TwitterShareButton>
                            {userData !== {} && user && user.username ? (
                                <>
                                    <Link className="font-medium text-blue-500" aria-current="page" to={`${user.username}`}>
                                        <CgProfile className="float-left mr-1 text-lg" />
                                        Your Profile
                                    </Link>
                                </>
                            ) : (
                                <PopUpModel loggedIn={userData.email ? true : false} />
                            )}
                            {/* <Link className="font-medium text-blue-500" aria-current="page" to={"/discover"}>
                                <TbUserSearch className="float-left mr-1 text-lg" />
                                Discover
                            </Link> */}
                            <div className="hs-mega-menu" data-hs-mega-menu-auto-close="true">
                                <button id="hs-mega-menu-slide-up-dr" type="button" className="hs-mega-menu-toggle hs-mega-menu-open:text-gray-100 flex items-center w-full text-gray-100 hover:text-gray-100 font-medium dark:text-gray-400 dark:hover:text-gray-200">
                                    <HiOutlineInformationCircle className="float-left mr-1 text-lg" />
                                    About Creator
                                    <svg className="ml-2 w-2.5 h-2.5 text-gray-100" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                                    </svg>
                                </button>
                                <div className="hs-mega-menu-content hs-mega-menu-open:opacity-100 hs-mega-menu-open:mt-0 opacity-0 mt-2 top-full hidden z-10 rounded-md before:absolute before:-top-5 before:left-0 before:w-full before:h-5 w-full bg-white p-2 sm:w-48 sm:transition-all transition-[opacity,margin] sm:absolute sm:shadow-md sm:duration-300 dark:bg-gray-800" aria-labelledby="hs-mega-menu-slide-up-dr">
                                    <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to={"/abhidadhaniya"}>
                                        <CgProfile className="float-left text-lg" />
                                        Profile
                                    </Link>
                                    <a href="https://www.web-developer-abhi.me/" target="_blank" className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                                        <FaLaptopCode className="float-left text-lg" />
                                        Portfolio
                                    </a>
                                    <a href="https://www.twitter.com/abhidadhaniya3" target="_blank" className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                                        <FiTwitter className="float-left text-lg" />
                                        Twitter
                                    </a>
                                    <a href="https://www.buymeacoffee.com/AbhiDadhaniya07" target="_blank" className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                                        <TbCoffee className="float-left text-lg" />
                                        Buy Me A Coffee
                                    </a>
                                </div>
                            </div>
                            <div className="hs-dropdown relative">
                                {userData.email ? (
                                    <>
                                        <button id="hs-dropdown-custom-trigger" type="button" className="hs-dropdown-toggle py-1 pl-1 pr-3 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue transition-all text-sm dark:bg-gray-800 dark:hover:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                                            <img className="w-8 h-auto rounded-full" src={userData.imageUrl} alt={""} referrerPolicy="no-referrer" />
                                            <span className="text-gray-600 font-medium truncate max-w-[7.5rem] dark:text-gray-400">Account</span>
                                            <svg className="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                        </button>
                                        <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700" aria-labelledby="hs-dropdown-custom-trigger">
                                            <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to={"/dashboard"}>
                                                <MdOutlineDashboard className="float-left mr-1 text-lg" />
                                                Dashboard
                                            </Link>
                                            <GoogleLogoutBtn />
                                        </div>
                                    </>
                                ) : (
                                    <Link className="font-medium text-white rounded-full flex flex-row justify-start items-center w-min px-2 py-1 ring-0 focus:ring-2 ring-offset-0 focus:ring-white/50 duration-300" to="signin">
                                        <RiGoogleLine className="text-lg mr-1" />
                                        Signin
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

const PopUpModel = ({ loggedIn }) => {
    useEffect(() => {
        // console.log("loggedIn", loggedIn);
    }, [loggedIn]);
    return (
        <>
            {loggedIn && (
                <button type="button" className="font-medium text-left" data-hs-modal="#hs-slide-down-animation-modal">
                    <CgProfile className="float-left mr-1 text-lg" />
                    Your Profile
                </button>
            )}

            <div id="hs-slide-down-animation-modal" className="bg-black/75 hs-modal hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto">
                <div className="hs-modal-open:mt-7 hs-modal-open:opacity-100 hs-modal-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
                            <h3 className="font-bold text-gray-800 dark:text-white text-xl">{!loggedIn ? "LogIn to create your profile" : "Create your profile"}</h3>
                            <button type="button" className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" data-hs-modal="#hs-slide-down-animation-modal">
                                <span className="sr-only">Close</span>
                                <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor" />
                                </svg>
                            </button>
                        </div>
                        <div className="p-4 overflow-y-auto">
                            <p className="mt-1 text-gray-800 dark:text-gray-400 text-base">
                                {!loggedIn ? "Signin first to create profile" : "To Create your profile, Go to"}
                                {loggedIn ? (
                                    <Link to="/dashboard" className="hs-dropdown-toggle text-blue hover:text-blue/70 focus:outline-none rounded-sm ml-1.5 focus:ring-2 focus:ring-blue/70 focus:ring-offset-2 focus:ring-offset-white transition-all" data-hs-modal="#hs-slide-down-animation-modal">
                                        {/* <Link to="/dashboard" className="hs-dropdown-toggle bg-blue text-white py-1 px-2 rounded-md" data-hs-modal="#hs-slide-down-animation-modal"> */}
                                        Dashboard
                                    </Link>
                                ) : (
                                    <Link to="/signin" className="hs-dropdown-toggle text-blue hover:text-blue/70 focus:outline-none rounded-sm ml-1.5 focus:ring-2 focus:ring-blue/70 focus:ring-offset-2 focus:ring-offset-white transition-all" data-hs-modal="#hs-slide-down-animation-modal">
                                        {/* <Link to="/dashboard" className="hs-dropdown-toggle bg-blue text-white py-1 px-2 rounded-md" data-hs-modal="#hs-slide-down-animation-modal"> */}
                                        Signin
                                    </Link>
                                    // <span className="ml-2 hs-dropdown-toggle" data-hs-modal="#hs-slide-down-animation-modal">
                                    // <span className="ml-2 hs-dropdown-toggle" data-hs-modal="#hs-slide-down-animation-modal">
                                    //     <Link to="signin" className="font-medium rounded-full px-2 py-1 focus:ring-2 ring-offset-0 focus:ring-blue/70 duration-300">
                                    //         Signin
                                    //     </Link>
                                    // </span>
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
//  @testing-library/jest-dom @testing-library/react @testing-library/user-event axios cacache env-cmd framer-motion gapi-script preline react react-device-detect react-dom react-icons react-meta-tags react-router-dom react-scripts react-toastify web-vitals
// npm install react-google-login --legacy-peer-deps
/**
 * 
 * 
        // "@testing-library/jest-dom": "^5.16.4",
        // "@testing-library/react": "^13.3.0",
        // "@testing-library/user-event": "^13.5.0",
        // "axios": "^0.27.2",
        // "cacache": "^16.1.1",
        // "env-cmd": "^10.1.0",
        // "framer-motion": "^6.3.14",
        // "gapi-script": "^1.2.0",
        // "preline": "^1.1.1",
        // "react": "^18.2.0",
        // "react-device-detect": "^2.2.2",
        // "react-dom": "^18.2.0",
        // "react-google-login": "^5.2.2",
        // "react-icons": "^4.4.0",
        // "react-meta-tags": "^1.0.1",
        // "react-router-dom": "^6.3.0",
        // "react-scripts": "^2.1.3",
        // "react-toastify": "^9.0.5",
        // "web-vitals": "^2.1.4"
 */
