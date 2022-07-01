import React from "react";
// import { useEffect, useState } from "react";
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
import { FiMail } from "react-icons/fi";

const Card = ({ userData }) => {
    return (
        <div className="bg-white shadow-2xl p-4 md:p-10 rounded-lg flex flex-col justify-center items-center container mx-auto w-11/12 md:w-[40rem]">
            {/* <img src={"https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=396"} alt={user.name} className="-mt-28 w-40 shadow-lg bg-white rounded-full p-2" /> */}
            <img src={userData.profilePic} alt={userData.fullName} className="-mt-20 md:-mt-28 w-28 md:w-40 shadow-lg bg-white rounded-full p-2" referrerPolicy="no-referrer" rel="noreferrer" />
            <h1 className="text-3xl text-center md:text-5xl font-bold mt-5 md:mt-8">{userData.fullName}</h1>
            {userData.profession && <h4 className="text-lg md:text-xl mt-2 my-5 text-blue/90">~ {userData.profession}</h4>}

            {userData.socialMedia && (
                <div className="flex flex-row flex-wrap justify-center items-center px-10">
                    {userData.socialMedia.instagram && (
                        <a rel="noopener noreferrer" target={"_blank"} href={userData.socialMedia.instagram}>
                            <BsInstagram className="icon-style" />
                        </a>
                    )}
                    {userData.socialMedia.twitter && (
                        <a rel="noopener noreferrer" target={"_blank"} href={userData.socialMedia.twitter}>
                            <FiTwitter className="icon-style" />
                        </a>
                    )}
                    {userData.socialMedia.github && (
                        <a rel="noopener noreferrer" target={"_blank"} href={userData.socialMedia.github}>
                            <FiGithub className="icon-style" />
                        </a>
                    )}
                    {userData.socialMedia.linkedin && (
                        <a rel="noopener noreferrer" target={"_blank"} href={userData.socialMedia.linkedin}>
                            <AiOutlineLinkedin className="icon-style" />
                        </a>
                    )}
                    {userData.socialMedia.facebook && (
                        <a rel="noopener noreferrer" target={"_blank"} href={userData.socialMedia.facebook}>
                            <FiFacebook className="icon-style" />
                        </a>
                    )}
                    {userData.socialMedia.discord && (
                        <a rel="noopener noreferrer" target={"_blank"} href={userData.socialMedia.discord}>
                            <TbBrandDiscord className="icon-style" />
                        </a>
                    )}
                    {userData.socialMedia.youtube && (
                        <a rel="noopener noreferrer" target={"_blank"} href={userData.socialMedia.youtube}>
                            <FiYoutube className="icon-style" />
                        </a>
                    )}
                    {userData.socialMedia.blog && (
                        <a rel="noopener noreferrer" target={"_blank"} href={userData.socialMedia.blog}>
                            <ImBlog className="icon-style" />
                        </a>
                    )}
                    {userData.socialMedia.pinterest && (
                        <a rel="noopener noreferrer" target={"_blank"} href={userData.socialMedia.pinterest}>
                            <ImPinterest2 className="icon-style" />
                        </a>
                    )}
                    {userData.socialMedia.telegram && (
                        <a rel="noopener noreferrer" target={"_blank"} href={userData.socialMedia.telegram}>
                            <TbBrandTelegram className="icon-style" />
                        </a>
                    )}
                    {userData.socialMedia.buymeacoffee && (
                        <a rel="noopener noreferrer" target="_blank" href={userData.socialMedia.buymeacoffee}>
                            <TbCoffee className="icon-style" />
                        </a>
                    )}
                    {userData.socialMedia.website && (
                        <a rel="noopener noreferrer" target={"_blank"} href={userData.socialMedia.website}>
                            <TbWorld className="icon-style" />
                        </a>
                    )}
                </div>
            )}
            {/* <a href={`mailto:${userData.email}`} className="text-base md:text-xl mt-2 my-5 bg-blue py-1 px-3 rounded-md text-white/90 duration-150 ring-offset-0 active:ring-2 ring-blue/30 flex flex-row justify-center items-center"> */}
            <a href={`mailto:${userData.email}`} className="text-base md:text-xl mt-2 my-5 bg-blue/10 py-1 px-3 text-blue focus:outline-none rounded-full focus:ring-2 focus:ring-blue/60 focus:ring-offset-2 focus:ring-offset-white transition-all flex flex-row justify-center items-center">
                <FiMail className="text-lg md:text-2xl mx-2" />
                {userData.email}
            </a>
            <p className="text-lg md:text-xl text-gray-600 text-center">{userData.bio}</p>
        </div>
    );
};

export default Card;
