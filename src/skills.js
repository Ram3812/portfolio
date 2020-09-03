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
                    <div className="col-xs-2 skills">
                        <ul>
                            <li>C</li>
                            <li>Cpp</li>
                            <li>Java</li>
                            <li>Python</li>
                        </ul>
                    </div>
                    <div className="col-xs-2 col-xs-offset-1">
                        <div className="thumbnail">
                            <img className="card-img-top" src={require("./images/semi_formal.jpg")} alt="Portfolio"/>
                            <div className="caption">
                                <a href="https://github.com/Ram3812/portfolio">Git</a>
                                <a href="#host" style={{float:"right"}}>Visit site</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;
