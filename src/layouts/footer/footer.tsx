import './footer.css';
import LogoFooterImg from './../../assets/logo-footer.svg';
import TwitterLogoImg from './../../assets/icons/sociall-media-icons/Vector-1.svg';
import FbLogoImg from './../../assets/icons/sociall-media-icons/Vector.svg';
import YouTubeLogoImg from './../../assets/icons/sociall-media-icons/youtube.svg';
import TelegramLogoImg from './../../assets/icons/sociall-media-icons/Vector-2.svg';
import InstagramLogoImg from './../../assets/icons/sociall-media-icons/Vector-3.svg';
import LinkedinLogoImg from './../../assets/icons/sociall-media-icons/Vector-4.svg';
import FooterCopyright from '../../components/footer-copyright/footer-copyright';
import phoneIcon from './../../assets/icons/phone-icon.svg';
import mailIcon from './../../assets/icons/mail-icon.svg'


function Footer() {
    return (
        <div>
            <footer className='footer'>
                <div className="container">
                    <nav className="footer__menu">
                        <ul className="footer__menu-list">
                            <li className="footer__menu-item">
                                <a href="" className="footer__logo">
                                    <img src={LogoFooterImg} alt="" />
                                </a>
                            </li>
                            <li className="footer__menu-item footer__menu-description">
                                <p className='description__website'>Createx Online School is a leader in online studying. We have lots of courses and programs from the main market experts. 
                                We provide relevant approaches to online learning, internships and employment in the largest companies in the country.</p>
                            </li>
                            <li className="footer__menu-item">
                                <ul className="socialmedia__icons">
                                    <li className="socialmedia__icons-item">
                                        <a href="#" className="socialmedia__icons-link">
                                            <img src={FbLogoImg} alt="" />
                                        </a>
                                    </li>
                                    <li className="socialmedia__icons-item">
                                        <a href="#" className="socialmedia__icons-link">
                                            <img src={TwitterLogoImg} alt="" />
                                        </a>
                                    </li>
                                    <li className="socialmedia__icons-item">
                                        <a href="#" className="socialmedia__icons-link">
                                            <a href="" className="socialmedia__icons-link">
                                                <img src={YouTubeLogoImg} alt="" />
                                            </a>
                                        </a>
                                    </li>
                                    <li className="socialmedia__icons-item">
                                        <a href="#" className="socialmedia__icons-link">
                                            <a href="" className="socialmedia__icons-link">
                                                <img src={TelegramLogoImg} alt="" />
                                            </a>
                                        </a>
                                    </li>
                                    <li className="socialmedia__icons-item">
                                        <a href="#" className="socialmedia__icons-link">
                                            <a href="" className="socialmedia__icons-link">
                                                <img src={InstagramLogoImg} alt="" />
                                            </a>
                                        </a>
                                    </li>
                                    <li className="socialmedia__icons-item">
                                        <a href="#" className="socialmedia__icons-link">
                                            <a href="" className="socialmedia__icons-link">
                                                <img src={LinkedinLogoImg} alt="" />
                                            </a>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                        <ul className="footer__menu-list">
                            <li className="footer__menu-item">
                                <h4 className="footer__menu-tittle">SITE MAP</h4>
                            </li>
                            <li className="footer__menu-item">
                                <a href="#" className="footer__menu-link">About Us</a>
                            </li>
                            <li className="footer__menu-item">
                                <a href="#" className="footer__menu-link">Courses</a>
                            </li>
                            <li className="footer__menu-item">
                                <a href="#" className="footer__menu-link">Events</a>
                            </li>
                            <li className="footer__menu-item">
                                <a href="#" className="footer__menu-link">Blog</a>
                            </li>

                            <li className="footer__menu-item">
                                <a href="#" className="footer__menu-link">Contacts</a>
                            </li>
                        </ul>

                        <ul className="footer__menu-list">
                            <li className="footer__menu-item">
                                <h4 className="footer__menu-tittle">COURSES</h4>
                            </li>
                            <li className="footer__menu-item">
                                <a href="#" className="footer__menu-link">Marketing</a>
                            </li>
                            <li className="footer__menu-item">
                                <a href="#" className="footer__menu-link">Management</a>
                            </li>
                            <li className="footer__menu-item">
                                <a href="#" className="footer__menu-link">HR & Recruting</a>
                            </li>
                            <li className="footer__menu-item">
                                <a href="#" className="footer__menu-link">Design</a>
                            </li>
                            <li className="footer__menu-item">
                                <a href="#" className="footer__menu-link">Development</a>
                            </li>
                        </ul>

                        <ul className="footer__menu-list">
                            <li className="footer__menu-item">
                            <h4 className="footer__menu-tittle">CONTACT US</h4>
                            </li>
                            <li className="footer__menu-item">
                                <img src={phoneIcon} id='phoneicon' alt="" />
                                <a href="tel:4055550128" className="footer__menu-link">(405) 555-0128</a>
                            </li>
                            <li className="footer__menu-item">
                                <img src={mailIcon} id="mailicon" alt="" />
                                <a href="mailto:hello@createx.com" className="footer__menu-link">hello@createx.com</a>
                            </li>
                        </ul>

                        <ul className="footer__menu-list">
                            <li className="footer__menu-item">
                                <h4 className="footer__menu-tittle">SIGN UP TO OUR NEWSLETTER#</h4>
                            </li>
                            <li className="footer__menu-item">
                                <form action="">
                                    <input type="text" placeholder='Email address' className="footer__input-email" />
                                </form>
                            </li>
                            <li className="footer__menu-item">
                                <p className='description__signup'>*Subscribe to our newsletter to receive 
                                communications and early updates from Createx SEO Agency.</p>
                            </li>
                        </ul>
                    </nav>
                </div>
            </footer>
            <FooterCopyright />
        </div>
    )
}

export default Footer;