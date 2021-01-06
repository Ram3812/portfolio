import React from 'react';
import './body.css';
class About extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
render() {
        return (
            <div style={{paddingTop: "15%", minHeight: "600px"}} id="about">
                <div className="row">
                    <div className="col-md-6 col-md-offset-1 col-xs-12 my-name">
                        <h1>K Sri B Ram</h1>
                        <p>Hey rabbles! I'm Ram, highly interested in Data Analytics</p>
                    </div>
                    <div  className="col-md-3 col-md-offset-1 col-xs-12 thumbnail">
                        <img src={require("./images/Portfolio.jpg")} alt="Ram"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;
