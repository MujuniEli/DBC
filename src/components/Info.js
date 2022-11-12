import React from "react";
import cardImage from "../images/sama drk.png"
import emailIcon from "../images/email-Icon.png"
import linkedinicon from "../images/linkedIn-icon.png"

export default function Info() {
    return (
            <div className="container info">
                <img src={cardImage} alt="profile pic"/>
                <h2 className="main-title">Elijah Mujuni</h2>
                <h4 className="jb-title">React JS Engineer</h4>
                <p className="name">elijahmujuni.website</p>
                <div className="social-btns">
                    <div className="btn-white">
                        <img src={emailIcon} alt="#" />
                        <p>Email</p>
                    </div>
                    <div className="btn-blue">
                        <img src={linkedinicon} alt="#" />
                        <p>LinkedIn</p>
                    </div>
                </div>

            </div>
    )
}

