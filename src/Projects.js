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
                <Media left middle href="https://stoic-bio.herokuapp.com/">
                    <Media height="200px" src={require("./images/Stoic-Bio-Screenshot.png")} alt="Stoic Bios" />
                </Media>
                <Media body>
                    <Media heading>
                        Stoic Bio Timeline
                    </Media>
                    React Timeline app featuring simple bios of prolific Stoic Philosophers
                </Media>
            </Media>
            <Media>
                <Media left bottom href= "https://react-dj-board.herokuapp.com/">
                    <Media height="200px" src={require("./images/Dj-React-Screenshot.png")} alt="React DJ Board"/>
                </Media>
                <Media body>
                    <Media heading>
                        React DJ Board
                    </Media>
                    A DJ board React App with interactive buttons that change the display and color of the board
                </Media>
            </Media>
        </div>
    )
};

export default Projects
