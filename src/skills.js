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
            <div style={{paddingTop: "5%", minHeight: "600px"}} id="skills">
                <div className="row">
                    <h1>Skills</h1>
                    <div className="col-xs-12 skills">
                        <ul>
                            <li><a href="https://en.wikipedia.org/wiki/Java_(programming_language)"  rel="noopener noreferrer" target="_blank">Java</a></li>
                            <li><a href="https://en.wikipedia.org/wiki/Python_(programming_language)"  rel="noopener noreferrer" target="_blank">Python</a></li>
                            <li><a href="https://en.wikipedia.org/wiki/Machine_learning"  rel="noopener noreferrer" target="_blank">Machine Learning</a></li>
                            <li><a href="https://en.wikipedia.org/wiki/HTML"  rel="noopener noreferrer" target="_blank">HTML</a></li>
                            <li><a href="https://en.wikipedia.org/wiki/CSS"  rel="noopener noreferrer" target="_blank">CSS</a></li>
                            <li><a href="https://en.wikipedia.org/wiki/React_(web_framework)"  rel="noopener noreferrer" target="_blank">React JS</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <h1>Projects</h1>
                    <div className="col-xs-12 projects">
                        <ul>
                            <li><h3>Portfolio</h3></li>
                            <p>The page you are currently on is my Portfolio. To know how I implemented this, go to the <a href="https://github.com/Ram3812/portfolio" rel="noopener noreferrer" target="_blank">github repository</a></p> <br/>
                            <li><h3>ISO 37120 Twitter Text Classification Project</h3></li>
                            <p>Nowadays, people are using social media networks to raise complaints in their locality on issues related to different kinds of problems like no water supply, electricity, telecommunication, environment, economy, solid wastes, education, fire emergency, sanitation, health emergency, transport, criminal cases, etc. Hence in this project, all the complaints posted on Twitter are examined to classify the new tweets into these dimensions which helps an organization dealing with that particular issue to get to know about the issue and resolve it at the earliest. This model also helps to get to know about the opinion of the citizens and also to monitor and manage various government bodies in an effective way. In this project, the data was extracted using different keywords, the extracted data were filtered and labeled according to the dimensions mentioned above, and SML techniques were used for classification. Go to the <a href="https://github.com/Ram3812/twitter_project" rel="noopener noreferrer" target="_blank">github repository</a> for more details</p>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;