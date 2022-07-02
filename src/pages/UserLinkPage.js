import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/card/Card";
import { useParams } from "react-router-dom";
import googleUser from "../context/googleUser";
import LoadingAnimation from "../components/loading/LoadingAnimation";
import { FiTwitter } from "react-icons/fi";
import { TwitterShareButton } from "react-share";
import Footer from "../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import notify from "../components/toast/notify";
import { Helmet } from "react-helmet";

const UserLinkPage = () => {
    const { loading, setLoading } = useContext(googleUser);

    const navigate = useNavigate();

    const { id } = useParams();
    const [user, setUser] = useState(null);

    const { userData } = useContext(googleUser);

    const gettingUsers = async () => {
        const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_DOMAIN}/api/user/${id}`);
        // console.log(data.data[0]);
        if (data.results > 0) {
            setUser(data.data[0]);
            setLoading(false);
        } else {
            notify("No user founded", "error");
            navigate(`/page/notFound`);
        }
    };

    useEffect(() => {
        setLoading(true);
        gettingUsers();
    }, [id]);

    return (
        <>
            <Helmet>
                <title>{`${id} | xLinks.Pro`}</title>
                <meta name="twitter:card" content="summary" />
                {/* <meta name="twitter:site" content="@AbhiDadhaniya3" /> */}
                <meta name="twitter:url" content={`https://www.xlinks.pro/${id}`} />
                <meta name="twitter:title" content={`My xLinks.Pro Profile`} />
                <meta name="twitter:description" content="I've create my profile in xLinks.pro" />
                <meta name="twitter:creator" content="@AbhiDadhaniya3" />
                <meta property="twitter:image" content="https://cdn.woorise.com/wp-content/uploads/2020/10/bio-link-tools.png" />
            </Helmet>
            {loading ? (
                <LoadingAnimation />
            ) : (
                user && (
                    <>
                        {/* <section className="relative text-font bg-cover bg-center bg-fixed bg-bottom-wave min-h-screen flex flex-col justify-center items-center"> */}
                        {/* <section className="relative text-font bg-cover bg-center bg-fixed bg-hero-pattern min-h-screen flex flex-col justify-center items-center"> */}
                        <section className="relative text-font bg-cover bg-center bg-phone-card-wave md:bg-card-wave min-h-screen flex flex-col justify-center items-center">
                            <Card userData={user} />
                            <div className="mt-5">
                                {/* {console.log(userData.googleId, user.googleId)} */}
                                {userData.googleId === user.googleId && (
                                    <TwitterShareButton className="font-medium !bg-blueColor !text-white !rounded-full flex flex-row justify-center items-center w-min !px-3.5 !py-1 ring-0 focus:ring-2 focus:ring-offset-2 focus:ring-blueColor duration-300" title="Checkout xLinks.pro by @AbhiDadhaniya3 to create awesome bio profiles." hashtags={["xlinkspro", "profile"]} url={`https://www.xlinks.pro/${id}`}>
                                        <FiTwitter className="text-xl mr-2" />
                                        Share
                                    </TwitterShareButton>
                                    // <TwitterShareButton title="Checkout my profile at xLinks.Pro by @AbhiDadhaniya3" hashtags={["xlinkspro", "profile"]} url={`https://xlinkspro.herokuapp.com/${id}`}>
                                    //     <div className="bg-blueColor flex flex-row font-medium justify-center items-center py-2 px-3 rounded-md text-white">
                                    //         <FiTwitter className="text-2xl mr-2" />
                                    //         Share
                                    //     </div>
                                    // </TwitterShareButton>
                                )}
                            </div>
                            <div className="absolute bottom-0">
                                <Footer />
                            </div>
                        </section>
                    </>
                )
            )}
        </>
    );
};

export default UserLinkPage;
