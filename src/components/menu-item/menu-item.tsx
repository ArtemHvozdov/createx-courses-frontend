import Link from "../link/link.tsx";

interface MenuItemProps {
    classNameLink: string;
    classNameLi: string;
    href: string;
    menuItemText: string;
}

function MenuItem(props: MenuItemProps) {
    return (
        <li className={props.classNameLi}>
            <Link className={props.classNameLink} href={props.href} linkText={props.menuItemText}/>
        </li>
    )
}

export default MenuItem;
