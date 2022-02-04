import React from 'react';
import '../scss/footer.scss'

function Footer(props) {
    const {sharedData} = props;
    return (
        <footer>
           <div className="footer-socials">
                {sharedData.social.map(function(social) {
                    return(
                        <span key={social.name} className="m-4">
                            <a href={social.url} target="_blank" rel="noreferrer noopener">
                                <i className={social.class}></i>
                            </a>
                        </span>  
                    )              
                })}
            </div>
        </footer>
    )
}

export default Footer;
