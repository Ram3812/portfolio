import React from 'react';
import './body.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faLinkedinIn,
    faTwitter,
    faWhatsapp,
    faFacebook,
    faInstagram,
    faGithub,
    faGoogle
} from '@fortawesome/free-brands-svg-icons';

class Contact extends React.Component {
    constructor() {
        super()
        this.state = {
            linkedin: "https://www.linkedin.com/in/k-sri-bhargav-ram-465828171/",
            twitter: "https://twitter.com/ram_3812?s=09",
            whatsapp: "https://wa.me/918500314070",
            facebook: "https://www.facebook.com/Bhargav.Kuchi",
            instagram: "https://instagram.com/r.a.m_007?igshid=1ck3lcio0li27",
            git: "https://github.com/Ram3812",
            mail: "sbramkuchi@gmail.com",
            gmail: false
        }
        this.handleClick = this.handleClick.bind(this)
        this.mouseOut = this.mouseOut.bind(this)
    }

    handleClick() {
        this.setState(prevState => {
            return {
                gmail: !prevState.gmail
            }
        })
    }

    mouseOut() {
        this.setState(prevState => {
            return {
                num: false,
                gmail: false
            }
        })
    }

    render() {
        return (
            <div style={{paddingTop: "70px", minHeight: "600px"}} id="contact">
                <div className="row">
                    <h1>Contact Me</h1>
                    <ul className="icons">
                        <li>
                            <a href={this.state.linkedin} id="linkedin" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                            </a>
                        </li>
                        <li>
                            <a href={this.state.twitter} id="twitter" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </a>
                        </li>
                        <li>
                            <a href={this.state.whatsapp} id="num"  target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                            </a>
                        </li>
                        <li>
                            <a href={this.state.facebook} id="facebook" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                        </li>
                        <li>
                            <a href={this.state.instagram} id="instagram" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>
                        </li>
                        <li>
                            <a href={this.state.git} id="github" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} size="2x" />
                            </a>
                        </li>
                        <li>
                            <a href="#gmail" id="gmail" onMouseOver={this.handleClick} onMouseOut={this.mouseOut}>
                                <FontAwesomeIcon icon={faGoogle} size="2x" />
                            </a>
                        </li>
                    </ul>
                    <div 
                        style={{display: this.state.num ? "block" : "none"}} 
                        className="num"
                    >
                        {this.state.whatsapp}
                    </div>
                    <div 
                        style={{display: this.state.gmail ? "block" : "none"}} 
                        className="gmail"
                    >
                        {this.state.mail}
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;
