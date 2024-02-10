import './heder.css';
import logoHeaderImg from './../../assets/logo-header.svg'
import Button from '../button/button';

function Header() {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header__inner'>
                    <a href="#" className="logo">
                        <img src={logoHeaderImg} alt="" />
                    </a>
                    <nav className="menu">
                        <ul className="menu__list">
                            <li className="menu__list-item">
                                <a href="" className="menu__list-link">About us</a>
                            </li>
                            <li className="menu__list-item">
                                <a href="" className="menu__list-link">Courses</a>
                            </li>
                            <li className="menu__list-item">
                                <a href="" className="menu__list-link">Events</a>
                            </li>
                            <li className="menu__list-item">
                                <a href="" className="menu__list-link">Blog</a>
                            </li>
                            <li className="menu__list-item">
                                <a href="" className="menu__list-link">Contacts</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="header__btn-section">
                        <Button 
                            className='btn__consultation' 
                            btnText='Get consultation'
                        />
                        <Button 
                            className='btn-reg-log'
                            btnText='Login in / Register'
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;