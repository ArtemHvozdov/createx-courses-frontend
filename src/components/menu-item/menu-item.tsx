import Link from "../link/link.tsx";

interface MenuItemProps {
    className: string;
    href: string;
    linkText: string;
}

function MenuItem(props: MenuItemProps) {
    return (
        <li>
            <Link className={props.className} href={props.href} linkText={props.linkText}/>
        </li>
    )
}

export default MenuItem;
