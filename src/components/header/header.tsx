import './heder.css';
import logoHeaderImg from './../../assets/logo-header.svg'
import Button from '../button/button';
import List from '../list.tsx/list';
import MenuItem from '../menu-item/menu-item';

function Header() {
    const menu: string[] = ['About us', 'Courses', 'Events', 'Blog', 'Contacts']

    const 
    return (
        <header className='header'>
            <div className='container'>
                <div className='header__inner'>
                    <a href="#" className="logo">
                        <img src={logoHeaderImg} alt="" />
                    </a>
                    <nav className="menu">
                        <List className="menu__list"
                            {menu.map(item: string => (
                                <MenuItem className='menu__list-item' />
                              ))}
                        />
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