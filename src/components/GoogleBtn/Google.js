import { IoLogOutOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useEffect, useContext } from "react";
import axios from "axios";
import { gapi } from "gapi-script";
import googleUser from "../../context/googleUser";
import { notify } from "../toast/Toast";

const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

export const GoogleLoginBtn = () => {
    const { userData, setUserData } = useContext(googleUser);
    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: googleClientId,
                scope: "email",
            });
        }
        gapi.load("client:auth2", start);
    }, [userData]);

    // var accessToken = gapi.auth.getToken().access_token;

    const onSuccess = async (res) => {
        console.log("[Login Success]currentUser:", res);
        const { profileObj } = res;
        setUserData(profileObj);
        const user = {
            fullName: profileObj.name,
            email: profileObj.email,
            googleId: profileObj.googleId,
            profilePic: profileObj.imageUrl,
        };
        const result = await axios.post(`${process.env.REACT_APP_BACKEND_DOMAIN}/api/user/add`, user);
        const { data } = result;
        // console.log(data.newUser);
        if (data.newUser) {
            notify(`Welcome ${profileObj.name}.`, "success");
        } else {
            notify(`Welcome back ${profileObj.name}.`, "success");
        }
    };
    const onFailure = (res) => {
        notify("Login Failed.", "error");
        // console.log("[Login failed]res:", res);
    };
    return (
        <GoogleLogin
            clientId={googleClientId}
            render={(renderProps) => (
                <button onClick={renderProps.onClick} id="hs-dropdown-custom-trigger" className="hs-dropdown-toggle py-3 px-6 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue transition-all text-sm dark:bg-gray-800 dark:hover:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                    <FcGoogle className="text-2xl" />
                    <span className="text-gray-600 dark:text-gray-400 text-xl">Google Signin</span>
                </button>
            )}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookie
            disabledStyle
            Policy={"single_host_origin"}
            isSignedIn={true}
        ></GoogleLogin>
    );
};

export const GoogleLogoutBtn = () => {
    const { setUsername, setBio, setProfession, setinstagram, settwitter, setgithub, setlinkedin, setfacebook, setdiscord, setyoutube, setblogs, setwebsite, settelegram, setpintrest, setbuymeacoffee } = useContext(googleUser);
    const { setUserData } = useContext(googleUser);
    const onLogoutSuccess = () => {
        setUserData({});
        setinstagram("");
        settwitter("");
        setgithub("");
        setlinkedin("");
        setfacebook("");
        setdiscord("");
        setyoutube("");
        setblogs("");
        setwebsite("");
        settelegram("");
        setpintrest("");
        setbuymeacoffee("");
        setBio("");
        setProfession("");
        setUsername("");
        notify("Successfully Logout.", "success");
        // use toasters from preline to show below msg
        // console.log("SUCCESS LOG OUT");
    };
    return (
        <GoogleLogout
            clientId={googleClientId}
            render={(renderProps) => (
                <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="flex items-center w-full gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                    <IoLogOutOutline className="float-left text-lg" />
                    Logout
                </button>
            )}
            onLogoutSuccess={onLogoutSuccess}
            disabledStyle
        ></GoogleLogout>
    );
};
