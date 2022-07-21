import React, { useState } from "react";
import { useEffect } from "react";
import Pannel from "../components/adminTable/Pannel";

const Admin = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const localUsername = localStorage.getItem("username");
        const localPassword = localStorage.getItem("password");
        if (localUsername === process.env.REACT_APP_USERNAME && localPassword === process.env.REACT_APP_PASSWORD) {
            setLoggedIn(true);
        }
    }, []);

    const handleSubmitForm = (e) => {
        e.preventDefault();
        if (username === process.env.REACT_APP_USERNAME && password === process.env.REACT_APP_PASSWORD) {
            setLoggedIn(true);
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
        } else {
            setUsername("Wrong credentials");
            setPassword("Wrong credentials");
        }
    };
    return (
        <>
            {!loggedIn ? (
                <section className="min-h-screen flex flex-row justify-center items-center">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-4xl font-bold">Admin</h1>
                        <form onSubmit={handleSubmitForm} className="my-10 flex flex-col justify-center items-center w-3/4 md:w-[30rem]">
                            <input type="text" value={username} placeholder="Username" className="my-2 py-3 px-4 w-full bg-blueColor/10 rounded-md" onChange={(e) => setUsername(e.target.value)} />
                            <input type="password" value={password} placeholder="Password" className="my-2 py-3 px-4 w-full bg-blueColor/10 rounded-md" onChange={(e) => setPassword(e.target.value)} />
                            <button className="bg-blueColor mt-4 w-full hover:bg-blue-700 duration-200 text-white font-bold py-2 px-4 rounded" type="submit">
                                Login
                            </button>
                        </form>
                    </div>
                </section>
            ) : (
                <Pannel />
            )}
        </>
    );
};

export default Admin;
