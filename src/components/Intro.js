import React, {Component} from "react";
import Typical from "react-typical";
import {FaTwitter, FaInstagram, FaGithub, FaLinkedin} from 'react-icons/fa'

class Intro extends Component {

    constructor(props){
        super(props);
        this.state = {
          titles : [],
          socials : []
        };
    }


    render() {

        if (this.props.sharedData) {
            var name = this.props.sharedData.name;
            this.setState({titles: this.props.sharedData.titles.map(x => [ x.toUpperCase(), 1500 ] ).flat()});
            this.setState({socials: this.props.sharedData.social});
        }

        const HeaderTitleTypeAnimation = React.memo(() => {
            return <Typical className="title-styles" steps={this.state.titles} loop={50}></Typical>
        }, (props, prevProp) => true);
        
        return(
            <div id="intro" style={{ height: window.innerHeight - 140, display: 'block' }}>
                <div className="row aligner" style={{ height: '100%'}}>
                    <div className="col-md-12">
                        <div>
                            <span className="iconify intro-icon" data-icon="la:laptop-code" data-inline="false "></span>
                            <br/>
                            <h1 className="mb-0">
                                <Typical steps={[name]} wrapper="p"/>
                            </h1>
                            <div className="title-container">
                                <HeaderTitleTypeAnimation></HeaderTitleTypeAnimation>
                            </div>
                            <div className="mb-4">
                                {this.state.socials.map((social, i) => {
                                    return (
                                        <a href={social.url} target="_blank" rel="noreferrer noopener" className="social-links">
                                            {(() => {
                                                if(social.name === "github"){
                                                    return <FaGithub />
                                                }else if(social.name === "linkedin"){
                                                    return <FaLinkedin />
                                                }else if(social.name === "twitter"){
                                                    return <FaTwitter />
                                                }else{
                                                    return <FaInstagram />
                                                }
                                            })}
                                        </a>)
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Intro;