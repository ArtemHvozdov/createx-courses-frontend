import './footer-copyright.css';
import heartIcon from './../../assets/icons/heart-footer-icon.svg'

function FooterCopyright() {
    return (
        <div className="footer__copyright">
            <div className="container">
                <div className="footer__copyright-inner">
                    © All rights reserved. Made with <img src={heartIcon} alt="" /> by Createx Studio 
                </div>
            </div>
        </div>
    )
}

export default FooterCopyright;
