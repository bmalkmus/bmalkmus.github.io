import React from "react";
import "./style.css";
import Resume from "./Resume.pdf"

function Footer () {
    return (
        <footer>
            <p className="footer23">
                <a className="Github" href="https://github.com/bmalkmus" target="_blank" rel='noreferrer noopener'>GitHub</a>
                <a className="LinkedIn" href="https://linkedin.com/in/bmalkmus23" target="_blank" rel='noreferrer noopener'>LinkedIn</a>
                <a className="resume" href={Resume} target="_blank" rel='noreferrer noopener'>Resume</a>
            </p>
            <p className="footer23">&#169; Copyright 2019 </p>
        </footer>
    )
}

export default Footer;