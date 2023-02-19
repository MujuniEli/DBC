import React from "react";
import cardImage from "../images/anime-eli.jpg"
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
                    <a href="https://www.linkedin.com/in/elijah-mujuni-12a09379/">
                    <div className="btn-blue">
                        <img src={linkedinicon} alt="#" />
                        <p>LinkedIn</p>
                    </div>
                    </a>
                    
                </div>

            </div>
    )
}

