import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import "./styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
reportWebVitals();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

/*import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { CookiesProvider } from "react-cookie";
// import { ChakraProvider } from "@chakra-ui/react";
import { createRoot } from "react-dom/client";
const container = document.getElementById("app");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//     <StrictMode>
//         <App />
//     </StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import React from "react";
// import reactDom from "react-dom";
// import "../src/index.css";
// import App from "./../src/App";

// reactDom.render(<App />, document.getElementById("root"));
*/
