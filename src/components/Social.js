import React from 'react';
import {FaTwitter, FaInstagram, FaGithub, FaLinkedin} from 'react-icons/fa';
import '../scss/social.scss';

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

function Social(props) {

    if(props.socials !== undefined)
    {
        return (
            <div className="mb-4">
                {Object.keys(props.socials).map((social, i) => {
                    return(
                        <a href={props.socials[social].url} target="_blank" rel="noreferrer noopener" className={props.className} key={i}>
                            <SocialLogoComponent name={props.socials[social].name}></SocialLogoComponent>
                        </a>
                    )
                })}
            </div>
        )
    }
}

export default Social;
