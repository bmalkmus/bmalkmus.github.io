import React, {useState} from "react";
import Carousel from 'react-bootstrap/Carousel';
import projects from "../../const/projects";


function CarouselHousing() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    let Projects = projects;
    Projects = Projects.projects;
    console.log(Projects);
    
    function Slides () {
        let slides = []
        for (let i = 0; i < Projects.length; i++){
            console.log(Projects[i])
            let slide = (
                <Carousel.Item key = {Projects[i].name}>
                    <img
                        className = "d-block w-100"
                        src = {Projects[i].imgPath}
                        alt = {Projects[i].name}
                    />
                    <Carousel.Caption>
                <h3>{Projects[i].name}</h3>
                <p>Description: {Projects[i].description}</p>
                <p>Technologies: {Projects[i].technologies}</p>
                <p>Deployed: {Projects[i].deployed}</p>
                <p>Repository: {Projects[i].repo}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            );
            slides.push(slide)
        }
        return slides
    }

   
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
          <Slides/>
      </Carousel>
    );
  }
  
  export default CarouselHousing;