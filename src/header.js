import React from 'react';

class Header extends React.Component  {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button 
                                type="button" 
                                className="navbar-toggle" 
                                data-toggle="collapse" 
                                data-target="#mynavbar"
                                aria-controls="mynavbar"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a href="index.html" className="navbar-brand">Ram</a>
                        </div>
                        <div className="collapse navbar-collapse" id="mynavbar">
                            <ul className="nav navbar-nav navbar-right">
                                <li className="nav-item"><a href="#about">About</a></li>
                                <li className="nav-item"><a href="#skills">Skills</a></li>
                                <li className="nav-item"><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;