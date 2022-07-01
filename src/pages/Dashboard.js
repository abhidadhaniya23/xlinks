// import icons
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

import React from "react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
// import InputLink from "../components/LinkInputs.js/InputLink";
import googleUser from "../context/googleUser";
import notify from "../components/toast/notify";
import LoadingAnimation from "../components/loading/LoadingAnimation";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Footer from "../components/footer/Footer";

const Dashboard = () => {
    const validUsername = new RegExp("^[a-zA-Z0-9]([_-](?![_-])|[a-zA-Z0-9]){2,20}[a-zA-Z0-9]$");

    const navigate = useNavigate();

    const [userByEmail, setUserByEmail] = useState(null);
    const [submitForm, setSubmitForm] = useState(false);

    const { loading, setLoading } = useContext(googleUser);

    const { profession, setProfession } = useContext(googleUser);
    const { username, setUsername } = useContext(googleUser);
    const { bio, setBio } = useContext(googleUser);

    const { userData } = useContext(googleUser);

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

    const getUserData = async () => {
        const existingUserData = await axios.get(`${process.env.REACT_APP_BACKEND_DOMAIN}/api/user/get/gId/${userData.googleId}`);
        setUserByEmail(existingUserData.data.data[0]);
    };

    useEffect(() => {
        if (!userData.googleId) {
            // console.log(userData);
            notify("Please login to continue", "error");
            navigate(`/`);
        }
    }, [userData]);

    useEffect(() => {
        setLoading(true);
        if (userData !== {}) {
            getUserData();
        }
    }, [userData]);

    useEffect(() => {
        if (userByEmail) {
            if (userByEmail.username) {
                setUsername(userByEmail.username);
                setSubmitForm(true);
            } else setUsername("");
            if (userByEmail.socialMedia) {
                userByEmail.socialMedia.instagram ? setinstagram(userByEmail.socialMedia.instagram) : setinstagram("");
                userByEmail.socialMedia.twitter ? settwitter(userByEmail.socialMedia.twitter) : settwitter("");
                userByEmail.socialMedia.github ? setgithub(userByEmail.socialMedia.github) : setgithub("");
                userByEmail.socialMedia.linkedin ? setlinkedin(userByEmail.socialMedia.linkedin) : setlinkedin("");
                userByEmail.socialMedia.facebook ? setfacebook(userByEmail.socialMedia.facebook) : setfacebook("");
                userByEmail.socialMedia.discord ? setdiscord(userByEmail.socialMedia.discord) : setdiscord("");
                userByEmail.socialMedia.youtube ? setyoutube(userByEmail.socialMedia.youtube) : setyoutube("");
                userByEmail.socialMedia.blogs ? setblogs(userByEmail.socialMedia.blogs) : setblogs("");
                userByEmail.socialMedia.website ? setwebsite(userByEmail.socialMedia.website) : setwebsite("");
                userByEmail.socialMedia.telegram ? settelegram(userByEmail.socialMedia.telegram) : settelegram("");
                userByEmail.socialMedia.pintrest ? setpintrest(userByEmail.socialMedia.pintrest) : setpintrest("");
                userByEmail.socialMedia.buymeacoffee ? setbuymeacoffee(userByEmail.socialMedia.buymeacoffee) : setbuymeacoffee("");
                userByEmail.bio ? setBio(userByEmail.bio) : setBio("");
                userByEmail.profession ? setProfession(userByEmail.profession) : setProfession("");
            }
            setLoading(false);
        }
    }, [userByEmail]);

    const handleUsernameChange = () => {
        console.log(userData);
        if (validUsername.test(username)) {
            setSubmitForm(true);
        } else {
            setSubmitForm(false);
        }
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        if (instagram.includes(" ") || twitter.includes(" ") || github.includes(" ") || linkedin.includes(" ") || facebook.includes(" ") || discord.includes(" ") || youtube.includes(" ") || blogs.includes(" ") || website.includes(" ") || telegram.includes(" ") || pintrest.includes(" ") || buymeacoffee.includes(" ")) {
            notify("Spaces included links will be not saved, Please remove spaces from links.", "error");
        }
        handleUsernameChange();
        if (submitForm) {
            const data = {
                email: userData.email,
                username: username,
                bio: bio,
                profession: profession,
                instagram: instagram,
                twitter: twitter,
                github: github,
                linkedin: linkedin,
                facebook: facebook,
                discord: discord,
                youtube: youtube,
                blogs: blogs,
                website: website,
                telegram: telegram,
                pintrest: pintrest,
                buymeacoffee: buymeacoffee,
            };
            const availableUsername = await axios.get(`${process.env.REACT_APP_BACKEND_DOMAIN}/api/user/${username}`);
            console.log(availableUsername);
            // console.log(availableUsername.data.data[0].googleId !== userData.googleId);
            // console.log(availableUsername.data.data[0].googleId, userData.googleId);
            if (availableUsername.data.results > 0 && availableUsername.data.data[0].googleId !== userData.googleId) {
                notify("Username already taken.", "error");
            } else {
                await axios.post(`${process.env.REACT_APP_BACKEND_DOMAIN}/api/user/update`, data);
                notify("Your profile updated.", "success");
                navigate(`/${username}`);
            }
        } else {
            notify("Please fill fields correctly.", "error");
        }
    };

    return (
        <>
            <Helmet>
                <title>Dashboard || xLinks.Pro</title>
            </Helmet>
            {loading && <LoadingAnimation />}
            {userByEmail && !loading && (
                <div className="container px-10 md:px-32 lg:px-[24rem] my-20">
                    {/* <img className="w-20 mx-auto my-5 h-auto rounded-full" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" referrerPolicy="no-referrer" /> */}
                    <img className="w-32 mx-auto my-5 h-auto rounded-full shadow-sm" src={userData.imageUrl} alt={userData.name} referrerPolicy="no-referrer" />
                    <div>
                        <h2 className="my-2 text-5xl text-center font-bold text-gray-800">Dashboard</h2>
                        <hr className="my-5" />
                    </div>
                    <p className="text-red-500 text-sm mb-4">* All Required</p>
                    <form onSubmit={onSubmit} autoComplete="off">
                        <div>
                            <label htmlFor="input-label" className="block text-sm font-medium ml-1 -mb-2 mt-1 dark:text-white">
                                Name
                            </label>
                            <input type="text" autoComplete="off" value={userData.name} required name="fullName" className="py-3 px-4 block w-full rounded-md input-style text-md my-4" readOnly />
                            <label htmlFor="input-label" className="block text-sm font-medium ml-1 -mb-2 mt-1 dark:text-white">
                                Email
                            </label>
                            <input type="email" autoComplete="off" value={userData.email} required name="email" className="py-3 px-4 block w-full rounded-md input-style text-md my-4" readOnly />
                            <label htmlFor="input-label" className="block text-sm font-medium ml-1 -mb-2 mt-1 dark:text-white">
                                Username
                            </label>
                            <input
                                autoComplete="off"
                                type="text"
                                value={username}
                                onChange={(e) => {
                                    setUsername(e.target.value.toLocaleLowerCase());
                                    handleUsernameChange();
                                }}
                                required
                                name="username"
                                className={`py-3 input-style px-4 block w-full rounded-md text-md my-4`}
                            />
                            <label htmlFor="input-label" className="block text-sm ml-1 mb-4 -mt-2 text-green-500">
                                *Contain only letter, number, and underscore.
                            </label>
                            <label htmlFor="input-label" className="block text-sm font-medium ml-1 -mb-2 mt-1 dark:text-white">
                                Profession
                            </label>
                            <input type="text" value={profession} onChange={(e) => setProfession(e.target.value)} required name="profession" className="py-3 px-4 block w-full rounded-md input-style text-md my-4" placeholder="Your profession" />
                            <label htmlFor="input-label" className="block text-sm font-medium ml-1 -mb-2 mt-1 dark:text-white">
                                Bio
                            </label>
                            <textarea value={bio} onChange={(e) => setBio(e.target.value)} name="bio" required className="py-3 px-4 block w-full rounded-md text-md input-style my-4 border-gray-300 border border-solid" rows="3" placeholder="Enter your bio *"></textarea>
                        </div>
                        <hr className="my-5" />
                        <p className="text-red-500 text-sm">All fields aren't required but still fill some links for better profile.</p>
                        <div>
                            <div>
                                <div className="flex rounded-md my-3">
                                    <div className="px-4 inline-flex items-center min-w-fit rounded-l-md border border-r-0 border-gray-200 bg-blue/5">
                                        <span className="text-sm text-gray-500 flex flex-row justify-center items-center  capitalize">
                                            <BsInstagram className="text-blue icon-style" />
                                        </span>
                                        <input onChange={(e) => setinstagram(e.target.value)} placeholder="instagram.com/username" />
                                    </div>{" "}
                                </div>
                                <div className="flex rounded-md my-3">
                                    <div className="px-4 inline-flex items-center min-w-fit rounded-l-md border border-r-0 border-gray-200 bg-blue/5">
                                        <span className="text-sm text-gray-500 flex flex-row justify-center items-center  capitalize">
                                            <FiTwitter className="text-blue icon-style" />
                                        </span>
                                        <input onChange={(e) => settwitter(e.target.value)} placeholder="twitter.com/username" />
                                    </div>{" "}
                                </div>
                                <div className="flex rounded-md my-3">
                                    <div className="px-4 inline-flex items-center min-w-fit rounded-l-md border border-r-0 border-gray-200 bg-blue/5">
                                        <span className="text-sm text-gray-500 flex flex-row justify-center items-center  capitalize">
                                            <FiGithub className="text-blue icon-style" />
                                        </span>
                                        <input onChange={(e) => setgithub(e.target.value)} placeholder="github.com/username" />
                                    </div>{" "}
                                </div>
                                <div className="flex rounded-md my-3">
                                    <div className="px-4 inline-flex items-center min-w-fit rounded-l-md border border-r-0 border-gray-200 bg-blue/5">
                                        <span className="text-sm text-gray-500 flex flex-row justify-center items-center  capitalize">
                                            <AiOutlineLinkedin className="text-blue icon-style" />
                                        </span>
                                        <input onChange={(e) => setlinkedin(e.target.value)} placeholder="linkedin/username" />
                                    </div>{" "}
                                </div>
                                <div className="flex rounded-md my-3">
                                    <div className="px-4 inline-flex items-center min-w-fit rounded-l-md border border-r-0 border-gray-200 bg-blue/5">
                                        <span className="text-sm text-gray-500 flex flex-row justify-center items-center  capitalize">
                                            <FiFacebook className="text-blue icon-style" />
                                        </span>
                                        <input onChange={(e) => setfacebook(e.target.value)} placeholder="facebook.com/username" />
                                    </div>{" "}
                                </div>
                                <div className="flex rounded-md my-3">
                                    <div className="px-4 inline-flex items-center min-w-fit rounded-l-md border border-r-0 border-gray-200 bg-blue/5">
                                        <span className="text-sm text-gray-500 flex flex-row justify-center items-center  capitalize">
                                            <TbBrandDiscord className="text-blue icon-style" />
                                        </span>
                                        <input onChange={(e) => setdiscord(e.target.value)} placeholder="discordapp.com/users/xxxx" />
                                    </div>{" "}
                                </div>
                                <div className="flex rounded-md my-3">
                                    <div className="px-4 inline-flex items-center min-w-fit rounded-l-md border border-r-0 border-gray-200 bg-blue/5">
                                        <span className="text-sm text-gray-500 flex flex-row justify-center items-center  capitalize">
                                            <FiYoutube className="text-blue icon-style" />
                                        </span>
                                        <input onChange={(e) => setyoutube(e.target.value)} placeholder="youtube.com/c/channel-name" />
                                    </div>{" "}
                                </div>
                                <div className="flex rounded-md my-3">
                                    <div className="px-4 inline-flex items-center min-w-fit rounded-l-md border border-r-0 border-gray-200 bg-blue/5">
                                        <span className="text-sm text-gray-500 flex flex-row justify-center items-center  capitalize">
                                            <ImBlog className="text-blue icon-style" />
                                        </span>
                                        <input onChange={(e) => setblogs(e.target.value)} placeholder="Medium, Hashnode, Dev Community etc" />
                                    </div>{" "}
                                </div>
                                <div className="flex rounded-md my-3">
                                    <div className="px-4 inline-flex items-center min-w-fit rounded-l-md border border-r-0 border-gray-200 bg-blue/5">
                                        <span className="text-sm text-gray-500 flex flex-row justify-center items-center  capitalize">
                                            <TbWorld className="text-blue icon-style" />
                                        </span>
                                        <input onChange={(e) => setwebsite(e.target.value)} placeholder="Personal or any company website" />
                                    </div>{" "}
                                </div>
                                <div className="flex rounded-md my-3">
                                    <div className="px-4 inline-flex items-center min-w-fit rounded-l-md border border-r-0 border-gray-200 bg-blue/5">
                                        <span className="text-sm text-gray-500 flex flex-row justify-center items-center  capitalize">
                                            <TbBrandTelegram className="text-blue icon-style" />
                                        </span>
                                        <input onChange={(e) => settelegram(e.target.value)} placeholder="t.me/username" />
                                    </div>{" "}
                                </div>
                                <div className="flex rounded-md my-3">
                                    <div className="px-4 inline-flex items-center min-w-fit rounded-l-md border border-r-0 border-gray-200 bg-blue/5">
                                        <span className="text-sm text-gray-500 flex flex-row justify-center items-center  capitalize">
                                            <ImPinterest2 className="text-blue icon-style" />
                                        </span>
                                        <input onChange={(e) => setpintrest(e.target.value)} placeholder="pintrest.com/username" />
                                    </div>{" "}
                                </div>
                                <div className="flex rounded-md my-3">
                                    <div className="px-4 inline-flex items-center min-w-fit rounded-l-md border border-r-0 border-gray-200 bg-blue/5">
                                        <span className="text-sm text-gray-500 flex flex-row justify-center items-center  capitalize">
                                            <TbCoffee className="text-blue icon-style" />
                                        </span>
                                        <input onChange={(e) => setbuymeacoffee(e.target.value)} placeholder="buymeacoffee.com/username" />
                                    </div>{" "}
                                </div>

                                {/* <InputLink platform="instagram" iconName="BsInstagram" placeholder="instagram.com/username" />
                                <InputLink platform="twitter" iconName="FiTwitter" placeholder="twitter.com/username" />
                                <InputLink platform="github" iconName="FiGithub" placeholder="github.com/username" />
                                <InputLink platform="linkedin" iconName="AiOutlineLinkedin" placeholder="linkedin/username" />
                                <InputLink platform="facebook" iconName="FiFacebook" placeholder="facebook.com/username" />
                                <InputLink platform="discord" iconName="TbBrandDiscord" placeholder="discordapp.com/users/xxxx" />
                                <InputLink platform="youtube" iconName="FiYoutube" placeholder="youtube.com/c/channel-name" />
                                <InputLink platform="blogs" iconName="ImBlog" placeholder="Medium, Hashnode, Dev Community etc" />
                                <InputLink platform="website" iconName="TbWorld" placeholder="Personal or any company website" />
                                <InputLink platform="telegram" iconName="TbBrandTelegram" placeholder="t.me/username" />
                                <InputLink platform="pintrest" iconName="ImPinterest2" placeholder="pintrest.com/username" />
                                <InputLink platform="buymeacoffee" iconName="TbCoffee" placeholder="buymeacoffee.com/username" /> */}
                            </div>
                        </div>
                        <input type="submit" className="bg-blue py-3 px-4 my-10 text-white rounded-md focus:ring-2 duration-200 cursor-pointer ring-offset-2 ring-blue/30" value="Update your profile" />
                    </form>
                </div>
            )}
            <Footer />
        </>
    );
};

export default Dashboard;

//

// {
/**
 * name, profession,profile pic, email, username,bio, links,
 * Links
 * -instagram
 * -twitter
 * -github
 * -linkedin
 * -facebook
 * -youtube
 * -blogs
 * -website
 * -discord
 * -telegram
 * -pintrest
 * -buymeacoffee
 */
// }
