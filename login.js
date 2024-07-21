import React from "react";
import { loginEndpoint } from "./spotify";
import "./login.css";
export default function Loginn(){
    return(
        <div className="login-page">
            <a href={loginEndpoint}><div className="login-btn">Log in</div></a>
        </div>
    );
};