import React, { useContext, useEffect } from "react";
import { TbEdit } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";
import googleUser from "../../context/googleUser";

import { TwitterShareButton } from "react-share";

const FloatingComponents = () => {
    // const { username } = useContext(googleUser);
    // // const { userData } = useContext(googleUser);
    // useEffect(() => {
    //     console.log("username", username);
    // }, [username]);
    return (
        <div></div>
        // <div className="fixed bg-blueColor/5 rounded-full top-1/2 right-10">
        //     <div className="flex flex-col justify-center items-center p-2">
        //         <Link to="/dashboard" className="duration-200 group hover:bg-blueColor/10 rounded-full p-3">
        //             <TbEdit className="group-hover:text-blueColor hover:text-blueColor duration-200 cursor-pointer text-2xl" />
        //         </Link>
        //         {username !== "" && (
        //             <Link to={`/${username}`} className="duration-200 group hover:bg-blueColor/10 rounded-full p-3">
        //                 <CgProfile className="group-hover:text-blueColor hover:text-blueColor duration-200 cursor-pointer text-2xl" />
        //             </Link>
        //         )}
        //     </div>
        // </div>
        // <FiTwitter className="bg-blueColor rounded-full w-14 h-14 p-3 text-white duration-200 cursor-pointer text-xl" />
    );
};

export default FloatingComponents;
