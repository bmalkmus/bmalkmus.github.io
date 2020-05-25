// import projects from "../../const/projects"
import axios from "axios";

export default {
    getProjects: function (){
        return axios
        .get("../../const/projects")
        .then(res => {
            console.log(res.data)
            const projects = res.data
            return projects.map(project =>{
                return {
                    name: project.name,
                    deployed: project.deployed,
                    repo: project.name,
                    image: project.image
                };
            });

        })
    }
};