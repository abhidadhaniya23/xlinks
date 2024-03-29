import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import UserLinkPage from "./pages/UserLinkPage";
import googleUser from "./context/googleUser";
import { Toast } from "./components/toast/Toast";
import Dashboard from "./pages/Dashboard";
import Signin from "./pages/Signin";
import Homepage from "./pages/Homepage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
    const [userData, setUserData] = useState({});
    const [instagram, setinstagram] = useState("");
    const [twitter, settwitter] = useState("");
    const [github, setgithub] = useState("");
    const [linkedin, setlinkedin] = useState("");
    const [facebook, setfacebook] = useState("");
    const [discord, setdiscord] = useState("");
    const [youtube, setyoutube] = useState("");
    const [blogs, setblogs] = useState("");
    const [website, setwebsite] = useState("");
    const [telegram, settelegram] = useState("");
    const [pintrest, setpintrest] = useState("");
    const [buymeacoffee, setbuymeacoffee] = useState("");
    const [username, setUsername] = useState("");
    const [bio, setBio] = useState("");
    const [profession, setProfession] = useState("");
    const [loading, setLoading] = useState(false);

    const { id } = useParams();
    useEffect(() => {}, [id]);

    return (
        <googleUser.Provider value={{ loading, setLoading, userData, setUserData, instagram, setinstagram, twitter, settwitter, github, setgithub, linkedin, setlinkedin, facebook, setfacebook, discord, setdiscord, youtube, setyoutube, blogs, setblogs, website, setwebsite, telegram, settelegram, pintrest, setpintrest, buymeacoffee, setbuymeacoffee, username, setUsername, bio, setBio, profession, setProfession }}>
            <BrowserRouter>
                <Navbar />
                <Toast />
                <Routes>
                    <Route path="/" exact element={<Homepage />} />
                    <Route path="/dashboard" exact element={<Dashboard />} />
                    <Route path="/:id" exact element={<UserLinkPage />} />
                    <Route path="/signin" exact element={<Signin />} />
                    <Route path="*" exact element={<NotFoundPage />} />
                </Routes>
            </BrowserRouter>
        </googleUser.Provider>
    );
}
{
    /* <img src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=396" className="w-48 rounded-full border-2 border-solid border-blue-400 p-2" alt={user.fullName} /> */
}
{
    /* <a href={process.env.NODE_ENV == "production" ? "/googleRedirect" : "http://localhost:5000/googleRedirect"}>Continue with Google</a> */
}

export default App;
