import React, { useEffect , useState } from "react";
import "./style.css";
import Row from "../../Row";
import ProjectCard from "../../project";
import projects from "../../../const/projects";





function Portfolio () {
    const [proj, setProject] = useState({});
    const [projs, setProjects] = useState([]);
    const [proIndex, setIndex] =useState(0);

    useEffect(() => {
        function loadProjects (){
            // API.getProjects()
           let Projects = {projects}
           console.log(Projects.projects.projects)
           Projects = Projects.projects.projects
           setProjects(Projects);
           setProject(Projects[0]);
           
        }
        loadProjects()

    },[]);

    function nextPro(proIndex) {
        if (proIndex >= projs.length) {
            proIndex = 0;
        }
        setProject(projs[proIndex]);
        setIndex(proIndex);
    }

    function previousPro (proIndex) {
        if (proIndex < 0) {
            proIndex = projs.length -1;
        }
        setProject(projs[proIndex]);
        setIndex(proIndex);
    }

    function btnClick(event) {
        const btnName = event.target.dataset.value
        if (btnName ==="forward") {
            const newIndex = proIndex + 1;
            nextPro(newIndex);
        }
        else {
            const newIndex = proIndex - 1;
            previousPro(newIndex);
        }
    }

    return (
        <div className ="context">
            <h1 className = "text-center portTitle"> Portfolio</h1>
            <Row>
                <ProjectCard 
                    name = {proj.name}
                    repo = {proj.repo}
                    descript = {proj.description}
                    tech = {proj.technologies}
                    deployed = {proj.deployed}
                    imagePath ={proj.imgPath}

                    btnClick = {btnClick}
                />
            </Row>
        </div>

    )}

    export default Portfolio;