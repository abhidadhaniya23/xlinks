import { MetaTags } from "react-meta-tags";
import profileCard from "../../src/assets/profile_card.png";
import { TbWorld } from "react-icons/tb";
import arrowSvg from "../../src/assets/arrowSvg.png";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Footer from "../components/footer/Footer";
import { isMobile } from "react-device-detect";
import logo from "../assets/logo.png";

const Homepage = () => {
    return (
        <>
            <MetaTags>
                <title>xLinks.Pro</title>
            </MetaTags>
            <section className="text-font flex flex-col justify-center items-center overflow-x-hidden">
                <div className="flex flex-col justify-center text-center items-center container mx-auto py-10">
                    <div className="mt-10 flex flex-col justify-center items-center text-center">
                        <img src={logo} className="w-20" alt="xLinks.Pro" />
                        <h1 className="text-6xl font-bold heading-font">xLinks.Pro</h1>
                        <h2 className="font-medium my-2 text-2xl leading-[2.3rem] md:leading-10 px-5 md:px-0 md:text-2xl text-gray-800">Create your bio profile for free</h2>
                    </div>
                    <Link to="/signin" className="text-xl md:text-2xl mt-2 md:mt-6 md:mb-5 text-blue flex flex-row justify-center pr-2 items-center hover:text-blue/80 focus:outline-none rounded-full focus:ring-2 focus:ring-blue/70 focus:ring-offset-2 focus:ring-offset-white transition-all">
                        <FcGoogle className="icon-style" />
                        Signin with Google
                    </Link>

                    <img src={profileCard} alt="Abhi Dadhaniya xLinks.Pro Profile" className={`${isMobile ? "phone-card-shadow" : "card-shadow"} -z-20 img-shadow mt-16 -mb-24 md:-mb-36 scale-[2.4] md:scale-100 md:-my-36`} />
                    <img src={arrowSvg} className="w-[24rem] mt-32 -mb-4 md:-mt-7" alt="" />
                    <div className=" bg-blue py-3 px-5 rounded-full tracking-wider text-white flex flex-row justify-center items-center pr-4">
                        <TbWorld className="icon-style rounded-full bg-white text-blue" />
                        <span>
                            xlinks.pro/
                            <span className="text-white/60">username</span>
                        </span>
                    </div>
                </div>
                <Footer />
            </section>
        </>
    );
};

export default Homepage;
