import Navbar from "./components/navbar/Navbar";
import googleUser from "./context/googleUser";
import { Toast } from "./components/toast/Toast";
import NotFoundPage from "./pages/NotFoundPage";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";
// google analytics import
import ReactGA from "react-ga";
const TRACKING_ID = "G-TMERMER0GR"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

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
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [id]);

    return (
        <googleUser.Provider value={{ loading, setLoading, userData, setUserData, instagram, setinstagram, twitter, settwitter, github, setgithub, linkedin, setlinkedin, facebook, setfacebook, discord, setdiscord, youtube, setyoutube, blogs, setblogs, website, setwebsite, telegram, settelegram, pintrest, setpintrest, buymeacoffee, setbuymeacoffee, username, setUsername, bio, setBio, profession, setProfession }}>
            <BrowserRouter>
                <Navbar />
                <Toast />
                <Routes>
                    {/* <Route path="/" exact element={<Homepage />} />
                    <Route path="/dashboard" exact element={<Dashboard />} />
                    <Route path="/:id" exact element={<UserLinkPage />} />
                    <Route path="/signin" exact element={<Signin />} /> */}
                    <Route path="*" exact element={<NotFoundPage />} />
                </Routes>
            </BrowserRouter>
        </googleUser.Provider>
    );
}

export default App;
