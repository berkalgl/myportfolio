import React from 'react';
import '../scss/footer.scss';
import Social from './Social';

function Footer(props) {
    const {sharedData} = props;
    return (
        <footer>
           <div className="footer-socials">
                <Social socials={sharedData.social} className="social-links-footer"></Social>
            </div>
        </footer>
    )
}

export default Footer;
