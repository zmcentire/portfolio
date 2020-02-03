import React from 'react';
import {Media} from 'reactstrap';
import './images/Stoic-Quote-Screenshot.png'
import './images/Forum-Land-screenshot.png'

const Projects = () => {
    return (
        <div className="projects">
            <Media>
                <Media left top href= "https://stoic-quote-generator.herokuapp.com/">
                    <Media height="200px" src={require("./images/Stoic-Quote-Screenshot.png")} alt="Stoic Quote Generator"/>
                </Media>
                <Media body>
                    <Media heading>
                        Stoic Quote Generator
                    </Media>
                    Random quote generator built in React using Rest APIs the randomly generate quotes from Stoicism.
                </Media>
            </Media>
            <Media className="mt-1">
                <Media left middle href="https://forum-land.herokuapp.com/">
                    <Media height="200px" src={require("./images/Forum-Land-screenshot.png")} alt="Forum Land" />
                </Media>
                <Media body>
                    <Media heading>
                        Forum-Land
                    </Media>
                    Full-stack Reddit clone web application. Series of forum posts on multiple topics with comments and the ability to create new posts and topics included.
                    Front End built using React, Back End built using Node, Express, MongoDB & Mongoose.
            </Media>
            </Media>
        </div>
    )
};

export default Projects
