import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { TbBrandDiscord } from "react-icons/tb";
import { FiYoutube } from "react-icons/fi";
import { ImBlog } from "react-icons/im";
import { TbWorld } from "react-icons/tb";
import { TbBrandTelegram } from "react-icons/tb";
import { ImPinterest2 } from "react-icons/im";
import { TbCoffee } from "react-icons/tb";
// import { FiMail } from "react-icons/fi";
import { useContext } from "react";
import googleUser from "../../context/googleUser";

const InputLink = ({ platform, placeholder, iconName }) => {
    const { instagram, setinstagram } = useContext(googleUser);
    const { twitter, settwitter } = useContext(googleUser);
    const { github, setgithub } = useContext(googleUser);
    const { linkedin, setlinkedin } = useContext(googleUser);
    const { facebook, setfacebook } = useContext(googleUser);
    const { discord, setdiscord } = useContext(googleUser);
    const { youtube, setyoutube } = useContext(googleUser);
    const { blogs, setblogs } = useContext(googleUser);
    const { website, setwebsite } = useContext(googleUser);
    const { telegram, settelegram } = useContext(googleUser);
    const { pintrest, setpintrest } = useContext(googleUser);
    const { buymeacoffee, setbuymeacoffee } = useContext(googleUser);
    return (
        <>
            <div className="flex rounded-md my-3">
                <div className="px-4 inline-flex items-center min-w-fit rounded-l-md border border-r-0 border-gray-200 bg-blue/5">
                    <span className="text-sm text-gray-500 flex flex-row justify-center items-center  capitalize">
                        {/* {platform} */}
                        {iconName === "BsInstagram" ? <BsInstagram className="text-blue icon-style" /> : <></>}
                        {iconName === "FiTwitter" ? <FiTwitter className="text-blue icon-style" /> : <></>}
                        {iconName === "FiGithub" ? <FiGithub className="text-blue icon-style" /> : <></>}
                        {iconName === "AiOutlineLinkedin" ? <AiOutlineLinkedin className="text-blue icon-style" /> : <></>}
                        {iconName === "FiFacebook" ? <FiFacebook className="text-blue icon-style" /> : <></>}
                        {iconName === "TbBrandDiscord" ? <TbBrandDiscord className="text-blue icon-style" /> : <></>}
                        {iconName === "FiYoutube" ? <FiYoutube className="text-blue icon-style" /> : <></>}
                        {iconName === "ImBlog" ? <ImBlog className="text-blue icon-style" /> : <></>}
                        {iconName === "TbWorld" ? <TbWorld className="text-blue icon-style" /> : <></>}
                        {iconName === "TbBrandTelegram" ? <TbBrandTelegram className="text-blue icon-style" /> : <></>}
                        {iconName === "ImPinterest2" ? <ImPinterest2 className="text-blue icon-style" /> : <></>}
                        {iconName === "TbCoffee" ? <TbCoffee className="text-blue icon-style" /> : <></>}
                    </span>
                </div>
                <input
                    type="text"
                    onChange={(e) => {
                        platform == "instagram" ? setinstagram(e.target.value) : platform == "twitter" ? settwitter(e.target.value) : platform == "github" ? setgithub(e.target.value) : platform == "linkedin" ? setlinkedin(e.target.value) : platform == "facebook" ? setfacebook(e.target.value) : platform == "discord" ? setdiscord(e.target.value) : platform == "youtube" ? setyoutube(e.target.value) : platform == "blogs" ? setblogs(e.target.value) : platform == "website" ? setwebsite(e.target.value) : platform == "telegram" ? settelegram(e.target.value) : platform == "pintrest" ? setpintrest(e.target.value) : platform == "buymeacoffee" ? setbuymeacoffee(e.target.value) : <></>;
                    }}
                    value={platform == "instagram" ? instagram : platform == "twitter" ? twitter : platform == "github" ? github : platform == "linkedin" ? linkedin : platform == "facebook" ? facebook : platform == "discord" ? discord : platform == "youtube" ? youtube : platform == "blogs" ? blogs : platform == "website" ? website : platform == "telegram" ? telegram : platform == "pintrest" ? pintrest : platform == "buymeacoffee" ? buymeacoffee : <></>}
                    name={platform}
                    id="hs-input-with-add-on-url"
                    className="py-3 px-4 pr-11 block w-full input-style rounded-r-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                    placeholder={placeholder}
                />
            </div>
        </>
    );
};

export default InputLink;
