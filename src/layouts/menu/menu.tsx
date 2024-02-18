import List from "../../components/list.tsx/list";
import MenuItem from "../../components/menu-item/menu-item";
import menuArray from "./../../data/menu.json";
import './menu.css'

function Menu() {

    // const menuItems: string[] = ['About us', 'Courses', 'Events', 'Blog', 'Contacts']

    return (
        <List className="menu__list">
            {
                menuArray.map(item => (
                        <MenuItem 
                            classNameLi="menu__list-item"
                            classNameLink="menu__list-link"
                            href="#"
                            menuItemText={item}
                        />
                    ))
            }
        </List>
    )
}

export default Menu;
