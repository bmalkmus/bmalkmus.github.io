import React from 'react';


function Slides (props) {
    return (
        <div key = {props.name}>
                    <img
                        className = "d-block w-100"
                        src = {props.imgPath}
                        alt = {props.name}
                    />
                    {/* <Carousel.Caption>
                <h3>{props.name}</h3>
                <p>Description: {props.description}</p>
                <p>Technologies: {props.technologies}</p>
                <p>Deployed: {props.deployed}</p>
                <p>Repository: {props.repo}</p>
                    </Carousel.Caption> */}
        </div>
    )
}

export default Slides