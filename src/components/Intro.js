import React from "react";
import Typical from "react-typical";
import {FaTwitter, FaInstagram, FaGithub, FaLinkedin} from 'react-icons/fa'

const HeaderTitleTypeAnimation = titles => {
    return(
        <Typical className="title-styles" steps={titles} loop={50}></Typical>
    )
}
const HeaderTitleTypeAnimationComponent = React.memo(HeaderTitleTypeAnimation);

const SocialLogoComponent = props => {
    switch(props.name){
        case 'github':
            return <FaGithub />;
        case 'linkedin':
            return <FaLinkedin />;
        case 'twitter':
            return <FaTwitter />;
        default:
            return <FaInstagram />;
    }
}

const SocialComponent = props => {
    
    if(props.socials !== undefined)
    {
        return (
            Object.keys(props.socials).map((social, i) => {
                return(
                    <a href={props.socials[social].url} target="_blank" rel="noreferrer noopener" className="social-links" key={i}>
                        <SocialLogoComponent name={props.socials[social].name}></SocialLogoComponent>
                    </a>
                )
        }))
    }else{
        return(
        <div>Loading..</div>
        )
    }
}

export default function Intro(props){
  const {sharedData} = props;
  const [name] = React.useState(sharedData.name);
  const [titles] = React.useState(sharedData.titles.map(x => [ x.toUpperCase(), 1500 ] ).flat());
  const [socials] = React.useState(sharedData.social);

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
                        <HeaderTitleTypeAnimationComponent titles={titles}></HeaderTitleTypeAnimationComponent>
                    </div>
                    <div className="mb-4">
                        <SocialComponent socials={socials}></SocialComponent>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )

}