import './heder.css';
import logoHeaderImg from './../../assets/logo-header.svg'
import Menu from '../../layouts/menu/menu';
import HeaderButtonsSection from './header-buttons-section/header-buttons-section';

function Header() {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header__inner'>
                    <a href="#" className="logo">
                        <img src={logoHeaderImg} alt="" />
                    </a>
                    <nav className="menu">
                        <Menu />
                    </nav>
                    <HeaderButtonsSection />
                </div>
            </div>
        </header>
    )
}

export default Header;