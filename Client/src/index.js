import "./index.css";
import "./Styling/navbar.css";
import "./Styling/animation.css";
import "./Styling/footer.css";
import "./Styling/homePage.css";
import "./Styling/pnf.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ToastContainer
      position="top-center"
      autoClose={1500}
      hideProgressBar
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover={false}
      theme="dark"
      width="350px"
    />
    <Tooltip
      id="my-tooltip"
      style={{
        backgroundColor: "greenyellow",
        color: "black",
        borderRadius: "6px",
      }}
    />

    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
