import React from 'react';
import './body.css';

class Skills extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div style={{paddingTop: "70px", minHeight: "600px"}} id="skills">
                <div className="row">
                    <h1>Skills & Projects</h1>
                    <div className="col-xs-5 skills">
                        <ul>
                            <li>Java</li>
                            <li>Python</li>
                            <li>Machine Learning</li>
                            <li>HTML & CSS</li>
                            <li>React JS</li>
                        </ul>
                    </div>
                    <div className="col-xs-2 col-xs-offset-1">
                        <div className="thumbnail">
                            <img className="card-img-top" src={require("./images/pf.jpg")} alt="Portfolio"/>
                            <div className="caption">
                                <a href="https://github.com/Ram3812/portfolio" rel="noopener noreferrer" target="_blank">Git</a>
                                <a href="#host" style={{float:"right"}}>Visit site</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-2 col-xs-offset-1">
                        <div className="thumbnail">
                            <img className="card-img-top" src={require("./images/isoPro.jpeg")} alt="ISO Project"/>
                            <div className="caption">
                                <a href="https://github.com/Ram3812/twitter_project" rel="noopener noreferrer" target="_blank">Git</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 skills">
                        <ul>
                            <li><b>Portfolio</b></li>
                            <p>The page you are currently on is my Portfolio. To know how I implemented this, go to the <a href="https://github.com/Ram3812/portfolio" rel="noopener noreferrer" target="_blank">github repository</a></p> <br/>
                            <li><b>ISO 37120 Twitter Text Classification Project</b></li>
                            <p>Nowadays, people are using social media networks to raise complaints in their locality on issues related to different kinds of problems like no water supply, electricity, telecommunication, environment, economy, solid wastes, education, fire emergency, sanitation, health emergency, transport, criminal cases, etc. Hence in this project, all the complaints posted on Twitter are examined to classify the new tweets into these dimensions which helps an organization dealing with that particular issue to get to know about the issue and resolve it at the earliest. This model also helps to get to know about the opinion of the citizens and also to monitor and manage various government bodies in an effective way. In this project, the data was extracted using different keywords, the extracted data were filtered and labeled according to the dimensions mentioned above, and SML techniques were used for classification. Go to the <a href="https://github.com/Ram3812/twitter_project" rel="noopener noreferrer" target="_blank">github repository</a> for more details</p>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;
