import React from "react";
import "./style.css";


function ProjectCard ({name, deployed, repo, imgPath, btnClick, description, technologies}) {
    // return (
    //     <div className="card">

    //         <h2>{name}</h2>
    //         <div className = "card-contain">
    //         {/* <div onClick = {btnClick} data-value = "back" className ="BTN">
    //             <p data-value ="back"> &lt;&lt; </p>
    //         </div> */}

    //         <div className ="projectContent">
    //             <div className = "imgContain">
    //             <img className = "screenshot" src = {imgPath} alt ={name}/>
    //             </div>

    //             <p className = "information"> <span>Description:</span> {description} </p>

    //             <p className = "information"> <span>Technologies Used:</span> {technologies} </p>

    //             <p className = "links"> 
    //                 Deployed: 

    //                 <a className = "links" target = "_blank" rel="noopener noreferrer" href ={deployed}>
    //                     {deployed}
    //                 </a> 
    //             </p>
    //             <p className = "links"> 
    //                 Github: 
    //                 <a  className = "links" target = "_blank" rel="noopener noreferrer" href ={repo}>
    //                     {repo}
    //                 </a>
    //             </p>
    //         </div>

    //         <div onClick = {btnClick} data-value="forward" className ="BTN">
    //             <p data-value="forward"> &gt;&gt; </p>
    //         </div>
    //         </div>
    //     </div>
    // )

    return (
        <div
        className="slider-content"
        style={{ background: `url('${imgPath}') no-repeat center center` }}
        >
            <div className = "inner">
            <h2>{name}</h2>
            <p>Description: {description}</p>
            <p>Technologies: {technologies}</p>
            <p>Deployed: <a href={deployed} target = "_blank" rel="noopener noreferrer">{deployed}</a></p>
            <p>Repository: <a target = "_blank" rel="noopener noreferrer" href ={repo}>{repo}</a></p>
            </div>
        </div>
    )
}

export default ProjectCard