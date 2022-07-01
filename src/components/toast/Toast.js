import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isMobile } from "react-device-detect";

export function Toast() {
    return (
        <>
            {isMobile ? (
                <ToastContainer position="bottom-center" autoClose={3000} hideProgressBar={false} style={{ padding: "20px" }} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            ) : (
                <div>
                    <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
                </div>
            )}
        </>
    );
}
