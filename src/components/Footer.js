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
            <div className="copyright">
                <p class="copyright text-muted small">Copyright &copy; Berk ALĞÜL 2022. All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer;
