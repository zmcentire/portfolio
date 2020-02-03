import React from 'react';

const Skills = () => {
    return (
        <div>
            <div>
                <h3>Skills</h3>
            </div>
            
            <div className="skills">
            <div className="front-end">
                <ul>
                    <li><h4>Front End</h4></li>
                    <li><p>JavaScript/ES6</p></li>
                    <li><p>HTML5</p></li>
                    <li><p>CSS</p></li>
                    <li><p>React</p></li>
                </ul>
            </div>

            <div className="back-end">
                <ul>
                    <li><h4>Back End</h4></li>
                    <li><p>Node</p></li>
                    <li><p>Express</p></li>
                    <li><p>Mongoose</p></li>
                    <li><p>MongoDB</p></li>
                </ul>
            </div>

            <div className="other">
                <ul>
                    <li><h4>Other</h4></li>
                    <li><p>Git</p></li>
                    <li><p>JSON</p></li>
                    <li><p>Adobe Creative Cloud</p></li>
                    <li><p>Microsoft Suite</p></li>
                    <li><p>Wordpress</p></li>
                </ul>
            </div>
            </div>

        </div>
    )
}

export default Skills