import React from "react";
import { toast } from "react-toastify";
import { isMobile } from "react-device-detect";
import "react-toastify/dist/ReactToastify.css";
const notify = (msg, type) => {
    isMobile
        ? type === "success"
            ? toast.success(msg, {
                  position: "bottom-center",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  style: { borderRadius: "3px", margin: "3px 0" },
              })
            : toast.error(msg, {
                  position: "bottom-center",
                  autoClose: 4000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  style: { borderRadius: "3px", margin: "3px 0" },
              })
        : type === "success"
        ? toast.success(msg, {
              position: "bottom-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              //   style: { borderRadius: "3px" },
          })
        : toast.error(msg, {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              //   style: { borderRadius: "3px" },
          });
};

export default notify;
