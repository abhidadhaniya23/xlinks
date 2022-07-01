import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <>
            <section className="flex flex-col justify-center items-center min-h-screen">
                <div className="text-center text-gray-900">
                    <h2 className="-mt-20 text-[12rem] md:text-[20rem] font-extrabold text-blue">404</h2>
                    <h6 className="-mt-10 md:-mt-16 text-3xl md:text-5xl font-semibold">Not Found Anything!</h6>
                    <p className="mt-2 md:mt-4 mb-10 text-xl">It seems like server error or something else!</p>
                    <div className="flex flex-col md:flex-row justify-center items-center">
                        <Link to={"/"} className="text-xl py-2 px-4 my-2 md:mx-2 bg-blue/10 text-blue rounded-full font-medium focus:ring-2 transition-all focus:ring-offset-2 focus:ring-blue/70">
                            Home Page
                        </Link>
                        <a href="mailto:abhidadhnaiya23@gmail.com" className="text-xl py-2 px-4 my-2 md:mx-2 bg-blue/10 text-blue rounded-full font-medium focus:ring-2 transition-all focus:ring-offset-2 focus:ring-blue/70">
                            Contact Developer
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NotFoundPage;
