import React from "react";
import "./style.css";
import profile from "./profilePicture.jpg"
function AboutMe () {
    return (
        <div className="container contextMe">
            <div className = "row">
                <div className = "col-md-12"> 
                    <h1>About Me</h1>
                </div>

            </div>
            <div className="row">
                    <div className="col-md-3 col-sm-12 img-contain">
                        <img src = {profile} className="d-block m-auto profilePic" alt="profile"/>
                    </div>
                    <div className="col-md-9 col-sm-12">
                        <p>
                            My name is Benjamin Malkmus and I am a web developer. I’m based out of Bellevue, WA and have lived in the surrounding Seattle area in 2016. From 2004-2019, I was in the hospitality industry. It has given me hands on experience on working with clients to make sure that my services are completed 100% to the client’s expectations.
                        </p>
                        <p>
                            My friends would describe me as someone who always tries to find the positives of every problem given in life. They would also describe me as someone who doesn’t stress out when under pressure and still knows how to find time to have fun with every situation. When not working, you can find me outside by a body of water or watching some type of sport live or on television.
                        </p>
                        <h4>
                            Technical Skills:
                        </h4>
                        <p>
                            Languages: HTML5 , CSS, JavaScript, Node.js, SQL, jQuery, MongoDB, React.js
                        </p>
                        <p>
                            Applications: Microsoft Visual Studio, Postman, MySQL,  Robo 3T, Git/Github, Heroku 
                        </p>
                    </div>
                </div>
        </div>
        
    )
}

export default AboutMe;
