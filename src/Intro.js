import React, {useState} from 'react';
import {Jumbotron, Collapse, Button, Card, CardBody} from 'reactstrap';
import "./images/Headshot.png";

const Intro = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return(
        <div>
            <Jumbotron>
                <div className="intro">
                    <div>
                        <h1 className="display-3">Hello, I'm Zach!</h1>
                        <p className="lead">I am a full-stack Web Developer</p>
                    </div> 
                    <img src={require("./images/Headshot.png")} alt=""/>
                </div>
                <hr className="my-2"/>
                <p>Welcome to my portfolio!</p>
               
                <p className="lead">
                    <Button color="secondary" onClick={toggle}>Learn More</Button>
                    <Collapse isOpen={isOpen}>
                        <Card>
                            <CardBody>                                
                            Recent coding boot camp graduate with experience in full-stack web development (JavaScript, React, HTML, CSS, Node, etc.).

                            5+ years in Radio Productions/Promotions with experience in Adobe Creative Cloud, WordPress, and Microsoft Suite.

                            Seeking new opportunities in tech to further improve my new skillset in front end and back end programming.
                            </CardBody>
                        </Card>
                    </Collapse>
                </p>
            </Jumbotron>

            <div className="arrow">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default Intro
