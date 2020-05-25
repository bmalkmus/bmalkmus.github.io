import React from "react";
import "./style.css";


function ProjectCard ({name, deployed, repo, imagePath, btnClick, descript, tech}) {
    return (
        <div className="card">

            <h2>{name}</h2>
            <div className = "card-contain">
            <div onClick = {btnClick} data-value = "back" className ="BTN">
                <p data-value ="back"> &lt;&lt; </p>
            </div>

            <div className ="projectContent">
                <img className = "screenshot" src = {imagePath} alt ={name}/>

                <p className = "information"> <span>Description:</span> {descript} </p>

                <p className = "information"> <span>Technologies Used:</span> {tech} </p>

                <p className = "links"> 
                    Deployed: 

                    <a className = "links" target = "_blank" rel="noopener noreferrer" href ={deployed}>
                        {deployed}
                    </a> 
                </p>
                <p className = "links"> 
                    Github: 
                    <a  className = "links" target = "_blank" rel="noopener noreferrer" href ={repo}>
                        {repo}
                    </a>
                </p>
            </div>

            <div onClick = {btnClick} data-value="forward" className ="BTN">
                <p data-value="forward"> &gt;&gt; </p>
            </div>
            </div>
        </div>
    )
}

export default ProjectCard