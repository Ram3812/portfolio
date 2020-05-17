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
                    <div className="col-xs-6 col-xs-offset-1 my-name">
                        <h1>K Sri Bhargav Ram</h1>
                        <p>Hey rabbles! I'm Ram, highly interested in Data Analytics</p>
                    </div>
                    <div className="col-xs-3 col-xs-offset-1 thumbnail">
                        <img src={require("./images/semi_formal.jpg")} alt="Ram"/>
                    </div>
                </div>

            </div>
        )
    }
}

export default About;
