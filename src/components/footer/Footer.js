import React from "react";
const Footer = () => {
    return (
        <footer className="py-3 text-xl flex flex-row justify-center items-center text-gray-900">
            Copyright &#169; || Made with &#10084; By{" "}
            <a target={"_blank"} rel="noreferrer" className="px-1 ml-1 font-bold text-blueColor hover:text-blueColor/80 focus:outline-none rounded-full focus:ring-2 focus:ring-blueColor/90 focus:ring-offset-0 transition-all" href="https://www.web-developer-abhi.me/">
                Abhi
            </a>
        </footer>
    );
};

export default Footer;
