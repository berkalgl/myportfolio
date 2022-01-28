import React from "react";
import Typical from "react-typical";
import {FaTwitter, FaInstagram, FaGithub, FaLinkedin} from 'react-icons/fa';
import { Icon } from '@iconify/react';
import Typewriter from 'typewriter-effect';


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
            <div className="mb-4">
                {Object.keys(props.socials).map((social, i) => {
                    return(
                        <a href={props.socials[social].url} target="_blank" rel="noreferrer noopener" className="social-links" key={i}>
                            <SocialLogoComponent name={props.socials[social].name}></SocialLogoComponent>
                        </a>
                    )
                })}
            </div>
        )
    }
}

const HeaderTitleTypeAnimationComponent = React.memo((titles)=>{

    const converted = Object.values(titles)[0];

    return(
        <div className="title-container">
        <Typewriter
          options={{
            strings: converted,
            autoStart: true,
            loop: true,
            delay: 50,
            wrapperClassName: 'title-styles',
            cursorClassName: 'title-styles',
          }}
        />
        </div>
    )}, (props,prevProp) => true);

export default function Intro(props){
  const {sharedData} = props;
  const [name] = React.useState(sharedData.name);
  const [titles] = React.useState(sharedData.titles);
  const [socials] = React.useState(sharedData.social);

  return(

    <div id="intro" style={{ height: window.innerHeight - 140, display: 'block' }}>
        <div className="row aligner" style={{ height: '100%'}}>
            <div className="col-md-12">
                <div>
                    <Icon icon="la:laptop-code" width="150" hFlip={true} className="" />
                    <h1 className="mb-0">
                        <Typical steps={[name]} wrapper="p"/>
                    </h1>
                    <HeaderTitleTypeAnimationComponent titles={titles}></HeaderTitleTypeAnimationComponent>
                    <SocialComponent socials={socials}></SocialComponent>
                </div>
            </div>
        </div>
    </div>
  )

}